'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

const VAULT_CODE = '8888'
const VAULT_SESSION_KEY = 'te_vault_unlocked'
const VAULT_LOCKOUT_KEY = 'te_vault_lockout'

const MAX_ATTEMPTS = 3
const LOCKOUT_5_MIN = 5 * 60 * 1000
const LOCKOUT_5_DAYS = 5 * 24 * 60 * 60 * 1000

interface LockoutData {
  attempts: number
  lockedUntil: number | null
  level: number // 0 = initial, 1 = had 5-min lockout, 2 = 5-day lockout
}

const DEFAULT_LOCKOUT: LockoutData = { attempts: 0, lockedUntil: null, level: 0 }

function loadLockout(): LockoutData {
  try {
    const raw = localStorage.getItem(VAULT_LOCKOUT_KEY)
    if (!raw) return DEFAULT_LOCKOUT
    return JSON.parse(raw)
  } catch {
    return DEFAULT_LOCKOUT
  }
}

function saveLockout(data: LockoutData) {
  localStorage.setItem(VAULT_LOCKOUT_KEY, JSON.stringify(data))
}

interface VaultContextValue {
  isUnlocked: boolean
  unlock: () => void
  vaultCode: string
  lockoutEndTime: number | null
  lockoutLevel: number
  failedAttempts: number
  recordFailedAttempt: () => void
}

const VaultContext = createContext<VaultContextValue>({
  isUnlocked: false,
  unlock: () => {},
  vaultCode: VAULT_CODE,
  lockoutEndTime: null,
  lockoutLevel: 0,
  failedAttempts: 0,
  recordFailedAttempt: () => {},
})

export function VaultProvider({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [lockout, setLockout] = useState<LockoutData>(DEFAULT_LOCKOUT)

  useEffect(() => {
    if (sessionStorage.getItem(VAULT_SESSION_KEY) === '1') {
      setIsUnlocked(true)
    }
    const stored = loadLockout()
    if (stored.lockedUntil && Date.now() >= stored.lockedUntil) {
      // Lockout expired — clear timer but preserve level
      const updated = { attempts: 0, lockedUntil: null, level: stored.level }
      saveLockout(updated)
      setLockout(updated)
    } else {
      setLockout(stored)
    }
  }, [])

  const unlock = useCallback(() => {
    sessionStorage.setItem(VAULT_SESSION_KEY, '1')
    setIsUnlocked(true)
    localStorage.removeItem(VAULT_LOCKOUT_KEY)
    setLockout(DEFAULT_LOCKOUT)
  }, [])

  const recordFailedAttempt = useCallback(() => {
    setLockout(prev => {
      const newAttempts = prev.attempts + 1
      let updated: LockoutData

      if (prev.level >= 1) {
        // Already served a 5-min lockout — escalate to 5 days
        updated = { attempts: newAttempts, lockedUntil: Date.now() + LOCKOUT_5_DAYS, level: 2 }
      } else if (newAttempts >= MAX_ATTEMPTS) {
        // 3 failures — lock for 5 minutes
        updated = { attempts: newAttempts, lockedUntil: Date.now() + LOCKOUT_5_MIN, level: 1 }
      } else {
        updated = { ...prev, attempts: newAttempts }
      }

      saveLockout(updated)
      return updated
    })
  }, [])

  return (
    <VaultContext.Provider value={{
      isUnlocked,
      unlock,
      vaultCode: VAULT_CODE,
      lockoutEndTime: lockout.lockedUntil,
      lockoutLevel: lockout.level,
      failedAttempts: lockout.attempts,
      recordFailedAttempt,
    }}>
      {children}
    </VaultContext.Provider>
  )
}

export function useVault() {
  return useContext(VaultContext)
}
