/**
 * Type-Level Package Manager (v1.8.0)
 *
 * Type-level package management utilities including:
 * - Package types
 * - Dependency types
 * - Resolution types
 * - Lock file types
 * - Registry types
 * - Monorepo types
 * - Plugin types
 * - Scripts types
 */

// ============================================================================
// Package Core Types
// ============================================================================

/**
 * Package type
 */
export interface Package<T = unknown> {
	name: PackageName
	version: PackageVersion
	description?: string
	main?: string
	module?: string
	types?: string
	exports?: PackageExports
	bin?: Record<string, string> | string
	scripts?: Record<string, string>
	dependencies?: Dependencies
	devDependencies?: Dependencies
	peerDependencies?: Dependencies
	optionalDependencies?: Dependencies
	bundledDependencies?: string[]
	engines?: Record<string, string>
	license?: string
	author?: string | Person
	contributors?: Person[]
	repository?: string | { type: string, url: string }
	bugs?: string | { url: string }
	homepage?: string
	keywords?: string[]
	files?: string[]
	sideEffects?: boolean | string[]
	private?: boolean
	publishConfig?: PublishConfig
	workspaces?: string[] | WorkspacesConfig
	meta?: T
}

/**
 * Package name
 */
export type PackageName = string

/**
 | Package version
 */
export type PackageVersion = string

/**
 * Package exports
 */
export type PackageExports
	= | string
		| Record<string, string | { defaultExport?: string, types?: string, import?: string, require?: string, node?: string, browser?: string }>

/**
 | Package meta
 */
export interface PackageMeta<T = unknown> {
	name: string
	version: string
	size?: number
	unpackedSize?: number
	downloads?: number
	deprecated?: string | boolean
	license?: string
	repository?: string
	homepage?: string
	bugs?: string
	tags?: Record<string, string>
	published: Date
	author?: Person
	maintainers?: Person[]
	keywords?: string[]
	custom?: T
}

/**
 | Person type
 */
export interface Person {
	name: string
	email?: string
	url?: string
}

/**
 | Publish config
 */
export interface PublishConfig {
	registry?: string
	access?: 'public' | 'restricted'
	tag?: string
	directory?: string
}

// ============================================================================
// Dependency Types
// ============================================================================

/**
 | Dependencies type
 */
export type Dependencies = Record<string, DependencyVersion>

/**
 * Dependency type
 */
export interface Dependency<T = unknown> {
	name: string
	version: DependencyVersion
	type: DependencyType
	optional?: boolean
	dev?: boolean
	peer?: boolean
	bundled?: boolean
	alias?: string
	resolved?: string
	integrity?: string
	extra?: T
}

/**
 | Dependency type enumeration
 */
export type DependencyType
	= | 'dependencies'
		| 'devDependencies'
		| 'peerDependencies'
		| 'optionalDependencies'
		| 'bundledDependencies'

/**
 | Dependency version
 */
export type DependencyVersion = string | SemVerRange

/**
 | Dependency graph
 */
export interface DependencyGraph<T = unknown> {
	root: string
	nodes: Map<string, DependencyNode<T>>
	edges: DependencyEdge[]
	cycles: string[][]
	depth: number
}

/**
 | Dependency node
 */
export interface DependencyNode<T = unknown> {
	name: string
	version: string
	dependencies: string[]
	dependents: string[]
	depth: number
	optional?: boolean
	dev?: boolean
	peer?: boolean
	resolved?: string
	integrity?: string
	extra?: T
}

/**
 | Dependency edge
 */
export interface DependencyEdge {
	from: string
	to: string
	type: DependencyType
	semver?: string
	optional?: boolean
}

/**
 | Dependency tree
 */
export interface DependencyTree<T = unknown> {
	name: string
	version: string
	dependencies: Map<string, DependencyTree<T>>
	depth: number
	flat?: Map<string, string>
	meta?: T
}

// ============================================================================
// SemVer Types
// ============================================================================

/**
 | SemVer version
 */
export interface SemVer {
	major: number
	minor: number
	patch: number
	prerelease?: string[]
	build?: string[]
	raw?: string
}

/**
 | SemVer range
 */
export type SemVerRange = string

/**
 | SemVer comparator
 */
export type SemVerComparator
	= | { operator: '=', version: SemVer }
		| { operator: '<' | '>' | '<=' | '>=', version: SemVer }
		| { operator: '~', version: SemVer }
		| { operator: '^', version: SemVer }

