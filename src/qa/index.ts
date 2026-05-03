/**
 * Quality Assurance Types
 *
 * Type definitions for code quality, linting, formatting, and analysis tools.
 */

// ============== ESLint Types ==============

/**
 * ESLint configuration type
 */
export interface ESLintConfig {
	root?: boolean
	env?: {
		browser?: boolean
		node?: boolean
		es6?: boolean
		es2020?: boolean
		es2021?: boolean
		es2022?: boolean
		jest?: boolean
		mocha?: boolean
		jasmine?: boolean
		worker?: boolean
		commonjs?: boolean
		serviceworker?: boolean
		amd?: boolean
		'shared-node-browser'?: boolean
		[key: string]: boolean | undefined
	}
	extends?: string | string[]
	parser?: string
	parserOptions?: ESLintParserOptions
	plugins?: string[]
	rules?: Record<string, ESLintRuleConfig>
	settings?: Record<string, unknown>
	overrides?: ESLintOverride[]
	globals?: Record<string, 'writable' | 'readonly' | 'off' | boolean | 'readable' | 'writeable'>
	ignorePatterns?: string | string[]
	noInlineConfig?: boolean
	reportUnusedDisableDirectives?: boolean
}

export interface ESLintParserOptions {
	ecmaVersion?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 'latest'
	sourceType?: 'script' | 'module'
	ecmaFeatures?: {
		globalReturn?: boolean
		impliedStrict?: boolean
		jsx?: boolean
	}
	project?: string | string[]
	tsconfigRootDir?: string
	extraFileExtensions?: string[]
}

export type ESLintRuleConfig
	= | 0
	| 1
	| 2
	| 'off'
	| 'warn'
	| 'error'
	| ['off' | 0]
	| ['warn' | 1]
	| ['error' | 2]
	| ['off' | 0, unknown]
	| ['warn' | 1, unknown]
	| ['error' | 2, unknown]

export interface ESLintOverride {
	files: string | string[]
	extends?: string | string[]
	excludedFiles?: string | string[]
	env?: Record<string, boolean>
	parser?: string
	parserOptions?: ESLintParserOptions
	plugins?: string[]
	rules?: Record<string, ESLintRuleConfig>
	settings?: Record<string, unknown>
	overrides?: ESLintOverride[]
	processor?: string
}

/**
 * ESLint rule type
 */
export interface ESLintRule {
	meta: {
		type: 'problem' | 'suggestion' | 'layout'
		docs?: {
			description: string
			category?: string
			recommended?: boolean
			url?: string
		}
		fixable?: 'code' | 'whitespace'
		hasSuggestions?: boolean
		schema?: unknown | unknown[]
		messages?: Record<string, string>
		deprecated?: boolean | { message: string, url: string }
		replacedBy?: string[]
	}
	create: (context: ESLintRuleContext) => Record<string, (...args: unknown[]) => void>
}

export interface ESLintRuleContext {
	id: string
	options: unknown[]
	settings: Record<string, unknown>
	parserPath: string
	parserOptions: ESLintParserOptions
	parserServices?: Record<string, unknown>
	report: (descriptor: {
		node: unknown
		messageId?: string
		message?: string
		data?: Record<string, unknown>
		loc?: { line: number, column: number } | { start: { line: number, column: number }, end: { line: number, column: number } }
		fix?: (fixer: ESLintRuleFixer) => ESLintFix | ESLintFix[] | null
		suggest?: { desc: string, fix: (fixer: ESLintRuleFixer) => ESLintFix }[]
	}) => void
	getSourceCode: () => unknown
	getAncestors: () => unknown[]
	markVariableAsUsed: (name: string) => boolean
	getDeclaredVariables: (node: unknown) => unknown[]
}

