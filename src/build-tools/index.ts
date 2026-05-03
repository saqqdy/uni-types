/**
 * Build Tools Types
 *
 * Type definitions for various build tools and bundlers.
 */

// ============== Webpack Types ==============

/**
 * Webpack configuration type
 */
export interface WebpackConfig {
	entry?: string | string[] | Record<string, string | string[]>
	output?: WebpackOutput
	module?: WebpackModule
	plugins?: WebpackPlugin[]
	resolve?: WebpackResolve
	devServer?: WebpackDevServer
	mode?: 'development' | 'production' | 'none'
	devtool?: string | false
	optimization?: WebpackOptimization
	performance?: WebpackPerformance
	stats?: WebpackStats
	cache?: WebpackCache
}

export interface WebpackOutput {
	path?: string
	filename?: string | ((pathData: { chunk: unknown }) => string)
	publicPath?: string
	library?: string | { name: string, type: string }
	libraryTarget?: string
	chunkFilename?: string
	assetModuleFilename?: string
	clean?: boolean
}

export interface WebpackModule {
	rules?: WebpackRule[]
	unknownContextCritical?: boolean
	exprContextCritical?: boolean
}

export interface WebpackRule {
	test?: RegExp | string
	use?: string | WebpackLoader | (string | WebpackLoader)[]
	loader?: string
	options?: Record<string, unknown>
	include?: string | string[] | RegExp
	exclude?: string | string[] | RegExp
	type?: 'javascript/auto' | 'javascript/esm' | 'javascript/dynamic' | 'json' | 'webassembly/sync' | 'webassembly/async' | 'asset' | 'asset/resource' | 'asset/inline' | 'asset/source'
	oneOf?: WebpackRule[]
}

export interface WebpackLoader {
	loader: string
	options?: Record<string, unknown>
	ident?: string
}

export interface WebpackResolve {
	alias?: Record<string, string | false | { alias: string, name: string }>
	extensions?: string[]
	modules?: string | string[]
	mainFields?: string | string[]
	mainFiles?: string | string[]
	plugins?: WebpackResolvePlugin[]
}

export interface WebpackResolvePlugin {
	apply: (resolver: unknown) => void
}

export interface WebpackPlugin {
	apply: (compiler: unknown) => void
}

export interface WebpackDevServer {
	static?: boolean | { directory: string, publicPath?: string, serveIndex?: boolean, watch?: boolean }
	port?: number | string
	host?: string
	open?: boolean | string | { app?: string | string[] }
	hot?: boolean
	compress?: boolean
	historyApiFallback?: boolean | { index?: string, disableDotRule?: boolean }
	proxy?: Record<string, string | WebpackProxyConfig>
	headers?: Record<string, string>
	https?: boolean | { key: string, cert: string, ca?: string }
}

export interface WebpackProxyConfig {
	target: string
	changeOrigin?: boolean
	pathRewrite?: Record<string, string>
	headers?: Record<string, string>
	auth?: string
}

export interface WebpackOptimization {
	minimize?: boolean
	minimizer?: string | WebpackPlugin[]
	splitChunks?: WebpackSplitChunks
	runtimeChunk?: boolean | 'single' | 'multiple' | { name?: string }
	sideEffects?: boolean
	usedExports?: boolean
}

export interface WebpackSplitChunks {
	chunks?: 'all' | 'async' | 'initial' | ((chunk: unknown) => boolean)
	minSize?: number
	maxSize?: number
	minChunks?: number
	maxAsyncRequests?: number
	maxInitialRequests?: number
	cacheGroups?: Record<string, WebpackCacheGroup>
}

export interface WebpackCacheGroup {
	test?: RegExp | string | ((module: unknown) => boolean)
	name?: string | ((module: unknown, chunks: unknown[], key: string) => string)
	priority?: number
	minChunks?: number
	chunks?: 'all' | 'async' | 'initial'
	reuseExistingChunk?: boolean
	filename?: string
	enforce?: boolean
}

export interface WebpackPerformance {
	hints?: false | 'warning' | 'error'
	maxEntrypointSize?: number
	maxAssetSize?: number
	assetFilter?: (filename: string) => boolean
}

