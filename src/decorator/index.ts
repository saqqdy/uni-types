/**
 * Type Decorators
 *
 * Type decorator pattern utilities for TypeScript.
 */

// ============================================================================
// Decorator Types
// ============================================================================

/**
 * Generic decorator type
 */
export type Decorator<T> = (target: T, ...args: unknown[]) => T | void

/**
 * Class decorator type
 */
export type ClassDecorator<T extends abstract new (...args: unknown[]) => unknown> = (
	target: T,
	context: ClassDecoratorContext,
) => T | void

/**
 * Method decorator type
 */
export type MethodDecorator<T extends (...args: unknown[]) => unknown> = (
	target: unknown,
	context: ClassMethodDecoratorContext,
) => T | void

/**
 * Property decorator type
 */
export type PropertyDecorator<T = unknown> = (
	target: unknown,
	context: ClassFieldDecoratorContext,
) => T | void

/**
 * Parameter decorator type
 */
export type ParameterDecorator<T = unknown> = (
	target: unknown,
	propertyKey: string | symbol | undefined,
	parameterIndex: number,
) => T | void

/**
 * Accessor decorator type
 */
export type AccessorDecorator<T extends { get: unknown, set: unknown }> = (
	target: unknown,
	context: ClassAccessorDecoratorContext,
) => T | void

// ============================================================================
// Decorator Context Types
// ============================================================================

/**
 * Class decorator context
 */
export interface ClassDecoratorContext {
	kind: 'class'
	name: string | symbol
	addInitializer: (initializer: () => void) => void
}

/**
 * Method decorator context
 */
export interface ClassMethodDecoratorContext {
	kind: 'method'
	name: string | symbol
	static: boolean
	private: boolean
	access: { has: (object: unknown) => boolean }
	addInitializer: (initializer: () => void) => void
}

/**
 * Field decorator context
 */
export interface ClassFieldDecoratorContext {
	kind: 'field'
	name: string | symbol
	static: boolean
	private: boolean
	access: { get: (object: unknown) => unknown, set: (object: unknown, value: unknown) => void }
	addInitializer: (initializer: () => void) => void
}

/**
 * Accessor decorator context
 */
export interface ClassAccessorDecoratorContext {
	kind: 'accessor'
	name: string | symbol
	static: boolean
	private: boolean
	access: { get: (object: unknown) => unknown, set: (object: unknown, value: unknown) => void }
	addInitializer: (initializer: () => void) => void
}

/**
 * Getter decorator context
 */
export interface ClassGetterDecoratorContext {
	kind: 'getter'
	name: string | symbol
	static: boolean
	private: boolean
	access: { get: (object: unknown) => unknown }
	addInitializer: (initializer: () => void) => void
}

/**
 * Setter decorator context
 */
export interface ClassSetterDecoratorContext {
	kind: 'setter'
	name: string | symbol
	static: boolean
	private: boolean
	access: { set: (object: unknown, value: unknown) => void }
	addInitializer: (initializer: () => void) => void
}

// ============================================================================
// Decorator Composition
// ============================================================================

/**
 * Compose multiple decorators
 */
export type ComposeDecorators<T> = T extends Decorator<infer U>
	? (...decorators: Decorator<U>[]) => Decorator<U>
	: never

/**
 * Chain decorators sequentially
 */
export type ChainDecorators<T> = (
	first: Decorator<T>,
	second: Decorator<T>,
	...rest: Decorator<T>[]
) => Decorator<T>

/**
 * Apply decorators to target
 */
export type ApplyDecorators<T, D extends Decorator<T>[]> = (
	target: T,
	...decorators: D
) => T

/**
 * Merge decorator results
 */
export type MergeDecoratorResults<T> = (...results: (T | void)[]) => T | void

// ============================================================================
// Metadata Types
// ============================================================================

/**
 * Metadata key type
 */
export type MetadataKey = string | symbol | number

/**
 * Metadata value type
 */
export type MetadataValue<T = unknown> = T

