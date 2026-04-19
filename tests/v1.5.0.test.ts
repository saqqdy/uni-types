import type {
	// v1.5.0 - Authorization & Permissions
	Permission,
	PermissionSet,
	PermissionGrant,
	PermissionDeny,
	PermissionCondition,
	ConditionOperator,
	PermissionCheckResult,
	Role,
	RoleSet,
	RolePermission,
	RoleHierarchy,
	Policy,
	PolicyRule,
	PolicyEffect,
	PolicyCondition,
	PolicyContext,
	PolicyResult,
	AccessControl,
	ACL,
	ACLEntry,
	Resource,
	Action,
	RBAC,
	RBACConfig,
	ABAC,
	Attribute,
	AttributeValue,
	ABACConfig,
	AuthorizationProvider,
	AuthorizationOptions,
	// v1.5.0 - Caching Strategies
	Cache,
	CacheEntry,
	CacheKey,
	CacheKeyBuilder,
	CacheValue,
	CacheOptions,
	CacheStats,
	HitRate,
	MissRate,
	CacheStrategy,
	LRUCache,
	LFUCache,
	TTLCache,
	FIFOCache,
	ARCCache,
	CacheInvalidation,
	InvalidationRule,
	InvalidationStrategy,
	InvalidationEvent,
	DistributedCache,
	CacheCluster,
	CacheNode,
	ConsistentHash,
	CacheDecoratorOptions,
	CacheAside,
	ReadThroughCache,
	WriteThroughCache,
	WriteBehindCache,
	CacheSerializer,
	CacheCompressionOptions,
	// v1.5.0 - Configuration Management
	Config,
	ConfigField,
	ConfigFieldType,
	ConfigFileFormat,
	ConfigLoader,
	ConfigLoaderOptions,
	ConfigPriority,
	ConfigSchema,
	ConfigValidationResult,
	ConfigValidator,
	ConfigValue,
	ConfigError,
	ConfigWarning,
	EnvConfig,
	EnvMapping,
	EnvVar,
	ParseEnvResult,
	FeatureFlag,
	FeatureFlagConfig,
	FeatureFlags,
	FeatureFlagVariant,
	FeatureTargeting,
	TargetingOperator,
	RemoteConfigProvider,
	Secret,
	SecretConfig,
	SecretOptions,
	SecretProvider,
	// v1.5.0 - Event-Driven Architecture
	BaseEvent,
	EventTimestamp,
	EventVersion,
	EventBus,
	EventBusConfig,
	EventBusHandler,
	EventBusMiddleware,
	EventStream,
	AggregateEvents,
	PublishOptions,
	Command,
	CommandBus,
	CommandHandler,
	CommandResult,
	Query,
	QueryBus,
	QueryHandler,
	QueryResult,
	Saga,
	SagaStep,
	SagaResult,
	SagaStatus,
	SagaCompensation,
	MessageQueue,
	QueueProducer,
	QueueConsumer,
	QueueMessage,
	DeadLetterQueue,
	EventStore,
	// v1.5.0 - GraphQL Integration
	GraphQLSchema,
	GraphQLType,
	GraphQLScalar,
	GraphQLEnum,
	GraphQLInput,
	GraphQLInterface,
	GraphQLUnion,
	GraphQLObject,
	GraphQLField,
	GraphQLArgument,
	GraphQLResolveInfo,
	GraphQLContext,
	GraphQLResolver,
	GraphQLSubscription,
	GraphQLMutation,
	GraphQLQuery,
	GraphQLDirective,
	GraphQLResult,
	GraphQLError,
	GraphQLExecutionResult,
	GraphQLVariables,
	GraphQLOperation,
	GraphQLFragment,
	// v1.5.0 - Logging & Observability
	Logger,
	LogLevel,
	LogEntry,
	LogContext,
	LoggerConfig,
	LogTransport,
	Metric,
	MetricType,
	Counter,
	Gauge,
	Histogram,
	Summary,
	MetricsRegistry,
	Span,
	SpanKind,
	SpanStatus,
	SpanEvent,
	SpanLink,
	SpanOptions,
	Trace,
	TraceStatus,
	TraceContext,
	Tracer,
	Monitor,
	MonitorStatus,
	MonitorResult,
	Alert,
	AlertSeverity,
	AlertStatus,
	AlertRule,
	AlertConfig,
	AlertReceiver,
	AlertRoute,
	InhibitRule,
	HealthIndicator,
	LoggingHealthCheckResult as HealthCheckResult,
	LivenessCheck,
	ReadinessCheck,
	// v1.5.0 - Microservices Architecture
	Microservice,
	ServiceConfig,
	ServiceRegistry,
	ServiceInstance,
	InstanceStatus,
	ServiceDiscovery,
	ServiceClient,
	ServiceRequest,
	ServiceResponse,
	ServiceError,
	HealthCheck,
	HealthReport,
	ServiceHealthStatus as HealthStatus,
	CircuitBreaker,
	CircuitBreakerConfig,
	CircuitBreakerState,
	CircuitBreakerStats,
	RateLimit,
	ServiceRetryPolicy,
	LoadBalancer,
	LoadBalancerStrategy,
	APIGateway,
	GatewayConfig,
	GatewayRoute,
	GatewayMiddleware,
	CORSConfig,
	AuthConfig,
	// v1.5.0 - Validation Rules
	ValidationRule,
	Validator,
	ValidatorResult,
	ValidationError,
	ValidationOptions,
	ValidationContext,
	CustomValidator,
	OrValidator,
	NotValidator,
	StringFieldValidator,
	NumberFieldValidator,
	BooleanFieldValidator,
	DateFieldValidator,
	ArrayFieldValidator,
	ObjectFieldValidator,
	SchemaBuilder,
	MinLength,
	MaxLength,
	MinValue,
	MaxValue,
	Pattern,
	EmailConstraint,
	URLConstraint,
	UUIDConstraint,
	Sanitizer,
	SanitizationRule,
	SanitizeResult,
	StringSanitizer,
	NumberSanitizer,
	// v1.5.0 - WebSocket & Real-Time
	WebSocketConfig,
	WebSocketOptions,
	WebSocketState,
	WebSocketMessage,
	WebSocketEvent,
	WebSocketHandler,
	WebSocketEventHandler as EventHandler,
	EventEmitter,
	EventMap,
	EventListenerOptions,
	EventPayload,
	TypedEventTarget,
	PubSub,
	Publisher,
	Subscriber,
	SubscriptionOptions,
	RealTimeChannel,
	RealTimeClient,
	RealTimeMessage,
	RealTimeSubscription,
	Stream,
	StreamReader,
	StreamWriter,
	StreamChunk,
	ReadableStreamLike,
	WritableStreamLike,
	TransformStreamLike,
	// v1.5.0 - Workflow Engine
	Workflow,
	WorkflowDefinition,
	WorkflowInstance,
	WorkflowStatus,
	WorkflowStep,
	StepType,
	StepResult,
	WorkflowStepStatus as StepStatus,
	WorkflowTransition,
	TransitionCondition,
	TransitionAction,
	WorkflowTimeout,
	WorkflowExecution,
	ExecutionStatus,
	ExecutionStep,
	ExecutionContext,
	ExecutionResult,
	WorkflowHistory,
	HistoryEntry,
	HistoryEvent,
	HistoryEventType,
	WorkflowError,
	WorkflowErrorHandler,
	ErrorHandlerResult,
	ErrorHandlingStrategy,
	WorkflowRetryPolicy,
	BPMNProcess,
	BPMNProcessType,
	BPMNTask,
	BPMNTaskType,
	BPMNGateway,
	BPMNGatewayType,
	BPMNGatewayCondition,
	BPMNEvent,
	BPMNEventType,
	BPMNEventTrigger,
	WorkflowEngine,
	WorkflowEngineConfig,
	WorkflowPersistence,
	WorkflowExecutor,
} from '../src/index'
import { describe, expectTypeOf, it } from 'vitest'

