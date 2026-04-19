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

## 可用类型 (500+)

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

## 示例代码

以下是一个展示各种功能的综合示例：

```typescript
import type {
  PickRequired, DeepPartial, DeepReadonly, Sort, GCD, Factorial,
  IsArray, IsTuple, IsEqual, ObjectPickByType, Split, Join,
  CamelCase, SnakeCase, Paths, PathValue, AssertEqual,
  Microservice, ServiceConfig, CircuitBreaker, Cache,
  LRUCache, EventBus, Saga, Logger, LogLevel,
  Workflow, WorkflowStep, RBAC, Permission, Role
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
```

## 外部资源

- [TypeScript Playground](https://www.typescriptlang.org/play) - TypeScript 官方演练场
- [Type Challenges](https://github.com/type-challenges/type-challenges) - TypeScript 类型挑战练习
- [type-fest](https://github.com/sindresorhus/type-fest) - 流行的 TypeScript 类型集合