/**
 * Metadata map type
 */
export type MetadataMap<T = unknown> = Map<MetadataKey, MetadataValue<T>>

/**
 * Metadata entry type
 */
export type MetadataEntry<T = unknown> = [MetadataKey, MetadataValue<T>]

/**
 * Metadata storage type
 */
export interface MetadataStorage<T = unknown> {
	has: (key: MetadataKey) => boolean
	get: (key: MetadataKey) => MetadataValue<T> | undefined
	set: (key: MetadataKey, value: MetadataValue<T>) => void
	delete: (key: MetadataKey) => boolean
	clear: () => void
	entries: () => IterableIterator<MetadataEntry<T>>
}

// ============================================================================
// Reflect Metadata
// ============================================================================

/**
 * Reflect metadata type
 */
export interface ReflectMetadata<T = unknown> {
	define: <K extends MetadataKey>(key: K, value: MetadataValue<T>, target: unknown) => void
	get: <K extends MetadataKey>(key: K, target: unknown) => MetadataValue<T> | undefined
	has: <K extends MetadataKey>(key: K, target: unknown) => boolean
	delete: <K extends MetadataKey>(key: K, target: unknown) => boolean
	keys: (target: unknown) => MetadataKey[]
	getOwn: <K extends MetadataKey>(key: K, target: unknown) => MetadataValue<T> | undefined
	hasOwn: <K extends MetadataKey>(key: K, target: unknown) => boolean
}

/**
 * Define metadata on target
 */
export type DefineMetadata<K extends MetadataKey, V> = (
	key: K,
	value: V,
	target: unknown,
) => void

/**
 * Get metadata from target
 */
export type GetMetadata<K extends MetadataKey> = (
	key: K,
	target: unknown,
) => MetadataValue | undefined

/**
 * Check if metadata exists
 */
export type HasMetadata<K extends MetadataKey> = (
	key: K,
	target: unknown,
) => boolean

/**
 * Get own metadata (not inherited)
 */
export type GetOwnMetadata<K extends MetadataKey> = (
	key: K,
	target: unknown,
) => MetadataValue | undefined

/**
 * Get all metadata keys
 */
export type GetMetadataKeys = (target: unknown) => MetadataKey[]

// ============================================================================
// Decorator Factory
// ============================================================================

/**
 * Decorator factory type
 */
export type DecoratorFactory<T, O extends Record<string, unknown> = Record<string, never>> = (
	options: O,
) => Decorator<T>

/**
 * Decorator options type
 */
export interface DecoratorOptions<T = unknown> {
	name?: string
	enabled?: boolean
	priority?: number
	metadata?: Record<string, T>
}

/**
 * Decorator configuration type
 */
export interface DecoratorConfig<T = unknown> {
	decorator: Decorator<T>
	options: DecoratorOptions<T>
	condition?: (target: T) => boolean
}

/**
 * Create decorator with options
 */
export type CreateDecorator<T, O extends DecoratorOptions> = (
	options: Partial<O>,
) => Decorator<T>

// ============================================================================
// Common Decorators
// ============================================================================

/**
 * Frozen decorator result
 */
export type Frozen<T> = T & { readonly [K in keyof T]: T[K] }

/**
 * Sealed decorator result
 */
export type Sealed<T> = T

/**
 * Enumerable decorator options
 */
export interface EnumerableOptions {
	value: boolean
}

/**
 * Enumerable decorator result
 */
export type Enumerable<T> = T

/**
 * ReadOnly decorator result
 */
export type ReadOnly<T> = { readonly [K in keyof T]: T[K] }

/**
 * WriteOnly decorator result
 */
export type WriteOnly<T> = { [K in keyof T]: T[K] }

/**
 * Deprecated decorator options
 */
export interface DeprecatedOptions {
	message?: string
	since?: string
	alternative?: string
	removeIn?: string
}

/**
 * Deprecated decorator result
 */
export type Deprecated<T> = T

// ============================================================================
// Validation Decorators
// ============================================================================

