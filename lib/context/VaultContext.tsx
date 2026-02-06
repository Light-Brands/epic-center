'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

const VAULT_CODE = '8888'
const VAULT_SESSION_KEY = 'te_vault_unlocked'

interface VaultContextValue {
  isUnlocked: boolean
  unlock: () => void
  vaultCode: string
}

const VaultContext = createContext<VaultContextValue>({
  isUnlocked: false,
  unlock: () => {},
  vaultCode: VAULT_CODE,
})

export function VaultProvider({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(VAULT_SESSION_KEY) === '1') {
      setIsUnlocked(true)
    }
  }, [])

  const unlock = useCallback(() => {
    sessionStorage.setItem(VAULT_SESSION_KEY, '1')
    setIsUnlocked(true)
  }, [])

  return (
    <VaultContext.Provider value={{ isUnlocked, unlock, vaultCode: VAULT_CODE }}>
      {children}
    </VaultContext.Provider>
  )
}

export function useVault() {
  return useContext(VaultContext)
}