export interface WebpackStats {
	colors?: boolean
	modules?: boolean | 'nested'
	chunks?: boolean
	chunkModules?: boolean
	assets?: boolean
	entrypoints?: boolean
	warnings?: boolean
	errors?: boolean
	errorDetails?: boolean
	preset?: string
}

export interface WebpackCache {
	type: 'memory' | 'filesystem'
	cacheDirectory?: string
	buildDependencies?: Record<string, string[]>
}

/**
 * Webpack loader context
 */
export interface WebpackLoaderContext {
	mode: 'production' | 'development'
	version: string
	query: string | Record<string, unknown>
	resource: string
	resourcePath: string
	resourceQuery: string
	context: string
	rootContext: string
	emitWarning: (warning: Error) => void
	emitError: (error: Error) => void
	callback: (error?: Error | null, content?: string | Buffer, sourceMap?: unknown, additionalData?: unknown) => void
	async: () => WebpackCallback
	getOptions: () => Record<string, unknown>
}

export type WebpackCallback = (
	error?: Error | null,
	content?: string | Buffer,
	sourceMap?: unknown,
	additionalData?: unknown,
) => void

/**
 * Webpack module type
 */
export interface WebpackModule {
	built: boolean
	buildInfo: Record<string, unknown>
	buildMeta: Record<string, unknown>
	dependencies: WebpackDependency[]
	size: number
	type: string
}

export interface WebpackDependency {
	type: string
	request: string
	module: WebpackModule | null
}

// ============== Vite Types ==============

/**
 * Vite configuration type
 */
export interface ViteConfig {
	plugins?: VitePlugin[]
	root?: string
	base?: string
	mode?: string
	define?: Record<string, unknown>
	resolve?: ViteResolve
	publicDir?: string | false
	cacheDir?: string
	envDir?: string
	envPrefix?: string | string[]
	build?: ViteBuild
	server?: ViteServer
	preview?: VitePreview
	optimizeDeps?: ViteOptimizeDeps
	css?: ViteCSS
	json?: ViteJSON
	assetsInclude?: string | string[] | ((file: string) => boolean)
	logLevel?: 'info' | 'warn' | 'error' | 'silent'
	clearScreen?: boolean
	esbuild?: ViteESBuild
	appType?: 'spa' | 'mpa' | 'custom'
}

export interface VitePlugin {
	name: string
	enforce?: 'pre' | 'post'
	apply?: 'serve' | 'build' | ((config: ViteConfig, env: { mode: string, command: string }) => boolean)
	config?: (config: ViteConfig, env: { mode: string, command: string }) => ViteConfig | void
	configResolved?: (resolvedConfig: unknown) => void
	transform?: (code: string, id: string) => ViteTransformResult | Promise<ViteTransformResult>
	load?: (id: string, options?: { ssr?: boolean }) => ViteLoadResult | Promise<ViteLoadResult>
	resolveId?: (source: string, importer: string | undefined, options?: { ssr?: boolean }) => ViteResolveIdResult | Promise<ViteResolveIdResult>
	handleHotUpdate?: (ctx: ViteHotUpdateContext) => void | Promise<void>
	configureServer?: (server: ViteDevServer) => void | (() => void) | Promise<void | (() => void)>
	configurePreviewServer?: (server: VitePreviewServer) => void | Promise<void>
}

export interface ViteTransformResult {
	code?: string
	map?: unknown | { mappings: string }
	ast?: unknown
}

export interface ViteLoadResult {
	code: string
	map?: unknown | { mappings: string }
	ast?: unknown
}

export interface ViteResolveIdResult {
	id: string
	external?: boolean
}

export interface ViteHotUpdateContext {
	file: string
	server: ViteDevServer
	modules: unknown[]
	read: () => Promise<string>
}

export interface ViteResolve {
	alias?: ViteAlias | ViteAlias[]
	dedupe?: string[]
	mainFields?: string[]
	conditions?: string[]
	extensions?: string[]
	preserveSymlinks?: boolean
}

