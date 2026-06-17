/**
 * Final Breaking Changes
 *
 * Documentation and tooling for all breaking changes
 * between v1.x and v2.0.0.
 */

// ============== Breaking Change Documentation ==============

/**
 * BreakingChangeDoc - Documentation for a breaking change
 */
export interface BreakingChangeDoc<T> {
	/** The affected type */
	readonly _target: T
	/** Change ID */
	readonly id: string
	/** Change title */
	readonly title: string
	/** Change description */
	readonly description: string
	/** Change severity */
	readonly severity: BreakingChangeSeverity
	/** Migration path */
	readonly migrationPath: string
}

/**
 * BreakingChangeSeverity - Severity of a breaking change
 */
export type BreakingChangeSeverity = 'low' | 'medium' | 'high' | 'critical'

/**
 * BreakingChangeLog - Log of all breaking changes
 */
export interface BreakingChangeLog<T> {
	/** Version */
	readonly version: string
	/** All breaking changes */
	readonly changes: BreakingChangeDoc<T>[]
	/** Total count */
	readonly total: number
	/** Critical count */
	readonly critical: number
	/** High count */
	readonly high: number
	/** Medium count */
	readonly medium: number
	/** Low count */
	readonly low: number
}

/**
 * BreakingChangeImpact - Impact assessment of a breaking change
 */
export interface BreakingChangeImpact<T> {
	/** The affected type */
	readonly _target: T
	/** Impact level */
	readonly level: ImpactLevel
	/** Affected areas */
	readonly areas: string[]
	/** Estimated migration effort */
	readonly effort: MigrationEffort
	/** Automatic migration available */
	readonly autoMigrationAvailable: boolean
}

/**
 * ImpactLevel - Level of impact
 */
export type ImpactLevel = 'none' | 'low' | 'medium' | 'high' | 'critical'

/**
 * MigrationEffort - Estimated migration effort
 */
export type MigrationEffort = 'trivial' | 'easy' | 'moderate' | 'difficult' | 'complex'

// ============== Breaking Change Analysis ==============

/**
 * AnalyzeImpact - Analyze the impact of breaking changes
 */
export interface AnalyzeImpact<T> {
	/** The type being analyzed */
	readonly _target: T
	/** Analysis timestamp */
	readonly timestamp: number
	/** Breaking changes found */
	readonly breakingChanges: number
	/** Deprecations found */
	readonly deprecations: number
	/** Renames found */
	readonly renames: number
	/** Removals found */
	readonly removals: number
}

/**
 * ImpactReport - Report of impact analysis
 */
export interface ImpactReport<T> {
	/** The type being reported on */
	readonly _target: T
	/** Report date */
	readonly date: string
	/** Total breaking changes */
	readonly totalBreakingChanges: number
	/** Auto-fixable count */
	readonly autoFixable: number
	/** Manual fix required count */
	readonly manualFixRequired: number
	/** Estimated hours */
	readonly estimatedHours: number
	/** Risk level */
	readonly riskLevel: ImpactLevel
	/** Summary */
	readonly summary: string
	/** Recommendations */
	readonly recommendations: string[]
}

// ============== Breaking Change Mitigation ==============

/**
 * MitigationStrategy - Strategy for mitigating breaking changes
 */
export interface MitigationStrategy<T> {
	/** The type being mitigated */
	readonly _target: T
	/** Strategy type */
	readonly type: MitigationType
	/** Steps */
	readonly steps: string[]
	/** Estimated effort */
	readonly effort: MigrationEffort
}

/**
 * MitigationType - Type of mitigation
 */
export type MitigationType = 'automatic' | 'semi-automatic' | 'manual' | 'polyfill' | 'compatibility-layer'

/**
 * MitigationPlan - Plan for mitigating breaking changes
 */
export interface MitigationPlan<T> {
	/** The type being mitigated */
	readonly _target: T
	/** Plan ID */
	readonly id: string
	/** Plan steps */
	readonly steps: MitigationStep<T>[]
	/** Total estimated effort */
	readonly totalEffort: MigrationEffort
	/** Can auto-apply */
	readonly canAutoApply: boolean
}

/**
 * MitigationStep - A step in a mitigation plan
 */
export interface MitigationStep<T> {
	/** Step number */
	readonly step: number
	/** Step title */
	readonly title: string
	/** Step description */
	readonly description: string
	/** Step type */
	readonly type: MitigationType
	/** Target */
	readonly target?: T
	/** Is automated */
	readonly automated: boolean
	/** Estimated time in minutes */
	readonly estimatedMinutes: number
}

// ============== Breaking Change Categories ==============

/**
 * BreakingChangeCategory - Categories of breaking changes
 */
export type BreakingChangeCategory
	= | 'rename'
	| 'removal'
	| 'signature-change'
	| 'behavior-change'
	| 'dependency-change'
	| 'default-change'
	| 'type-narrowing'
	| 'type-widening'
	| 'reorder'
	| 'namespace-change'

/**
 * BreakingChangeTimeline - Timeline for breaking changes
 */
export interface BreakingChangeTimeline {
	/** Announcement date */
	readonly announcedDate: string
	/** Deprecation date */
	readonly deprecatedDate: string
	/** Removal date */
	readonly removalDate: string
	/** Migration available date */
	readonly migrationAvailableDate: string
	/** Is currently active */
	readonly currentlyActive: boolean
}
