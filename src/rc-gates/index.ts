/**
 * RC Quality Gates
 *
 * Quality gates for release candidate validation,
 * including validation, release criteria, and readiness checks.
 */

// ============== Quality Gates ==============

/**
 * QualityGate - Quality gate type
 */
export interface QualityGate<T = unknown> {
	/** Gate name */
	name: string
	/** Gate description */
	description: string
	/** Conditions */
	conditions: GateCondition<T>[]
	/** Gate result */
	result: GateResult
	/** Last evaluated */
	lastEvaluated?: number
}

/**
 * GateCondition - Condition for a quality gate
 */
export interface GateCondition<T = unknown> {
	/** Condition name */
	name: string
	/** Condition description */
	description: string
	/** Condition type */
	type: GateConditionType
	/** Expected value */
	expected: T
	/** Actual value */
	actual?: T
	/** Is met */
	met: boolean
	/** Severity if not met */
	severity: GateSeverity
}

/**
 * Gate condition types
 */
export type GateConditionType
	= | 'test-coverage'
	| 'type-coverage'
	| 'lint-pass'
	| 'build-pass'
	| 'no-breaking-changes'
	| 'documentation-complete'
	| 'performance-threshold'
	| 'security-audit'
	| 'migration-test'
	| 'compatibility-check'

/**
 * Gate result
 */
export type GateResult = 'passed' | 'failed' | 'warning'

/**
 * Gate severity
 */
export type GateSeverity = 'blocker' | 'critical' | 'major' | 'minor' | 'info'

// ============== RC Validation ==============

/**
 * ValidateRC - RC validation type
 */
export interface ValidateRC<T = unknown> {
	/** RC version */
	version: string
	/** Validation timestamp */
	timestamp: number
	/** Validation checks */
	checks: RCValidationCheck<T>[]
	/** Overall result */
	result: GateResult
	/** Summary */
	summary: RCValidationSummary
}

/**
 * RC validation check
 */
export interface RCValidationCheck<T = unknown> {
	/** Check name */
	name: string
	/** Check category */
	category: RCCheckCategory
	/** Check result */
	result: GateResult
	/** Check details */
	details: string
	/** Data */
	data?: T
	/** Duration */
	duration: number
}

/**
 * RC check categories
 */
export type RCCheckCategory
	= | 'compatibility'
	| 'performance'
	| 'security'
	| 'documentation'
	| 'testing'
	| 'build'
	| 'migration'
	| 'api-stability'

/**
 * RC validation summary
 */
export interface RCValidationSummary {
	/** Total checks */
	total: number
	/** Passed checks */
	passed: number
	/** Failed checks */
	failed: number
	/** Warnings */
	warnings: number
	/** Pass rate */
	passRate: number
}

/**
 * RCValidationReport - RC validation report
 */
export interface RCValidationReport<T = unknown> {
	/** Report ID */
	id: string
	/** RC version */
	version: string
	/** Report timestamp */
	timestamp: number
	/** Quality gates */
	gates: QualityGate<T>[]
	/** Validation result */
	validation: ValidateRC<T>
	/** Overall readiness */
	readiness: RCReadiness
	/** Recommendations */
	recommendations: string[]
}

/**
 * RCReadiness - RC readiness assessment
 */
export interface RCReadiness {
	/** Is ready for release */
	ready: boolean
	/** Readiness score (0-100) */
	score: number
	/** Blocking issues */
	blockingIssues: string[]
	/** Warnings */
	warnings: string[]
	/** Assessment timestamp */
	timestamp: number
}

// ============== Release Criteria ==============

/**
 * ReleaseCriteria - Release criteria type
 */
export interface ReleaseCriteria<T = unknown> {
	/** Criteria name */
	name: string
	/** Criteria description */
	description: string
	/** Criteria type */
	type: ReleaseCriteriaType
	/** Threshold */
	threshold: T
	/** Current value */
	current?: T
	/** Is met */
	met: boolean
	/** Is blocking */
	blocking: boolean
}

/**
 * Release criteria types
 */
export type ReleaseCriteriaType
	= | 'test-coverage-min'
	| 'zero-critical-bugs'
	| 'zero-security-vulnerabilities'
	| 'documentation-coverage'
	| 'performance-regression'
	| 'api-compatibility'
	| 'migration-path-available'
	| 'community-feedback-threshold'
	| 'beta-testing-complete'
	| 'all-platforms-tested'

/**
 * CriteriaCheck - Criteria check result
 */
export interface CriteriaCheck<T = unknown> {
	/** Criteria being checked */
	criteria: ReleaseCriteria<T>
	/** Check timestamp */
	timestamp: number
	/** Check result */
	result: GateResult
	/** Details */
	details: string
}

/**
 * ReleaseBlocker - A blocking issue for release
 */
export interface ReleaseBlocker {
	/** Blocker ID */
	id: string
	/** Blocker title */
	title: string
	/** Blocker description */
	description: string
	/** Severity */
	severity: 'blocker' | 'critical'
	/** Affected area */
	area: string
	/** Created at */
	createdAt: number
	/** Resolved */
	resolved: boolean
	/** Resolution */
	resolution?: string
}

// ============== RC Configuration ==============

/**
 * RCConfig - RC quality gate configuration
 */
export interface RCConfig {
	/** Required quality gates */
	requiredGates: string[]
	/** Release criteria */
	releaseCriteria: ReleaseCriteria<unknown>[]
	/** Blocking severity levels */
	blockingSeverities: GateSeverity[]
	/** Minimum readiness score */
	minimumReadinessScore: number
	/** Auto-promote on pass */
	autoPromote: boolean
	/** Notification settings */
	notifications: NotificationConfig
}

/**
 * Notification configuration
 */
export interface NotificationConfig {
	/** Notify on gate pass */
	onGatePass: boolean
	/** Notify on gate fail */
	onGateFail: boolean
	/** Notify on readiness change */
	onReadinessChange: boolean
	/** Notification channels */
	channels: NotificationChannel[]
}

/**
 * Notification channels
 */
export type NotificationChannel = 'email' | 'slack' | 'webhook' | 'github' | 'none'