export interface ESLintRuleFixer {
	insertTextAfter: (nodeOrToken: unknown, text: string) => ESLintFix
	insertTextAfterRange: (range: [number, number], text: string) => ESLintFix
	insertTextBefore: (nodeOrToken: unknown, text: string) => ESLintFix
	insertTextBeforeRange: (range: [number, number], text: string) => ESLintFix
	remove: (nodeOrToken: unknown) => ESLintFix
	removeRange: (range: [number, number]) => ESLintFix
	replaceText: (nodeOrToken: unknown, text: string) => ESLintFix
	replaceTextRange: (range: [number, number], text: string) => ESLintFix
}

export interface ESLintFix {
	range: [number, number]
	text: string
}

/**
 * ESLint plugin type
 */
export interface ESLintPlugin {
	name: string
	rules?: Record<string, ESLintRule>
	configs?: Record<string, ESLintConfig | { extends: string[], plugins: string[], rules: Record<string, ESLintRuleConfig> }>
	processors?: Record<string, { preprocess: (text: string, filename: string) => string[] | { text: string, filename?: string }[], postprocess: (messages: unknown[][], filename: string) => unknown[], supportsAutofix?: boolean }>
	environments?: Record<string, Record<string, boolean>>
}

/**
 * ESLint result type
 */
export interface ESLintResult {
	filePath: string
	messages: ESLintMessage[]
	errorCount: number
	fatalErrorCount: number
	warningCount: number
	fixableErrorCount: number
	fixableWarningCount: number
	source?: string
	output?: string
	usedDeprecatedRules: { ruleId: string, replacedBy: string[] }[]
}

export interface ESLintMessage {
	ruleId: string | null
	severity: 0 | 1 | 2
	message: string
	line?: number
	column?: number
	endLine?: number
	endColumn?: number
	nodeType?: string
	messageId?: string
	fix?: ESLintFix
	suggestions?: { desc: string, fix: ESLintFix }[]
}

// ============== TSLint Types ==============

/**
 * TSLint configuration type (deprecated but included for legacy support)
 */
export interface TSLintConfig {
	extends?: string | string[]
	rulesDirectory?: string | string[]
	rules?: Record<string, unknown | [unknown]>
	linterOptions?: {
		exclude?: string[]
		extensions?: string[]
	}
	defaultSeverity?: 'error' | 'warning' | 'off'
}

// ============== Prettier Types ==============

/**
 * Prettier configuration type
 */
export interface PrettierConfig {
	printWidth?: number
	tabWidth?: number
	useTabs?: boolean
	semi?: boolean
	singleQuote?: boolean
	quoteProps?: 'as-needed' | 'consistent' | 'preserve'
	jsxSingleQuote?: boolean
	trailingComma?: 'none' | 'es5' | 'all' | string
	bracketSpacing?: boolean
	bracketSameLine?: boolean
	jsxBracketSameLine?: boolean
	arrowParens?: 'avoid' | 'always' | 'always' | 'avoid'
	rangeStart?: number
	rangeEnd?: number
	parser?: string | 'angular' | 'babel' | 'babel-flow' | 'babel-ts' | 'css' | 'flow' | 'glimmer' | 'graphql' | 'html' | 'json' | 'json-stringify' | 'json5' | 'less' | 'lwc' | 'markdown' | 'mdx' | 'scss' | 'typescript' | 'vue' | 'yaml'
	filepath?: string
	requirePragma?: boolean
	insertPragma?: boolean
	proseWrap?: 'always' | 'never' | 'preserve'
	htmlWhitespaceSensitivity?: 'css' | 'strict' | 'ignore'
	vueIndentScriptAndStyle?: boolean
	embeddedLanguageFormatting?: 'auto' | 'off'
	singleAttributePerLine?: boolean
	endOfLine?: 'auto' | 'lf' | 'crlf' | 'cr'
	overrides?: {
		files: string | string[]
		excludeFiles?: string | string[]
		options?: PrettierConfig
	}[]
	plugins?: string[]
	pluginSearchDirs?: string[] | false
}

/**
 * Format options type
 */
export interface FormatOptions extends PrettierConfig {
	originaPath?: string
	plugins?: string[]
}

/**
 * Format result type
 */
export interface FormatResult {
	formatted: string
	cursorOffset?: number
}

