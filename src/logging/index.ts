/**
 * Logging & Observability Types
 *
 * Types for logging and monitoring systems.
 */

// ============================================================================
// Logger Types
// ============================================================================

/**
 * Logger type
 */
export interface Logger<T = Record<string, unknown>> {
	trace: (message: string, context?: T) => void
	debug: (message: string, context?: T) => void
	info: (message: string, context?: T) => void
	warn: (message: string, context?: T) => void
	error: (message: string, error?: Error, context?: T) => void
	fatal: (message: string, error?: Error, context?: T) => void
	child: (context: Partial<T>) => Logger<T>
}

/**
 * Log level
 */
export type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal'

/**
 * Log entry
 */
export interface LogEntry<T = Record<string, unknown>> {
	level: LogLevel
	message: string
	timestamp: Date
	context?: T
	error?: {
		message: string
		stack?: string
		name: string
	}
	traceId?: string
	spanId?: string
	service?: string
	version?: string
	hostname?: string
}

/**
 * Log context
 */
export type LogContext<T = Record<string, unknown>> = T & {
	traceId?: string
	spanId?: string
	userId?: string
	requestId?: string
	sessionId?: string
}

/**
 * Logger configuration
 */
export interface LoggerConfig<T = Record<string, unknown>> {
	level: LogLevel
	format: 'json' | 'pretty' | 'simple'
	transports: LogTransport[]
	context?: T
	redact?: string[]
}

/**
 * Log transport
 */
export interface LogTransport {
	type: 'console' | 'file' | 'http' | 'stream'
	options?: Record<string, unknown>
}

// ============================================================================
// Metrics Types
// ============================================================================

/**
 * Metric type
 */
export interface Metric<T = number> {
	name: string
	value: T
	timestamp: Date
	labels?: Record<string, string>
	help?: string
	type: MetricType
}

/**
 * Metric type enumeration
 */
export type MetricType = 'counter' | 'gauge' | 'histogram' | 'summary'

/**
 * Counter metric
 */
export interface Counter<T = number> {
	inc: (value?: T) => void
	dec: (value?: T) => void
	reset: () => void
	getValue: () => T
}

/**
 * Gauge metric
 */
export interface Gauge<T = number> {
	set: (value: T) => void
	inc: (value?: T) => void
	dec: (value?: T) => void
	reset: () => void
	getValue: () => T | undefined
}

/**
 * Histogram metric
 */
export interface Histogram {
	observe: (value: number) => void
	reset: () => void
	getBuckets: () => Record<string, number>
	getSum: () => number
	getCount: () => number
}

/**
 * Summary metric
 */
export interface Summary {
	observe: (value: number) => void
	reset: () => void
	getQuantiles: () => Record<string, number>
	getSum: () => number
	getCount: () => number
}

/**
 * Metrics registry
 */
export interface MetricsRegistry {
	register: <T extends Metric>(metric: T) => void
	unregister: (name: string) => void
	getMetric: (name: string) => Metric | undefined
	getAllMetrics: () => Metric[]
	export: () => string
}

// ============================================================================
// Tracing Types
// ============================================================================

/**
 * Span type
 */
export interface Span {
	traceId: string
	spanId: string
	parentSpanId?: string
	name: string
	kind: SpanKind
	startTime: Date
	endTime?: Date
	status: SpanStatus
	attributes: Record<string, unknown>
	events: SpanEvent[]
}

/**
 * Span kind
 */
export type SpanKind = 'client' | 'server' | 'producer' | 'consumer' | 'internal'

/**
 * Span status
 */
export type SpanStatus = 'unset' | 'ok' | 'error'

/**
 * Span event
 */
export interface SpanEvent {
	name: string
	timestamp: Date
	attributes?: Record<string, unknown>
}

/**
 * Trace type
 */
export interface Trace<T = unknown> {
	traceId: string
	spans: Span[]
	rootSpan: Span
	startTime: Date
	endTime?: Date
	duration?: number
	status: TraceStatus
	metadata?: T
}

