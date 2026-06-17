/**
 * Complete Migration Toolkit
 *
 * Finalized migration tools with full automation support
 * for transitioning from v1.x to v2.0.0.
 */

// ============== Migration Toolkit Core ==============

/**
 * MigrationToolkit - Core migration toolkit type
 */
export interface MigrationToolkit<T> {
	/** The type being migrated */
	readonly _source: T
	/** Migration version */
	readonly _version: 'v1-to-v2'
	/** Migration status */
	readonly _status: MigrationToolkitStatus
}

/**
 * MigrationToolkitStatus - Status of the migration toolkit
 */
export type MigrationToolkitStatus = 'idle' | 'analyzing' | 'migrating' | 'validating' | 'complete' | 'failed'

/**
 * AutoMigrate - Automatic migration result type
 */
export interface AutoMigrate<T> {
	/** Original type */
	readonly _original: T
	/** Migrated type */
	readonly _migrated: T
	/** Migration success */
	readonly _success: boolean
	/** Changes applied */
	readonly _changes: MigrationChange[]
}

/**
 * MigrationWizard - Step-by-step migration guide
 */
export interface MigrationWizard<T> {
	/** The type being migrated */
	readonly _target: T
	/** Current step */
	readonly _currentStep: number
	/** Total steps */
	readonly _totalSteps: number
	/** Wizard steps */
	readonly _steps: MigrationWizardStep[]
}

/**
 * MigrationWizardStep - A step in the migration wizard
 */
export interface MigrationWizardStep {
	/** Step name */
	readonly name: string
	/** Step description */
	readonly description: string
	/** Step status */
	readonly status: MigrationStepStatus
	/** Required */
	readonly required: boolean
}

/**
 * MigrationStepStatus - Status of a migration step
 */
export type MigrationStepStatus = 'pending' | 'in-progress' | 'completed' | 'skipped' | 'failed'

/**
 * MigrationSteps - Ordered migration steps
 */
export interface MigrationSteps<T> {
	/** The type being migrated */
	readonly _target: T
	/** Ordered steps */
	readonly _steps: string[]
	/** Step dependencies */
	readonly _dependencies: Record<string, string[]>
}

// ============== Batch Migration ==============

/**
 * BatchMigration - Batch migration type
 */
export interface BatchMigration<T> {
	/** Batch ID */
	readonly _id: string
	/** Items to migrate */
	readonly _items: T[]
	/** Batch status */
	readonly _status: BatchMigrationStatus
	/** Progress */
	readonly _progress: number
}

/**
 * BatchMigrationStatus - Status of a batch migration
 */
export type BatchMigrationStatus = 'queued' | 'running' | 'paused' | 'completed' | 'failed' | 'rolled-back'

/**
 * MigrationBatch - A batch of migrations
 */
export interface MigrationBatch<T> {
	/** Batch name */
	readonly name: string
	/** Migrations in the batch */
	readonly migrations: T[]
	/** Batch options */
	readonly options: BatchOptions
}

/**
 * BatchOptions - Options for batch migration
 */
export interface BatchOptions {
	/** Continue on error */
	readonly continueOnError: boolean
	/** Max concurrent */
	readonly maxConcurrent: number
	/** Dry run */
	readonly dryRun: boolean
	/** Verbose */
	readonly verbose: boolean
}

/**
 * MigrationProgress - Progress tracking for migration
 */
export interface MigrationProgress<T> {
	/** Total items */
	readonly total: number
	/** Completed items */
	readonly completed: number
	/** Failed items */
	readonly failed: number
	/** Remaining items */
	readonly remaining: number
	/** Percentage */
	readonly percentage: number
	/** Current item */
	readonly currentItem?: T
}

/**
 * MigrationSummary - Summary of migration results
 */
export interface MigrationSummary {
	/** Total migrations */
	readonly total: number
	/** Successful */
	readonly successful: number
	/** Failed */
	readonly failed: number
	/** Skipped */
	readonly skipped: number
	/** Duration in ms */
	readonly duration: number
	/** Errors */
	readonly errors: MigrationError[]
}

