# Playground

Try `uni-types` directly in your browser with real-time type checking!

<TypePlayground />

## How to Use

1. **Edit the code** - Modify the TypeScript code in the editor
2. **See type hints** - Hover over type names to see their definitions
3. **Check for errors** - Type errors appear in real-time
4. **Load examples** - Click the example buttons to load different code samples

## Features

- 🎯 **Real-time Type Checking** - See type errors as you type
- 💡 **IntelliSense** - Hover over types to see their definitions
- 📦 **Pre-loaded Types** - All uni-types are available for import
- 🎨 **Syntax Highlighting** - Full TypeScript syntax support

## Available Types (800+)

All types from `uni-types` are available for import:

### Core Operations

```typescript
import type {
  PickRequired, PickPartial, OmitRequired, OmitPartial
} from 'uni-types'
```

### Tuple Operations

```typescript
import type {
  Head, Last, Tail, Init, Reverse, Flatten, TupleLength, IsEmptyTuple
} from 'uni-types'
```

### Deep Operations

```typescript
import type {
  DeepPartial, DeepRequired, DeepReadonly, DeepMutable, DeepOmit, DeepPick
} from 'uni-types'
```

### Brand Types

```typescript
import type { Brand, Unbrand } from 'uni-types'
```

### Conditional Types

```typescript
import type { If, Not, And, Or } from 'uni-types'
```

### Function Types

```typescript
import type {
  Parameters, ReturnType, NthParameter, AsyncReturnType
} from 'uni-types'
```

### Key Utilities

```typescript
import type {
  RenameKeys, PrefixKeys, SuffixKeys, KeysByValueType
} from 'uni-types'
```

### Numeric Types

```typescript
import type { Inc, Dec, Add, Subtract, Range } from 'uni-types'
```

### Path Utilities

```typescript
import type {
  ValidPath, ArrayPaths, LeafPaths, PathLength
} from 'uni-types'
```

### Record Types

```typescript
import type {
  DeepNullable, DeepOptional, Immutable, Mutable
} from 'uni-types'
```

### Template Literals

```typescript
import type {
  ReplaceAll, Trim, StringLength, Repeat
} from 'uni-types'
```

### Type Guards

```typescript
import type {
  IsArray, IsTuple, IsEqual, IsAny, IsNever, IsUnknown
} from 'uni-types'
```

### Type Inference

```typescript
import type {
  Awaited, ArrayElement, ValueOf, FunctionKeys, NonFunctionKeys,
  FirstParameter, FunctionOnly, DataOnly
} from 'uni-types'
```

### Utility Types

```typescript
import type {
  Merge, NonNullable, Exclusive, NoNullish, Nullable, Optional,
  Maybe, LoosePartial, AtLeastOne, StrictExtract, StrictExclude,
  UnionToIntersection, UnionToTuple
} from 'uni-types'
```

### Key Types

```typescript
import type {
  RequiredKeys, OptionalKeys, WritableKeys, ReadonlyKeys
} from 'uni-types'
```

### Path Types

```typescript
import type { Paths, PathValue, SplitPath } from 'uni-types'
```

### String Case

```typescript
import type {
  CamelCase, SnakeCase, CamelCaseKeys, SnakeCaseKeys
} from 'uni-types'
```

### Algorithms

```typescript
import type {
  Sort, QuickSort, MergeSort, GCD, LCM, Factorial, Fibonacci, IsPrime,
  Find, FindIndex, Includes, IndexOf, LongestCommonPrefix,
  Reverse, Unique, Flatten, FlattenDeep, LevenshteinDistance
} from 'uni-types'
```

### Parsers

```typescript
import type {
  ParseJSON, StringifyJSON, IsValidJSON, ParseURL, QueryParams, ParseCSV
} from 'uni-types'
```

### State Machines

```typescript
import type { StateMachine, State, Transition } from 'uni-types'
```

### Data Structures

```typescript
import type {
  Tree, TreeNode, Graph, LinkedList, Stack, Queue
} from 'uni-types'
```

