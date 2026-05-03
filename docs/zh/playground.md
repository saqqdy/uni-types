# 在线演练场

在浏览器中直接体验 `uni-types`，实时查看类型检查效果！

<TypePlayground />

## 如何使用

1. **编辑代码** - 在编辑器中修改 TypeScript 代码
2. **查看类型提示** - 将鼠标悬停在类型名称上查看定义
3. **检查错误** - 实时显示类型错误
4. **加载示例** - 点击示例按钮加载不同的代码示例

## 功能特性

- 🎯 **实时类型检查** - 输入时即可看到类型错误
- 💡 **智能提示** - 悬停查看类型定义
- 📦 **预加载类型** - 所有 uni-types 都可直接导入
- 🎨 **语法高亮** - 完整的 TypeScript 语法支持

## 可用类型 (2000+)

所有 `uni-types` 类型都可用：

### 核心操作

```typescript
import type {
  PickRequired, PickPartial, OmitRequired, OmitPartial
} from 'uni-types'
```

### 元组操作

```typescript
import type {
  Head, Last, Tail, Init, Reverse, Flatten, TupleLength, IsEmptyTuple
} from 'uni-types'
```

### 深度操作

```typescript
import type {
  DeepPartial, DeepRequired, DeepReadonly, DeepMutable, DeepOmit, DeepPick
} from 'uni-types'
```

### 品牌类型

```typescript
import type { Brand, Unbrand } from 'uni-types'
```

### 条件类型

```typescript
import type { If, Not, And, Or } from 'uni-types'
```

### 函数类型

```typescript
import type {
  Parameters, ReturnType, NthParameter, AsyncReturnType
} from 'uni-types'
```

### 键工具

```typescript
import type {
  RenameKeys, PrefixKeys, SuffixKeys, KeysByValueType
} from 'uni-types'
```

### 数字类型

```typescript
import type { Inc, Dec, Add, Subtract, Range } from 'uni-types'
```

### 路径工具

```typescript
import type {
  ValidPath, ArrayPaths, LeafPaths, PathLength
} from 'uni-types'
```

### 记录类型

```typescript
import type {
  DeepNullable, DeepOptional, Immutable, Mutable
} from 'uni-types'
```

### 模板字面量

```typescript
import type {
  ReplaceAll, Trim, StringLength, Repeat
} from 'uni-types'
```

### 类型判断

```typescript
import type {
  IsArray, IsTuple, IsEqual, IsAny, IsNever, IsUnknown
} from 'uni-types'
```

### 类型推导

```typescript
import type {
  Awaited, ArrayElement, ValueOf, FunctionKeys, NonFunctionKeys,
  FirstParameter, FunctionOnly, DataOnly
} from 'uni-types'
```

### 实用类型

```typescript
import type {
  Merge, NonNullable, Exclusive, NoNullish, Nullable, Optional,
  Maybe, LoosePartial, AtLeastOne, StrictExtract, StrictExclude,
  UnionToIntersection, UnionToTuple
} from 'uni-types'
```

### 键类型

```typescript
import type {
  RequiredKeys, OptionalKeys, WritableKeys, ReadonlyKeys
} from 'uni-types'
```

### 路径类型

```typescript
import type { Paths, PathValue, SplitPath } from 'uni-types'
```

### 字符串命名

```typescript
import type {
  CamelCase, SnakeCase, CamelCaseKeys, SnakeCaseKeys
} from 'uni-types'
```

### 算法

```typescript
import type {
  Sort, QuickSort, MergeSort, GCD, LCM, Factorial, Fibonacci, IsPrime,
  Find, FindIndex, Includes, IndexOf, LongestCommonPrefix,
  Reverse, Unique, Flatten, FlattenDeep, LevenshteinDistance
} from 'uni-types'
```

### 解析器

```typescript
import type {
  ParseJSON, StringifyJSON, IsValidJSON, ParseURL, QueryParams, ParseCSV
} from 'uni-types'
```

### 状态机

```typescript
import type { StateMachine, State, Transition } from 'uni-types'
```

### 数据结构

```typescript
import type {
  Tree, TreeNode, Graph, LinkedList, Stack, Queue
} from 'uni-types'
```

### HTTP & API

```typescript
import type { HTTPMethod, HTTPStatus, Route, Middleware } from 'uni-types'
```

### 数据库

```typescript
import type { SQLType, QueryBuilder, Migration } from 'uni-types'
```

### 并发

```typescript
import type { Task, Pipeline, Scheduler, WorkerPool } from 'uni-types'
```

### 互操作

```typescript
import type {
  ToTypeFest, ToTsToolbelt, IsCompatible
} from 'uni-types'
```

### 测试

```typescript
import type {
  ExpectTrue, ExpectEqual, TypeCoverage, TypeComplexity
} from 'uni-types'
```

### 断言

```typescript
import type {
  AssertEqual, AssertExtends, AssertKeyof, AssertNotNil,
  RequireKeys, MakeOptional, RequireAtLeastOne, RequireExactlyOne,
  AssertHasProperty, RequireNotNullish, RequireArray, RequireFunction
} from 'uni-types'
```

### 异步工具

```typescript
import type {
  PromiseValue, PromiseResult, IsPromise, UnwrapPromise, WrapPromise,
  PromiseSettledResult
} from 'uni-types'
```

### 集合类型

```typescript
import type {
  TypeSet, SetAdd, SetRemove, SetHas, SetUnion, SetIntersection,
  SetDifference, SetIsEmpty, SetIsSubset,
  TypeMap, MapGet, MapSet, MapHas, MapDelete, MapKeys, MapValues,
  ListLength, ListReverse, ListConcat, ListFilter, ListFind, ListIncludes
} from 'uni-types'
```

### 对象操作

```typescript
import type {
  ObjectMap, ObjectFilter, ObjectPickByType, ObjectOmitByType, ObjectInvert,
  DeepMerge, DeepAssign, DeepDefaults,
  HasProperty, HasProperties, HasMethod
} from 'uni-types'
```

### 模式匹配

```typescript
import type {
  Match, Case, Default, TypeFilter, TypeFind, TypeIncludes
} from 'uni-types'
```

### 字符串操作

