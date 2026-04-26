/**
 * Type-Level Documentation Generator (v1.8.0)
 *
 * Type-level documentation generation including:
 * - Documentation types
 * - JSDoc types
 * - API documentation
 * - Type documentation
 * - Documentation output
 * - Documentation search
 * - Documentation navigation
 */

// ============================================================================
// Documentation Core Types
// ============================================================================

/**
 * Documentation type
 */
export interface Documentation<T = unknown> {
	title: string
	description?: string
	entries: DocEntry<T>[]
	sections: DocSection<T>[]
	toc: DocNavigation
	metadata: DocMetadata
}

/**
 * Documentation entry
 */
export interface DocEntry<T = unknown> {
	id: string
	name: string
	kind: DocEntryKind
	description?: string
	signature?: string
	examples?: TypeDocExample<T>[]
	remarks?: string
	deprecated?: string | boolean
	tags?: string[]
	related?: string[]
	source?: DocSource
}

/**
 * Documentation entry kind
 */
export type DocEntryKind
	= | 'function'
		| 'class'
		| 'interface'
		| 'type'
		| 'enum'
		| 'variable'
		| 'constant'
		| 'module'
		| 'namespace'
		| 'method'
		| 'property'
		| 'parameter'
		| 'constructor'
		| 'event'
		| 'component'
		| 'hook'
		| 'directive'
		| 'middleware'
		| 'utility'
		| 'helper'

/**
 * Documentation section
 */
export interface DocSection<T = unknown> {
	id: string
	title: string
	description?: string
	entries: DocEntry<T>[] | string[]
	children?: DocSection<T>[]
	order?: number
	level?: number
}

/**
 * Documentation page
 */
export interface DocPage<T = unknown> {
	id: string
	path: string
	title: string
	description?: string
	content: string | DocSection<T>[]
	layout?: DocLayout
	frontmatter?: Record<string, unknown>
	sidebar?: DocSidebar
	prev?: string | null
	next?: string | null
	editLink?: string
}

/**
 * Documentation metadata
 */
export interface DocMetadata {
	version: string
	generator: string
	generatedAt: Date
	source?: string
	repository?: string
	license?: string
	authors?: string[]
	keywords?: string[]
}

/**
 * Documentation source
 */
export interface DocSource {
	file?: string
	line?: number
	url?: string
	commit?: string
}

/**
 | Documentation layout
 */
export type DocLayout
	= | 'default'
		| 'api'
		| 'guide'
		| 'home'
		| 'page'
		| 'component'
		| 'custom'

// ============================================================================
// JSDoc Types
// ============================================================================

/**
 | JSDoc type
 */
export interface JSDoc<T = unknown> {
	description: string
	tags: JSDocTag<T>[]
	params?: JSDocParam[]
	returns?: JSDocReturn
	examples?: JSDocExample[]
}

/**
 * JSDoc tag
 */
export type JSDocTag<T = unknown>
	= | { name: 'param', content: JSDocParam }
		| { name: 'returns' | 'return', content: JSDocReturn }
		| { name: 'example', content: JSDocExample }
		| { name: 'deprecated', content: string | boolean }
		| { name: 'see', content: string }
		| { name: 'link', content: string }
		| { name: 'since', content: string }
		| { name: 'throws', content: JSDocThrows }
		| { name: 'type', content: string }
		| { name: 'readonly', content: boolean }
		| { name: 'private', content: boolean }
		| { name: 'protected', content: boolean }
		| { name: 'internal', content: boolean }
		| { name: 'category', content: string }
		| { name: 'typeparam', content: JSDocTypeParam }
		| { name: 'template', content: JSDocTypeParam }
		| { name: 'default', content: string }
		| { name: 'ignore', content: boolean }
		| { name: 'inheritdoc', content: boolean }
		| { name: 'inheritDoc', content: boolean }
		| { name: 'override', content: boolean }
		| { name: 'public', content: boolean }
		| { name: 'static', content: boolean }
		| { name: 'abstract', content: boolean }
		| { name: 'virtual', content: boolean }
		| { name: 'final', content: boolean }
		| { name: 'async', content: boolean }
		| { name: 'generator', content: boolean }
		| { name: 'custom', tag: string, content: T }

/**
 | JSDoc parameter
 */
export interface JSDocParam {
	name: string
	type?: string
	description?: string
	optional?: boolean
	default?: string
	rest?: boolean
	properties?: JSDocParam[]
}

/**
 | JSDoc return
 */
export interface JSDocReturn {
	type?: string
	description?: string
}

/**
 * JSDoc throws
 */