// ============== Migration Validation ==============

/**
 * ValidateComplete - Complete migration validation
 */
export interface ValidateComplete<T> {
	/** Type being validated */
	readonly _target: T
	/** Validation result */
	readonly _result: ValidationOutcome
	/** Validation checks */
	readonly _checks: ValidationCheck[]
}

/**
 * ValidationOutcome - Outcome of validation
 */
export type ValidationOutcome = 'valid' | 'invalid' | 'warnings' | 'errors'

/**
 * ValidationCheck - A single validation check
 */
export interface ValidationCheck {
	/** Check name */
	readonly name: string
	/** Check result */
	readonly passed: boolean
	/** Check message */
	readonly message: string
	/** Severity */
	readonly severity: 'error' | 'warning' | 'info'
}

/**
 * MigrationChecklist - Checklist for migration
 */
export interface MigrationChecklist<T> {
	/** The type being migrated */
	readonly _target: T
	/** Checklist items */
	readonly items: ChecklistItem[]
	/** Completion percentage */
	readonly completionPercentage: number
}

/**
 * ChecklistItem - An item in the migration checklist
 */
export interface ChecklistItem {
	/** Item name */
	readonly name: string
	/** Is completed */
	readonly completed: boolean
	/** Is required */
	readonly required: boolean
	/** Category */
	readonly category: string
}

/**
 * MigrationStatus - Status of a migration
 */
export type MigrationStatusType = 'not-started' | 'in-progress' | 'completed' | 'failed' | 'rolled-back' | 'partial'

/**
 * MigrationErrors - Errors encountered during migration
 */
export interface MigrationErrors<T> {
	/** The type that had errors */
	readonly _target: T
	/** Errors */
	readonly errors: MigrationError[]
	/** Warnings */
	readonly warnings: MigrationWarning[]
}

/**
 * MigrationError - An error during migration
 */
export interface MigrationError {
	/** Error code */
	readonly code: string
	/** Error message */
	readonly message: string
	/** Error location */
	readonly location?: string
	/** Suggested fix */
	readonly suggestion?: string
}

/**
 * MigrationWarning - A warning during migration
 */
export interface MigrationWarning {
	/** Warning code */
	readonly code: string
	/** Warning message */
	readonly message: string
	/** Is dismissible */
	readonly dismissible: boolean
}

// ============== Rollback Support ==============

/**
 * MigrationRollback - Rollback support for migration
 */
export interface MigrationRollback<T> {
	/** The type being rolled back */
	readonly _target: T
	/** Rollback points */
	readonly _rollbackPoints: RollbackPoint<T>[]
	/** Can rollback */
	readonly _canRollback: boolean
}

/**
 * RollbackPoint - A point in time to rollback to
 */
export interface RollbackPoint<T> {
	/** Point ID */
	readonly id: string
	/** Point name */
	readonly name: string
	/** Point timestamp */
	readonly timestamp: number
	/** Snapshot at this point */
	readonly snapshot: T
}

/**
 * RollbackAction - An action to perform during rollback
 */
export interface RollbackAction<T> {
	/** Action type */
	readonly type: 'restore' | 'undo' | 'revert'
	/** Target */
	readonly target: string
	/** Previous value */
	readonly previousValue?: T
	/** New value */
	readonly newValue?: T
}

// ============== Migration Change Types ==============

/**
 * MigrationChange - A single change in migration
 */
export interface MigrationChange {
	/** Change type */
	readonly type: MigrationChangeType
	/** Change description */
	readonly description: string
	/** Affected path */
	readonly path: string
	/** Is breaking */
	readonly breaking: boolean
}

/**
 * MigrationChangeType - Type of migration change
 */
export type MigrationChangeType = 'rename' | 'remove' | 'add' | 'modify' | 'reorder' | 'deprecate'
