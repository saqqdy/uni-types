/**
 * Type-Level Debugging Tools (v1.8.0)
 *
 * Type-level debugging and introspection including:
 * - Debug types
 * - Breakpoint types
 * - Stack trace types
 * - Variable inspection
 * - Watch types
 * - Memory inspection
 * - Debug protocol
 * - REPL types
 */

// ============================================================================
// Debug Core Types
// ============================================================================

/**
 * Debug info type
 */
export interface DebugInfo<T = unknown> {
	id: string
	name: string
	type: string
	value: T
	location?: SourceLocation
	scope?: DebugScope
}

/**
 * Debug symbol type
 */
export interface DebugSymbol {
	name: string
	type: string
	kind: DebugSymbolKind
	address?: number
	size?: number
	location?: SourceLocation
}

/**
 * Debug symbol kind
 */
export type DebugSymbolKind
	= | 'variable'
		| 'function'
		| 'class'
		| 'module'
		| 'namespace'
		| 'enum'
		| 'type'
		| 'property'
		| 'method'
		| 'parameter'
		| 'local'
		| 'global'

/**
 * Debug context type
 */
export interface DebugContext<T = unknown> {
	session: DebugSession
	thread: DebugThread
	frame: DebugStackFrame | null
	variables: Map<string, Variable<T>>
	scope: DebugScope
}

/**
 * Debug session
 */
export interface DebugSession {
	id: string
	name: string
	status: DebugStatus
	breakpoints: Breakpoint[]
	watches: WatchExpression[]
	threads: DebugThread[]
	currentThread: DebugThread | null
	configuration: DebugConfiguration
}

/**
 | Debug status
 */
export type DebugStatus
	= | 'initialized'
		| 'running'
		| 'paused'
		| 'stepping'
		| 'stopped'
		| 'terminated'
		| 'error'

/**
 * Debug configuration
 */
export interface DebugConfiguration {
	type: string
	request: 'launch' | 'attach'
	name: string
	program?: string
	args?: string[]
	cwd?: string
	env?: Record<string, string>
	stopOnEntry?: boolean
	breakOnFirstLine?: boolean
	sourceMaps?: boolean
	port?: number
	address?: string
}

// ============================================================================
// Breakpoint Types
// ============================================================================

/**
 * Breakpoint type
 */
export interface Breakpoint {
	id: string
	verified: boolean
	enabled: boolean
	location: BreakpointLocation
	condition?: BreakpointCondition
	hitCondition?: string
	actions?: BreakpointAction[]
	hitCount: number
}

/**
 | Breakpoint location
 */
export interface BreakpointLocation {
	path: string
	line: number
	column?: number
	endLine?: number
	endColumn?: number
	instructionReference?: string
	offset?: number
}

/**
 | Breakpoint condition
 */
export type BreakpointCondition = string | ((context: DebugContext) => boolean)

/**
 * Breakpoint action
 */
export type BreakpointAction
	= | { type: 'log', message: string }
		| { type: 'evaluate', expression: string }
		| { type: 'continue' }
		| { type: 'pause' }
		| { type: 'call', function: string, args: unknown[] }

/**
 * Breakpoint type enumeration
 */
export type BreakpointType
	= | 'source'
		| 'function'
		| 'instruction'
		| 'data'
		| 'exception'
		| 'conditional'
		| 'logpoint'

/**
 * Function breakpoint
 */
export interface FunctionBreakpoint {
	name: string
	condition?: BreakpointCondition
	hitCondition?: string
	enabled: boolean
}

/**
 | Data breakpoint
 */
export interface DataBreakpoint {
	variable: string
	access: 'read' | 'write' | 'readWrite'
	condition?: BreakpointCondition
	enabled: boolean
}

/**
 * Exception breakpoint
 */
export interface ExceptionBreakpoint {
	filter: string
	condition?: BreakpointCondition
	enabled: boolean
}