export interface JSDocThrows {
	type?: string
	description?: string
}

/**
 | JSDoc example
 */
export interface JSDocExample {
	code?: string
	language?: string
	description?: string
	output?: string
}

/**
 | JSDoc type parameter
 */
export interface JSDocTypeParam {
	name: string
	description?: string
	default?: string
	constraint?: string
}

// ============================================================================
// API Documentation
// ============================================================================

/**
 * API documentation type
 */
export interface APIDoc<T = unknown> {
	name: string
	version: string
	description?: string
	baseUrl?: string
	endpoints: APIEndpoint<T>[]
	auth?: APIAuth
	errors?: APIError[]
	rateLimit?: RateLimit
}

/**
 * API endpoint
 */
export interface APIEndpoint<T = unknown> {
	path: string
	method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS'
	description?: string
	parameters: APIParameter<T>[]
	requestBody?: APIBody<T>
	response?: APIResponse<T>
	errors?: APIError[]
	tags?: string[]
	deprecated?: boolean
	requireAuth?: boolean
}

/**
 * API parameter
 */
export interface APIParameter<T = unknown> {
	name: string
	in: 'path' | 'query' | 'header' | 'cookie'
	type?: string
	description?: string
	required?: boolean
	default?: T
	example?: T
	enum?: T[]
	min?: number
	max?: number
	minLength?: number
	maxLength?: number
	pattern?: string
	schema?: APISchema
}

/**
 * API body
 */
export interface APIBody<T = unknown> {
	description?: string
	required?: boolean
	content: Record<string, APIMediaType<T>>
}

/**
 * API media type
 */
export interface APIMediaType<T = unknown> {
	schema?: APISchema<T>
	example?: T
	examples?: Record<string, { value: T, description?: string }>
}

/**
 | API schema
 */
export interface APISchema<T = unknown> {
	type?: string
	format?: string
	description?: string
	properties?: Record<string, APISchema>
	required?: string[]
	items?: APISchema
	enum?: T[]
	default?: T
	example?: T
	allOf?: APISchema[]
	oneOf?: APISchema[]
	anyOf?: APISchema[]
	not?: APISchema
	ref?: string
}

/**
 * API response
 */
export interface APIResponse<T = unknown> {
	status: number | 'default'
	description?: string
	headers?: Record<string, APIHeader>
	content?: Record<string, APIMediaType<T>>
}

/**
 * API header
 */
export interface APIHeader {
	name: string
	type?: string
	description?: string
	required?: boolean
	default?: string
}

/**
 | API error
 */
export interface APIError {
	code: string | number
	status: number
	message: string
	description?: string
	solution?: string
}

/**
 | API auth
 */
export interface APIAuth {
	type: 'basic' | 'bearer' | 'apiKey' | 'oauth2' | 'jwt' | 'custom'
	description?: string
	header?: string
	query?: string
	scopes?: string[]
}

/**
 * Rate limit
 */
export interface RateLimit {
	requests: number
	period: number
	retryAfter?: number
}

// ============================================================================
// Type Documentation
// ============================================================================

/**
 * Type documentation
 */
export interface TypeDoc<T = unknown> {
	name: string
	type: string
	kind: TypeDocKind
	description?: string
	properties?: TypeDocProperty<T>[]
	methods?: TypeDocMethod<T>[]
	examples?: TypeDocExample<T>[]
	generics?: TypeDocGeneric[]
	hierarchy?: TypeHierarchy
	signatures?: TypeSignature[]
	source?: DocSource
	deprecated?: string | boolean
}

/**
 | Type documentation kind
 */
export type TypeDocKind
	= | 'interface'
		| 'class'
		| 'type'
		| 'enum'
		| 'function'
		| 'object'
		| 'primitive'
		| 'union'
		| 'intersection'
		| 'tuple'
		| 'array'
		| 'mapped'
		| 'conditional'
		| 'generic'
		| 'literal'
		| 'unknown'
		| 'any'
		| 'never'
		| 'void'
		| 'null'
		| 'undefined'

/**
 * Type documentation property
 */
export interface TypeDocProperty<T = unknown> {
	name: string
	type: string
	description?: string
	optional?: boolean
	readonly?: boolean
	default?: T
	examples?: TypeDocExample<T>[]
	source?: DocSource
	deprecated?: string | boolean
}

/**
 * Type documentation method
 */
export interface TypeDocMethod<T = unknown> {
	name: string
	description?: string
	parameters: TypeDocParam[]
	returnType?: string
	signatures?: TypeSignature[]
	examples?: TypeDocExample<T>[]
	source?: DocSource
	deprecated?: string | boolean
	abstract?: boolean
	static?: boolean
	override?: boolean
}