```typescript
import type {
  Split, Join, KebabCase, PascalCase, IsEmail, IsUUID, IsURL, Chunk
} from 'uni-types'
```

### 性能优化

```typescript
import type {
  Simplify, DeepSimplify, Cached, CachedValue, Memoized,
  Lazy, ForceEvaluate, Deferred, FlattenType,
  StripNever, StripUndefined, Compact
} from 'uni-types'
```

### Schema 验证

```typescript
import type {
  RuntimeGuard, GuardedType, HasRuntimeCheck, CompositeGuard,
  ZodOutput, ZodInput, IsZodSchema, ZodShape, ZodArrayElement,
  YupOutput, YupInput, IsYupSchema
} from 'uni-types'
```

### 生态系统集成

```typescript
import type {
  ComponentProps, PropsWithChildren, PrismaCreateInput
} from 'uni-types'
```

### 权限与授权 *(v1.5.0)*

```typescript
import type {
  Permission, PermissionSet, Role, RoleSet,
  Policy, PolicyRule, PolicyEffect,
  RBAC, ABAC, ACL, AccessControl,
  Resource, Action, AuthorizationProvider
} from 'uni-types'
```

### 缓存策略 *(v1.5.0)*

```typescript
import type {
  Cache, CacheEntry, CacheOptions, CacheStats,
  LRUCache, LFUCache, TTLCache, FIFOCache, ARCCache,
  DistributedCache, CacheAside, ReadThroughCache,
  WriteThroughCache, WriteBehindCache
} from 'uni-types'
```

### 配置管理 *(v1.5.0)*

```typescript
import type {
  Config, ConfigField, ConfigLoader, ConfigSchema,
  EnvConfig, FeatureFlag, FeatureFlagConfig,
  RemoteConfigProvider, Secret, SecretProvider
} from 'uni-types'
```

### 事件驱动架构 *(v1.5.0)*

```typescript
import type {
  EventBus, EventStream, Command, CommandBus,
  Query, QueryBus, Saga, SagaStep,
  MessageQueue, EventStore, DeadLetterQueue
} from 'uni-types'
```

### GraphQL 集成 *(v1.5.0)*

```typescript
import type {
  GraphQLSchema, GraphQLType, GraphQLScalar,
  GraphQLEnum, GraphQLInput, GraphQLObject,
  GraphQLField, GraphQLResolver, GraphQLContext,
  GraphQLResult, GraphQLError
} from 'uni-types'
```

### 日志与可观测性 *(v1.5.0)*

```typescript
import type {
  Logger, LogLevel, LogEntry, Metric, Counter, Gauge,
  Histogram, Tracer, Span, Trace, Monitor, Alert,
  HealthIndicator, HealthCheckResult
} from 'uni-types'
```

### 微服务架构 *(v1.5.0)*

```typescript
import type {
  Microservice, ServiceConfig, ServiceRegistry,
  ServiceInstance, CircuitBreaker, LoadBalancer,
  APIGateway, HealthReport, RateLimit
} from 'uni-types'
```

### 验证规则 *(v1.5.0)*

```typescript
import type {
  ValidationRule, Validator, ValidatorResult, ValidationError,
  StringFieldValidator, NumberFieldValidator,
  MinLength, MaxLength, MinValue, MaxValue,
  Pattern, Sanitizer
} from 'uni-types'
```

### WebSocket 与实时通信 *(v1.5.0)*

```typescript
import type {
  WebSocketConfig, WebSocketMessage, EventEmitter,
  PubSub, Publisher, Subscriber, RealTimeChannel,
  Stream, StreamReader, StreamWriter
} from 'uni-types'
```

### 工作流引擎 *(v1.5.0)*

```typescript
import type {
  Workflow, WorkflowInstance, WorkflowStep,
  WorkflowTransition, WorkflowExecution, WorkflowHistory,
  WorkflowEngine, RetryPolicy, BPMNProcess, BPMNTask,
  BPMNGateway, BPMNEvent
} from 'uni-types'
```

### AI/ML 类型 *(v1.6.0)*

```typescript
import type {
  Tensor, TensorShape, TensorDType,
  Model, ModelConfig, Layer, LayerType,
  Optimizer, LossFunction, MLMetric,
  Dataset, DataLoader, Batch,
  InferenceResult, Prediction, Confidence
} from 'uni-types'
```

### 函数式编程 *(v1.6.0)*

```typescript
import type {
  Functor, Monad, Applicative,
  Maybe, Some, None, Either, Left, Right,
  IO, Reader, Writer, State,
  Result, Ok, Err, Lens,
  Semigroup, Monoid, Compose, Pipe, Curry
} from 'uni-types'
```

### 类型级编译器 *(v1.6.0)*

```typescript
import type {
  ASTNode, ASTNodeType, Token, TokenType,
  Parser, ParserResult, ParseError,
  CodeGenerator, GeneratedCode, SourceMap,
  Transformer, Formatter
} from 'uni-types'
```

### 分布式系统 *(v1.6.0)*

```typescript
import type {
  Consensus, ConsensusState, LeaderElection,
  Replica, ReplicationStrategy, Partition,
  PartitionStrategy, ConsistencyLevel,
  DistributedLock, TwoPhaseCommit, TransactionState,
  FailureDetector, Heartbeat, Membership
} from 'uni-types'
```

### 安全类型 *(v1.6.0)*

```typescript
import type {
  Authentication, AuthType, AuthStatus,
  Session, SessionId, Encryption, EncryptionAlgorithm,
  Key, KeyPair, Hash, HashAlgorithm,
  Signature, SignatureAlgorithm, JWT, OAuthToken, CSRFToken
} from 'uni-types'
```

### 国际化 *(v1.6.0)*

```typescript
import type {
  Locale, LocaleCode, LanguageCode, CountryCode,
  Translation, TranslationKey, PluralForm,
  Currency, TimeZone, DateFormat, NumberFormat, Direction
} from 'uni-types'
```

### 测试框架 *(v1.6.0)*

```typescript
import type {
  TestSuite, TestCase, TestResultType,
  Assertion, AssertionResult, Mock, Spy,
  Fixture, Coverage, CoverageReport,
  Snapshot, Benchmark, BenchmarkResult
} from 'uni-types'
```

