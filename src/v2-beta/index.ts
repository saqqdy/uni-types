/**
 * v2.0.0 Beta Features
 *
 * Final beta versions of v2.0.0 features,
 * representing the stable API surface for the next major version.
 */

// ============== V2 Beta Core Types ==============

/**
 * V2_BetaType - Core beta type wrapper for v2.0.0
 */
export interface V2_BetaType<T> {
	/** The underlying type */
	readonly _type: T
	/** Version marker */
	readonly _version: 'v2-beta'
	/** Stability marker */
	readonly _stability: 'beta'
}

/**
 * V2_BetaOps - Beta type operations for v2.0.0
 */
export interface V2_BetaOps<T> {
	/** Target type */
	readonly _target: T
	/** Operations version */
	readonly _opsVersion: 'v2-beta'
	/** Available operations */
	readonly _available: string[]
}

/**
 * V2_BetaExt - Beta extensions for v2.0.0
 */
export interface V2_BetaExt<T> {
	/** Target type */
	readonly _target: T
	/** Extension version */
	readonly _extVersion: 'v2-beta'
	/** Available extensions */
	readonly _available: string[]
}

/**
 * V2_BetaUtil - Beta utilities for v2.0.0
 */
export interface V2_BetaUtil<T> {
	/** Target type */
	readonly _target: T
	/** Utility version */
	readonly _utilVersion: 'v2-beta'
	/** Available utilities */
	readonly _available: string[]
}

// ============== Final Beta APIs ==============

/**
 * BetaPick - Beta pick operation
 */
export type BetaPick<T, K extends keyof T> = {
	readonly [P in K]: T[P]
}

/**
 * BetaOmit - Beta omit operation
 */
export type BetaOmit<T, K extends keyof T> = {
	readonly [P in keyof T as P extends K ? never : P]: T[P]
}

/**
 * BetaPartial - Beta partial operation
 */
export type BetaPartial<T> = {
	readonly [K in keyof T]?: T[K]
}

/**
 * BetaRequired - Beta required operation
 */
export type BetaRequired<T> = {
	readonly [K in keyof T]-?: T[K]
}

// ============== Beta Quality Gates ==============

/**
 * BetaQualityGate - Quality gate for beta features
 */
export interface BetaQualityGate<T> {
	/** The feature being gated */
	readonly _feature: T
	/** Gate status */
	readonly _status: BetaGateStatus
	/** Quality score (0-100) */
	readonly _score: number
	/** Required score to pass */
	readonly _requiredScore: number
}

/**
 * BetaGateStatus - Status of a beta quality gate
 */
export type BetaGateStatus = 'blocked' | 'testing' | 'review' | 'approved' | 'promoted'

/**
 * BetaReady - Checks if a beta feature is ready for stable
 */
export interface BetaReady<T> {
	/** The feature */
	readonly _feature: T
	/** Is ready */
	readonly _ready: boolean
	/** Readiness score */
	readonly _score: number
	/** Blocking issues */
	readonly _blockingIssues: string[]
	/** Recommendations */
	readonly _recommendations: string[]
}

/**
 * BetaStable - A beta feature that has been promoted to stable
 */
export type BetaStable<T> = T & {
	/** Was beta, now stable */
	readonly __promoted_from_beta__: true
	/** Promotion date */
	readonly __promotion_date__: string
}

// ============== Beta Feature Registry ==============

/**
 * BetaFeatureRegistry - Registry of all beta features
 */
export interface BetaFeatureRegistry {
	/** Registered features */
	readonly features: Record<string, BetaFeatureEntry>
	/** Total count */
	readonly total: number
	/** Stable count */
	readonly stable: number
	/** Beta count */
	readonly beta: number
	/** Alpha count */
	readonly alpha: number
}

/**
 * BetaFeatureEntry - Entry in the beta feature registry
 */
export interface BetaFeatureEntry {
	/** Feature name */
	readonly name: string
	/** Feature stability */
	readonly stability: 'alpha' | 'beta' | 'stable'
	/** Feature version */
	readonly version: string
	/** Is ready for promotion */
	readonly readyForPromotion: boolean
	/** Test coverage percentage */
	readonly testCoverage: number
	/** Known issues count */
	readonly knownIssues: number
	/** Feedback score */
	readonly feedbackScore: number
}

/**
 * BetaPromotionResult - Result of promoting a beta feature to stable
 */
export interface BetaPromotionResult<T> {
	/** The promoted feature */
	readonly _feature: T
	/** Promotion status */
	readonly _status: 'promoted' | 'deferred' | 'rejected'
	/** Promotion reason */
	readonly _reason: string
	/** Remaining issues */
	readonly _remainingIssues: string[]
}

/**
 * BetaFeedback - Feedback about a beta feature
 */
export interface BetaFeedback<T> {
	/** Feature */
	readonly _feature: T
	/** Rating (1-5) */
	readonly rating: number
	/** Comment */
	readonly comment?: string
	/** Issue reported */
	readonly issue?: string
	/** Timestamp */
	readonly timestamp: number
}