// ============================================================================
// Stack Trace Types
// ============================================================================

/**
 * Stack trace type
 */
export interface StackTrace<T = unknown> {
	frames: DebugStackFrame<T>[]
	totalFrames?: number
	threadId: number
}

/**
 | Stack frame type
 */
export interface DebugStackFrame<T = unknown> {
	id: number
	name: string
	source?: Source
	line: number
	column: number
	endLine?: number
	endColumn?: number
	instructionPointerReference?: string
	moduleId?: string
	presentationHint?: 'normal' | 'label' | 'subtle'
	scope?: DebugScope<T>
}

/**
 * Source type
 */
export interface Source {
	name?: string
	path?: string
	sourceReference?: number
	presentationHint?: 'normal' | 'emphasize' | 'deemphasize'
	origin?: string
	sources?: string[]
	adapterData?: unknown
	checksums?: Checksum[]
}

/**
 | Checksum type
 */
export interface Checksum {
	algorithm: 'MD5' | 'SHA1' | 'SHA256' | 'timestamp'
	checksum: string
}

/**
 * Call stack type
 */
export interface CallStack<T = unknown> {
	frames: DebugStackFrame<T>[]
	current: DebugStackFrame<T> | null
	depth: number
}

// ============================================================================
// Variable Inspection Types
// ============================================================================

/**
 * Variable type
 */
export interface Variable<T = unknown> {
	name: string
	value: string
	type?: string
	presentationHint?: VariablePresentationHint
	evaluateName?: string
	variablesReference: number
	namedVariables?: number
	indexedVariables?: number
	memoryReference?: string
	declarationLocation?: SourceLocation
	children?: Variable<T>[]
}

/**
 * Variable presentation hint
 */
export interface VariablePresentationHint {
	kind?: 'property' | 'method' | 'class' | 'data' | 'event' | 'baseClass' | 'innerClass' | 'interface' | 'mostDerivedClass' | 'virtual' | 'dataBreakpoint' | string
	attributes?: ('static' | 'constant' | 'readOnly' | 'rawString' | 'hasObjectId' | 'canHaveObjectId' | 'hasSideEffects' | string)[]
	visibility?: 'public' | 'private' | 'protected' | 'internal' | 'final' | string
}

/**
 | Variable value type
 */
export interface VariableValue<T = unknown> {
	value: T
	type: string
	description?: string
	children?: Variable<T>[]
}

/**
 * Variable type info
 */
export interface VariableTypeInfo {
	type: string
	fields?: TypeInfoField[]
	methods?: TypeInfoMethod[]
	baseTypes?: string[]
	implementedInterfaces?: string[]
}

/**
 * Type info field
 */
export interface TypeInfoField {
	name: string
	type: string
	offset?: number
	access: 'public' | 'private' | 'protected'
}

/**
 * Type info method
 */
export interface TypeInfoMethod {
	name: string
	returnType: string
	params: { name: string, type: string }[]
	access: 'public' | 'private' | 'protected'
}

/**
 | Debug scope
 */
export interface DebugScope<T = unknown> {
	name: string
	presentationHint?: 'arguments' | 'locals' | 'registers' | string
	variablesReference: number
	namedVariables?: number
	indexedVariables?: number
	expensive?: boolean
	source?: Source
	line?: number
	column?: number
	endLine?: number
	endColumn?: number
	variables?: Variable<T>[]
}

// ============================================================================
// Watch Types
// ============================================================================

/**
 * Watch expression type
 */
export interface WatchExpression<T = unknown> {
	id: string
	expression: string
	value: string | Variable<T>
	type?: string
	evaluateResult?: EvaluateResult<T>
}

/**
 | Evaluate result
 */
export interface EvaluateResult<T = unknown> {
	result: string
	type?: string
	presentationHint?: VariablePresentationHint
	variablesReference: number
	namedVariables?: number
	indexedVariables?: number
	memoryReference?: string
	value?: T
}

