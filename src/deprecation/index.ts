/**
 * Deprecation Management (v1.11.0)
 *
 * Deprecation warnings and legacy support utilities.
 */

// ============================================================================
// Deprecation Markers
// ============================================================================

/**
 * Mark a type as deprecated
 * @deprecated - Use NewType instead
 */
export type Deprecated<T, Message extends string = ''> = T & {
	__deprecated__: true
	__deprecation_message__: Message
}

/**
 * Mark a type as deprecated since a specific version
 */
export type DeprecatedSince<T, Version extends string> = T & {
	__deprecated_since__: Version
}

/**
 * Mark a type to be removed in a future version
 */
export type WillBeRemoved<T, Version extends string> = T & {
	__will_be_removed_in__: Version
}

/**
 * Replacement type marker
 */
export type Replacement<T, New> = T & {
	__replacement__: New
	__migrate_to__: New
}

/**
 * Deprecation info
 */
export interface DeprecationInfo {
	/** Deprecated type name */
	name: string
	/** Deprecation message */
	message: string
	/** Version when deprecated */
	since?: string
	/** Version when it will be removed */
	willBeRemoved?: string
	/** Replacement type */
	replacement?: string
	/** Migration guide URL */
	migrationGuide?: string
	/** Deprecation level */
	level: DeprecationLevel
}

/**
 * Deprecation level
 */
export type DeprecationLevel = 'info' | 'warning' | 'error' | 'critical'

// ============================================================================
// Legacy Support
// ============================================================================

/**
 * Legacy type wrapper for backwards compatibility
 */
export type Legacy<T> = T & {
	__legacy__: true
}

/**
 * Create an alias for a deprecated type
 */
export type LegacyAlias<T, New extends string> = T & {
	__legacy_alias__: New
}

/**
 * Backwards compatible type wrapper
 */
export type BackwardsCompatible<T, Old> = T & {
	__backwards_compatible_with__: Old
}

/**
 * Polyfill type
 */
export type Polyfill<T, Implementation> = T & {
	__polyfill__: Implementation
}

/**
 * Legacy API info
 */
export interface LegacyAPI {
	/** API name */
	name: string
	/** Original version */
	fromVersion: string
	/** Supported until version */
	supportedUntil?: string
	/** Replacement API */
	replacement?: string
	/** Compatibility shim available */
	shimAvailable?: boolean
}

// ============================================================================
// Warning Types
// ============================================================================

/**
 * Warning type
 */
export type Warning<T> = T & {
	__warning__: true
}

/**
 * Warning level
 */
export type WarningLevel = 'info' | 'warning' | 'error'

/**
 * Deprecation warning
 */
export interface DeprecationWarning<T> {
	/** Warning code */
	code: string
	/** Warning message */
	message: string
	/** Deprecated type */
	type: T
	/** Deprecation version */
	version?: string
	/** Suggested replacement */
	replacement?: string
	/** Warning level */
	level: WarningLevel
}

/**
 * Deprecation migration warning (v1.11.0)
 */
export interface DeprecationMigrationWarning<T> {
	/** Warning code */
	code: string
	/** Warning message */
	message: string
	/** Type being migrated */
	type: T
	/** Migration path */
	migrationPath?: string
	/** Breaking change flag */
	isBreaking?: boolean
	/** Suggested action */
	suggestion?: string
}

/**
 * Warning configuration
 */
export interface WarningConfig {
	/** Enable/disable warnings */
	enabled: boolean
	/** Minimum level to show */
	minLevel: WarningLevel
	/** Suppress specific codes */
	suppressCodes?: string[]
	/** Log handler */
	logHandler?: (warning: DeprecationWarning<unknown>) => void
}

// ============================================================================
// Version Gates
// ============================================================================

/**
 * Version gate - type only available between versions
 */
export type VersionGate<T, Min extends string, Max extends string> = T & {
	__min_version__: Min
	__max_version__: Max
}

/**
 * Mark a type as removed in a specific version
 */
export type RemovedIn<T, Version extends string> = T & {
	__removed_in__: Version
}

/**
 * Mark a type as introduced in a specific version
 */
export type IntroducedIn<T, Version extends string> = T & {
	__introduced_in__: Version
}

/**
 * Version-specific API
 */
export type VersionedAPI<T, V extends string> = T & {
	__version__: V
}

/**
 * Version range
 */