### HTTP & API

```typescript
import type { HTTPMethod, HTTPStatus, Route, Middleware } from 'uni-types'
```

### Database

```typescript
import type { SQLType, QueryBuilder, Migration } from 'uni-types'
```

### Concurrency

```typescript
import type { Task, Pipeline, Scheduler, WorkerPool } from 'uni-types'
```

### Interop

```typescript
import type {
  ToTypeFest, ToTsToolbelt, IsCompatible
} from 'uni-types'
```

### Testing

```typescript
import type {
  ExpectTrue, ExpectEqual, TypeCoverage, TypeComplexity
} from 'uni-types'
```

### Assertions

```typescript
import type {
  AssertEqual, AssertExtends, AssertKeyof, AssertNotNil,
  RequireKeys, MakeOptional, RequireAtLeastOne, RequireExactlyOne,
  AssertHasProperty, RequireNotNullish, RequireArray, RequireFunction
} from 'uni-types'
```

### Async Utilities

```typescript
import type {
  PromiseValue, PromiseResult, IsPromise, UnwrapPromise, WrapPromise,
  PromiseSettledResult
} from 'uni-types'
```

### Collection Types

```typescript
import type {
  TypeSet, SetAdd, SetRemove, SetHas, SetUnion, SetIntersection,
  SetDifference, SetIsEmpty, SetIsSubset,
  TypeMap, MapGet, MapSet, MapHas, MapDelete, MapKeys, MapValues,
  ListLength, ListReverse, ListConcat, ListFilter, ListFind, ListIncludes
} from 'uni-types'
```

### Object Operations

```typescript
import type {
  ObjectMap, ObjectFilter, ObjectPickByType, ObjectOmitByType, ObjectInvert,
  DeepMerge, DeepAssign, DeepDefaults,
  HasProperty, HasProperties, HasMethod
} from 'uni-types'
```

### Pattern Matching

```typescript
import type {
  Match, Case, Default, TypeFilter, TypeFind, TypeIncludes
} from 'uni-types'
```

### String Operations

```typescript
import type {
  Split, Join, KebabCase, PascalCase, IsEmail, IsUUID, IsURL, Chunk
} from 'uni-types'
```

### Performance

```typescript
import type {
  Simplify, DeepSimplify, Cached, CachedValue, Memoized,
  Lazy, ForceEvaluate, Deferred, FlattenType,
  StripNever, StripUndefined, Compact
} from 'uni-types'
```

### Schema Validation

```typescript
import type {
  RuntimeGuard, GuardedType, HasRuntimeCheck, CompositeGuard,
  ZodOutput, ZodInput, IsZodSchema, ZodShape, ZodArrayElement,
  YupOutput, YupInput, IsYupSchema
} from 'uni-types'
```

### Ecosystem Integration

```typescript
import type {
  ComponentProps, PropsWithChildren, PrismaCreateInput
} from 'uni-types'
```

### Authorization & Permissions *(v1.5.0)*

```typescript
import type {
  Permission, PermissionSet, Role, RoleSet,
  Policy, PolicyRule, PolicyEffect,
  RBAC, ABAC, ACL, AccessControl,
  Resource, Action, AuthorizationProvider
} from 'uni-types'
```

### Caching Strategies *(v1.5.0)*

```typescript
import type {
  Cache, CacheEntry, CacheOptions, CacheStats,
  LRUCache, LFUCache, TTLCache, FIFOCache, ARCCache,
  DistributedCache, CacheAside, ReadThroughCache,
  WriteThroughCache, WriteBehindCache
} from 'uni-types'
```

### Configuration Management *(v1.5.0)*

```typescript
import type {
  Config, ConfigField, ConfigLoader, ConfigSchema,
  EnvConfig, FeatureFlag, FeatureFlagConfig,
  RemoteConfigProvider, Secret, SecretProvider
} from 'uni-types'
```

### Event-Driven Architecture *(v1.5.0)*