/**
 * Watch result
 */
export interface WatchResult<T = unknown> {
	expression: string
	value: T
	type: string
	error?: string
}

/**
 | Watch callback
 */
export type WatchCallback<T = unknown> = (result: WatchResult<T>) => void

/**
 * Watch options
 */
export interface WatchOptions {
	evaluateOnSave?: boolean
	autoRefresh?: boolean
	refreshInterval?: number
	depth?: number
}

// ============================================================================
// Memory Inspection Types
// ============================================================================

/**
 | Memory region
 */
export interface MemoryRegion<T = unknown> {
	address: MemoryAddress
	size: number
	data: T
	readable: boolean
	writable: boolean
	executable: boolean
	name?: string
}

/**
 * Memory address type
 */
export type MemoryAddress = number | string

/**
 * Memory value type
 */
export interface MemoryValue<T = unknown> {
	address: MemoryAddress
	value: T
	type?: string
	byteSize?: number
}

/**
 | Memory read result
 */
export interface MemoryReadResult {
	address: MemoryAddress
	offset: number
	data: ArrayBuffer
	unreadable?: boolean
}

/**
 | Memory write result
 */
export interface MemoryWriteResult {
	address: MemoryAddress
	offset: number
	bytesWritten: number
}

/**
 | Memory disassembly
 */
export interface MemoryDisassembly {
	address: MemoryAddress
	instruction: string
	symbol?: string
	bytes: number[]
}

// ============================================================================
// Debug Protocol Types
// ============================================================================

/**
 * Debug protocol type
 */
export type DebugProtocol<T = unknown>
	= | { type: 'request', command: string, arguments?: T }
		| { type: 'response', command: string, success: boolean, body?: T, message?: string }
		| { type: 'event', event: string, body?: T }

/**
 * Debug message type
 */
export type DebugMessage<T = unknown>
	= | DebugRequest<T>
		| DebugResponse<T>
		| DebugEvent<T>

/**
 * Debug request
 */
export interface DebugRequest<T = unknown> {
	seq: number
	type: 'request'
	command: string
	arguments?: T
}

/**
 * Debug response
 */
export interface DebugResponse<T = unknown> {
	seq: number
	type: 'response'
	request_seq: number
	command: string
	success: boolean
	body?: T
	message?: string
}

/**
 * Debug event
 */
export interface DebugEvent<T = unknown> {
	seq: number
	type: 'event'
	event: string
	body?: T
}

/**
 * Debug command
 */
export type DebugCommand
	= | 'initialize'
		| 'launch'
		| 'attach'
		| 'disconnect'
		| 'terminate'
		| 'restart'
		| 'setBreakpoints'
		| 'setFunctionBreakpoints'
		| 'setDataBreakpoints'
		| 'setExceptionBreakpoints'
		| 'continue'
		| 'next'
		| 'stepIn'
		| 'stepOut'
		| 'stepBack'
		| 'reverseContinue'
		| 'restartFrame'
		| 'goto'
		| 'pause'
		| 'stackTrace'
		| 'scopes'
		| 'variables'
		| 'setVariable'
		| 'source'
		| 'threads'
		| 'terminateThreads'
		| 'modules'
		| 'loadedSources'
		| 'evaluate'
		| 'setExpression'
		| 'stepInTargets'
		| 'gotoTargets'
		| 'completions'
		| 'exceptionInfo'
		| 'readMemory'
		| 'disassemble'
		| 'cancel'

/**
 * Debug event types
 */
export type DebugEventType
	= | 'initialized'
		| 'stopped'
		| 'continued'
		| 'exited'
		| 'terminated'
		| 'thread'
		| 'output'
		| 'breakpoint'
		| 'module'
		| 'loadedSource'
		| 'process'
		| 'capabilities'
		| 'progressStart'
		| 'progressUpdate'
		| 'progressEnd'
		| 'invalidated'
		| 'memory'