/**
 | Type documentation parameter
 */
export interface TypeDocParam {
	name: string
	type?: string
	description?: string
	optional?: boolean
	default?: string
	rest?: boolean
}

/**
 | Type documentation example
 */
export interface TypeDocExample<T = unknown> {
	code?: string
	language?: string
	description?: string
	output?: string
	result?: T
}

/**
 | Type documentation generic
 */
export interface TypeDocGeneric {
	name: string
	description?: string
	default?: string
	constraint?: string
}

/**
 | Type hierarchy
 */
export interface TypeHierarchy {
	parents?: string[]
	children?: string[]
	implements?: string[]
	extends?: string[]
}

/**
 | Type signature
 */
export interface TypeSignature {
	signature: string
	description?: string
	simplified?: string
}

// ============================================================================
// Documentation Output
// ============================================================================

/**
 * Documentation output type
 */
export interface DocOutput<T = unknown> {
	format: DocFormat
	content: T
	files: DocFile[]
	index?: DocIndex
	errors?: DocError[]
	stats?: DocStats
}

/**
 | Documentation format
 */
export type DocFormat
	= | 'markdown'
		| 'html'
		| 'json'
		| 'yaml'
		| 'xml'
		| 'pdf'
		| 'latex'
		| 'man'
		| 'dash'
		| 'mdx'

/**
 * Documentation file
 */
export interface DocFile {
	path: string
	name: string
	format: DocFormat
	size: number
	content?: string
	frontmatter?: Record<string, unknown>
}

/**
 | Documentation index
 */
export interface DocIndex {
	entries: Map<string, DocEntry>
	categories: Map<string, string[]>
	searchIndex?: SearchIndex
}

/**
 | Documentation error
 */
export interface DocError {
	code: string
	message: string
	file?: string
	line?: number
	severity: 'error' | 'warning' | 'info'
}

/**
 | Documentation statistics
 */
export interface DocStats {
	totalEntries: number
	totalFiles: number
	totalSize: number
	generationTime: number
	coverage?: {
		documented: number
		undocumented: number
		percentage: number
	}
}

/**
 | Documentation theme
 */
export interface DocTheme<T = unknown> {
	name: string
	description?: string
	layout: DocLayoutConfig<T>[]
	styles: string | Record<string, string>
	components: Map<string, string>
	options?: T
}

/**
 | Documentation layout config
 */
export interface DocLayoutConfig<T = unknown> {
	name: string
	template?: string
	slots?: Record<string, string>
	options?: T
}

// ============================================================================
// Documentation Search
// ============================================================================

/**
 * Documentation search
 */
export interface DocSearch<T = unknown> {
	index: SearchIndex
	query: (term: string) => SearchResult<T>[]
	suggest: (term: string) => string[]
	highlight?: boolean
}

/**
 * Search result
 */
export interface SearchResult<T = unknown> {
	id: string
	name: string
	kind: DocEntryKind
	path: string
	description?: string
	snippet?: string
	relevance: number
	terms?: string[]
	source?: T
}

/**
 | Search index
 */
export interface SearchIndex {
	entries: SearchIndexEntry[]
	invertedIndex: Map<string, string[]>
	metadata: SearchIndexMetadata
}

/**
 | Search index entry
 */
export interface SearchIndexEntry {
	id: string
	name: string
	kind: DocEntryKind
	path: string
	description?: string
	keywords?: string[]
	tokens?: string[]
	boost?: number
}

/**
 | Search index metadata
 */
export interface SearchIndexMetadata {
	version: string
	generatedAt: Date
	totalEntries: number
	totalTokens: number
	languages?: string[]
}

/**
 | Search options
 */
export interface SearchOptions {
	limit?: number
	minRelevance?: number
	highlight?: boolean
	include?: DocEntryKind[]
	exclude?: DocEntryKind[]
	fuzzy?: boolean
	caseSensitive?: boolean
}

// ============================================================================
// Documentation Navigation
// ============================================================================

/**
 | Documentation navigation
 */
export interface DocNavigation<T = unknown> {
	sidebar: DocSidebar<T>
	breadcrumbs: DocBreadcrumb[]
	menu?: DocMenu
	footer?: DocFooter
}

/**
 | Documentation sidebar
 */
export interface DocSidebar<T = unknown> {
	items: DocSidebarItem<T>[] | string[]
	collapsible?: boolean
	defaultCollapsed?: boolean
}

