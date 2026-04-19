# Changelog

All notable changes to this project will be documented in this file.

## [1.6.0] - 2026-04-19

### Added

#### AI/ML Type Utilities
- `Tensor<Shape, DType>` - Tensor type with shape and data type
- `TensorShape` - Tensor shape type
- `TensorRank` - Tensor rank type (0-6)
- `TensorDType` - Tensor data types (float32, float64, int32, etc.)
- `Model<Input, Output>` - Model type
- `ModelConfig<T>` - Model configuration
- `ModelWeights<T>` - Model weights type
- `ModelParams` - Model parameters type
- `Layer<T>` - Layer type
- `LayerType` - Layer type enumeration (dense, conv2d, lstm, etc.)
- `DenseLayer`, `ConvLayer`, `PoolingLayer`, `ActivationLayer`, `NormalizationLayer`, `RecurrentLayer`, `AttentionLayer` - Specific layer types
- `ActivationFunction` - Activation function types (relu, sigmoid, tanh, etc.)
- `Optimizer` - Optimizer types (adam, sgd, rmsprop, etc.)
- `LossFunction` - Loss function types (mse, crossentropy, etc.)
- `MLMetric` - ML metric types (accuracy, precision, recall, etc.)
- `TrainingConfig<T>` - Training configuration
- `Dataset<T>` - Dataset type
- `DataLoader<T>` - Data loader type
- `Batch<T>` - Batch type
- `DataTransform<T>` - Data transform type
- `InferenceResult<T>` - Inference result type
- `Prediction<T>` - Prediction type
- `Probability`, `Confidence` - Probability and confidence types
- `BoundingBox`, `ClassificationResult`, `DetectionResult`, `SegmentationResult` - Result types
- `TransformerConfig`, `AttentionConfig`, `EmbeddingConfig`, `Tokenizer`, `TokenizerConfig` - NLP types

#### Functional Programming Patterns
- `Functor<T>` - Functor type
- `Monad<T>` - Monad type
- `Applicative<T>` - Applicative type
- `Maybe<T>`, `Some<T>`, `None` - Maybe monad types
- `Either<L, R>`, `Left<L>`, `Right<R>` - Either monad types
- `IO<T>` - IO monad type
- `Reader<R, T>` - Reader monad type
- `Writer<W, T>` - Writer monad type
- `State<S, T>` - State monad type
- `Task<T>` - Task type (async)
- `Result<T, E>`, `Ok<T>`, `Err<E>` - Result type
- `Compose`, `Pipe`, `Curry`, `Uncurry`, `Flip`, `Const`, `Identity` - Combinator types
- `Lens<S, A>`, `Getter`, `Setter`, `Prism`, `Iso`, `Traversal` - Lens types
- `Predicate<T>`, `Refinement<T, U>` - Predicate types
- `Semigroup<T>`, `Monoid<T>` - Algebraic types
- `Eq<T>`, `Ord<T>`, `Ordering` - Equality and ordering types

#### Type-Level Compiler
- `ASTNode<T>`, `ASTNodeType` - AST node types
- `ASTProgram`, `ASTExpression`, `ASTStatement`, `ASTDeclaration` - AST structure types
- `Identifier`, `Literal`, `BinaryExpression`, `UnaryExpression`, `CallExpression` - Expression types
- `Token<T>`, `TokenType`, `TokenStream` - Token types
- `Parser<T>`, `ParserResult<T>`, `ParseError`, `ParseTree<T>` - Parser types
- `CodeGenerator<T>`, `GeneratedCode`, `SourceMap` - Code generation types
- `Transformer<T>`, `TransformPipeline<T>`, `TransformResult<T>` - Transformer types
- `Formatter`, `FormatOptions`, `FormattedCode` - Formatter types
- `Scope`, `Binding`, `Reference` - Scope types
- `TraverseVisitor`, `TraverseOptions` - Traverse types
- `Printer`, `PrintOptions` - Printer types

#### Distributed Systems
- `Consensus<T>`, `ConsensusState`, `LeaderElection<T>`, `Vote<T>` - Consensus types
- `Replication<T>`, `Replica<T>`, `ReplicaSet<T>`, `ReplicationStrategy` - Replication types
- `Partition<T>`, `PartitionKey<T>`, `PartitionStrategy`, `Sharding<T>` - Partition types
- `ConsistencyLevel`, `ConsistencyModel<T>`, `VectorClock`, `LamportClock` - Consistency types
- `DistributedLock<T>`, `LockAcquireResult`, `Lease<T>` - Lock types
- `Coordinator<T>`, `Participant<T>`, `TwoPhaseCommit<T>`, `TransactionState` - Coordination types
- `FailureDetector<T>`, `Heartbeat<T>`, `NodeStatusType`, `Membership<T>` - Failure detection types
- `RaftConfig`, `AppendEntriesRequest`, `AppendEntriesResponse`, `VoteRequest`, `VoteResponse` - Raft types
- `GossipConfig`, `GossipMessage`, `GossipNodeState` - Gossip types

#### Security Types
- `Authentication<T>`, `AuthType`, `AuthStatus` - Authentication types
- `AuthProvider<T>`, `AuthToken`, `AuthResult<T>`, `AuthError` - Provider types
- `Credentials`, `BasicCredentials`, `APICredentials`, `OAuthCredentials`, `CertificateCredentials` - Credential types
- `Session<T>`, `SessionId`, `SessionData<T>`, `SessionConfig`, `SessionStore<T>` - Session types
- `Encryption<T>`, `EncryptionAlgorithm`, `EncryptedData` - Encryption types
- `Key<T>`, `KeyPair`, `KeyStatus`, `KeyUsage`, `KeyManagement` - Key types
- `Hash<T>`, `HashAlgorithm`, `Salt`, `HashedValue<T>` - Hash types
- `Signature<T>`, `SignatureAlgorithm`, `SigningKey<T>`, `VerificationKey<T>`, `SignedData<T>` - Signature types
- `CSRFToken`, `CSRFConfig`, `SanitizedInput`, `SafeHTML`, `SafeURL`, `ContentSecurityPolicy` - Protection types
- `OAuthToken`, `OAuthProviderType`, `OAuthConfig`, `OAuthProviderConfig` - OAuth types
- `JWT<T>`, `JWTHeader`, `JWTPayload<T>`, `JWTVerifyOptions`, `JWTSignOptions` - JWT types
- `RateLimitConfig`, `RateLimitStatus` - Rate limiting types

#### Internationalization (i18n)
- `Locale`, `LocaleCode`, `LocaleConfig`, `LocaleDetection` - Locale types
- `LanguageCode`, `CountryCode` - Language and country codes
- `Translation<T>`, `TranslationKey<T>`, `TranslationValue`, `TranslationMap<T>`, `TranslationOptions` - Translation types
- `PluralForm`, `PluralRule` - Plural types
- `MessageFormat`, `MessageParams`, `FormattedMessage`, `InterpolatedMessage`, `CompiledMessage` - Message types
- `DateFormat`, `TimeFormat`, `TimeZone`, `LocalizedDate`, `LocalizedTime`, `DateTimeFormatOptions` - Date/time types
- `NumberFormat`, `Currency`, `LocalizedNumber`, `LocalizedCurrency`, `NumberFormatOptions`, `CurrencyFormatOptions` - Number types
- `Direction`, `RTLConfig` - RTL types
- `RegionType`, `RegionConfig<T>` - Region types
- `NumberingSystem`, `CalendarType`, `CalendarConfig` - Calendar types
- `CollationType`, `CollationOptions` - Collation types
- `UnitType`, `UnitFormatOptions` - Unit types
- `DisplayNamesType`, `DisplayNamesOptions` - Display names types

#### Testing Framework Integration
- `TestSuite<T>`, `TestCase<T>`, `TestResultType`, `TestConfig<T>` - Test types
- `Assertion<T>`, `AssertionResult<T>`, `AssertionError<T>`, `ExpectType<T>`, `AssertionMatcher` - Assertion types
- `Mock<T>`, `MockConfig`, `MockResult`, `MockCall<T>`, `Spy<T>` - Mock types
- `Fixture<T>`, `FixtureConfig<T>`, `FixtureData<T>`, `FixtureContext<T>` - Fixture types
- `Coverage`, `CoverageReport<T>`, `CoverageThreshold`, `FileCoverage`, `CoverageRange`, `CoverageConfig` - Coverage types
- `Snapshot<T>`, `SnapshotResult`, `SnapshotMatch<T>`, `SnapshotConfig` - Snapshot types
- `Benchmark<T>`, `BenchmarkResult<T>`, `BenchmarkConfig`, `BenchmarkStatistics`, `PerformanceMetric` - Benchmark types
- `TestRunner`, `TestRunnerResult`, `SuiteResult`, `TestSummary` - Runner types
- `TestEnvironmentType`, `TestEnvironmentConfig` - Environment types
- `TestHook`, `TestHookFunction`, `TestHooksConfig` - Hook types
- `TestFilter` - Filter types