```typescript
import type {
  EventBus, EventStream, Command, CommandBus,
  Query, QueryBus, Saga, SagaStep,
  MessageQueue, EventStore, DeadLetterQueue
} from 'uni-types'
```

### GraphQL Integration *(v1.5.0)*

```typescript
import type {
  GraphQLSchema, GraphQLType, GraphQLScalar,
  GraphQLEnum, GraphQLInput, GraphQLObject,
  GraphQLField, GraphQLResolver, GraphQLContext,
  GraphQLResult, GraphQLError
} from 'uni-types'
```

### Logging & Observability *(v1.5.0)*

```typescript
import type {
  Logger, LogLevel, LogEntry, Metric, Counter, Gauge,
  Histogram, Tracer, Span, Trace, Monitor, Alert,
  HealthIndicator, HealthCheckResult
} from 'uni-types'
```

### Microservices Architecture *(v1.5.0)*

```typescript
import type {
  Microservice, ServiceConfig, ServiceRegistry,
  ServiceInstance, CircuitBreaker, LoadBalancer,
  APIGateway, HealthReport, RateLimit
} from 'uni-types'
```

### Validation Rules *(v1.5.0)*

```typescript
import type {
  ValidationRule, Validator, ValidatorResult, ValidationError,
  StringFieldValidator, NumberFieldValidator,
  MinLength, MaxLength, MinValue, MaxValue,
  Pattern, Sanitizer
} from 'uni-types'
```

### WebSocket & Real-Time *(v1.5.0)*

```typescript
import type {
  WebSocketConfig, WebSocketMessage, EventEmitter,
  PubSub, Publisher, Subscriber, RealTimeChannel,
  Stream, StreamReader, StreamWriter
} from 'uni-types'
```

### Workflow Engine *(v1.5.0)*

```typescript
import type {
  Workflow, WorkflowInstance, WorkflowStep,
  WorkflowTransition, WorkflowExecution, WorkflowHistory,
  WorkflowEngine, RetryPolicy, BPMNProcess, BPMNTask,
  BPMNGateway, BPMNEvent
} from 'uni-types'
```

### AI/ML Types *(v1.6.0)*

```typescript
import type {
  Tensor, TensorShape, TensorDType,
  Model, ModelConfig, Layer, LayerType,
  Optimizer, LossFunction, MLMetric,
  Dataset, DataLoader, Batch,
  InferenceResult, Prediction, Confidence
} from 'uni-types'
```

### Functional Programming *(v1.6.0)*

```typescript
import type {
  Functor, Monad, Applicative,
  Maybe, Some, None, Either, Left, Right,
  IO, Reader, Writer, State,
  Result, Ok, Err, Lens,
  Semigroup, Monoid, Compose, Pipe, Curry
} from 'uni-types'
```

### Type-Level Compiler *(v1.6.0)*

```typescript
import type {
  ASTNode, ASTNodeType, Token, TokenType,
  Parser, ParserResult, ParseError,
  CodeGenerator, GeneratedCode, SourceMap,
  Transformer, Formatter
} from 'uni-types'
```

### Distributed Systems *(v1.6.0)*

```typescript
import type {
  Consensus, ConsensusState, LeaderElection,
  Replica, ReplicationStrategy, Partition,
  PartitionStrategy, ConsistencyLevel,
  DistributedLock, TwoPhaseCommit, TransactionState,
  FailureDetector, Heartbeat, Membership
} from 'uni-types'
```

### Security Types *(v1.6.0)*

```typescript
import type {
  Authentication, AuthType, AuthStatus,
  Session, SessionId, Encryption, EncryptionAlgorithm,
  Key, KeyPair, Hash, HashAlgorithm,
  Signature, SignatureAlgorithm, JWT, OAuthToken, CSRFToken
} from 'uni-types'
```

### Internationalization *(v1.6.0)*

```typescript
import type {
  Locale, LocaleCode, LanguageCode, CountryCode,
  Translation, TranslationKey, PluralForm,
  Currency, TimeZone, DateFormat, NumberFormat, Direction
} from 'uni-types'
```

### Testing Framework *(v1.6.0)*