/**
 | SemVer satisfies
 */
export type SemVerSatisfies = (version: SemVer, range: SemVerRange) => boolean

/**
 | SemVer diff
 */
export type SemVerDiff
	= | 'major'
		| 'minor'
		| 'patch'
		| 'premajor'
		| 'preminor'
		| 'prepatch'
		| 'prerelease'
		| null

// ============================================================================
// Resolution Types
// ============================================================================

/**
 | Resolution type
 */
export interface Resolution<T = unknown> {
	name: string
	range: DependencyVersion
	strategy: ResolveStrategy
	result?: ResolutionResult<T>
}

/**
 | Resolution result
 */
export type ResolutionResult<T = unknown>
	= | { type: 'success', resolved: ResolvedPackage<T> }
		| { type: 'failure', error: ResolutionError<T> }

/**
 | Resolved package
 */
export interface ResolvedPackage<T = unknown> {
	name: string
	version: string
	resolved: string
	integrity?: string
	dependencies?: Dependencies
	optionalDependencies?: Dependencies
	peerDependencies?: Dependencies
	path?: string
	extra?: T
}

/**
 | Resolution error
 */
export interface ResolutionError<T = unknown> {
	code: ResolutionErrorCode
	message: string
	package?: string
	range?: DependencyVersion
	details?: T
}

/**
 | Resolution error code
 */
export type ResolutionErrorCode
	= | 'ETARGET'
		| 'E404'
		| 'E403'
		| 'ERESOLVE'
		| 'ELOCKED'
		| 'EUNSUPPORTEDPROTOCOL'
		| 'EMISSINGARG'
		| 'EINVALIDTAGNAME'
		| 'ENOTSUP'
		| 'EREGISTRY'
		| 'ENETWORK'
		| 'ETIMEOUT'

/**
 | Resolve strategy
 */
export type ResolveStrategy
	= | 'latest'
		| 'lowest'
		| 'highest'
		| 'semver'
		| 'tag'
		| 'git'
		| 'file'
		| 'link'
		| 'workspace'

/**
 | Resolution options
 */
export interface ResolutionOptions {
	strategy?: ResolveStrategy
	registry?: string
	scope?: string
	offline?: boolean
	preferOffline?: boolean
	update?: boolean
	depth?: number
}

// ============================================================================
// Lock File Types
// ============================================================================

/**
 | Lock file type
 */
export interface LockFile<T = unknown> {
	name: string
	version: string
	lockfileVersion: number
	requires?: boolean
	packages?: Record<string, LockEntry<T>>
	dependencies?: Record<string, LockEntry<T>>
}

/**
 | Lock entry
 */
export interface LockEntry<T = unknown> {
	version: string
	resolved?: string
	integrity?: string
	requires?: Dependencies
	dependencies?: Dependencies
	dev?: boolean
	optional?: boolean
	peer?: boolean
	bundled?: boolean
	link?: boolean
	extra?: T
}

/**
 | Lock format
 */
export type LockFormat
	= | 'npm'
		| 'yarn'
		| 'yarn2'
		| 'pnpm'

/**
 | Lock file options
 */
export interface LockFileOptions {
	format: LockFormat
	merge?: boolean
	prune?: boolean
	check?: boolean
}

// ============================================================================
// Registry Types
// ============================================================================

/**
 | Registry type
 */
export interface Registry<T = unknown> {
	name: string
	url: string
	auth?: RegistryAuth
	config?: RegistryConfig<T>
}

/**
 | Registry auth
 */
export interface RegistryAuth {
	token?: string
	username?: string
	password?: string
	auth?: string
}

/**
 | Registry config
 */
export interface RegistryConfig<T = unknown> {
	registry: string
	scope?: string
	authType?: 'legacy' | 'oauth' | 'token'
	cache?: boolean
	timeout?: number
	strictSSL?: boolean
	ca?: string
	cert?: string
	key?: string
	extra?: T
}

/**
 | Registry package
 */
export interface RegistryPackage<T = unknown> {
	name: string
	versions: Record<string, RegistryVersion<T>>
	time?: Record<string, string>
	keywords?: string[]
	license?: string
	readme?: string
	maintainers?: Person[]
	author?: Person
	repository?: { type: string, url: string }
	bugs?: { url: string }
	homepage?: string
	distTags?: Record<string, string>
	deprecated?: Record<string, string>
}

/**
 | Registry version
 */