#### Plugin System Types
- `Plugin<T>`, `PluginConfig<T>`, `PluginContext<T>`, `PluginLifecycle` - Plugin types
- `PluginManager`, `PluginStore`, `StoredPlugin`, `PluginQuery` - Manager types
- `Hook<T>`, `HookConfig<T>`, `HookResult<T>`, `HookCallback<T>`, `HookContext<T>`, `HookExecutor<T>` - Hook types
- `Extension<T>`, `ExtensionHandler<T>`, `ExtensionPoint<T>`, `ExtensionConfig<T>`, `ExtensionSchema`, `ExtensionContext<T>`, `ExtensionRegistry<T>` - Extension types
- `Middleware<T>`, `MiddlewareConfig<T>`, `MiddlewarePipeline<T>`, `MiddlewareContext<T>`, `MiddlewareResult<T>` - Middleware types
- `Module<T>`, `ModuleConfig<T>`, `ModuleExport<T>`, `ModuleImport`, `ModuleLoader` - Module types
- `Registry<T>`, `RegistryEntry<T>`, `RegistryConfig<T>` - Registry types
- `PluginEventBus`, `PluginAPI<T>`, `PluginLogger` - API types

#### Type Inference Enhancements
- `Infer<T>`, `InferReturn<T>`, `InferArgs<T>`, `InferPromise<T>` - Inference helpers
- `InferArrayElement<T>`, `InferTupleElement<T>`, `InferObjectValue<T>`, `InferFunctionParam<T>` - Type extraction helpers
- `ExtractFunction<T>`, `ExtractClass<T>`, `ExtractConstructor<T>`, `ExtractMethod<T, K>` - Type extraction
- `ExtractProperty<T, K>`, `ExtractKeysByValue<T, V>`, `ExtractRequiredKeys<T>`, `ExtractOptionalKeys<T>`, `ExtractFunctionKeys<T>`, `ExtractNonFunctionKeys<T>` - Key extraction
- `Reconstruct<T>`, `ReconstructDeep<T>`, `ReconstructStrict<T>`, `FlattenType<T>` - Type reconstruction
- `Narrow<T>`, `NarrowBy<T, P>`, `NarrowTo<T, U>`, `NarrowWithDiscriminator<T, D, V>`, `NarrowByTag<T, Tag, Value>` - Type narrowing
- `Widen<T>`, `WidenLiteral<T>`, `WidenTo<T, U>`, `WidenArrayElement<T>` - Type widening
- `TypeMap<T>`, `TypeMapEntry<K, V>`, `TypeMapGet<M, K>`, `TypeMapKeys<M>`, `TypeMapValues<M>` - Type mapping
- `IsAny<T>`, `IsNever<T>`, `IsUnknown<T>`, `IsNull<T>`, `IsUndefined<T>`, `IsVoid<T>` - Type predicates
- `IsFunction<T>`, `IsObject<T>`, `IsArray<T>`, `IsTuple<T>`, `IsString<T>`, `IsNumber<T>`, `IsBoolean<T>` - Type predicates
- `IsLiteral<T>`, `IsUnion<T>`, `IsOptional<T, K>`, `IsReadonly<T, K>` - Type predicates
- `Equals<X, Y>`, `Extends<T, U>`, `StrictExtends<T, U>`, `Assignable<T, U>` - Type equality
- `TypeName<T>`, `TypeCategory`, `GetTypeCategory<T>` - Type info
- `ResolvePromise<T>`, `ResolveArray<T>`, `ResolveOptional<T>`, `DeepResolve<T>` - Type resolution

#### Performance Monitoring
- `Performance`, `PerformanceMetric<T>`, `PerformanceEntry`, `PerformanceMeasure`, `PerformanceMark` - Performance types
- `Timing`, `TimingResult`, `TimingStart`, `TimingEnd`, `TimingConfig` - Timing types
- `MemoryUsage`, `MemoryMetric<T>`, `MemorySnapshot`, `HeapMap`, `HeapNode`, `HeapEdge`, `MemoryStatistics`, `MemoryLeakDetection`, `LeakedObject` - Memory types
- `CPUUsage`, `CPUMetric<T>`, `CPUProfile` - CPU types
- `Profiler<T>`, `ProfileResult<T>`, `ProfileFrame`, `ProfileStack<T>`, `ProfileStatistics`, `ProfileHotspot`, `ProfileNode`, `CallFrame` - Profiler types
- `PerformanceTrace<T>`, `TraceSpan<T>`, `TraceContext`, `TraceConfig` - Tracing types
- `PerformanceBenchmark<T>`, `BenchmarkSuite<T>`, `BenchmarkComparison<T>`, `BenchmarkStatistics` - Benchmark types
- `MetricsRegistry`, `MetricsConfig` - Metrics types
- `PerformanceAlert`, `AlertConfig`, `AlertAction` - Alert types
- `PerformanceHealthCheck`, `HealthCheckResult` - Health check types

### Testing
- Comprehensive tests for all new types (110 new test cases)

### Code Quality
- All lint checks passing
- Build successful
- Type checking successful

## [1.5.0] - 2026-04-19

### Added

#### Authorization & Permissions
- `Permission<T>` - Permission definition type
- `PermissionSet<T>` - Set or array of permissions
- `PermissionGrant<T>` - Permission grant record
- `PermissionDeny<T>` - Permission deny record
- `PermissionCondition<T>` - Condition for permission evaluation
- `ConditionOperator` - Condition operators (eq, ne, gt, gte, lt, lte, in, notIn, etc.)
- `PermissionCheckResult` - Result of permission check
- `Role<T>` - Role definition type
- `RoleSet<T>` - Set or array of roles
- `RolePermission<R, P>` - Role-permission mapping
- `RoleHierarchy<T>` - Role hierarchy definition
- `Policy` - Policy definition for ABAC
- `PolicyRule<T>` - Policy rule type
- `PolicyEffect` - Policy effect (allow/deny)
- `PolicyCondition<T>` - Policy condition type
- `PolicyContext<T>` - Policy evaluation context
- `PolicyResult` - Policy evaluation result
- `AccessControl<T>` - Access control interface
- `ACL` - Access Control List type
- `ACLEntry` - ACL entry type
- `Resource<T>` - Resource type for authorization
- `Action` - Action type (create, read, update, delete, etc.)
- `RBAC<R, P>` - Role-Based Access Control interface
- `RBACConfig<R, P>` - RBAC configuration
- `ABAC<T>` - Attribute-Based Access Control interface
- `Attribute<T>` - Attribute definition
- `AttributeValue<T>` - Attribute value with source
- `ABACConfig` - ABAC configuration
- `AuthorizationProvider<T>` - Authorization provider interface
- `AuthorizationOptions` - Authorization options

#### Caching Strategies
- `Cache<T>` - Cache interface
- `CacheEntry<T>` - Cache entry type
- `CacheKey` - Cache key type
- `CacheKeyBuilder` - Cache key builder function
- `CacheValue<T>` - Cache value type
- `CacheOptions` - Cache options (TTL, tags, priority)
- `CacheStats` - Cache statistics (hits, misses, evictions)
- `HitRate` - Hit rate type
- `MissRate` - Miss rate type
- `CacheStrategy` - Cache strategy types (lru, lfu, fifo, ttl, arc, etc.)
- `LRUCache<T>` - LRU Cache interface
- `LFUCache<T>` - LFU Cache interface
- `TTLCache<T>` - TTL Cache interface
- `FIFOCache<T>` - FIFO Cache interface
- `ARCCache<T>` - Adaptive Replacement Cache interface
- `CacheInvalidation<T>` - Cache invalidation interface
- `InvalidationRule<T>` - Invalidation rule definition
- `InvalidationStrategy` - Invalidation strategy types
- `InvalidationEvent<T>` - Invalidation event type
- `DistributedCache<T>` - Distributed cache interface
- `CacheCluster` - Cache cluster configuration
- `CacheNode` - Cache node type
- `ConsistentHash` - Consistent hashing interface
- `CacheDecoratorOptions` - Cache decorator options
- `CacheAside<T>` - Cache-aside pattern
- `ReadThroughCache<T>` - Read-through cache pattern
- `WriteThroughCache<T>` - Write-through cache pattern
- `WriteBehindCache<T>` - Write-behind cache pattern
- `CacheSerializer<T>` - Cache serializer interface
- `CacheCompressionOptions` - Cache compression options

