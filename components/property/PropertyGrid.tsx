'use client'

import { cn } from '@/lib/utils'
import { PropertyCard } from './PropertyCard'
import type { Property } from '@/types/financial'

interface PropertyGridProps {
  properties: Property[]
  className?: string
  columns?: 2 | 3 | 4
}

export function PropertyGrid({ properties, className, columns = 2 }: PropertyGridProps) {
  return (
    <div
      className={cn(
        'grid gap-6',
        columns === 2 && 'md:grid-cols-2',
        columns === 3 && 'md:grid-cols-2 lg:grid-cols-3',
        columns === 4 && 'md:grid-cols-2 lg:grid-cols-4',
        className
      )}
    >
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
