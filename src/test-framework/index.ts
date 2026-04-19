/**
 * Testing Framework Integration Types
 *
 * Types for testing frameworks and utilities.
 */

// ============================================================================
// Test Types
// ============================================================================

/**
 * Test suite type
 */
export interface TestSuite<T = unknown> {
	name: string
	description?: string
	tests: TestCase<T>[]
	beforeAll?: () => Promise<void> | void
	afterAll?: () => Promise<void> | void
	beforeEach?: () => Promise<void> | void
	afterEach?: () => Promise<void> | void
	timeout?: number
	parallel?: boolean
}

/**
 * Test case type
 */
export interface TestCase<T = unknown> {
	name: string
	description?: string
	fn: () => Promise<void> | void
	timeout?: number
	skip?: boolean
	only?: boolean
	tags?: string[]
	retries?: number
	data?: T
}

/**
 * Test result type
 */
export type TestResultType = 'passed' | 'failed' | 'skipped' | 'pending' | 'todo'

/**
 * Test result
 */
export interface TestResult {
	name: string
	status: TestResultType
	duration: number
	error?: TestError
	startTime: Date
	endTime?: Date
	retries?: number
}

/**
 * Test error type
 */
export interface TestError {
	message: string
	stack?: string
	expected?: unknown
	actual?: unknown
	operator?: string
	diff?: string
}

/**
 * Test configuration
 */
export interface TestConfig<T = unknown> {
	testMatch?: string[]
	testIgnore?: string[]
	testDir?: string
	parallel?: boolean
	timeout?: number
	retries?: number
	reporters?: TestReporter[]
	setupFiles?: string[]
	teardownFiles?: string[]
	options?: T
}

/**
 * Test reporter type
 */
export type TestReporter = 'default' | 'verbose' | 'dot' | 'json' | 'junit' | 'html' | 'lcov' | string

// ============================================================================
// Assertion Types
// ============================================================================

/**
 * Assertion type
 */
export interface Assertion<T = unknown> {
	actual: T
	assert: (expected: T) => AssertionResult<T>
	message?: string
}

/**
 * Assertion result type
 */
export type AssertionResult<T = unknown> = { passed: true } | { passed: false, error: AssertionError<T> }

/**
 * Assertion error type
 */
export interface AssertionError<T = unknown> extends Error {
	name: 'AssertionError'
	expected: T
	actual: T
	operator?: string
	details?: string
}

/**
 * Expect type
 */
export interface ExpectType<T = unknown> {
	toBe: (expected: T) => void
	toEqual: (expected: T) => void
	toBeTruthy: () => void
	toBeFalsy: () => void
	toBeNull: () => void
	toBeUndefined: () => void
	toBeDefined: () => void
	toBeNaN: () => void
	toBeGreaterThan: (expected: number) => void
	toBeLessThan: (expected: number) => void
	toBeGreaterThanOrEqual: (expected: number) => void
	toBeLessThanOrEqual: (expected: number) => void
	toBeCloseTo: (expected: number, precision?: number) => void
	toBeInstanceOf: (expected: new (...args: unknown[]) => unknown) => void
	toHaveProperty: (property: string, value?: unknown) => void
	toHaveLength: (length: number) => void
	toHaveBeenCalled: () => void
	toHaveBeenCalledTimes: (times: number) => void
	toHaveBeenCalledWith: (...args: unknown[]) => void
	toMatch: (expected: string | RegExp) => void
	toThrow: (expected?: string | RegExp) => void
	toBeType: (expected: string) => void
	toHaveReturned: () => void
	toHaveReturnedTimes: (times: number) => void
	toHaveReturnedWith: (value: unknown) => void
}

/**
 * Assertion matcher type
 */
export type AssertionMatcher = {
	[K in keyof ExpectType]: ExpectType[K] extends (...args: infer A) => void ? A : never
}

/**
 * Negation assertion type
 */
export interface NegatedExpectType<T = unknown> extends Omit<ExpectType<T>, 'toBe' | 'toEqual'> {
	not: ExpectType<T>
}

// ============================================================================
// Mock Types
// ============================================================================

/**
 * Mock type
 */
