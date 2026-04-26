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

## 可用类型 (600+)

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
  Infer, InferReturn, Equals, TypeName
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
```

## 外部资源

- [TypeScript Playground](https://www.typescriptlang.org/play) - TypeScript 官方演练场
- [Type Challenges](https://github.com/type-challenges/type-challenges) - TypeScript 类型挑战练习
- [type-fest](https://github.com/sindresorhus/type-fest) - 流行的 TypeScript 类型集合