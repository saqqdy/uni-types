/**
 * Type-Safe Configuration
 *
 * Type-safe configuration management utilities.
 */

// ============================================================================
// Config Schema
// ============================================================================

/**
 * Config schema type
 */
export type ConfigSchema<T extends Record<string, unknown> = Record<string, unknown>> = {
	[K in keyof T]: ConfigField<T[K]>
}

/**
 * Config field type
 */
export interface ConfigField<T = unknown> {
	type: ConfigFieldType
	required?: boolean
	default?: T
	description?: string
	env?: string
	transform?: (value: unknown) => T
	validate?: (value: T) => boolean
	enum?: T[]
	min?: number
	max?: number
	pattern?: RegExp
}

/**
 * Config field types
 */
export type ConfigFieldType
	= | 'string'
		| 'number'
		| 'boolean'
		| 'object'
		| 'array'
		| 'integer'
		| 'float'
		| 'date'
		| 'url'
		| 'email'
		| 'path'

/**
 * Config validation result
 */
export interface ConfigValidationResult<T = unknown> {
	valid: boolean
	errors: ConfigValidationError[]
	value: T
}

/**
 * Config validation error
 */
export interface ConfigValidationError {
	path: string
	message: string
	value: unknown
	expected?: string
}

/**
 * Config defaults type
 */
export type ConfigDefaults<T extends Record<string, unknown>> = {
	[K in keyof T]?: T[K]
}

// ============================================================================
// Environment Config
// ============================================================================

/**
 * Environment config type
 */
export type EnvConfig<T extends Record<string, unknown> = Record<string, unknown>> = {
	[K in keyof T]: EnvField<T[K]>
}

/**
 * Environment field type
 */
export interface EnvField<T = unknown> {
	env: string
	type: 'string' | 'number' | 'boolean' | 'json'
	required?: boolean
	default?: T
	description?: string
	transform?: (value: string) => T
	validate?: (value: T) => boolean
}

/**
 * Environment mapping type
 */
export type EnvMapping<T extends Record<string, unknown> = Record<string, unknown>> = {
	[K in keyof T]: string
}

/**
 * Environment transform type
 */
export type EnvTransform<T = unknown> = (value: string) => T

/**
 * Environment validation type
 */
export type EnvValidation<T = unknown> = (value: T) => boolean

/**
 * Environment variables type
 */
export type EnvVars<T extends EnvMapping = EnvMapping> = {
	[K in keyof T as T[K] extends string ? K : never]: string
}

// ============================================================================
// Multi-Source Config
// ============================================================================

/**
 * Multi-source config type
 */
export type MultiSourceConfig<
	Sources extends Record<string, Record<string, unknown>> = Record<string, Record<string, unknown>>,
> = Sources

/**
 * Config source type
 */
export interface ConfigSource<T extends Record<string, unknown> = Record<string, unknown>> {
	name: string
	priority: ConfigPriority
	load: () => Promise<T> | T
	watch?: (callback: (config: T) => void) => () => void
}

/**
 * Config priority type
 */
export type ConfigPriority = number

/**
 * Merged config type
 */
export type MergedConfig<
	Sources extends ConfigSource[],
> = Sources extends [infer First, ...infer Rest]
	? First extends ConfigSource<infer T>
		? Rest extends ConfigSource[]
			? T & MergedConfig<Rest>
			: T
		: Record<string, never>
	: Record<string, never>

// ============================================================================
// Config Builder
// ============================================================================

/**
 * Config builder type
 */
export interface ConfigBuilder<T extends Record<string, unknown> = Record<string, unknown>> {
	schema: <S extends ConfigSchema>(schema: S) => ConfigBuilder<T>
	defaults: <D extends Partial<T>>(defaults: D) => ConfigBuilder<T & D>
	env: <E extends EnvMapping>(mapping: E) => ConfigBuilder<T>
	source: <S extends ConfigSource>(source: S) => ConfigBuilder<T>
	validate: (validator: (config: T) => boolean) => ConfigBuilder<T>
	transform: <R extends Record<string, unknown>>(transformer: (config: T) => R) => ConfigBuilder<R>
	build: () => Promise<T>
}

