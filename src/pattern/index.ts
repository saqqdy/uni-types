/**
 * Advanced type patterns for type-level programming
 */

/**
 * Type-level pattern matching
 */
export type Match<T, Patterns extends Record<string, any>> = T extends keyof Patterns
	? Patterns[T]
	: Patterns extends { _: infer Default }
		? Default
		: never

/**
 * Case helper for pattern matching
 */
export type Case<P extends PropertyKey> = P

/**
 * Default case for pattern matching
 */
export type Default<R> = R

/**
 * Type-level filter - filter tuple elements by predicate
 */
export type TypeFilter<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? [First, ...TypeFilter<Rest, P>]
		: TypeFilter<Rest, P>
	: []

/**
 * Type-level find - find first element matching predicate
 */
export type TypeFind<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? First
		: TypeFind<Rest, P>
	: never

/**
 * Type-level includes - check if type exists in tuple
 */
export type TypeIncludes<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? true
		: TypeIncludes<Rest, P>
	: false

/**
 * Type-level every - check if all elements match predicate
 */
export type TypeEvery<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? TypeEvery<Rest, P>
		: false
	: true

/**
 * Type-level some - check if any element matches predicate
 */
export type TypeSome<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? true
		: TypeSome<Rest, P>
	: false

/**
 * Type-level iteration - apply transformation N times
 */
export type Iterate<T, F extends (x: T) => any, N extends number, Count extends 0[] = []> = Count['length'] extends N
	? T
	: Iterate<F extends (x: T) => infer R ? R : never, F, N, [...Count, 0]>

/**
 * Type-level reduce - accumulate values from tuple
 */
export type Reduce<
	T extends unknown[],
	F,
	Initial,
	Acc = Initial,
> = T extends [infer First, ...infer Rest]
	? Reduce<Rest, F, Initial, F extends (acc: Acc, val: First) => infer R ? R : never>
	: Acc

/**
 * Type-level for-each - apply function to each element
 */
export type ForEach<T extends unknown[], F> = T extends [infer First, ...infer Rest]
	? [F extends (x: First) => infer R ? R : never, ...ForEach<Rest, F>]
	: []

// ============================================================================
// Layered Architecture Types
// ============================================================================

/**
 * Layer type - represents a single layer in layered architecture
 */
export interface Layer<T extends Record<string, unknown> = Record<string, unknown>> {
	name: string
	components: T
	dependencies: string[]
}

/**
 * Presentation layer type
 */
export interface PresentationLayer<
	Components extends Record<string, unknown> = Record<string, unknown>,
> extends Layer<Components> {
	type: 'presentation'
	routes?: unknown[]
	views?: unknown[]
	controllers?: unknown[]
}

/**
 * Business layer type
 */
export interface BusinessLayer<
	Components extends Record<string, unknown> = Record<string, unknown>,
> extends Layer<Components> {
	type: 'business'
	services?: unknown[]
	useCases?: unknown[]
	domainModels?: unknown[]
}

/**
 * Data access layer type
 */
export interface DataAccessLayer<
	Components extends Record<string, unknown> = Record<string, unknown>,
> extends Layer<Components> {
	type: 'data-access'
	repositories?: unknown[]
	dataSources?: unknown[]
	mappers?: unknown[]
}

/**
 * Layered architecture configuration
 */
export interface LayeredArchitectureConfig<
	Presentation extends PresentationLayer = PresentationLayer,
	Business extends BusinessLayer = BusinessLayer,
	DataAccess extends DataAccessLayer = DataAccessLayer,
> {
	presentation: Presentation
	business: Business
	dataAccess: DataAccess
	crossCutting?: Layer[]
}

// ============================================================================
// Clean Architecture Types
// ============================================================================

/**
 * Entity type - core business entity
 */
export interface Entity<T extends Record<string, unknown> = Record<string, unknown>> {
	id: string | number
	props: T
	createdAt?: Date
	updatedAt?: Date
}

/**
 * Use case type - application business rule
 */
export interface UseCase<
	Input extends Record<string, unknown> = Record<string, unknown>,
	Output = unknown,
> {
	execute: (input: Input) => Promise<Output> | Output
}

/**
 * Gateway type - interface to external systems
 */
export interface Gateway<T = unknown> {
	findById: (id: string | number) => Promise<T | null>
	findAll: () => Promise<T[]>
	save: (entity: T) => Promise<T>
	delete: (id: string | number) => Promise<void>
}

/**
 * Presenter type - formats output for delivery
 */
export interface Presenter<Input = unknown, Output = unknown> {
	present: (data: Input) => Output
}

/**
 * Clean architecture layers
 */
export interface CleanArchitectureLayers {
	entities: Entity[]
	useCases: UseCase[]
	interfaces: Gateway[]
	presenters: Presenter[]
}