/**
 * Stopped event
 */
export interface StoppedEvent {
	reason: StoppedReason
	description?: string
	threadId?: number
	preserveFocusHint?: boolean
	text?: string
	allThreadsStopped?: boolean
	hitBreakpointIds?: number[]
}

/**
 * Stopped reason
 */
export type StoppedReason
	= | 'step'
		| 'breakpoint'
		| 'exception'
		| 'pause'
		| 'entry'
		| 'goto'
		| 'function breakpoint'
		| 'data breakpoint'
		| 'instruction breakpoint'

/**
 * Output event
 */
export interface OutputEvent {
	category?: 'console' | 'stdout' | 'stderr' | 'telemetry' | string
	output: string
	group?: 'start' | 'startCollapsed' | 'end'
	variablesReference?: number
	source?: Source
	line?: number
	column?: number
	data?: unknown
}

// ============================================================================
// Debug Thread
// ============================================================================

/**
 * Debug thread
 */
export interface DebugThread {
	id: number
	name: string
	status: ThreadStatus
	priority?: number
	frames?: DebugStackFrame[]
}

/**
 | Thread status
 */
export type ThreadStatus
	= | 'running'
		| 'stopped'
		| 'paused'
		| 'stepping'
		| 'terminated'

// ============================================================================
// REPL Types
// ============================================================================

/**
 * REPL type
 */
export interface REPL<T = unknown> {
	prompt: string
	history: string[]
	commands: Map<string, REPLCommand<T>>
	context: T
	running: boolean
}

/**
 * REPL command
 */
export interface REPLCommand<T = unknown> {
	name: string
	description?: string
	usage?: string
	aliases?: string[]
	execute: (args: string[], context: T) => REPLResult
}

/**
 * REPL result
 */
export type REPLResult<T = unknown>
	= | { type: 'success', value: T }
		| { type: 'error', message: string }
		| { type: 'continue' }
		| { type: 'exit' }

/**
 | REPL options
 */
export interface REPLOptions {
	prompt?: string
	historySize?: number
	useColors?: boolean
	allowExit?: boolean
}

/**
 | REPL context
 */
export interface REPLContext<T = unknown> {
	variables: Map<string, T>
	commands: Map<string, REPLCommand<T>>
	scope: DebugScope<T>
}

// ============================================================================
// Source Location
// ============================================================================

/**
 * Source location for debugging
 */
export interface SourceLocation {
	file?: string
	line: number
	column: number
	endLine?: number
	endColumn?: number
	source?: string
}

// ============================================================================
// Debug Capabilities
// ============================================================================

/**
 * Debug adapter capabilities
 */
export interface DebugCapabilities {
	supportsConfigurationDoneRequest?: boolean
	supportsFunctionBreakpoints?: boolean
	supportsConditionalBreakpoints?: boolean
	supportsHitConditionalBreakpoints?: boolean
	supportsEvaluateForHovers?: boolean
	supportsStepBack?: boolean
	supportsSetVariable?: boolean
	supportsRestartFrame?: boolean
	supportsGotoTargetsRequest?: boolean
	supportsStepInTargetsRequest?: boolean
	supportsCompletionsRequest?: boolean
	supportsModulesRequest?: boolean
	supportsExceptionOptions?: boolean
	supportsValueFormattingOptions?: boolean
	supportsExceptionInfoRequest?: boolean
	supportTerminateDebuggee?: boolean
	supportsDelayedStackTraceLoading?: boolean
	supportsLoadedSourcesRequest?: boolean
	supportsLogPoints?: boolean
	supportsTerminateThreadsRequest?: boolean
	supportsSetExpression?: boolean
	supportsTerminateRequest?: boolean
	supportsDataBreakpoints?: boolean
	supportsReadMemoryRequest?: boolean
	supportsDisassembleRequest?: boolean
	supportsCancelRequest?: boolean
	supportsBreakpointLocationsRequest?: boolean
}
