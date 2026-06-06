/**
 * Developer Tools Integration
 *
 * Tools for IDE and editor integration, including auto-completion,
 * refactoring, and code actions.
 */

// ============== IDE Integration ==============

/**
 * IDEIntegration - IDE integration configuration
 */
export interface IDEIntegration<T = unknown> {
	/** The type being integrated */
	readonly target: T
	/** Supported IDE features */
	readonly features: IDEFeature[]
}

/**
 * IDE features supported
 */
export type IDEFeature
	= | 'completion'
	| 'hover'
	| 'diagnostics'
	| 'code-actions'
	| 'code-lens'
	| 'refactoring'
	| 'formatting'
	| 'navigation'
	| 'rename'
	| 'folding'

/**
 * LanguageServer - Language server protocol types
 */
export interface LanguageServer<T = unknown> {
	/** Server capabilities */
	readonly capabilities: ServerCapabilities
	/** Document sync kind */
	readonly documentSync: TextDocumentSyncKind
	/** Completion provider */
	readonly completionProvider?: CompletionProvider<T>
	/** Hover provider */
	readonly hoverProvider: boolean
	/** Code action provider */
	readonly codeActionProvider: boolean
}

/**
 * Server capabilities
 */
export interface ServerCapabilities {
	/** Completion capabilities */
	completionProvider?: { triggerCharacters?: string[] }
	/** Hover capabilities */
	hoverProvider: boolean
	/** Code action capabilities */
	codeActionProvider: boolean
	/** Code lens capabilities */
	codeLensProvider?: { resolveProvider?: boolean }
	/** Rename capabilities */
	renameProvider: boolean
	/** Formatting capabilities */
	documentFormattingProvider: boolean
}

/**
 * Text document sync kind
 */
export type TextDocumentSyncKind = 'none' | 'full' | 'incremental'

// ============== Code Actions ==============

/**
 * CodeAction - Code action type
 */
export interface CodeAction<T = unknown> {
	/** Action title */
	readonly title: string
	/** Action kind */
	readonly kind: CodeActionKind
	/** Action diagnostics */
	readonly diagnostics?: DiagnosticItem[]
	/** Action edit */
	readonly edit?: WorkspaceEdit<T>
	/** Is preferred */
	readonly isPreferred?: boolean
}

/**
 * Code action kinds
 */
export type CodeActionKind
	= | 'quickfix'
	| 'refactor'
	| 'refactor.extract'
	| 'refactor.inline'
	| 'refactor.rewrite'
	| 'source'
	| 'source.organizeImports'
	| 'source.fixAll'

/**
 * Diagnostic item
 */
export interface DiagnosticItem {
	/** Message */
	message: string
	/** Severity */
	severity: DiagnosticSeverity
	/** Range */
	range: TextRange
	/** Source */
	source?: string
	/** Code */
	code?: string | number
}

/**
 * Diagnostic severity
 */
export type DiagnosticSeverity = 'error' | 'warning' | 'info' | 'hint'

/**
 * Text range
 */
export interface TextRange {
	/** Start position */
	start: Position
	/** End position */
	end: Position
}

/**
 * Position in text
 */
export interface Position {
	/** Line number (0-based) */
	line: number
	/** Character offset (0-based) */
	character: number
}

// ============== Code Lens ==============

/**
 * CodeLens - Code lens type
 */
export interface CodeLens<T = unknown> {
	/** Lens range */
	readonly range: TextRange
	/** Lens command */
	readonly command?: DevToolsCommand<T>
	/** Lens data */
	readonly data?: T
}

/**
 * DevToolsCommand
 */
export interface DevToolsCommand<T = unknown> {
	/** Command title */
	title: string
	/** Command identifier */
	command: string
	/** Command arguments */
	arguments?: T[]
}

/**
 * WorkspaceEdit
 */
export interface WorkspaceEdit<T = unknown> {
	/** Document changes */
	changes: Map<string, TextEdit<T>[]>
}

/**
 * TextEdit
 */
export interface TextEdit<_T = unknown> {
	/** Edit range */
	range: TextRange
	/** New text */
	newText: string
}

// ============== Auto-Completion ==============

/**
 * CompletionItem - Completion item type
 */
export interface CompletionItem<T = unknown> {
	/** Label */
	label: string
	/** Kind */
	kind: CompletionItemKind
	/** Detail */
	detail?: string
	/** Documentation */
	documentation?: string
	/** Insert text */
	insertText?: string
	/** Sort text */
	sortText?: string
	/** Filter text */
	filterText?: string
	/** Data */
	data?: T
}

