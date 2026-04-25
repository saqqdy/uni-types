/**
 * Type Visualization
 *
 * Type visualization and debugging utilities.
 */

// ============================================================================
// Visual Representation
// ============================================================================

/**
 * Type diagram type
 */
export interface TypeDiagram<_T = unknown> {
	name: string
	type: string
	properties?: TypeDiagramProperty[]
	methods?: TypeDiagramMethod[]
	extends?: string[]
	implements?: string[]
	generics?: string[]
}

/**
 * Type diagram property
 */
export interface TypeDiagramProperty {
	name: string
	type: string
	visibility: 'public' | 'private' | 'protected'
	static: boolean
	readonly: boolean
	optional: boolean
	description?: string
}

/**
 * Type diagram method
 */
export interface TypeDiagramMethod {
	name: string
	parameters: { name: string, type: string }[]
	returnType: string
	visibility: 'public' | 'private' | 'protected'
	static: boolean
	async: boolean
	description?: string
}

/**
 * Type tree representation
 */
export interface TypeTree<T = unknown> {
	name: string
	type: TypeName
	children?: TypeTree[]
	value?: T
	depth: number
}

/**
 * Type name for visualization
 */
type TypeName = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'function' | 'null' | 'undefined' | 'unknown'

/**
 * Type graph representation
 */
export interface TypeGraph<_T = unknown> {
	nodes: TypeGraphNode[]
	edges: TypeGraphEdge[]
	root: string
}

/**
 * Type graph node
 */
export interface TypeGraphNode<T = unknown> {
	id: string
	name: string
	type: TypeName
	value?: T
	metadata?: Record<string, unknown>
}

/**
 * Type graph edge
 */
export interface TypeGraphEdge {
	from: string
	to: string
	label?: string
	type: 'property' | 'element' | 'extends' | 'implements'
}

/**
 * Type map representation
 */
export interface TypeMap<T = unknown> {
	key: string
	value: T
	type: TypeName
	children?: TypeMap[]
}

// ============================================================================
// Debugging Utilities
// ============================================================================

/**
 * Debug type wrapper
 */
export interface Debug<T> {
	_type: T
	_name: string
	_category: TypeCategory
	_properties: PropertyDebug[]
	_methods: MethodDebug[]
}

/**
 * Type category
 */
type TypeCategory = 'primitive' | 'object' | 'array' | 'function' | 'union' | 'intersection' | 'tuple'

/**
 * Property debug info
 */
interface PropertyDebug {
	name: string
	type: string
	optional: boolean
	readonly: boolean
}

/**
 * Method debug info
 */
interface MethodDebug {
	name: string
	parameters: { name: string, type: string }[]
	returnType: string
}

/**
 * Inspect type
 */
export interface Inspect<T> {
	type: ExtractTypeName<T>
	keys: keyof T extends never ? never : keyof T
	entries: [keyof T, T[keyof T]] extends [never, never] ? never : [keyof T, T[keyof T]]
	depth: number
	width: number
}

/**
 * Type name extraction
 */
type ExtractTypeName<T> = T extends string
	? 'string'
	: T extends number
		? 'number'
		: T extends boolean
			? 'boolean'
			: T extends null
				? 'null'
				: T extends undefined
					? 'undefined'
					: T extends (...args: unknown[]) => unknown
						? 'function'
						: T extends unknown[]
							? 'array'
							: T extends object
								? 'object'
								: 'unknown'

/**
 * Pretty print type
 */
export type Pretty<T> = T extends infer U
	? { [K in keyof U]: U[K] }
	: never

/**
 * Display type with formatting
 */
export type Display<T, _Format extends 'inline' | 'multiline' | 'compact' = 'inline'> = T

// ============================================================================
// Type Diff
// ============================================================================

/**
 * Type diff result
 */
export interface TypeDiff<T, U> {
	added: AddedProperties<T, U>
	removed: RemovedProperties<T, U>
	changed: ChangedProperties<T, U>
	unchanged: UnchangedProperties<T, U>
}

/**
 * Added properties type
 */
export type AddedProperties<T, U> = Exclude<keyof U, keyof T>

/**
 * Removed properties type
 */
export type RemovedProperties<T, U> = Exclude<keyof T, keyof U>

/**
 * Changed properties type
 */
export type ChangedProperties<T, U> = {
	[K in keyof T & keyof U]: T[K] extends U[K] ? (U[K] extends T[K] ? never : K) : K
}[keyof T & keyof U]

/**
 * Unchanged properties type
 */
export type UnchangedProperties<T, U> = Exclude<
	keyof T & keyof U,
	ChangedProperties<T, U>
>

/**
 * Property diff detail
 */
export interface PropertyDiff<T = unknown, U = unknown> {
	name: string
	oldType: T
	newType: U
	changeType: 'added' | 'removed' | 'changed'
}

// ============================================================================
// Type Comparison
// ============================================================================

/**
 * Compare two types
 */
export interface TypeComparison<_T, _U> {
	identical: boolean
	compatible: boolean
	similarity: number
	differences: PropertyDiff[]
}

/**
 * Type similarity score
 */
export type Similarity<T, U> = T extends U
	? U extends T
		? 100
		: 50
	: U extends T
		? 50
		: 0

/**
 * Type difference description
 */
export interface Difference<_T, _U> {
	type: 'missing_property' | 'extra_property' | 'type_mismatch'
	property: string
	expected?: string
	actual?: string
}

/**
 * Type compatibility result
 */
export interface Compatibility<_T, _U> {
	compatible: boolean
	score: number
	reasons: string[]
}

// ============================================================================
// Documentation Generation
// ============================================================================

/**
 * Type documentation
 */