#### Configuration Management
- `Config<T>` - Configuration type
- `ConfigField<T>` - Configuration field definition
- `ConfigFieldType` - Configuration field types
- `ConfigFileFormat` - Configuration file formats
- `ConfigLoader<T>` - Configuration loader interface
- `ConfigLoaderOptions` - Configuration loader options
- `ConfigPriority` - Configuration priority levels
- `ConfigSchema<T>` - Configuration schema definition
- `ConfigValidationResult<T>` - Configuration validation result
- `ConfigValidator<T>` - Configuration validator interface
- `ConfigValue<T>` - Configuration value wrapper
- `ConfigError` - Configuration error type
- `ConfigWarning` - Configuration warning type
- `EnvConfig` - Environment configuration type
- `EnvMapping` - Environment variable mapping
- `EnvVar` - Environment variable definition
- `ParseEnvResult<T>` - Environment parsing result
- `FeatureFlag` - Feature flag type
- `FeatureFlagConfig` - Feature flag configuration
- `FeatureFlags<T>` - Feature flags collection
- `FeatureFlagVariant<T>` - Feature flag variant
- `FeatureTargeting` - Feature targeting rules
- `TargetingOperator` - Targeting operators
- `RemoteConfigProvider<T>` - Remote configuration provider
- `Secret` - Secret value type
- `SecretConfig` - Secret configuration
- `SecretOptions` - Secret options
- `SecretProvider` - Secret provider interface

#### Event-Driven Architecture
- `BaseEvent<T>` - Base event type
- `EventTimestamp` - Event timestamp type
- `EventVersion` - Event version type
- `EventBus<T>` - Event bus interface
- `EventBusConfig` - Event bus configuration
- `EventBusHandler<T>` - Event handler type
- `EventBusMiddleware<T>` - Event bus middleware
- `EventStream<T>` - Event stream type
- `AggregateEvents<E>` - Aggregate events type
- `PublishOptions` - Event publish options
- `Command<T>` - Command type for CQRS
- `CommandBus<T>` - Command bus interface
- `CommandHandler<T, R>` - Command handler type
- `CommandResult<T>` - Command result type
- `Query<T>` - Query type for CQRS
- `QueryBus<T>` - Query bus interface
- `QueryHandler<T, R>` - Query handler type
- `QueryResult<T>` - Query result type
- `Saga<T>` - Saga orchestrator type
- `SagaStep<T>` - Saga step definition
- `SagaResult<T>` - Saga result type
- `SagaStatus` - Saga status type
- `SagaCompensation<T>` - Saga compensation type
- `MessageQueue<T>` - Message queue interface
- `QueueProducer<T>` - Queue producer interface
- `QueueConsumer<T>` - Queue consumer interface
- `QueueMessage<T>` - Queue message type
- `DeadLetterQueue<T>` - Dead letter queue type
- `EventStore<T>` - Event store interface

#### GraphQL Integration
- `GraphQLSchema` - GraphQL schema type
- `GraphQLType` - GraphQL type wrapper
- `GraphQLScalar<T>` - GraphQL scalar type
- `GraphQLEnum<T>` - GraphQL enum type
- `GraphQLInput<T>` - GraphQL input type
- `GraphQLInterface<T>` - GraphQL interface type
- `GraphQLUnion<T>` - GraphQL union type
- `GraphQLObject<T>` - GraphQL object type
- `GraphQLField<T, A, R>` - GraphQL field type
- `GraphQLArgument<T>` - GraphQL argument type
- `GraphQLResolveInfo` - GraphQL resolve info
- `GraphQLContext<T>` - GraphQL context type
- `GraphQLResolver<T, A, R>` - GraphQL resolver type
- `GraphQLSubscription<T>` - GraphQL subscription type
- `GraphQLMutation<T>` - GraphQL mutation type
- `GraphQLQuery<T>` - GraphQL query type
- `GraphQLDirective<T>` - GraphQL directive type
- `GraphQLResult<T>` - GraphQL result wrapper
- `GraphQLError` - GraphQL error type
- `GraphQLExecutionResult<T>` - GraphQL execution result
- `GraphQLVariables` - GraphQL variables type
- `GraphQLOperation<T>` - GraphQL operation type
- `GraphQLFragment<T>` - GraphQL fragment type

#### Logging & Observability
- `Logger<T>` - Logger interface
- `LogLevel` - Log level types (trace, debug, info, warn, error, fatal)
- `LogEntry<T>` - Log entry type
- `LogContext<T>` - Log context type
- `LoggerConfig<T>` - Logger configuration
- `LogTransport` - Log transport type
- `Metric<T>` - Metric type
- `MetricType` - Metric types (counter, gauge, histogram, summary)
- `Counter<T>` - Counter metric interface
- `Gauge<T>` - Gauge metric interface
- `Histogram` - Histogram metric interface
- `Summary` - Summary metric interface
- `MetricsRegistry` - Metrics registry interface
- `Span` - Tracing span type
- `SpanKind` - Span kind types
- `SpanStatus` - Span status types
- `SpanEvent` - Span event type
- `SpanLink` - Span link type
- `SpanOptions` - Span options
- `Trace<T>` - Trace type
- `TraceStatus` - Trace status types
- `TraceContext` - Trace context type
- `Tracer` - Tracer interface
- `Monitor` - Monitor type
- `MonitorStatus` - Monitor status types
- `MonitorResult<T>` - Monitor result type
- `Alert<T>` - Alert type
- `AlertSeverity` - Alert severity types
- `AlertStatus` - Alert status types
- `AlertRule<T>` - Alert rule definition
- `AlertConfig` - Alert configuration
- `AlertReceiver` - Alert receiver type
- `AlertRoute` - Alert routing type
- `InhibitRule` - Alert inhibition rule
- `HealthIndicator<T>` - Health indicator interface
- `HealthCheckResult<T>` - Health check result type
- `LivenessCheck` - Liveness check type
- `ReadinessCheck` - Readiness check type

#### Microservices Architecture
- `Microservice<T>` - Microservice type
- `ServiceConfig<T>` - Service configuration
- `ServiceRegistry<T>` - Service registry interface
- `ServiceInstance` - Service instance type
- `InstanceStatus` - Instance status types
- `ServiceDiscovery<T>` - Service discovery interface
- `ServiceClient<T>` - Service client interface
- `ServiceRequest<T>` - Service request type
- `ServiceResponse<T>` - Service response type
- `ServiceError` - Service error type
- `HealthCheck` - Health check interface
- `HealthReport` - Health report type
- `HealthStatus` - Health status types
- `CircuitBreaker<T>` - Circuit breaker interface
- `CircuitBreakerConfig` - Circuit breaker configuration
- `CircuitBreakerState` - Circuit breaker states
- `CircuitBreakerStats` - Circuit breaker statistics
- `RateLimit` - Rate limit type
- `RetryPolicy` - Retry policy type
- `LoadBalancer<T>` - Load balancer interface
- `LoadBalancerStrategy` - Load balancing strategies
- `APIGateway<T>` - API Gateway type
- `GatewayConfig` - Gateway configuration
- `GatewayRoute` - Gateway route type
- `GatewayMiddleware` - Gateway middleware type
- `CORSConfig` - CORS configuration
- `AuthConfig` - Authentication configuration

#### Validation Rules
- `ValidationRule<T>` - Validation rule type
- `Validator<T>` - Validator function type
- `ValidatorResult<T>` - Validator result type
- `ValidationError` - Validation error type
- `ValidationOptions` - Validation options
- `ValidationContext<T>` - Validation context type
- `CustomValidator<T>` - Custom validator type
- `OrValidator<T>` - OR validator composition
- `NotValidator<T>` - NOT validator composition
- `StringFieldValidator<T>` - String field validator
- `NumberFieldValidator<T>` - Number field validator
- `BooleanFieldValidator<T>` - Boolean field validator
- `DateFieldValidator<T>` - Date field validator
- `ArrayFieldValidator<T>` - Array field validator
- `ObjectFieldValidator<T>` - Object field validator
- `SchemaBuilder<T>` - Schema builder interface
- `MinLength` - Minimum length constraint
- `MaxLength` - Maximum length constraint
- `MinValue` - Minimum value constraint
- `MaxValue` - Maximum value constraint
- `Pattern` - Regex pattern constraint
- `EmailConstraint` - Email validation constraint
- `URLConstraint` - URL validation constraint
- `UUIDConstraint` - UUID validation constraint
- `Sanitizer<T>` - Sanitizer function type
- `SanitizationRule<T>` - Sanitization rule type
- `SanitizeResult<T>` - Sanitization result type
- `StringSanitizer` - String sanitizer type
- `NumberSanitizer` - Number sanitizer type

