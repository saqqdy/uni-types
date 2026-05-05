/**
 * Type Migration Utilities (v1.11.0)
 *
 * Tools to help users migrate from v1.x to v2.0.0.
 */

// ============================================================================
// Migration Helpers
// ============================================================================

/**
 * Migration status
 */
export type MigrationStatus = 'pending' | 'in_progress' | 'completed' | 'failed' | 'skipped'

/**
 * Migration result
 */
export interface MigrationResult<T> {
	/** Original type */
	original: T
	/** Migrated type */
	migrated: T
	/** Migration status */
	status: MigrationStatus
	/** List of changes made */
	changes: MigrationChange[]
	/** List of warnings */
	warnings: MigrationWarning[]
	/** List of errors */
	errors: MigrationError[]
}

/**
 * Migration change
 */
export interface MigrationChange {
	/** Path to the changed property */
	path: string
	/** Type of change */
	type: MigrationChangeType
	/** Old value */
	oldValue?: unknown
	/** New value */
	newValue?: unknown
	/** Description of the change */
	description: string
}

/**
 * Migration change type
 */
export type MigrationChangeType
	= | 'rename'
	| 'restructure'
	| 'add'
	| 'remove'
	| 'modify'
	| 'deprecate'
	| 'replace'

/**
 * Migration warning
 */
export interface MigrationWarning {
	/** Warning code */
	code: string
	/** Warning message */
	message: string
	/** Path to the affected property */
	path?: string
	/** Suggested fix */
	suggestion?: string
}

/**
 * Migration error
 */
export interface MigrationError {
	/** Error code */
	code: string
	/** Error message */
	message: string
	/** Path to the affected property */
	path?: string
	/** Suggested fix */
	suggestion?: string
}

/**
 * Migration map for tracking type migrations
 */
export type MigrationMap<T> = Map<keyof T, MigrationRule<T[keyof T]>>

/**
 * Migration rule
 */
export interface MigrationRule<T> {
	/** Rule name */
	name: string
	/** Rule description */
	description?: string
	/** Transformation function type */
	transform: (value: T) => T
	/** Condition for applying the rule */
	condition?: (value: T) => boolean
	/** Priority (higher = applied first) */
	priority?: number
	/** Whether this rule is breaking */
	breaking?: boolean
}

/**
 * Migrate type from v1 to v2
 * Applies all migration rules to transform the type
 */
export type MigrateToV2<T> = T extends infer U
	? U extends object
		? { [K in keyof U]: MigrateToV2<U[K]> }
		: U
	: never

/**
 * Migrate type from v2 to v1 (backwards compatibility)
 */
export type MigrateFromV1<T> = T extends infer U
	? U extends object
		? { [K in keyof U]: MigrateFromV1<U[K]> }
		: U
	: never

// ============================================================================
// Type Transformation
// ============================================================================

/**
 * Transformation rule
 */
export interface TransformRule<T, U = T> {
	/** Source pattern */
	from: T
	/** Target pattern */
	to: U
	/** Transformation function */
	transform?: (value: T) => U
}

/**
 * Transform type according to rules
 */
export type TransformType<T, _Rules> = T

/**
 * Rename type properties
 */
export type RenameType<T, From extends keyof T, To extends string> = Omit<T, From> & {
	[K in To]: T[From]
}

/**
 * Restructure type according to schema
 */
export type RestructureType<T, Schema> = {
	[K in keyof Schema]: K extends keyof T ? T[K] : Schema[K]
}

/**
 * Flatten nested namespace
 */
export type FlattenNamespace<T> = T extends object
	? {
			[K in keyof T as K extends string
				? T[K] extends object
					? `${K}.${keyof T[K] & string}`
					: K
				: never]: T[K]
		}
	: T

// ============================================================================
// Compatibility Layer
// ============================================================================

/**
 * Compatibility mode
 */
export type CompatMode = 'v1' | 'v2' | 'both'

/**
 * v1 compatibility wrapper
 */
export type CompatV1<T> = T & {
	__compat_v1__: true
}

/**
 * v2 compatibility wrapper
 */
export type CompatV2<T> = T & {
	__compat_v2__: true
}

/**
 * Backport features to older version
 */
export type Backport<T, Version extends string> = T & {
	__backported_from__: Version
}

/**
 * Forward port features from older version
 */
export type ForwardPort<T, Version extends string> = T & {
	__forwardported_from__: Version
}

/**
 * Version compatibility info
 */
export interface VersionCompat {
	/** Minimum compatible version */
	minVersion: string
	/** Maximum compatible version */
	maxVersion?: string
	/** Deprecated versions */
	deprecated?: string[]
	/** Removed in versions */
	removedIn?: string[]
}

// ============================================================================
// Migration Validation
// ============================================================================

/**
 * Validate migration between types
 */
export type ValidateMigration<T, U> = T extends U ? (U extends T ? true : false) : false

/**
 * Migration diff between two types
 */
export interface MigrationDiff<T, U> {
	/** Properties only in T */
	onlyInSource: Exclude<keyof T, keyof U>
	/** Properties only in U */
	onlyInTarget: Exclude<keyof U, keyof T>
	/** Properties in both but with different types */
	different: {
		[K in keyof T & keyof U]: T[K] extends U[K] ? (U[K] extends T[K] ? never : K) : K
	}[keyof T & keyof U]
}

/**
 * Breaking changes between types
 */
export interface BreakingChanges<T, U> {
	/** Removed properties */
	removed: Exclude<keyof T, keyof U>
	/** Changed properties (breaking) */
	changed: {
		[K in keyof T & keyof U]: T[K] extends U[K] ? never : K
	}[keyof T & keyof U]
	/** Required properties added */
	addedRequired: {
		[K in keyof U]: K extends keyof T ? never : undefined extends U[K] ? never : K
	}[keyof U]
}

