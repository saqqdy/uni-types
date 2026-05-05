/**
 * Breaking Change Detection (v1.11.0)
 *
 * Utilities to detect and report breaking changes between type versions.
 */

// ============================================================================
// Breaking Change Detection
// ============================================================================

/**
 * Detect breaking changes between two types
 */
export interface DetectBreakingChanges<T, _U> {
	removed: Set<keyof T & string>
	added: Set<keyof _U & string>
	changed: Map<string, { from: T[keyof T], to: _U[keyof _U] }>
}

/**
 * Breaking change report
 */
export interface BreakingChangeReport<_T = unknown> {
	/** Report ID */
	id: string
	/** Source type */
	sourceType: string
	/** Target type */
	targetType: string
	/** Breaking changes detected */
	breakingChanges: BreakingChange[]
	/** Non-breaking changes */
	nonBreakingChanges: Change[]
	/** Report timestamp */
	timestamp: Date
	/** Summary */
	summary: BreakingChangeSummary
}

/**
 * Breaking change
 */
export interface BreakingChange {
	/** Change ID */
	id: string
	/** Change type */
	type: BreakingChangeType
	/** Severity */
	severity: BreakingChangeSeverity
	/** Location */
	path: string
	/** Description */
	description: string
	/** Old value */
	oldValue?: unknown
	/** New value */
	newValue?: unknown
	/** Migration path */
	migrationPath?: string
	/** Code example */
	codeExample?: string
}

/**
 * Breaking change type
 */
export type BreakingChangeType
	= | 'removed'
	| 'renamed'
	| 'restructured'
	| 'behavior'
	| 'signature'
	| 'nullability'
	| 'optionality'
	| 'constraint'
	| 'generic'
	| 'inheritance'

/**
 * Breaking change severity
 */
export type BreakingChangeSeverity = 'major' | 'minor' | 'patch'

/**
 * Breaking change summary
 */
export interface BreakingChangeSummary {
	/** Total changes */
	totalChanges: number
	/** Major changes */
	majorChanges: number
	/** Minor changes */
	minorChanges: number
	/** Patch changes */
	patchChanges: number
	/** Impact score (0-100) */
	impactScore: number
	/** Estimated migration effort */
	migrationEffort: MigrationEffort
}

/**
 * Migration effort
 */
export type MigrationEffort = 'trivial' | 'low' | 'medium' | 'high' | 'extreme'

// ============================================================================
// API Diff
// ============================================================================

/**
 * API diff between two types
 */
export interface APIDiff<T, U> {
	/** Properties added */
	added: AddedAPI<U>
	/** Properties removed */
	removed: RemovedAPI<T>
	/** Properties changed */
	changed: ChangedAPI<T, U>
}

/**
 * Added API properties
 */
export type AddedAPI<T> = {
	[K in keyof T]: {
		type: 'added'
		description?: string
	}
}

/**
 * Removed API properties
 */
export type RemovedAPI<T> = {
	[K in keyof T]: {
		type: 'removed'
		description?: string
		replacement?: string
	}
}

/**
 * Changed API properties
 */
export type ChangedAPI<T, U> = {
	[K in keyof T & keyof U]: {
		type: 'changed'
		from: T[K]
		to: U[K]
		breaking: boolean
		description?: string
	}
}

/**
 * API change
 */
export interface APIChange {
	/** Change ID */
	id: string
	/** Change type */
	type: 'added' | 'removed' | 'changed' | 'deprecated'
	/** API path */
	path: string
	/** Description */
	description: string
	/** Breaking change flag */
	isBreaking: boolean
	/** Deprecation info */
	deprecation?: {
		reason: string
		since: string
		removedIn?: string
		replacement?: string
	}
}

// ============================================================================
// Compatibility Check
// ============================================================================

/**
 * Compatibility check result
 */
export type CompatibilityCheck<T, U> = T extends U
	? U extends T
		? { compatible: true, level: 'full' }
		: { compatible: false, level: 'partial', details: string }
	: { compatible: false, level: 'none', details: string }

/**
 * Breaking change compatibility report (v1.11.0)
 */
