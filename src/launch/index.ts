/**
 * v2.0.0 Launch Preparation
 *
 * Final preparation for v2.0.0 launch,
 * including readiness checks, validation, and communication.
 */

// ============== Launch Preparation ==============

/**
 * LaunchReady - Marks a type as ready for v2.0.0 launch
 */
export type LaunchReady<T> = T & {
	/** Launch ready marker */
	readonly __launchReady__: true
	/** Launch version */
	readonly __launchVersion__: string
	/** All checks passed */
	readonly __allChecksPassed__: boolean
}

/**
 * LaunchChecklist - Checklist for launch readiness
 */
export interface LaunchChecklist<T> {
	/** The type being checked */
	readonly _type: T
	/** Checklist items */
	readonly items: LaunchChecklistItem[]
	/** Completion percentage */
	readonly completionPercentage: number
	/** All required items complete */
	readonly allRequiredComplete: boolean
}

/**
 * LaunchChecklistItem - An item in the launch checklist
 */
export interface LaunchChecklistItem {
	/** Item name */
	readonly name: string
	/** Item category */
	readonly category: LaunchCategory
	/** Is completed */
	readonly completed: boolean
	/** Is required */
	readonly required: boolean
	/** Blocking issues */
	readonly blockingIssues: string[]
}

/**
 * LaunchCategory - Category of launch checklist item
 */
export type LaunchCategory
	= | 'documentation'
	| 'testing'
	| 'performance'
	| 'migration'
	| 'compatibility'
	| 'security'
	| 'communication'
	| 'infrastructure'

/**
 * LaunchCriteria - Criteria for launch readiness
 */
export interface LaunchCriteria<T> {
	/** The type being evaluated */
	readonly _type: T
	/** Criteria list */
	readonly criteria: Criterion[]
	/** All criteria met */
	readonly allMet: boolean
	/** Blocking criteria count */
	readonly blockingCount: number
}

/**
 * Criterion - A launch criterion
 */
export interface Criterion {
	/** Criterion name */
	readonly name: string
	/** Criterion description */
	readonly description: string
	/** Is met */
	readonly met: boolean
	/** Is blocking */
	readonly blocking: boolean
	/** Category */
	readonly category: LaunchCategory
}

/**
 * LaunchStatusFinal - Status of launch preparation
 */
export interface LaunchStatusFinal<T> {
	/** The type being launched */
	readonly _type: T
	/** Overall status */
	readonly status: LaunchReadinessStatus
	/** Readiness score (0-100) */
	readonly readinessScore: number
	/** Last evaluated */
	readonly lastEvaluated: string
}

/**
 * LaunchReadinessStatus - Status of launch readiness
 */
export type LaunchReadinessStatus = 'not-ready' | 'preparing' | 'ready' | 'launched'

// ============== Launch Validation ==============

/**
 * ValidateLaunch - Validate launch readiness
 */
export interface ValidateLaunch<T> {
	/** The type being validated */
	readonly _type: T
	/** Validation checks */
	readonly checks: LaunchValidationCheck[]
	/** Overall result */
	readonly result: LaunchValidationResult
}

/**
 * LaunchValidationCheck - A check in launch validation
 */
export interface LaunchValidationCheck {
	/** Check name */
	readonly name: string
	/** Check category */
	readonly category: LaunchCategory
	/** Check result */
	readonly result: 'pass' | 'fail' | 'warning'
	/** Check details */
	readonly details: string
}

/**
 * LaunchValidationResult - Result of launch validation
 */
export type LaunchValidationResult = 'pass' | 'fail' | 'conditional-pass'

/**
 * LaunchValidation - Launch validation report
 */
export interface LaunchValidationFinal<T> {
	/** The type validated */
	readonly _type: T
	/** Validation timestamp */
	readonly timestamp: string
	/** Validation checks */
	readonly checks: LaunchValidationCheck[]
	/** Overall result */
	readonly result: LaunchValidationResult
	/** Recommendations */
	readonly recommendations: string[]
}

/**
 * LaunchReport - Report on launch status
 */
export interface LaunchReport<T> {
	/** The type reported */
	readonly _type: T
	/** Report date */
	readonly date: string
	/** Readiness score */
	readonly readinessScore: number
	/** Total checks */
	readonly totalChecks: number
	/** Passed checks */
	readonly passedChecks: number
	/** Failed checks */
	readonly failedChecks: number
	/** Warning checks */
	readonly warningChecks: number
	/** Summary */
	readonly summary: string
}

// ============== Launch Communication ==============

/**
 * LaunchAnnouncement - Launch announcement type
 */
export interface LaunchAnnouncement<T> {
	/** The type being announced */
	readonly _type: T
	/** Announcement title */
	readonly title: string
	/** Announcement content */
	readonly content: string
	/** Announcement date */
	readonly date: string
	/** Audience */
	readonly audience: AnnouncementAudience
}

/**
 * AnnouncementAudience - Target audience for announcement
 */
export type AnnouncementAudience = 'all' | 'maintainers' | 'contributors' | 'users' | 'enterprise'

/**
 * LaunchNotes - Release notes for the launch
 */
export interface LaunchNotes {
	/** Version */
	readonly version: string
	/** Release date */
	readonly releaseDate: string
	/** Highlights */
	readonly highlights: string[]
	/** Breaking changes */
	readonly breakingChanges: string[]
	/** New features */
	readonly newFeatures: string[]
	/** Bug fixes */
	readonly bugFixes: string[]
	/** Migration notes */
	readonly migrationNotes: string[]
}

/**
 * LaunchTimeline - Timeline for launch
 */
export interface LaunchTimeline {
	/** Announcement date */
	readonly announcementDate: string
	/** Beta release date */
	readonly betaDate: string
	/** RC release date */
	readonly rcDate: string
	/** Stable release date */
	readonly stableDate: string
	/** Current phase */
	readonly currentPhase: LaunchPhase
}

/**
 * LaunchPhase - Phase of the launch
 */
export type LaunchPhase = 'planning' | 'alpha' | 'beta' | 'rc' | 'stable' | 'post-launch'
