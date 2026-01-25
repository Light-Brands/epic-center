'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Bed, Users, DollarSign, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge, StatusBadge } from '@/components/ui'
import { formatCurrency } from '@/lib/sheets'
import type { Property } from '@/types/financial'

interface PropertyCardProps {
  property: Property
  className?: string
  showMetrics?: boolean
}

export function PropertyCard({ property, className, showMetrics = true }: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className={cn(
        'group block bg-neutral-100 rounded-lg overflow-hidden shadow-card',
        'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
        {property.imageUrl ? (
          <Image
            src={property.imageUrl}
            alt={property.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
            <span className="font-heading text-2xl text-primary-600">{property.name.charAt(0)}</span>
          </div>
        )}

        {/* Status badge overlay */}
        <div className="absolute top-4 left-4">
          <StatusBadge status={property.status} />
        </div>

        {/* Score badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="font-accent text-sm font-semibold text-primary-800">
            {property.score}/100
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Header */}
        <div className="mb-3">
          <h3 className="font-heading text-xl text-neutral-900 group-hover:text-primary-600 transition-colors">
            {property.name}
          </h3>
          <div className="flex items-center gap-1.5 text-neutral-500 mt-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{property.location}</span>
          </div>
        </div>

        {/* Property type */}
        <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
          {property.propertyType}
        </p>

        {/* Metrics */}
        {showMetrics && (
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-neutral-500 mb-1">
                <Bed className="w-4 h-4" />
              </div>
              <p className="font-semibold text-neutral-900">{property.capacity.totalRooms}</p>
              <p className="text-xs text-neutral-500">Rooms</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-neutral-500 mb-1">
                <Users className="w-4 h-4" />
              </div>
              <p className="font-semibold text-neutral-900">{property.capacity.treatmentBeds.base}</p>
              <p className="text-xs text-neutral-500">Beds</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-neutral-500 mb-1">
                <DollarSign className="w-4 h-4" />
              </div>
              <p className="font-semibold text-neutral-900">{formatCurrency(property.acquisition.askingPrice)}</p>
              <p className="text-xs text-neutral-500">Price</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200">
          <span className="text-sm font-accent text-primary-600 uppercase tracking-wide">
            View Details
          </span>
          <ArrowRight className="w-4 h-4 text-primary-600 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

// Compact variant for comparison views
export function PropertyCardCompact({ property, className }: { property: Property; className?: string }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      className={cn(
        'group flex items-center gap-4 p-4 bg-neutral-100 rounded-lg',
        'transition-all duration-200 hover:bg-neutral-50 hover:shadow-card',
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-neutral-200 flex-shrink-0">
        {property.imageUrl ? (
          <Image
            src={property.imageUrl}
            alt={property.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
            <span className="font-heading text-lg text-primary-600">{property.name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-medium text-neutral-900 truncate group-hover:text-primary-600 transition-colors">
            {property.name}
          </h4>
          <StatusBadge status={property.status} />
        </div>
        <p className="text-sm text-neutral-500 truncate">{property.location}</p>
        <div className="flex items-center gap-4 mt-2 text-sm">
          <span className="text-neutral-600">{property.capacity.totalRooms} rooms</span>
          <span className="text-neutral-600">{formatCurrency(property.acquisition.askingPrice)}</span>
          <span className="font-medium text-primary-600">{property.score}/100</span>
        </div>
      </div>

      <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
    </Link>
  )
}