#### WebSocket & Real-Time
- `WebSocketConfig` - WebSocket configuration
- `WebSocketOptions` - WebSocket options
- `WebSocketState` - WebSocket state types
- `WebSocketMessage<T>` - WebSocket message type
- `WebSocketEvent<T>` - WebSocket event type
- `WebSocketHandler<T>` - WebSocket handler type
- `EventHandler<T>` - Event handler type
- `EventEmitter<T>` - Event emitter interface
- `EventMap` - Event map type
- `EventListenerOptions` - Event listener options
- `EventPayload<T>` - Event payload type
- `TypedEventTarget<T>` - Typed EventTarget interface
- `PubSub<T>` - Pub/Sub interface
- `Publisher<T>` - Publisher interface
- `Subscriber<T>` - Subscriber interface
- `SubscriptionOptions` - Subscription options
- `RealTimeChannel<T>` - Real-time channel type
- `RealTimeClient<T>` - Real-time client type
- `RealTimeMessage<T>` - Real-time message type
- `RealTimeSubscription<T>` - Real-time subscription type
- `Stream<T>` - Stream interface
- `StreamReader<T>` - Stream reader interface
- `StreamWriter<T>` - Stream writer interface
- `StreamChunk<T>` - Stream chunk type
- `ReadableStreamLike<T>` - Readable stream type
- `WritableStreamLike<T>` - Writable stream type
- `TransformStreamLike<T>` - Transform stream type

#### Workflow Engine
- `Workflow<T>` - Workflow definition type
- `WorkflowDefinition<T>` - Workflow definition interface
- `WorkflowInstance<T>` - Workflow instance type
- `WorkflowStatus` - Workflow status types
- `WorkflowStep<T>` - Workflow step type
- `StepType` - Step types (task, decision, parallel, etc.)
- `StepResult<T>` - Step result type
- `StepStatus` - Step status types
- `WorkflowTransition<T>` - Workflow transition type
- `TransitionCondition<T>` - Transition condition type
- `TransitionAction<T>` - Transition action type
- `WorkflowTimeout` - Workflow timeout configuration
- `WorkflowExecution<T>` - Workflow execution type
- `ExecutionStatus` - Execution status types
- `ExecutionStep<T>` - Execution step type
- `ExecutionContext<T>` - Execution context type
- `ExecutionResult<T>` - Execution result type
- `WorkflowHistory<T>` - Workflow history type
- `HistoryEntry<T>` - History entry type
- `HistoryEvent<T>` - History event type
- `HistoryEventType` - History event types
- `WorkflowError` - Workflow error type
- `WorkflowErrorHandler<T>` - Error handler interface
- `ErrorHandlerResult` - Error handler result
- `ErrorHandlingStrategy` - Error handling strategies
- `RetryPolicy` - Retry policy type
- `BPMNProcess<T>` - BPMN process type
- `BPMNProcessType` - BPMN process types
- `BPMNTask<T>` - BPMN task type
- `BPMNTaskType` - BPMN task types
- `BPMNGateway<T>` - BPMN gateway type
- `BPMNGatewayType` - BPMN gateway types
- `BPMNGatewayCondition<T>` - BPMN gateway condition
- `BPMNEvent<T>` - BPMN event type
- `BPMNEventType` - BPMN event types
- `BPMNEventTrigger` - BPMN event triggers
- `WorkflowEngine<T>` - Workflow engine interface
- `WorkflowEngineConfig` - Workflow engine configuration
- `WorkflowPersistence` - Workflow persistence interface
- `WorkflowExecutor` - Workflow executor interface

### Documentation
- Added 10 new guide pages (English & Chinese) for v1.5.0 modules
- Updated VitePress configuration with new sections
- Added API reference for all new types

### Code Quality
- All lint checks passing
- Build successful
- Type checking successful

## [1.4.0] - 2026-04-18

### Added

#### Type-Level Algorithms
- `Sort<T, Order>` - Sort tuple of numbers (asc/desc)
- `QuickSort<T>` - QuickSort implementation at type level
- `MergeSort<T>` - MergeSort implementation at type level
- `Find<T, P>` - Find first element matching predicate
- `FindIndex<T, P>` - Find index of first matching element
- `Includes<T, U>` - Check if tuple includes element
- `IndexOf<T, U>` - Get index of element in tuple
- `GCD<A, B>` - Greatest Common Divisor
- `LCM<A, B>` - Least Common Multiple
- `Factorial<N>` - Factorial of a number
- `Fibonacci<N>` - Fibonacci number at position N
- `IsPrime<N>` - Check if number is prime
- `LongestCommonPrefix<T>` - Longest common prefix of strings
- `LevenshteinDistance<A, B>` - Edit distance between strings
- `Reverse<T>` - Reverse a tuple
- `Unique<T>` - Remove duplicates from tuple
- `Flatten<T>` - Flatten nested tuple (one level)
- `FlattenDeep<T>` - Flatten nested tuple (deep)

#### Type-Level Parsers
- `ParseJSON<S>` - Parse JSON string to type
- `StringifyJSON<T>` - Stringify type to JSON string
- `IsValidJSON<S>` - Check if string is valid JSON
- `ParseURL<S>` - Parse URL string into components
- `QueryParams<S>` - Parse query string into object
- `PathParams<Pattern, Path>` - Extract path params from route
- `ParseCSV<S>` - Parse CSV string to records
- `StringifyCSV<T>` - Stringify records to CSV format
- `ParseExpression<S>` - Parse arithmetic expression string
- `EvaluateExpression<T>` - Evaluate parsed expression

#### Type-Level State Machines
- `StateMachine<T, Config>` - State machine type
- `State<S, Data>` - State definition
- `Transition<E, From, To>` - Transition definition
- `BuildStateMachine<Config>` - Build state machine from config
- `CurrentState<T>` - Get current state
- `NextState<T, E>` - Get next state after event
- `ValidTransitions<T>` - Get valid transitions
- `StateHistory<T>` - State history type
- `CanTransition<T, E>` - Check if transition is valid
- `IsTerminal<T>` - Check if state is terminal
- `SendEvent<T, E>` - Send event to state machine

#### Type-Level Data Structures
- `Tree<T>` - Tree type (alias for TreeNode)
- `TreeNode<T>` - Tree node with children
- `BinaryTreeNode<T>` - Binary tree node
- `GenericTree<T>` - Generic tree with children array
- `TreePath<T, V>` - Get path to value in tree
- `TreeDepth<T>` - Get maximum depth of tree
- `TreeLeaves<T>` - Get all leaf values
- `TreeFlatten<T>` - Flatten tree to array (pre-order)
- `Graph<Adjacency>` - Graph type (adjacency list)
- `GraphNode<T, Edges>` - Graph node type
- `GraphEdge<From, To>` - Graph edge representation
- `GraphNodes<G>` - Get all nodes in graph
- `GraphEdges<G, N>` - Get edges from node
- `GraphPath<A, From, To>` - Find path between nodes
- `GraphHasCycle<A>` - Check if graph has cycle
- `LinkedList<T>` - Linked list type
- `ListNode<T>` - Linked list node
- `ListHead<T>` - Get head of linked list
- `ListTail<T>` - Get tail of linked list
- `ListLength<T>` - Get length of linked list
- `ListReverse<T>` - Reverse linked list
- `Stack<T>` - Stack type (LIFO)
- `Queue<T>` - Queue type (FIFO)
- `Push<S, V>` - Push value onto stack
- `Pop<S>` - Pop value from stack
- `Peek<S>` - Peek top of stack
- `Enqueue<Q, V>` - Enqueue value (add to back)
- `Dequeue<Q>` - Dequeue value (remove from front)
- `Front<Q>` - Get front of queue
- `IsEmptyStack<S>` - Check if stack is empty
- `IsEmptyQueue<Q>` - Check if queue is empty
- `StackSize<S>` - Get stack size
- `QueueSize<Q>` - Get queue size

#### Type-Level HTTP & API
- `HTTPMethod` - HTTP methods union type
- `HTTPStatus` - HTTP status codes union type
- `HTTPHeaders<T>` - HTTP headers type
- `ContentType` - Content-Type header values
- `HTTPStatusCategory<S>` - Categorize HTTP status
- `Route<P, M, H, C>` - Route definition
- `RouteParams<P>` - Extract params from route path
- `RouteQuery<Q>` - Route query type
- `Router<T>` - Router type
- `RESTResource<T>` - REST resource type
- `RESTCollection<T, C, U>` - REST collection type
- `CRUDOperation` - CRUD operations
- `APIEndpoint<T>` - API endpoint type
- `APIRequest<T>` - API request type
- `APIResponse<T>` - API response type
- `APIError<T>` - API error type
- `Middleware<C>` - Middleware function type
- `MiddlewareChain<M>` - Middleware chain type
- `Context<C>` - Request context type
- `ComposeMiddleware<M>` - Compose middleware chain
- `ParseResponse<R>` - Parse response data type
- `RequestOptions<T>` - Request options type