export interface Mock<T extends (...args: unknown[]) => unknown = (...args: unknown[]) => unknown> {
	(...args: Parameters<T>): ReturnType<T>
	mockImplementation: (fn: T) => Mock<T>
	mockImplementationOnce: (fn: T) => Mock<T>
	mockReturnValue: (value: ReturnType<T>) => Mock<T>
	mockReturnValueOnce: (value: ReturnType<T>) => Mock<T>
	mockResolvedValue: (value: Awaited<ReturnType<T>>) => Mock<T>
	mockResolvedValueOnce: (value: Awaited<ReturnType<T>>) => Mock<T>
	mockRejectedValue: (error: Error) => Mock<T>
	mockRejectedValueOnce: (error: Error) => Mock<T>
	mockReset: () => Mock<T>
	mockClear: () => Mock<T>
	mockRestore: () => Mock<T>
	mockName: (name: string) => Mock<T>
	getMockName: () => string
	getMockImplementation: () => T | undefined
	getMockCalls: () => Parameters<T>[]
	getMockResults: () => { type: 'return' | 'throw' | 'incomplete', value: ReturnType<T> }[]
	getMockContext: () => { calls: Parameters<T>[], instances: unknown[] }
}

/**
 * Mock configuration
 */
export interface MockConfig {
	name?: string
	implementation?: (...args: unknown[]) => unknown
	returnValue?: unknown
	resolvedValue?: unknown
	rejectedValue?: Error
	implementationOnce?: Array<(...args: unknown[]) => unknown>
	returnValueOnce?: unknown[]
	resolvedValueOnce?: unknown[]
	rejectedValueOnce?: Error[]
}

/**
 * Mock result type
 */
export interface MockResult {
	type: 'return' | 'throw' | 'incomplete'
	value: unknown
}

/**
 * Mock call type
 */
export interface MockCall<T = unknown> {
	args: unknown[]
	result?: MockResult
	context?: T
	instance?: unknown
}

/**
 * Spy type
 */
export interface Spy<T extends (...args: unknown[]) => unknown = (...args: unknown[]) => unknown> extends Mock<T> {
	original: T | undefined
	restore: () => void
}

/**
 * Spy configuration
 */
export interface SpyConfig {
	name: string
	module?: string
	accessType?: 'get' | 'set' | 'value'
}

// ============================================================================
// Fixture Types
// ============================================================================

/**
 * Fixture type
 */
export interface Fixture<T = unknown> {
	name: string
	data: T
	setup?: () => Promise<T> | T
	teardown?: (data: T) => Promise<void> | void
	clone?: () => T
}

/**
 * Fixture configuration
 */
export interface FixtureConfig<T = unknown> {
	scope: 'test' | 'suite' | 'file' | 'session'
	auto?: boolean
	dependencies?: string[]
	options?: T
}

/**
 * Fixture data type
 */
export type FixtureData<T = unknown> = T extends (...args: unknown[]) => Promise<infer R> | infer R ? R : T

/**
 * Fixture context type
 */
export interface FixtureContext<T = unknown> {
	fixtures: Map<string, unknown>
	get: <K extends keyof T>(name: K) => T[K]
	set: <K extends keyof T>(name: K, value: T[K]) => void
}

// ============================================================================
// Coverage Types
// ============================================================================

/**
 * Coverage type
 */
export interface Coverage<T = unknown> {
	lines: number
	functions: number
	branches: number
	statements: number
	files?: Map<string, FileCoverage>
	details?: T
}

/**
 * File coverage type
 */
export interface FileCoverage {
	path: string
	lines: CoverageRange
	functions: CoverageRange
	branches: CoverageRange
	statements: CoverageRange
	uncoveredLines: number[]
	uncoveredBranches: number[]
}

/**
 * Coverage range type
 */
export interface CoverageRange {
	total: number
	covered: number
	percentage: number
}

/**
 * Coverage report type
 */
export interface CoverageReport<T = unknown> {
	summary: Coverage
	files: FileCoverage[]
	threshold: CoverageThreshold
	passed: boolean
	format: 'json' | 'lcov' | 'clover' | 'cobertura' | 'text' | 'html'
	details?: T
}

/**
 * Coverage threshold type
 */
export interface CoverageThreshold {
	lines?: number
	functions?: number
	branches?: number
	statements?: number
	global?: boolean
}

/**
 * Coverage configuration
 */