### 插件系统 *(v1.6.0)*

```typescript
import type {
  Plugin, PluginConfig, PluginContext, PluginLifecycle,
  Hook, HookResult, Extension, ExtensionPoint,
  Middleware, MiddlewarePipeline, Module, Registry
} from 'uni-types'
```

### 类型推断 *(v1.6.0)*

```typescript
import type {
  Infer, InferReturn, InferArgs, InferPromise,
  ExtractFunction, ExtractClass, ExtractConstructor,
  Reconstruct, Narrow, Widen,
  IsAny, IsNever, IsUnknown, IsFunction, IsArray, IsUnion,
  Equals, Extends, TypeName, TypeCategory
} from 'uni-types'
```

### 性能监控 *(v1.6.0)*

```typescript
import type {
  Performance, PerformanceMetric, Timing,
  MemoryUsage, MemoryMetric, CPUUsage,
  Profiler, ProfileResult, TraceSpan,
  PerformanceTrace, PerformanceAlert
} from 'uni-types'
```

### 类型可视化 *(v1.7.0)*

```typescript
import type {
  TypeDiagram, TypeTree, TypeGraph, TypeNode,
  Debug, Inspect, Pretty, TypeDiff,
  GenerateDocs, DocTemplate, MarkdownOutput
} from 'uni-types'
```

### 类型级密码学 *(v1.7.0)*

```typescript
import type {
  HashAlgorithm, SHA256, SHA512, MD5,
  EncryptionAlgorithm, AES, RSA,
  Key, KeyPair, EncryptedData, DecryptedData,
  JWT, JWTPayload, JWTHeader, Signature
} from 'uni-types'
```

### 类型级日期时间 *(v1.7.0)*

```typescript
import type {
  CalendarDate, DateFormat, TimeFormat,
  Duration, DurationUnit, AddDays, AddMonths,
  DateDiff, DateRange, Timestamp, UnixTimestamp
} from 'uni-types'
```

### 类型装饰器 *(v1.7.0)*

```typescript
import type {
  Decorator, DecoratorContext, DecoratorResult,
  Cached, MemoizeOptions, Memoized,
  Deprecated, Experimental, Seal, Frozen,
  Retry, RetryOptions, Throttle, Debounce
} from 'uni-types'
```

### 代码生成模板 *(v1.7.0)*

```typescript
import type {
  Template, TemplateString, TemplateContext,
  GeneratedType, GeneratedInterface, GeneratedTypeAlias,
  CodeBuilder, CodeSegment, CodeBlock
} from 'uni-types'
```

### 类型安全配置 *(v1.7.0)*

```typescript
import type {
  ConfigSchema, ConfigField, ConfigBuilder,
  EnvConfig, EnvVar, EnvPrefix,
  Secret, SecretRef, SecretProvider
} from 'uni-types'
```

### 类型级高级数学 *(v1.7.0)*

```typescript
import type {
  Abs, Sqrt, Power, Log,
  Fibonacci, Factorial, IsPrime, GCD, LCM,
  Trigonometric, Sin, Cos, Tan
} from 'uni-types'
```

### 类型级排序搜索 *(v1.7.0)*

```typescript
import type {
  QuickSort, MergeSort, BinarySearch,
  SearchFind, SearchIncludes, SearchIndexOf,
  Chunk, Unique, Difference, Intersection
} from 'uni-types'
```

### 元编程工具 *(v1.7.0)*

```typescript
import type {
  MetaType, MetaProperty, MetaFunction,
  Reflect, Satisfies, TypeAtPath,
  MergeTypes, OmitTypeAtPath, PickTypeAtPath,
  Transform, SetTypeAtPath, TypeInfo, TypeName
} from 'uni-types'
```

### 框架集成 *(v1.7.0)*

```typescript
import type {
  // Remix
  RemixLoader, RemixAction, RemixRoute, RemixLoaderData,
  // Astro
  AstroProps, AstroFrontmatter, AstroLayout,
  // SvelteKit
  SvelteKitLoad, SvelteKitAction, SvelteKitPage,
  // Express
  ExpressHandler, ExpressRequest, ExpressResponse,
  // Fastify
  FastifyHandler, FastifyRequest, FastifyReply,
  // Hono
  HonoHandler, HonoContext, HonoMiddleware
} from 'uni-types'
```

### 类型推断引擎 *(v1.8.0)*

```typescript
import type {
  InferEngine, InferContext, InferResult, InferError,
  Deduce, DeduceFrom, DeduceAll, DeduceDeep,
  Constraint, Solve, Unify, Substitution,
  TypeVar, FreshVar, SubstituteVar, FreeVars,
  Polymorphic, Monomorphize, Instantiate, Generalize,
  Kind, KindError, KindCheck, HigherKind,
  Effect, EffectRow, Effectful, Pure, Handle
} from 'uni-types'
```

### 类型级数据库操作 *(v1.8.0)*

```typescript
import type {
  QueryBuilder, SelectBuilder, InsertBuilder, UpdateBuilder, DeleteBuilder,
  TableSchema, ColumnSchema, IndexSchema, RelationSchema,
  SQLQuery, SQLExpression, SQLCondition, SQLJoin,
  SelectQuery, InsertQuery, UpdateQuery, DeleteQuery,
  Transaction, TransactionResult, IsolationLevel,
  Migration, MigrationUp, MigrationDown, MigrationHistory,
  Model, ModelRelation, ModelScope, ModelHook
} from 'uni-types'
```

### 类型级网络协议 *(v1.8.0)*

```typescript
import type {
  Protocol, ProtocolVersion, ProtocolEncoding, ProtocolMessage,
  HTTPRequest, HTTPResponse, HTTPHeaders, HTTPBody,
  WSMessage, WSFrame, WSEvent, WSHandler,
  gRPCService, gRPCMethod, gRPCRequest, gRPCResponse,
  TCPPacket, UDPPacket, SocketAddress,
  ProtoMessage, ProtoField, ProtoEnum, ProtoService,
  MQTTPacket, MQTTTopic, MQTTPayload, MQTTQoS
} from 'uni-types'
```

### 类型级文件系统 *(v1.8.0)*

