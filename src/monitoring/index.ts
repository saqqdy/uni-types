/**
 * Performance Monitoring Types
 *
 * Types for performance monitoring and profiling.
 */

// ============================================================================
// Performance Types
// ============================================================================

/**
 * Performance type
 */
export interface Performance {
	now: () => number
	mark: (name: string) => void
	measure: (name: string, startMark?: string, endMark?: string) => PerformanceMeasure
	getEntries: () => PerformanceEntry[]
	getEntriesByName: (name: string) => PerformanceEntry[]
	getEntriesByType: (type: string) => PerformanceEntry[]
	clearMarks: (name?: string) => void
	clearMeasures: (name?: string) => void
	clearResourceTimings: () => void
}

/**
 * Performance metric type
 */
export interface PerformanceMetric<T = number> {
	name: string
	value: T
	unit: 'ms' | 's' | 'bytes' | 'count' | 'percent' | 'custom'
	timestamp: Date
	tags?: Record<string, string>
	description?: string
}

/**
 * Performance entry type
 */
export interface PerformanceEntry {
	name: string
	entryType: 'mark' | 'measure' | 'navigation' | 'resource' | 'paint' | 'longtask'
	startTime: number
	duration: number
}

/**
 * Performance measure type
 */
export interface PerformanceMeasure extends PerformanceEntry {
	entryType: 'measure'
	detail?: unknown
}

/**
 * Performance mark type
 */
export type PerformanceMark = string

// ============================================================================
// Timing Types
// ============================================================================

/**
 * Timing type
 */
export interface Timing {
	name: string
	startTime: number
	endTime?: number
	duration?: number
	metadata?: Record<string, unknown>
}

/**
 * Timing result type
 */
export interface TimingResult {
	name: string
	duration: number
	start: number
	end: number
	metadata?: Record<string, unknown>
}

/**
 * Timing start type
 */
export interface TimingStart {
	name: string
	timestamp: number
}

/**
 * Timing end type
 */
export interface TimingEnd {
	name: string
	timestamp: number
	duration: number
}

/**
 * Timing configuration
 */
export interface TimingConfig {
	enabled: boolean
	autoStart: boolean
	precision: 'ms' | 'ns' | 'us'
	storeResults: boolean
	maxResults: number
}

// ============================================================================
// Memory Types
// ============================================================================

/**
 * Memory usage type
 */
export interface MemoryUsage {
	heapUsed: number
	heapTotal: number
	external: number
	rss?: number
	arrayBuffers?: number
}

/**
 * Memory metric type
 */
export interface MemoryMetric<T = number> {
	timestamp: Date
	usage: MemoryUsage
	delta?: T
	peak?: MemoryUsage
}

/**
 * Memory snapshot type
 */
export interface MemorySnapshot {
	id: string
	timestamp: Date
	usage: MemoryUsage
	heapMap?: HeapMap
	statistics?: MemoryStatistics
}

/**
 * Heap map type
 */
export interface HeapMap {
	nodes: HeapNode[]
	edges: HeapEdge[]
	locations: number[]
	strings: string[]
}

/**
 * Heap node type
 */
export interface HeapNode {
	id: number
	type: string
	name: string
	size: number
	edgeCount: number
	traceNodeId?: number
}

/**
 * Heap edge type
 */
export interface HeapEdge {
	type: string
	nameOrIndex: string | number
	toNode: number
}

/**
 * Memory statistics type
 */
export interface MemoryStatistics {
	totalHeapSize: number
	totalHeapExecutable: number
	usedHeapSize: number
	heapSizeLimit: number
	mallocedMemory: number
	peakMallocedMemory: number
	mallocedMemoryPeak?: number
}

/**
 * Memory leak detection result
 */
export interface MemoryLeakDetection {
	suspected: boolean
	leakedObjects: LeakedObject[]
	growthRate: number
	threshold: number
}

/**
 * Leaked object type
 */
export interface LeakedObject {
	id: number
	type: string
	size: number
	retainedSize: number
	retainers: string[]
}

// ============================================================================
// CPU Types
// ============================================================================

/**
 * CPU usage type
 */
export interface CPUUsage {
	user: number
	system: number
}

/**
 * CPU metric type
 */
export interface CPUMetric<T = number> {
	timestamp: Date
	usage: CPUUsage
	percent?: T
	cores?: number
	loadAverage?: number[]
}

/**
 * CPU profile type
 */
export interface CPUProfile {
	nodes: ProfileNode[]
	startTime: number
	endTime: number
	samples: number[]
	timeDeltas: number[]
}

// ============================================================================
// Profiler Types
// ============================================================================

/**
 * Profiler type
 */
export interface Profiler<T = unknown> {
	start: () => void
	stop: () => ProfileResult<T>
	pause: () => void
	resume: () => void
	isRunning: boolean
}

/**
 * Profile result type
 */
export interface ProfileResult<T = unknown> {
	duration: number
	frames: ProfileFrame[]
	stack: ProfileStack
	statistics: ProfileStatistics
	metadata?: T
}

/**
 * Profile frame type
 */
export interface ProfileFrame {
	name: string
	file?: string
	line?: number
	column?: number
	duration: number
	selfTime: number
	percentage: number
	callCount: number
	children?: ProfileFrame[]
}

/**
 * Profile stack type
 */
export interface ProfileStack<T = unknown> {
	frames: ProfileFrame[]
	depth: number
	totalDuration: number
	data?: T
}

/**
 * Profile statistics type
 */
