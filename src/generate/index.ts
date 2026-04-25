/**
 * Code Generation Templates
 *
 * Type-level code generation templates and utilities.
 */

// ============================================================================
// Template Types
// ============================================================================

/**
 * Template type
 */
export interface Template<T extends Record<string, unknown> = Record<string, unknown>> {
	name: string
	params: T
	generate: () => string
}

/**
 * Template string type
 */
export type TemplateString<
	S extends string,
	V extends Record<string, string | number | bigint | boolean | null | undefined>,
> = S extends `${infer Head}{{${infer K}}}${infer Tail}`
	? K extends keyof V
		? `${Head}${V[K]}${TemplateString<Tail, V>}`
		: `${Head}{{${K}}}${TemplateString<Tail, V>}`
	: S

/**
 * Template literal type
 */
export type TemplateLiteral<T extends string> = T

/**
 * Template result type
 */
export interface TemplateResult<T = string> {
	code: T
	errors: TemplateError[]
	warnings: TemplateWarning[]
}

/**
 * Template error type
 */
export interface TemplateError {
	code: string
	message: string
	line?: number
	column?: number
}

/**
 * Template warning type
 */
export interface TemplateWarning {
	code: string
	message: string
	line?: number
	column?: number
}

// ============================================================================
// Generation Types
// ============================================================================

/**
 * Generated type representation
 */
export interface GeneratedType<T = unknown> {
	name: string
	type: T
	description?: string
	exported: boolean
}

/**
 * Generated interface representation
 */
export interface GeneratedInterface<T extends Record<string, unknown> = Record<string, unknown>> {
	name: string
	properties: { [K in keyof T]: GeneratedProperty<T[K]> }
	extends?: string[]
	description?: string
	exported: boolean
}

/**
 * Generated property representation
 */
export interface GeneratedProperty<T = unknown> {
	name: string
	type: T
	optional: boolean
	readonly: boolean
	description?: string
}

/**
 * Generated class representation
 */
export interface GeneratedClass<_T extends Record<string, unknown> = Record<string, unknown>> {
	name: string
	properties: GeneratedProperty[]
	methods: GeneratedMethod[]
	extends?: string
	implements?: string[]
	constructor?: GeneratedConstructor
	description?: string
	exported: boolean
}

/**
 * Generated method representation
 */
export interface GeneratedMethod<T = unknown> {
	name: string
	parameters: GeneratedParameter[]
	returnType: T
	accessModifier: 'public' | 'private' | 'protected'
	static: boolean
	async: boolean
	description?: string
}

/**
 * Generated parameter representation
 */
export interface GeneratedParameter<T = unknown> {
	name: string
	type: T
	optional: boolean
	default?: T
	description?: string
}

/**
 * Generated constructor representation
 */
export interface GeneratedConstructor {
	parameters: GeneratedParameter[]
	accessModifier: 'public' | 'private' | 'protected'
	description?: string
}

/**
 * Generated function representation
 */
export interface GeneratedFunction<T = unknown> {
	name: string
	parameters: GeneratedParameter[]
	returnType: T
	async: boolean
	generic?: string[]
	description?: string
	exported: boolean
}

// ============================================================================
// Builder Types
// ============================================================================

/**
 * Type builder interface
 */
export interface TypeBuilder<T = unknown> {
	name: (name: string) => TypeBuilder<T>
	description: (desc: string) => TypeBuilder<T>
	export: (shouldExport: boolean) => TypeBuilder<T>
	build: () => GeneratedType<T>
}

/**
 * Interface builder interface
 */
export interface InterfaceBuilder<T extends Record<string, unknown> = Record<string, unknown>> {
	name: (name: string) => InterfaceBuilder<T>
	property: <K extends string, V>(key: K, type: V, options?: PropertyOptions) => InterfaceBuilder<T & Record<K, V>>
	extends: (...parents: string[]) => InterfaceBuilder<T>
	description: (desc: string) => InterfaceBuilder<T>
	export: (shouldExport: boolean) => InterfaceBuilder<T>
	build: () => GeneratedInterface<T>
}

/**
 * Property options
 */
export interface PropertyOptions {
	optional?: boolean
	readonly?: boolean
	description?: string
}

/**
 * Class builder interface
 */
export interface ClassBuilder<T extends Record<string, unknown> = Record<string, unknown>> {
	name: (name: string) => ClassBuilder<T>
	property: (name: string, type: unknown, options?: PropertyOptions) => ClassBuilder<T>
	method: (name: string, options?: MethodOptions) => ClassBuilder<T>
	extends: (parent: string) => ClassBuilder<T>
	implements: (...interfaces: string[]) => ClassBuilder<T>
	constructor: (params: GeneratedParameter[]) => ClassBuilder<T>
	description: (desc: string) => ClassBuilder<T>
	export: (shouldExport: boolean) => ClassBuilder<T>
	build: () => GeneratedClass<T>
}

/**
 * Method options
 */
export interface MethodOptions<T = unknown> {
	parameters?: GeneratedParameter[]
	returnType?: T
	accessModifier?: 'public' | 'private' | 'protected'
	static?: boolean
	async?: boolean
	description?: string
}

/**
 * Function builder interface
 */
export interface FunctionBuilder<T = unknown> {
	name: (name: string) => FunctionBuilder<T>
	parameter: (name: string, type: unknown, options?: ParameterOptions) => FunctionBuilder<T>
	returns: (type: T) => FunctionBuilder<T>
	async: (isAsync: boolean) => FunctionBuilder<T>
	generic: (...types: string[]) => FunctionBuilder<T>
	description: (desc: string) => FunctionBuilder<T>
	export: (shouldExport: boolean) => FunctionBuilder<T>
	build: () => GeneratedFunction<T>
}