export interface ViteAlias {
	find: string | RegExp
	replacement: string
	customResolver?: (id: string) => string | Promise<string>
}

export interface ViteBuild {
	target?: string | string[]
	modulePreload?: boolean | ViteModulePreload
	lib?: ViteLibOptions
	sourcemap?: boolean | 'inline' | 'hidden' | 'inline-cheap' | 'hidden-cheap' | 'inline-cheap-module' | 'hidden-cheap-module'
	minify?: boolean | 'terser' | 'esbuild'
	terserOptions?: Record<string, unknown>
	sourcemapExcludeSources?: boolean
	reportCompressedSize?: boolean
	chunkSizeWarningLimit?: number
	rollupOptions?: RollupConfig
	assetsDir?: string
	assetsInlineLimit?: number
	write?: boolean
	emptyOutDir?: boolean
	copyPublicDir?: boolean
	manifest?: boolean | string
	ssrManifest?: boolean | string
	ssr?: boolean | string
	cssCodeSplit?: boolean
	dynamicImportVarsOptions?: Record<string, unknown>
	cssMinify?: boolean
}

export interface ViteModulePreload {
	resolve?: (id: string) => string | undefined
	css?: boolean
}

export interface ViteLibOptions {
	entry: string | string[] | { [entryAlias: string]: string }
	name?: string
	formats?: ('es' | 'cjs' | 'umd' | 'iife')[]
	fileName?: string | ((format: string) => string)
}

export interface ViteServer {
	host?: string | boolean
	port?: number
	strictPort?: boolean
	https?: boolean | ViteHTTPSOptions
	open?: boolean | string
	cors?: boolean | ViteCORSOptions
	hmr?: boolean | ViteHMROptions
	watch?: ViteWatchOptions
	proxy?: Record<string, string | ViteProxyConfig>
	middlewareMode?: boolean | 'ssr' | 'html'
	base?: string
	headers?: Record<string, string>
	fs?: ViteFSServer
	origin?: string
	sourcemapIgnoreList?: (relativeSourcePath: string, sourcemapPath: string) => boolean
	preTransformRequests?: boolean
}

export interface ViteHTTPSOptions {
	key: string | Buffer
	cert: string | Buffer
	ca?: string | Buffer
	pfx?: string | Buffer
	passphrase?: string
}

export interface ViteCORSOptions {
	origin?: string | string[] | boolean
	methods?: string[]
	allowedHeaders?: string[]
	exposedHeaders?: string[]
	credentials?: boolean
	maxAge?: number
}

export interface ViteHMROptions {
	protocol?: string
	host?: string
	port?: number
	path?: string
	timeout?: number
	overlay?: boolean
	client?: Record<string, unknown>
	server?: unknown
}

export interface ViteWatchOptions {
	usePolling?: boolean
	interval?: number
	ignored?: string | string[] | ((file: string) => boolean)
}

export interface ViteProxyConfig {
	target: string
	changeOrigin?: boolean
	rewrite?: (path: string) => string
	configure?: (proxy: unknown, options: ViteProxyConfig) => void
	bypass?: (req: unknown, res: unknown, options: ViteProxyConfig) => void | string | false | undefined
	headers?: Record<string, string>
}

export interface ViteFSServer {
	strict?: boolean
	allow?: string[]
	deny?: string[]
	cachedChecks?: boolean
}

export interface VitePreview {
	host?: string | boolean
	port?: number
	strictPort?: boolean
	https?: boolean | ViteHTTPSOptions
	open?: boolean | string
	cors?: boolean | ViteCORSOptions
	headers?: Record<string, string>
	proxy?: Record<string, string | ViteProxyConfig>
}

export interface ViteOptimizeDeps {
	include?: string[]
	exclude?: string[]
	esbuildOptions?: Record<string, unknown>
	force?: boolean
	discover?: unknown[]
	entries?: string | string[]
	noDiscovery?: boolean
}

export interface ViteCSS {
	modules?: ViteCSSModules
	preprocessorOptions?: Record<string, unknown>
	postcss?: VitePostCSS
	devSourcemap?: boolean
	transform?: (code: string, id: string) => ViteTransformResult
}