export interface RegistryVersion<T = unknown> {
	name: string
	version: string
	description?: string
	keywords?: string[]
	license?: string
	main?: string
	module?: string
	types?: string
	exports?: PackageExports
	bin?: Record<string, string> | string
	scripts?: Record<string, string>
	dependencies?: Dependencies
	devDependencies?: Dependencies
	peerDependencies?: Dependencies
	optionalDependencies?: Dependencies
	bundledDependencies?: string[]
	engines?: Record<string, string>
	os?: string[]
	cpu?: string[]
	author?: Person
	contributors?: Person[]
	repository?: { type: string, url: string }
	bugs?: { url: string }
	homepage?: string
	dist?: {
		tarball: string
		shasum: string
		integrity: string
		fileCount?: number
		unpackedSize?: number
		npmSignature?: string
	}
	gitHead?: string
	hasInstallScript?: boolean
	deprecated?: string
	_extra?: T
}

/**
 | Dist tags
 */
export type DistTags = Record<string, string>

// ============================================================================
// Monorepo Types
// ============================================================================

/**
 | Workspace type
 */
export interface Workspace<T = unknown> {
	name: string
	path: string
	package: Package<T>
	dependencies: WorkspaceDependency[]
	dependents: string[]
	version: string
	private?: boolean
	location: string
}

/**
 | Workspace config
 */
export interface WorkspaceConfig<T = unknown> {
	packages?: string[]
	nohoist?: string[]
	hoistDependencies?: boolean[]
	nohoistDependencies?: string[]
	extra?: T
}

/**
 | Workspaces config
 */
export type WorkspacesConfig = WorkspaceConfig | string[]

/**
 | Workspace dependency
 */
export interface WorkspaceDependency {
	name: string
	version: string
	type: DependencyType
	workspace?: boolean
	alias?: string
}

/**
 | Workspace graph
 */
export interface WorkspaceGraph<T = unknown> {
	root: string
	workspaces: Map<string, Workspace<T>>
	edges: WorkspaceEdge[]
	order: string[]
	cycles: string[][]
}

/**
 | Workspace edge
 */
export interface WorkspaceEdge {
	from: string
	to: string
	type: DependencyType
	internal?: boolean
}

/**
 | Workspace options
 */
export interface WorkspaceOptions {
	path?: string
	filter?: string[]
	parallel?: boolean
	topological?: boolean
	topologicalDev?: boolean
	changed?: boolean
	since?: string
	includeDependents?: boolean
	includeDependencies?: boolean
}

// ============================================================================
// Plugin Types
// ============================================================================

/**
 | Package plugin
 */
export interface PackagePlugin<T = unknown> {
	name: string
	version?: string
	description?: string
	hooks: PluginHook<T>[]
	options?: T
}

/**
 | Plugin hook
 */
export type PluginHook<T = unknown>
	= | { type: 'preinstall', handler: (pkg: Package) => Package | void }
		| { type: 'postinstall', handler: (pkg: Package) => void }
		| { type: 'preuninstall', handler: (pkg: Package) => void }
		| { type: 'postuninstall', handler: (pkg: Package) => void }
		| { type: 'preresolve', handler: (dep: Dependency) => Dependency | void }
		| { type: 'postresolve', handler: (resolved: ResolvedPackage) => void }
		| { type: 'prefetch', handler: (pkg: Package) => Package | void }
		| { type: 'postfetch', handler: (pkg: Package) => void }
		| { type: 'prepack', handler: (pkg: Package) => Package }
		| { type: 'postpack', handler: (pkg: Package) => void }
		| { type: 'prepublish', handler: (pkg: Package) => Package }
		| { type: 'postpublish', handler: (pkg: Package) => void }
		| { type: 'custom', event: string, handler: (data: T) => T | void }

/**
 | Plugin config
 */
export interface PluginConfig<T = unknown> {
	name: string
	enabled: boolean
	options?: T
}

// ============================================================================
// Scripts Types
// ============================================================================

/**
 | Package script
 */
export type PackageScript = string

/**
 | Script runner
 */
export interface ScriptRunner<T = unknown> {
	name: string
	run: (script: string, args?: string[]) => ScriptResult<T>
	supported: string[]
}

/**
 | Script result
 */
export type ScriptResult<T = unknown>
	= | { type: 'success', output: string, exitCode: 0, duration: number, meta?: T }
		| { type: 'failure', error: string, exitCode: number, duration: number, meta?: T }

/**
 | Script options
 */
