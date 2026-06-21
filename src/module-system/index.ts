/**
 * New Module System
 *
 * Improved module organization, imports, exports, and namespace management
 * for v2.0.0's cleaner API surface.
 */

// ============== Module Core ==============

/**
 * Module - Represents a type-level module
 */
export interface Module<T = unknown> {
	readonly name: string
	readonly version: string
	readonly exports: T
}

/**
 * Export - Type-level export
 */
export type Export<T> = T & { readonly __exported__: true }

/**
 * Import - Type-level import
 */
export type Import<T> = T & {
	readonly __imported__: true
	readonly __from__: string
}

/**
 * ReExport - Type-level re-export
 */
export type ReExport<T> = Export<T> & { readonly __reexported_from__: string }

// ============== Namespace Types ==============

/**
 * Namespace - Type-level namespace
 */
export interface Namespace<T extends Record<string, unknown> = Record<string, unknown>> {
	readonly name: string
	readonly members: T
}

/**
 * Qualified - Qualified type reference
 */
export type Qualified<NS extends Namespace, Key extends keyof NS['members']> = NS['members'][Key]

/**
 * Alias - Type alias
 */
export type Alias<T, Name extends string> = T & { readonly __alias__: Name }

// ============== Module Graph ==============

/**
 * ModuleGraph - Dependency graph
 */
export interface ModuleGraph {
	readonly nodes: Map<string, ModuleNode>
	readonly edges: Map<string, string[]>
}

/**
 * ModuleNode - A node in the module graph
 */
export interface ModuleNode {
	readonly name: string
	readonly path: string
	readonly entry: boolean
	readonly size: number
}

/**
 * ModuleDependency - A dependency edge
 */
export interface ModuleDependency {
	readonly from: string
	readonly to: string
	readonly type: DependencyType
	readonly typeOnly: boolean
}

/**
 * DependencyType - Types of module dependencies
 */
export type DependencyType = 'import' | 're-export' | 'dynamic-import' | 'side-effect'

// ============== Module Resolution ==============

/**
 * ModuleResolution - Resolution result
 */
export interface ModuleResolution<T = unknown> {
	readonly module: Module<T>
	readonly path: string
	readonly strategy: ResolutionStrategy
}

/**
 * ResolutionStrategy - How a module was resolved
 */
export type ResolutionStrategy = 'node-modules' | 'path-alias' | 'relative' | 'absolute' | 'virtual'

// ============== Module Scope ==============

/**
 * ModuleScope - Visibility scope
 */
export type ModuleScope = 'public' | 'protected' | 'private' | 'internal'

/**
 * ScopedMember - A member with visibility
 */
export interface ScopedMember<T = unknown> {
	readonly value: T
	readonly scope: ModuleScope
	readonly deprecated: boolean
	readonly since: string
}

// ============== Module Bundling ==============

/**
 * ModuleBundle - A bundle of modules
 */
export interface ModuleBundle {
	readonly name: string
	readonly modules: string[]
	readonly format: BundleFormat
	readonly treeShaking: boolean
}

/**
 * BundleFormat - Output format
 */
export type BundleFormat = 'esm' | 'cjs' | 'umd' | 'iife' | 'system'

/**
 * ModuleChunk - A chunk of a bundle
 */
export interface ModuleChunk {
	readonly name: string
	readonly modules: string[]
	readonly estimatedSize: number
	readonly async: boolean
}

// ============== Module Versioning ==============

/**
 * ModuleVersion - Version info
 */
export interface ModuleVersion {
	readonly major: number
	readonly minor: number
	readonly patch: number
	readonly prerelease?: string
	readonly build?: string
}

/**
 * VersionCompatibility - Compatibility between versions
 */
export type VersionCompatibility = 'compatible' | 'semver-compatible' | 'breaking' | 'unknown'
