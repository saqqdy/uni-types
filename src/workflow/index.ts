/**
 * Workflow Engine Types
 *
 * Types for workflow and process management.
 */

// ============================================================================
// Workflow Types
// ============================================================================

/**
 * Workflow type
 */
export type Workflow<T = unknown> = {
	id: string
	name: string
	description?: string
	version: string
	definition: WorkflowDefinition<T>
	status: WorkflowStatus
	createdAt: Date
	updatedAt: Date
}

/**
 * Workflow definition
 */
export type WorkflowDefinition<T = unknown> = {
	steps: WorkflowStep[]
	transitions: WorkflowTransition[]
	initialStep: string
	finalSteps: string[]
	timeouts?: WorkflowTimeout
	errorHandler?: WorkflowErrorHandler<T>
	context?: T
}

/**
 * Workflow instance
 */
export type WorkflowInstance<T = unknown> = {
	id: string
	workflowId: string
	status: WorkflowStatus
	currentStep: string
	context: T
	history: HistoryEntry[]
	startedAt: Date
	completedAt?: Date
	error?: WorkflowError
	metadata?: Record<string, unknown>
}

/**
 * Workflow status
 */
export type WorkflowStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled' | 'paused'

// ============================================================================
// Step Types
// ============================================================================

/**
 * Workflow step
 */
export type WorkflowStep<T = unknown> = {
	id: string
	name: string
	description?: string
	type: StepType
	config?: T
	timeout?: number
	retryPolicy?: RetryPolicy
	compensation?: string
	onSuccess?: string
	onFailure?: string
}

/**
 * Step type
 */
export type StepType = 'task' | 'decision' | 'parallel' | 'subworkflow' | 'wait' | 'human' | 'script' | 'http'

/**
 * Step result
 */
export type StepResult<T = unknown> =
	| { success: true; data: T; nextStep?: string }
	| { success: false; error: Error; retry?: boolean; compensation?: boolean }

/**
 * Step status
 */
export type StepStatus = 'waiting' | 'running' | 'success' | 'failure' | 'skipped' | 'compensated'

// ============================================================================
// Transition Types
// ============================================================================

/**
 * Workflow transition
 */
export type WorkflowTransition<T = unknown> = {
	from: string
	to: string | string[]
	condition?: TransitionCondition<T>
	action?: TransitionAction<T>
	priority?: number
}

/**
 * Transition condition
 */
export type TransitionCondition<T = unknown> = (context: T) => boolean

/**
 * Transition action
 */
export type TransitionAction<T = unknown> = (context: T) => T | Promise<T>

/**
 * Workflow timeout
 */
export type WorkflowTimeout = {
	workflow?: number
	step?: number
	action?: number
}

// ============================================================================
// Execution Types
// ============================================================================

/**
 * Workflow execution
 */
export type WorkflowExecution<T = unknown> = {
	id: string
	instanceId: string
	status: ExecutionStatus
	startedAt: Date
	completedAt?: Date
	duration?: number
	steps: ExecutionStep<T>
	result?: T
	error?: WorkflowError
}

/**
 * Execution status
 */
export type ExecutionStatus = 'pending' | 'running' | 'completed' | 'failed' | 'timeout' | 'cancelled'

/**
 * Execution step
 */
export type ExecutionStep<T = unknown> = {
	stepId: string
	status: StepStatus
	startedAt: Date
	completedAt?: Date
	input?: T
	output?: T
	error?: Error
	retryCount: number
}

/**
 * Execution context
 */
export type ExecutionContext<T = unknown> = {
	workflowId: string
	instanceId: string
	executionId: string
	currentStep: string
	context: T
	metadata: Record<string, unknown>
	variables: Record<string, unknown>
}

/**
 * Execution result
 */
export type ExecutionResult<T = unknown> =
	| { success: true; data: T; completedAt: Date }
	| { success: false; error: WorkflowError; completedAt: Date }

// ============================================================================
// History Types
// ============================================================================

/**
 * Workflow history
 */
export type WorkflowHistory<T = unknown> = {
	instanceId: string
	entries: HistoryEntry<T>[]
	total: number
}

/**
 * History entry
 */
export type HistoryEntry<T = unknown> = {
	id: string
	timestamp: Date
	type: HistoryEventType
	stepId?: string
	fromStep?: string
	toStep?: string
	context?: T
	result?: StepResult<T>
	error?: Error
	duration?: number
	actor?: string
}

/**
 * History event
 */
export type HistoryEvent<T = unknown> = {
	type: HistoryEventType
	timestamp: Date
	data: T
}

/**
 * History event type
 */
export type HistoryEventType =
	| 'workflow_started'
	| 'workflow_completed'
	| 'workflow_failed'
	| 'workflow_cancelled'
	| 'step_started'
	| 'step_completed'
	| 'step_failed'
	| 'step_skipped'
	| 'transition'
	| 'compensation_started'
	| 'compensation_completed'
	| 'error'
	| 'retry'
	| 'timeout'

// ============================================================================
// Error Handling
// ============================================================================

/**
 * Workflow error
 */