export interface ScriptOptions {
	cwd?: string
	env?: Record<string, string>
	stdio?: 'inherit' | 'pipe' | 'ignore'
	timeout?: number
	detached?: boolean
	shell?: boolean | string
}

// ============================================================================
// Install Types
// ============================================================================

/**
 | Install options
 */
export interface InstallOptions {
	production?: boolean
	dev?: boolean
	optional?: boolean
	peer?: boolean
	global?: boolean
	force?: boolean
	dryRun?: boolean
	legacyPeerDeps?: boolean
	strictPeerDeps?: boolean
	ignoreScripts?: boolean
	ignoreOptional?: boolean
	frozenLockfile?: boolean
	preferFrozenLockfile?: boolean
	update?: boolean
	depth?: number
	noSave?: boolean
	save?: boolean
	saveDev?: boolean
	saveOptional?: boolean
	savePeer?: boolean
	saveExact?: boolean
	savePrefix?: string
	audit?: boolean
	fund?: boolean
}

/**
 | Install result
 */
export interface InstallResult<T = unknown> {
	added: ResolvedPackage<T>[]
	removed: ResolvedPackage<T>[]
	updated: ResolvedPackage<T>[]
	audited?: number
	vulnerabilities?: Vulnerability[]
	duration: number
	warnings?: string[]
}

/**
 | Vulnerability
 */
export interface Vulnerability {
	name: string
	severity: 'critical' | 'high' | 'moderate' | 'low' | 'info'
	title: string
	url?: string
	dependents?: string[]
	vulnerableVersions?: string
	patchedVersions?: string
}

// ============================================================================
// Pack Types
// ============================================================================

/**
 | Pack options
 */
export interface PackOptions {
	dryRun?: boolean
	destination?: string
	filename?: string
	json?: boolean
	includeOnly?: string[]
	exclude?: string[]
}

/**
 | Pack result
 */
export interface PackResult<T = unknown> {
	filename: string
	size: number
	files: PackedFile[]
	integrity: string
	meta?: T
}

/**
 | Packed file
 */
export interface PackedFile {
	path: string
	size: number
	mode: number
}

// ============================================================================
// Config Types
// ============================================================================

/**
 | NPM config
 */
export interface NPMConfig {
	registry?: string
	scope?: Record<string, { registry: string }>
	auth?: Record<string, RegistryAuth>
	cache?: string
	prefix?: string
	proxy?: string
	httpsProxy?: string
	strictSSL?: boolean
	ca?: string[]
	cert?: string
	key?: string
}

/**
 | Yarn config
 */
export interface YarnConfig {
	registry?: string
	cacheFolder?: string
	globalFolder?: string
	installStatePath?: string
	lockfileFilename?: string
	nodeLinker?: 'pnp' | 'node-modules' | 'pnpm'
	nmMode?: 'hardlinks-local' | 'hardlinks-global'
	npmRegistries?: Record<string, { npmAuthToken?: string, npmAuthIdent?: string }>
}

/**
 | PNPM config
 */
export interface PNPMConfig {
	registry?: string
	storeDir?: string
	virtualStoreDir?: string
	stateDir?: string
	cacheDir?: string
	nodeLinker?: 'isolated' | 'hoisted' | 'pnp'
	hoistPattern?: string[]
	shamefullyHoist?: boolean
	strictPeerDependencies?: boolean
	autoInstallPeers?: boolean
}

// ============================================================================
// Lifecycle Types
// ============================================================================

/**
 | Lifecycle hook
 */
export type LifecycleHook
	= | 'preinstall'
		| 'install'
		| 'postinstall'
		| 'preuninstall'
		| 'uninstall'
		| 'postuninstall'
		| 'prepack'
		| 'pack'
		| 'postpack'
		| 'prepare'
		| 'prepublish'
		| 'prepublishOnly'
		| 'prepare'
		| 'publish'
		| 'postpublish'
		| 'prerestart'
		| 'restart'
		| 'postrestart'
		| 'prestart'
		| 'start'
		| 'poststart'
		| 'prestop'
		| 'stop'
		| 'poststop'
		| 'pretest'
		| 'test'
		| 'posttest'
		| 'preversion'
		| 'version'
		| 'postversion'

/**
 | Lifecycle options
 */
export interface LifecycleOptions {
	ignoreScripts?: boolean
	unsafePerm?: boolean
	user?: string
	group?: string
	scriptsPrependNodePath?: boolean
}
