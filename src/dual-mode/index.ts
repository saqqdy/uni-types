/**
 * Dual Mode Support
 *
 * Simultaneous v1.x and v2.0.0 support
 * for gradual migration between versions.
 */

// ============== Dual Mode Types ==============

/**
 * DualMode - Type that supports both v1 and v2 modes
 */
export interface DualMode<T> {
	/** The type in dual mode */
	readonly _type: T
	/** Current mode */
	readonly _mode: APIMode
	/** Available modes */
	readonly _availableModes: APIMode[]
	/** Mode version */
	readonly _version: string
}

/**
 * APIMode - API version mode
 */
export type APIMode = 'v1' | 'v2' | 'dual'

/**
 * V1Mode - Type locked to v1 mode
 */
export type V1Mode<T> = T & {
	/** Mode marker */
	readonly __mode__: 'v1'
	/** Compatibility level */
	readonly __compatibility__: 'full'
}

/**
 * V2Mode - Type locked to v2 mode
 */
export type V2Mode<T> = T & {
	/** Mode marker */
	readonly __mode__: 'v2'
	/** Stability level */
	readonly __stability__: 'stable'
}

/**
 * MixedMode - Type that works in mixed mode
 */
export interface MixedMode<T, U> {
	/** v1 representation */
	readonly v1: T
	/** v2 representation */
	readonly v2: U
	/** Current active mode */
	readonly activeMode: APIMode
	/** Are both modes compatible */
	readonly compatible: boolean
}

// ============== Mode Switching ==============

/**
 * SwitchMode - Result of switching between modes
 */
export interface SwitchMode<T, From extends APIMode, To extends APIMode> {
	/** The type after switching */
	readonly _type: T
	/** Source mode */
	readonly _from: From
	/** Target mode */
	readonly _to: To
	/** Switch status */
	readonly _status: SwitchStatus
	/** Data loss during switch */
	readonly _dataLoss: boolean
}

/**
 * SwitchStatus - Status of a mode switch
 */
export type SwitchStatus = 'success' | 'partial' | 'failed' | 'needs-manual-intervention'

/**
 * ModeConfig - Configuration for mode support
 */
export interface ModeConfig<T> {
	/** The type being configured */
	readonly _target: T
	/** Default mode */
	readonly defaultMode: APIMode
	/** Allowed modes */
	readonly allowedModes: APIMode[]
	/** Auto-switch enabled */
	readonly autoSwitch: boolean
	/** Warn on mode mismatch */
	readonly warnOnMismatch: boolean
}

/**
 * ModeOptions - Options for mode support
 */
export interface ModeOptions {
	/** Preferred mode */
	readonly preferredMode: APIMode
	/** Fallback mode */
	readonly fallbackMode: APIMode
	/** Strict mode - reject mismatches */
	readonly strictMode: boolean
	/** Log mode switches */
	readonly logSwitches: boolean
	/** Compatibility level */
	readonly compatibilityLevel: CompatibilityLevel
}

/**
 * CompatibilityLevel - Level of compatibility between modes
 */
export type CompatibilityLevel = 'full' | 'partial' | 'minimal' | 'none'

// ============== Compatibility Bridge ==============

/**
 * CompatBridge - Bridge between v1 and v2 modes
 */
export interface CompatBridge<T> {
	/** The type being bridged */
	readonly _type: T
	/** Bridge status */
	readonly _status: BridgeStatus
	/** Bridge completeness */
	readonly _completeness: number
}

/**
 * BridgeStatus - Status of a compatibility bridge
 */
export type BridgeStatus = 'complete' | 'partial' | 'missing' | 'broken'

/**
 * BridgeV1 - v1 side of the compatibility bridge
 */
export interface BridgeV1<T> {
	/** v1 type */
	readonly type: T
	/** Bridge direction */
	readonly direction: 'v1-to-v2'
	/** Is lossless */
	readonly lossless: boolean
	/** Loss description */
	readonly lossDescription?: string
}

/**
 * BridgeV2 - v2 side of the compatibility bridge
 */
export interface BridgeV2<T> {
	/** v2 type */
	readonly type: T
	/** Bridge direction */
	readonly direction: 'v2-to-v1'
	/** Is lossless */
	readonly lossless: boolean
	/** Gain description */
	readonly gainDescription?: string
}

// ============== Migration Path ==============

/**
 * MigrationPath - Path from one mode to another
 */
export interface MigrationPath<From extends APIMode, To extends APIMode> {
	/** Source mode */
	readonly from: From
	/** Target mode */
	readonly to: To
	/** Steps */
	readonly steps: string[]
	/** Is automatic */
	readonly automatic: boolean
	/** Estimated effort */
	readonly effort: 'trivial' | 'easy' | 'moderate' | 'difficult'
	/** Risk level */
	readonly risk: 'none' | 'low' | 'medium' | 'high'
}