export interface BreakingChangeCompatibilityReport<_T = unknown> {
	/** Source type */
	source: string
	/** Target type */
	target: string
	/** Compatibility level */
	level: CompatibilityLevel
	/** Compatible percentage (0-100) */
	percentage: number
	/** Issues found */
	issues: CompatibilityIssue[]
	/** Warnings */
	warnings: string[]
	/** Recommendations */
	recommendations: string[]
}

/**
 * Compatibility level
 */
export type CompatibilityLevel = 'full' | 'partial' | 'none'

/**
 * Compatibility issue
 */
export interface CompatibilityIssue {
	/** Issue ID */
	id: string
	/** Issue type */
	type: CompatibilityIssueType
	/** Location */
	path: string
	/** Issue description */
	description: string
	/** Suggested fix */
	suggestion?: string
	/** Severity */
	severity: 'error' | 'warning' | 'info'
}

/**
 * Compatibility issue type
 */
export type CompatibilityIssueType
	= | 'missing_property'
	| 'type_mismatch'
	| 'signature_change'
	| 'nullability_change'
	| 'optionality_change'
	| 'constraint_violation'
	| 'generic_incompatibility'
	| 'inheritance_change'
	| 'removed_api'
	| 'renamed_api'

// ============================================================================
// Migration Path
// ============================================================================

/**
 * Migration path between types
 */
/**
 * Breaking change migration path (v1.11.0)
 */
export type BreakingChangeMigrationPath<T, _U> = BreakingChangeMigrationStep<T>[]

/**
 * Breaking change migration step (v1.11.0)
 */
export interface BreakingChangeMigrationStep<T> {
	/** Step number */
	step: number
	/** Step name */
	name: string
	/** Description */
	description: string
	/** Type transformation */
	transform: (input: T) => unknown
	/** Required flag */
	required: boolean
	/** Breaking change flag */
	breaking: boolean
	/** Estimated time in minutes */
	estimatedTime: number
	/** Dependencies */
	dependsOn?: number[]
	/** Validation */
	validate?: (input: T) => boolean
}

/**
 * Migration complexity level
 */
export type BreakingChangeMigrationComplexity = 'trivial' | 'moderate' | 'complex' | 'breaking'

/**
 * Migration plan
 */
export interface MigrationPlan {
	/** Plan ID */
	id: string
	/** Source version */
	fromVersion: string
	/** Target version */
	toVersion: string
	/** Migration steps */
	steps: BreakingChangeMigrationStep<unknown>[]
	/** Total estimated time */
	totalTime: number
	/** Complexity */
	complexity: BreakingChangeMigrationComplexity
	/** Required changes */
	requiredChanges: number
	/** Optional changes */
	optionalChanges: number
	/** Breaking changes */
	breakingChanges: number
	/** Prerequisites */
	prerequisites?: string[]
	/** Post-migration steps */
	postMigration?: string[]
}

// ============================================================================
// Change Detection Utilities
// ============================================================================

/**
 * Change detection options
 */
export interface ChangeDetectionOptions {
	/** Compare nested types recursively */
	deep: boolean
	/** Include private properties */
	includePrivate: boolean
	/** Include deprecated properties */
	includeDeprecated: boolean
	/** Custom ignore patterns */
	ignore?: string[]
	/** Custom equality function */
	equality?: (a: unknown, b: unknown) => boolean
}

/**
 * Change detection result
 */
export interface ChangeDetectionResult<_T> {
	/** Type being compared */
	type: _T
	/** Changes detected */
	changes: Change[]
	/** Has breaking changes */
	hasBreakingChanges: boolean
	/** Change count */
	changeCount: number
}

/**
 * Generic change
 */
export interface Change {
	/** Change ID */
	id: string
	/** Change type */
	type: ChangeType
	/** Path to the change */
	path: string
	/** Old value */
	oldValue?: unknown
	/** New value */
	newValue?: unknown
	/** Breaking change flag */
	isBreaking: boolean
	/** Description */
	description: string
}

/**
 * Change type
 */
export type ChangeType
	= | 'added'
	| 'removed'
	| 'modified'
	| 'renamed'
	| 'moved'
	| 'deprecated'
	| 'restored'