/**
 | Documentation sidebar item
 */
export type DocSidebarItem<T = unknown>
	= | { type: 'section', title: string, items: DocSidebarItem<T>[], collapsed?: boolean, link?: string }
		| { type: 'page', title: string, link: string, active?: boolean, badge?: string }
		| { type: 'link', title: string, link: string, external?: boolean }
		| { type: 'separator' }
		| { type: 'group', title: string, items: DocSidebarItem<T>[] }

/**
 | Documentation breadcrumb
 */
export interface DocBreadcrumb {
	items: BreadcrumbItem[]
	maxItems?: number
	showHome?: boolean
}

/**
 | Breadcrumb item
 */
export interface BreadcrumbItem {
	title: string
	link?: string
	icon?: string
}

/**
 | Documentation menu
 */
export interface DocMenu {
	items: MenuItem[]
	position?: 'top' | 'bottom'
}

/**
 | Menu item
 */
export type MenuItem
	= | { type: 'link', title: string, link: string, icon?: string, badge?: string }
		| { type: 'dropdown', title: string, items: MenuItem[], icon?: string }
		| { type: 'separator' }

/**
 | Documentation footer
 */
export interface DocFooter {
	content?: string
	links?: FooterLink[]
	social?: SocialLink[]
	copyright?: string
}

/**
 | Footer link
 */
export interface FooterLink {
	title: string
	link: string
	icon?: string
}

/**
 | Social link
 */
export interface SocialLink {
	type: 'github' | 'twitter' | 'discord' | 'npm' | 'youtube' | 'linkedin' | 'mastodon' | 'custom'
	link: string
	icon?: string
}

// ============================================================================
// Documentation Generation Options
// ============================================================================

/**
 | Documentation generation options
 */
export interface DocGenOptions {
	format?: DocFormat
	outputDir?: string
	theme?: string
	title?: string
	description?: string
	version?: string
	exclude?: string[]
	include?: string[]
	private?: boolean
	internal?: boolean
	sort?: 'alpha' | 'source' | 'kind' | 'category'
	categorize?: boolean
	categoryOrder?: string[]
	mdEngine?: 'markdown-it' | 'remark'
	plugin?: string[]
	watch?: boolean
	clean?: boolean
	verbose?: boolean
}

/**
 | Documentation config
 */
export interface DocConfig {
	input: string[]
	output: string
	format: DocFormat
	theme?: DocTheme
	navigation?: DocNavigation
	search?: SearchOptions
	plugins?: DocPlugin[]
	options?: DocGenOptions
}

/**
 | Documentation plugin
 */
export interface DocPlugin<T = unknown> {
	name: string
	version?: string
	options?: T
	setup?: (config: DocConfig) => void
	transform?: (entry: DocEntry) => DocEntry
	generate?: (output: DocOutput) => void
}

// ============================================================================
// Cross-Reference
// ============================================================================

/**
 | Cross-reference
 */
export interface CrossReference {
	from: string
	to: string
	kind: 'extends' | 'implements' | 'uses' | 'references' | 'calls' | 'imports' | 'exports' | 'inherits' | 'overrides'
}

/**
 | Reference map
 */
export interface ReferenceMap {
	refs: Map<string, string[]>
	backRefs: Map<string, string[]>
	graph?: ReferenceGraph
}

/**
 | Reference graph
 */
export interface ReferenceGraph {
	nodes: string[]
	edges: { from: string, to: string, kind: string }[]
}

// ============================================================================
// Documentation Metrics
// ============================================================================

/**
 | Documentation metrics
 */
export interface DocMetrics {
	coverage: DocCoverage
	quality: DocQuality
	completeness: DocCompleteness
	accessibility: DocAccessibility
}

/**
 | Documentation coverage
 */
export interface DocCoverage {
	types: number
	functions: number
	classes: number
	methods: number
	properties: number
	parameters: number
	total: number
}

/**
 | Documentation quality
 */
export interface DocQuality {
	hasDescription: number
	hasExamples: number
	hasRemarks: number
	hasReturnType: number
	avgDescriptionLength: number
	javadocCompliance: number
}

/**
 | Documentation completeness
 */
export interface DocCompleteness {
	fullyDocumented: number
	partiallyDocumented: number
	notDocumented: number
	missingExamples: number
	missingParams: number
	missingReturns: number
}

/**
 | Documentation accessibility
 */
export interface DocAccessibility {
	searchable: boolean
	indexed: boolean
	categorized: boolean
	hasToc: boolean
	hasBreadcrumbs: boolean
	mobileFriendly: boolean
}