describe('v1.5.0 - Authorization & Permission Types', () => {
	describe('Permission', () => {
		it('should have name property', () => {
			type Actual = Permission<'read'>
			expectTypeOf<Actual>().toHaveProperty('name')
		})

		it('should allow optional description', () => {
			type Actual = Permission<'read'>
			expectTypeOf<Actual>().toHaveProperty('description')
		})
	})

	describe('PermissionSet', () => {
		it('should accept Set', () => {
			type Actual = PermissionSet<'read' | 'write'>
			expectTypeOf<Set<'read' | 'write'>>().toMatchTypeOf<Actual>()
		})

		it('should accept array', () => {
			type Actual = PermissionSet<'read'>
			expectTypeOf<'read'[]>().toMatchTypeOf<Actual>()
		})
	})

	describe('PermissionGrant', () => {
		it('should have required properties', () => {
			type Actual = PermissionGrant<'read'>
			expectTypeOf<Actual>().toHaveProperty('permission')
			expectTypeOf<Actual>().toHaveProperty('granted')
			expectTypeOf<Actual>().toHaveProperty('grantedBy')
		})
	})

	describe('PermissionDeny', () => {
		it('should have granted as false', () => {
			type Actual = PermissionDeny<'read'>
			expectTypeOf<Actual>().toHaveProperty('granted')
		})
	})

	describe('ConditionOperator', () => {
		it('should include eq', () => {
			type Actual = ConditionOperator
			expectTypeOf<'eq'>().toMatchTypeOf<Actual>()
		})

		it('should include in', () => {
			type Actual = ConditionOperator
			expectTypeOf<'in'>().toMatchTypeOf<Actual>()
		})

		it('should include contains', () => {
			type Actual = ConditionOperator
			expectTypeOf<'contains'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Role', () => {
		it('should have name and permissions', () => {
			type Actual = Role<'admin'>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('permissions')
		})
	})

	describe('PolicyEffect', () => {
		it('should be allow or deny', () => {
			type Actual = PolicyEffect
			expectTypeOf<'allow' | 'deny'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Action', () => {
		it('should include create', () => {
			type Actual = Action
			expectTypeOf<'create'>().toMatchTypeOf<Actual>()
		})

		it('should include read', () => {
			type Actual = Action
			expectTypeOf<'read'>().toMatchTypeOf<Actual>()
		})

		it('should include update', () => {
			type Actual = Action
			expectTypeOf<'update'>().toMatchTypeOf<Actual>()
		})

		it('should include delete', () => {
			type Actual = Action
			expectTypeOf<'delete'>().toMatchTypeOf<Actual>()
		})
	})

	describe('RBAC', () => {
		it('should have roles map', () => {
			type Actual = RBAC<'admin', 'read'>
			expectTypeOf<Actual>().toHaveProperty('roles')
		})

		it('should have checkPermission method', () => {
			type Actual = RBAC<'admin', 'read'>
			expectTypeOf<Actual>().toHaveProperty('checkPermission')
		})
	})

	describe('ABAC', () => {
		it('should have policies', () => {
			type Actual = ABAC
			expectTypeOf<Actual>().toHaveProperty('policies')
		})

		it('should have evaluate method', () => {
			type Actual = ABAC
			expectTypeOf<Actual>().toHaveProperty('evaluate')
		})
	})
})

describe('v1.5.0 - Caching Strategy Types', () => {
	describe('Cache', () => {
		it('should have get method', () => {
			type Actual = Cache<string>
			expectTypeOf<Actual>().toHaveProperty('get')
		})

		it('should have set method', () => {
			type Actual = Cache<string>
			expectTypeOf<Actual>().toHaveProperty('set')
		})

		it('should have delete method', () => {
			type Actual = Cache<string>
			expectTypeOf<Actual>().toHaveProperty('delete')
		})
	})

	describe('CacheEntry', () => {
		it('should have key and value', () => {
			type Actual = CacheEntry<string>
			expectTypeOf<Actual>().toHaveProperty('key')
			expectTypeOf<Actual>().toHaveProperty('value')
		})
	})

	describe('CacheOptions', () => {
		it('should have optional ttl', () => {
			type Actual = CacheOptions
			expectTypeOf<Actual>().toHaveProperty('ttl')
		})

		it('should have optional tags', () => {
			type Actual = CacheOptions
			expectTypeOf<Actual>().toHaveProperty('tags')
		})
	})

	describe('CacheStats', () => {
		it('should have hits and misses', () => {
			type Actual = CacheStats
			expectTypeOf<Actual>().toHaveProperty('hits')
			expectTypeOf<Actual>().toHaveProperty('misses')
		})
	})

	describe('CacheStrategy', () => {
		it('should include lru', () => {
			type Actual = CacheStrategy
			expectTypeOf<'lru'>().toMatchTypeOf<Actual>()
		})

		it('should include lfu', () => {
			type Actual = CacheStrategy
			expectTypeOf<'lfu'>().toMatchTypeOf<Actual>()
		})

		it('should include ttl', () => {
			type Actual = CacheStrategy
			expectTypeOf<'ttl'>().toMatchTypeOf<Actual>()
		})
	})

	describe('LRUCache', () => {
		it('should extend Cache', () => {
			type Actual = LRUCache<string>
			expectTypeOf<Actual>().toHaveProperty('get')
			expectTypeOf<Actual>().toHaveProperty('maxSize')
		})
	})

	describe('InvalidationStrategy', () => {
		it('should include time-based', () => {
			type Actual = InvalidationStrategy
			expectTypeOf<'time-based'>().toMatchTypeOf<Actual>()
		})

		it('should include event-based', () => {
			type Actual = InvalidationStrategy
			expectTypeOf<'event-based'>().toMatchTypeOf<Actual>()
		})
	})

	describe('CacheNode', () => {
		it('should have id, host, port', () => {
			type Actual = CacheNode
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('host')
			expectTypeOf<Actual>().toHaveProperty('port')
		})
	})
})

describe('v1.5.0 - Configuration Management Types', () => {
	describe('Config', () => {
		it('should be a record type', () => {
			type Actual = Config<string>
			expectTypeOf<Actual>().toMatchTypeOf<Record<string, string>>()
		})
	})

	describe('ConfigField', () => {
		it('should have type property', () => {
			type Actual = ConfigField<string>
			expectTypeOf<Actual>().toHaveProperty('type')
		})

		it('should have optional required', () => {
			type Actual = ConfigField<string>
			expectTypeOf<Actual>().toHaveProperty('required')
		})
	})

	describe('ConfigFieldType', () => {
		it('should include string', () => {
			type Actual = ConfigFieldType
			expectTypeOf<'string'>().toMatchTypeOf<Actual>()
		})

		it('should include number', () => {
			type Actual = ConfigFieldType
			expectTypeOf<'number'>().toMatchTypeOf<Actual>()
		})

		it('should include boolean', () => {
			type Actual = ConfigFieldType
			expectTypeOf<'boolean'>().toMatchTypeOf<Actual>()
		})
	})

	describe('FeatureFlag', () => {
		it('should have name and enabled', () => {
			type Actual = FeatureFlag
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('enabled')
		})
	})

	describe('Secret', () => {
		it('should have __secret marker', () => {
			type Actual = Secret
			expectTypeOf<Actual>().toHaveProperty('__secret')
		})

		it('should have value', () => {
			type Actual = Secret
			expectTypeOf<Actual>().toHaveProperty('value')
		})
	})

	describe('TargetingOperator', () => {
		it('should include eq', () => {
			type Actual = TargetingOperator
			expectTypeOf<'eq'>().toMatchTypeOf<Actual>()
		})

		it('should include in', () => {
			type Actual = TargetingOperator
			expectTypeOf<'in'>().toMatchTypeOf<Actual>()
		})
	})
})

describe('v1.5.0 - Event-Driven Architecture Types', () => {
	describe('BaseEvent', () => {
		it('should have type and payload', () => {
			type Actual = BaseEvent<'user.created', { id: string }>
			expectTypeOf<Actual>().toHaveProperty('type')
			expectTypeOf<Actual>().toHaveProperty('payload')
			expectTypeOf<Actual>().toHaveProperty('timestamp')
		})
	})

	describe('EventBus', () => {
		it('should have publish method', () => {
			type Actual = EventBus<{ 'user.created': { id: string } }>
			expectTypeOf<Actual>().toHaveProperty('publish')
		})

		it('should have subscribe method', () => {
			type Actual = EventBus<{ 'user.created': { id: string } }>
			expectTypeOf<Actual>().toHaveProperty('subscribe')
		})
	})

	describe('Command', () => {
		it('should have type and payload', () => {
			type Actual = Command<'createUser', { name: string }>
			expectTypeOf<Actual>().toHaveProperty('type')
			expectTypeOf<Actual>().toHaveProperty('payload')
			expectTypeOf<Actual>().toHaveProperty('commandId')
		})
	})

	describe('Query', () => {
		it('should have type and params', () => {
			type Actual = Query<'getUser', { id: string }>
			expectTypeOf<Actual>().toHaveProperty('type')
			expectTypeOf<Actual>().toHaveProperty('params')
			expectTypeOf<Actual>().toHaveProperty('queryId')
		})
	})

	describe('Saga', () => {
		it('should have steps and status', () => {
			type Actual = Saga
			expectTypeOf<Actual>().toHaveProperty('sagaId')
			expectTypeOf<Actual>().toHaveProperty('steps')
			expectTypeOf<Actual>().toHaveProperty('status')
		})
	})

	describe('SagaStatus', () => {
		it('should include pending', () => {
			type Actual = SagaStatus
			expectTypeOf<'pending'>().toMatchTypeOf<Actual>()
		})

		it('should include completed', () => {
			type Actual = SagaStatus
			expectTypeOf<'completed'>().toMatchTypeOf<Actual>()
		})

		it('should include compensating', () => {
			type Actual = SagaStatus
			expectTypeOf<'compensating'>().toMatchTypeOf<Actual>()
		})
	})

	describe('MessageQueue', () => {
		it('should have publish and consume', () => {
			type Actual = MessageQueue<string>
			expectTypeOf<Actual>().toHaveProperty('publish')
			expectTypeOf<Actual>().toHaveProperty('consume')
		})
	})

	describe('QueueMessage', () => {
		it('should have id and payload', () => {
			type Actual = QueueMessage<string>
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('payload')
		})
	})
})

describe('v1.5.0 - GraphQL Integration Types', () => {
	describe('GraphQLScalar', () => {
		it('should include String', () => {
			type Actual = GraphQLScalar
			expectTypeOf<'String'>().toMatchTypeOf<Actual>()
		})

		it('should include Int', () => {
			type Actual = GraphQLScalar
			expectTypeOf<'Int'>().toMatchTypeOf<Actual>()
		})

		it('should include Boolean', () => {
			type Actual = GraphQLScalar
			expectTypeOf<'Boolean'>().toMatchTypeOf<Actual>()
		})

		it('should include ID', () => {
			type Actual = GraphQLScalar
			expectTypeOf<'ID'>().toMatchTypeOf<Actual>()
		})
	})

	describe('GraphQLQuery', () => {
		it('should have variables and return', () => {
			type Actual = GraphQLQuery<{ id: string }, { id: string }>
			expectTypeOf<Actual>().toHaveProperty('variables')
			expectTypeOf<Actual>().toHaveProperty('return')
		})
	})

	describe('GraphQLMutation', () => {
		it('should have variables and return', () => {
			type Actual = GraphQLMutation<{ name: string }, { id: string }>
			expectTypeOf<Actual>().toHaveProperty('variables')
			expectTypeOf<Actual>().toHaveProperty('return')
		})
	})

	describe('GraphQLSubscription', () => {
		it('should have variables and return', () => {
			type Actual = GraphQLSubscription<{ id: string }, { status: string }>
			expectTypeOf<Actual>().toHaveProperty('variables')
			expectTypeOf<Actual>().toHaveProperty('return')
		})
	})

	describe('GraphQLResolver', () => {
		it('should be a function type', () => {
			type Actual = GraphQLResolver<string>
			expectTypeOf<Actual>().toBeFunction()
		})
	})
})

describe('v1.5.0 - Logging & Observability Types', () => {
	describe('LogLevel', () => {
		it('should include trace', () => {
			type Actual = LogLevel
			expectTypeOf<'trace'>().toMatchTypeOf<Actual>()
		})

		it('should include debug', () => {
			type Actual = LogLevel
			expectTypeOf<'debug'>().toMatchTypeOf<Actual>()
		})

		it('should include info', () => {
			type Actual = LogLevel
			expectTypeOf<'info'>().toMatchTypeOf<Actual>()
		})

		it('should include warn', () => {
			type Actual = LogLevel
			expectTypeOf<'warn'>().toMatchTypeOf<Actual>()
		})

		it('should include error', () => {
			type Actual = LogLevel
			expectTypeOf<'error'>().toMatchTypeOf<Actual>()
		})

		it('should include fatal', () => {
			type Actual = LogLevel
			expectTypeOf<'fatal'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Logger', () => {
		it('should have log methods', () => {
			type Actual = Logger
			expectTypeOf<Actual>().toHaveProperty('info')
			expectTypeOf<Actual>().toHaveProperty('warn')
			expectTypeOf<Actual>().toHaveProperty('error')
		})
	})

	describe('MetricType', () => {
		it('should include counter', () => {
			type Actual = MetricType
			expectTypeOf<'counter'>().toMatchTypeOf<Actual>()
		})

		it('should include gauge', () => {
			type Actual = MetricType
			expectTypeOf<'gauge'>().toMatchTypeOf<Actual>()
		})

		it('should include histogram', () => {
			type Actual = MetricType
			expectTypeOf<'histogram'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Span', () => {
		it('should have traceId and spanId', () => {
			type Actual = Span
			expectTypeOf<Actual>().toHaveProperty('traceId')
			expectTypeOf<Actual>().toHaveProperty('spanId')
		})
	})

	describe('SpanKind', () => {
		it('should include client', () => {
			type Actual = SpanKind
			expectTypeOf<'client'>().toMatchTypeOf<Actual>()
		})

		it('should include server', () => {
			type Actual = SpanKind
			expectTypeOf<'server'>().toMatchTypeOf<Actual>()
		})
	})

	describe('AlertSeverity', () => {
		it('should include info', () => {
			type Actual = AlertSeverity
			expectTypeOf<'info'>().toMatchTypeOf<Actual>()
		})

		it('should include warning', () => {
			type Actual = AlertSeverity
			expectTypeOf<'warning'>().toMatchTypeOf<Actual>()
		})

		it('should include critical', () => {
			type Actual = AlertSeverity
			expectTypeOf<'critical'>().toMatchTypeOf<Actual>()
		})
	})

	describe('AlertStatus', () => {
		it('should include firing', () => {
			type Actual = AlertStatus
			expectTypeOf<'firing'>().toMatchTypeOf<Actual>()
		})

		it('should include resolved', () => {
			type Actual = AlertStatus
			expectTypeOf<'resolved'>().toMatchTypeOf<Actual>()
		})
	})

	describe('HealthIndicator', () => {
		it('should have name and check', () => {
			type Actual = HealthIndicator
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('check')
		})
	})
})

describe('v1.5.0 - Microservices Architecture Types', () => {
	describe('Microservice', () => {
		it('should have name and version', () => {
			type Actual = Microservice
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('version')
		})

		it('should have start and stop methods', () => {
			type Actual = Microservice
			expectTypeOf<Actual>().toHaveProperty('start')
			expectTypeOf<Actual>().toHaveProperty('stop')
		})
	})

	describe('ServiceInstance', () => {
		it('should have id, name, host, port', () => {
			type Actual = ServiceInstance
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('host')
			expectTypeOf<Actual>().toHaveProperty('port')
		})
	})

	describe('InstanceStatus', () => {
		it('should include healthy', () => {
			type Actual = InstanceStatus
			expectTypeOf<'healthy'>().toMatchTypeOf<Actual>()
		})

		it('should include unhealthy', () => {
			type Actual = InstanceStatus
			expectTypeOf<'unhealthy'>().toMatchTypeOf<Actual>()
		})
	})

	describe('CircuitBreakerState', () => {
		it('should include closed', () => {
			type Actual = CircuitBreakerState
			expectTypeOf<'closed'>().toMatchTypeOf<Actual>()
		})

		it('should include open', () => {
			type Actual = CircuitBreakerState
			expectTypeOf<'open'>().toMatchTypeOf<Actual>()
		})

		it('should include half-open', () => {
			type Actual = CircuitBreakerState
			expectTypeOf<'half-open'>().toMatchTypeOf<Actual>()
		})
	})

	describe('LoadBalancerStrategy', () => {
		it('should include round-robin', () => {
			type Actual = LoadBalancerStrategy
			expectTypeOf<'round-robin'>().toMatchTypeOf<Actual>()
		})

		it('should include random', () => {
			type Actual = LoadBalancerStrategy
			expectTypeOf<'random'>().toMatchTypeOf<Actual>()
		})

		it('should include weighted', () => {
			type Actual = LoadBalancerStrategy
			expectTypeOf<'weighted'>().toMatchTypeOf<Actual>()
		})
	})

	describe('GatewayRoute', () => {
		it('should have path and service', () => {
			type Actual = GatewayRoute
			expectTypeOf<Actual>().toHaveProperty('path')
			expectTypeOf<Actual>().toHaveProperty('service')
		})
	})

	describe('HealthReport', () => {
		it('should have status and checks', () => {
			type Actual = HealthReport
			expectTypeOf<Actual>().toHaveProperty('status')
			expectTypeOf<Actual>().toHaveProperty('checks')
		})
	})
})

describe('v1.5.0 - Validation Rules Types', () => {
	describe('Validator', () => {
		it('should have validate method', () => {
			type Actual = Validator<string>
			expectTypeOf<Actual>().toHaveProperty('validate')
		})

		it('should have optional method', () => {
			type Actual = Validator<string>
			expectTypeOf<Actual>().toHaveProperty('optional')
		})
	})

	describe('ValidationRule', () => {
		it('should have name and validate', () => {
			type Actual = ValidationRule<string>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('validate')
		})
	})

	describe('ValidationError', () => {
		it('should have path and message', () => {
			type Actual = ValidationError
			expectTypeOf<Actual>().toHaveProperty('path')
			expectTypeOf<Actual>().toHaveProperty('message')
		})
	})

	describe('SchemaBuilder', () => {
		it('should have string method', () => {
			type Actual = SchemaBuilder
			expectTypeOf<Actual>().toHaveProperty('string')
		})

		it('should have number method', () => {
			type Actual = SchemaBuilder
			expectTypeOf<Actual>().toHaveProperty('number')
		})

		it('should have object method', () => {
			type Actual = SchemaBuilder
			expectTypeOf<Actual>().toHaveProperty('object')
		})
	})

	describe('Sanitizer', () => {
		it('should have sanitize method', () => {
			type Actual = Sanitizer<string>
			expectTypeOf<Actual>().toHaveProperty('sanitize')
		})
	})

	describe('MinLength', () => {
		it('should be a number', () => {
			type Actual = MinLength<5>
			expectTypeOf<Actual>().toEqualTypeOf<5>()
		})
	})

	describe('MaxValue', () => {
		it('should be a number', () => {
			type Actual = MaxValue<100>
			expectTypeOf<Actual>().toEqualTypeOf<100>()
		})
	})
})

describe('v1.5.0 - WebSocket & Real-Time Types', () => {
	describe('WebSocketState', () => {
		it('should include connecting', () => {
			type Actual = WebSocketState
			expectTypeOf<'connecting'>().toMatchTypeOf<Actual>()
		})

		it('should include connected', () => {
			type Actual = WebSocketState
			expectTypeOf<'connected'>().toMatchTypeOf<Actual>()
		})

		it('should include disconnected', () => {
			type Actual = WebSocketState
			expectTypeOf<'disconnected'>().toMatchTypeOf<Actual>()
		})
	})

	describe('WebSocketMessage', () => {
		it('should have type and payload', () => {
			type Actual = WebSocketMessage<string>
			expectTypeOf<Actual>().toHaveProperty('type')
			expectTypeOf<Actual>().toHaveProperty('payload')
		})
	})

	describe('EventEmitter', () => {
		it('should have on, off, emit methods', () => {
			type Actual = EventEmitter<{ 'user.created': string }>
			expectTypeOf<Actual>().toHaveProperty('on')
			expectTypeOf<Actual>().toHaveProperty('off')
			expectTypeOf<Actual>().toHaveProperty('emit')
		})
	})

	describe('PubSub', () => {
		it('should have publish and subscribe', () => {
			type Actual = PubSub<string>
			expectTypeOf<Actual>().toHaveProperty('publish')
			expectTypeOf<Actual>().toHaveProperty('subscribe')
		})
	})

	describe('RealTimeChannel', () => {
		it('should have name and subscribe', () => {
			type Actual = RealTimeChannel<string>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('subscribe')
		})
	})

	describe('Stream', () => {
		it('should have asyncIterator symbol', () => {
			type Actual = Stream<string>
			expectTypeOf<Actual>().toHaveProperty(Symbol.asyncIterator)
		})
	})

	describe('StreamReader', () => {
		it('should have read method', () => {
			type Actual = StreamReader<string>
			expectTypeOf<Actual>().toHaveProperty('read')
		})
	})

	describe('StreamWriter', () => {
		it('should have write method', () => {
			type Actual = StreamWriter<string>
			expectTypeOf<Actual>().toHaveProperty('write')
		})
	})
})

describe('v1.5.0 - Workflow Engine Types', () => {
	describe('Workflow', () => {
		it('should have id and name', () => {
			type Actual = Workflow
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('definition')
		})
	})

	describe('WorkflowStatus', () => {
		it('should include pending', () => {
			type Actual = WorkflowStatus
			expectTypeOf<'pending'>().toMatchTypeOf<Actual>()
		})

		it('should include running', () => {
			type Actual = WorkflowStatus
			expectTypeOf<'running'>().toMatchTypeOf<Actual>()
		})

		it('should include completed', () => {
			type Actual = WorkflowStatus
			expectTypeOf<'completed'>().toMatchTypeOf<Actual>()
		})

		it('should include failed', () => {
			type Actual = WorkflowStatus
			expectTypeOf<'failed'>().toMatchTypeOf<Actual>()
		})
	})

	describe('WorkflowStep', () => {
		it('should have id and type', () => {
			type Actual = WorkflowStep
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('type')
		})
	})

	describe('StepType', () => {
		it('should include task', () => {
			type Actual = StepType
			expectTypeOf<'task'>().toMatchTypeOf<Actual>()
		})

		it('should include decision', () => {
			type Actual = StepType
			expectTypeOf<'decision'>().toMatchTypeOf<Actual>()
		})

		it('should include parallel', () => {
			type Actual = StepType
			expectTypeOf<'parallel'>().toMatchTypeOf<Actual>()
		})
	})

	describe('ExecutionStatus', () => {
		it('should include pending', () => {
			type Actual = ExecutionStatus
			expectTypeOf<'pending'>().toMatchTypeOf<Actual>()
		})

		it('should include completed', () => {
			type Actual = ExecutionStatus
			expectTypeOf<'completed'>().toMatchTypeOf<Actual>()
		})

		it('should include timeout', () => {
			type Actual = ExecutionStatus
			expectTypeOf<'timeout'>().toMatchTypeOf<Actual>()
		})
	})

	describe('HistoryEventType', () => {
		it('should include workflow_started', () => {
			type Actual = HistoryEventType
			expectTypeOf<'workflow_started'>().toMatchTypeOf<Actual>()
		})

		it('should include step_completed', () => {
			type Actual = HistoryEventType
			expectTypeOf<'step_completed'>().toMatchTypeOf<Actual>()
		})
	})

	describe('BPMNTaskType', () => {
		it('should include user', () => {
			type Actual = BPMNTaskType
			expectTypeOf<'user'>().toMatchTypeOf<Actual>()
		})

		it('should include service', () => {
			type Actual = BPMNTaskType
			expectTypeOf<'service'>().toMatchTypeOf<Actual>()
		})
	})

	describe('BPMNGatewayType', () => {
		it('should include exclusive', () => {
			type Actual = BPMNGatewayType
			expectTypeOf<'exclusive'>().toMatchTypeOf<Actual>()
		})

		it('should include parallel', () => {
			type Actual = BPMNGatewayType
			expectTypeOf<'parallel'>().toMatchTypeOf<Actual>()
		})
	})

	describe('ErrorHandlingStrategy', () => {
		it('should include fail-fast', () => {
			type Actual = ErrorHandlingStrategy
			expectTypeOf<'fail-fast'>().toMatchTypeOf<Actual>()
		})

		it('should include compensate', () => {
			type Actual = ErrorHandlingStrategy
			expectTypeOf<'compensate'>().toMatchTypeOf<Actual>()
		})
	})

	describe('WorkflowEngine', () => {
		it('should have start and cancel methods', () => {
			type Actual = WorkflowEngine
			expectTypeOf<Actual>().toHaveProperty('start')
			expectTypeOf<Actual>().toHaveProperty('cancel')
		})
	})
})