#### Type-Level Database
- `SQLType<T>` - TypeScript to SQL type mapping
- `SQLColumn<T, Options>` - SQL column definition
- `ColumnOptions` - Column options interface
- `CreateTable<T>` - CREATE TABLE definition
- `SelectQuery<T, Fields>` - SELECT query type
- `InsertQuery<T>` - INSERT query type
- `UpdateQuery<T, Where>` - UPDATE query type
- `DeleteQuery<T, Where>` - DELETE query type
- `WhereClause<T>` - WHERE clause type
- `JoinQuery<T, U>` - JOIN query type
- `Migration<T>` - Migration definition
- `MigrationUp<T>` - Up migration
- `MigrationDown<T>` - Down migration
- `MigrationHistory<T>` - Migration history
- `QueryBuilder<T>` - Query builder type
- `WhereBuilder<T>` - WHERE builder type
- `OrderClause<T>` - ORDER BY clause type
- `Index<T>` - Index definition
- `UniqueIndex<T>` - Unique index definition
- `CompositeIndex<T, Keys>` - Composite index definition
- `Transaction<R>` - Transaction type
- `DatabaseConfig<T>` - Database configuration
- `QueryState` - Query state interface

#### Type-Level Concurrency
- `Task<T>` - Task type
- `TaskResult<T>` - Task result type
- `TaskError<T>` - Task error type
- `TaskStatus` - Task status union type
- `TaskPriority` - Task priority type
- `TaskOptions<T>` - Task options type
- `Pipeline<I, O, Stages>` - Pipeline type
- `PipelineStage<N, I, O>` - Pipeline stage type
- `PipelineRun<T>` - Pipeline run result
- `StageResult<N, O>` - Stage result type
- `AddStage<P, S>` - Add stage to pipeline
- `Scheduler<T>` - Scheduler type
- `ScheduledJob<T>` - Scheduled job type
- `ScheduleOptions<T>` - Schedule options type
- `Worker<I, O>` - Worker type
- `WorkerPool<I, O>` - Worker pool type
- `WorkerTask<I, O>` - Worker task type
- `WorkerOptions<T>` - Worker options type
- `RateLimiter<T>` - Rate limiter type
- `Throttle<T>` - Throttle type
- `ThrottleOptions<T>` - Throttle options
- `Debounce<T>` - Debounce type
- `DebounceOptions<T>` - Debounce options
- `Bulkhead<T>` - Bulkhead type
- `MutexState` - Mutex state type
- `Semaphore<T>` - Semaphore type
- `LockAcquisition<R>` - Lock acquisition type
- `PriorityQueue<T>` - Priority queue type

#### Type-Level Interop
- `ToTypeFest<T>` - Convert to type-fest format
- `FromTypeFest<T>` - Convert from type-fest format
- `ToTsToolbelt<T>` - Convert to ts-toolbelt format
- `FromTsToolbelt<T>` - Convert from ts-toolbelt format
- `ToUtilityTypes<T>` - Convert to utility-types format
- `FromUtilityTypes<T>` - Convert from utility-types format
- `ConvertTo<T, Format>` - Convert type to format
- `ConvertFrom<T, Format>` - Convert type from format
- `IsCompatible<T, U>` - Check type compatibility
- `CompatibleWith<T, Libs>` - Check library compatibility
- `CompatibleKeys<T, U>` - Get compatible keys
- `IncompatibleKeys<T, U>` - Get incompatible keys
- `CompatibleMerge<T, U>` - Merge compatible types
- `CompatibleIntersection<T, U>` - Compatible intersection
- `CompatibilityReport<T, U>` - Compatibility report
- `LibraryFeatures<L>` - Get library features
- `ConversionMap<T>` - Type conversion mapping
- `ToolbeltDeepPartial<T>` - ts-toolbelt DeepPartial
- `ToolbeltUnionExclude<T, U>` - ts-toolbelt Exclude
- `ToolbeltUnionPick<T, U>` - ts-toolbelt Extract
- `TypeFestCamelCase<S>` - type-fest CamelCase
- `TypeFestSnakeCase<S>` - type-fest SnakeCase
- `UtilityDeepPartial<T>` - utility-types DeepPartial
- `UtilityDeepReadonly<T>` - utility-types DeepReadonly
- `UtilityMap<T, K, V>` - utility-types Map

#### Type-Level Testing
- `ExpectTrue<T>` - Expect type to be true
- `ExpectFalse<T>` - Expect type to be false
- `ExpectEqual<T, U>` - Expect types to be equal
- `ExpectExtends<T, U>` - Expect T extends U
- `ExpectNotExtends<T, U>` - Expect T does not extend U
- `ExpectAny<T>` - Expect type to be any
- `ExpectNever<T>` - Expect type to be never
- `ExpectUnknown<T>` - Expect type to be unknown
- `IsUnion<T>` - Check if type is union
- `IsIntersection<T>` - Check if type is intersection
- `AssertType<T, Expected>` - Assert type with expected
- `TypeTest<Name, Test>` - Type test definition
- `TypeTestSuite<T>` - Test suite type
- `TypeTestResult` - Test result type
- `RunTypeTest<T>` - Run type test
- `SkipTest<Name>` - Skip test marker
- `TypeCoverage<T>` - Type coverage analysis
- `TypeComplexity<T>` - Type complexity analysis
- `UncoveredTypes<T>` - Get uncovered types
- `TypeInfo<T>` - Type information
- `InspectType<T>` - Inspect type details
- `TypeCategory<T>` - Categorize type
- `DebugType<T>` - Debug type helper
- `ExpandType<T>` - Expand type for display
- `PrettyType<T>` - Pretty print type
- `MarkType<T, Tag>` - Mark type with tag

#### Object Operations
- `ObjectMap<T, F>` - Map over object values
- `ObjectFilter<T, P>` - Filter object properties
- `ObjectPickByType<T, U>` - Pick by value type
- `ObjectInvert<T>` - Invert object (swap keys/values)
- `DeepMerge<A, B>` - Deep merge objects
- `ObjectPath<T, P>` - Get value at path
- `PathExists<T, P>` - Check if path exists
- `KeysOfType<T, U>` - Get keys of specific type
- `MergeAllObjects<T>` - Merge multiple objects

#### String Operations
- `Split<S, D>` - Split string by delimiter
- `Join<T, S>` - Join string array with separator
- `KebabCase<S>` - Convert to kebab-case
- `PascalCase<S>` - Convert to PascalCase
- `ConstantCase<S>` - Convert to CONSTANT_CASE
- `IsEmail<S>` - Check if string is email
- `IsUUID<S>` - Check if string is UUID
- `IsURL<S>` - Check if string is URL
- `ReverseString<S>` - Reverse a string

#### Promise & Async Utilities
- `PromiseValue<T>` - Extract value from Promise (deep)
- `IsPromise<T>` - Check if type is Promise
- `UnwrapPromise<T>` - Unwrap or return original
- `AsyncReturnType<T>` - Return type of async function
- `MakeAsync<T>` - Make function async
- `PromiseAll<T>` - Await all promises
- `AsyncResult<T, E>` - Rust-style Result type
- `Deferred<T>` - Deferred promise type

### Documentation
- Added 11 new guide pages (English & Chinese)
- Updated VitePress configuration
- Added API reference for all new types

### Testing
- Added comprehensive tests for all new types
- Total 314 tests passing

### Code Quality
- Fixed all lint errors (ts/no-empty-object-type, ts/no-unsafe-function-type)
- All lint checks passing
- Build successful

## [1.3.0] - 2026-04-17

### Added

#### Advanced Type Patterns
- `Match<T, Patterns>` - Type-level pattern matching
- `Case<P>` - Case helper for pattern matching
- `Default<R>` - Default case for pattern matching
- `Recurse<T, Limit>` - Type-level recursion with depth limit
- `Depth<T>` - Get the maximum depth of a nested type
- `Iterate<T, F, N>` - Type-level iteration
- `Reduce<T, F, Initial>` - Type-level reduce
- `ForEach<T, F>` - Type-level for-each
- `TypeFilter<T, P>` - Type-level filter for tuples
- `TypeFind<T, P>` - Type-level find
- `TypeIncludes<T, E>` - Check if tuple includes element
- `TypeEvery<T, P>` - Check if all elements match
- `TypeSome<T, P>` - Check if any element matches