/**
 * Completion item kinds
 */
export type CompletionItemKind
	= | 'text'
	| 'method'
	| 'function'
	| 'constructor'
	| 'field'
	| 'variable'
	| 'class'
	| 'interface'
	| 'module'
	| 'property'
	| 'unit'
	| 'value'
	| 'enum'
	| 'keyword'
	| 'snippet'
	| 'color'
	| 'file'
	| 'reference'
	| 'type-parameter'

/**
 * CompletionProvider - Completion provider type
 */
export interface CompletionProvider<T = unknown> {
	/** Trigger characters */
	triggerCharacters?: string[]
	/** Provide completion items */
	provideCompletionItems: (document: string, position: Position) => CompletionItem<T>[]
}

/**
 * SnippetTemplate - Snippet template for completions
 */
export interface SnippetTemplate<T = unknown> {
	/** Template name */
	name: string
	/** Template prefix */
	prefix: string
	/** Template body */
	body: string[]
	/** Template description */
	description: string
	/** Template scope */
	scope?: string
	/** Template variables */
	variables?: SnippetVariable<T>[]
}

/**
 * Snippet variable
 */
export interface SnippetVariable<T = unknown> {
	/** Variable name */
	name: string
	/** Default value */
	default?: T
	/** Description */
	description?: string
	/** Choices */
	choices?: T[]
}

/**
 * SmartCompletion - Enhanced completion with context awareness
 */
export interface SmartCompletion<T = unknown> {
	/** Completion context */
	context: CompletionContext
	/** Suggested completions */
	suggestions: CompletionItem<T>[]
	/** Confidence score */
	confidence: number
}

/**
 * Completion context
 */
export interface CompletionContext {
	/** Trigger kind */
	triggerKind: 'invoked' | 'triggerCharacter' | 'triggerForIncompleteCompletions'
	/** Trigger character */
	triggerCharacter?: string
	/** Current line text */
	lineText: string
	/** Position in line */
	position: Position
}

// ============== Refactoring ==============

/**
 * RefactorAction - Refactoring action type
 */
export interface RefactorAction<T = unknown> {
	/** Action title */
	title: string
	/** Action kind */
	kind: RefactorKind
	/** Applicable range */
	range: TextRange
	/** Action edit */
	edit?: WorkspaceEdit<T>
	/** Is preferred */
	isPreferred?: boolean
}

/**
 * Refactor kinds
 */
export type RefactorKind
	= | 'extract-function'
	| 'extract-variable'
	| 'extract-type'
	| 'inline-function'
	| 'inline-variable'
	| 'rename'
	| 'move'
	| 'convert'
	| 'simplify'

/**
 * RefactorSuggestion - Suggested refactoring
 */
export interface RefactorSuggestion<T = unknown> {
	/** Suggestion title */
	title: string
	/** Suggestion description */
	description: string
	/** Applicable refactor actions */
	actions: RefactorAction<T>[]
	/** Estimated impact */
	impact: RefactorImpact
}

/**
 * Refactor impact level
 */
export type RefactorImpact = 'low' | 'medium' | 'high' | 'breaking'

/**
 * SafeRefactor - A refactoring that is guaranteed to be safe
 */
export type SafeRefactor<T> = RefactorAction<T> & {
	/** Verified safe */
	readonly safe: true
	/** No breaking changes */
	readonly breaking: false
}

/**
 * RefactorPreview - Preview of a refactoring before applying
 */
export interface RefactorPreview<T = unknown> {
	/** Original code */
	original: string
	/** Refactored code */
	refactored: string
	/** Changes description */
	changes: string[]
	/** Diff */
	diff: DiffLine[]
	/** Safety assessment */
	safety: RefactorSafetyAssessment<T>
}

/**
 * Diff line
 */
export interface DiffLine {
	/** Line type */
	type: 'add' | 'remove' | 'unchanged'
	/** Line content */
	content: string
	/** Line number */
	lineNumber: number
}

/**
 * Refactor safety assessment
 */
export interface RefactorSafetyAssessment<_T = unknown> {
	/** Is the refactor safe */
	safe: boolean
	/** Potential issues */
	issues: string[]
	/** Affected files */
	affectedFiles: string[]
	/** Risk level */
	risk: 'none' | 'low' | 'medium' | 'high'
}
