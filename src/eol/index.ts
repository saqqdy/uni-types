/**
 * End-of-Life Planning
 *
 * Planning for v1.x end-of-life, including
 * sunset schedules and legacy support.
 */

// ============== EOL Types ==============

/**
 * EndOfLife - End-of-life marker type
 */
export type EndOfLife<T> = T & {
	/** EOL marker */
	readonly __eol__: true
	/** EOL date */
	readonly __eolDate__: string
	/** Replacement available */
	readonly __replacementAvailable__: boolean
}

/**
 * EOLSchedule - Schedule for end-of-life
 */
export interface EOLSchedule<T> {
	/** The type being scheduled */
	readonly _type: T
	/** Announcement date */
	readonly announcementDate: string
	/** Deprecation date */
	readonly deprecationDate: string
	/** EOL date */
	readonly eolDate: string
	/** Removal date */
	readonly removalDate: string
	/** Current phase */
	readonly currentPhase: EOLPhase
}

/**
 * EOLPhase - Phase of end-of-life
 */
export type EOLPhase = 'active' | 'deprecated' | 'eol-pending' | 'eol' | 'removed'

/**
 * EOLWarning - Warning about end-of-life
 */
export type EOLWarning<T> = T & {
	/** Warning marker */
	readonly __eolWarning__: true
	/** Warning level */
	readonly __warningLevel__: EOLWarningLevel
	/** Time remaining */
	readonly __timeRemaining__: string
	/** Recommended action */
	readonly __recommendedAction__: string
}

/**
 * EOLWarningLevel - Level of EOL warning
 */
export type EOLWarningLevel = 'info' | 'warning' | 'urgent' | 'critical'

/**
 * EOLMigration - Migration path for EOL types
 */
export interface EOLMigration<T, U> {
	/** Source (EOL) type */
	readonly from: T
	/** Target (replacement) type */
	readonly to: U
	/** Migration complexity */
	readonly complexity: EOLMigrationComplexity
	/** Is automatic */
	readonly automatic: boolean
	/** Migration guide URL */
	readonly guideUrl?: string
}

/**
 * EOLMigrationComplexity - Complexity of EOL migration
 */
export type EOLMigrationComplexity = 'trivial' | 'simple' | 'moderate' | 'complex' | 'rewrite'

// ============== Sunset Utilities ==============

/**
 * Sunset - Sunset marker type
 */
export type Sunset<T> = T & {
	/** Sunset marker */
	readonly __sunset__: true
	/** Sunset date */
	readonly __sunsetDate__: string
	/** Sunset reason */
	readonly __sunsetReason__: string
}

/**
 * SunsetSchedule - Schedule for sunset
 */
export interface SunsetSchedule<T> {
	/** The type being sunset */
	readonly _type: T
	/** Notification date */
	readonly notificationDate: string
	/** Grace period start */
	readonly gracePeriodStart: string
	/** Grace period end */
	readonly gracePeriodEnd: string
	/** Sunset effective date */
	readonly effectiveDate: string
	/** Current status */
	readonly status: SunsetStatus
}

/**
 * SunsetStatus - Status of sunset
 */
export type SunsetStatus = 'notified' | 'grace-period' | 'effective' | 'completed'

/**
 * SunsetWarning - Warning about sunset
 */
export type SunsetWarning<T> = T & {
	/** Sunset warning marker */
	readonly __sunsetWarning__: true
	/** Days until sunset */
	readonly __daysUntil__: number
	/** Recommended replacement */
	readonly __replacement__: string
}

/**
 * SunsetMigration - Migration for sunset types
 */
export interface SunsetMigration<T, U> {
	/** Sunset type */
	readonly from: T
	/** Replacement type */
	readonly to: U
	/** Migration steps */
	readonly steps: string[]
	/** Is seamless */
	readonly seamless: boolean
}

// ============== Legacy Support ==============

/**
 * LegacySupport - Legacy support marker
 */
export type LegacySupport<T> = T & {
	/** Legacy marker */
	readonly __legacy__: true
	/** Legacy since version */
	readonly __legacySince__: string
	/** Support level */
	readonly __supportLevel__: LegacySupportLevel
}

/**
 * LegacySupportLevel - Level of legacy support
 */
export type LegacySupportLevel = 'full' | 'limited' | 'security-only' | 'none'

/**
 * LegacyTimeline - Timeline for legacy support
 */
export interface LegacyTimeline<T> {
	/** The type with legacy support */
	readonly _type: T
	/** Support start date */
	readonly startDate: string
	/** Limited support date */
	readonly limitedDate: string
	/** Security-only date */
	readonly securityOnlyDate: string
	/** End of support date */
	readonly endOfSupportDate: string
	/** Current support level */
	readonly currentLevel: LegacySupportLevel
}

/**
 * LegacyMigration - Migration from legacy type
 */
export interface LegacyMigration<T, U> {
	/** Legacy type */
	readonly from: T
	/** Modern replacement */
	readonly to: U
	/** Migration complexity */
	readonly complexity: EOLMigrationComplexity
	/** Is backward compatible */
	readonly backwardCompatible: boolean
	/** Breaking changes */
	readonly breakingChanges: string[]
}