/**
 * Config step type
 */
export interface ConfigStep<T = unknown, R = unknown> {
	name: string
	execute: (input: T) => Promise<R> | R
}

/**
 * Config pipeline type
 */
export interface ConfigPipeline<T = unknown> {
	steps: ConfigStep[]
	execute: () => Promise<T>
}

/**
 * Build config result
 */
export interface BuildConfig<T extends Record<string, unknown>> {
	config: T
	sources: string[]
	warnings: ConfigWarning[]
}

/**
 * Config warning type
 */
export interface ConfigWarning {
	path: string
	message: string
	source?: string
}

// ============================================================================
// Config Loading
// ============================================================================

/**
 * Config loader type
 */
export interface ConfigLoader<T extends Record<string, unknown> = Record<string, unknown>> {
	load: () => Promise<T>
	reload: () => Promise<T>
	validate: (config: unknown) => ConfigValidationResult<T>
}

/**
 * Load result type
 */
export type LoadResult<T extends Record<string, unknown>>
	= | { success: true, config: T, warnings: ConfigWarning[] }
		| { success: false, error: LoadError, warnings: ConfigWarning[] }

/**
 * Load error type
 */
export interface LoadError {
	code: LoadErrorCode
	message: string
	path?: string
	source?: string
	cause?: Error
}

/**
 * Load error codes
 */
export type LoadErrorCode
	= | 'FILE_NOT_FOUND'
		| 'PARSE_ERROR'
		| 'VALIDATION_ERROR'
		| 'MISSING_REQUIRED'
		| 'TYPE_MISMATCH'
		| 'PERMISSION_DENIED'
		| 'UNKNOWN'

/**
 * Load options type
 */
export interface LoadOptions<T extends Record<string, unknown> = Record<string, unknown>> {
	schema?: ConfigSchema<T>
	defaults?: Partial<T>
	env?: boolean
	envPrefix?: string
	sources?: ConfigSource[]
	watch?: boolean
	strict?: boolean
}

// ============================================================================
// Config Watching
// ============================================================================

/**
 * Config watcher type
 */
export interface ConfigWatcher<T extends Record<string, unknown> = Record<string, unknown>> {
	start: () => void
	stop: () => void
	onChange: (callback: (config: T) => void) => () => void
	onError: (callback: (error: Error) => void) => () => void
}

/**
 * Config change type
 */
export interface ConfigChange<T = unknown> {
	key: string
	oldValue: T | undefined
	newValue: T | undefined
	source: string
	timestamp: Date
}

/**
 * Config callback type
 */
export type ConfigCallback<T extends Record<string, unknown> = Record<string, unknown>> = (
	config: T,
	changes: ConfigChange[],
) => void

// ============================================================================
// Config File Formats
// ============================================================================

/**
 * Config file format type
 */
export type ConfigFileFormat = 'json' | 'yaml' | 'toml' | 'ini' | 'env' | 'js' | 'ts'

/**
 * JSON config type
 */
export type JSONConfig<T extends Record<string, unknown> = Record<string, unknown>> = T

/**
 * YAML config type
 */
export type YAMLConfig<T extends Record<string, unknown> = Record<string, unknown>> = T

/**
 * TOML config type
 */
export type TOMLConfig<T extends Record<string, unknown> = Record<string, unknown>> = T

// ============================================================================
// Config Accessors
// ============================================================================

/**
 * Config accessor type
 */
export interface ConfigAccessor<T extends Record<string, unknown> = Record<string, unknown>> {
	get: <K extends keyof T>(key: K) => T[K]
	getOr: <K extends keyof T>(key: K, defaultValue: T[K]) => T[K]
	has: <K extends keyof T>(key: K) => boolean
	set: <K extends keyof T>(key: K, value: T[K]) => void
	delete: <K extends keyof T>(key: K) => boolean
	clear: () => void
	all: () => T
}