```typescript
import type {
  Path, RelativePath, AbsolutePath, PathSegment,
  File, FileContent, FileType, FilePermission,
  Directory, DirectoryEntry, DirectoryTree, GlobPattern,
  FileWatch, WatchEvent, WatchHandler,
  VirtualFS, VFSNode, VFSMount,
  Archive, ArchiveEntry, ArchiveFormat,
  FileStats, FileMetadata, Timestamp
} from 'uni-types'
```

### 类型级调试工具 *(v1.8.0)*

```typescript
import type {
  DebugInfo, DebugSymbol, DebugContext,
  Breakpoint, BreakpointCondition, BreakpointAction,
  StackTrace, StackFrame, CallStack,
  Variable, VariableValue, VariableType,
  WatchExpression, WatchResult, WatchCallback,
  MemoryRegion, MemoryAddress, MemoryValue,
  DebugProtocol, DebugMessage, DebugCommand, DebugEvent,
  REPL, REPLCommand, REPLResult
} from 'uni-types'
```

### 类型级优化器 *(v1.8.0)*

```typescript
import type {
  Optimization, OptimizationPass, OptimizationResult,
  OptimizationRule, RulePattern, RuleReplacement, RuleCondition,
  TreeShake, ShakeResult, UsedExports,
  DeadCode, EliminateDeadCode, LiveCode,
  Inline, InlineCandidate, InlineResult, InlineThreshold,
  ConstantFold, FoldableExpression, FoldedValue,
  MinifyType, MinificationOptions, MinifiedType,
  PerformanceHint, HintLevel, HintSuggestion
} from 'uni-types'
```

### 类型级文档生成器 *(v1.8.0)*

```typescript
import type {
  Documentation, DocEntry, DocSection, DocPage,
  JSDoc, JSDocTag, JSDocParam, JSDocReturn, JSDocExample,
  APIDoc, APIEndpoint, APIParameter, APIResponse,
  TypeDoc, TypeDocProperty, TypeDocMethod, TypeDocExample,
  DocOutput, DocFormat, DocTheme,
  DocSearch, SearchResult, SearchIndex,
  DocNavigation, DocSidebar, DocBreadcrumb
} from 'uni-types'
```

### 类型级包管理器 *(v1.8.0)*

```typescript
import type {
  Package, PackageName, PackageVersion, PackageMeta,
  Dependency, DependencyGraph, DependencyTree, DependencyVersion,
  Resolution, ResolutionResult, ResolutionError, ResolveStrategy,
  LockFile, LockEntry, LockFormat,
  Registry, RegistryPackage, RegistryVersion, RegistryConfig,
  Workspace, WorkspaceConfig, WorkspaceDependency, WorkspaceGraph,
  PackagePlugin, PluginHook, PluginConfig,
  PackageScript, ScriptRunner, ScriptResult
} from 'uni-types'
```

### 量子计算类型 *(v1.9.0)*

```typescript
import type {
  QubitState, QubitAmplitude, Qubit, QubitArray,
  SingleQubitGate, TwoQubitGate, ThreeQubitGate, MultiQubitGate,
  Hadamard, PauliX, PauliY, PauliZ, CNOT, Toffoli,
  QuantumGate, QuantumCircuit, QuantumRegister, ClassicalRegister,
  QuantumState, StateVector, DensityMatrix,
  BellState, GHZState, EntangledPair,
  QuantumAlgorithm, Grover, Shor, QFT, VQE, QAOA,
  QuantumResult, QuantumTeleportation, SuperdenseCoding,
  QECCode, SurfaceCode, LogicalQubit,
  QuantumBackend, QuantumHardware, QuantumJob,
  BlochSphereCoordinates, Fidelity, QuantumVolume
} from 'uni-types'
```

### 游戏开发类型 *(v1.9.0)*

```typescript
import type {
  EntityId, Entity, EntityComponent, EntitySystem, EntityQuery,
  Component, Position2D, Position3D, Velocity, TransformComponent,
  SpriteComponent, AnimationComponent, HealthComponent,
  GameState, GameAction, GameReducer, GameStore,
  KeyState, KeyboardState, MouseState, GamepadState,
  InputState, TouchState, TouchPoint,
  PhysicsBody, ColliderShape, PhysicsMaterial, Collision,
  Renderable, Material, Shader, Texture, Mesh, Camera,
  AudioClip, AudioSource, AudioListener, SoundEffect,
  Scene, SceneNode, SceneGraph, Vector2D, Vector3D,
  UIElement, UIText, UIButton, UIProgress,
  GameTime, Timer, Tween, EasingFunction,
  Level, SpawnPoint, Checkpoint, Objective
} from 'uni-types'
```

### 区块链类型 *(v1.9.0)*

```typescript
import type {
  BlockHash, BlockHeader, BlockBody, Block, Withdrawal,
  TransactionHash, TransactionType, Transaction,
  LegacyTransaction, EIP2930Transaction, EIP1559Transaction, EIP4844Transaction,
  TransactionSignature, AccessList, TransactionReceipt,
  SmartContract, ContractABI, ABIFunction, ABIEvent, ABIParameter,
  ContractMethod, ContractEvent,
  Address, ChecksumAddress, PublicKey, PrivateKey, Signature,
  TokenInfo, FungibleTokenBalance, TokenAllowance,
  NonFungibleToken, MultiToken, TokenBalance,
  WalletAccount, WalletConnectionStatus, WalletConnection, WalletProvider,
  Chain, ChainId, NetworkConfig, EVMChainId,
  GasEstimate, GasPrice, GasLimit, TransactionFee, GasFees,
  ConsensusMechanism, ValidatorInfo, StakingInfo,
  Log, LogFilter, JsonRpcProvider, JsonRpcRequest,
  ContractDeployOptions, ContractDeployResult,
  ENSName, ENSResolver,
  PoolPair, LiquidityPool, SwapParams
} from 'uni-types'
```

### 自然语言处理类型 *(v1.9.0)*