```typescript
import type {
  TestSuite, TestCase, TestResultType,
  Assertion, AssertionResult, Mock, Spy,
  Fixture, Coverage, CoverageReport,
  Snapshot, Benchmark, BenchmarkResult
} from 'uni-types'
```

### Plugin System *(v1.6.0)*

```typescript
import type {
  Plugin, PluginConfig, PluginContext, PluginLifecycle,
  Hook, HookResult, Extension, ExtensionPoint,
  Middleware, MiddlewarePipeline, Module, Registry
} from 'uni-types'
```

### Type Inference *(v1.6.0)*

```typescript
import type {
  Infer, InferReturn, InferArgs, InferPromise,
  ExtractFunction, ExtractClass, ExtractConstructor,
  Reconstruct, Narrow, Widen,
  IsAny, IsNever, IsUnknown, IsFunction, IsArray, IsUnion,
  Equals, Extends, TypeName, TypeCategory
} from 'uni-types'
```

### Performance Monitoring *(v1.6.0)*

```typescript
import type {
  Performance, PerformanceMetric, Timing,
  MemoryUsage, MemoryMetric, CPUUsage,
  Profiler, ProfileResult, TraceSpan,
  PerformanceTrace, PerformanceAlert
} from 'uni-types'
```

### Type Visualization *(v1.7.0)*

```typescript
import type {
  TypeDiagram, TypeTree, TypeGraph,
  TypeMap, Debug, Inspect, Pretty, Display,
  TypeDiff, AddedProperties, RemovedProperties,
  ChangedProperties, UnchangedProperties,
  TypeComparison, Similarity, Difference, Compatibility,
  TypeDoc, DocEntry, DocMethod, DocParameter,
  GenerateDocs, ASCIITree, ASCIITable, ASCIIGraph,
  Expand, ExpandRecursively, Printable,
  VisualizationOptions, MermaidClassDiagram, ColorScheme
} from 'uni-types'
```

### Type-Level Cryptography *(v1.7.0)*

```typescript
import type {
  HashAlgorithm, HashResult, SHA256, SHA512, Blake3,
  EncryptionAlgorithm, EncryptedData, Key, KeyPair,
  SignatureAlgorithm, SignatureResult, Signed, Verified,
  JWT, JWTHeader, JWTPayload, JWTAlgorithm,
  PasswordHashOptions, Certificate, Checksum,
  Base64, Base64URL, Hex, URLEncoded
} from 'uni-types'
```

### Type-Level Date/Time *(v1.7.0)*

```typescript
import type {
  CalendarDate, DateComponents, DateString, ISODate,
  TimeFormat, DateFormat, Duration, Timezone,
  AddDays, AddMonths, AddYears, DaysBetween,
  StartOfDay, EndOfDay, StartOfMonth, EndOfMonth,
  IsLeapYear, DaysInMonth, Quarter, WeekOfYear,
  UnixTimestamp, ToUnixTimestamp, TimeAgo
} from 'uni-types'
```

### Type Decorators *(v1.7.0)*

```typescript
import type {
  Decorator, ClassDecorator, MethodDecorator,
  PropertyDecorator, ParameterDecorator,
  Cached, Memoized, Deprecated, ReadOnly, WriteOnly,
  Enumerable, Frozen, Validate, Retry, Timeout,
  Logged, Initialize, Catch, Dispose,
  MetadataKey, MetadataValue, GetMetadata, DefineMetadata
} from 'uni-types'
```

### Code Generation Templates *(v1.7.0)*

```typescript
import type {
  Template, TemplateString, TemplateLiteral,
  GeneratedType, GeneratedInterface, GeneratedClass,
  GeneratedFunction, TypeBuilder, InterfaceBuilder,
  ClassBuilder, FunctionBuilder, OutputFormat,
  GenerateFromJSON, GenerateFromOpenAPI,
  ASTNode, ASTVisitor, ASTTransformer
} from 'uni-types'
```

### Type-Safe Configuration *(v1.7.0)*

