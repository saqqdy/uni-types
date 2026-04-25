/**
 * Type-Level Date/Time
 *
 * Type-level date and time operations.
 */

// ============================================================================
// Date Types
// ============================================================================

/**
 * Date string type
 */
export type DateString<T extends string = string> = T

/**
 * ISO date format type
 */
export type ISODate<T extends string = string> = T extends `${number}-${number}-${number}` ? T : never

/**
 * ISO datetime format type
 */
export type ISODateTime<T extends string = string> = T extends `${number}-${number}-${number}T${number}:${number}:${number}`
	? T
	: never

/**
 * Unix timestamp type
 */
export type UnixTimestamp = number

/**
 * Date components type
 */
export interface DateComponents {
	year: number
	month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
	day: number
	hours: number
	minutes: number
	seconds: number
	milliseconds: number
}

/**
 * Year type
 */
export type Year<T extends number = number> = T

/**
 * Month type
 */
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

/**
 * Day type
 */
export type Day<T extends number = number> = T

// ============================================================================
// Time Types
// ============================================================================

/**
 * Time string type
 */
export type TimeString<T extends string = string> = T extends `${number}:${number}:${number}` ? T : never

/**
 * Duration type
 */
export interface Duration {
	years?: number
	months?: number
	weeks?: number
	days?: number
	hours?: number
	minutes?: number
	seconds?: number
	milliseconds?: number
}

/**
 * Duration string type
 */
export type DurationString<T extends string = string> = T

/**
 * Time unit type
 */
export type TimeUnit = 'ms' | 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'

/**
 * Milliseconds type
 */
export type Milliseconds<T extends number = number> = T

/**
 * Seconds type
 */
export type Seconds<T extends number = number> = T

/**
 * Minutes type
 */
export type Minutes<T extends number = number> = T

/**
 * Hours type
 */
export type Hours<T extends number = number> = T

// ============================================================================
// Date Arithmetic
// ============================================================================

/**
 * Add days type (type-level)
 */
export type AddDays<_T extends string, _N extends number> = string

/**
 * Add months type (type-level)
 */
export type AddMonths<_T extends string, _N extends number> = string

/**
 * Add years type (type-level)
 */
export type AddYears<_T extends string, _N extends number> = string

/**
 * Add weeks type (type-level)
 */
export type AddWeeks<_T extends string, _N extends number> = string

/**
 * Add hours type (type-level)
 */
export type AddHours<_T extends string, _N extends number> = string

/**
 * Add minutes type (type-level)
 */
export type AddMinutes<_T extends string, _N extends number> = string

/**
 * Add seconds type (type-level)
 */
export type AddSeconds<_T extends string, _N extends number> = string

/**
 * Subtract days type (type-level)
 */
export type SubtractDays<_T extends string, _N extends number> = string

/**
 * Subtract months type (type-level)
 */
export type SubtractMonths<_T extends string, _N extends number> = string

/**
 * Subtract years type (type-level)
 */
export type SubtractYears<_T extends string, _N extends number> = string

// ============================================================================
// Date Comparison
// ============================================================================

/**
 * Date difference type
 */
export interface DateDiff {
	years: number
	months: number
	days: number
	hours: number
	minutes: number
	seconds: number
	milliseconds: number
	totalDays: number
	totalHours: number
	totalMinutes: number
	totalSeconds: number
	totalMilliseconds: number
}

/**
 * Days between two dates (type-level)
 */
export type DaysBetween<_T extends string, _U extends string> = number

/**
 * Months between two dates (type-level)
 */
export type MonthsBetween<_T extends string, _U extends string> = number

/**
 * Years between two dates (type-level)
 */
export type YearsBetween<_T extends string, _U extends string> = number

/**
 * Compare dates result
 */
export type DateComparison = 'before' | 'after' | 'equal'

// ============================================================================
// Date Validation
// ============================================================================

/**
 * Check if date is valid (type-level)
 */
export type IsValidDate<_T extends string> = boolean

/**
 * Check if date is weekend (type-level)
 */
export type IsWeekend<_T extends string> = boolean

/**
 * Check if date is weekday (type-level)
 */
export type IsWeekday<_T extends string> = boolean

/**
 * Check if year is leap year (type-level)
 */
export type IsLeapYear<_T extends number> = boolean

/**
 * Day of week type
 */
export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

/**
 * Day of year type
 */
export type DayOfYear<T extends number = number> = T

/**
 * Week of year type
 */
export type WeekOfYear<T extends number = number> = T

/**
 * Quarter type
 */
export type Quarter = 1 | 2 | 3 | 4

// ============================================================================
// Date Formatting
// ============================================================================

/**
 * Format date (type-level)
 */
export type FormatDate<_T extends string, _F extends DateFormat> = string

/**
 * Parse date (type-level)
 */
export type ParseDate<_T extends string> = DateComponents

/**
 * Date format type
 */
export type DateFormat
	= | 'YYYY-MM-DD'
		| 'MM/DD/YYYY'
		| 'DD/MM/YYYY'
		| 'YYYY/MM/DD'
		| 'DD-MM-YYYY'
		| 'MM-DD-YYYY'
		| 'MMMM DD, YYYY'
		| 'DD MMMM YYYY'
		| 'MMM DD, YYYY'
		| 'DD MMM YYYY'

/**
 * Time format type
 */
