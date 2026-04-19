/**
 * Plugin System Types
 *
 * Types for plugin and extension systems.
 */

// ============================================================================
// Plugin Types
// ============================================================================

/**
 * Plugin type
 */
export interface Plugin<T = unknown> {
	name: string
	version: string
	description?: string
	author?: string
	dependencies?: string[]
	config?: PluginConfig<T>
	install: (context: PluginContext<T>) => Promise<void> | void
	uninstall?: () => Promise<void> | void
	enabled?: boolean
}

/**
 * Plugin configuration
 */
export interface PluginConfig<T = unknown> {
	enabled?: boolean
	priority?: number
	scope?: 'global' | 'local'
	options?: T
	schema?: PluginConfigSchema
}

/**
 * Plugin config schema
 */
export interface PluginConfigSchema {
	type: 'object'
	properties: Record<string, PluginConfigProperty>
	required?: string[]
}

/**
 * Plugin config property
 */
export interface PluginConfigProperty {
	type: 'string' | 'number' | 'boolean' | 'array' | 'object'
	description?: string
	default?: unknown
	enum?: unknown[]
	minimum?: number
	maximum?: number
	minLength?: number
	maxLength?: number
}

/**
 * Plugin context
 */
export interface PluginContext<T = unknown> {
	app: unknown
	config: PluginConfig<T>
	logger?: PluginLogger
	plugins: PluginManager
	events: PluginEventBus
	api: PluginAPI<T>
}

/**
 * Plugin logger
 */
export interface PluginLogger {
	debug: (message: string, ...args: unknown[]) => void
	info: (message: string, ...args: unknown[]) => void
	warn: (message: string, ...args: unknown[]) => void
	error: (message: string, ...args: unknown[]) => void
}

/**
 * Plugin lifecycle
 */
export type PluginLifecycle = 'init' | 'start' | 'stop' | 'destroy' | 'enable' | 'disable' | 'install' | 'uninstall' | 'update'

/**
 * Plugin lifecycle hook
 */
export interface PluginLifecycleHook {
	event: PluginLifecycle
	handler: (plugin: Plugin) => void | Promise<void>
	priority?: number
}

// ============================================================================
// Plugin Manager Types
// ============================================================================

/**
 * Plugin manager type
 */
export interface PluginManager {
	plugins: Map<string, Plugin>
	register: (plugin: Plugin) => void
	unregister: (name: string) => void
	get: <T = unknown>(name: string) => Plugin<T> | undefined
	getAll: () => Plugin[]
	has: (name: string) => boolean
	enable: (name: string) => Promise<void>
	disable: (name: string) => Promise<void>
	load: (path: string) => Promise<Plugin>
	loadAll: (dir: string) => Promise<void>
	reload: (name: string) => Promise<void>
	resolve: (name: string) => string | null
}

/**
 * Plugin store type
 */
export interface PluginStore {
	plugins: Map<string, StoredPlugin>
	add: (plugin: StoredPlugin) => void
	remove: (name: string) => void
	get: (name: string) => StoredPlugin | undefined
	find: (query: PluginQuery) => StoredPlugin[]
	update: (name: string, update: Partial<StoredPlugin>) => void
}

/**
 * Stored plugin
 */
export interface StoredPlugin {
	name: string
	version: string
	path: string
	installedAt: Date
	enabled: boolean
	config?: PluginConfig
}

/**
 * Plugin query
 */
export interface PluginQuery {
	name?: string | RegExp
	version?: string
	enabled?: boolean
	tags?: string[]
}

// ============================================================================
// Hook Types
// ============================================================================

/**
 * Hook type
 */
export interface Hook<T = unknown> {
	name: string
	subscribers: HookSubscriber<T>
	priority: number
	async: boolean
	mutable: boolean
}

/**
 * Hook subscriber
 */
export type HookSubscriber<T = unknown> = (data: T, context: HookContext<T>) => void | Promise<void> | T | Promise<T>

/**
 * Hook configuration
 */
export interface HookConfig<T = unknown> {
	name: string
	priority?: number
	async?: boolean
	mutable?: boolean
	once?: boolean
	data?: T
}

/**
 * Hook result type
 */
export type HookResult<T = unknown> = { executed: true, data: T } | { executed: false, reason: string }

/**
 * Hook callback type
 */
export type HookCallback<T = unknown> = (error: Error | null, result?: T) => void

/**
 * Hook context type
 */
export interface HookContext<T = unknown> {
	name: string
	event: T
	hook: Hook<T>
	plugin?: Plugin
	break: () => void
	next: () => Promise<void>
}

/**
 * Hook executor
 */
export interface HookExecutor<T = unknown> {
	execute: (hook: Hook<T>, data: T) => Promise<T>
	executeSync: (hook: Hook<T>, data: T) => T
	executeParallel: (hooks: Hook<T>[], data: T) => Promise<T[]>
}

// ============================================================================
// Extension Types
// ============================================================================

/**
 * Extension type
 */
export interface Extension<T = unknown> {
	id: string
	name: string
	description?: string
	version: string
	extensionPoint: string
	handler: ExtensionHandler<T>
	config?: ExtensionConfig<T>
	priority?: number
}

/**
 * Extension handler
 */