#### Type-Level Collections
- `TypeSet<T>` - Type-level Set representation
- `SetAdd<S, T>` - Add element to type set
- `SetRemove<S, T>` - Remove element from type set
- `SetHas<S, T>` - Check if element exists in set
- `SetUnion<A, B>` - Union of two sets
- `SetIntersection<A, B>` - Intersection of two sets
- `SetDifference<A, B>` - Difference of two sets
- `SetSymmetricDifference<A, B>` - Symmetric difference
- `SetIsEmpty<S>` - Check if set is empty
- `SetIsSubset<A, B>` - Check if A is subset of B
- `TupleToSet<T>` - Convert tuple to set
- `SetToTuple<S>` - Convert set to tuple
- `TypeMap<K, V>` - Type-level Map representation
- `MapGet<M, K>` - Get value from map
- `MapSet<M, K, V>` - Set value in map
- `MapDelete<M, K>` - Delete key from map
- `MapHas<M, K>` - Check if key exists
- `MapKeys<M>` - Get all keys from map
- `MapValues<M>` - Get all values from map
- `MapEntries<M>` - Get map entries
- `MapMerge<A, B>` - Merge two maps
- `MapUpdate<M, K, F>` - Update value in map
- `ListFilter<T, P>` - Filter list by predicate
- `ListMap<T, F>` - Map over list elements
- `ListFind<T, P>` - Find element in list
- `ListFindIndex<T, P>` - Find index of element
- `ListIncludes<T, E>` - Check if list includes element
- `ListReverse<T>` - Reverse a list
- `ListConcat<A, B>` - Concatenate two lists
- `ListFlatten<T>` - Flatten nested list (one level)
- `ListFlattenDeep<T>` - Deep flatten nested list
- `ListTake<T, N>` - Take first N elements
- `ListDrop<T, N>` - Drop first N elements
- `ListLength<T>` - Get length of list
- `ListZip<A, B>` - Zip two lists together
- `ListSplitAt<T, N>` - Split list at index
- `ListUnique<T>` - Get unique elements
- `ListChunk<T, N>` - Chunk list into sublists

#### Type Assertions & Constraints
- `AssertEqual<T, Expected>` - Assert types are equal
- `AssertExtends<T, U>` - Assert T extends U
- `AssertKeyof<T, K>` - Assert K is a key of T
- `AssertNotNil<T>` - Assert type is not never
- `AssertIsNever<T>` - Assert type is never
- `AssertAssignable<T, U>` - Assert bidirectional assignability
- `RequireKeys<T, K>` - Require specific keys
- `RequireAtLeastOne<T, K>` - Require at least one key
- `RequireExactlyOne<T, K>` - Require exactly one key
- `RequireAllOrNone<T, K>` - Require all or none keys
- `RequireAtMostOne<T, K>` - Require at most one key
- `OptionalKeys<T, K>` - Make specific keys optional
- `ExcludeNeverKeys<T>` - Exclude never keys
- `AllowKeysByPredicate<T, P>` - Only allow keys satisfying predicate
- `RequireKeyOfType<T, K, V>` - Require key to be of specific type
- `HasProperty<T, K>` - Ensure object has property
- `HasProperties<T, K>` - Ensure object has multiple properties
- `HasMethod<T, K, F>` - Ensure object has method
- `RequireNotNullish<T>` - Ensure type is not null/undefined
- `RequireArray<T>` - Ensure type is array
- `RequireTuple<T>` - Ensure type is tuple
- `RequireFunction<T>` - Ensure type is function
- `RequireObject<T>` - Ensure type is object
- `RequireStringLiteral<T>` - Ensure type is string literal
- `RequireNumberLiteral<T>` - Ensure type is number literal
- `ExhaustiveCheck<T, Cases>` - Force exhaustive checking

#### String Advanced Operations
- `Split<S, D>` - Split string by delimiter
- `Join<T, S>` - Join string array with separator
- `Chunk<S, N>` - Chunk string into segments
- `KebabCase<S>` - Convert to kebab-case
- `PascalCase<S>` - Convert to PascalCase
- `ConstantCase<S>` - Convert to CONSTANT_CASE
- `DotCase<S>` - Convert to dot.case
- `PathCase<S>` - Convert to path/case
- `HeaderCase<S>` - Convert to Header-Case
- `TrainCase<S>` - Convert to Train-Case
- `IsEmail<S>` - Check if string is email
- `IsUUID<S>` - Check if string is UUID
- `IsURL<S>` - Check if string is URL
- `IsNumeric<S>` - Check if string is numeric
- `IsHexColor<S>` - Check if string is hex color
- `IsEmptyString<S>` - Check if string is empty
- `IsWhitespace<S>` - Check if string is whitespace
- `TakeFirst<S, N>` - Take first N characters
- `TakeLast<S, N>` - Take last N characters
- `DropFirst<S, N>` - Drop first N characters
- `DropLast<S, N>` - Drop last N characters
- `ReverseString<S>` - Reverse string
- `ReplaceVowels<S, R>` - Replace vowels
- `RemoveSpaces<S>` - Remove all spaces
- `Between<S, Start, End>` - Get substring between markers
- `Truncate<S, N, Suffix>` - Truncate string

#### Promise & Async Utilities
- `PromiseValue<T>` - Extract value from Promise (deep)
- `PromiseResult<T>` - Get resolved value (single level)
- `ExtractPromise<T>` - Extract from nested promises
- `IsPromise<T>` - Check if type is Promise
- `UnwrapPromise<T>` - Unwrap or return original
- `WrapPromise<T>` - Wrap in Promise
- `PromiseSettledResult<T>` - Result of Promise.allSettled
- `PromiseFulfilledResult<T>` - Fulfilled result
- `PromiseRejectedResult` - Rejected result
- `ExtractFulfilled<T>` - Extract fulfilled values
- `ExtractRejected<T>` - Extract rejected reasons
- `AsyncReturnType<T>` - Return type of async function
- `AsyncParameters<T>` - Parameters of async function
- `MakeAsync<T>` - Make function async
- `EnsureAsync<T>` - Ensure function is async
- `SyncReturnType<T>` - Non-Promise return type
- `PromiseAll<T>` - Await all promises
- `PromiseRecord<T>` - Await promise record
- `PromiseWithTimeout<T, Ms>` - Promise with timeout
- `Deferred<T>` - Deferred promise type
- `PromiseExecutor<T>` - Promise executor
- `RetryOptions<T>` - Retry options type
- `AsyncGeneratorType<T>` - Async generator
- `AsyncResult<T, E>` - Async result type (Rust-style)
- `AsyncSuccess<T>` - Success result
- `AsyncFailure<E>` - Failure result

#### Object Advanced Operations
- `ObjectMap<T, F>` - Map over object values
- `ObjectFilter<T, P>` - Filter object properties
- `ObjectPickByType<T, U>` - Pick by value type
- `ObjectOmitByType<T, U>` - Omit by value type
- `ObjectInvert<T>` - Invert object (swap keys/values)
- `ObjectEntries<T>` - Get object entries
- `ObjectFromEntries<E>` - Create object from entries
- `ObjectPick<T, P>` - Pick nested property
- `ObjectOmit<T, P>` - Omit nested property
- `DeepMerge<A, B>` - Deep merge objects
- `DeepAssign<T, U>` - Deep assign objects
- `DeepDefaults<T, D>` - Apply deep defaults
- `MergeAll<T>` - Merge multiple objects
- `IsEmptyObject<T>` - Check if object is empty
- `IsRecord<T>` - Check if object is record type
- `KeysOfType<T, U>` - Get keys of specific type
- `KeysByValue<T, V>` - Get keys by value shape
- `ObjectPath<T, P>` - Get value at path
- `ObjectSetPath<T, P, V>` - Set value at path
- `PathExists<T, P>` - Check if path exists
- `ObjectEquals<A, B>` - Check object equality
- `ObjectDiff<A, B>` - Get object difference
- `IntersectKeys<A, B>` - Intersection keys
- `UnionKeys<A, B>` - Union keys

#### JSON Schema Generation
- `JsonSchemaType<T>` - Map TS types to JSON Schema types
- `JsonSchemaDefinition<T>` - JSON Schema definition
- `JsonSchemaProperties<T>` - Schema properties
- `JsonSchema<T>` - Full JSON Schema type
- `JsonSchemaTuple<T>` - Schema for tuple validation
- `JsonSchemaUnion<T>` - Schema for union types
- `JsonSchemaWithConstraints<T, C>` - Schema with constraints
- `OpenAPISchema<T>` - OpenAPI 3.0 Schema
- `OpenAPIResponse<T>` - OpenAPI Response
- `OpenAPIRequestBody<T>` - OpenAPI Request Body
- `OpenAPIParameter<Name, T, In>` - OpenAPI Parameter
- `OpenAPIOperation<Method, Response, Request, Params>` - OpenAPI Operation
- `OpenAPIPathItem<T>` - OpenAPI Path Item
- `OpenAPIDocument<Title, Version, Paths>` - OpenAPI Document
- `InferFromSchema<S>` - Infer type from JSON Schema
- `SchemaMerge<A, B>` - Merge JSON schemas
- `SchemaNullable<S>` - Make schema nullable
- `SchemaWithEnum<S, E>` - Schema with enum

#### Extended Ecosystem Integration