// ============== Code Analysis Types ==============

/**
 * Analysis issue type
 */
export interface AnalysisIssue {
	id: string
	type: 'error' | 'warning' | 'info'
	message: string
	file: string
	line?: number
	column?: number
	ruleId?: string
	severity: number
}

/**
 * Analysis suggestion type
 */
export interface AnalysisSuggestion {
	id: string
	message: string
	file: string
	line?: number
	column?: number
	fix?: {
		range: [number, number]
		text: string
	}
}

/**
 * Code analysis result type
 */
export interface CodeAnalysis<T = unknown> {
	files: AnalyzedFile[]
	summary: AnalysisSummary
	metrics: CodeMetrics
	issues: AnalysisIssue[]
	suggestions: AnalysisSuggestion[]
	custom?: T
}

export interface AnalyzedFile {
	path: string
	language: string
	lines: number
	linesOfCode: number
	comments: number
	whitespace: number
	functions: number
	classes: number
	imports: number
	exports: number
	complexity: number
	cognitiveComplexity: number
	maintainabilityIndex: number
}

export interface AnalysisSummary {
	totalFiles: number
	totalLines: number
	totalLinesOfCode: number
	totalComments: number
	averageComplexity: number
	averageMaintainability: number
	languages: Record<string, { files: number, lines: number, percentage: number }>
}

export interface CodeMetrics {
	cyclomaticComplexity: number
	cognitiveComplexity: number
	linesOfCode: number
	commentRatio: number
	maintainabilityIndex: number
	halsteadVolume?: number
	halsteadDifficulty?: number
	halsteadEffort?: number
	numberOfFunctions: number
	numberOfClasses: number
	averageFunctionLength: number
	averageFunctionParameters: number
	maxNestingLevel: number
	branchCoverage?: number
}

/**
 * Complexity report type
 */
export interface ComplexityReport {
	aggregate: {
		cyclomatic: number
		cyclomaticDensity: number
		halstead: {
			bugs: number
			difficulty: number
			effort: number
			length: number
			time: number
			vocabulary: number
			volume: number
		}
		params: number
		sloc: {
			logical: number
			physical: number
		}
	}
	functions: ComplexityFunction[]
	classes: ComplexityClass[]
}

export interface ComplexityFunction {
	name: string
	line: number
	cyclomatic: number
	cyclomaticDensity: number
	halstead: {
		bugs: number
		difficulty: number
		effort: number
		length: number
		time: number
		vocabulary: number
		volume: number
	}
	params: number
	sloc: {
		logical: number
		physical: number
	}
}

export interface ComplexityClass {
	name: string
	line: number
	methods: ComplexityFunction[]
	aggregate: {
		cyclomatic: number
		cyclomaticDensity: number
		halstead: unknown
		params: number
		sloc: { logical: number, physical: number }
	}
}

/**
 * Maintainability index type
 */
export type MaintainabilityIndex = number

/**
 * Technical debt type
 */
export interface TechnicalDebt<T = unknown> {
	totalDebt: number
	debtRatio: number
	debtItems: DebtItem[]
	sqaleIndex: number
	sqaleRating: string
	custom?: T
}

export interface DebtItem {
	type: 'code_smell' | 'bug' | 'vulnerability' | 'security_hotspot'
	severity: 'info' | 'minor' | 'major' | 'critical' | 'blocker'
	description: string
	file: string
	line: number
	effort: number
	remediation: string
	category: string
}

// ============== Security Analysis Types ==============

/**
 * Security audit type
 */
export interface SecurityAudit<T = unknown> {
	vulnerabilities: Vulnerability[]
	summary: SecuritySummary
	recommendations: SecurityRecommendation[]
	compliance: ComplianceStatus[]
	custom?: T
}

/**
 * Vulnerability type
 */