```typescript
import type {
  ConfigSchema, ConfigField, ConfigValidationResult,
  EnvConfig, EnvMapping, EnvField,
  ConfigBuilder, ConfigLoader, ConfigWatcher,
  EnvironmentName, EnvironmentAwareConfig,
  SecretConfig, SecretSource, SecretValue,
  MultiSourceConfig, MergedConfig, LoadResult
} from 'uni-types'
```

### Type-Level Advanced Math *(v1.7.0)*

```typescript
import type {
  Abs, Add, Subtract, Multiply, Divide,
  Sqrt, Power, Factorial, Fibonacci,
  Sin, Cos, Tan, Log, Exp,
  GCD, LCM, IsPrime, IsEven, IsOdd,
  CelsiusToFahrenheit, FahrenheitToCelsius,
  DecimalToBinary, BinaryToDecimal,
  NumericRange, Clamp, InRange
} from 'uni-types'
```

### Type-Level Sorting & Searching *(v1.7.0)*

```typescript
import type {
  Sort, QuickSort, MergeSort, HeapSort,
  BinarySearch, LinearSearch, Find, FindIndex,
  Filter, Reject, Every, Some, None,
  Unique, Chunk, GroupBy, Partition,
  Take, Drop, Slice, Splice, Reverse,
  Zip, Unzip, Flatten, FlattenDeep,
  Union, Intersection, Difference, SymmetricDifference
} from 'uni-types'
```

### Metaprogramming Utilities *(v1.7.0)*

```typescript
import type {
  Analyze, Apply, ComposeTypes, Construct,
  Depth, Exactly, ExtendsType, FlattenType,
  Generate, GenerateAll, GenerateFromSchema,
  GetTypeCategory, IsNullable, IsOptionalType,
  MergeTypes, OmitTypeAtPath, PickTypeAtPath,
  Reflect, Satisfies, SetTypeAtPath, Transform,
  TypeAtPath, TypeCategory, TypeInfo, TypeName, Width
} from 'uni-types'
```

### Framework Integrations *(v1.7.0)*

```typescript
import type {
  // Remix
  RemixLoader, RemixAction, RemixRoute, RemixLoaderData,
  // Astro
  AstroProps, AstroFrontmatter, AstroLayout,
  // SvelteKit
  SvelteKitLoad, SvelteKitAction, SvelteKitPage,
  // Qwik
  QwikComponent, QwikSignal, QwikStore,
  // Fresh (Deno)
  FreshHandler, FreshContext, FreshRoute,
  // Express
  ExpressHandler, ExpressRequest, ExpressResponse,
  // Fastify
  FastifyHandler, FastifyRequest, FastifyReply,
  // Hono
  HonoHandler, HonoContext, HonoMiddleware,
  // NestJS
  NestController, NestService, NestModule, NestGuard
} from 'uni-types'
```

## Example Code

Here's a comprehensive example showcasing various features:

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

// Core operations - make properties required
interface User {
  name?: string
  age?: number
  email: string
}
type RequiredUser = PickRequired<User, 'name' | 'age'>

// Deep operations - nested partials
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

// Type-level algorithms
type SortedNumbers = Sort<[3, 1, 4, 1, 5, 9, 2, 6]>
type GcdResult = GCD<48, 18>
type FactorialResult = Factorial<5>

// Type guards
type ArrayCheck = IsArray<string[]>
type TupleCheck = IsTuple<[1, 2, 3]>
type EqualCheck = IsEqual<string, string>

// Object operations - pick by type
interface MixedObject {
  name: string
  count: number
  active: boolean
  callback: () => void
}
type OnlyStrings = ObjectPickByType<MixedObject, string>
type OnlyNumbers = ObjectPickByType<MixedObject, number>

// String operations
type SplitResult = Split<'a-b-c', '-'>
type JoinResult = Join<['a', 'b', 'c'], '-'>
type CamelResult = CamelCase<'hello-world'>
type SnakeResult = SnakeCase<'helloWorld'>