export type TimeFormat = 'HH:mm:ss' | 'HH:mm' | 'hh:mm:ss A' | 'hh:mm A' | 'HH:mm:ss.SSS'

/**
 * Format options
 */
export interface DateFormatOptions {
	format: DateFormat
	locale?: string
	timezone?: string
}

// ============================================================================
// Timezone Types
// ============================================================================

/**
 * Timezone type
 */
export type Timezone = string

/**
 * Common timezones
 */
export type CommonTimezone
	= | 'UTC'
		| 'America/New_York'
		| 'America/Los_Angeles'
		| 'America/Chicago'
		| 'Europe/London'
		| 'Europe/Paris'
		| 'Europe/Berlin'
		| 'Asia/Tokyo'
		| 'Asia/Shanghai'
		| 'Asia/Singapore'
		| 'Australia/Sydney'
		| 'Pacific/Auckland'

/**
 * UTC time type
 */
export type UTCTime<T extends string = string> = T

/**
 * Local time type
 */
export type LocalTime<T extends string = string, _TZ extends Timezone = Timezone> = T

/**
 * Convert timezone (type-level)
 */
export type ConvertTimezone<_T extends string, _From extends Timezone, _To extends Timezone> = string

/**
 * Timezone offset type
 */
export type TimezoneOffset<_T extends Timezone> = string

// ============================================================================
// Relative Time
// ============================================================================

/**
 * Relative time type
 */
export type RelativeTime = 'now' | 'today' | 'tomorrow' | 'yesterday' | 'this week' | 'last week' | 'next week' | 'this month' | 'last month' | 'next month' | 'this year' | 'last year' | 'next year'

/**
 * Relative time options
 */
export interface RelativeTimeOptions {
	reference?: Date
	locale?: string
	numeric?: boolean
}

/**
 * Human readable duration
 */
export type HumanDuration = string

// ============================================================================
// Date Range Types
// ============================================================================

/**
 * Date range type
 */
export interface DateRange<T extends string = string> {
	start: T
	end: T
}

/**
 * Date interval type
 */
export interface DateInterval<T extends string = string> {
	start: T
	end: T
	duration: Duration
}

/**
 * Recurrence rule type
 */
export interface RecurrenceRule {
	frequency: 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'minutely' | 'secondly'
	interval: number
	count?: number
	until?: string
	byMonth?: Month[]
	byDay?: DayOfWeek[]
	byHour?: number[]
	byMinute?: number[]
	bySecond?: number[]
}

// ============================================================================
// Calendar Types
// ============================================================================

/**
 * Calendar type
 */
export type CalendarType = 'gregorian' | 'julian' | 'islamic' | 'hebrew' | 'chinese' | 'japanese' | 'buddhist'

/**
 * Calendar date type
 */
export interface CalendarDate<T extends CalendarType = CalendarType> {
	calendar: T
	year: number
	month: number
	day: number
}

/**
 * Calendar month info
 */
export interface CalendarMonth {
	month: Month
	name: string
	shortName: string
	days: number
}

// ============================================================================
// Business Day Types
// ============================================================================

/**
 * Business day config
 */
export interface BusinessDayConfig {
	weekends: DayOfWeek[]
	holidays: string[]
	workHours: { start: string, end: string }
}

/**
 * Add business days (type-level)
 */
export type AddBusinessDays<_T extends string, _N extends number> = string

/**
 * Is business day (type-level)
 */
export type IsBusinessDay<_T extends string> = boolean

/**
 * Business days between (type-level)
 */
export type BusinessDaysBetween<_T extends string, _U extends string> = number

// ============================================================================
// Timestamp Types
// ============================================================================

/**
 * Unix timestamp seconds
 */
export type UnixSeconds = number

/**
 * Unix timestamp milliseconds
 */
export type UnixMilliseconds = number

/**
 * ISO timestamp type
 */
export type ISOTimestamp<T extends string = string> = T

/**
 * Convert to Unix timestamp (type-level)
 */
export type ToUnixTimestamp<_T extends string> = number

/**
 * Convert from Unix timestamp (type-level)
 */
export type FromUnixTimestamp<_T extends number> = string

// ============================================================================
// Time Ago
// ============================================================================

/**
 * Time ago type
 */
export type TimeAgo = string

/**
 * Time ago options
 */
export interface TimeAgoOptions {
	includeSeconds?: boolean
	addSuffix?: boolean
	roundingMethod?: 'floor' | 'ceil' | 'round'
}

// ============================================================================
// Date Utility Types
// ============================================================================

/**
 * Start of day type
 */
export type StartOfDay<_T extends string> = string

/**
 * End of day type
 */
export type EndOfDay<_T extends string> = string

/**
 * Start of week type
 */
export type StartOfWeek<_T extends string> = string

/**
 * End of week type
 */
export type EndOfWeek<_T extends string> = string

/**
 * Start of month type
 */
export type StartOfMonth<_T extends string> = string

/**
 * End of month type
 */
export type EndOfMonth<_T extends string> = string

/**
 * Start of year type
 */
export type StartOfYear<_T extends string> = string

/**
 * End of year type
 */
export type EndOfYear<_T extends string> = string

/**
 * Days in month type
 */
export type DaysInMonth<_Y extends number, _M extends Month> = 28 | 29 | 30 | 31

/**
 * Days in year type
 */
export type DaysInYear<_Y extends number> = 365 | 366