export interface Vulnerability {
	id: string
	severity: 'low' | 'moderate' | 'high' | 'critical'
	cvss?: {
		score: number
		vector: string
	}
	title: string
	description: string
	package: string
	installedVersion: string
	fixedVersion?: string
	paths: string[]
	cwe?: string[]
	advisory?: string
	reference?: string
	patchedIn?: string
	created: string
	published: string
	modified: string
	credits?: string[]
	identifiers?: Record<string, string[]>
}

export interface SecuritySummary {
	total: number
	low: number
	moderate: number
	high: number
	critical: number
	dependencies: number
	devDependencies: number
	optionalDependencies: number
	peerDependencies: number
}

export interface SecurityRecommendation {
	priority: 'low' | 'medium' | 'high' | 'critical'
	category: string
	description: string
	remediation: string
	reference?: string
}

export interface ComplianceStatus {
	standard: 'OWASP' | 'PCI-DSS' | 'HIPAA' | 'GDPR' | 'SOC2' | 'ISO27001' | 'NIST'
	requirement: string
	status: 'compliant' | 'non-compliant' | 'partial' | 'not-applicable'
	details?: string
	evidence?: string
	lastChecked: string
}

/**
 * Security report type
 */
export interface SecurityReport<T = unknown> {
	timestamp: string
	duration: number
	status: 'passed' | 'failed' | 'warning'
	audits: SecurityAudit<T>
	score: number
	grade: 'A' | 'B' | 'C' | 'D' | 'F'
	custom?: T
}

// ============== Dependency Analysis Types ==============

/**
 * Dependency audit type
 */
export interface DependencyAudit<T = unknown> {
	dependencies: DependencyInfo[]
	devDependencies: DependencyInfo[]
	peerDependencies: DependencyInfo[]
	optionalDependencies: DependencyInfo[]
	summary: DependencySummary
	outdated: OutdatedPackage[]
	vulnerabilities: Vulnerability[]
	licenses: LicenseInfo[]
	custom?: T
}

export interface DependencyInfo {
	name: string
	version: string
	installed: string
	latest?: string
	wanted?: string
	license?: string
	author?: string
	repository?: string
	description?: string
	homepage?: string
	bugs?: string
	size?: number
	unpackedSize?: number
	fileCount?: number
	direct: boolean
	depth: number
	dependents: string[]
	dependencies?: Record<string, string>
	dev?: boolean
	optional?: boolean
	peer?: boolean
	bundled?: boolean
	extraneous?: boolean
	invalid?: boolean
	missing?: boolean
	private?: boolean
}

export interface DependencySummary {
	total: number
	production: number
	development: number
	peer: number
	optional: number
	outdated: number
	vulnerable: number
	deprecated: number
	unmaintained: number
	unstable: number
	licenses: Record<string, number>
}

/**
 * Outdated package type
 */
export interface OutdatedPackage {
	name: string
	current: string
	wanted: string
	latest: string
	dependent: string
	type: 'dependencies' | 'devDependencies' | 'peerDependencies' | 'optionalDependencies'
	homepage?: string
	repo?: string
	deprecation?: string
	versions?: string[]
	time?: Record<string, string>
}

/**
 * License check type
 */
export interface LicenseCheck<T = unknown> {
	licenses: LicenseInfo[]
	violations: LicenseViolation[]
	summary: LicenseSummary
	policy: LicensePolicy
	custom?: T
}

export interface LicenseInfo {
	name: string
	version: string
	license: string | string[]
	licenseText?: string
	repository?: string
	publisher?: string
	email?: string
	url?: string
	path?: string
	dependency?: string
	dependencies?: string[]
}

export interface LicenseViolation {
	package: string
	license: string
	reason: string
	severity: 'error' | 'warning'
	solution?: string
}

export interface LicenseSummary {
	total: number
	approved: number
	flagged: number
	unknown: number
	byLicense: Record<string, number>
}

export interface LicensePolicy {
	approved: string[]
	flagged: string[]
	ignored?: string[]
	allowUnknown?: boolean
	failOnViolation?: boolean
}

// ============== Performance Analysis Types ==============

/**
 * Performance audit type
 */