export interface ProfileStatistics {
	totalSamples: number
	samplingInterval: number
	functionCount: number
	averageCallDepth: number
	hotspots: ProfileHotspot[]
}

/**
 * Profile hotspot type
 */
export interface ProfileHotspot {
	name: string
	selfTime: number
	totalTime: number
	percentage: number
	samples: number
}

/**
 * Profile node type
 */
export interface ProfileNode {
	id: number
	callFrame: CallFrame
	hitCount?: number
	children?: number[]
	deoptReason?: string
	positionTicks?: PositionTick[]
}

/**
 * Call frame type
 */
export interface CallFrame {
	functionName: string
	scriptId: number
	url: string
	lineNumber: number
	columnNumber: number
}

/**
 * Position tick type
 */
export interface PositionTick {
	line: number
	ticks: number
}

// ============================================================================
// Tracing Types
// ============================================================================

/**
 * Performance trace type
 */
export interface PerformanceTrace<T = unknown> {
	id: string
	name: string
	startTime: Date
	endTime?: Date
	duration?: number
	spans: TraceSpan[]
	status: TraceStatusType
	metadata?: T
}

/**
 * Trace span type
 */
export interface TraceSpan<T = unknown> {
	id: string
	traceId: string
	parentSpanId?: string
	name: string
	kind: SpanKindType
	startTime: number
	endTime?: number
	duration?: number
	status: SpanStatusType
	attributes: Record<string, T>
	events: SpanEvent[]
	links?: SpanLink[]
}

/**
 * Span kind type
 */
export type SpanKindType = 'client' | 'server' | 'producer' | 'consumer' | 'internal'

/**
 * Span status type
 */
export type SpanStatusType = 'unset' | 'ok' | 'error'

/**
 * Trace status type
 */
export type TraceStatusType = 'in-progress' | 'completed' | 'failed'

/**
 * Span event type
 */
export interface SpanEvent {
	name: string
	timestamp: number
	attributes?: Record<string, unknown>
}

/**
 * Span link type
 */
export interface SpanLink {
	traceId: string
	spanId: string
	attributes?: Record<string, unknown>
}

/**
 * Trace context type
 */
export interface TraceContext {
	traceId: string
	spanId: string
	traceFlags: number
	traceState?: string
}

/**
 * Trace configuration
 */
export interface TraceConfig {
	samplingRate: number
	maxSpans: number
	exportInterval: number
	exportTimeout: number
	propagators: string[]
}

// ============================================================================
// Benchmark Types
// ============================================================================

/**
 * Performance benchmark type
 */
export interface PerformanceBenchmark<T = unknown> {
	name: string
	description?: string
	setup?: () => void | Promise<void>
	teardown?: () => void | Promise<void>
	fn: () => T | Promise<T>
	iterations: number
	warmupIterations: number
	timeout: number
}

/**
 * Benchmark suite type
 */
export interface BenchmarkSuite<T = unknown> {
	name: string
	benchmarks: PerformanceBenchmark<T>[]
	beforeAll?: () => void | Promise<void>
	afterAll?: () => void | Promise<void>
	compareWith?: string
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
 * Benchmark comparison type
 */
export interface BenchmarkComparison<T = unknown> {
	baseline: BenchmarkResult<T>
	current: BenchmarkResult<T>
	improvement: number
	significant: boolean
}

/**
 * Benchmark statistics
 */
export interface BenchmarkStatistics {
	mean: number
	median: number
	std: number
	min: number
	max: number
	p95: number
	p99: number
	iterations: number
	samples: number[]
}

// ============================================================================
// Metrics Registry Types
// ============================================================================

/**
 * Metrics registry type
 */
export interface MetricsRegistry {
	register: (metric: PerformanceMetric) => void
	unregister: (name: string) => void
	get: (name: string) => PerformanceMetric | undefined
	getAll: () => PerformanceMetric[]
	record: (name: string, value: number, tags?: Record<string, string>) => void
	export: (format: 'prometheus' | 'json' | 'influx') => string
}

/**
 * Metrics configuration
 */
export interface MetricsConfig {
	prefix?: string
	defaultTags?: Record<string, string>
	exportInterval?: number
	exportTimeout?: number
	flushOnExit?: boolean
}

// ============================================================================
// Alert Types
// ============================================================================

/**
 * Performance alert type
 */
export interface PerformanceAlert {
	id: string
	name: string
	threshold: number
	operator: 'gt' | 'gte' | 'lt' | 'lte' | 'eq'
	currentValue: number
	severity: 'info' | 'warning' | 'critical'
	timestamp: Date
	resolvedAt?: Date
	metadata?: Record<string, unknown>
}

/**
 * Alert configuration
 */
export interface AlertConfig {
	metric: string
	threshold: number
	operator: 'gt' | 'gte' | 'lt' | 'lte' | 'eq'
	duration?: number
	severity: 'info' | 'warning' | 'critical'
	actions?: AlertAction[]
}

/**
 * Alert action type
 */
export interface AlertAction {
	type: 'log' | 'webhook' | 'email' | 'slack' | 'pagerduty'
	config: Record<string, unknown>
}

// ============================================================================
// Health Check Types
// ============================================================================

/**
 * Performance health check type
 */
export interface PerformanceHealthCheck {
	name: string
	check: () => Promise<HealthCheckResult>
	interval?: number
	timeout?: number
	critical?: boolean
}

/**
 * Health check result type
 */
export interface HealthCheckResult {
	status: 'healthy' | 'unhealthy' | 'degraded'
	message?: string
	timestamp: Date
	duration: number
	details?: Record<string, unknown>
}