export interface TypeDoc<_T = unknown> {
	name: string
	description?: string
	properties: DocEntry[]
	methods: DocMethod[]
	generics?: string[]
	examples?: string[]
	seeAlso?: string[]
	since?: string
	deprecated?: boolean
	deprecatedMessage?: string
}

/**
 * Documentation entry
 */
export interface DocEntry<T = unknown> {
	name: string
	type: string
	description?: string
	optional: boolean
	readonly: boolean
	default?: T
	examples?: string[]
	since?: string
	deprecated?: boolean
}

/**
 * Documentation method
 */
export interface DocMethod {
	name: string
	description?: string
	parameters: DocParameter[]
	returnType: string
	returnDescription?: string
	throws?: { type: string, description: string }[]
	examples?: string[]
	since?: string
	deprecated?: boolean
}

/**
 * Documentation parameter
 */
export interface DocParameter {
	name: string
	type: string
	description?: string
	optional: boolean
	default?: unknown
}

/**
 * Documentation category
 */
export interface DocCategory {
	name: string
	description?: string
	types: TypeDoc[]
	subcategories?: DocCategory[]
}

/**
 * Generate documentation from type
 */
export type GenerateDocs<T> = TypeDoc<T>

// ============================================================================
// ASCII Art
// ============================================================================

/**
 * ASCII tree representation
 */
export type ASCIITree<T extends string = string> = T

/**
 * ASCII tree node
 */
export interface ASCIITreeNode {
	value: string
	children: ASCIITreeNode[]
}

/**
 * ASCII tree options
 */
export interface ASCIITreeOptions {
	indent: string
	last: string
	first: string
	middle: string
	vertical: string
}

/**
 * ASCII table representation
 */
export type ASCIITable<T extends string = string> = T

/**
 * ASCII table column
 */
export interface ASCIITableColumn {
	header: string
	width: number
	align: 'left' | 'center' | 'right'
}

/**
 * ASCII table options
 */
export interface ASCIITableOptions {
	border: boolean
	padding: number
	headerSeparator: boolean
	rowSeparator: boolean
}

/**
 * ASCII graph representation
 */
export type ASCIIGraph<T extends string = string> = T

/**
 * ASCII graph options
 */
export interface ASCIIGraphOptions {
	width: number
	height: number
	title?: string
	xAxis?: string
	yAxis?: string
	char: string
}

// ============================================================================
// Type Visualization Options
// ============================================================================

/**
 * Visualization options
 */
export interface VisualizationOptions {
	format: 'text' | 'json' | 'markdown' | 'html' | 'mermaid'
	color: boolean
	depth: number
	includePrivate: boolean
	includeInherited: boolean
	includeBuiltins: boolean
}

/**
 * Mermaid diagram options
 */
export interface MermaidOptions {
	direction: 'TB' | 'BT' | 'LR' | 'RL'
	theme: 'default' | 'dark' | 'forest' | 'neutral'
}

/**
 * Mermaid class diagram
 */
export interface MermaidClassDiagram<_T = unknown> {
	type: 'classDiagram'
	classes: MermaidClass[]
	relationships: MermaidRelationship[]
}

/**
 * Mermaid class
 */
export interface MermaidClass {
	name: string
	annotation?: 'interface' | 'abstract'
	properties: { name: string, type: string, visibility: string }[]
	methods: { name: string, params: string, return: string, visibility: string }[]
}

/**
 * Mermaid relationship
 */
export interface MermaidRelationship {
	from: string
	to: string
	type: '<|--' | '*--' | 'o--' | '-->' | '--' | '..>'
	label?: string
}

// ============================================================================
// Type Expansion
// ============================================================================

/**
 * Expand type for display
 */
export type Expand<T> = T extends infer U
	? U extends (...args: unknown[]) => unknown
		? U
		: U extends object
			? { [K in keyof U]: Expand<U[K]> }
			: U
	: never

/**
 * Expand recursively
 */
export type ExpandRecursively<T> = T extends object
	? T extends infer U
		? { [K in keyof U]: ExpandRecursively<U[K]> }
		: never
	: T

/**
 * Printable type
 */
export type Printable<T> = T extends string
	? `"${T}"`
	: T extends number | boolean | null | undefined
		? `${T}`
		: T extends unknown[]
			? `Array<${Printable<T[number]>}>`
			: T extends object
				? `{ ${string}: ${string} }`
				: 'unknown'

// ============================================================================
// Type Introspection
// ============================================================================

/**
 * Introspection result
 */
export interface IntrospectionResult<_T = unknown> {
	name: string
	type: TypeName
	category: TypeCategory
	properties: PropertyIntrospection[]
	methods: MethodIntrospection[]
	generics: string[]
	module?: string
	filePath?: string
	line?: number
	column?: number
}

/**
 * Property introspection
 */
interface PropertyIntrospection {
	name: string
	type: string
	optional: boolean
	readonly: boolean
	static: boolean
	visibility: 'public' | 'private' | 'protected'
	description?: string
}

/**
 * Method introspection
 */
interface MethodIntrospection {
	name: string
	parameters: { name: string, type: string }[]
	returnType: string
	async: boolean
	static: boolean
	visibility: 'public' | 'private' | 'protected'
	description?: string
}

// ============================================================================
// Color Coding
// ============================================================================

/**
 * Type color coding
 */
export type TypeColor
	= | 'primitive'
		| 'object'
		| 'array'
		| 'function'
		| 'union'
		| 'intersection'
		| 'literal'
		| 'generic'

/**
 * Color scheme for visualization
 */
export interface ColorScheme {
	primitive: string
	object: string
	array: string
	function: string
	union: string
	intersection: string
	literal: string
	generic: string
	keyword: string
	comment: string
}