```typescript
import type {
  TokenType, Token, TokenStream, TokenizerOptions,
  Sentence, Paragraph, Document, Corpus,
  ParseNode, ParseTree, GrammarRule, Grammar,
  DependencyRelation, DependencyRelationType,
  LanguageModel, NLMTask, Vocabulary, SpecialTokens,
  Embedding, EmbeddingVector, WordEmbedding, DocumentEmbedding,
  SemanticRole, SemanticFrame, FrameElement,
  EntityMention, EntityType, RelationMention, RelationType,
  Morpheme, MorphemeType, MorphologicalFeatures, PartOfSpeech,
  SentimentScore, SentimentLabel, SentimentResult, EmotionResult,
  Locale, LanguagePair, TranslationResult, TranslationOptions,
  NormalizationOptions, TextChunk, ChunkingOptions,
  TermIndex, TermInfo, PostingListEntry,
  ClassificationResult, TopicModelingResult,
  QAResult, QAOptions
} from 'uni-types'
```

### 图形学类型 *(v1.9.0)*

```typescript
import type {
  Color, RGB, RGBA, HSL, HSLA, HSV, HexColor, ColorFormat,
  ColorStop, GradientType, Gradient,
  Vector2, Vector3, Vector4, Point2D, Point3D,
  Size2D, Size3D, Rect, Bounds, Ray, Plane,
  Matrix2x2, Matrix3x3, Matrix4x4, Matrix4x4Flat,
  TransformMatrix, DecomposedTransform, Quaternion,
  Translation, Rotation, Scale, Transform,
  Point, Line, LineStrip, Triangle, Quad, Polygon,
  Circle, Ellipse, Rectangle, Sphere, Box, Cylinder, Cone, Capsule, Torus,
  VertexAttribute, VertexBufferLayout, VertexBuffer, IndexBuffer,
  UniformBuffer, StorageBuffer, GPUShaderStageFlags,
  ShaderLanguage, ShaderStage, VertexShader, FragmentShader, ComputeShader,
  ShaderProgram, BindGroupLayout,
  TextureFormat, TextureDimension, TextureUsage,
  TextureDescriptor, TextureViewDescriptor, SamplerDescriptor,
  RenderPassDescriptor, ColorAttachment, DepthStencilAttachment,
  RenderPipelineDescriptor, PrimitiveState, DepthStencilState,
  BlendState, BlendFactor, CompareFunction,
  LightType, DirectionalLight, PointLight, SpotLight, AmbientLight,
  MaterialBase, PBRMaterial, UnlitMaterial, PhongMaterial
} from 'uni-types'
```

### 音频处理类型 *(v1.9.0)*

```typescript
import type {
  AudioSample, AudioBufferData, AudioChannel,
  SampleRate, BitDepth, SampleFormat,
  WaveformType, ADSREnvelope, Envelope, WaveformOptions,
  Frequency, NoteName, Octave, MIDINoteNumber, NotePitch,
  MusicalInterval, SemitoneInterval,
  AudioEffectBase, ReverbEffect, DelayEffect, FilterEffect,
  CompressorEffect, EqualizerEffect, DistortionEffect,
  ChorusEffect, FlangerEffect, PhaserEffect, TremoloEffect, LimiterEffect,
  MIDINote, MIDIEvent, MIDISequence, MIDITrack,
  OscillatorOptions, LFOOptions, AudioSourceNode, SynthVoice, SynthesizerPatch,
  FFTResult, Spectrum, Spectrogram, WaveformAnalysis,
  PitchDetectionResult, BeatDetectionResult, AudioFeatures,
  AudioFormat, AudioEncodingOptions, AudioMetadata,
  AudioNodeConnection, AudioGraph, AudioGraphNode,
  SpatialPosition, SpatialOrientation, SpatialPannerOptions
} from 'uni-types'
```

### 动画类型 *(v1.9.0)*

```typescript
import type {
  AnimationTarget, AnimationDuration, AnimationFrame, AnimationTimeline,
  AnimationPlaybackState, AnimationDirection, AnimationFillMode,
  AnimationBase, Animation,
  KeyframeBase, Keyframe, KeyframeInterpolation, KeyframeSequence,
  EasingFunction, EasingType, EasingPreset, CubicBezier, StepsEasing,
  Transition, TransitionProperty, TransitionDuration, TransitionShorthand,
  SpringConfig, SpringState, SpringPreset,
  SpriteSheet, SpriteFrame, SpriteAnimationDef, SpriteAnimation,
  MorphTarget, MorphWeights, MorphAnimation,
  Skeleton, Bone, BoneTransform, Joint, Pose,
  AnimationState, AnimationTransition, AnimationLayer,
  AnimationBlendTree, AvatarMask,
  IKChain, IKTarget, IKSolverType, IKSolverConfig,
  AnimationTrack, ExtrapolationMode, AnimationClip, AnimationEvent,
  AnimationController, AnimationParameters, AnimationParameterValue,
  InterpolateFunction, AnimationOptions
} from 'uni-types'
```

### 错误处理类型 *(v1.9.0)*

```typescript
import type {
  ErrorType, ErrorMessage, ErrorStack, ErrorCode, ErrorBase,
  CustomError, ErrorSeverity,
  Result, Success, Failure, Ok, Err, ResultMatcher, AsyncResult,
  Try, TryResult, TryCatchResult, CatchHandler, FinallyHandler,
  Either, Left, Right, EitherMatcher,
  Option, Some, None, OptionMatcher, NullableOption,
  ErrorChain, ChainLink, ChainContext,
  RecoveryStrategy, RecoveryOptions, RecoveryResult, RetryConfig,
  ValidationError, ValidationErrors, FieldError, ValidationResult,
  NetworkError, AuthenticationError, AuthorizationError,
  NotFoundError, ConflictError, TimeoutError, RateLimitError,
  ErrorHandler, GlobalErrorHandler, ErrorBoundaryProps,
  ErrorFactory, ErrorInstance, ErrorLog,
  AssertionResult, AssertionFunction, AssertionError,
  Panic, FatalError, ExpectedErrors, BusinessError, SystemError
} from 'uni-types'
```

### 事件系统类型 *(v1.9.0)*

