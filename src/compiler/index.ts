/**
 * Type-Level Compiler Types
 *
 * Types for code generation and transformation.
 */

// ============================================================================
// AST Types
// ============================================================================

/**
 * AST node type
 */
export interface ASTNode<T = unknown> {
	type: ASTNodeType
	loc?: SourceLocation
	value?: T
	children?: ASTNode[]
}

/**
 * AST node type enumeration
 */
export type ASTNodeType = 'Program' | 'Expression' | 'Statement' | 'Declaration' | 'Identifier' | 'Literal' | 'Operator' | 'Function' | 'Class' | 'Module' | 'Comment' | 'BinaryExpression' | 'UnaryExpression' | 'CallExpression' | 'MemberExpression' | 'ArrowFunctionExpression' | 'ObjectExpression' | 'ArrayExpression' | 'Property' | 'ExpressionStatement' | 'VariableDeclaration' | 'VariableDeclarator' | 'FunctionDeclaration' | 'ClassDeclaration' | 'ClassBody' | 'MethodDefinition' | 'PropertyDefinition' | 'ReturnStatement' | 'IfStatement' | 'ForStatement' | 'WhileStatement' | 'BlockStatement' | 'ImportDeclaration' | 'ImportSpecifier' | 'ExportDeclaration'

/**
 * AST program type
 */
export interface ASTProgram extends ASTNode {
	type: 'Program'
	body: ASTStatement[]
	sourceType: 'script' | 'module'
}

/**
 * AST expression type
 */
export type ASTExpression = Identifier | Literal | BinaryExpression | UnaryExpression | CallExpression | MemberExpression | ArrowFunctionExpression | ObjectExpression | ArrayExpression

/**
 * AST statement type
 */
export type ASTStatement = ExpressionStatement | VariableDeclaration | FunctionDeclaration | ReturnStatement | IfStatement | ForStatement | WhileStatement | BlockStatement

/**
 * AST declaration type
 */
export type ASTDeclaration = VariableDeclaration | FunctionDeclaration | ClassDeclaration | ImportDeclaration | ExportDeclaration

/**
 * Source location
 */
export interface SourceLocation {
	start: Position
	end: Position
	filename?: string
}

/**
 * Position type
 */
export interface Position {
	line: number
	column: number
	offset: number
}

/**
 * Identifier node
 */
export interface Identifier extends ASTNode<string> {
	type: 'Identifier'
	name: string
}

/**
 * Literal node
 */
export interface Literal<T = unknown> extends ASTNode<T> {
	type: 'Literal'
	value: T
	raw?: string
}

/**
 * Binary expression node
 */
export interface BinaryExpression extends ASTNode {
	type: 'BinaryExpression'
	operator: BinaryOperator
	left: ASTExpression
	right: ASTExpression
}

/**
 * Unary expression node
 */
export interface UnaryExpression extends ASTNode {
	type: 'UnaryExpression'
	operator: UnaryOperator
	argument: ASTExpression
	prefix: boolean
}

/**
 * Call expression node
 */
export interface CallExpression extends ASTNode {
	type: 'CallExpression'
	callee: ASTExpression
	arguments: ASTExpression[]
}

/**
 * Member expression node
 */
export interface MemberExpression extends ASTNode {
	type: 'MemberExpression'
	object: ASTExpression
	property: ASTExpression
	computed: boolean
}

/**
 * Arrow function expression node
 */
export interface ArrowFunctionExpression extends ASTNode {
	type: 'ArrowFunctionExpression'
	params: Identifier[]
	body: ASTExpression | BlockStatement
	async: boolean
}

/**
 * Object expression node
 */
export interface ObjectExpression extends ASTNode {
	type: 'ObjectExpression'
	properties: Property[]
}

/**
 * Array expression node
 */
export interface ArrayExpression extends ASTNode {
	type: 'ArrayExpression'
	elements: (ASTExpression | null)[]
}

/**
 * Property node
 */