export type WorkflowError = {
	code: string
	message: string
	details?: unknown
	stack?: string
	retryable: boolean
	timestamp: Date
}

/**
 * Workflow error handler
 */
export type WorkflowErrorHandler<T = unknown> = {
	onError: (error: WorkflowError, context: ExecutionContext<T>) => ErrorHandlerResult
}

/**
 * Error handler result
 */
export type ErrorHandlerResult =
	| { action: 'retry'; delay?: number }
	| { action: 'compensate' }
	| { action: 'continue'; nextStep: string }
	| { action: 'fail' }
	| { action: 'ignore' }

/**
 * Retry policy
 */
export type RetryPolicy = {
	maxRetries: number
	backoff: 'fixed' | 'exponential' | 'linear'
	initialDelay: number
	maxDelay: number
	retryableErrors?: string[]
}

// ============================================================================
// BPMN-like Types
// ============================================================================

/**
 * BPMN process
 */
export type BPMNProcess<T = unknown> = {
	id: string
	name: string
	type: BPMNProcessType
	lane?: string
	documentation?: string
	extensionElements?: Record<string, unknown>
} & WorkflowDefinition<T>

/**
 * BPMN process type
 */
export type BPMNProcessType = 'none' | 'message' | 'timer' | 'signal' | 'conditional' | 'error' | 'escalation' | 'compensation' | 'multiple' | 'parallel'

/**
 * BPMN task
 */
export type BPMNTask<T = unknown> = {
	id: string
	name: string
	type: BPMNTaskType
	assignee?: string
	candidateUsers?: string[]
	candidateGroups?: string[]
	priority?: number
	dueDate?: Date
	formKey?: string
	input?: T
	output?: T
}

/**
 * BPMN task type
 */
export type BPMNTaskType =
	| 'user'
	| 'service'
	| 'script'
	| 'business-rule'
	| 'manual'
	| 'send'
	| 'receive'
	| 'abstract'

/**
 * BPMN gateway
 */
export type BPMNGateway<T = unknown> = {
	id: string
	name: string
	type: BPMNGatewayType
	conditions?: BPMNGatewayCondition<T>[]
	defaultFlow?: string
}

/**
 * BPMN gateway type
 */
export type BPMNGatewayType = 'exclusive' | 'parallel' | 'inclusive' | 'event-based' | 'complex'

/**
 * BPMN gateway condition
 */
export type BPMNGatewayCondition<T = unknown> = {
	flowId: string
	condition: (context: T) => boolean
	expression?: string
}

/**
 * BPMN event
 */
export type BPMNEvent<T = unknown> = {
	id: string
	name: string
	type: BPMNEventType
	trigger: BPMNEventTrigger
	catching: boolean
	data?: T
}

/**
 * BPMN event type
 */
export type BPMNEventType = 'start' | 'end' | 'intermediate' | 'boundary'

/**
 * BPMN event trigger
 */
export type BPMNEventTrigger =
	| 'none'
	| 'message'
	| 'timer'
	| 'signal'
	| 'conditional'
	| 'error'
	| 'escalation'
	| 'compensation'
	| 'link'
	| 'terminate'
	| 'multiple'
	| 'parallel'

// ============================================================================
// Workflow Engine
// ============================================================================

/**
 * Workflow engine
 */
export type WorkflowEngine<T = unknown> = {
	register: (workflow: Workflow<T>) => void
	unregister: (workflowId: string) => void
	start: (workflowId: string, input?: T) => Promise<WorkflowInstance>
	resume: (instanceId: string) => Promise<WorkflowInstance>
	cancel: (instanceId: string) => Promise<void>
	pause: (instanceId: string) => Promise<void>
	getStatus: (instanceId: string) => Promise<WorkflowInstance | undefined>
	getHistory: (instanceId: string) => Promise<WorkflowHistory>
	listInstances: (workflowId?: string) => Promise<WorkflowInstance[]>
}

/**
 * Workflow engine configuration
 */
export type WorkflowEngineConfig = {
	persistence: WorkflowPersistence
	executor: WorkflowExecutor
	maxConcurrentWorkflows: number
	defaultTimeout: number
	errorHandling: ErrorHandlingStrategy
}

/**
 * Workflow persistence
 */
export type WorkflowPersistence = {
	saveInstance: (instance: WorkflowInstance) => Promise<void>
	getInstance: (instanceId: string) => Promise<WorkflowInstance | undefined>
	deleteInstance: (instanceId: string) => Promise<void>
	saveHistory: (instanceId: string, entry: HistoryEntry) => Promise<void>
	getHistory: (instanceId: string) => Promise<HistoryEntry[]>
}

/**
 * Workflow executor
 */
export type WorkflowExecutor = {
	executeStep: <T>(step: WorkflowStep, context: ExecutionContext<T>) => Promise<StepResult>
	executeParallel: <T>(steps: WorkflowStep[], context: ExecutionContext<T>) => Promise<StepResult[]>
}

/**
 * Error handling strategy
 */
export type ErrorHandlingStrategy = 'fail-fast' | 'compensate' | 'ignore' | 'manual'