```typescript
import type {
  EventType, EventPayload, EventTimestamp, EventId,
  Event, TypedEvent, EventMap, EventConstructor,
  EventEmitter, EventHandler, EventListener, EventSubscription,
  EventBus, BusEvent, BusSubscription, EventBusMiddleware,
  EventDispatcher, DispatchResult, DispatchError,
  EventQueue, QueuedEvent, QueuePriority, QueueConfig,
  Subscription, SubscriptionOptions, SubscriptionGroup,
  EventPattern, PatternMatch, PatternMatcher, PatternSubscription,
  EventAggregator, AggregatedEvent, AggregationType,
  EventHistory, HistoryEntry, ReplayOptions, ReplayResult,
  PropagationPhase, PropagationPath, PropagationController,
  SyncEventHandler, AsyncEventHandler, ConditionalHandler,
  EventTarget, DomainEvent, DomainEventHandler,
  HandlerDecoratorOptions, EventMetadata,
  EventNameFromHandler, PayloadFromEvent, EventHandlerMap
} from 'uni-types'
```

### 响应式编程类型 *(v1.9.0)*

```typescript
import type {
  Observable, Observer, PartialObserver, Subscription,
  Subject, BehaviorSubject, ReplaySubject, AsyncSubject,
  OperatorFunction, UnaryFunction, OperatorName,
  MapOperator, FilterOperator, ReduceOperator,
  TakeOptions, DebounceOptions, ThrottleOptions, RetryOptions,
  Stream, StreamValue, StreamError,
  Signal, ReadonlySignal, WritableSignal, SignalValue,
  Computed, Effect, EffectOptions, SignalOptions,
  Scheduler, SchedulerAction, SchedulerLike,
  BackpressureStrategy, BackpressureConfig, BackpressureState,
  Flow, FlowState, FlowController, ColdFlow, HotFlow,
  Channel, ChannelBuffer, BufferedChannel, SelectableChannel,
  CombineLatest, Zip, ForkJoinResult,
  ReactivePrimitive, ReactiveValue, ReactiveStore,
  StoreAction, StoreReducer, StoreMiddleware,
  FromEvent, FromPromise, IntervalObservable, TimerObservable
} from 'uni-types'
```

## 示例代码

以下是一个展示各种功能的综合示例：