export interface Property extends ASTNode {
	type: 'Property'
	key: Identifier | Literal<string>
	value: ASTExpression
	kind: 'init' | 'get' | 'set'
	shorthand: boolean
}

/**
 * Expression statement node
 */
export interface ExpressionStatement extends ASTNode {
	type: 'ExpressionStatement'
	expression: ASTExpression
}

/**
 * Variable declaration node
 */
export interface VariableDeclaration extends ASTNode {
	type: 'VariableDeclaration'
	kind: 'var' | 'let' | 'const'
	declarations: VariableDeclarator[]
}

/**
 * Variable declarator node
 */
export interface VariableDeclarator extends ASTNode {
	type: 'VariableDeclarator'
	id: Identifier
	init?: ASTExpression
}

/**
 * Function declaration node
 */
export interface FunctionDeclaration extends ASTNode {
	type: 'FunctionDeclaration'
	id: Identifier
	params: Identifier[]
	body: BlockStatement
	async: boolean
	generator: boolean
}

/**
 * Class declaration node
 */
export interface ClassDeclaration extends ASTNode {
	type: 'ClassDeclaration'
	id: Identifier
	superClass?: ASTExpression
	body: ClassBody
	implements?: ASTExpression[]
}

/**
 * Class body node
 */
export interface ClassBody extends ASTNode {
	type: 'ClassBody'
	body: (MethodDefinition | PropertyDefinition)[]
}

/**
 * Method definition node
 */
export interface MethodDefinition extends ASTNode {
	type: 'MethodDefinition'
	key: Identifier
	value: ASTExpression
	kind: 'constructor' | 'method' | 'get' | 'set'
	static: boolean
}

/**
 * Property definition node
 */
export interface PropertyDefinition extends ASTNode {
	type: 'PropertyDefinition'
	key: Identifier
	value?: ASTExpression
	static: boolean
	readonly: boolean
}

/**
 * Return statement node
 */
export interface ReturnStatement extends ASTNode {
	type: 'ReturnStatement'
	argument?: ASTExpression
}

/**
 * If statement node
 */
export interface IfStatement extends ASTNode {
	type: 'IfStatement'
	test: ASTExpression
	consequent: ASTStatement
	alternate?: ASTStatement
}

/**
 * For statement node
 */
export interface ForStatement extends ASTNode {
	type: 'ForStatement'
	init?: VariableDeclaration | ASTExpression
	test?: ASTExpression
	update?: ASTExpression
	body: ASTStatement
}

/**
 * While statement node
 */
export interface WhileStatement extends ASTNode {
	type: 'WhileStatement'
	test: ASTExpression
	body: ASTStatement
}

/**
 * Block statement node
 */
export interface BlockStatement extends ASTNode {
	type: 'BlockStatement'
	body: ASTStatement[]
}

/**
 * Import declaration node
 */
export interface ImportDeclaration extends ASTNode {
	type: 'ImportDeclaration'
	specifiers: ImportSpecifier[]
	source: Literal<string>
}

/**
 * Import specifier node
 */
export interface ImportSpecifier extends ASTNode {
	type: 'ImportSpecifier'
	imported: Identifier
	local: Identifier
}

/**
 * Export declaration node
 */
export interface ExportDeclaration {
	type: 'ExportNamedDeclaration' | 'ExportDefaultDeclaration' | 'ExportAllDeclaration'
	declaration?: ASTDeclaration | ASTExpression
	source?: Literal<string>
	loc?: SourceLocation
}

// ============================================================================
// Operator Types
// ============================================================================

/**
 * Binary operator
 */
export type BinaryOperator = '+' | '-' | '*' | '/' | '%' | '==' | '!=' | '===' | '!==' | '<' | '>' | '<=' | '>=' | '&&' | '||' | '??' | 'in' | 'instanceof'

/**
 * Unary operator
 */
export type UnaryOperator = '-' | '+' | '!' | '~' | 'typeof' | 'void' | 'delete'

/**
 * Update operator
 */
export type UpdateOperator = '++' | '--'