// ============================================================================
// Hexagonal Architecture Types
// ============================================================================

/**
 * Port type - defines interface for external interactions
 */
export interface Port<
	Methods extends Record<string, (...args: unknown[]) => unknown> = Record<string, (...args: unknown[]) => unknown>,
> {
	type: 'inbound' | 'outbound'
	methods: Methods
}

/**
 * Inbound port (driving port) - receives requests
 */
export interface InboundPort<
	Input = unknown,
	Output = unknown,
> {
	type: 'inbound'
	execute: (input: Input) => Promise<Output>
}

/**
 * Outbound port (driven port) - sends requests to external systems
 */
export interface OutboundPort<
	Input = unknown,
	Output = unknown,
> {
	type: 'outbound'
	handle: (input: Input) => Promise<Output>
}

/**
 * Adapter type - implements a port
 */
export interface Adapter<
	PortType extends Port = Port,
> {
	port: PortType
	implementation: PortType['methods']
}

/**
 * Hexagon type - core domain with ports
 */
export interface Hexagon<
	Domain extends Record<string, unknown> = Record<string, unknown>,
	InboundPorts extends Record<string, InboundPort> = Record<string, InboundPort>,
	OutboundPorts extends Record<string, OutboundPort> = Record<string, OutboundPort>,
> {
	domain: Domain
	inboundPorts: InboundPorts
	outboundPorts: OutboundPorts
	adapters: Adapter[]
}

/**
 * Core type - contains business logic
 */
export interface Core<
	Domain extends Record<string, unknown> = Record<string, unknown>,
> {
	domain: Domain
	ports: Port[]
}

// ============================================================================
// Domain-Driven Design (DDD) Types
// ============================================================================

/**
 * Aggregate type - cluster of domain objects
 */
export interface Aggregate<
	T extends Record<string, unknown> = Record<string, unknown>,
	Entities extends unknown[] = unknown[],
> extends Entity<T> {
	root: T
	entities: Entities
}

/**
 * Value object type - immutable, no identity
 */
export interface ValueObject<T = unknown> {
	value: T
	equals: (other: ValueObject<T>) => boolean
}

/**
 * Domain event type
 */
export interface DomainEvent<
	Data extends Record<string, unknown> = Record<string, unknown>,
> {
	eventId: string
	eventType: string
	aggregateId: string | number
	timestamp: Date
	data: Data
	version: number
}

/**
 * Repository type - abstract data access
 */
export interface Repository<
	Entity extends Record<string, unknown> = Record<string, unknown>,
	Id = string | number,
> {
	findById: (id: Id) => Promise<Entity | null>
	findAll: () => Promise<Entity[]>
	findBy: (criteria: Partial<Entity>) => Promise<Entity[]>
	save: (entity: Entity) => Promise<Entity>
	delete: (id: Id) => Promise<void>
	exists: (id: Id) => Promise<boolean>
	count: () => Promise<number>
}

/**
 * Domain service type - operations not naturally entity methods
 */
export type DomainService<
	Input extends Record<string, unknown> = Record<string, unknown>,
	Output = unknown,
> = (input: Input) => Promise<Output> | Output

/**
 * Bounded context type
 */
export interface BoundedContext<
	Aggregates extends Record<string, Aggregate> = Record<string, Aggregate>,
	Repositories extends Record<string, Repository> = Record<string, Repository>,
	Services extends Record<string, DomainService> = Record<string, DomainService>,
	Events extends Record<string, DomainEvent> = Record<string, DomainEvent>,
> {
	name: string
	description?: string
	aggregates: Aggregates
	repositories: Repositories
	services: Services
	events: Events
}

/**
 * Context map type
 */
export interface ContextMap<
	Contexts extends Record<string, BoundedContext> = Record<string, BoundedContext>,
> {
	contexts: Contexts
	relationships: ContextRelationship[]
}

/**
 * Context boundary type
 */
export interface ContextBoundary {
	context: BoundedContext
	boundary: {
		incoming: string[]
		outgoing: string[]
	}
	sharedKernel?: string[]
	antiCorruptionLayer?: string[]
}

/**
 * Context relationship types
 */
export interface ContextRelationship {
	upstream: string
	downstream: string
	type: 'shared-kernel' | 'customer-supplier' | 'conformist' | 'anticorruption-layer' | 'separate-ways' | 'open-host-service' | 'published-language'
	description?: string
}

// ============================================================================
// CQRS Types
// ============================================================================

/**
 * Command type - represents intent to change state
 */
export interface Command<
	Type extends string = string,
	Payload extends Record<string, unknown> = Record<string, unknown>,
> {
	type: Type
	timestamp: Date
	payload: Payload
	correlationId: string
}

