'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

export type Scenario = 'conservative' | 'base' | 'aggressive'

interface ScenarioContextValue {
  scenario: Scenario
  setScenario: (scenario: Scenario) => void
  scenarioLabel: string
}

const ScenarioContext = createContext<ScenarioContextValue | undefined>(undefined)

const scenarioConfig: Record<Scenario, { label: string }> = {
  conservative: { label: 'Conservative' },
  base: { label: 'Base' },
  aggressive: { label: 'Aggressive' },
}

export function ScenarioProvider({ children }: { children: React.ReactNode }) {
  const [scenario, setScenarioState] = useState<Scenario>('base')

  const setScenario = useCallback((newScenario: Scenario) => {
    setScenarioState(newScenario)
  }, [])

  const value: ScenarioContextValue = {
    scenario,
    setScenario,
    scenarioLabel: scenarioConfig[scenario].label,
  }

  return (
    <ScenarioContext.Provider value={value}>
      {children}
    </ScenarioContext.Provider>
  )
}

export function useScenario() {
  const context = useContext(ScenarioContext)
  if (context === undefined) {
    throw new Error('useScenario must be used within a ScenarioProvider')
  }
  return context
}

// Helper hook to get scenario-adjusted value
export function useScenarioValue<T extends number>(values: { conservative: T; base: T; aggressive: T }): T {
  const { scenario } = useScenario()
  return values[scenario]
}
