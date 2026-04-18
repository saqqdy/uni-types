/**
 * Configuration Management Types
 *
 * Types for configuration and environment management.
 */

// ============================================================================
// Config Types
// ============================================================================

/**
 * Configuration type
 */
export type Config<T = unknown> = {
	[key: string]: T
} & {
	__config?: true
}

/**
 * Configuration schema type
 */
export type ConfigSchema<T = unknown> = {
	[K in keyof T]: ConfigField<T[K]>
}

/**
 * Configuration field
 */
export type ConfigField<T = unknown> = {
	type: ConfigFieldType
	required?: boolean
	default?: T
	validator?: (value: T) => boolean
	transform?: (value: unknown) => T
	description?: string
	env?: string
	sensitive?: boolean
}

/**
 * Configuration field types
 */
export type ConfigFieldType = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'json'

/**
 * Configuration value
 */
export type ConfigValue<T = unknown> = T | undefined

/**
 * Configuration source
 */
export type ConfigSource = 'file' | 'env' | 'remote' | 'default' | 'cli' | 'inline'

/**
 * Configuration source priority
 */
export type ConfigPriority = Record<ConfigSource, number>

// ============================================================================
// Environment Types
// ============================================================================

/**
 * Environment type
 */
export type Environment = 'development' | 'staging' | 'production' | 'test' | 'local'

/**
 * Environment variable type
 */
export type EnvVar<T = unknown> = {
	value: T
	source: ConfigSource
	required: boolean
	default?: T
	description?: string
}

/**
 * Environment configuration
 */
export type EnvConfig<T = unknown> = {
	env: Environment
	config: T
	sources: Record<string, ConfigSource>
}

/**
 * Environment variable mapping
 */
export type EnvMapping<T = unknown> = {
	[K in keyof T]?: string
}

/**
 * Parse environment result
 */
export type ParseEnvResult<T = unknown> =
	| { success: true; config: T }
	| { success: false; errors: ConfigError[] }

// ============================================================================
// Validation Types
// ============================================================================

/**
 * Configuration validator
 */
export type ConfigValidator<T = unknown> = {
	validate: (config: T) => Promise<ConfigValidationResult<T>>
	schema: ConfigSchema<T>
}

/**
 * Configuration validation result
 */
export type ConfigValidationResult<T = unknown> =
	| { success: true; config: T }
	| { success: false; errors: ConfigError[] }

/**
 * Configuration error
 */
export type ConfigError = {
	path: string
	message: string
	value?: unknown
	expected?: string
}

/**
 * Configuration warnings
 */
export type ConfigWarning = {
	path: string
	message: string
	value?: unknown
	suggestion?: string
}

// ============================================================================
// Secret Types
// ============================================================================

/**
 * Secret type
 */
export type Secret<T = string> = {
	__secret: true
	value: T
	expiresAt?: Date
	rotatedAt?: Date
	version?: number
}

/**
 * Secret provider
 */
export type SecretProvider<T = string> = {
	get: (key: string) => Promise<Secret<T>>
	set: (key: string, value: T, options?: SecretOptions) => Promise<void>
	delete: (key: string) => Promise<void>
	rotate: (key: string) => Promise<Secret<T>>
}

/**
 * Secret configuration
 */
export type SecretConfig<T = string> = {
	provider: 'env' | 'file' | 'vault' | 'aws-secrets' | 'azure-keyvault' | 'gcp-secret'
	prefix?: string
	cache?: boolean
	cacheTTL?: number
	transform?: (value: string) => T
}

/**
 * Secret options
 */
export type SecretOptions = {
	expiresIn?: number
	tags?: Record<string, string>
	metadata?: Record<string, unknown>
}

// ============================================================================
// Feature Flag Types
// ============================================================================

/**
 * Feature flag type
 */
export type FeatureFlag<T = boolean> = {
	name: string
	enabled: T
	description?: string
	variants?: FeatureFlagVariant<T>[]
	targeting?: FeatureTargeting[]
	createdAt: Date
	updatedAt: Date
}

/**
 * Feature flag variant
 */
export type FeatureFlagVariant<T = unknown> = {
	name: string
	value: T
	weight?: number
	description?: string
}

/**
 * Feature targeting
 */
export type FeatureTargeting = {
	attribute: string
	operator: TargetingOperator
	values: unknown[]
	variant?: string
}

/**
 * Targeting operator
 */
export type TargetingOperator =
	| 'eq'
	| 'ne'
	| 'gt'
	| 'gte'
	| 'lt'
	| 'lte'
	| 'contains'
	| 'startsWith'
	| 'endsWith'
	| 'matches'
	| 'in'
	| 'notIn'

/**
 * Feature flags collection
 */
export type FeatureFlags<T = Record<string, boolean>> = {
	[K in keyof T]: FeatureFlag<T[K]>
}

/**
 * Feature flag configuration
 */
export type FeatureFlagConfig<T = Record<string, boolean>> = {
	flags: FeatureFlags<T>
	defaultValue: boolean
	refreshInterval?: number
	provider?: 'local' | 'launchdarkly' | 'optimizely' | 'split' | 'custom'
	onChange?: (flag: string, value: boolean) => void
}

// ============================================================================
// Config Loader Types
// ============================================================================

/**
 * Config loader type
 */
export type ConfigLoader<T = unknown> = {
	load: () => Promise<T>
	reload: () => Promise<T>
	watch: (callback: (config: T) => void) => () => void
}

/**
 * Config loader options
 */
export type ConfigLoaderOptions = {
	sources: ConfigSource[]
	priority?: ConfigPriority
	env?: Environment
	envPrefix?: string
	configPath?: string
	validate?: boolean
	schema?: ConfigSchema
}

/**
 * Config file format
 */
export type ConfigFileFormat = 'json' | 'yaml' | 'toml' | 'ini' | 'env'

/**
 * Remote config provider
 */
export type RemoteConfigProvider = {
	get: (key: string) => Promise<ConfigValue>
	set: (key: string, value: unknown) => Promise<void>
	delete: (key: string) => Promise<void>
	watch: (key: string, callback: (value: ConfigValue) => void) => () => void
}