export interface ViteCSSModules {
	generateScopedName?: string | ((name: string, filename: string, css: string) => string)
	hashPrefix?: string
	localsConvention?: 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly' | ((originalClass: string, generatedClass: string, inputFile: string) => string)
	scopeBehaviour?: 'local' | 'global'
	lightningcss?: unknown
}

export interface VitePostCSS {
	plugins?: unknown[]
	inline?: boolean
}

export interface ViteJSON {
	namedExports?: boolean
	stringify?: boolean | 'auto'
}

export interface ViteESBuild {
	include?: string | string[] | RegExp
	exclude?: string | string[] | RegExp
	jsxFactory?: string
	jsxFragment?: string
	jsxInject?: string
	tsconfigRaw?: string | Record<string, unknown>
}

export interface ViteDevServer {
	config: ViteConfig
	middlewares: unknown
	httpServer: unknown
	watcher: unknown
	moduleGraph: unknown
	transformIndexHtml: (url: string, html: string) => Promise<string>
	transformRequest: (url: string, options?: { ssr?: boolean }) => Promise<{ code: string, map: unknown } | null>
	ssrLoadModule: (url: string) => Promise<unknown>
	reloadModule: (url: string) => Promise<void>
	send: (event: { type: string, path?: string }) => void
	printUrls: () => void
	resolve: (url: string) => Promise<string>
	ws: unknown
	hmr: unknown
}

export interface VitePreviewServer {
	middlewares: unknown
	httpServer: unknown
	printUrls: () => void
}

// ============== Rollup Types ==============

/**
 * Rollup configuration type
 */
export interface RollupConfig {
	input?: string | string[] | Record<string, string>
	output?: RollupOutput | RollupOutput[]
	plugins?: RollupPlugin[]
	external?: string | string[] | ((id: string) => boolean)
	cache?: unknown
	onwarn?: (warning: RollupWarning, handler: (warning: RollupWarning) => void) => void
	preserveSymlinks?: boolean
	shimMissingExports?: boolean
	treeshake?: boolean | RollupTreeshake
	context?: string
	moduleContext?: ((id: string) => string) | Record<string, string>
}

export interface RollupOutput {
	file?: string
	dir?: string
	format?: 'amd' | 'cjs' | 'es' | 'iife' | 'umd' | 'system'
	name?: string
	exports?: 'auto' | 'default' | 'named' | 'none'
	globals?: Record<string, string>
	paths?: ((id: string) => string) | Record<string, string>
	banner?: string | (() => string | Promise<string>)
	footer?: string | (() => string | Promise<string>)
	intro?: string | (() => string | Promise<string>)
	outro?: string | (() => string | Promise<string>)
	sourcemap?: boolean | 'inline' | 'hidden'
	sourcemapExcludeSources?: boolean
	sourcemapFile?: string
	sourcemapPathTransform?: (relativeSourcemapPath: string, sourcemapPath: string) => string
	esModule?: boolean
	extend?: boolean
	hashCharacters?: string
	assetFileNames?: string | ((chunkInfo: { name: string }) => string)
	chunkFileNames?: string | ((chunkInfo: { name: string }) => string)
	entryFileNames?: string | ((chunkInfo: { name: string }) => string)
	preserveModules?: boolean
	preserveModulesRoot?: string
	plugins?: RollupPlugin[]
	inlineDynamicImports?: boolean
	manualChunks?: ((id: string) => string | void) | Record<string, string[]>
	minifyInternalExports?: boolean
	preferConst?: boolean
	interop?: 'default' | 'esModule' | 'auto' | ((id: string) => 'default' | 'esModule' | 'auto')
	reexportProtoFromExternal?: boolean
	sanitizeFileName?: boolean | ((name: string) => string)
}