// ============================================================================
// Version Comparison
// ============================================================================

/**
 * Version comparison result
 */
export interface VersionComparison {
	/** Source version */
	from: string
	/** Target version */
	to: string
	/** Changes between versions */
	changes: Change[]
	/** Breaking changes only */
	breakingChanges: BreakingChange[]
	/** Deprecations */
	deprecations: DeprecationChange[]
	/** New features */
	newFeatures: Change[]
}

/**
 * Deprecation change
 */
export interface DeprecationChange {
	/** API name */
	name: string
	/** Deprecation version */
	since: string
	/** Removal version */
	removedIn?: string
	/** Replacement */
	replacement?: string
	/** Reason */
	reason?: string
}

/**
 * Version changelog
 */
export interface VersionChangelog {
	/** Version */
	version: string
	/** Release date */
	date: Date
	/** Summary */
	summary: string
	/** Breaking changes */
	breaking: BreakingChange[]
	/** Features */
	features: Change[]
	/** Fixes */
	fixes: Change[]
	/** Deprecations */
	deprecations: DeprecationChange[]
}

// ============================================================================
// Impact Analysis
// ============================================================================

/**
 * Impact analysis result
 */
export interface ImpactAnalysis {
	/** Analysis ID */
	id: string
	/** Target changes */
	changes: BreakingChange[]
	/** Impact scope */
	scope: ImpactScope
	/** Affected components */
	affectedComponents: AffectedComponent[]
	/** Risk level */
	riskLevel: RiskLevel
	/** Recommendations */
	recommendations: ImpactRecommendation[]
	/** Mitigation strategies */
	mitigations: MitigationStrategy[]
}

/**
 * Impact scope
 */
export type ImpactScope
	= | 'type'
	| 'module'
	| 'package'
	| 'project'
	| 'ecosystem'

/**
 * Affected component
 */
export interface AffectedComponent {
	/** Component name */
	name: string
	/** Component type */
	type: 'function' | 'class' | 'interface' | 'type' | 'module' | 'package'
	/** Usage count */
	usageCount: number
	/** Impact severity */
	severity: 'low' | 'medium' | 'high' | 'critical'
	/** Required changes */
	requiredChanges: string[]
}

/**
 * Risk level
 */
export type RiskLevel = 'none' | 'low' | 'medium' | 'high' | 'critical'

/**
 * Impact recommendation
 */
export interface ImpactRecommendation {
	/** Recommendation ID */
	id: string
	/** Priority */
	priority: number
	/** Description */
	description: string
	/** Rationale */
	rationale: string
	/** Effort estimate */
	effort: 'trivial' | 'low' | 'medium' | 'high'
}

/**
 * Mitigation strategy
 */
export interface MitigationStrategy {
	/** Strategy name */
	name: string
	/** Description */
	description: string
	/** Steps */
	steps: string[]
	/** Applicability */
	appliesTo: string[]
	/** Effectiveness (0-1) */
	effectiveness: number
}

// ============================================================================
// Breaking Change Prevention
// ============================================================================

/**
 * Breaking change rule
 */
export interface BreakingChangeRule {
	/** Rule ID */
	id: string
	/** Rule name */
	name: string
	/** Rule description */
	description: string
	/** Check function */
	check: (change: Change) => boolean
	/** Severity */
	severity: BreakingChangeSeverity
	/** Auto-fix available */
	autoFix: boolean
}

/**
 * Breaking change guard
 */
export interface BreakingChangeGuard {
	/** Guard name */
	name: string
	/** Enabled rules */
	rules: BreakingChangeRule[]
	/** Exceptions */
	exceptions?: string[]
	/** Custom checks */
	customChecks?: ((change: Change) => boolean)[]
}

/**
 * Breaking change prevention config
 */
export interface BreakingChangePreventionConfig {
	/** Enable prevention */
	enabled: boolean
	/** Fail on breaking changes */
	failOnBreaking: boolean
	/** Allowed severities */
	allowedSeverities: BreakingChangeSeverity[]
	/** Custom rules */
	customRules?: BreakingChangeRule[]
	/** Ignore patterns */
	ignore?: string[]
}