/**
 * Assignment operator
 */
export type AssignmentOperator = '=' | '+=' | '-=' | '*=' | '/=' | '%=' | '**=' | '<<=' | '>>=' | '>>>=' | '&=' | '|=' | '^=' | '&&=' | '||=' | '??='

// ============================================================================
// Token Types
// ============================================================================

/**
 * Token type
 */
export interface Token<T = string> {
	type: TokenType
	value: T
	loc?: SourceLocation
}

/**
 * Token type enumeration
 */
export type TokenType = 'keyword' | 'identifier' | 'literal' | 'operator' | 'punctuation' | 'string' | 'number' | 'boolean' | 'null' | 'undefined' | 'comment' | 'eof'

/**
 * Token stream type
 */
export interface TokenStream {
	tokens: Token[]
	index: number
	next: () => Token
	peek: () => Token
	eof: () => boolean
	rewind: () => void
}

/**
 * Keyword type
 */
export type Keyword = 'var' | 'let' | 'const' | 'function' | 'class' | 'if' | 'else' | 'for' | 'while' | 'do' | 'switch' | 'case' | 'default' | 'break' | 'continue' | 'return' | 'throw' | 'try' | 'catch' | 'finally' | 'import' | 'export' | 'from' | 'as' | 'async' | 'await' | 'yield' | 'new' | 'delete' | 'typeof' | 'instanceof' | 'in' | 'of' | 'this' | 'super' | 'extends' | 'implements' | 'interface' | 'type' | 'enum' | 'namespace' | 'module' | 'declare' | 'abstract' | 'public' | 'private' | 'protected' | 'readonly' | 'static' | 'get' | 'set'

// ============================================================================
// Parser Types
// ============================================================================

/**
 * Parser type
 */
export interface Parser<T = ASTNode> {
	parse: (input: string | TokenStream) => ParserResult<T>
	parseWith: <U>(input: string | TokenStream, rule: string) => ParserResult<U>
}

/**
 * Parser result type
 */
export type ParserResult<T> = { success: true, value: T, rest?: TokenStream } | { success: false, error: ParseError }

/**
 * Parse error type
 */
export interface ParseError {
	message: string
	loc?: SourceLocation
	expected?: string[]
	found?: string
}

/**
 * Parse tree type
 */
export interface ParseTree<T = ASTNode> {
	root: T
	children: ParseTree[]
}

/**
 * Parser configuration
 */
export interface ParserConfig {
	ecmaVersion: number | 'latest'
	sourceType: 'script' | 'module'
	allowAwaitOutsideFunction?: boolean
	allowReturnOutsideFunction?: boolean
	allowSuperOutsideMethod?: boolean
	strictMode?: boolean
}

// ============================================================================
// Code Generation Types
// ============================================================================

/**
 * Code generator type
 */
export interface CodeGenerator<T = ASTNode> {
	generate: (ast: T) => GeneratedCode
	generateWith: (ast: T, options: CodeGeneratorOptions) => GeneratedCode
}

/**
 * Generated code type
 */
export interface GeneratedCode {
	code: string
	map?: SourceMap
	ast: ASTNode
}

/**
 * Source map type
 */
export interface SourceMap {
	version: number
	file?: string
	sourceRoot?: string
	sources: string[]
	sourcesContent?: (string | null)[]
	names: string[]
	mappings: string
}

/**
 * Source map consumer type
 */
export interface SourceMapConsumer {
	originalPositionFor: (position: GeneratedPosition) => OriginalPosition
	generatedPositionFor: (position: OriginalPosition) => GeneratedPosition
}

/**
 * Generated position
 */
export interface GeneratedPosition {
	line: number
	column: number
	bias?: 'GREATEST_LOWER_BOUND' | 'LEAST_UPPER_BOUND'
}

/**
 * Original position
 */
export interface OriginalPosition {
	source: string
	line: number
	column: number
	name?: string
}

/**
 * Code generator options
 */