export type ExtensionHandler<T = unknown> = (context: ExtensionContext<T>) => void | Promise<void> | T | Promise<T>

/**
 * Extension point type
 */
export interface ExtensionPoint<T = unknown> {
	id: string
	name: string
	description?: string
	extensions: Extension<T>[]
	schema?: ExtensionSchema
	multiple?: boolean
	priority?: number
}

/**
 * Extension configuration
 */
export interface ExtensionConfig<T = unknown> {
	enabled?: boolean
	priority?: number
	options?: T
}

/**
 * Extension schema
 */
export interface ExtensionSchema {
	input?: unknown
	output?: unknown
}

/**
 * Extension context
 */
export interface ExtensionContext<T = unknown> {
	extension: Extension<T>
	point: ExtensionPoint<T>
	data: T
	plugin?: Plugin
}

/**
 * Extension registry
 */
export interface ExtensionRegistry<T = unknown> {
	points: Map<string, ExtensionPoint<T>>
	registerPoint: (point: ExtensionPoint<T>) => void
	unregisterPoint: (id: string) => void
	registerExtension: (extension: Extension<T>) => void
	unregisterExtension: (extensionId: string) => void
	getExtensions: (pointId: string) => Extension<T>[]
	execute: (pointId: string, data: T) => Promise<T[]>
}

// ============================================================================
// Middleware Types
// ============================================================================

/**
 * Middleware type
 */
export type Middleware<T = unknown> = (context: MiddlewareContext<T>, next: () => Promise<void>) => Promise<void> | void

/**
 * Middleware configuration
 */
export interface MiddlewareConfig<T = unknown> {
	name?: string
	enabled?: boolean
	priority?: number
	match?: (context: MiddlewareContext<T>) => boolean
	options?: T
}

/**
 * Middleware pipeline
 */
export interface MiddlewarePipeline<T = unknown> {
	middlewares: Middleware<T>[]
	add: (middleware: Middleware<T>, config?: MiddlewareConfig<T>) => void
	remove: (name: string) => void
	execute: (context: MiddlewareContext<T>) => Promise<void>
	clear: () => void
}

/**
 * Middleware context
 */
export interface MiddlewareContext<T = unknown> {
	data: T
	request?: unknown
	response?: unknown
	state: Record<string, unknown>
}

/**
 * Middleware result
 */
export type MiddlewareResult<T = unknown> = { success: true, data: T } | { success: false, error: Error }

// ============================================================================
// Module Types
// ============================================================================

/**
 * Module type
 */
export interface Module<T = unknown> {
	name: string
	exports: ModuleExport<T>
	imports?: ModuleImport[]
	dependencies?: string[]
	version?: string
	load?: () => Promise<void>
	unload?: () => Promise<void>
}

/**
 * Module configuration
 */
export interface ModuleConfig<T = unknown> {
	name: string
	path?: string
	exports?: string[]
	imports?: string[]
	options?: T
	lazy?: boolean
	singleton?: boolean
}

/**
 * Module export
 */
export interface ModuleExport<T = unknown> {
	name: string
	value: T
	type?: 'value' | 'function' | 'class' | 'default'
}

/**
 * Module import
 */
export interface ModuleImport {
	name: string
	module: string
	as?: string
}

/**
 * Module loader
 */
export interface ModuleLoader {
	load: (name: string, path?: string) => Promise<Module>
	unload: (name: string) => Promise<void>
	reload: (name: string) => Promise<Module>
	resolve: (name: string) => string | null
}

// ============================================================================
// Registry Types
// ============================================================================

/**
 * Registry type
 */
export interface Registry<T = unknown> {
	entries: Map<string, RegistryEntry<T>>
	register: (entry: RegistryEntry<T>) => void
	unregister: (key: string) => void
	get: (key: string) => RegistryEntry<T> | undefined
	has: (key: string) => boolean
	clear: () => void
	keys: () => string[]
	values: () => RegistryEntry<T>[]
	entries_: () => IterableIterator<[string, RegistryEntry<T>]>
}

/**
 * Registry entry
 */
export interface RegistryEntry<T = unknown> {
	key: string
	value: T
	metadata?: Record<string, unknown>
	tags?: string[]
	createdAt: Date
	updatedAt: Date
}

/**
 * Registry configuration
 */
export interface RegistryConfig<T = unknown> {
	name?: string
	caseSensitive?: boolean
	validate?: (entry: RegistryEntry<T>) => boolean
	transform?: (entry: RegistryEntry<T>) => RegistryEntry<T>
}

// ============================================================================
// Event Bus Types
// ============================================================================

/**
 * Plugin event bus
 */
export interface PluginEventBus {
	emit: (event: string, data: unknown) => void
	on: (event: string, handler: (data: unknown) => void) => void
	off: (event: string, handler: (data: unknown) => void) => void
	once: (event: string, handler: (data: unknown) => void) => void
}

// ============================================================================
// API Types
// ============================================================================

/**
 * Plugin API type
 */
export interface PluginAPI<T = unknown> {
	provide: (name: string, api: unknown) => void
	provideMethod: (name: string, method: (...args: unknown[]) => unknown) => void
	require: (name: string) => unknown | undefined
	call: (name: string, ...args: unknown[]) => unknown
	config?: T
}
