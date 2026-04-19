<div align="center">

# uni-types

**Universal TypeScript Type Utilities**

A comprehensive collection of type helpers for TypeScript development

[![NPM version][npm-image]][npm-url]
[![NPM downloads][download-image]][download-url]
![TypeScript][typescript-url]
[![Codecov][codecov-image]][codecov-url]
[![License][license-image]][license-url]

[**Documentation**](https://saqqdy.github.io/uni-types/) · [**中文文档**](./README_CN.md)

</div>

## Features

- 🎯 **500+ Type Utilities** - Comprehensive type helpers for every use case
- 🔒 **Type Safe** - Full TypeScript support with strict type checking
- 📦 **Zero Dependencies** - Lightweight and tree-shakeable
- 🚀 **TypeScript 5.x** - Built with the latest TypeScript features
- 🌍 **Bilingual Docs** - Documentation in English and Chinese

## Installation

```bash
# pnpm
pnpm add uni-types

# yarn
yarn add uni-types

# npm
npm install uni-types
```

## Quick Start

```typescript
import type {
  PickRequired,
  DeepPartial,
  IsArray,
  Brand,
  If,
  Paths
} from 'uni-types'

// Core: Make specific properties required
interface User {
  name?: string
  age?: number
  email: string
}

type RequiredUser = PickRequired<User, 'name' | 'age'>
// { name: string; age: number; email: string }

// Deep: Make all nested properties optional
interface Config {
  database: {
    host: string
    port: number
  }
}

type PartialConfig = DeepPartial<Config>
// { database?: { host?: string; port?: number } }

// Brand: Create nominal types
type UserId = Brand<string, 'UserId'>
type OrderId = Brand<string, 'OrderId'>
// UserId and OrderId are not interchangeable!

// Conditional: Type-level logic
type Result = If<true, 'success', 'error'> // 'success'
```

## API Reference

### Core Operations

| Type | Description |
|------|-------------|
| `PickRequired<T, K>` | Make specified properties required |
| `OmitRequired<T, K>` | Make properties except specified ones required |
| `PickPartial<T, K>` | Make specified properties optional |
| `OmitPartial<T, K>` | Make properties except specified ones optional |

### Tuple Operations

| Type | Description |
|------|-------------|
| `Head<T>` | Get first element of tuple |
| `Last<T>` | Get last element of tuple |
| `Tail<T>` | Get all elements except first |
| `Init<T>` | Get all elements except last |
| `Reverse<T>` | Reverse a tuple |
| `Flatten<T>` | Flatten nested tuples |
| `TupleLength<T>` | Get tuple length |
| `IsEmptyTuple<T>` | Check if tuple is empty |

### Deep Operations

| Type | Description |
|------|-------------|
| `DeepPartial<T>` | Make all nested properties optional |
| `DeepRequired<T>` | Make all nested properties required |
| `DeepReadonly<T>` | Make all nested properties readonly |
| `DeepMutable<T>` | Make all nested properties mutable |
| `DeepOmit<T, P>` | Omit properties by path |
| `DeepPick<T, P>` | Pick properties by path |

### Type Guards

| Type | Description |
|------|-------------|
| `IsArray<T>` | Check if type is an array |
| `IsTuple<T>` | Check if type is a tuple |
| `IsEqual<X, Y>` | Check if two types are equal |
| `IsAny<T>` | Check if type is `any` |
| `IsNever<T>` | Check if type is `never` |
| `IsUnknown<T>` | Check if type is `unknown` |
| `IsFunction<T>` | Check if type is a function |
| `IsAsyncFunction<T>` | Check if type is an async function |

### Conditional Types *(v1.1.0)*

| Type | Description |
|------|-------------|
| `If<C, T, F>` | Type-level if-then-else |
| `Not<B>` | Logical NOT for boolean types |
| `And<A, B>` | Logical AND for boolean types |
| `Or<A, B>` | Logical OR for boolean types |
| `Assert<T, U>` | Type constraint assertion |

### Brand Types *(v1.1.0)*

| Type | Description |
|------|-------------|
| `Brand<T, B>` | Create a branded type for nominal typing |
| `Unbrand<T>` | Extract underlying type from branded type |

### Function Utilities *(v1.1.0)*

| Type | Description |
|------|-------------|
| `Parameters<T>` | Get function parameters as tuple |
| `ReturnType<T>` | Get function return type |
| `NthParameter<T, N>` | Get Nth parameter type |
| `AsyncReturnType<T>` | Extract async function return type |
| `ThisParameterType<T>` | Get `this` parameter type |
| `OmitThisParameter<T>` | Omit `this` parameter from function |

### Template Literal Utilities *(v1.1.0)*

| Type | Description |
|------|-------------|
| `ReplaceAll<S, From, To>` | Replace all occurrences |
| `Replace<S, From, To>` | Replace first occurrence |
| `Trim<S>` | Trim whitespace |
| `StringToArray<S>` | Convert string to array |
| `CapitalizeAll<S>` | Capitalize all words |
| `StartsWith<S, P>` | Check if string starts with prefix |
| `EndsWith<S, P>` | Check if string ends with suffix |
| `StringLength<S>` | Get string length |

### Numeric Utilities *(v1.1.0)*

| Type | Description |
|------|-------------|
| `Inc<N>` | Increment number |
| `Dec<N>` | Decrement number |
| `Add<A, B>` | Add two numbers |
| `Subtract<A, B>` | Subtract two numbers |
| `GreaterThan<A, B>` | Check if A > B |
| `LessThan<A, B>` | Check if A < B |
| `Max<A, B>` | Maximum of two numbers |
| `Min<A, B>` | Minimum of two numbers |

### Path Types

| Type | Description |
|------|-------------|
| `Paths<T>` | Get all nested property paths |
| `PathValue<T, P>` | Get value type at path |
| `ValidPath<T, P>` | Check if path is valid |
| `ArrayPaths<T>` | Get paths including array indices |
| `LeafPaths<T>` | Get paths to primitive values |

### Key Utilities *(v1.1.0)*

| Type | Description |
|------|-------------|
| `Keys<T>` | Get all keys |
| `RenameKeys<T, M>` | Rename keys based on mapping |
| `PrefixKeys<T, P>` | Add prefix to all keys |
| `SuffixKeys<T, S>` | Add suffix to all keys |
| `KeysByValueType<T, V>` | Get keys by value type |

### Record Utilities *(v1.1.0)*

| Type | Description |
|------|-------------|
| `DeepNullable<T>` | Make all properties nullable |
| `DeepOptional<T>` | Make all properties optional |
| `Immutable<T>` | Make all properties readonly |
| `Mutable<T>` | Make all properties mutable |
| `DeepNonNullable<T>` | Remove null/undefined from all properties |
| `Exact<T, Shape>` | Ensure exact shape match |

### Schema Validation *(v1.2.0)*

| Type | Description |
|------|-------------|
| `RuntimeGuard<T>` | Define type guard function for runtime checking |
| `GuardedType<G>` | Extract type from type guard function |
| `HasRuntimeCheck<T>` | Check if type has runtime check available |
| `ZodOutput<T>` | Extract output type from Zod schema |
| `ZodInput<T>` | Extract input type from Zod schema |
| `ZodShape<T>` | Extract shape from ZodObject schema |
| `ZodRequiredKeys<T>` | Get required keys from Zod schema |
| `ZodOptionalKeys<T>` | Get optional keys from Zod schema |
| `YupOutput<T>` | Extract output type from Yup schema |
| `YupInput<T>` | Extract input type from Yup schema |

### Ecosystem Integration *(v1.2.0)*

| Type | Description |
|------|-------------|
| `ComponentProps<T>` | Extract props from React component |
| `PropsWithChildren<P>` | Add children to props type |
| `RequiredProps<P>` | Get required prop keys |
| `OptionalProps<P>` | Get optional prop keys |
| `VuePropType<T>` | Vue prop type definition |
| `VueEmitType<T>` | Vue emit function type |
| `PrismaCreateInput<T>` | Create input type for Prisma models |
| `PrismaUpdateInput<T>` | Update input type for Prisma models |
| `PrismaWhereInput<T>` | Where input type for Prisma queries |
| `TRPCProcedureInput<T>` | Extract input from tRPC procedure |
| `TRPCProcedureOutput<T>` | Extract output from tRPC procedure |

### Performance Optimization *(v1.2.0)*

| Type | Description |
|------|-------------|
| `Simplify<T>` | Flatten intersection types |
| `DeepSimplify<T>` | Recursively simplify nested types |
| `Compact<T>` | Remove never and undefined properties |
| `StripNever<T>` | Remove never properties |
| `StripUndefined<T>` | Remove undefined properties |
| `MergeAll<T>` | Merge multiple object types |
| `Lazy<T>` | Defer type evaluation |
| `Cached<T>` | Cache type computation |
| `Memoized<T>` | Memoize type computation |

### Advanced Type Patterns *(v1.3.0)*

| Type | Description |
|------|-------------|
| `Match<T, Patterns>` | Type-level pattern matching |
| `Recurse<T, Limit>` | Type-level recursion with depth limit |
| `Depth<T>` | Get maximum depth of nested type |
| `TypeFilter<T, P>` | Filter tuple by predicate |
| `TypeFind<T, P>` | Find first matching element |
| `TypeIncludes<T, E>` | Check if tuple includes element |
| `TypeEvery<T, P>` | Check if all elements match |
| `TypeSome<T, P>` | Check if any element matches |

### Type-Level Collections *(v1.3.0)*

| Type | Description |
|------|-------------|
| `TypeSet<T>` | Type-level Set representation |
| `SetAdd<S, T>` | Add element to type set |
| `SetRemove<S, T>` | Remove element from type set |
| `SetUnion<A, B>` | Union of two type sets |
| `SetIntersection<A, B>` | Intersection of two type sets |
| `SetDifference<A, B>` | Difference of two type sets |
| `TypeMap<K, V>` | Type-level Map representation |
| `MapGet<M, K>` | Get value from type map |
| `MapSet<M, K, V>` | Set value in type map |
| `ListFilter<T, P>` | Filter list elements |
| `ListReverse<T>` | Reverse a list |
| `ListConcat<A, B>` | Concatenate two lists |
| `ListTake<T, N>` | Take first N elements |
| `ListChunk<T, N>` | Chunk list into sublists |

### Type Assertions & Constraints *(v1.3.0)*

| Type | Description |
|------|-------------|
| `AssertEqual<T, Expected>` | Assert types are equal |
| `AssertExtends<T, U>` | Assert T extends U |
| `RequireKeys<T, K>` | Require specific keys |
| `RequireAtLeastOne<T, K>` | Require at least one key |
| `RequireExactlyOne<T, K>` | Require exactly one key |
| `RequireAllOrNone<T, K>` | Require all or none keys |
| `HasProperty<T, K>` | Ensure object has property |
| `RequireArray<T>` | Ensure type is array |
| `RequireFunction<T>` | Ensure type is function |

### String Operations *(v1.3.0)*

| Type | Description |
|------|-------------|
| `Split<S, D>` | Split string by delimiter |
| `Join<T, S>` | Join string array with separator |
| `KebabCase<S>` | Convert to kebab-case |
| `PascalCase<S>` | Convert to PascalCase |
| `ConstantCase<S>` | Convert to CONSTANT_CASE |
| `IsEmail<S>` | Check if string is email |
| `IsUUID<S>` | Check if string is UUID |
| `IsURL<S>` | Check if string is URL |
| `ReverseString<S>` | Reverse a string |

### Promise & Async Utilities *(v1.3.0)*

| Type | Description |
|------|-------------|
| `PromiseValue<T>` | Extract value from Promise (deep) |
| `IsPromise<T>` | Check if type is Promise |
| `UnwrapPromise<T>` | Unwrap or return original |
| `AsyncReturnType<T>` | Return type of async function |
| `MakeAsync<T>` | Make function async |
| `PromiseAll<T>` | Await all promises |
| `AsyncResult<T, E>` | Rust-style Result type |
| `Deferred<T>` | Deferred promise type |

### Object Operations *(v1.3.0)*

| Type | Description |
|------|-------------|
| `ObjectMap<T, F>` | Map over object values |
| `ObjectFilter<T, P>` | Filter object properties |
| `ObjectPickByType<T, U>` | Pick by value type |
| `ObjectInvert<T>` | Invert object (swap keys/values) |
| `DeepMerge<A, B>` | Deep merge objects |
| `ObjectPath<T, P>` | Get value at path |
| `PathExists<T, P>` | Check if path exists |
| `KeysOfType<T, U>` | Get keys of specific type |

### JSON Schema *(v1.3.0)*

| Type | Description |
|------|-------------|
| `JsonSchemaType<T>` | Map TS types to JSON Schema types |
| `JsonSchema<T>` | Full JSON Schema type |
| `OpenAPISchema<T>` | OpenAPI 3.0 Schema |
| `OpenAPIResponse<T>` | OpenAPI Response |
| `OpenAPIRequestBody<T>` | OpenAPI Request Body |
| `OpenAPIParameter<Name, T, In>` | OpenAPI Parameter |
| `OpenAPIDocument<Title, Version, Paths>` | OpenAPI Document |

### Extended Ecosystem *(v1.3.0)*

| Type | Description |
|------|-------------|
| `NextPageProps<T>` | Next.js page props |
| `ServerComponentProps<T>` | Next.js server component props |
| `NuxtPageMeta<T>` | Nuxt page meta |
| `NuxtComposable<T>` | Nuxt composable type |
| `SolidSignal<T>` | SolidJS signal type |
| `SolidResource<T>` | SolidJS resource type |
| `SvelteStore<T>` | Svelte store type |
| `SvelteAction<Element, Params>` | Svelte action type |

### Type-Level Algorithms *(v1.4.0)*

| Type | Description |
|------|-------------|
| `Sort<T, Order>` | Sort tuple of numbers |
| `QuickSort<T>` | QuickSort implementation |
| `MergeSort<T>` | MergeSort implementation |
| `Find<T, P>` | Find first matching element |
| `FindIndex<T, P>` | Find index of matching element |
| `Includes<T, U>` | Check if tuple includes element |
| `IndexOf<T, U>` | Get index of element |
| `GCD<A, B>` | Greatest Common Divisor |
| `LCM<A, B>` | Least Common Multiple |
| `Factorial<N>` | Factorial of number |
| `Fibonacci<N>` | Fibonacci number |
| `IsPrime<N>` | Check if number is prime |
| `LongestCommonPrefix<T>` | Longest common prefix of strings |
| `LevenshteinDistance<A, B>` | Edit distance between strings |
| `Reverse<T>` | Reverse a tuple |
| `Unique<T>` | Remove duplicates from tuple |
| `Flatten<T>` | Flatten nested tuples |

### Type-Level Parsers *(v1.4.0)*

| Type | Description |
|------|-------------|
| `ParseJSON<S>` | Parse JSON string to type |
| `StringifyJSON<T>` | Stringify type to JSON |
| `IsValidJSON<S>` | Check if string is valid JSON |
| `ParseURL<S>` | Parse URL string |
| `QueryParams<S>` | Parse query string |
| `PathParams<Pattern, Path>` | Extract path params |
| `ParseCSV<S>` | Parse CSV string |
| `StringifyCSV<T>` | Stringify records to CSV |
| `ParseExpression<S>` | Parse arithmetic expression |
| `EvaluateExpression<T>` | Evaluate parsed expression |

### Type-Level State Machines *(v1.4.0)*

| Type | Description |
|------|-------------|
| `StateMachine<T>` | State machine definition |
| `State<S, Data>` | State definition |
| `Transition<E, From, To>` | Transition definition |
| `CurrentState<T>` | Get current state |
| `NextState<T, E>` | Get next state after event |
| `ValidTransitions<T>` | Get valid transitions |
| `StateHistory<T>` | State history type |
| `CanTransition<T, E>` | Check if transition is valid |
| `IsTerminal<T>` | Check if state is terminal |

### Type-Level Data Structures *(v1.4.0)*

| Type | Description |
|------|-------------|
| `Tree<T>` | Tree type |
| `TreeNode<T>` | Tree node type |
| `TreePath<T, V>` | Path to value in tree |
| `TreeDepth<T>` | Maximum depth of tree |
| `TreeLeaves<T>` | All leaf values |
| `TreeFlatten<T>` | Flatten tree to array |
| `Graph<Adjacency>` | Graph type (adjacency list) |
| `GraphNode<T, Edges>` | Graph node type |
| `GraphEdge<From, To>` | Graph edge type |
| `GraphPath<A, From, To>` | Path between nodes |
| `GraphHasCycle<A>` | Check for cycles |
| `LinkedList<T>` | Linked list type |
| `ListNode<T>` | List node type |
| `ListHead<T>` | Head of list |
| `ListTail<T>` | Tail of list |
| `Stack<T>` | Stack type (LIFO) |
| `Queue<T>` | Queue type (FIFO) |
| `Push<S, V>` | Push onto stack |
| `Pop<S>` | Pop from stack |

### Type-Level HTTP & API *(v1.4.0)*

| Type | Description |
|------|-------------|
| `HTTPMethod` | HTTP methods |
| `HTTPStatus` | HTTP status codes |
| `HTTPHeaders<T>` | HTTP headers type |
| `Route<P, M, H>` | Route definition |
| `RouteParams<P>` | Extract route params |
| `RouteQuery<Q>` | Route query type |
| `Router<T>` | Router type |
| `APIEndpoint<T>` | API endpoint type |
| `APIRequest<T>` | API request type |
| `APIResponse<T>` | API response type |
| `APIError<T>` | API error type |
| `Middleware<C>` | Middleware type |
| `Context<C>` | Request context |
| `ComposeMiddleware<M>` | Compose middleware chain |

### Type-Level Database *(v1.4.0)*

| Type | Description |
|------|-------------|
| `SQLType<T>` | TypeScript to SQL type mapping |
| `CreateTable<T>` | CREATE TABLE type |
| `SelectQuery<T, F>` | SELECT query type |
| `WhereClause<T>` | WHERE clause type |
| `JoinQuery<T, U>` | JOIN query type |
| `Migration<T>` | Migration type |
| `MigrationUp<T>` | Up migration |
| `MigrationDown<T>` | Down migration |
| `QueryBuilder<T>` | Query builder type |
| `WhereBuilder<T>` | WHERE builder type |
| `Index<T>` | Index type |
| `UniqueIndex<T>` | Unique index type |
| `CompositeIndex<T, K>` | Composite index type |

### Type-Level Concurrency *(v1.4.0)*

| Type | Description |
|------|-------------|
| `Task<T>` | Task type |
| `TaskResult<T>` | Task result type |
| `TaskError<T>` | Task error type |
| `TaskStatus` | Task status type |
| `Pipeline<I, O, S>` | Pipeline type |
| `PipelineStage<N, I, O>` | Pipeline stage type |
| `Scheduler<T>` | Scheduler type |
| `Worker<I, O>` | Worker type |
| `WorkerPool<I, O>` | Worker pool type |
| `RateLimiter<T>` | Rate limiter type |
| `Throttle<T>` | Throttle type |
| `Debounce<T>` | Debounce type |

### Type-Level Interop *(v1.4.0)*

| Type | Description |
|------|-------------|
| `ToTypeFest<T>` | Convert to type-fest format |
| `FromTypeFest<T>` | Convert from type-fest format |
| `ToTsToolbelt<T>` | Convert to ts-toolbelt format |
| `FromTsToolbelt<T>` | Convert from ts-toolbelt format |
| `ToUtilityTypes<T>` | Convert to utility-types format |
| `FromUtilityTypes<T>` | Convert from utility-types format |
| `ConvertTo<T, Format>` | Convert to format |
| `ConvertFrom<T, Format>` | Convert from format |
| `IsCompatible<T, U>` | Check type compatibility |
| `CompatibleWith<T, Libs>` | Check library compatibility |

### Type-Level Testing *(v1.4.0)*

| Type | Description |
|------|-------------|
| `ExpectTrue<T>` | Expect type to be true |
| `ExpectFalse<T>` | Expect type to be false |
| `ExpectEqual<T, U>` | Expect types to be equal |
| `ExpectExtends<T, U>` | Expect T extends U |
| `TypeTest<Name, Test>` | Type test definition |
| `TypeTestSuite<T>` | Test suite type |
| `TypeTestResult` | Test result type |
| `TypeCoverage<T>` | Type coverage analysis |
| `TypeComplexity<T>` | Type complexity analysis |
| `TypeInfo<T>` | Type information |
| `InspectType<T>` | Inspect type details |

### Authorization & Permissions *(v1.5.0)*

| Type | Description |
|------|-------------|
| `Permission<T>` | Permission definition |
| `PermissionSet<T>` | Set of permissions |
| `Role<T>` | Role definition |
| `RoleSet<T>` | Set of roles |
| `Policy` | Policy for ABAC |
| `PolicyRule<T>` | Policy rule |
| `PolicyEffect` | Allow or deny |
| `RBAC<R, P>` | Role-Based Access Control |
| `ABAC<T>` | Attribute-Based Access Control |
| `ACL` | Access Control List |
| `AccessControl<T>` | Access control interface |
| `Resource<T>` | Resource for authorization |
| `Action` | Action type (create, read, update, delete, etc.) |
| `AuthorizationProvider<T>` | Authorization provider |

### Caching Strategies *(v1.5.0)*

| Type | Description |
|------|-------------|
| `Cache<T>` | Cache interface |
| `CacheEntry<T>` | Cache entry |
| `CacheOptions` | Cache options (TTL, tags) |
| `CacheStats` | Cache statistics |
| `LRUCache<T>` | LRU Cache |
| `LFUCache<T>` | LFU Cache |
| `TTLCache<T>` | TTL Cache |
| `FIFOCache<T>` | FIFO Cache |
| `ARCCache<T>` | Adaptive Replacement Cache |
| `DistributedCache<T>` | Distributed cache |
| `CacheAside<T>` | Cache-aside pattern |
| `ReadThroughCache<T>` | Read-through pattern |
| `WriteThroughCache<T>` | Write-through pattern |
| `WriteBehindCache<T>` | Write-behind pattern |

### Configuration Management *(v1.5.0)*

| Type | Description |
|------|-------------|
| `Config<T>` | Configuration type |
| `ConfigField<T>` | Config field definition |
| `ConfigLoader<T>` | Config loader interface |
| `ConfigSchema<T>` | Config schema |
| `EnvConfig` | Environment config |
| `EnvMapping` | Env var mapping |
| `FeatureFlag` | Feature flag |
| `FeatureFlagConfig` | Feature flag config |
| `FeatureFlags<T>` | Feature flags collection |
| `RemoteConfigProvider<T>` | Remote config provider |
| `Secret` | Secret value |
| `SecretProvider` | Secret provider |

### Event-Driven Architecture *(v1.5.0)*

| Type | Description |
|------|-------------|
| `EventBus<T>` | Event bus interface |
| `EventStream<T>` | Event stream |
| `Command<T>` | Command for CQRS |
| `CommandBus<T>` | Command bus |
| `CommandHandler<T, R>` | Command handler |
| `Query<T>` | Query for CQRS |
| `QueryBus<T>` | Query bus |
| `QueryHandler<T, R>` | Query handler |
| `Saga<T>` | Saga orchestrator |
| `SagaStep<T>` | Saga step |
| `MessageQueue<T>` | Message queue |
| `EventStore<T>` | Event store |
| `DeadLetterQueue<T>` | Dead letter queue |

### GraphQL Integration *(v1.5.0)*

| Type | Description |
|------|-------------|
| `GraphQLSchema` | GraphQL schema |
| `GraphQLType` | GraphQL type wrapper |
| `GraphQLScalar<T>` | Scalar type |
| `GraphQLEnum<T>` | Enum type |
| `GraphQLInput<T>` | Input type |
| `GraphQLObject<T>` | Object type |
| `GraphQLField<T, A, R>` | Field type |
| `GraphQLResolver<T, A, R>` | Resolver type |
| `GraphQLContext<T>` | Context type |
| `GraphQLResult<T>` | Result wrapper |
| `GraphQLError` | Error type |

### Logging & Observability *(v1.5.0)*

| Type | Description |
|------|-------------|
| `Logger<T>` | Logger interface |
| `LogLevel` | Log levels |
| `LogEntry<T>` | Log entry |
| `Metric<T>` | Metric type |
| `Counter<T>` | Counter metric |
| `Gauge<T>` | Gauge metric |
| `Histogram` | Histogram metric |
| `Tracer` | Tracer interface |
| `Span` | Tracing span |
| `Trace<T>` | Trace type |
| `Monitor` | Monitor type |
| `Alert<T>` | Alert type |
| `HealthIndicator<T>` | Health indicator |
| `HealthCheckResult<T>` | Health check result |

### Microservices Architecture *(v1.5.0)*

| Type | Description |
|------|-------------|
| `Microservice<T>` | Microservice type |
| `ServiceConfig<T>` | Service config |
| `ServiceRegistry<T>` | Service registry |
| `ServiceInstance` | Service instance |
| `ServiceDiscovery<T>` | Service discovery |
| `CircuitBreaker<T>` | Circuit breaker |
| `RateLimit` | Rate limiting |
| `LoadBalancer<T>` | Load balancer |
| `APIGateway<T>` | API Gateway |
| `GatewayRoute` | Gateway route |
| `HealthReport` | Health report |

### Validation Rules *(v1.5.0)*

| Type | Description |
|------|-------------|
| `ValidationRule<T>` | Validation rule |
| `Validator<T>` | Validator function |
| `ValidatorResult<T>` | Validator result |
| `ValidationError` | Validation error |
| `StringFieldValidator<T>` | String validator |
| `NumberFieldValidator<T>` | Number validator |
| `ArrayFieldValidator<T>` | Array validator |
| `ObjectFieldValidator<T>` | Object validator |
| `MinLength` | Min length constraint |
| `MaxLength` | Max length constraint |
| `MinValue` | Min value constraint |
| `MaxValue` | Max value constraint |
| `Pattern` | Regex pattern |
| `Sanitizer<T>` | Sanitizer function |

### WebSocket & Real-Time *(v1.5.0)*

| Type | Description |
|------|-------------|
| `WebSocketConfig` | WebSocket config |
| `WebSocketMessage<T>` | WebSocket message |
| `EventEmitter<T>` | Event emitter |
| `PubSub<T>` | Pub/Sub interface |
| `Publisher<T>` | Publisher |
| `Subscriber<T>` | Subscriber |
| `RealTimeChannel<T>` | Real-time channel |
| `RealTimeClient<T>` | Real-time client |
| `Stream<T>` | Stream interface |
| `StreamReader<T>` | Stream reader |
| `StreamWriter<T>` | Stream writer |

### Workflow Engine *(v1.5.0)*

| Type | Description |
|------|-------------|
| `Workflow<T>` | Workflow definition |
| `WorkflowInstance<T>` | Workflow instance |
| `WorkflowStep<T>` | Workflow step |
| `WorkflowTransition<T>` | Workflow transition |
| `WorkflowExecution<T>` | Workflow execution |
| `WorkflowHistory<T>` | Workflow history |
| `WorkflowEngine<T>` | Workflow engine |
| `RetryPolicy` | Retry policy |
| `BPMNProcess<T>` | BPMN process |
| `BPMNTask<T>` | BPMN task |
| `BPMNGateway<T>` | BPMN gateway |
| `BPMNEvent<T>` | BPMN event |

## Examples

```typescript
import type {
  SnakeCase,
  CamelCaseKeys,
  UnionToIntersection,
  AtLeastOne
} from 'uni-types'

// String case conversion
SnakeCase<'XMLParser'>  // 'xml_parser'
CamelCaseKeys<{ user_name: string, user_age: number }>
// { userName: string, userAge: number }

// Union to intersection
UnionToIntersection<{ a: string } | { b: number }>
// { a: string } & { b: number }

// Require at least one property
type Options = AtLeastOne<{ a?: string; b?: number; c?: boolean }>
// Must have at least one of a, b, or c
```

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Build
pnpm build

# Type check
pnpm typecheck

# Start docs dev server
pnpm docs:dev
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details.

## License

[MIT](LICENSE) © [saqqdy](https://github.com/saqqdy)

[npm-image]: https://img.shields.io/npm/v/uni-types.svg?style=flat-square
[npm-url]: https://npmjs.org/package/uni-types
[typescript-url]: https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript&logoColor=white
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/uni-types.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/uni-types
[download-image]: https://img.shields.io/npm/dm/uni-types.svg?style=flat-square
[download-url]: https://npmjs.org/package/uni-types
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square
[license-url]: LICENSE
