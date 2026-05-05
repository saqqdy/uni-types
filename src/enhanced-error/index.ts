/**
 * Enhanced Error Messages (v1.11.0)
 *
 * Better error messages and debugging utilities for TypeScript types.
 */

// ============================================================================
// Error Enhancement
// ============================================================================

/**
 * Detailed error type
 */
export type DetailedError<T> = T & {
	__error_details__: ErrorDetails
}

/**
 * Error details
 */
export interface ErrorDetails {
	/** Error code */
	code: string
	/** Error message */
	message: string
	/** Error category */
	category: ErrorCategory
	/** Error context */
	context?: ErrorContext
	/** Suggested fix */
	suggestion?: string
	/** Related documentation */
	docs?: string
	/** Stack trace */
	stack?: string
	/** Timestamp */
	timestamp?: number
}

/**
 * Error category
 */
export type ErrorCategory
	= | 'type'
	| 'syntax'
	| 'semantic'
	| 'constraint'
	| 'runtime'
	| 'validation'
	| 'assertion'
	| 'inference'

/**
 * Typed error with specific error type
 */
export interface TypedError<T extends ErrorCategory> {
	/** Error category */
	category: T
	/** Error message */
	message: string
	/** Error code */
	code: string
}

/**
 * Error context information
 */
export interface ErrorContext<T = unknown> {
	/** Original type */
	originalType?: T
	/** Expected type */
	expectedType?: string
	/** Actual type */
	actualType?: string
	/** Property path */
	path?: string[]
	/** Line number */
	line?: number
	/** Column number */
	column?: number
	/** File path */
	filePath?: string
	/** Additional context data */
	data?: Record<string, unknown>
}

/**
 * Error suggestion
 */
export type ErrorSuggestion<T> = T & {
	__suggestion__: SuggestionInfo
}

/**
 * Suggestion info
 */
export interface SuggestionInfo {
	/** Suggestion message */
	message: string
	/** Code example */
	example?: string
	/** Documentation link */
	docs?: string
	/** Auto-fix available */
	autoFix?: boolean
	/** Fix command */
	fixCommand?: string
}

// ============================================================================
// Diagnostic Types
// ============================================================================

/**
 * Diagnostic information
 */
export type Diagnostic<T> = T & {
	__diagnostic__: DiagnosticInfo
}

/**
 * Diagnostic info
 */
export interface DiagnosticInfo {
	/** Diagnostic code */
	code: DiagnosticCode
	/** Diagnostic message */
	message: string
	/** Diagnostic severity */
	severity: DiagnosticSeverity
	/** Source */
	source?: string
	/** Related information */
	related?: RelatedDiagnostic[]
}

/**
 * Diagnostic severity levels
 */
export type DiagnosticSeverity = 'error' | 'warning' | 'info' | 'hint'

/**
 * Diagnostic code type
 */
export type DiagnosticCode = string | number

/**
 * Diagnostic message
 */
export interface DiagnosticMessage<T> {
	/** Target type */
	type: T
	/** Message text */
	text: string
	/** Message category */
	category: DiagnosticSeverity
}

/**
 * Related diagnostic
 */
export interface RelatedDiagnostic {
	/** Related message */
	message: string
	/** Location */
	location?: DiagnosticLocation
	/** Relationship type */
	relation?: 'cause' | 'effect' | 'related'
}

/**
 * Diagnostic location
 */
export interface DiagnosticLocation {
	/** File path */
	file: string
	/** Start line */
	startLine: number
	/** Start column */
	startColumn: number
	/** End line */
	endLine?: number
	/** End column */
	endColumn?: number
}

// ============================================================================
// Type Errors
// ============================================================================

/**
 * Type mismatch error
 */
export interface TypeMismatch<T, Expected> {
	/** Actual type */
	actual: T
	/** Expected type */
	expected: Expected
	/** Error message */
	message: string
	/** Mismatch details */
	details: MismatchDetails
}

/**
 * Mismatch details
 */
export interface MismatchDetails {
	/** Type of mismatch */
	kind: MismatchKind
	/** Location of mismatch */
	location?: string
	/** Additional info */
	info?: string
}

/**
 * Mismatch kind
 */
export type MismatchKind
	= | 'type'
	| 'structure'
	| 'value'
	| 'constraint'
	| 'missing_property'
	| 'extra_property'
	| 'nullability'
	| 'optionality'
	| 'arity'
	| 'return_type'
	| 'parameter_type'

/**
 * Missing property error
 */
export interface MissingProperty<T, K extends keyof T> {
	/** Object type */
	object: T
	/** Missing key */
	key: K
	/** Error message */
	message: string
}

/**
 * Invalid type error
 */
export interface InvalidType<T, Valid> {
	/** Invalid type */
	invalid: T
	/** Valid types */
	valid: Valid
	/** Error message */
	message: string
}

/**
 * Constraint violation error
 */
export interface ConstraintViolation<T, Constraint> {
	/** Violating type */
	type: T
	/** Constraint */
	constraint: Constraint
	/** Violation details */
	details: string
}

// ============================================================================
// Error Recovery
// ============================================================================

/**
 * Recoverable error type
 */
export type RecoverableError<T> = T & {
	__recoverable__: true
	__recovery_options__: RecoveryOption[]
}

/**
 * Error recovery type
 */
export interface ErrorRecovery<T> {
	/** Original error */
	error: T
	/** Recovery strategy */
	strategy: RecoveryStrategy
	/** Recovered value */
	recovered?: unknown
	/** Recovery successful */
	success?: boolean
}