##### Next.js
- `NextPageProps<T>` - Next.js page props
- `ServerComponentProps<T>` - Server component props
- `ClientComponentProps<T>` - Client component props
- `AppRouterParams<T>` - App Router params
- `RouteHandlerProps<T>` - Route handler props
- `NextApiContext<T>` - API route context
- `NextMetadata<T>` - Page metadata
- `NextLinkProps<T>` - Link component props
- `NextImageProps<T>` - Image optimization props
- `NextServerAction<T>` - Server action type
- `GenerateStaticParams<T>` - Static params generator

##### Nuxt
- `NuxtPageMeta<T>` - Page meta type
- `NuxtComposable<T>` - Composable type
- `NuxtPlugin<T>` - Plugin definition
- `NuxtAppContext<T>` - App context
- `NuxtFetchResult<T>` - useFetch result
- `NuxtStateRef<T>` - useState reference
- `NuxtRouteLocation<P>` - Route location
- `NuxtLayoutProps<T>` - Layout props
- `NuxtMiddleware<T>` - Middleware definition

##### SolidJS
- `SolidComponentProps<T>` - Component props
- `SolidSignal<T>` - Signal type
- `SolidStore<T>` - Reactive store
- `SolidResource<T>` - Resource type
- `SolidContext<T>` - Context type
- `SolidMemo<T>` - Memo type
- `SolidPortalProps<T>` - Portal props
- `SolidForProps<T, F>` - For loop props
- `SolidShowProps<T>` - Show conditional props
- `SolidSwitchProps` - Switch props
- `SolidMatchProps<T>` - Match case props

##### Svelte
- `SvelteProps<T>` - Component props
- `SvelteStore<T>` - Store type
- `SvelteReadableStore<T>` - Readable store
- `SvelteWritableStore<T>` - Writable store
- `SvelteDerivedStore<T, Sources>` - Derived store
- `SvelteActionReturn<T>` - Action return
- `SvelteAction<Element, Parameters>` - Action function
- `SvelteEventDispatcher<T>` - Event dispatcher
- `SvelteSlotProps<T>` - Slot props
- `SvelteComponent<T>` - Legacy component
- `Svelte5Component<T>` - Svelte 5 component
- `SvelteTransition<T>` - Transition function
- `SvelteAnimation<T>` - Animation function

### Testing
- Added comprehensive tests for all new types (47 new tests)

## [1.2.0] - 2026-04-12

### Added

#### Schema Validation
- `RuntimeGuard<T>` - Define type guard function for runtime type checking
- `GuardedType<G>` - Extract the guarded type from a type guard function
- `HasRuntimeCheck<T>` - Check if a type has runtime check available
- `AssertionFunction<T>` - Assertion function type
- `CompositeGuard<T>` - Composite type guard for objects
- `NegateGuard<T>` - Negate a type guard
- `CombinedGuard<T, U>` - Combine multiple type guards (AND)
- `UnionGuard<T, U>` - Union type guard (OR)

#### Zod Integration
- `ZodOutput<T>` - Extract output type from Zod schema
- `ZodInput<T>` - Extract input type from Zod schema
- `IsZodSchema<T>` - Check if type is a Zod schema
- `ZodShape<T>` - Extract shape from ZodObject
- `ZodUnwrapOptional<T>` - Unwrap ZodOptional type
- `ZodUnwrapNullable<T>` - Unwrap ZodNullable type
- `IsZodOptional<T>` - Check if Zod schema is optional
- `IsZodNullable<T>` - Check if Zod schema is nullable
- `ZodArrayElement<T>` - Get element type from ZodArray
- `ZodRequiredKeys<T>` - Get required keys from ZodObject
- `ZodOptionalKeys<T>` - Get optional keys from ZodObject
- `ZodPick<T, K>` - Pick properties from ZodObject at type level
- `ZodOmit<T, K>` - Omit properties from ZodObject at type level
- `ZodDeepPartialInput<T>` - Deep partial input for Zod schemas

#### Yup Integration
- `YupOutput<T>` - Extract output type from Yup schema
- `YupInput<T>` - Extract input type from Yup schema
- `IsYupSchema<T>` - Check if type is a Yup schema
- `YupFields<T>` - Get Yup schema fields from object schema
- `YupRequiredKeys<T>` - Get required keys from Yup schema
- `YupOptionalKeys<T>` - Get optional keys from Yup schema

#### Ecosystem Integration - React
- `ComponentProps<T>` - Extract props from React component or intrinsic element
- `ComponentPropsWithRef<T>` - Get props with ref included
- `PropsWithChildren<P>` - Add children to props
- `PropsWithoutChildren<P>` - Remove children from props
- `ExtractPropTypes<T>` - Extract prop types from component
- `RequiredProps<P>` - Get required prop keys
- `OptionalProps<P>` - Get optional prop keys
- `MergeDefaultProps<P, D>` - Merge props with default props
- `PropsWithStyle<P>` - Props with style property
- `PropsWithClassName<P>` - Props with className property
- `EventHandler<E>`, `MouseEventHandler`, `KeyboardEventHandler`, etc. - Event handler types

#### Ecosystem Integration - Vue
- `VuePropType<T>` - Vue prop type definition
- `VuePropConstructor<T>` - Vue prop constructor types
- `ExtractVueProps<T>` - Extract props from Vue component options
- `NormalizeVueProps<T>` - Normalize Vue props to TypeScript types
- `VueEmitType<T>` - Vue emit function type
- `VueModelProps<K, T>` - Vue model props for v-model
- `VueSlot<T>` - Vue slot type
- `VueSlots<T>` - Vue slots type
- `VuePropsToType<T>` - Convert Vue props options to TypeScript type

#### Ecosystem Integration - Prisma
- `PrismaModel<T>` - Prisma model type helper
- `PrismaCreateInput<T>` - Prisma create input type
- `PrismaUpdateInput<T>` - Prisma update input type
- `PrismaUniqueWhere<T, K>` - Prisma unique where input
- `PrismaWhereInput<T>` - Prisma where input type
- `PrismaOrderByInput<T>` - Prisma order by input
- `PrismaSelect<T, K>` - Prisma select type
- `PrismaInclude<T, K>` - Prisma include type
- `PrismaScalarFields<T>` - Extract scalar fields from model
- `PrismaRelationFields<T>` - Extract relation fields from model
- `PrismaFindManyArgs<T>`, `PrismaCreateArgs<T>`, `PrismaUpdateArgs<T>`, etc. - Typed query args

#### Ecosystem Integration - tRPC
- `TRPCRouterShape<T>` - tRPC router shape
- `TRPCProcedureInput<T>` - Extract input from tRPC procedure
- `TRPCProcedureOutput<T>` - Extract output from tRPC procedure
- `TRPCProcedureType` - tRPC procedure type (query/mutation/subscription)
- `TRPCExtractProcedureType<T>` - Extract procedure type
- `TRPCContext<T>` - tRPC context type
- `TRPCMiddleware<T>` - tRPC middleware type
- `TRPCQueries<T>`, `TRPCMutations<T>`, `TRPCSubscriptions<T>` - Get procedure keys by type

#### Performance Optimization
- `Simplify<T>` - Flatten intersection types
- `DeepSimplify<T>` - Recursively simplify nested types
- `FlattenType<T>` - Remove extra intersections
- `ReduceIntersection<T>` - Simplify intersection types
- `ReduceUnion<T>` - Remove duplicate union members
- `Compact<T>` - Remove never and undefined from objects
- `StripNever<T>` - Strip never properties from object
- `StripUndefined<T>` - Strip undefined properties from object
- `StripNull<T>` - Strip null properties from object
- `MergeAll<T>` - Merge all object types in array
- `PickNonNullable<T>` - Pick only non-nullable properties
- `PickNullable<T>` - Pick only nullable properties
- `TypeEq<A, B>` - Type equivalence check (optimized)
- `ExactType<T, Shape>` - Ensure exact shape match
- `Normalize<T>` - Remove optional markers
- `Optionalize<T>` - Make all properties optional

#### Lazy Type Evaluation
- `Lazy<T>` - Lazy type wrapper
- `ForceEvaluate<T>` - Force evaluate a lazy type
- `Deferred<T>` - Prevents immediate expansion
- `Thunk<T>` - Zero-argument function returning a type
- `LazyKey<T, K>` - Lazy property access
- `LazyConditional<C, T, F>` - Lazy conditional evaluation
- `LazyArrayElement<T>` - Lazy array element
- `LazyAwaited<T>` - Lazy promise unwrap
- `LazyReturnType<T>` - Lazy function return
- `LazyParameters<T>` - Lazy function parameters
- `LazyMap<T, F>` - Lazy map over array type

#### Type Caching
- `Cached<T>` - Cached type
- `CachedValue<T>` - Extract cached value
- `Memoized<T>` - Memoized type computation
- `TypeIdentity<T>` - Prevent structural typing
- `BrandCache<T, B>` - Brand cache for memoization
- `CachedIntersection<A, B>` - Cached intersection
- `CachedUnion<A, B>` - Cached union
- `CachedKeyOf<T>` - Cached keyof
- `CachedProperty<T, K>` - Cached property access
- `TypeCache<T>` - Type cache structure
- `FlushCache<T>` - Force re-computation