export interface RollupPlugin {
	name: string
	api?: unknown
	buildStart?: (options: RollupConfig) => void | Promise<void>
	buildEnd?: (error?: Error) => void | Promise<void>
	resolveId?: (source: string, importer: string | undefined) => RollupResolveIdResult | Promise<RollupResolveIdResult>
	load?: (id: string) => RollupLoadResult | Promise<RollupLoadResult>
	transform?: (code: string, id: string) => RollupTransformResult | Promise<RollupTransformResult>
	moduleParsed?: (moduleInfo: RollupModuleInfo) => void | Promise<void>
	renderChunk?: (
		code: string,
		chunk: RollupChunkInfo,
		options: RollupOutput,
	) => RollupRenderChunkResult | Promise<RollupRenderChunkResult>
	renderStart?: () => void | Promise<void>
	generateBundle?: (options: RollupOutput, bundle: Record<string, unknown>) => void | Promise<void>
	writeBundle?: (options: RollupOutput, bundle: Record<string, unknown>) => void | Promise<void>
	closeBundle?: () => void | Promise<void>
	watchChange?: (id: string, change: { event: string }) => void
	closeWatcher?: () => void
}

export interface RollupResolveIdResult {
	id: string
	external?: boolean | 'absolute'
	syntheticNamedExports?: boolean | string
	meta?: Record<string, unknown>
}

export interface RollupLoadResult {
	code: string
	map?: unknown | { mappings: string }
	ast?: unknown
	syntheticNamedExports?: boolean | string
	moduleSideEffects?: boolean | 'no-treeshake'
	meta?: Record<string, unknown>
}

export interface RollupTransformResult {
	code: string
	map?: unknown | { mappings: string }
	ast?: unknown
	moduleSideEffects?: boolean | 'no-treeshake'
	syntheticNamedExports?: boolean | string
	meta?: Record<string, unknown>
}

export interface RollupRenderChunkResult {
	code: string
	map?: unknown | { mappings: string } | null
}

export interface RollupModuleInfo {
	id: string
	importers: string[]
	importedIds: string[]
	dynamicallyImportedIds: string[]
	dynamicImporters: string[]
	hasModuleSideEffects: boolean
}

export interface RollupChunkInfo {
	fileName: string
	name: string
	code: string
	exports: string[]
	imports: string[]
	dynamicImports: string[]
	modules: Record<string, unknown>
	facadeModuleId: string | null
}

export interface RollupWarning {
	code?: string
	message: string
	id?: string
	pos?: number
	loc?: { file: string, line: number, column: number }
	frame?: string
	stack?: string
}

export interface RollupTreeshake {
	preset?: boolean | 'smallest' | 'safest' | 'recommended'
	moduleSideEffects?: boolean | 'no-external' | ((id: string, isExternal: boolean) => boolean)
	propertyReadSideEffects?: boolean | 'always' | ((id: string, property: string) => boolean)
	tryCatchDeoptimization?: boolean
	unknownGlobalSideEffects?: boolean
	annotations?: boolean
	varDeclInitialization?: boolean
}

/**
 * Rollup build result
 */
export interface RollupBuild {
	generate: (options: RollupOutput) => Promise<RollupOutputAsset>
	write: (options: RollupOutput) => Promise<RollupOutputAsset>
	watchFiles: string[]
	cache: unknown
	close: () => Promise<void>
}

export interface RollupOutputAsset {
	output: unknown[]
	get: () => unknown[]
}

// ============== esbuild Types ==============

/**
 * esbuild options type
 */