export interface PerformanceAudit<T = unknown> {
	metrics: PerformanceMetric[]
	opportunities: PerformanceOpportunity[]
	diagnostics: PerformanceDiagnostic[]
	budgets: PerformanceBudgetResult[]
	suggestions: PerformanceSuggestion[]
	custom?: T
}

export interface PerformanceMetric {
	name: string
	value: number
	unit: string
	score?: number
	displayValue?: string
	description?: string
	category: 'performance' | 'accessibility' | 'best-practices' | 'seo' | 'pwa'
	threshold?: {
		green: number
		orange: number
		red: number
	}
}

export interface PerformanceOpportunity {
	id: string
	title: string
	description: string
	savings: number
	unit: string
	details?: unknown
	relatedNode?: string
	relatedNodeLabel?: string
}

export interface PerformanceDiagnostic {
	id: string
	title: string
	description: string
	severity: 'error' | 'warning' | 'info'
	score?: number
	details?: unknown
	items?: DiagnosticItem[]
}

export interface DiagnosticItem {
	value: string | number
	displayValue?: string
	severity: 'error' | 'warning' | 'info'
}

export interface PerformanceBudgetResult {
	resourceType: string
	budget: number
	actual: number
	overBudget?: number
	status: 'pass' | 'fail' | 'warning'
}

export interface PerformanceSuggestion {
	priority: 'high' | 'medium' | 'low'
	category: string
	title: string
	description: string
	impact: string
	effort: 'low' | 'medium' | 'high'
	details?: unknown
}

/**
 * Bundle analysis type
 */
export interface BundleAnalysis<T = unknown> {
	bundles: BundleInfo[]
	modules: ModuleInfo[]
	duplicates: DuplicateModule[]
	suggestions: BundleSuggestion[]
	summary: BundleSummary
	treeShaking: TreeShakingResult
	custom?: T
}

export interface BundleInfo {
	name: string
	size: number
	compressedSize: number
	gzipSize: number
	brotliSize: number
	chunks: ChunkInfo[]
	modules: string[]
	entryPoints: string[]
	assets: AssetInfo[]
}

export interface ChunkInfo {
	id: string | number
	name: string
	size: number
	files: string[]
	siblings?: string[]
	imports?: string[]
	dependencies?: string[]
	isEntry?: boolean
	isInitial?: boolean
	isAsync?: boolean
}

export interface ModuleInfo {
	id: string
	name: string
	size: number
	chunks: (string | number)[]
	bundled: boolean
	reasons: ModuleReason[]
	dependencies: string[]
	source?: string
}

export interface ModuleReason {
	moduleId: string | number
	moduleName: string
	type: string
	explanation?: string
}

export interface DuplicateModule {
	name: string
	versions: { version: string, paths: string[], size: number }[]
	totalSize: number
	savings: number
}

export interface AssetInfo {
	name: string
	size: number
	emitted: boolean
	type: 'script' | 'stylesheet' | 'image' | 'font' | 'media' | 'other'
	chunk?: string | number
}

export interface BundleSuggestion {
	type: 'code-splitting' | 'tree-shaking' | 'minification' | 'compression' | 'caching' | 'deduplication'
	severity: 'error' | 'warning' | 'info'
	description: string
	details?: unknown
	potentialSavings?: number
}

export interface BundleSummary {
	totalSize: number
	totalGzipSize: number
	totalBrotliSize: number
	totalModules: number
	totalChunks: number
	totalAssets: number
	entrypoints: number
	asyncChunks: number
	cacheable: number
	externalized: number
}

export interface TreeShakingResult {
	deadCode: DeadCodeInfo[]
	sideEffects: SideEffectInfo[]
	savings: number
	coverage: number
}

export interface DeadCodeInfo {
	module: string
	exports: string[]
	size: number
	reason?: string
}

export interface SideEffectInfo {
	module: string
	hasSideEffects: boolean
	reason?: string
	exports?: string[]
}

/**
 * Lighthouse score type
 */
export type LighthouseScore = number

// ============== Quality Gates Types ==============