export interface CoverageConfig {
	provider: 'v8' | 'istanbul'
	reporter: string[]
	include: string[]
	exclude: string[]
	threshold: CoverageThreshold
	reportOnFailure?: boolean
}

// ============================================================================
// Snapshot Types
// ============================================================================

/**
 * Snapshot type
 */
export interface Snapshot<T = unknown> {
	name: string
	content: string
	format?: 'json' | 'string'
	data?: T
	createdAt: Date
	updatedAt: Date
}

/**
 * Snapshot result type
 */
export interface SnapshotResult {
	passed: boolean
	name: string
	expected: string
	received: string
	diff?: string
}

/**
 * Snapshot match type
 */
export interface SnapshotMatch<T = unknown> {
	received: T
	expected: string
	name: string
	inline?: boolean
}

/**
 * Snapshot configuration
 */
export interface SnapshotConfig {
	update: 'all' | 'new' | 'none'
	snapshotFormat?: {
		escapeString?: boolean
		highlight?: boolean
		indent?: number
		maxDepth?: number
	}
	expand?: boolean
}

// ============================================================================
// Benchmark Types
// ============================================================================

/**
 * Benchmark type
 */
export interface Benchmark<T = unknown> {
	name: string
	description?: string
	fn: () => T | Promise<T>
	setup?: () => void | Promise<void>
	teardown?: () => void | Promise<void>
	iterations?: number
	warmup?: number
}

/**
 * Benchmark result type
 */
export interface BenchmarkResult<T = unknown> {
	name: string
	iterations: number
	hz: number
	ms: number
	statistics: BenchmarkStatistics
	samples: number[]
	options?: T
}

/**
 * Benchmark statistics
 */
export interface BenchmarkStatistics {
	mean: number
	variance: number
	std: number
	sem: number
	ci95: [number, number]
	min: number
	max: number
	median: number
	p75: number
	p90: number
	p99: number
	ops: number
}

/**
 * Benchmark configuration
 */
export interface BenchmarkConfig {
	iterations: number | 'auto'
	warmup: number
	parallel: boolean
	timeout: number
	delay: number
	sampleSize: number
}

/**
 * Performance metric type
 */
export interface PerformanceMetric {
	mean: number
	std: number
	min: number
	max: number
	p50: number
	p75: number
	p90: number
	p95: number
	p99: number
}

// ============================================================================
// Test Runner Types
// ============================================================================

/**
 * Test runner type
 */
export interface TestRunner {
	name: string
	version: string
	run: (tests: TestSuite[]) => Promise<TestRunnerResult>
	configure: (config: TestConfig) => void
}

/**
 * Test runner result
 */
export interface TestRunnerResult {
	suites: SuiteResult[]
	summary: TestSummary
	duration: number
}

/**
 * Suite result type
 */
export interface SuiteResult {
	name: string
	tests: TestResult[]
	duration: number
	passed: number
	failed: number
	skipped: number
}

/**
 * Test summary type
 */
export interface TestSummary {
	total: number
	passed: number
	failed: number
	skipped: number
	pending: number
	todo: number
	duration: number
	coverage?: Coverage
}

// ============================================================================
// Test Environment Types
// ============================================================================

/**
 * Test environment type
 */
export type TestEnvironmentType = 'node' | 'browser' | 'jsdom' | 'webworker' | 'custom'

/**
 * Test environment configuration
 */
export interface TestEnvironmentConfig {
	type: TestEnvironmentType
	setup?: string
	teardown?: string
	options?: Record<string, unknown>
}

// ============================================================================
// Test Hook Types
// ============================================================================

/**
 * Test hook type
 */
export type TestHook = 'beforeAll' | 'beforeEach' | 'afterEach' | 'afterAll'

/**
 * Test hook function type
 */
export type TestHookFunction = () => void | Promise<void>

/**
 * Test hooks configuration
 */
export interface TestHooksConfig {
	beforeAll?: TestHookFunction | TestHookFunction[]
	beforeEach?: TestHookFunction | TestHookFunction[]
	afterEach?: TestHookFunction | TestHookFunction[]
	afterAll?: TestHookFunction | TestHookFunction[]
}

// ============================================================================
// Test Filter Types
// ============================================================================

/**
 * Test filter type
 */
export interface TestFilter {
	name?: string | RegExp
	tags?: string[]
	only?: boolean
	skip?: boolean
	regex?: RegExp
}