/**
 * Migration report
 */
export interface MigrationReport {
	/** Source type name */
	sourceType: string
	/** Target type name */
	targetType: string
	/** Migration status */
	status: MigrationStatus
	/** Breaking changes detected */
	breakingChanges: string[]
	/** Non-breaking changes */
	nonBreakingChanges: string[]
	/** Warnings */
	warnings: string[]
	/** Migration complexity */
	complexity: MigrationComplexity
	/** Estimated migration time (in minutes) */
	estimatedTime: number
	/** Migration suggestions */
	suggestions: string[]
}

/**
 * Migration complexity level
 */
export type MigrationComplexity = 'trivial' | 'simple' | 'moderate' | 'complex' | 'breaking'

// ============================================================================
// Codemod Types
// ============================================================================

/**
 * Codemod definition
 */
export interface Codemod<T> {
	/** Codemod name */
	name: string
	/** Codemod version */
	version: string
	/** Description */
	description: string
	/** Codemod rules */
	rules: CodemodRule<T>[]
	/** Dependencies */
	dependencies?: string[]
	/** Whether to run in dry-run mode first */
	dryRun?: boolean
}

/**
 * Codemod execution result
 */
export interface CodemodResult<_T> {
	/** Codemod name */
	codemod: string
	/** Execution status */
	status: 'success' | 'partial' | 'failed'
	/** Files processed */
	filesProcessed: number
	/** Files modified */
	filesModified: number
	/** Changes applied */
	changes: CodemodChange[]
	/** Errors encountered */
	errors: CodemodError[]
	/** Execution time in ms */
	executionTime: number
}

/**
 * Codemod rule
 */
export interface CodemodRule<T> {
	/** Rule name */
	name: string
	/** Pattern to match */
	pattern: string | RegExp
	/** Replacement */
	replacement: string | ((match: string) => string)
	/** File glob pattern */
	files?: string[]
	/** Condition for applying */
	condition?: (context: CodemodContext<T>) => boolean
}

/**
 * Codemod execution context
 */
export interface CodemodContext<T> {
	/** Current file path */
	filePath: string
	/** Current content */
	content: string
	/** Match information */
	match?: RegExpMatchArray
	/** Custom data */
	data?: T
}

/**
 * Codemod change
 */
export interface CodemodChange {
	/** File path */
	filePath: string
	/** Line number */
	line: number
	/** Column number */
	column: number
	/** Original text */
	original: string
	/** Replacement text */
	replacement: string
	/** Rule that applied the change */
	rule: string
}

/**
 * Codemod error
 */
export interface CodemodError {
	/** Error code */
	code: string
	/** Error message */
	message: string
	/** File path */
	filePath?: string
	/** Line number */
	line?: number
	/** Stack trace */
	stack?: string
}

/**
 * Apply codemod to type
 */
export type ApplyCodemod<T, _R extends CodemodRule<T>> = T

// ============================================================================
// Migration Utilities
// ============================================================================

/**
 * Migration step
 */
export interface MigrationStep<T> {
	/** Step number */
	step: number
	/** Step name */
	name: string
	/** Step description */
	description: string
	/** Step action */
	action: (input: T) => T
	/** Whether this step is required */
	required: boolean
	/** Estimated time in minutes */
	estimatedTime: number
}

/**
 * Migration path from one type to another
 */
export type MigrationPath<T, _U> = MigrationStep<T>[]

/**
 * Migration configuration
 */
export interface MigrationConfig {
	/** Source version */
	fromVersion: string
	/** Target version */
	toVersion: string
	/** Whether to continue on errors */
	continueOnError: boolean
	/** Whether to dry run first */
	dryRun: boolean
	/** Custom migration rules */
	customRules?: MigrationRule<unknown>[]
	/** Exclude patterns */
	exclude?: string[]
	/** Include patterns */
	include?: string[]
}

/**
 * Migration context
 */
export interface MigrationContext<T> {
	/** Configuration */
	config: MigrationConfig
	/** Current state */
	state: MigrationState
	/** Progress */
	progress: MigrationProgress
	/** Custom data */
	data?: T
}

/**
 * Migration state
 */
export interface MigrationState {
	/** Current step */
	currentStep: number
	/** Total steps */
	totalSteps: number
	/** Started at */
	startedAt?: Date
	/** Completed at */
	completedAt?: Date
	/** Status */
	status: MigrationStatus
}

/**
 * Migration progress
 */
export interface MigrationProgress {
	/** Percentage complete (0-100) */
	percentage: number
	/** Items processed */
	processed: number
	/** Total items */
	total: number
	/** Items remaining */
	remaining: number
	/** Time elapsed in ms */
	elapsed: number
	/** Estimated time remaining in ms */
	estimatedRemaining: number
}

/**
 * Migration history record
 */
export interface MigrationHistory {
	/** Migration ID */
	id: string
	/** Migration name */
	name: string
	/** Migration version */
	version: string
	/** Timestamp */
	timestamp: Date
	/** Status */
	status: MigrationStatus
	/** Changes made */
	changes: number
	/** Errors encountered */
	errors: number
	/** Duration in ms */
	duration: number
}

/**
 * Create migration map helper
 */
export type CreateMigrationMap<T> = {
	[K in keyof T]: MigrationRule<T[K]>
}

/**
 * Migration pipeline
 */
export type MigrationPipeline<T> = MigrationStep<T>[]

/**
 * Compose multiple migrations
 */
export type ComposeMigrations<T, _U, _V> = (
	input: T,
	migration1: MigrationStep<T>[],
	migration2: MigrationStep<_U>[],
) => _V