/**
 * Deep config accessor
 */
export interface DeepConfigAccessor<T extends Record<string, unknown> = Record<string, unknown>> {
	get: <P extends string>(path: P) => PathValue<T, P>
	getOr: <P extends string, D>(path: P, defaultValue: D) => PathValue<T, P> | D
	has: <P extends string>(path: P) => boolean
	set: <P extends string, V>(path: P, value: V) => void
	delete: <P extends string>(path: P) => boolean
}

/**
 * Path value type
 */
type PathValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
	? K extends keyof T
		? PathValue<T[K], Rest>
		: never
	: P extends keyof T
		? T[P]
		: never

// ============================================================================
// Config Validation
// ============================================================================

/**
 * Config validator type
 */
export type ConfigValidator<T = unknown> = (value: T) => boolean

/**
 * Config rule type
 */
export interface ConfigRule<T = unknown> {
	name: string
	validate: ConfigValidator<T>
	message: string
}

/**
 * Config rules collection
 */
export type ConfigRules<T extends Record<string, unknown> = Record<string, unknown>> = {
	[K in keyof T]?: ConfigRule<T[K]>[]
}

// ============================================================================
// Config Secrets
// ============================================================================

/**
 * Secret config type
 */
export interface SecretConfig {
	redact: boolean
	prefix?: string
	sources?: SecretSource[]
}

/**
 * Secret source type
 */
export type SecretSource
	= | { type: 'env', name: string }
		| { type: 'file', path: string }
		| { type: 'vault', path: string, key: string }
		| { type: 'aws-sm', name: string, region?: string }
		| { type: 'azure-kv', vault: string, name: string }
		| { type: 'gcp-sm', project: string, name: string }

/**
 * Secret value type
 */
export interface SecretValue<T = string> {
	_value: T
	toString: () => string
	toJSON: () => string
}

// ============================================================================
// Config Environment
// ============================================================================

/**
 * Environment name type
 */
export type EnvironmentName = 'development' | 'staging' | 'production' | 'test'

/**
 * Environment config loader
 */
export interface EnvironmentConfigLoader<
	Dev extends Record<string, unknown> = Record<string, unknown>,
	Staging extends Record<string, unknown> = Record<string, unknown>,
	Production extends Record<string, unknown> = Record<string, unknown>,
	Test extends Record<string, unknown> = Record<string, unknown>,
> {
	development: () => Promise<Dev>
	staging: () => Promise<Staging>
	production: () => Promise<Production>
	test: () => Promise<Test>
}

/**
 * Environment-aware config
 */
export type EnvironmentAwareConfig<
	Dev extends Record<string, unknown> = Record<string, unknown>,
	Staging extends Record<string, unknown> = Record<string, unknown>,
	Production extends Record<string, unknown> = Record<string, unknown>,
	Test extends Record<string, unknown> = Record<string, unknown>,
> = {
	development: Dev
	staging: Staging
	production: Production
	test: Test
}[EnvironmentName]

// ============================================================================
// Config Types Helpers
// ============================================================================

/**
 * Extract config type from schema
 */
export type ExtractConfigFromSchema<S extends ConfigSchema> = {
	[K in keyof S]: S[K] extends ConfigField<infer T> ? T : never
}

/**
 * Make config partial
 */
export type PartialConfig<T extends Record<string, unknown>> = {
	[K in keyof T]?: T[K]
}

/**
 * Make config required
 */
export type RequiredConfig<T extends Record<string, unknown>> = {
	[K in keyof T]-?: T[K]
}

/**
 * Deep partial config
 */
export type DeepPartialConfig<T extends Record<string, unknown>> = {
	[K in keyof T]?: T[K] extends Record<string, unknown> ? DeepPartialConfig<T[K]> : T[K]
}

/**
 * Merge configs
 */
export type MergeConfigs<
	T extends Record<string, unknown>,
	U extends Record<string, unknown>,
> = Omit<T, keyof U> & U
