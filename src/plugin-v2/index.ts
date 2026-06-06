/**
 * Plugin System Preview
 *
 * Preview of the v2.0.0 extensible plugin architecture,
 * providing type-safe plugin development and lifecycle management.
 */

// ============== Plugin Core ==============

/**
 * PluginV2 - Core plugin type (v2 preview)
 */
export interface PluginV2<T = unknown> {
	/** Plugin name */
	readonly name: string
	/** Plugin version */
	readonly version: string
	/** Plugin type */
	readonly type: PluginTypeV2
	/** Plugin data */
	readonly data: T
}

/**
 * Plugin type classification
 */
export type PluginTypeV2 = 'transform' | 'analysis' | 'generator' | 'linter' | 'formatter' | 'custom'

// ============== Plugin API ==============

/**
 * PluginAPIV2 - Plugin API type (v2 preview)
 */
export interface PluginAPIV2<T = unknown> {
	/** Plugin context */
	readonly context: PluginContextV2<T>
	/** Register a hook */
	registerHook: <H extends PluginHookV2>(hook: H) => void
	/** Unregister a hook */
	unregisterHook: (hookName: string) => void
	/** Get plugin config */
	getConfig: () => PluginConfigV2<T>
}

/**
 * PluginContextV2 - Plugin execution context
 */
export interface PluginContextV2<T = unknown> {
	/** Plugin data */
	readonly data: T
	/** Plugin metadata */
	readonly meta: PluginMetadataV2
	/** Plugin services */
	readonly services: PluginServicesV2
}

// ============== Plugin Hooks ==============

/**
 * PluginHookV2 - Plugin hook type (v2 preview)
 */
export interface PluginHookV2<T = unknown> {
	/** Hook name */
	readonly name: string
	/** Hook type */
	readonly type: HookTypeV2
	/** Hook handler */
	readonly handler: HookHandlerV2<T>
	/** Hook priority */
	readonly priority?: number
}

/**
 * Hook type classification
 */
export type HookTypeV2 = 'before' | 'after' | 'transform' | 'validate' | 'error'

/**
 * HookHandlerV2 - Hook handler function type
 */
export type HookHandlerV2<T = unknown> = (context: PluginContextV2<T>) => T | Promise<T>

// ============== Plugin Lifecycle ==============

/**
 * PluginInitV2 - Plugin initialization type (v2 preview)
 */
export interface PluginInitV2<T = unknown> {
	/** Plugin being initialized */
	readonly plugin: PluginV2<T>
	/** Init options */
	readonly options: PluginConfigV2<T>
	/** Init phase */
	readonly phase: InitPhaseV2
}

/**
 * Initialization phases
 */
export type InitPhaseV2 = 'construct' | 'configure' | 'validate' | 'activate'

/**
 * PluginLoadV2 - Plugin loading type (v2 preview)
 */
export interface PluginLoadV2<T = unknown> {
	/** Plugin being loaded */
	readonly plugin: PluginV2<T>
	/** Load order */
	readonly order: number
	/** Dependencies */
	readonly dependencies: string[]
	/** Load status */
	readonly status: LoadStatusV2
}

/**
 * Load status
 */
export type LoadStatusV2 = 'pending' | 'loading' | 'loaded' | 'failed' | 'unloaded'

/**
 * PluginConfigV2 - Plugin configuration (v2 preview)
 */
export interface PluginConfigV2<T = unknown> {
	/** Plugin name */
	readonly name: string
	/** Plugin options */
	readonly options: T
	/** Whether plugin is enabled */
	readonly enabled: boolean
	/** Plugin priority */
	readonly priority: number
}

// ============== Plugin Registry ==============

/**
 * PluginRegistryV2 - Plugin registry (v2 preview)
 */
export interface PluginRegistryV2<T = unknown> {
	/** Registered plugins */
	readonly plugins: Map<string, PluginV2<T>>
	/** Register a plugin */
	register: (plugin: PluginV2<T>) => void
	/** Unregister a plugin */
	unregister: (name: string) => void
	/** Get a plugin by name */
	get: (name: string) => PluginV2<T> | undefined
	/** Check if plugin is registered */
	has: (name: string) => boolean
	/** Get all plugin names */
	names: () => string[]
}

/**
 * RegisteredPlugin - A plugin that has been registered
 */
export type RegisteredPlugin<T = unknown> = PluginV2<T> & {
	/** Registration timestamp */
	readonly registeredAt: number
	/** Registration order */
	readonly order: number
}

// ============== Plugin Metadata ==============

/**
 * PluginMetadataV2 - Plugin metadata
 */
export interface PluginMetadataV2 {
	/** Plugin name */
	readonly name: string
	/** Plugin version */
	readonly version: string
	/** Plugin description */
	readonly description?: string
	/** Plugin author */
	readonly author?: string
	/** Plugin license */
	readonly license?: string
	/** Plugin homepage */
	readonly homepage?: string
	/** Plugin dependencies */
	readonly dependencies?: string[]
	/** Plugin tags */
	readonly tags?: string[]
}

/**
 * PluginServicesV2 - Services available to plugins
 */
export interface PluginServicesV2 {
	/** Logger service */
	logger: PluginLoggerV2
	/** Config service */
	config: PluginConfigServiceV2
	/** Event bus */
	events: PluginEventBusV2
}

/**
 * PluginLoggerV2 - Logger available to plugins
 */
export interface PluginLoggerV2 {
	info: (message: string, ...args: unknown[]) => void
	warn: (message: string, ...args: unknown[]) => void
	error: (message: string, ...args: unknown[]) => void
	debug: (message: string, ...args: unknown[]) => void
}

/**
 * PluginConfigServiceV2 - Config service for plugins
 */
export interface PluginConfigServiceV2 {
	get: <T = unknown>(key: string) => T | undefined
	set: (key: string, value: unknown) => void
	has: (key: string) => boolean
}

/**
 * PluginEventBusV2 - Event bus for plugins
 */
export interface PluginEventBusV2 {
	emit: (event: string, data: unknown) => void
	on: (event: string, handler: (data: unknown) => void) => void
	off: (event: string, handler: (data: unknown) => void) => void
}