/**
 * Quality gate type
 */
export interface QualityGate<T = unknown> {
	id: string
	name: string
	description?: string
	enabled: boolean
	conditions: GateCondition[]
	status: GateResult
	projects: string[]
	branch?: string
	custom?: T
}

export interface GateCondition {
	metric: string
	operator: 'LESS_THAN' | 'GREATER_THAN' | 'EQUALS' | 'NOT_EQUALS' | 'LIKE' | 'NOT_LIKE'
	value: number
	errorThreshold?: number
	warningThreshold?: number
	period?: 'day' | 'week' | 'month' | 'year' | 'overall'
}

export type GateResult = 'passed' | 'failed' | 'warning'

/**
 * Quality gate condition result
 */
export interface GateConditionResult {
	metric: string
	operator: string
	value: number
	status: GateResult
	actualValue: number
	description: string
}

// ============== Testing Types ==============

/**
 * Test coverage types
 */
export interface TestCoverage {
	lines: CoverageMetric
	functions: CoverageMetric
	branches: CoverageMetric
	statements: CoverageMetric
}

export interface CoverageMetric {
	total: number
	covered: number
	skipped: number
	pct: number
}

/**
 * Test result types
 */
export interface TestResult {
	testFiles: TestFile[]
	summary: TestSummary
	coverage?: TestCoverage
	performance: TestPerformance
}

export interface TestFile {
	name: string
	tests: TestInfo[]
	status: 'passed' | 'failed' | 'skipped'
	duration: number
	startTime: string
	endTime: string
}

export interface TestInfo {
	name: string
	fullName: string
	status: 'passed' | 'failed' | 'skipped' | 'pending' | 'todo'
	duration: number
	startTime?: string
	endTime?: string
	failureMessages?: string[]
	failureDetails?: unknown
	ancestorTitles?: string[]
	location?: { line: number, column: number }
	retryCount?: number
}

export interface TestSummary {
	total: number
	passed: number
	failed: number
	skipped: number
	pending: number
	todo: number
	duration: number
	startTime: string
	endTime: string
	success: boolean
}

export interface TestPerformance {
	totalDuration: number
	averageTestDuration: number
	slowestTests: { name: string, duration: number }[]
	parallelism: number
	overhead: number
}

// ============== Code Quality Metrics Types ==============

/**
 * Code quality metrics
 */
export interface CodeQualityMetrics {
	maintainability: MaintainabilityMetrics
	reliability: ReliabilityMetrics
	security: SecurityMetrics
	coverage: CoverageMetrics
	complexity: ComplexityMetrics
	duplication: DuplicationMetrics
	size: SizeMetrics
}

export interface MaintainabilityMetrics {
	maintainabilityIndex: number
	technicalDebt: number
	technicalDebtRatio: number
	sqaleIndex: number
	sqaleRating: string
	codeSmells: number
}

export interface ReliabilityMetrics {
	bugs: number
	reliabilityRating: string
	reliabilityRemediationEffort: number
	testFailures: number
	testErrors: number
}

export interface SecurityMetrics {
	vulnerabilities: number
	securityRating: string
	securityRemediationEffort: number
	securityHotspots: number
	securityReviewRating: string
}

export interface CoverageMetrics {
	lineCoverage: number
	branchCoverage: number
	conditionCoverage: number
	functionCoverage: number
	statementCoverage: number
	newLineCoverage: number
	newBranchCoverage: number
}

export interface ComplexityMetrics {
	cyclomaticComplexity: number
	cognitiveComplexity: number
	averageComplexity: number
	complexityDistribution: { range: string, count: number }[]
}

export interface DuplicationMetrics {
	duplicatedLines: number
	duplicatedBlocks: number
	duplicatedFiles: number
	duplicationPercentage: number
	duplicatedLinesDensity: number
}

export interface SizeMetrics {
	linesOfCode: number
	commentLines: number
	nonCommentLines: number
	classes: number
	functions: number
	files: number
	directories: number
	statements: number
}
