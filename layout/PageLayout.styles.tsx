'use client'

import React from 'react'

/**
 * PageLayout Style Guide - Reusable component patterns
 * Use these patterns for consistent styling across layouts
 */

/**
 * Card Component - Standard card styling
 * Used in grids and sections for content organization
 */
export function StyledCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`
        rounded-lg
        border border-border
        bg-card
        p-6
        hover:shadow-md
        transition-shadow
        duration-200
        ${className}
      `}
    >
      {children}
    </div>
  )
}

/**
 * Card Header - For cards with title + description
 */
export function CardHeader({
  title,
  description,
  className = '',
}: {
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={`mb-4 ${className}`}>
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      {description && (
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      )}
    </div>
  )
}

/**
 * Section Title - H2 styled title for page sections
 */
export function SectionTitle({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={`
        text-2xl sm:text-3xl
        font-bold
        text-foreground
        tracking-tight
        ${className}
      `}
    >
      {children}
    </h2>
  )
}

/**
 * Section Description - Subtitle text under section titles
 */
export function SectionDescription({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={`
        text-base sm:text-lg
        text-muted-foreground
        leading-relaxed
        ${className}
      `}
    >
      {children}
    </p>
  )
}

/**
 * Badge - Status/category indicator
 */
export function Badge({
  children,
  variant = 'default',
  className = '',
}: {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  className?: string
}) {
  const variants = {
    default:
      'bg-secondary text-secondary-foreground',
    primary:
      'bg-primary text-primary-foreground',
    success:
      'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    warning:
      'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100',
    error:
      'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100',
  }

  return (
    <span
      className={`
        inline-flex
        items-center
        px-3 py-1
        rounded-full
        text-xs font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}

/**
 * Divider - Visual separator
 */
export function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`h-px bg-border ${className}`} />
  )
}

/**
 * Alert Box - Information/warning/error messages
 */
export function Alert({
  children,
  variant = 'info',
  title,
  className = '',
}: {
  children: React.ReactNode
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  className?: string
}) {
  const variants = {
    info: 'border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-100',
    success:
      'border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950 text-green-900 dark:text-green-100',
    warning:
      'border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950 text-amber-900 dark:text-amber-100',
    error:
      'border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950 text-red-900 dark:text-red-100',
  }

  return (
    <div
      className={`
        rounded-lg
        border
        p-4
        ${variants[variant]}
        ${className}
      `}
    >
      {title && <h4 className="font-semibold mb-1">{title}</h4>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}

/**
 * List - Styled list for structured content
 */
export function StyledList({
  items,
  className = '',
}: {
  items: React.ReactNode[]
  className?: string
}) {
  return (
    <ul
      className={`
        space-y-2
        list-disc
        list-inside
        text-foreground
        ${className}
      `}
    >
      {items.map((item, idx) => (
        <li key={idx} className="text-muted-foreground">
          {item}
        </li>
      ))}
    </ul>
  )
}

/**
 * Stat Box - Display metric/number
 */
export function StatBox({
  label,
  value,
  unit,
  trend,
  className = '',
}: {
  label: string
  value: string | number
  unit?: string
  trend?: { direction: 'up' | 'down'; percentage: number }
  className?: string
}) {
  return (
    <div
      className={`
        rounded-lg
        border border-border
        bg-card
        p-6
        ${className}
      `}
    >
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-card-foreground">{value}</span>
        {unit && (
          <span className="text-sm text-muted-foreground">{unit}</span>
        )}
      </div>
      {trend && (
        <p
          className={`
            mt-2 text-sm font-medium
            ${trend.direction === 'up'
              ? 'text-green-600 dark:text-green-400'
              : 'text-red-600 dark:text-red-400'
            }
          `}
        >
          {trend.direction === 'up' ? '↑' : '↓'} {trend.percentage}%
        </p>
      )}
    </div>
  )
}

/**
 * Input Field - Form input styling
 */
export function StyledInput({
  label,
  error,
  className = '',
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-foreground mb-1">
          {label}
        </label>
      )}
      <input
        className={`
          w-full
          px-3 py-2
          rounded-md
          border
          bg-background
          text-foreground
          placeholder-muted-foreground
          transition-colors
          focus:outline-none
          focus:ring-2
          focus:ring-primary
          ${error ? 'border-red-500' : 'border-border'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}

/**
 * Button Styles - Common button variants
 */
export const buttonStyles = {
  primary:
    'px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background',
  secondary:
    'px-4 py-2 border border-border bg-background text-foreground rounded-md hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary',
  ghost:
    'px-4 py-2 text-foreground rounded-md hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary',
  danger:
    'px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600',
} as const

export type ButtonStyleKey = keyof typeof buttonStyles
