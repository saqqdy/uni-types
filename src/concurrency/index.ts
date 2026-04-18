/**
 * Type-level concurrency patterns
 *
 * This module provides types for:
 * - Task types
 * - Pipeline types
 * - Scheduler types
 * - Worker types
 * - Rate limiting types
 */

// ============================================================================
// Task Types
// ============================================================================

/**
 * Task status
 *
 * @example
 * ```ts
 * type Status = TaskStatus  // 'pending' | 'running' | 'completed' | 'failed'
 * ```
 */
export type TaskStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled'

/**
 * Task type
 *
 * @example
 * ```ts
 * type MyTask = Task<string>
 * ```
 */
export type Task<T> = {
	id: string
	status: TaskStatus
	result?: T
	error?: Error
	createdAt: number
	startedAt?: number
	completedAt?: number
}

/**
 * Task result type
 *
 * @example
 * ```ts
 * type Result = TaskResult<string>
 * ```
 */
export type TaskResult<T> = {
	success: boolean
	data?: T
	error?: Error
}

/**
 * Task error type
 *
 * @example
 * ```ts
 * type Error = TaskError<{ code: 'TIMEOUT' }>
 * ```
 */
export type TaskError<T extends { message: string; code?: string }> = {
	taskId: string
	message: T['message']
	code: T extends { code: infer C } ? C : 'UNKNOWN'
	timestamp: number
}

/**
 * Task options
 *
 * @example
 * ```ts
 * type Options = TaskOptions<{ timeout: 5000 }>
 * ```
 */
export type TaskOptions<
	T extends {
		timeout?: number
		retries?: number
		priority?: TaskPriority
	},
> = T

/**
 * Task priority levels
 *
 * @example
 * ```ts
 * type Priority = TaskPriority  // 'high' | 'normal' | 'low'
 * ```
 */
export type TaskPriority = 'high' | 'normal' | 'low'

// ============================================================================
// Pipeline Types
// ============================================================================

/**
 * Pipeline type
 *
 * @example
 * ```ts
 * type MyPipeline = Pipeline<string, number, boolean>
 * ```
 */
export type Pipeline<Input, Output, Stages extends PipelineStage<any, any, any>[] = []> = {
	input: Input
	output: Output
	stages: Stages
}

/**
 * Pipeline stage
 *
 * @example
 * ```ts
 * type Stage = PipelineStage<'parse', string, object>
 * ```
 */
export type PipelineStage<
	Name extends string,
	Input,
	Output,
> = {
	name: Name
	input: Input
	output: Output
	handler: (input: Input) => Output | Promise<Output>
}

/**
 * Pipeline execution result
 *
 * @example
 * ```ts
 * type Result = PipelineRun<string>
 * ```
 */
export type PipelineRun<T> = {
	success: boolean
	result?: T
	stageResults: StageResult[]
	totalTime: number
}

/**
 * Stage execution result
 *
 * @example
 * ```ts
 * type Result = StageResult<'parse', object>
 * ```
 */
export type StageResult<Name extends string = string, Output = unknown> = {
	stage: Name
	success: boolean
	output?: Output
	error?: Error
	duration: number
}

/**
 * Add stage to pipeline
 *
 * @example
 * ```ts
 * type NewPipeline = AddStage<Pipeline, Stage>
 * ```
 */
export type AddStage<
	P extends Pipeline<any, any, any>,
	S extends PipelineStage<any, P['output'], any>,
> = Pipeline<P['input'], S['output'], [...P['stages'], S]>

// ============================================================================
// Scheduler Types
// ============================================================================

/**
 * Scheduler type
 *
 * @example
 * ```ts
 * type MyScheduler = Scheduler<{ maxConcurrent: 5 }>
 * ```
 */
export type Scheduler<T extends { maxConcurrent?: number; queueSize?: number } = {}> = {
	options: T
	queue: ScheduledJob[]
	running: ScheduledJob[]
}

/**
 * Scheduled job type
 *
 * @example
 * ```ts
 * type Job = ScheduledJob<string>
 * ```
 */
export type ScheduledJob<T = unknown> = {
	id: string
	task: T
	priority: TaskPriority
	scheduledAt: number
	delay?: number
}

/**
 * Job priority queue
 *
 * @example
 * ```ts
 * type Queue = PriorityQueue<ScheduledJob>
 * ```
 */
export type PriorityQueue<Job extends { priority: TaskPriority }> = {
	high: Job[]
	normal: Job[]
	low: Job[]
}

