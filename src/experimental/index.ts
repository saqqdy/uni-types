/**
 * Experimental v2 Features (Early Access)
 *
 * Type definitions for experimental, unstable, preview, and beta features
 * serving as early access to v2.0.0 capabilities.
 */

// ============== Stability Markers ==============

/**
 * Experimental - marks a type as experimental (may change or be removed)
 */
export type Experimental<T> = T & { __experimental__: true }

/**
 * Unstable - marks a type as unstable (API not finalized)
 */
export type Unstable<T> = T & { __unstable__: true }

/**
 * Preview - marks a type as a preview feature
 */
export type Preview<T> = T & { __preview__: true }

/**
 * Beta - marks a type as beta (mostly stable but may have issues)
 */
export type Beta<T> = T & { __beta__: true }

// ============== v2.0.0 Preview Features ==============

/**
 * V2_Preview - preview of v2.0.0 feature
 */
export type V2_Preview<T> = T & { __v2_preview__: true }

/**
 * V2_Experimental - experimental v2.0.0 feature
 */
export type V2_Experimental<T> = T & { __v2_experimental__: true }

/**
 * V2_Alpha - alpha version of v2.0.0 feature
 */
export type V2_Alpha<T> = T & { __v2_alpha__: true }

/**
 * V2_Beta - beta version of v2.0.0 feature
 */
export type V2_Beta<T> = T & { __v2_beta__: true }

// ============== Feature Flags ==============

/**
 * ExperimentalFeatureFlag - type-level feature flag (experimental)
 */
export type ExperimentalFeatureFlag<T, Flag extends string = string> = T & { __flag__: Flag }

/**
 * FlaggedFeature - feature with an associated flag
 */
export type FlaggedFeature<T, Flag extends string> = T & { __flag__: Flag, __enabled__: boolean }

/**
 * FeatureGate - gates access to a feature based on a condition
 */
export type FeatureGate<T, Condition extends boolean> = Condition extends true ? T : never

/**
 * ConditionalFeature - feature that is conditionally available
 */
export type ConditionalFeature<T, Condition extends boolean> = Condition extends true ? T : never

// ============== Experimental Utilities ==============

/**
 * TryFeature - try an experimental feature (returns T or never if unavailable)
 */
export type TryFeature<T, Available extends boolean = true> = Available extends true ? T : never

/**
 * OptInFeature - feature that requires opt-in
 */
export type OptInFeature<T, OptedIn extends boolean = false> = OptedIn extends true ? T : never

/**
 * ExperimentalAPI - marks an entire API as experimental
 */
export interface ExperimentalAPI<T> {
	/** The experimental feature */
	feature: T
	/** Stability level */
	stability: StabilityLevel
	/** Since version */
	sinceVersion: string
	/** Feedback URL */
	feedbackUrl?: string
}

/**
 * PreviewAPI - marks an entire API as preview
 */
export interface PreviewAPI<T> {
	/** The preview feature */
	feature: T
	/** Preview status */
	status: 'preview'
	/** Expected stable version */
	expectedStableVersion: string
}

// ============== Stability Levels ==============

/**
 * StabilityLevel - represents the stability level of a feature
 */
export type StabilityLevel = 'stable' | 'beta' | 'alpha' | 'experimental'

/**
 * StableFeature - a stable, production-ready feature
 */
export type StableFeature<T> = T & { __stability__: 'stable' }

/**
 * BetaFeature - a beta feature (mostly stable)
 */
export type BetaFeature<T> = T & { __stability__: 'beta' }

/**
 * AlphaFeature - an alpha feature (may have breaking changes)
 */
export type AlphaFeature<T> = T & { __stability__: 'alpha' }

/**
 * ExperimentalFeature - an experimental feature (highly unstable)
 */
export type ExperimentalFeature<T> = T & { __stability__: 'experimental' }

// ============== Feature Metadata ==============

/**
 * FeatureMetadata - metadata about a feature's stability
 */
export interface FeatureMetadata {
	/** Feature name */
	name: string
	/** Stability level */
	stability: StabilityLevel
	/** Version introduced */
	introducedIn: string
	/** Version where feature becomes stable */
	stableIn?: string
	/** Whether the feature is deprecated */
	deprecated?: boolean
	/** Replacement if deprecated */
	replacement?: string
}

/**
 * FeatureRegistry - registry of features and their stability
 */
export interface FeatureRegistry {
	/** Registered features */
	features: Record<string, FeatureMetadata>
	/** Get feature by name */
	get: (name: string) => FeatureMetadata | undefined
	/** Check if feature is stable */
	isStable: (name: string) => boolean
	/** Check if feature is enabled */
	isEnabled: (name: string) => boolean
}