/**
 * Query type - request for data
 */
export interface Query<
	Type extends string = string,
	Params extends Record<string, unknown> = Record<string, unknown>,
> {
	type: Type
	params: Params
	correlationId?: string
}

/**
 * Command handler type
 */
export type CommandHandler<
	C extends Command = Command,
	Result = unknown,
> = (command: C) => Promise<Result>

/**
 * Query handler type
 */
export type QueryHandler<
	Q extends Query = Query,
	Result = unknown,
> = (query: Q) => Promise<Result>

/**
 * Command bus type
 */
export interface CommandBus {
	dispatch: <C extends Command>(command: C) => Promise<unknown>
	register: <C extends Command>(type: C['type'], handler: CommandHandler<C>) => void
}

/**
 * Query bus type
 */
export interface QueryBus {
	dispatch: <Q extends Query>(query: Q) => Promise<unknown>
	register: <Q extends Query>(type: Q['type'], handler: QueryHandler<Q>) => void
}

// ============================================================================
// Event Sourcing Types
// ============================================================================

/**
 * Event stream type
 */
export interface EventStream<
	Event extends DomainEvent = DomainEvent,
> {
	streamId: string
	version: number
	events: Event[]
}

/**
 * Event store type
 */
export interface EventStore<
	Event extends DomainEvent = DomainEvent,
> {
	append: (streamId: string, events: Event[], expectedVersion?: number) => Promise<void>
	getStream: (streamId: string, fromVersion?: number, toVersion?: number) => Promise<EventStream<Event>>
	getAllStreams: () => Promise<EventStream<Event>[]>
	subscribe: (streamId: string, subscriber: (event: Event) => void) => () => void
}

/**
 * Projection type
 */
export interface Projection<
	Event extends DomainEvent = DomainEvent,
	State extends Record<string, unknown> = Record<string, unknown>,
> {
	eventHandlers: Record<string, (state: State, event: Event) => State>
	initialState: State
}

/**
 * Saga type - orchestrates long-running transactions
 */
export interface Saga<
	Steps extends unknown[] = unknown[],
> {
	sagaId: string
	currentStep: number
	steps: Steps
	status: 'pending' | 'running' | 'completed' | 'failed' | 'compensating' | 'compensated'
	startTime: Date
	endTime?: Date
}

// ============================================================================
// Microkernel Architecture Types
// ============================================================================

/**
 * Core system type
 */
export interface CoreSystem<
	CoreFeatures extends Record<string, unknown> = Record<string, unknown>,
> {
	api: CoreFeatures
	version: string
}

/**
 * Plugin interface type
 */
export interface PluginInterface<
	Plugin extends Record<string, unknown> = Record<string, unknown>,
> {
	version: string
	name: string
	dependencies?: string[]
	api: Plugin
}

/**
 * Extension point type
 */
export interface ExtensionPoint<
	Extension extends Record<string, unknown> = Record<string, unknown>,
> {
	name: string
	description?: string
	extensions: Extension[]
}

// ============================================================================
// Space-Based Architecture Types
// ============================================================================

/**
 * Processing unit type - contains application logic and data subset
 */
export interface ProcessingUnit<
	Data extends Record<string, unknown> = Record<string, unknown>,
> {
	id: string
	data: Data
	processingGroup: string
}

/**
 * Virtualized middleware type
 */
export interface VirtualizedMiddleware<
	ProcessingUnits extends ProcessingUnit[] = ProcessingUnit[],
> {
	processingUnits: ProcessingUnits
	theadingRequired: boolean
	loadBalancingStrategy: 'round-robin' | 'weighted' | 'consistent-hash' | 'random'
}

/**
 * Data grid type
 */
export interface DataGrid<
	Data extends Record<string, unknown> = Record<string, unknown>,
> {
	name: string
	partitions: { id: string, data: Data }[]
	replicationFactor: number
	consistency: 'strong' | 'eventual' | 'causal'
}

// ============================================================================
// Architecture Constraints Types
// ============================================================================

/**
 * Architecture constraint type
 */
export interface ArchitectureConstraint {
	rule: string
	severity: 'error' | 'warning' | 'info'
	description?: string
}

/**
 * Dependency rule type
 */
export interface DependencyRule {
	from: string | RegExp | ((layer: string) => boolean)
	to: string | RegExp | ((layer: string) => boolean)
	allowed: boolean
}

/**
 * Architecture validation result
 */
export interface ArchitectureValidationResult {
	valid: boolean
	violations: ArchitectureViolation[]
	warnings: string[]
}

/**
 * Architecture violation type
 */
export interface ArchitectureViolation {
	rule: ArchitectureConstraint
	from: string
	to: string
	file?: string
	line?: number
}