export interface ESBuildOptions {
	bundle?: boolean
	entryPoints?: string | string[] | Record<string, string>
	outdir?: string
	outfile?: string
	outbase?: string
	external?: string[]
	format?: 'iife' | 'cjs' | 'esm'
	globalName?: string
	loader?: Record<string, 'js' | 'jsx' | 'ts' | 'tsx' | 'css' | 'json' | 'text' | 'base64' | 'dataurl' | 'binary' | 'file' | 'empty' | 'copy'>
	minify?: boolean
	minifyWhitespace?: boolean
	minifyIdentifiers?: boolean
	minifySyntax?: boolean
	platform?: 'browser' | 'node' | 'neutral'
	sourcemap?: boolean | 'linked' | 'inline' | 'external'
	sourceRoot?: string
	sourcesContent?: boolean
	target?: string | string[]
	define?: Record<string, string>
	pure?: string[]
	keepNames?: boolean
	color?: boolean
	logLevel?: 'warning' | 'error' | 'info' | 'debug' | 'silent'
	logLimit?: number
	logOverride?: Record<string, 'ignore' | 'error' | 'warning'>
	treeShaking?: boolean
	splitting?: boolean
	chunkNames?: string
	assetNames?: string
	publicPath?: string
	inject?: string[]
	banner?: string | Record<string, string>
	footer?: string | Record<string, string>
	tsconfig?: string
	tsconfigRaw?: string | Record<string, unknown>
	jsx?: 'transform' | 'preserve' | 'automatic'
	jsxFactory?: string
	jsxFragment?: string
	jsxImportSource?: string
	jsxDev?: boolean
	metafile?: boolean
	mangleProps?: RegExp
	mangleQuoted?: boolean
	mangleCache?: Record<string, string>
	legalComments?: 'none' | 'inline' | 'eof' | 'linked' | 'external'
	ignoreAnnotations?: boolean
	drop?: ('console' | 'debugger')[]
	dropLabels?: string[]
	plugins?: ESBuildPlugin[]
	absWorkingDir?: string
	nodePaths?: string[]
	mainFields?: string[]
	conditions?: string[]
	resolveExtensions?: string[]
	write?: boolean
	allowOverwrite?: boolean
	charset?: 'ascii' | 'utf8'
}

/**
 * esbuild plugin type
 */
export interface ESBuildPlugin {
	name: string
	setup: (build: ESBuildPluginBuild) => void | Promise<void>
}

export interface ESBuildPluginBuild {
	initialOptions: ESBuildOptions
	resolve: (path: string, options?: { importer?: string, resolveDir?: string, namespace?: string }) => Promise<ESBuildResolveResult>
	onStart: (callback: () => void | Promise<void>) => void
	onEnd: (callback: (result: ESBuildResult) => void | Promise<void>) => void
	onResolve: (options: ESBuildOnResolveOptions, callback: (args: ESBuildOnResolveArgs) => ESBuildOnResolveResult | Promise<ESBuildOnResolveResult>) => void
	onLoad: (options: ESBuildOnLoadOptions, callback: (args: ESBuildOnLoadArgs) => ESBuildOnLoadResult | Promise<ESBuildOnLoadResult>) => void
}

export interface ESBuildOnResolveOptions {
	filter: RegExp
	namespace?: string
}

export interface ESBuildOnResolveArgs {
	path: string
	importer: string
	namespace: string
	resolveDir: string
	kind: string
}

export interface ESBuildOnResolveResult {
	path?: string
	external?: boolean
	namespace?: string
	sideEffects?: boolean
	pluginName?: string
	errors?: ESBuildMessage[]
	warnings?: ESBuildMessage[]
}

export interface ESBuildOnLoadOptions {
	filter: RegExp
	namespace?: string
}

export interface ESBuildOnLoadArgs {
	path: string
	namespace: string
	resolveDir: string
	pluginData?: unknown
}

export interface ESBuildOnLoadResult {
	contents?: string | Uint8Array
	resolveDir?: string
	loader?: string
	pluginData?: unknown
	pluginName?: string
	errors?: ESBuildMessage[]
	warnings?: ESBuildMessage[]
}

export interface ESBuildMessage {
	id: string
	pluginName?: string
	text: string
	location?: ESBuildLocation
	detail?: unknown
}

export interface ESBuildLocation {
	file: string
	namespace: string
	line: number
	column: number
	length?: number
	lineText: string
}

export interface ESBuildResolveResult {
	path: string
	namespace?: string
	external?: boolean
	sideEffects?: boolean
	errors: ESBuildMessage[]
	warnings: ESBuildMessage[]
}

export interface ESBuildResult {
	errors: ESBuildMessage[]
	warnings: ESBuildMessage[]
	outputFiles?: ESBuildOutputFile[]
	metafile?: ESBuildMetafile
	mangleCache?: Record<string, string>
}

