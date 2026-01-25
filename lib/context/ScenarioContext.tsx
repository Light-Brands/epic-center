'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

export type Scenario = 'conservative' | 'base' | 'aggressive'

interface ScenarioContextValue {
  scenario: Scenario
  setScenario: (scenario: Scenario) => void
  scenarioLabel: string
  scenarioMultiplier: number
}

const ScenarioContext = createContext<ScenarioContextValue | undefined>(undefined)

const scenarioConfig: Record<Scenario, { label: string; multiplier: number }> = {
  conservative: { label: 'Conservative', multiplier: 0.75 },
  base: { label: 'Base', multiplier: 1.0 },
  aggressive: { label: 'Aggressive', multiplier: 1.25 },
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
    scenarioMultiplier: scenarioConfig[scenario].multiplier,
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
