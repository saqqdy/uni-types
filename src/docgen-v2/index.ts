/**
 * Documentation Generation (v2)
 *
 * Enhanced documentation generation utilities for v2.0.0,
 * including JSDoc generation, API documentation, and type documentation.
 */

// ============== Type Documentation ==============

/**
 * TypeDocumentation - Type documentation with metadata
 */
export interface TypeDocumentation<T = unknown> {
	/** The documented type */
	type: T
	/** Type name */
	name: string
	/** Description */
	description?: string
	/** Examples */
	examples?: DocExample<T>[]
	/** Since version */
	since?: string
	/** Deprecation info */
	deprecated?: DeprecationInfoV2
	/** See also */
	see?: string[]
	/** Tags */
	tags?: string[]
}

/**
 * Deprecation info
 */
export interface DeprecationInfoV2 {
	/** Is deprecated */
	deprecated: boolean
	/** Deprecation message */
	message?: string
	/** Replacement type */
	replacement?: string
	/** Removal version */
	removedIn?: string
}

// ============== Auto Documentation ==============

/**
 * AutoDoc - Auto-generated documentation
 */
export interface AutoDoc<T = unknown> {
	/** The type being documented */
	type: T
	/** Generated description */
	description: string
	/** Generated examples */
	examples: string[]
	/** Inferred usage patterns */
	patterns: UsagePattern[]
	/** Related types */
	related: string[]
}

/**
 * Usage pattern
 */
export interface UsagePattern {
	/** Pattern name */
	name: string
	/** Pattern code */
	code: string
	/** Pattern description */
	description: string
}

// ============== Documentation Templates ==============

/**
 * DocTemplate - Documentation template
 */
export interface DocTemplate<T = unknown> {
	/** Template name */
	name: string
	/** Template content */
	content: string
	/** Template variables */
	variables: TemplateVariable<T>[]
	/** Template type */
	type: DocTemplateType
}

/**
 * Template variable
 */
export interface TemplateVariable<T = unknown> {
	/** Variable name */
	name: string
	/** Variable type */
	type: string
	/** Default value */
	default?: T
	/** Description */
	description: string
	/** Required */
	required: boolean
}

/**
 * Documentation template types
 */
export type DocTemplateType = 'api' | 'guide' | 'tutorial' | 'reference' | 'example'

/**
 * DocExample - Documentation example
 */
export interface DocExample<T = unknown> {
	/** Example title */
	title: string
	/** Example code */
	code: string
	/** Example description */
	description?: string
	/** Expected result */
	result?: T
	/** Language */
	language?: string
}

// ============== JSDoc Generation ==============

/**
 * GenerateJSDoc - JSDoc generation result
 */
export interface GenerateJSDoc<T = unknown> {
	/** JSDoc comment text */
	comment: string
	/** JSDoc tags */
	tags: JSDocTagV2[]
	/** The documented type */
	type: T
}

/**
 * JSDocTemplate - JSDoc template for generation
 */
export interface JSDocTemplate<_T = unknown> {
	/** Template name */
	name: string
	/** Description template */
	description: string
	/** Tags to include */
	tags: JSDocTagV2[]
	/** Example template */
	example?: string
}

/**
 * JSDocTagV2 - JSDoc tag
 */
export interface JSDocTagV2 {
	/** Tag name */
	tag: string
	/** Tag value */
	value?: string
	/** Tag type (for @param, @returns, etc.) */
	type?: string
	/** Tag description */
	description?: string
	/** Is optional */
	optional?: boolean
}

// ============== API Documentation ==============

/**
 * APIDocumentation - API documentation type
 */
export interface APIDocumentation<T = unknown> {
	/** API name */
	name: string
	/** API version */
	version: string
	/** API description */
	description: string
	/** Endpoints */
	endpoints: EndpointDoc<T>[]
	/** Authentication */
	authentication?: AuthDoc
	/** Base URL */
	baseUrl?: string
}

/**
 * EndpointDoc - Endpoint documentation
 */
export interface EndpointDoc<T = unknown> {
	/** HTTP method */
	method: string
	/** Path */
	path: string
	/** Description */
	description: string
	/** Parameters */
	parameters: ParameterDoc<T>[]
	/** Request body */
	requestBody?: RequestBodyDoc<T>
	/** Responses */
	responses: ResponseDoc<T>[]
	/** Tags */
	tags: string[]
	/** Deprecated */
	deprecated?: boolean
}

/**
 * ParameterDoc - Parameter documentation
 */
export interface ParameterDoc<T = unknown> {
	/** Parameter name */
	name: string
	/** Parameter location */
	in: ParamLocation
	/** Description */
	description: string
	/** Is required */
	required: boolean
	/** Parameter type */
	type: string
	/** Default value */
	default?: T
	/** Enum values */
	enum?: T[]
	/** Example value */
	example?: T
	/** Is deprecated */
	deprecated?: boolean
}

/**
 * Parameter location
 */
export type ParamLocation = 'path' | 'query' | 'header' | 'cookie'

/**
 * Request body documentation
 */
export interface RequestBodyDoc<T = unknown> {
	/** Description */
	description: string
	/** Content type */
	contentType: string
	/** Schema */
	schema: T
	/** Is required */
	required: boolean
}

/**
 * Response documentation
 */
export interface ResponseDoc<T = unknown> {
	/** Status code */
	statusCode: number
	/** Description */
	description: string
	/** Content type */
	contentType?: string
	/** Schema */
	schema?: T
}

/**
 * AuthDoc - Authentication documentation
 */
export interface AuthDoc {
	/** Auth type */
	type: 'bearer' | 'basic' | 'apikey' | 'oauth2'
	/** Description */
	description: string
	/** Header name */
	header?: string
	/** Query parameter name */
	queryParam?: string
}

// ============== Documentation Rendering ==============

/**
 * DocRenderOptions - Options for rendering documentation
 */
export interface DocRenderOptions {
	/** Output format */
	format: DocOutputFormat
	/** Include examples */
	includeExamples: boolean
	/** Include deprecated items */
	includeDeprecated: boolean
	/** Include private items */
	includePrivate: boolean
	/** Sort order */
	sortOrder: 'alphabetical' | 'source' | 'visibility'
}

/**
 * Documentation output formats
 */
export type DocOutputFormat = 'markdown' | 'html' | 'json' | 'yaml'

/**
 * DocRenderResult - Result of rendering documentation
 */
export interface DocRenderResult {
	/** Rendered content */
	content: string
	/** Output format */
	format: DocOutputFormat
	/** Number of documented items */
	itemCount: number
	/** Warnings */
	warnings: string[]
}