/**
 * Trace status
 */
export type TraceStatus = 'in-progress' | 'completed' | 'failed'

/**
 * Trace context
 */
export interface TraceContext {
	traceId: string
	spanId: string
	traceFlags: number
	traceState?: string
}

/**
 * Tracer type
 */
export interface Tracer {
	startSpan: (name: string, options?: SpanOptions) => Span
	getCurrentSpan: () => Span | undefined
	setCurrentSpan: (span: Span) => void
	withSpan: <T>(span: Span, fn: () => T) => T
}

/**
 * Span options
 */
export interface SpanOptions {
	kind?: SpanKind
	attributes?: Record<string, unknown>
	parent?: Span
	links?: SpanLink[]
	startTime?: Date
}

/**
 * Span link
 */
export interface SpanLink {
	traceId: string
	spanId: string
	attributes?: Record<string, unknown>
}

// ============================================================================
// Monitoring Types
// ============================================================================

/**
 * Monitor type
 */
export interface Monitor {
	name: string
	check: () => Promise<MonitorResult>
	interval: number
	timeout: number
	status: MonitorStatus
	lastCheck?: Date
}

/**
 * Monitor status
 */
export type MonitorStatus = 'healthy' | 'unhealthy' | 'degraded' | 'unknown'

/**
 * Monitor result
 */
export interface MonitorResult<T = unknown> {
	status: MonitorStatus
	message: string
	timestamp: Date
	duration: number
	details?: T
}

/**
 * Alert type
 */
export interface Alert<T = unknown> {
	id: string
	name: string
	severity: AlertSeverity
	status: AlertStatus
	message: string
	timestamp: Date
	resolvedAt?: Date
	labels: Record<string, string>
	annotations: Record<string, string>
	details?: T
}

/**
 * Alert severity
 */
export type AlertSeverity = 'info' | 'warning' | 'critical' | 'error'

/**
 * Alert status
 */
export type AlertStatus = 'firing' | 'resolved' | 'silenced' | 'inhibited'

/**
 * Alert rule
 */
export interface AlertRule<T = unknown> {
	name: string
	expression: string
	duration: number
	severity: AlertSeverity
	labels: Record<string, string>
	annotations: Record<string, string>
	for?: number
	handler?: (alert: Alert<T>) => void
}

/**
 * Alert configuration
 */
export interface AlertConfig {
	rules: AlertRule[]
	receivers: AlertReceiver[]
	route: AlertRoute
	inhibitRules?: InhibitRule[]
}

/**
 * Alert receiver
 */
export interface AlertReceiver {
	name: string
	type: 'email' | 'slack' | 'pagerduty' | 'webhook' | 'opsgenie' | 'victorops'
	config: Record<string, unknown>
}

/**
 * Alert route
 */
export interface AlertRoute {
	receiver: string
	match?: Record<string, string>
	continue?: boolean
	routes?: AlertRoute[]
}

/**
 * Inhibit rule
 */
export interface InhibitRule {
	sourceMatch: Record<string, string>
	targetMatch: Record<string, string>
	equal: string[]
}

// ============================================================================
// Health Types
// ============================================================================

/**
 * Health indicator
 */
export interface HealthIndicator<T = unknown> {
	name: string
	check: () => Promise<HealthCheckResult<T>>
	critical: boolean
}

/**
 * Health check result
 */
export interface HealthCheckResult<T = unknown> {
	status: 'healthy' | 'unhealthy' | 'degraded'
	message?: string
	timestamp: Date
	duration?: number
	details?: T
}

/**
 * Liveness check
 */
export interface LivenessCheck {
	check: () => Promise<boolean>
	timeout: number
}

/**
 * Readiness check
 */
export interface ReadinessCheck {
	check: () => Promise<boolean>
	timeout: number
	dependencies: string[]
}