```typescript
import type {
  PickRequired, DeepPartial, DeepReadonly, Sort, GCD, Factorial,
  IsArray, IsTuple, IsEqual, ObjectPickByType, Split, Join,
  CamelCase, SnakeCase, Paths, PathValue, AssertEqual,
  Microservice, ServiceConfig, CircuitBreaker, Cache,
  LRUCache, EventBus, Saga, Logger, LogLevel,
  Workflow, WorkflowStep, RBAC, Permission, Role,
  // v1.6.0
  Tensor, Model, Layer, Optimizer,
  Maybe, Either, Result, Lens,
  Infer, InferReturn, Equals, TypeName,
  // v1.7.0
  TypeDiagram, TypeTree, Debug, Inspect, Pretty,
  HashAlgorithm, SHA256, EncryptionAlgorithm, Key,
  CalendarDate, DateFormat, Duration, AddDays,
  Decorator, Cached, Memoized, Deprecated,
  Template, TemplateString, GeneratedType,
  ConfigSchema, ConfigBuilder, EnvConfig,
  RemixLoader, SvelteKitLoad, ExpressHandler,
  Abs, Sqrt, Power, Fibonacci, IsPrime
} from 'uni-types'

// 核心操作 - 将属性变为必需
interface User {
  name?: string
  age?: number
  email: string
}
type RequiredUser = PickRequired<User, 'name' | 'age'>

// 深度操作 - 嵌套对象可选
interface Config {
  database: {
    host: string
    port: number
    credentials: {
      user: string
      password: string
    }
  }
}
type PartialConfig = DeepPartial<Config>

// 类型级别算法
type SortedNumbers = Sort<[3, 1, 4, 1, 5, 9, 2, 6]>
type GcdResult = GCD<48, 18>
type FactorialResult = Factorial<5>

// 类型判断
type ArrayCheck = IsArray<string[]>
type TupleCheck = IsTuple<[1, 2, 3]>
type EqualCheck = IsEqual<string, string>

// 对象操作 - 按类型选取
interface MixedObject {
  name: string
  count: number
  active: boolean
  callback: () => void
}
type OnlyStrings = ObjectPickByType<MixedObject, string>
type OnlyNumbers = ObjectPickByType<MixedObject, number>

// 字符串操作
type SplitResult = Split<'a-b-c', '-'>
type JoinResult = Join<['a', 'b', 'c'], '-'>
type CamelResult = CamelCase<'hello-world'>
type SnakeResult = SnakeCase<'helloWorld'>

// 路径工具
type AllPaths = Paths<{ a: { b: { c: string } } }>
type ValueAtPath = PathValue<{ a: { b: { c: string } } }, 'a.b.c'>

// 类型断言 - 编译时验证
type TestAssertion = AssertEqual<string, string> // string
type TestAssertion2 = AssertEqual<string, number> // never

// 验证阶乘
type VerifyFactorial = AssertEqual<Factorial<5>, 120>

// v1.5.0 - 微服务架构
const orderService: Microservice = {
  name: 'order-service',
  version: '1.0.0',
  config: {
    name: 'order-service',
    version: '1.0.0',
    port: 3000,
    host: '0.0.0.0',
    env: 'production'
  },
  start: async () => { /* 启动服务器 */ },
  stop: async () => { /* 优雅关闭 */ },
  health: async () => ({ status: 'healthy', timestamp: new Date(), service: 'order-service', version: '1.0.0', uptime: 0, checks: {} })
}

// v1.5.0 - RBAC 权限控制
interface AppPermission extends Permission<'orders:read' | 'orders:write' | 'users:admin'> {
  resource: 'orders' | 'users'
  action: 'create' | 'read' | 'update' | 'delete'
}

// v1.5.0 - 日志配置
const loggerConfig: LoggerConfig = {
  level: 'info',
  format: 'json',
  transports: [{ type: 'console' }]
}

// v1.6.0 - AI/ML 类型
type ImageTensor = Tensor<[224, 224, 3], 'float32'>
type CNNModel = Model<ImageTensor, { label: string; confidence: number }>

// v1.6.0 - 函数式编程
type OptionalValue = Maybe<string> // Some<string> | None
type ValidationResult = Either<Error, string> // Left<Error> | Right<string>
type OperationResult = Result<Data, Error> // Ok<Data> | Err<Error>

// v1.6.0 - 类型推断
type PromiseValue = Infer<Promise<string>> // string
type ReturnValue = InferReturn<() => number> // number
type AreEqual = Equals<string, string> // true
type Name = TypeName<number> // 'number'

// v1.7.0 - 类型可视化
type DebugUser = Debug<User>
type PrettyConfig = Pretty<Config>
type DiffResult = TypeDiff<{ a: string }, { a: string; b: number }>
type Doc = GenerateDocs<User>

// v1.7.0 - 密码学类型
interface SecureToken extends JWT<{ userId: string; role: string }> {}
type HashAlgo = HashAlgorithm // 'sha256' | 'sha512' | ...
type EncryptedPayload = EncryptedData<'aes-256-gcm'>

// v1.7.0 - 日期时间类型
type Today = CalendarDate<'gregorian'>
type Formatted = DateFormat<'YYYY-MM-DD'>
type Added = AddDays<'2024-01-01', 7>
type Duration2 = Duration<'2h30m'>

// v1.7.0 - 装饰器类型
const memoConfig: MemoizeOptions = { ttl: 60000 }
const retryConfig: RetryOptions = { maxRetries: 3, delay: 1000 }

// v1.7.0 - 配置构建器
interface AppConfig extends ConfigSchema<{
  port: ConfigField<number>
  host: ConfigField<string>
  debug: ConfigField<boolean>
}> {}

// v1.7.0 - 框架集成
type RemixData = RemixLoaderData<RemixRoute<{ user: User }, never>>
type ExpressReq = ExpressRequest<{ id: string }, { name: string }>
type SvelteData = SvelteKitPage<{ slug: string }, { post: Post }>

// v1.7.0 - 高级数学
type AbsValue = Abs<-5> // 5
type SqrtValue = Sqrt<16> // 4
type FibResult = Fibonacci<10> // 55
type PrimeCheck = IsPrime<17> // true

// v1.7.0 - 排序搜索
type SortedTuple = QuickSort<[3, 1, 4, 1, 5]>
type Found = SearchFind<[{ a: 1 }, { b: 2 }], { b: 2 }>
type Chunks = Chunk<[1, 2, 3, 4, 5], 2>

// v1.8.0 - 类型推断引擎
interface InferContext {
  typeVars: Map<string, TypeVar>
  constraints: Constraint[]
}
type InferredType = Deduce<{ a: string; b: number }>
type Unified = Unify<string, number>

// v1.8.0 - 网络协议
interface APIRequest extends HTTPRequest<{ method: 'GET' }, { page: number }> {}
interface WebSocket extends WSMessage<{ type: 'text' }, { data: string }> {}

// v1.8.0 - 文件系统
type ConfigPath = Path<'src/config/index.ts'>
type SourceFile = File<{ content: string; encoding: 'utf-8' }>
type ProjectTree = DirectoryTree<{ src: { index: File<{ content: string }> } }>

// v1.8.0 - 调试
interface DebugSession {
  breakpoints: Breakpoint[]
  callStack: CallStack
  variables: Map<string, Variable>
}

// v1.8.0 - 优化器
interface OptimizationPass {
  name: string
  rules: OptimizationRule[]
  enabled: boolean
}

// v1.8.0 - 文档生成器
interface TypeDocumentation extends TypeDoc<{
  description: string
  params: Record<string, string>
  returns: string
}> {}

// v1.8.0 - 包管理器
interface ProjectWorkspace extends Workspace<{
  packages: Map<string, Package>
  dependencies: DependencyGraph
}> {}

// v1.9.0 - 量子计算
type QuantumState = QubitState<{ alpha: number; beta: number }>
type BellPair = BellState<'phi_plus'>
type GateApplied = ApplyGate<Hadamard, Qubit>

// v1.9.0 - 游戏开发
type GameEntity = Entity<{ position: Vector2D; velocity: Vector2D }>
type PhysicsBody = RigidBody<{ mass: number; friction: number }>
type Sprite = SpriteComponent<{ texture: string; width: number }>

// v1.9.0 - 区块链
type Transaction1559 = EIP1559Transaction<{ gasLimit: number; maxFeePerGas: string }>
type ERC20Balance = FungibleTokenBalance<{ address: string; amount: string }>
type WalletState = WalletConnectionStatus

// v1.9.0 - 语言处理
type NLPDocument = Document<{ tokens: Token[]; sentences: Sentence[] }>
type Sentiment = SentimentResult<{ score: number; label: SentimentLabel }>
type Translation = TranslationResult<{ source: string; target: string }>

// v1.9.0 - 图形渲染
type ColorRGBA = RGBA<{ r: 255; g: 128; b: 64; a: 1 }>
type Transform3D = Transform<{ position: Vector3; rotation: Quaternion }>
type ShaderProgram = ShaderProgram<{ vertex: string; fragment: string }>

// v1.9.0 - 音频处理
type AudioWaveform = WaveformOptions<{ type: 'sine'; frequency: 440 }>
type MIDINoteOn = MIDINoteOnEvent<{ note: 60; velocity: 100 }>
type AudioAnalysis = FFTResult<{ frequencies: number[]; magnitudes: number[] }>

// v1.9.0 - 动画系统
type KeyframeSequence = KeyframeSequence<{ time: number; value: number }[]>
type AnimationTimeline = AnimationTimeline<{ duration: number; keyframes: Keyframe[] }>
type EasedValue = EasingFunction<'ease-in-out', number>

// v1.9.0 - 错误处理
type ChainError = ErrorChain<{ errors: Error[]; context: unknown }>
type Recovery = RecoveryOptions<{ strategy: 'retry'; maxAttempts: number }>
type PanicError = Panic<{ message: string; code: number }>

// v1.9.0 - 事件系统
type EventEmitter = EventEmitter<{ click: MouseEvent; keydown: KeyboardEvent }>
type EventBus = EventBus<{ userCreated: { id: string }; orderPlaced: { orderId: string } }>
type DomainEvt = DomainEvent<{ orderId: string }, { status: string }>

// v1.9.0 - 响应式编程
type ObservableStream = Observable<{ value: string; timestamp: number }>
type SignalState = WritableSignal<{ count: number }>
type BehaviorSubjectState = BehaviorSubject<{ initialValue: string }>
```