/**
 * Required decorator result
 */
export type Required<T> = { [K in keyof T]-?: T[K] }

/**
 * Optional decorator result
 */
export type Optional<T> = { [K in keyof T]?: T[K] }

/**
 * NonNull decorator result
 */
export type NonNull<T> = { [K in keyof T]: NonNullable<T[K]> }

/**
 * Default value decorator options
 */
export interface DefaultOptions<T> {
	value: T
}

/**
 * Validate decorator options
 */
export interface ValidateOptions<T> {
	validator: (value: T) => boolean
	message?: string
}

/**
 * Validate decorator result
 */
export type Validate<T> = T

// ============================================================================
// Lifecycle Decorators
// ============================================================================

/**
 * Initialize decorator options
 */
export interface InitializeOptions {
	priority?: number
}

/**
 * Initialize decorator result
 */
export type Initialize<T> = T

/**
 * Dispose decorator result
 */
export type Dispose<T> = T

/**
 * Before decorator options
 */
export interface BeforeOptions<T extends (...args: unknown[]) => unknown> {
	hook: (...args: Parameters<T>) => void | boolean
}

/**
 * After decorator options
 */
export interface AfterOptions<T extends (...args: unknown[]) => unknown> {
	hook: (result: ReturnType<T>, ...args: Parameters<T>) => ReturnType<T> | void
}

/**
 * Around decorator options
 */
export interface AroundOptions<T extends (...args: unknown[]) => unknown> {
	wrap: (original: T, ...args: Parameters<T>) => ReturnType<T>
}

// ============================================================================
// Cache Decorators
// ============================================================================

/**
 * Cache decorator options
 */
export interface CacheOptions {
	ttl?: number
	key?: (...args: unknown[]) => string
	maxSize?: number
}

/**
 * Cache decorator result
 */
export type Cached<T> = T

/**
 * Memoize decorator options
 */
export interface MemoizeOptions {
	resolver?: (...args: unknown[]) => string
	cache?: Map<string, unknown>
}

/**
 * Memoize decorator result
 */
export type Memoized<T> = T

// ============================================================================
// Logging Decorators
// ============================================================================

/**
 * Log decorator options
 */
export interface LogOptions {
	level?: 'debug' | 'info' | 'warn' | 'error'
	includeArgs?: boolean
	includeResult?: boolean
	includeTime?: boolean
}

/**
 * Log decorator result
 */
export type Logged<T> = T

/**
 * Time decorator options
 */
export interface TimeOptions {
	label?: string
	logger?: (...args: unknown[]) => void
}

/**
 * Time decorator result
 */
export type Timed<T> = T

// ============================================================================
// Error Handling Decorators
// ============================================================================

/**
 * Catch decorator options
 */
export interface CatchOptions<E = Error> {
	handler: (error: E) => unknown
	rethrow?: boolean
}

/**
 * Catch decorator result
 */
export type Catch<T> = T

/**
 * Retry decorator options
 */
export interface RetryOptions {
	times?: number
	delay?: number
	backoff?: 'linear' | 'exponential'
	maxDelay?: number
}

/**
 * Retry decorator result
 */
export type Retry<T> = T

/**
 * Timeout decorator options
 */
export interface TimeoutOptions {
	ms: number
	message?: string
}

/**
 * Timeout decorator result
 */
export type Timeout<T> = T

// ============================================================================
// Serialization Decorators
// ============================================================================

/**
 * Serialize decorator options
 */
export interface SerializeOptions {
	name?: string
	format?: 'json' | 'xml' | 'yaml'
	exclude?: string[]
}

/**
 * Serialize decorator result
 */
export type Serializable<T> = T

/**
 * Deserialize decorator options
 */
export interface DeserializeOptions {
	validate?: boolean
	strict?: boolean
}

/**
 * JsonProperty decorator options
 */
export interface JsonPropertyOptions {
	name?: string
	type?: unknown
	format?: (value: unknown) => unknown
}