### Documentation
- Added Schema Validation guide (English & Chinese)
- Added Ecosystem Integration guide (English & Chinese)
- Added Performance Optimization guide (English & Chinese)
- Added API reference pages for all new types

---

## [1.1.0] - 2026-04-11

### Added

#### Conditional Types
- `If<C, T, F>` - Type-level if-then-else
- `Not<B>` - Logical NOT for boolean types
- `And<A, B>` - Logical AND for boolean types
- `Or<A, B>` - Logical OR for boolean types
- `Assert<T, U>` - Type constraint assertion

#### Brand Types
- `Brand<T, B>` - Create branded type for nominal typing
- `Unbrand<T>` - Extract underlying type from branded type
- `BrandedString<B>` - String branded type helper
- `BrandedNumber<B>` - Number branded type helper

#### Deep Path Operations
- `DeepOmit<T, P>` - Omit properties by path string
- `DeepPick<T, P>` - Pick properties by path string
- `DeepPickPaths<T, P>` - Deep pick for union paths
- `DeepOmitPaths<T, P>` - Deep omit for union paths

#### Enhanced Path Types
- `ValidPath<T, P>` - Check if path exists in type
- `ArrayPaths<T>` - Get paths including array indices
- `LeafPaths<T>` - Get paths to primitive values only
- `PathLength<P>` - Get number of path segments
- `ParentPath<P>` - Get parent path
- `PathLeaf<P>` - Get last segment of path

#### Key Utilities
- `Keys<T>` - Get all keys as literal union
- `RenameKeys<T, M>` - Rename keys based on mapping
- `PrefixKeys<T, P>` - Add prefix to all keys
- `SuffixKeys<T, S>` - Add suffix to all keys
- `PascalCaseKeys<T>` - Convert keys to PascalCase
- `KeysByValueType<T, V>` - Get keys by value type
- `FilterKeys<T, P>` - Get keys matching pattern

#### Function Utilities
- `Parameters<T>` - Get function parameters as tuple
- `ReturnType<T>` - Get function return type
- `NthParameter<T, N>` - Get Nth parameter type
- `AsyncReturnType<T>` - Extract async function return type
- `ThisParameterType<T>` - Get this parameter type
- `OmitThisParameter<T>` - Omit this parameter from function
- `IsFunction<T>` - Check if type is a function
- `IsAsyncFunction<T>` - Check if type is an async function
- `OptionalParameters<T>` - Make function parameters optional
- `AppendParameter<T, P>` - Append parameter to function
- `PrependParameter<T, P>` - Prepend parameter to function

#### Template Literal Utilities
- `ReplaceAll<S, From, To>` - Replace all occurrences
- `Replace<S, From, To>` - Replace first occurrence
- `Trim<S>` - Trim whitespace from both ends
- `TrimLeft<S>` - Trim whitespace from left
- `TrimRight<S>` - Trim whitespace from right
- `StringToArray<S>` - Convert string to array of characters
- `CapitalizeAll<S>` - Capitalize all words
- `UncapitalizeAll<S>` - Uncapitalize all words
- `StartsWith<S, P>` - Check if string starts with prefix
- `EndsWith<S, P>` - Check if string ends with suffix
- `StringLength<S>` - Get string length at type level
- `Repeat<S, N>` - Repeat string N times
- `PadStart<S, N, P>` - Pad string on the left
- `PadEnd<S, N, P>` - Pad string on the right

#### Record Utilities
- `DeepNullable<T>` - Make all properties nullable
- `DeepOptional<T>` - Make all properties optional
- `Immutable<T>` - Make all properties readonly
- `Mutable<T>` - Make all properties mutable
- `DeepNonNullable<T>` - Remove null/undefined from all properties
- `Exact<T, Shape>` - Ensure exact shape match
- `Required<T>` - Make all properties required
- `DeepRequiredProperties<T>` - Deep required with null/undefined handling
- `HasKeys<T, K>` - Check if object has specified keys
- `HasExactKeys<T, K>` - Check if object has exactly specified keys

#### Numeric Utilities
- `Inc<N>` - Increment number type
- `Dec<N>` - Decrement number type
- `Add<A, B>` - Add two number types
- `Subtract<A, B>` - Subtract two number types
- `GreaterThan<A, B>` - Check if A > B
- `LessThan<A, B>` - Check if A < B
- `Max<A, B>` - Maximum of two numbers
- `Min<A, B>` - Minimum of two numbers
- `IsEven<N>` - Check if number is even
- `IsOdd<N>` - Check if number is odd
- `Neg<N>` - Negate a number

### Testing
- Added 71 new type tests
- Total 162 tests passing
- Full type coverage validation

### Documentation
- Updated README with v1.1.0 features
- Updated ROADMAP.md with release status

---

## [1.0.0] - 2024-04-11

### Added

#### Core Operations
- `PickRequired<T, K>` - Make specified properties required
- `OmitRequired<T, K>` - Make properties except specified ones required
- `PickPartial<T, K>` - Make specified properties optional
- `OmitPartial<T, K>` - Make properties except specified ones optional

#### Tuple Operations
- `Head<T>` - Get first element of tuple
- `Last<T>` - Get last element of tuple
- `Tail<T>` - Get all elements except first
- `Init<T>` - Get all elements except last
- `Reverse<T>` - Reverse a tuple
- `Flatten<T>` - Flatten nested tuples
- `TupleLength<T>` - Get tuple length
- `IsEmptyTuple<T>` - Check if tuple is empty

#### Deep Operations
- `DeepPartial<T>` - Make all nested properties optional
- `DeepRequired<T>` - Make all nested properties required
- `DeepReadonly<T>` - Make all nested properties readonly
- `DeepMutable<T>` - Make all nested properties mutable

#### Type Guards
- `IsArray<T>` - Check if type is an array
- `IsTuple<T>` - Check if type is a tuple
- `IsEqual<X, Y>` - Check if two types are equal
- `IsAny<T>` - Check if type is `any`
- `IsNever<T>` - Check if type is `never`
- `IsUnknown<T>` - Check if type is `unknown`

#### Type Inference
- `Awaited<T>` - Unwrap Promise type recursively
- `ArrayElement<T>` - Get array element type
- `ValueOf<T>` - Get object value types
- `FunctionKeys<T>` - Get keys of function properties
- `NonFunctionKeys<T>` - Get keys of non-function properties
- `FirstParameter<T>` - Get first parameter type of function
- `FunctionOnly<T>` - Extract only function properties
- `DataOnly<T>` - Extract only non-function properties

#### Utility Types
- `Merge<T, U>` - Merge two types
- `NonNullable<T>` - Exclude null and undefined
- `Exclusive<T, K>` - Create mutually exclusive properties
- `NoNullish<T>` - Remove null/undefined from all properties
- `Nullable<T>` - Add null to type
- `Optional<T>` - Add undefined to type
- `Maybe<T>` - Add null and undefined to type
- `LoosePartial<T>` - Make all properties optional

#### Key Types
- `RequiredKeys<T>` - Get all required property keys
- `OptionalKeys<T>` - Get all optional property keys
- `WritableKeys<T>` - Get all writable keys
- `ReadonlyKeys<T>` - Get all readonly keys

#### Path Types
- `Paths<T>` - Get all nested property paths
- `PathValue<T, P>` - Get value type at path
- `SplitPath<S>` - Split path string into array

#### Literal Types
- `Literal` - All literal types union
- `LiteralString<T>` - Exact string literal
- `LiteralNumber<T>` - Exact number literal
- `LiteralBoolean<T>` - Exact boolean literal

#### String Case Conversion
- `CamelCase<S>` - Convert to camelCase
- `SnakeCase<S>` - Convert to snake_case (handles consecutive uppercase letters correctly)
- `CamelCaseKeys<T>` - Convert object keys to camelCase
- `SnakeCaseKeys<T>` - Convert object keys to snake_case

#### Advanced Types
- `AtLeastOne<T>` - Require at least one property
- `StrictExtract<T, U>` - Strictly extract matching types
- `StrictExclude<T, U>` - Strictly exclude types
- `UnionToIntersection<U>` - Convert union to intersection
- `UnionToTuple<T>` - Convert union to tuple

### Changed
- Improved `DeepPartial`, `DeepRequired`, `DeepReadonly` to properly handle arrays, Maps, Sets, and built-in types
- Fixed `SnakeCase` to correctly handle consecutive uppercase letters (e.g., `XMLParser` → `xml_parser`)

### Documentation
- Added comprehensive JSDoc comments for all types
- Added `@see` references to related types
- Added README in Chinese (README_CN.md)