export interface VersionRange {
	/** Minimum version (inclusive) */
	min?: string
	/** Maximum version (exclusive) */
	max?: string
	/** Whether min is inclusive */
	minInclusive?: boolean
	/** Whether max is inclusive */
	maxInclusive?: boolean
}

/**
 * Version constraint
 */
export interface VersionConstraint {
	/** Version requirement string */
	requirement: string
	/** Constraint type */
	type: 'exact' | 'range' | 'gte' | 'lte' | 'gt' | 'lt'
}

// ============================================================================
// Sunset Utilities
// ============================================================================

/**
 * Sunset (end-of-life) type marker
 */
export type Sunset<T> = T & {
	__sunset__: true
}

/**
 * Sunset schedule
 */
export interface SunsetSchedule<T> {
	/** Type being sunset */
	type: T
	/** Announcement date */
	announced: Date
	/** Deprecation date */
	deprecated: Date
	/** Removal date */
	removed: Date
	/** Sunset phases */
	phases: SunsetPhase[]
}

/**
 * Sunset phase
 */
export interface SunsetPhase {
	/** Phase name */
	name: string
	/** Phase start date */
	startDate: Date
	/** Phase end date */
	endDate?: Date
	/** Phase description */
	description: string
	/** Warning level during phase */
	warningLevel: WarningLevel
}

/**
 * End-of-life info
 */
export interface EndOfLife<T> {
	/** Type reaching end-of-life */
	type: T
	/** EOL date */
	date: Date
	/** Reason for EOL */
	reason?: string
	/** Migration path */
	migrationPath?: string
}

/**
 * Sunset policy
 */
export interface SunsetPolicy {
	/** Policy name */
	name: string
	/** Deprecation notice period in days */
	noticePeriod: number
	/** Warning escalation schedule */
	escalationSchedule: SunsetPhase[]
	/** Minimum supported versions */
	minSupportedVersions: Record<string, string>
}

// ============================================================================
// Deprecation Utilities
// ============================================================================

/**
 * Deprecation status
 */
export type DeprecationStatus
	= | 'active'
	| 'deprecated'
	| 'warning'
	| 'critical'
	| 'removed'

/**
 * Deprecation tracker
 */
export interface DeprecationTracker {
	/** Deprecated items */
	items: Map<string, DeprecationInfo>
	/** Add deprecation */
	add: (name: string, info: DeprecationInfo) => void
	/** Get deprecation */
	get: (name: string) => DeprecationInfo | undefined
	/** Check if deprecated */
	isDeprecated: (name: string) => boolean
	/** Get all deprecated */
	getAll: () => DeprecationInfo[]
	/** Get by level */
	getByLevel: (level: DeprecationLevel) => DeprecationInfo[]
}

/**
 * Deprecation registry
 */
export interface DeprecationRegistry {
	/** Registry version */
	version: string
	/** Registered deprecations */
	deprecations: Record<string, DeprecationInfo>
	/** Last updated */
	lastUpdated: Date
	/** Registry URL */
	registryUrl?: string
}

/**
 * Deprecation check options
 */
export interface DeprecationCheckOptions {
	/** Check only (don't throw) */
	checkOnly?: boolean
	/** Include legacy types */
	includeLegacy?: boolean
	/** Filter by version */
	versionRange?: VersionRange
	/** Custom filter */
	filter?: (info: DeprecationInfo) => boolean
}

/**
 * Deprecation check result
 */
export interface DeprecationCheckResult {
	/** Has deprecations */
	hasDeprecations: boolean
	/** Deprecation count */
	count: number
	/** Deprecations found */
	deprecations: DeprecationInfo[]
	/** Warnings */
	warnings: string[]
	/** Errors */
	errors: string[]
}

/**
 * Migration suggestion
 */
export interface MigrationSuggestion {
	/** Deprecated type */
	from: string
	/** Replacement type */
	to: string
	/** Migration difficulty */
	difficulty: 'trivial' | 'simple' | 'moderate' | 'complex'
	/** Migration steps */
	steps: string[]
	/** Code example */
	codeExample?: string
	/** Documentation link */
	docs?: string
}

/**
 * Deprecation announcement
 */
export interface DeprecationAnnouncement {
	/** Announcement ID */
	id: string
	/** Announcement title */
	title: string
	/** Announcement date */
	date: Date
	/** Affected types */
	affectedTypes: string[]
	/** Deprecation details */
	details: DeprecationInfo[]
	/** Migration deadline */
	deadline?: Date
	/** Announcement URL */
	url?: string
}