/**
 * Recovery strategy
 */
export type RecoveryStrategy
	= | 'fallback'
	| 'default'
	| 'skip'
	| 'retry'
	| 'transform'
	| 'ignore'
	| 'abort'

/**
 * Recovery option
 */
export interface RecoveryOption {
	/** Option name */
	name: string
	/** Strategy type */
	strategy: RecoveryStrategy
	/** Description */
	description: string
	/** Recovery value */
	value?: unknown
	/** Whether this is the default */
	isDefault?: boolean
}

/**
 * Fallback type
 */
export type FallbackType<T, Fallback> = T extends Fallback ? T : Fallback

/**
 * Graceful degradation type
 */
export type GracefulDegradation<T> = T | DegradedValue

/**
 * Degraded value
 */
export interface DegradedValue {
	__degraded__: true
	original?: unknown
	reason?: string
}

// ============================================================================
// Help Messages
// ============================================================================

/**
 * Help message type
 */
export type HelpMessage<T> = T & {
	__help__: HelpInfo
}

/**
 * Help info
 */
export interface HelpInfo {
	/** Help text */
	text: string
	/** Documentation URL */
	url?: string
	/** Examples */
	examples?: HelpExample[]
	/** Related topics */
	related?: string[]
}

/**
 * Help example
 */
export interface HelpExample {
	/** Example title */
	title: string
	/** Example code */
	code: string
	/** Example explanation */
	explanation?: string
}

/**
 * Documentation link type
 */
export type DocumentationLink<T> = T & {
	__docs__: string
}

/**
 * Example usage type
 */
export type ExampleUsage<T> = T & {
	__example__: string
}

/**
 * Quick fix type
 */
export type QuickFix<T> = T & {
	__quick_fix__: QuickFixInfo
}

/**
 * Quick fix info
 */
export interface QuickFixInfo {
	/** Fix description */
	description: string
	/** Fix action */
	action: QuickFixAction
	/** Fix confidence */
	confidence: 'high' | 'medium' | 'low'
}

/**
 * Quick fix action
 */
export type QuickFixAction
	= | 'replace'
	| 'insert'
	| 'delete'
	| 'rename'
	| 'refactor'

// ============================================================================
// Error Reporting
// ============================================================================

/**
 * Error report
 */
export interface ErrorReport {
	/** Report ID */
	id: string
	/** Timestamp */
	timestamp: Date
	/** Error count */
	errorCount: number
	/** Warning count */
	warningCount: number
	/** Errors */
	errors: ReportedError[]
	/** Warnings */
	warnings: ReportedWarning[]
	/** Summary */
	summary: string
}

/**
 * Reported error
 */
export interface ReportedError {
	/** Error ID */
	id: string
	/** Error code */
	code: string
	/** Error message */
	message: string
	/** Category */
	category: ErrorCategory
	/** Location */
	location?: DiagnosticLocation
	/** Suggestions */
	suggestions?: SuggestionInfo[]
	/** Related info */
	related?: RelatedDiagnostic[]
}

/**
 * Reported warning
 */
export interface ReportedWarning {
	/** Warning ID */
	id: string
	/** Warning code */
	code: string
	/** Warning message */
	message: string
	/** Severity */
	severity: DiagnosticSeverity
	/** Location */
	location?: DiagnosticLocation
	/** Suggestions */
	suggestions?: SuggestionInfo[]
}

/**
 * Error reporter configuration
 */
export interface ErrorReporterConfig {
	/** Enable error reporting */
	enabled: boolean
	/** Include stack traces */
	includeStackTraces: boolean
	/** Include suggestions */
	includeSuggestions: boolean
	/** Include documentation links */
	includeDocs: boolean
	/** Maximum errors to report */
	maxErrors?: number
	/** Maximum warnings to report */
	maxWarnings?: number
	/** Output format */
	format: 'text' | 'json' | 'markdown' | 'html'
}

/**
 * Error filter
 */
export interface ErrorFilter {
	/** Filter by category */
	category?: ErrorCategory[]
	/** Filter by severity */
	severity?: DiagnosticSeverity[]
	/** Filter by code */
	code?: DiagnosticCode[]
	/** Exclude codes */
	excludeCode?: DiagnosticCode[]
	/** Custom filter function */
	filter?: (error: ReportedError) => boolean
}

// ============================================================================
// Error Types Catalog
// ============================================================================

/**
 * Common error types
 */
export type CommonErrorType
	= | 'type_error'
	| 'syntax_error'
	| 'reference_error'
	| 'range_error'
	| 'constraint_error'
	| 'assertion_error'
	| 'null_error'
	| 'undefined_error'
	| 'property_error'
	| 'argument_error'
	| 'return_error'
	| 'generic_error'

/**
 * Error type catalog entry
 */
export interface ErrorCatalogEntry {
	/** Error code */
	code: string
	/** Error type */
	type: CommonErrorType
	/** Error name */
	name: string
	/** Default message */
	message: string
	/** Description */
	description: string
	/** Category */
	category: ErrorCategory
	/** Common causes */
	commonCauses: string[]
	/** Suggested fixes */
	suggestedFixes: string[]
	/** Documentation */
	docs?: string
}

/**
 * Error catalog
 */
export interface ErrorCatalog {
	/** Catalog version */
	version: string
	/** Entries */
	entries: Record<string, ErrorCatalogEntry>
	/** Categories */
	categories: ErrorCategory[]
	/** Last updated */
	lastUpdated: Date
}