export interface ESBuildOutputFile {
	path: string
	contents: Uint8Array
	hash?: string
}

export interface ESBuildMetafile {
	inputs: Record<string, { imports: ESBuildImport[] }>
	outputs: Record<string, unknown>
}

export interface ESBuildImport {
	path: string
	external?: boolean
	kind: string
}

// ============== Parcel Types ==============

/**
 * Parcel configuration type
 */
export interface ParcelConfig {
	entries?: string | string[]
	defaultConfig?: string
	config?: Record<string, unknown>
	extends?: string | string[]
	extendsFrom?: string | string[]
	transformers?: Record<string, string[]>
	resolvers?: string[]
	bundler?: string
	namers?: string[]
	runtimes?: string[]
	packagers?: Record<string, string>
	validators?: Record<string, string[]>
	optimizers?: Record<string, string[]>
	compressors?: Record<string, string[]>
	reporters?: string[]
	features?: Record<string, string>
}

/**
 * Parcel transformer options
 */
export interface ParcelTransformerOptions {
	type?: string
	options?: Record<string, unknown>
	resolveFrom?: string
}

/**
 * Parcel namer options
 */
export interface ParcelNamerOptions {
	type?: string
	options?: Record<string, unknown>
}

// ============== Turbopack Types ==============

/**
 * Turbopack configuration type
 */
export interface TurbopackConfig {
	mode?: 'development' | 'production'
	entry?: string | Record<string, string>
	output?: TurbopackOutput
	resolve?: TurbopackResolve
	module?: TurbopackModule
	plugins?: TurbopackPlugin[]
}

export interface TurbopackOutput {
	path?: string
	filename?: string
	publicPath?: string
}

export interface TurbopackResolve {
	alias?: Record<string, string>
	extensions?: string[]
	modules?: string[]
}

export interface TurbopackModule {
	rules?: TurbopackRule[]
}

export interface TurbopackRule {
	test?: RegExp
	loader?: string
	options?: Record<string, unknown>
}

export interface TurbopackPlugin {
	name: string
	config?: Record<string, unknown>
}

// ============== Babel Types ==============

/**
 * Babel configuration type
 */
export interface BabelConfig {
	presets?: (string | [string, Record<string, unknown>])[]
	plugins?: (string | [string, Record<string, unknown>])[]
	env?: Record<string, { presets?: unknown[], plugins?: unknown[] }>
	cwd?: string
	root?: string
	rootMode?: 'root' | 'upward' | 'upward-optional'
	filename?: string
	filenameRelative?: string
	code?: boolean
	ast?: boolean
	sourceMaps?: boolean | 'inline' | 'both'
	sourceFileName?: string
	sourceRoot?: string
	sourceType?: 'module' | 'script' | 'unambiguous'
	inputSourceMap?: unknown | false
	babelrc?: boolean
	babelrcRoots?: boolean | string | string[]
	configFile?: boolean | string
	ignore?: (string | RegExp | ((filename: string) => boolean))[]
	only?: (string | RegExp | ((filename: string) => boolean))[]
	overrides?: BabelConfig[]
	test?: RegExp | ((filename: string) => boolean)
	include?: (string | RegExp | ((filename: string) => boolean))[]
	exclude?: (string | RegExp | ((filename: string) => boolean))[]
	extends?: string
	envName?: string
	passPerPreset?: boolean
	retainLines?: boolean
	compact?: boolean | 'auto'
	minified?: boolean
	auxiliaryCommentBefore?: string
	auxiliaryCommentAfter?: string
	comments?: boolean
	shouldPrintComment?: (comment: string) => boolean
}

/**
 * Babel preset type
 */
export type BabelPreset<T = unknown> = string | [string, T?]

/**
 * Babel plugin type
 */
export type BabelPlugin<T = unknown> = string | [string, T?]

/**
 * Babel transform result
 */
export interface BabelTransformResult {
	code: string
	map?: unknown
	ast?: unknown
}

// ============== SWC Types ==============

/**
 * SWC configuration type
 */