/**
 * Parameter options
 */
export interface ParameterOptions<T = unknown> {
	optional?: boolean
	default?: T
	description?: string
}

// ============================================================================
// Output Formats
// ============================================================================

/**
 * Output format type
 */
export type OutputFormat = 'typescript' | 'javascript' | 'json' | 'yaml' | 'markdown' | 'dts'

/**
 * Formatted output type
 */
export interface FormattedOutput<T = string> {
	format: OutputFormat
	content: T
	metadata: OutputMetadata
}

/**
 * Output metadata type
 */
export interface OutputMetadata {
	generatedAt: string
	version: string
	source?: string
}

/**
 * Prettified output type
 */
export type Prettified<T extends string> = T

/**
 * Minified output type
 */
export type Minified<T extends string> = T

// ============================================================================
// Generation Utilities
// ============================================================================

/**
 * Generate from schema
 */
export type GenerateFromSchema<_T, S extends Record<string, SchemaField>> = {
	[K in keyof S]: S[K]['type']
}

/**
 * Schema field type
 */
export interface SchemaField<T = unknown> {
	type: T
	optional?: boolean
	description?: string
	default?: T
	validate?: (value: T) => boolean
}

/**
 * Generate from JSON
 */
export type GenerateFromJSON<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K]
}

/**
 * Generate from GraphQL
 */
export type GenerateFromGraphQL<T extends string> = T

/**
 * GraphQL type mapping
 */
export interface GraphQLTypeMapping {
	String: string
	Int: number
	Float: number
	Boolean: boolean
	ID: string
}

/**
 * Generate from OpenAPI
 */
export type GenerateFromOpenAPI<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K]
}

/**
 * OpenAPI type mapping
 */
export interface OpenAPITypeMapping {
	string: string
	number: number
	integer: number
	boolean: boolean
	array: unknown[]
	object: Record<string, unknown>
}

// ============================================================================
// Code Generation Options
// ============================================================================

/**
 * Generation options
 */
export interface GenerationOptions {
	format: OutputFormat
	prettify: boolean
	comments: boolean
	sourcemap: boolean
	declaration: boolean
}

/**
 * TypeScript generation options
 */
export interface TypeScriptOptions extends GenerationOptions {
	format: 'typescript'
	target: 'ES5' | 'ES2015' | 'ES2020' | 'ES2022' | 'ESNext'
	module: 'CommonJS' | 'ESModule' | 'UMD' | 'AMD'
	strict: boolean
}

/**
 * JavaScript generation options
 */
export interface JavaScriptOptions extends GenerationOptions {
	format: 'javascript'
	target: 'ES5' | 'ES2015' | 'ES2020' | 'ES2022'
	module: 'CommonJS' | 'ESModule' | 'UMD' | 'AMD'
}

/**
 * JSON generation options
 */
export interface JSONOptions extends GenerationOptions {
	format: 'json'
	indent: number | string
}

/**
 * YAML generation options
 */
export interface YAMLOptions extends GenerationOptions {
	format: 'yaml'
	indent: number
}

// ============================================================================
// Template Variables
// ============================================================================

/**
 * Template variable type
 */
export interface TemplateVariable<T = unknown> {
	name: string
	type: T
	default?: T
	description?: string
	required: boolean
}

/**
 * Template variables collection
 */
export type TemplateVariables<T extends Record<string, unknown> = Record<string, unknown>> = {
	[K in keyof T]: TemplateVariable<T[K]>
}

/**
 * Resolved template variables
 */
export type ResolvedVariables<T extends Record<string, unknown>> = {
	[K in keyof T]: T[K]
}

// ============================================================================
// Template Registry
// ============================================================================

/**
 * Template registry type
 */
export interface TemplateRegistry<T extends Template = Template> {
	register: (template: T) => void
	get: (name: string) => T | undefined
	has: (name: string) => boolean
	list: () => string[]
	remove: (name: string) => boolean
	clear: () => void
}

/**
 * Template entry type
 */
export interface TemplateEntry<T extends Template = Template> {
	name: string
	template: T
	category?: string
	tags?: string[]
	description?: string
}

// ============================================================================
// Code Patterns
// ============================================================================

/**
 * Singleton pattern
 */
export interface Singleton<T> {
	instance: T | null
	getInstance: () => T
}

/**
 * Factory pattern
 */
export interface Factory<T, O extends Record<string, unknown> = Record<string, never>> {
	create: (options: O) => T
}

/**
 * Builder pattern
 */
export interface Builder<T> {
	build: () => T
}

/**
 * Adapter pattern
 */
export interface Adapter<T, U> {
	adapt: (source: T) => U
}

/**
 * Decorator pattern (code generation)
 */
export interface CodeDecorator<T> {
	decorate: (code: T) => T
}

// ============================================================================
// AST Types for Code Generation
// ============================================================================

/**
 * AST node type
 */
export interface ASTNode<T = unknown> {
	type: string
	value?: T
	children?: ASTNode[]
	loc?: SourceLocation
}

/**
 * Source location type
 */
export interface SourceLocation {
	start: Position
	end: Position
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
 * AST visitor type
 */
export interface ASTVisitor<T = unknown> {
	enter?: (node: ASTNode<T>) => void
	exit?: (node: ASTNode<T>) => void
}

/**
 * AST transformer type
 */
export type ASTTransformer<T = unknown> = (node: ASTNode<T>) => ASTNode<T>
