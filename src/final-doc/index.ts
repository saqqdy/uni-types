/**
 * Final Documentation
 *
 * Complete documentation for the v1.x to v2.0.0
 * transition, including migration guides and interactive tools.
 */

// ============== Final Documentation Types ==============

/**
 * FinalDoc - Final documentation type
 */
export interface FinalDoc<T> {
	/** The documented type */
	readonly _type: T
	/** Doc version */
	readonly _version: string
	/** Doc status */
	readonly _status: DocStatus
	/** Last updated */
	readonly _lastUpdated: string
}

/**
 * DocStatus - Status of documentation
 */
export type DocStatus = 'draft' | 'review' | 'published' | 'archived'

/**
 * MigrationDoc - Migration documentation type
 */
export interface MigrationDoc<T> {
	/** The type being documented */
	readonly _type: T
	/** Migration from version */
	readonly fromVersion: string
	/** Migration to version */
	readonly toVersion: string
	/** Migration steps */
	readonly steps: DocStep[]
	/** Is automatic */
	readonly automatic: boolean
}

/**
 * DocStep - A step in documentation
 */
export interface DocStep {
	/** Step number */
	readonly step: number
	/** Step title */
	readonly title: string
	/** Step description */
	readonly description: string
	/** Code example */
	readonly codeExample?: string
	/** Is required */
	readonly required: boolean
	/** Estimated time in minutes */
	readonly estimatedMinutes: number
}

/**
 * UpgradeGuide - Upgrade guide type
 */
export interface UpgradeGuide<T> {
	/** The type being upgraded */
	readonly _type: T
	/** Source version */
	readonly fromVersion: string
	/** Target version */
	readonly toVersion: string
	/** Guide sections */
	readonly sections: GuideSection[]
	/** Estimated total time */
	readonly estimatedTime: string
	/** Difficulty */
	readonly difficulty: 'easy' | 'moderate' | 'difficult'
}

/**
 * GuideSection - A section in a guide
 */
export interface GuideSection {
	/** Section title */
	readonly title: string
	/** Section description */
	readonly description: string
	/** Section content */
	readonly content: string
	/** Section order */
	readonly order: number
	/** Subsections */
	readonly subsections: GuideSection[]
}

/**
 * TransitionGuide - Guide for transitioning between versions
 */
export interface TransitionGuide<T> {
	/** The type being transitioned */
	readonly _type: T
	/** Transition phases */
	readonly phases: TransitionPhase[]
	/** Total duration estimate */
	readonly estimatedDuration: string
	/** Risk level */
	readonly riskLevel: 'low' | 'medium' | 'high'
}

/**
 * TransitionPhase - A phase in the transition
 */
export interface TransitionPhase {
	/** Phase name */
	readonly name: string
	/** Phase description */
	readonly description: string
	/** Phase order */
	readonly order: number
	/** Tasks */
	readonly tasks: string[]
	/** Is complete */
	readonly complete: boolean
}

// ============== Documentation Export ==============

/**
 * ExportFinalDocs - Export final documentation
 */
export interface ExportFinalDocs<T> {
	/** The type being exported */
	readonly _type: T
	/** Export format */
	readonly format: DocExportFormat
	/** Export timestamp */
	readonly timestamp: number
	/** Content */
	readonly content: string
}

/**
 * DocExportFormat - Format for documentation export
 */
export type DocExportFormat = 'markdown' | 'html' | 'json' | 'pdf'

/**
 * DocBundle - Bundle of documentation
 */
export interface DocBundle<T> {
	/** Bundle ID */
	readonly id: string
	/** Bundle name */
	readonly name: string
	/** Documents */
	readonly documents: FinalDoc<T>[]
	/** Total count */
	readonly total: number
	/** Size in bytes */
	readonly size: number
}

/**
 * DocArchive - Archived documentation
 */
export interface DocArchive<T> {
	/** Archive ID */
	readonly id: string
	/** Archive name */
	readonly name: string
	/** Archive date */
	readonly date: string
	/** Version */
	readonly version: string
	/** Documents */
	readonly documents: FinalDoc<T>[]
	/** Is compressed */
	readonly compressed: boolean
}

// ============== Interactive Guides ==============

/**
 * InteractiveGuide - Interactive documentation guide
 */
export interface InteractiveGuide<T> {
	/** The type being guided */
	readonly _type: T
	/** Guide title */
	readonly title: string
	/** Guide steps */
	readonly steps: InteractiveStep[]
	/** Current step index */
	readonly currentStep: number
	/** Progress percentage */
	readonly progress: number
}

/**
 * InteractiveStep - An interactive step in a guide
 */
export interface InteractiveStep {
	/** Step title */
	readonly title: string
	/** Step description */
	readonly description: string
	/** Step type */
	readonly type: 'information' | 'action' | 'validation' | 'choice'
	/** Is complete */
	readonly complete: boolean
	/** Next step hint */
	readonly nextHint?: string
}

/**
 * StepByStep - Step-by-step guide type
 */
export interface StepByStep<T> {
	/** The type being guided */
	readonly _type: T
	/** Steps */
	readonly steps: string[]
	/** Current step */
	readonly current: number
	/** Total steps */
	readonly total: number
}

/**
 * GuidedMigration - Guided migration type
 */
export interface GuidedMigration<T> {
	/** The type being migrated */
	readonly _type: T
	/** Migration guide */
	readonly guide: InteractiveGuide<T>
	/** Is automated */
	readonly automated: boolean
	/** Progress */
	readonly progress: number
}