export interface SWCConfig {
	jsc?: {
		parser?: SWCParser
		transform?: SWCTransform
		target?: 'es5' | 'es2015' | 'es2016' | 'es2017' | 'es2018' | 'es2019' | 'es2020' | 'es2021' | 'es2022'
		loose?: boolean
		externalHelpers?: boolean
		keepClassNames?: boolean
		baseURL?: string
		paths?: Record<string, string[]>
		minify?: SWCMinifyOptions
		experimental?: {
			keepImportAssertions?: boolean
			emitAssertForImportAttributes?: boolean
		}
	}
	env?: Record<string, SWCConfig>
	test?: string | RegExp | ((filename: string) => boolean)
	exclude?: string | RegExp | ((filename: string) => boolean)
}

export interface SWCParser {
	syntax?: 'ecmascript' | 'typescript'
	dynamicImport?: boolean
	decorators?: boolean
	decoratorsBeforeExport?: boolean
	jsx?: boolean
	tsx?: boolean
	privateMethod?: boolean
	classPrivateProperty?: boolean
	exportDefaultFrom?: boolean
	allowReturnOutsideFunction?: boolean
	allowSuperOutsideMethod?: boolean
	allowAwaitOutsideFunction?: boolean
}

export interface SWCTransform {
	react?: SWCReactTransform
	consts?: Record<string, unknown>
	foreign?: boolean
	useDefineForClassFields?: boolean
	treatConstVarAsLet?: boolean
}

export interface SWCReactTransform {
	pragma?: string
	pragmaFrag?: string
	throwIfNamespace?: boolean
	development?: boolean
	useBuiltins?: boolean
	importSource?: string
	runtime?: 'classic' | 'automatic'
	refresh?: SWCReactRefresh
}

export interface SWCReactRefresh {
	refreshReg?: string
	refreshSig?: string
	emitFullSignatures?: boolean
}

export interface SWCMinifyOptions {
	compress?: boolean | SWCCompressOptions
	mangle?: boolean | SWCMangleOptions
	format?: SWCFormatOptions
}

export interface SWCCompressOptions {
	defaults?: boolean
	drop?: string[]
	dropDebugger?: boolean
	pureFuncs?: string[]
	ecma?: number
	keep_classnames?: boolean
	keep_fnames?: boolean
	global_defs?: Record<string, unknown>
	passes?: number
	toplevel?: boolean | 'local'
}

export interface SWCMangleOptions {
	props?: { regex?: RegExp, reserved?: string[] }
	toplevel?: boolean
	keep_classnames?: boolean
	keep_fnames?: boolean
	keep_private_props?: boolean
	reserved?: string[]
}

export interface SWCFormatOptions {
	comments?: 'some' | 'all' | 'off'
	indent?: number
	beautify?: boolean
}

/**
 * SWC transform result
 */
export interface SWCTransformResult {
	code: string
	map?: string
	ast?: unknown
}

/**
 * SWC plugin type
 */
export interface SWCPlugin {
	name: string
	options?: Record<string, unknown>
}

// ============== Universal Build Types ==============

/**
 * Universal build configuration
 */
export interface UniversalBuildConfig {
	mode?: 'development' | 'production'
	entry: string | string[] | Record<string, string | string[]>
	output: {
		path: string
		filename: string
		format: 'esm' | 'cjs' | 'umd' | 'iife'
		publicPath?: string
		library?: { name: string, type: string }
	}
	plugins?: unknown[]
	resolve?: {
		alias?: Record<string, string>
		extensions?: string[]
	}
	module?: {
		rules?: unknown[]
	}
	dev?: {
		hot?: boolean
		port?: number
	}
}

/**
 * Build result type
 */
export interface BuildResult {
	errors: BuildError[]
	warnings: BuildWarning[]
	outputFiles: OutputFile[]
	duration: number
}

export interface BuildError {
	message: string
	file?: string
	line?: number
	column?: number
	stack?: string
}

export interface BuildWarning {
	message: string
	file?: string
	line?: number
	column?: number
}

export interface OutputFile {
	path: string
	size: number
	hash?: string
}