// Path utilities
type AllPaths = Paths<{ a: { b: { c: string } } }>
type ValueAtPath = PathValue<{ a: { b: { c: string } } }, 'a.b.c'>

// Type assertions - compile-time validation
type TestAssertion = AssertEqual<string, string> // string
type TestAssertion2 = AssertEqual<string, number> // never

// Verify factorial
type VerifyFactorial = AssertEqual<Factorial<5>, 120>

// v1.5.0 - Microservice architecture
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
  start: async () => { /* start server */ },
  stop: async () => { /* graceful shutdown */ },
  health: async () => ({ status: 'healthy', timestamp: new Date(), service: 'order-service', version: '1.0.0', uptime: 0, checks: {} })
}

// v1.5.0 - RBAC authorization
interface AppPermission extends Permission<'orders:read' | 'orders:write' | 'users:admin'> {
  resource: 'orders' | 'users'
  action: 'create' | 'read' | 'update' | 'delete'
}

// v1.5.0 - Logger configuration
const loggerConfig: LoggerConfig = {
  level: 'info',
  format: 'json',
  transports: [{ type: 'console' }]
}

// v1.6.0 - AI/ML Types
type ImageTensor = Tensor<[224, 224, 3], 'float32'>
type CNNModel = Model<ImageTensor, { label: string; confidence: number }>

// v1.6.0 - Functional Programming
type OptionalValue = Maybe<string> // Some<string> | None
type ValidationResult = Either<Error, string> // Left<Error> | Right<string>
type OperationResult = Result<Data, Error> // Ok<Data> | Err<Error>

// v1.6.0 - Type Inference
type PromiseValue = Infer<Promise<string>> // string
type ReturnValue = InferReturn<() => number> // number
type AreEqual = Equals<string, string> // true
type Name = TypeName<number> // 'number'

// v1.7.0 - Type Visualization
type DebugUser = Debug<User>
type PrettyConfig = Pretty<Config>
type DiffResult = TypeDiff<{ a: string }, { a: string; b: number }>
type Doc = GenerateDocs<User>

// v1.7.0 - Cryptography Types
interface SecureToken extends JWT<{ userId: string; role: string }> {}
type HashAlgo = HashAlgorithm // 'sha256' | 'sha512' | ...
type EncryptedPayload = EncryptedData<'aes-256-gcm'>

// v1.7.0 - Date/Time Types
type Today = CalendarDate<'gregorian'>
type Formatted = DateFormat<'YYYY-MM-DD'>
type Added = AddDays<'2024-01-01', 7>
type Duration2 = Duration<'2h30m'>

// v1.7.0 - Decorator Types
const memoConfig: MemoizeOptions = { ttl: 60000 }
const retryConfig: RetryOptions = { maxRetries: 3, delay: 1000 }

// v1.7.0 - Config Builder
interface AppConfig extends ConfigSchema<{
  port: ConfigField<number>
  host: ConfigField<string>
  debug: ConfigField<boolean>
}> {}

// v1.7.0 - Framework Integration
type RemixData = RemixLoaderData<RemixRoute<{ user: User }, never>>
type ExpressReq = ExpressRequest<{ id: string }, { name: string }>
type SvelteData = SvelteKitPage<{ slug: string }, { post: Post }>

// v1.7.0 - Advanced Math
type AbsValue = Abs<-5> // 5
type SqrtValue = Sqrt<16> // 4
type FibResult = Fibonacci<10> // 55
type PrimeCheck = IsPrime<17> // true

// v1.7.0 - Sorting & Searching
type SortedTuple = QuickSort<[3, 1, 4, 1, 5]>
type Found = SearchFind<[{ a: 1 }, { b: 2 }], { b: 2 }>
type Chunks = Chunk<[1, 2, 3, 4, 5], 2>
```

## External Resources

- [TypeScript Playground](https://www.typescriptlang.org/play) - Official TypeScript playground
- [Type Challenges](https://github.com/type-challenges/type-challenges) - Practice TypeScript type challenges
- [type-fest](https://github.com/sindresorhus/type-fest) - Popular TypeScript type collection