/**
 * Schedule options
 *
 * @example
 * ```ts
 * type Options = ScheduleOptions<{ delay: 1000 }>
 * ```
 */
export type ScheduleOptions<
	T extends {
		delay?: number
		priority?: TaskPriority
		retryOnError?: boolean
	},
> = T

// ============================================================================
// Worker Types
// ============================================================================

/**
 * Worker type
 *
 * @example
 * ```ts
 * type MyWorker = Worker<string, number>
 * ```
 */
export type Worker<Input, Output> = {
	id: string
	status: 'idle' | 'busy' | 'stopped'
	task?: WorkerTask<Input, Output>
}

/**
 * Worker task type
 *
 * @example
 * ```ts
 * type Task = WorkerTask<string, number>
 * ```
 */
export type WorkerTask<Input, Output> = {
	input: Input
	output?: Output
	error?: Error
	startedAt: number
}

/**
 * Worker pool type
 *
 * @example
 * ```ts
 * type Pool = WorkerPool<string, number, { size: 4 }>
 * ```
 */
export type WorkerPool<
	Input,
	Output,
	Options extends { size?: number; maxTasksPerWorker?: number } = {},
> = {
	workers: Worker<Input, Output>[]
	options: Options
	queue: Input[]
}

/**
 * Worker options
 *
 * @example
 * ```ts
 * type Options = WorkerOptions<{ timeout: 30000 }>
 * ```
 */
export type WorkerOptions<
	T extends {
		timeout?: number
		maxConcurrent?: number
		restartOnError?: boolean
	},
> = T

// ============================================================================
// Rate Limiting Types
// ============================================================================

/**
 * Rate limiter type
 *
 * @example
 * ```ts
 * type Limiter = RateLimiter<{ maxRequests: 100; windowMs: 60000 }>
 * ```
 */
export type RateLimiter<
	Options extends {
		maxRequests: number
		windowMs: number
	},
> = {
	options: Options
	requests: number[]
	remaining: number
	resetAt: number
}

/**
 * Throttle options
 *
 * @example
 * ```ts
 * type Options = ThrottleOptions<{ limit: 100; period: 1000 }>
 * ```
 */
export type ThrottleOptions<
	T extends {
		limit: number
		period: number
	},
> = T

/**
 * Throttle state
 *
 * @example
 * ```ts
 * type State = Throttle<{ limit: 10; period: 1000 }>
 * ```
 */
export type Throttle<
	Config extends {
		limit: number
		period: number
	},
> = {
	config: Config
	count: number
	lastReset: number
	canExecute: boolean
}

/**
 * Debounce options
 *
 * @example
 * ```ts
 * type Options = DebounceOptions<{ delay: 500 }>
 * ```
 */
export type DebounceOptions<T extends { delay: number; leading?: boolean; trailing?: boolean }> = T

/**
 * Debounce state
 *
 * @example
 * ```ts
 * type State = Debounce<{ delay: 500 }>
 * ```
 */
export type Debounce<
	Config extends {
		delay: number
	},
> = {
	config: Config
	pendingCall?: unknown
	lastCall?: number
	timer?: number
}

// ============================================================================
// Async Patterns
// ============================================================================

/**
 * Semaphore type
 *
 * @example
 * ```ts
 * type Sem = Semaphore<{ permits: 3 }>
 * ```
 */
export type Semaphore<
	Options extends {
		permits: number
	},
> = {
	permits: Options['permits']
	available: number
	waitQueue: unknown[]
}

/**
 * Mutex type (binary semaphore)
 *
 * @example
 * ```ts
 * type Mutex = MutexState
 * ```
 */
export type MutexState = {
	locked: boolean
	owner?: string
	waitQueue: unknown[]
}

/**
 * Lock acquisition
 *
 * @example
 * ```ts
 * type Lock = LockAcquisition<'resource-1'>
 * ```
 */
export type LockAcquisition<Resource extends string> = {
	resource: Resource
	acquiredAt: number
	owner: string
	timeout?: number
}

/**
 * Bulkhead (isolation pattern)
 *
 * @example
 * ```ts
 * type Bulk = Bulkhead<{ maxConcurrent: 10 }>
 * ```
 */
export type Bulkhead<
	Options extends {
		maxConcurrent: number
		maxWaitQueue?: number
	},
> = {
	options: Options
	active: number
	waitQueue: unknown[]
	rejected: number
}