### v1.10.0 类型

```typescript
// v1.10.0 - 极致类型工具
type PerfectUser = Perfect<{ name?: string; age: number }>
type CompleteConfig = Complete<{ host?: string | null; port: number | undefined }>
type FinalOptions = Final<{ debug?: boolean; timeout?: number | null }>
type UltimateState = Ultimate<{ config?: { value?: string }; count: number | null }>
type Validated = Validate<{ name: 'John'; age: 30 }, { name: string; age: number }>

// v1.10.0 - 高阶类型
type MaybeKind = Kind<{ _A?: unknown }, string>
type EitherKind = Kind2<{ _A?: unknown; _B?: unknown }, string, number>
type Composed = Compose<(n: number) => boolean, (s: string) => number>
type Piped = Pipe<(s: string) => number, (n: number) => boolean>
type ChurchBool = ChurchBoolean
type MaybeType = Maybe<string>

// v1.10.0 - 框架集成
type AngularComp = AngularComponent<{ selector: string; inputs: { value: string } }>
type SvelteStore = SvelteStore<string>
type PreactFunc = PreactFC<{ value: string }>
type SolidSignal = SolidSignal<string>
type LitEl = LitElement<{ properties: { value: string } }>
type StencilComp = StencilComponent<{ props: { value: string }; state: { count: number } }>
type AlpineData = AlpineComponent<{ data: { value: string }; methods: { increment(): void } }>

// v1.10.0 - 构建工具
type WebpackConf = WebpackConfig<{ entry: string; output: { path: string } }>
type ViteConf = ViteConfig<{ plugins: VitePlugin[]; build: ViteBuild }>
type RollupConf = RollupConfig<{ input: string; output: RollupOutput }>
type ESBuildOpts = ESBuildOptions<{ bundle: true; minify: true }>
type BabelConf = BabelConfig<{ presets: string[]; plugins: string[] }>
type SWCConf = SWCConfig<{ jsc: { parser: SWCParser } }>

// v1.10.0 - DevOps
type DockerComposeConf = DockerCompose<{ services: Record<string, DockerComposeService> }>
type K8sDeploy = K8sDeployment<{ metadata: { name: string }; spec: unknown }>
type K8sSvc = K8sService<{ spec: { ports: K8sServicePort[] } }>
type TerraformRes = TerraformResource<{ type: string; name: string }>
type AnsiblePlay = AnsiblePlaybook<{ name: string; hosts: string; tasks: AnsibleTask[] }>
type GitHubWF = GitHubWorkflow<{ name: string; jobs: Record<string, GitHubJob> }>
type GitLabPipe = GitLabPipeline<{ stages: string[] }>

// v1.10.0 - 质量保证
type ESLintConf = ESLintConfig<{ rules: Record<string, unknown> }>
type PrettierConf = PrettierConfig<{ printWidth: number; semi: boolean }>
type SecurityAudit = SecurityAudit<{ vulnerabilities: Vulnerability[] }>
type DepAudit = DependencyAudit<{ dependencies: DependencyInfo[] }>
type PerfAudit = PerformanceAudit<{ metrics: PerformanceMetric[] }>
type BundleAnal = BundleAnalysis<{ bundles: BundleInfo[] }>
type QualityGate = QualityGate<{ conditions: GateCondition[] }>

// v1.10.0 - 架构模式
type EntityT = Entity<{ id: string; props: { name: string } }>
type UseCaseT = UseCase<{ input: string }, { output: number }>
type PortT = Port<{ type: 'inbound'; methods: { execute(): void } }>
type AggregateT = Aggregate<{ root: Entity; entities: unknown[] }>
type CommandT = Command<'CreateUser', { name: string; email: string }>
type QueryT = Query<'GetUser', { id: string }>
type BoundedCtx = BoundedContext<{ name: string }>
type EventStreamT = EventStream<{ events: DomainEvent[] }>

// v1.10.0 - 数据格式
type JSONVal = JSONValue
type JSONSchemaT = JSONSchema<{ type: 'object'; properties: unknown }>
type XMLNodeT = XMLNode<{ name: string; attributes: unknown }>
type CSVRowT = CSVRow<{ name: string; value: number }>
type TOMLVal = TOMLValue<{ type: 'string'; value: string }>
type ProtoMsg = ProtoMessage<{ name: string; fields: ProtoField[] }>
type AvroSchemaT = AvroSchema<{ type: 'record'; fields: AvroField[] }>

// v1.10.0 - 无障碍访问
type ARIARoleT = ARIARole
type AriaProps = AccessibilityProps<{ role: 'button'; 'aria-label': string }>
type FocusTrapT = FocusTrap<{ enabled: boolean; container: HTMLElement }>
type KeyNav = KeyboardNavigation<{ orientation: 'vertical'; loop: true }>
type ColorContrastT = ColorContrast<{ foreground: string; background: string }>
type MotionPref = MotionPreference
type AccNodeT = AccessibilityNode<{ role: 'button'; name: string }>

// v1.10.0 - 最终优化
type Optimized = Optimize<{ a?: string | undefined }>
type Simplified = SimplifyAll<{ a: string } & { b: number }>
type Deduped = RemoveDuplicates<['a', 'b', 'a', 'c']>
type Compacted = Compact<{ a?: string; b: number }>
type Debugged = DebugType<{ a: string; b?: number }>
type FrozenT = Freeze<{ a: string }>
type ImmutableT = Immutable<{ a: { b: string } }>
type IsAnyT = IsAny<any>
type IsNeverT = IsNever<never>
type IsArrayT = IsArray<string[]>
type EqualsT = Equals<string, string>
```

## 外部资源

- [TypeScript Playground](https://www.typescriptlang.org/play) - TypeScript 官方演练场
- [Type Challenges](https://github.com/type-challenges/type-challenges) - TypeScript 类型挑战练习
- [type-fest](https://github.com/sindresorhus/type-fest) - 流行的 TypeScript 类型集合