'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpDown, ArrowUp, ArrowDown, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { StatusBadge } from '@/components/ui'
import { formatCurrency, formatCurrencyFull } from '@/lib/sheets'
import { useScenario } from '@/lib/context/ScenarioContext'
import type { Property } from '@/types/financial'

type SortKey = 'name' | 'score' | 'price' | 'rooms' | 'beds'
type SortOrder = 'asc' | 'desc'

interface ComparisonMatrixProps {
  properties: Property[]
  className?: string
}

export function ComparisonMatrix({ properties, className }: ComparisonMatrixProps) {
  const { scenario } = useScenario()
  const [sortKey, setSortKey] = useState<SortKey>('score')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder('desc')
    }
  }

  const sortedProperties = [...properties].sort((a, b) => {
    let aValue: number | string
    let bValue: number | string

    switch (sortKey) {
      case 'name':
        aValue = a.name
        bValue = b.name
        break
      case 'score':
        aValue = a.score
        bValue = b.score
        break
      case 'price':
        aValue = a.acquisition.askingPrice
        bValue = b.acquisition.askingPrice
        break
      case 'rooms':
        aValue = a.capacity.totalRooms
        bValue = b.capacity.totalRooms
        break
      case 'beds':
        aValue = a.capacity.treatmentBeds[scenario]
        bValue = b.capacity.treatmentBeds[scenario]
        break
      default:
        return 0
    }

    if (typeof aValue === 'string') {
      return sortOrder === 'asc'
        ? aValue.localeCompare(bValue as string)
        : (bValue as string).localeCompare(aValue)
    }

    return sortOrder === 'asc' ? aValue - (bValue as number) : (bValue as number) - aValue
  })

  const SortHeader = ({ label, sortKeyValue }: { label: string; sortKeyValue: SortKey }) => (
    <button
      onClick={() => handleSort(sortKeyValue)}
      className={cn(
        'flex items-center gap-1 font-accent text-xs uppercase tracking-wide',
        'hover:text-primary-600 transition-colors',
        sortKey === sortKeyValue ? 'text-primary-800' : 'text-neutral-500'
      )}
    >
      {label}
      {sortKey === sortKeyValue ? (
        sortOrder === 'asc' ? (
          <ArrowUp className="w-3 h-3" />
        ) : (
          <ArrowDown className="w-3 h-3" />
        )
      ) : (
        <ArrowUpDown className="w-3 h-3 opacity-50" />
      )}
    </button>
  )

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b-2 border-neutral-200">
            <th className="text-left py-4 pr-4">
              <SortHeader label="Property" sortKeyValue="name" />
            </th>
            <th className="text-center py-4 px-4">
              <span className="font-accent text-xs uppercase tracking-wide text-neutral-500">Status</span>
            </th>
            <th className="text-center py-4 px-4">
              <SortHeader label="Score" sortKeyValue="score" />
            </th>
            <th className="text-right py-4 px-4">
              <SortHeader label="Price" sortKeyValue="price" />
            </th>
            <th className="text-center py-4 px-4">
              <SortHeader label="Rooms" sortKeyValue="rooms" />
            </th>
            <th className="text-center py-4 px-4">
              <SortHeader label="Beds" sortKeyValue="beds" />
            </th>
            <th className="text-right py-4 pl-4">
              <span className="font-accent text-xs uppercase tracking-wide text-neutral-500">$/Room</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProperties.map((property, index) => {
            const pricePerRoom = Math.round(property.acquisition.askingPrice / property.capacity.totalRooms)

            return (
              <tr
                key={property.id}
                className={cn(
                  'border-b border-neutral-200 transition-colors hover:bg-neutral-50',
                  index === sortedProperties.length - 1 && 'border-b-0'
                )}
              >
                <td className="py-4 pr-4">
                  <Link
                    href={`/properties/${property.id}`}
                    className="group flex items-center gap-2"
                  >
                    <div>
                      <p className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
                        {property.name}
                      </p>
                      <p className="text-sm text-neutral-500">{property.location}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </td>
                <td className="text-center py-4 px-4">
                  <StatusBadge status={property.status} />
                </td>
                <td className="text-center py-4 px-4">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-16 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          'h-full rounded-full',
                          property.score >= 75 ? 'bg-success-500' :
                          property.score >= 70 ? 'bg-warning-500' : 'bg-error-500'
                        )}
                        style={{ width: `${property.score}%` }}
                      />
                    </div>
                    <span className="font-semibold text-neutral-900 w-8">{property.score}</span>
                  </div>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="font-semibold text-neutral-900">
                    {formatCurrency(property.acquisition.askingPrice)}
                  </span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-neutral-700">{property.capacity.totalRooms}</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-neutral-700">{property.capacity.treatmentBeds[scenario]}</span>
                </td>
                <td className="text-right py-4 pl-4">
                  <span className="text-neutral-600">{formatCurrencyFull(pricePerRoom)}</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-neutral-200 text-sm">
        <span className="text-neutral-500">Score:</span>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-success-500" />
          <span className="text-neutral-600">75+ Shortlist</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-warning-500" />
          <span className="text-neutral-600">70-74 Hold</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-error-500" />
          <span className="text-neutral-600">&lt;70 Pass</span>
        </div>
      </div>
    </div>
  )
}