export interface CodeGeneratorOptions {
	compact?: boolean
	comments?: boolean
	sourceMap?: boolean
	filename?: string
	indent?: string
	newline?: string
	quoteStyle?: 'single' | 'double' | 'auto'
	semicolons?: boolean
}

// ============================================================================
// Transformer Types
// ============================================================================

/**
 * Transformer type
 */
export interface Transformer<T = ASTNode> {
	name: string
	transform: (ast: T) => T
	visit?: (node: ASTNode) => ASTNode | undefined
}

/**
 * Transform pipeline type
 */
export interface TransformPipeline<T = ASTNode> {
	transformers: Transformer<T>
	add: (transformer: Transformer<T>) => void
	remove: (name: string) => void
	run: (ast: T) => TransformResult<T>
}

/**
 * Transform result type
 */
export interface TransformResult<T = ASTNode> {
	ast: T
	changed: boolean
	changes: TransformChange[]
}

/**
 * Transform change type
 */
export interface TransformChange {
	transformer: string
	node: ASTNode
	type: 'replace' | 'remove' | 'add'
}

/**
 * Transform visitor type
 */
export type TransformVisitor<T = ASTNode> = (node: ASTNode, context: TransformContext<T>) => ASTNode | undefined

/**
 * Transform context type
 */
export interface TransformContext<T = ASTNode> {
	parent: ASTNode | null
	key: string | number | null
	scope: Scope
	traverse: (node: ASTNode) => void
	replace: (node: T) => void
	remove: () => void
}

// ============================================================================
// Scope Types
// ============================================================================

/**
 * Scope type
 */
export interface Scope {
	type: ScopeType
	parent: Scope | null
	children: Scope[]
	bindings: Map<string, Binding>
	references: Reference[]
}

/**
 * Scope type enumeration
 */
export type ScopeType = 'global' | 'module' | 'function' | 'block' | 'class' | 'catch' | 'with'

/**
 * Binding type
 */
export interface Binding {
	name: string
	kind: 'var' | 'let' | 'const' | 'function' | 'class' | 'parameter'
	scope: Scope
	path: ASTNode
	referenced: boolean
}

/**
 * Reference type
 */
export interface Reference {
	name: string
	scope: Scope
	path: ASTNode
	type: 'read' | 'write'
}

// ============================================================================
// Formatter Types
// ============================================================================

/**
 * Formatter type
 */
export interface Formatter {
	format: (code: string) => FormattedCode
	formatAST: (ast: ASTNode) => FormattedCode
}

/**
 * Format options type
 */
export interface FormatOptions {
	indentSize: number
	indentStyle: 'space' | 'tab'
	printWidth: number
	tabWidth: number
	useTabs: boolean
	semi: boolean
	singleQuote: boolean
	quoteProps: 'as-needed' | 'consistent' | 'preserve'
	trailingComma: 'none' | 'es5' | 'all'
	bracketSpacing: boolean
	bracketSameLine: boolean
	arrowParens: 'avoid' | 'always'
	endOfLine: 'lf' | 'crlf' | 'cr' | 'auto'
}

/**
 * Formatted code type
 */
export interface FormattedCode {
	code: string
	sourceMap?: SourceMap
}

// ============================================================================
// Traverse Types
// ============================================================================

/**
 * Traverse visitor
 */
export interface TraverseVisitor {
	enter?: (node: ASTNode, parent: ASTNode | null, path: (string | number)[]) => void | boolean
	exit?: (node: ASTNode, parent: ASTNode | null, path: (string | number)[]) => void
}

/**
 * Traverse options
 */
export interface TraverseOptions {
	visitor: TraverseVisitor
	scope?: boolean
	replace?: boolean
}

// ============================================================================
// Print Types
// ============================================================================

/**
 * Printer type
 */
export interface Printer {
	print: (ast: ASTNode) => string
	printWith: (ast: ASTNode, options: PrintOptions) => string
}

/**
 * Print options
 */
export interface PrintOptions {
	indent: number
	newline: string
	comments: boolean
	locations: boolean
}
