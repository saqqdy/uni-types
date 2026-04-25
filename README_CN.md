<div align="center">

# uni-types

**通用 TypeScript 类型工具库**

为 TypeScript 开发提供全面的类型助手集合

[![NPM version][npm-image]][npm-url]
[![NPM downloads][download-image]][download-url]
![TypeScript][typescript-url]
[![Codecov][codecov-image]][codecov-url]
[![License][license-image]][license-url]

[**在线文档**](https://saqqdy.github.io/uni-types/zh/) · [**English**](./README.md)

</div>

## 特性

- 🎯 **700+ 类型工具** - 覆盖各种使用场景的全面类型助手
- 🔒 **类型安全** - 完整的 TypeScript 支持，严格的类型检查
- 📦 **零依赖** - 轻量级，支持 tree-shaking
- 🚀 **TypeScript 5.x** - 使用最新 TypeScript 特性构建
- 🌍 **双语文档** - 提供中英文文档支持

## 安装

```bash
# pnpm
pnpm add uni-types

# yarn
yarn add uni-types

# npm
npm install uni-types
```

## 快速开始

```typescript
import type {
  PickRequired,
  DeepPartial,
  IsArray,
  Brand,
  If,
  Paths
} from 'uni-types'

// 核心：将指定属性变为必需
interface User {
  name?: string
  age?: number
  email: string
}

type RequiredUser = PickRequired<User, 'name' | 'age'>
// { name: string; age: number; email: string }

// 深度：将所有嵌套属性变为可选
interface Config {
  database: {
    host: string
    port: number
  }
}

type PartialConfig = DeepPartial<Config>
// { database?: { host?: string; port?: number } }

// 品牌：创建名义类型
type UserId = Brand<string, 'UserId'>
type OrderId = Brand<string, 'OrderId'>
// UserId 和 OrderId 不可互换！

// 条件：类型级别逻辑
type Result = If<true, 'success', 'error'> // 'success'
```

## API 参考

### 核心操作

| 类型 | 描述 |
|------|------|
| `PickRequired<T, K>` | 将指定属性变为必需 |
| `OmitRequired<T, K>` | 将指定属性之外变为必需 |
| `PickPartial<T, K>` | 将指定属性变为可选 |
| `OmitPartial<T, K>` | 将指定属性之外变为可选 |

### 元组操作

| 类型 | 描述 |
|------|------|
| `Head<T>` | 获取元组第一个元素 |
| `Last<T>` | 获取元组最后一个元素 |
| `Tail<T>` | 获取除第一个外的所有元素 |
| `Init<T>` | 获取除最后一个外的所有元素 |
| `Reverse<T>` | 反转元组 |
| `Flatten<T>` | 展平嵌套元组 |
| `TupleLength<T>` | 获取元组长度 |
| `IsEmptyTuple<T>` | 判断元组是否为空 |

### 深度操作

| 类型 | 描述 |
|------|------|
| `DeepPartial<T>` | 将所有嵌套属性变为可选 |
| `DeepRequired<T>` | 将所有嵌套属性变为必需 |
| `DeepReadonly<T>` | 将所有嵌套属性变为只读 |
| `DeepMutable<T>` | 将所有嵌套属性变为可变 |
| `DeepOmit<T, P>` | 按路径移除属性 |
| `DeepPick<T, P>` | 按路径选取属性 |

### 类型判断

| 类型 | 描述 |
|------|------|
| `IsArray<T>` | 判断类型是否为数组 |
| `IsTuple<T>` | 判断类型是否为元组 |
| `IsEqual<X, Y>` | 判断两个类型是否相等 |
| `IsAny<T>` | 判断类型是否为 `any` |
| `IsNever<T>` | 判断类型是否为 `never` |
| `IsUnknown<T>` | 判断类型是否为 `unknown` |
| `IsFunction<T>` | 判断类型是否为函数 |
| `IsAsyncFunction<T>` | 判断类型是否为异步函数 |

### 条件类型 *(v1.1.0)*

| 类型 | 描述 |
|------|------|
| `If<C, T, F>` | 类型级别的 if-then-else |
| `Not<B>` | 布尔类型的逻辑非 |
| `And<A, B>` | 布尔类型的逻辑与 |
| `Or<A, B>` | 布尔类型的逻辑或 |
| `Assert<T, U>` | 类型约束断言 |

### 品牌类型 *(v1.1.0)*

| 类型 | 描述 |
|------|------|
| `Brand<T, B>` | 创建品牌类型，用于名义类型 |
| `Unbrand<T>` | 从品牌类型中提取底层类型 |

### 函数工具 *(v1.1.0)*

| 类型 | 描述 |
|------|------|
| `Parameters<T>` | 获取函数参数为元组 |
| `ReturnType<T>` | 获取函数返回类型 |
| `NthParameter<T, N>` | 获取第 N 个参数类型 |
| `AsyncReturnType<T>` | 提取异步函数返回类型 |
| `ThisParameterType<T>` | 获取 `this` 参数类型 |
| `OmitThisParameter<T>` | 从函数中移除 `this` 参数 |

### 模板字面量工具 *(v1.1.0)*

| 类型 | 描述 |
|------|------|
| `ReplaceAll<S, From, To>` | 替换所有匹配项 |
| `Replace<S, From, To>` | 替换第一个匹配项 |
| `Trim<S>` | 去除空白字符 |
| `StringToArray<S>` | 将字符串转为数组 |
| `CapitalizeAll<S>` | 每个单词首字母大写 |
| `StartsWith<S, P>` | 判断是否以指定前缀开头 |
| `EndsWith<S, P>` | 判断是否以指定后缀结尾 |
| `StringLength<S>` | 获取字符串长度 |

### 数字工具 *(v1.1.0)*

| 类型 | 描述 |
|------|------|
| `Inc<N>` | 数字加一 |
| `Dec<N>` | 数字减一 |
| `Add<A, B>` | 两数相加 |
| `Subtract<A, B>` | 两数相减 |
| `GreaterThan<A, B>` | 判断 A > B |
| `LessThan<A, B>` | 判断 A < B |
| `Max<A, B>` | 两数最大值 |
| `Min<A, B>` | 两数最小值 |

### 路径类型

| 类型 | 描述 |
|------|------|
| `Paths<T>` | 获取所有嵌套属性路径 |
| `PathValue<T, P>` | 获取路径处的值类型 |
| `ValidPath<T, P>` | 判断路径是否有效 |
| `ArrayPaths<T>` | 获取包含数组索引的路径 |
| `LeafPaths<T>` | 获取到原始值的路径 |

### 键工具 *(v1.1.0)*

| 类型 | 描述 |
|------|------|
| `Keys<T>` | 获取所有键 |
| `RenameKeys<T, M>` | 根据映射重命名键 |
| `PrefixKeys<T, P>` | 为所有键添加前缀 |
| `SuffixKeys<T, S>` | 为所有键添加后缀 |
| `KeysByValueType<T, V>` | 按值类型获取键 |

### 记录工具 *(v1.1.0)*

| 类型 | 描述 |
|------|------|
| `DeepNullable<T>` | 将所有属性变为可空 |
| `DeepOptional<T>` | 将所有属性变为可选 |
| `Immutable<T>` | 将所有属性变为只读 |
| `Mutable<T>` | 将所有属性变为可变 |
| `DeepNonNullable<T>` | 移除所有属性的 null/undefined |
| `Exact<T, Shape>` | 确保精确匹配形状 |

### Schema 验证 *(v1.2.0)*

| 类型 | 描述 |
|------|------|
| `RuntimeGuard<T>` | 定义运行时类型守卫函数 |
| `GuardedType<G>` | 从类型守卫提取类型 |
| `HasRuntimeCheck<T>` | 判断类型是否有运行时检查 |
| `ZodOutput<T>` | 从 Zod schema 提取输出类型 |
| `ZodInput<T>` | 从 Zod schema 提取输入类型 |
| `ZodShape<T>` | 从 ZodObject 提取形状 |
| `ZodRequiredKeys<T>` | 获取 Zod schema 必需键 |
| `ZodOptionalKeys<T>` | 获取 Zod schema 可选键 |
| `YupOutput<T>` | 从 Yup schema 提取输出类型 |
| `YupInput<T>` | 从 Yup schema 提取输入类型 |

### 生态系统集成 *(v1.2.0)*

| 类型 | 描述 |
|------|------|
| `ComponentProps<T>` | 从 React 组件提取 props |
| `PropsWithChildren<P>` | 向 props 添加 children |
| `RequiredProps<P>` | 获取必需的 prop 键 |
| `OptionalProps<P>` | 获取可选的 prop 键 |
| `VuePropType<T>` | Vue prop 类型定义 |
| `VueEmitType<T>` | Vue emit 函数类型 |
| `PrismaCreateInput<T>` | Prisma 模型创建输入类型 |
| `PrismaUpdateInput<T>` | Prisma 模型更新输入类型 |
| `PrismaWhereInput<T>` | Prisma 查询 where 输入类型 |
| `TRPCProcedureInput<T>` | 从 tRPC 过程提取输入类型 |
| `TRPCProcedureOutput<T>` | 从 tRPC 过程提取输出类型 |

### 性能优化 *(v1.2.0)*

| 类型 | 描述 |
|------|------|
| `Simplify<T>` | 展平交叉类型 |
| `DeepSimplify<T>` | 递归简化嵌套类型 |
| `Compact<T>` | 移除 never 和 undefined 属性 |
| `StripNever<T>` | 移除 never 属性 |
| `StripUndefined<T>` | 移除 undefined 属性 |
| `MergeAll<T>` | 合并多个对象类型 |
| `Lazy<T>` | 延迟类型求值 |
| `Cached<T>` | 缓存类型计算 |
| `Memoized<T>` | 记忆化类型计算 |

### 高级类型模式 *(v1.3.0)*

| 类型 | 描述 |
|------|------|
| `Match<T, Patterns>` | 类型级模式匹配 |
| `Recurse<T, Limit>` | 带深度限制的类型级递归 |
| `Depth<T>` | 获取嵌套类型的最大深度 |
| `TypeFilter<T, P>` | 按谓词过滤元组 |
| `TypeFind<T, P>` | 查找第一个匹配元素 |
| `TypeIncludes<T, E>` | 检查元组是否包含元素 |
| `TypeEvery<T, P>` | 检查是否所有元素匹配 |
| `TypeSome<T, P>` | 检查是否有元素匹配 |

### 类型级集合 *(v1.3.0)*

| 类型 | 描述 |
|------|------|
| `TypeSet<T>` | 类型级 Set 表示 |
| `SetAdd<S, T>` | 向类型集合添加元素 |
| `SetRemove<S, T>` | 从类型集合移除元素 |
| `SetUnion<A, B>` | 两个类型集合的并集 |
| `SetIntersection<A, B>` | 两个类型集合的交集 |
| `SetDifference<A, B>` | 两个类型集合的差集 |
| `TypeMap<K, V>` | 类型级 Map 表示 |
| `MapGet<M, K>` | 从类型映射获取值 |
| `MapSet<M, K, V>` | 设置类型映射的值 |
| `ListFilter<T, P>` | 过滤列表元素 |
| `ListReverse<T>` | 反转列表 |
| `ListConcat<A, B>` | 连接两个列表 |
| `ListTake<T, N>` | 获取前 N 个元素 |
| `ListChunk<T, N>` | 将列表分块 |

### 类型断言与约束 *(v1.3.0)*

| 类型 | 描述 |
|------|------|
| `AssertEqual<T, Expected>` | 断言类型相等 |
| `AssertExtends<T, U>` | 断言 T 继承 U |
| `RequireKeys<T, K>` | 要求特定键 |
| `RequireAtLeastOne<T, K>` | 至少要求一个键 |
| `RequireExactlyOne<T, K>` | 恰好要求一个键 |
| `RequireAllOrNone<T, K>` | 要求全部或无 |
| `HasProperty<T, K>` | 确保对象有属性 |
| `RequireArray<T>` | 确保类型是数组 |
| `RequireFunction<T>` | 确保类型是函数 |

### 字符串操作 *(v1.3.0)*

| 类型 | 描述 |
|------|------|
| `Split<S, D>` | 按分隔符分割字符串 |
| `Join<T, S>` | 用分隔符连接字符串数组 |
| `KebabCase<S>` | 转换为 kebab-case |
| `PascalCase<S>` | 转换为 PascalCase |
| `ConstantCase<S>` | 转换为 CONSTANT_CASE |
| `IsEmail<S>` | 检查是否为邮箱 |
| `IsUUID<S>` | 检查是否为 UUID |
| `IsURL<S>` | 检查是否为 URL |
| `ReverseString<S>` | 反转字符串 |

### Promise 与异步工具 *(v1.3.0)*

| 类型 | 描述 |
|------|------|
| `PromiseValue<T>` | 从 Promise 提取值（深度） |
| `IsPromise<T>` | 检查类型是否为 Promise |
| `UnwrapPromise<T>` | 解包或返回原类型 |
| `AsyncReturnType<T>` | 异步函数返回类型 |
| `MakeAsync<T>` | 使函数异步化 |
| `PromiseAll<T>` | 等待所有 Promise |
| `AsyncResult<T, E>` | Rust 风格 Result 类型 |
| `Deferred<T>` | 延迟 Promise 类型 |

### 对象操作 *(v1.3.0)*

| 类型 | 描述 |
|------|------|
| `ObjectMap<T, F>` | 映射对象值 |
| `ObjectFilter<T, P>` | 过滤对象属性 |
| `ObjectPickByType<T, U>` | 按值类型选取 |
| `ObjectInvert<T>` | 反转对象（交换键值） |
| `DeepMerge<A, B>` | 深度合并对象 |
| `ObjectPath<T, P>` | 获取路径处的值 |
| `PathExists<T, P>` | 检查路径是否存在 |
| `KeysOfType<T, U>` | 获取特定类型的键 |

### JSON Schema *(v1.3.0)*

| 类型 | 描述 |
|------|------|
| `JsonSchemaType<T>` | 将 TS 类型映射到 JSON Schema 类型 |
| `JsonSchema<T>` | 完整 JSON Schema 类型 |
| `OpenAPISchema<T>` | OpenAPI 3.0 Schema |
| `OpenAPIResponse<T>` | OpenAPI 响应 |
| `OpenAPIRequestBody<T>` | OpenAPI 请求体 |
| `OpenAPIParameter<Name, T, In>` | OpenAPI 参数 |
| `OpenAPIDocument<Title, Version, Paths>` | OpenAPI 文档 |

### 扩展生态 *(v1.3.0)*

| 类型 | 描述 |
|------|------|
| `NextPageProps<T>` | Next.js 页面 props |
| `ServerComponentProps<T>` | Next.js 服务端组件 props |
| `NuxtPageMeta<T>` | Nuxt 页面元信息 |
| `NuxtComposable<T>` | Nuxt composable 类型 |
| `SolidSignal<T>` | SolidJS signal 类型 |
| `SolidResource<T>` | SolidJS resource 类型 |
| `SvelteStore<T>` | Svelte store 类型 |
| `SvelteAction<Element, Params>` | Svelte action 类型 |

### 类型级算法 *(v1.4.0)*

| 类型 | 描述 |
|------|------|
| `Sort<T, Order>` | 数字元组排序 |
| `QuickSort<T>` | 快速排序实现 |
| `MergeSort<T>` | 归并排序实现 |
| `Find<T, P>` | 查找第一个匹配元素 |
| `FindIndex<T, P>` | 查找匹配元素索引 |
| `Includes<T, U>` | 检查元组是否包含元素 |
| `IndexOf<T, U>` | 获取元素索引 |
| `GCD<A, B>` | 最大公约数 |
| `LCM<A, B>` | 最小公倍数 |
| `Factorial<N>` | 阶乘 |
| `Fibonacci<N>` | 斐波那契数 |
| `IsPrime<N>` | 判断是否为质数 |
| `LongestCommonPrefix<T>` | 字符串最长公共前缀 |
| `LevenshteinDistance<A, B>` | 字符串编辑距离 |
| `Reverse<T>` | 反转元组 |
| `Unique<T>` | 移除重复元素 |
| `Flatten<T>` | 展平嵌套元组 |

### 类型级解析器 *(v1.4.0)*

| 类型 | 描述 |
|------|------|
| `ParseJSON<S>` | 解析 JSON 字符串为类型 |
| `StringifyJSON<T>` | 类型转 JSON 字符串 |
| `IsValidJSON<S>` | 检查是否为有效 JSON |
| `ParseURL<S>` | 解析 URL 字符串 |
| `QueryParams<S>` | 解析查询字符串 |
| `PathParams<Pattern, Path>` | 提取路径参数 |
| `ParseCSV<S>` | 解析 CSV 字符串 |
| `StringifyCSV<T>` | 记录转 CSV 格式 |
| `ParseExpression<S>` | 解析算术表达式 |
| `EvaluateExpression<T>` | 计算解析后的表达式 |

### 类型级状态机 *(v1.4.0)*

| 类型 | 描述 |
|------|------|
| `StateMachine<T>` | 状态机定义 |
| `State<S, Data>` | 状态定义 |
| `Transition<E, From, To>` | 转换定义 |
| `CurrentState<T>` | 获取当前状态 |
| `NextState<T, E>` | 事件后获取下一状态 |
| `ValidTransitions<T>` | 获取有效转换 |
| `StateHistory<T>` | 状态历史类型 |
| `CanTransition<T, E>` | 检查转换是否有效 |
| `IsTerminal<T>` | 检查是否为终止状态 |

### 类型级数据结构 *(v1.4.0)*

| 类型 | 描述 |
|------|------|
| `Tree<T>` | 树类型 |
| `TreeNode<T>` | 树节点类型 |
| `TreePath<T, V>` | 树中到值的路径 |
| `TreeDepth<T>` | 树的最大深度 |
| `TreeLeaves<T>` | 所有叶子值 |
| `TreeFlatten<T>` | 树转数组（前序遍历） |
| `Graph<Adjacency>` | 图类型（邻接表） |
| `GraphNode<T, Edges>` | 图节点类型 |
| `GraphEdge<From, To>` | 图边类型 |
| `GraphPath<A, From, To>` | 节点间路径 |
| `GraphHasCycle<A>` | 检查是否有环 |
| `LinkedList<T>` | 链表类型 |
| `ListNode<T>` | 链表节点类型 |
| `ListHead<T>` | 链表头部 |
| `ListTail<T>` | 链表尾部 |
| `Stack<T>` | 栈类型（LIFO） |
| `Queue<T>` | 队列类型（FIFO） |
| `Push<S, V>` | 入栈 |
| `Pop<S>` | 出栈 |

### 类型级 HTTP 与 API *(v1.4.0)*

| 类型 | 描述 |
|------|------|
| `HTTPMethod` | HTTP 方法 |
| `HTTPStatus` | HTTP 状态码 |
| `HTTPHeaders<T>` | HTTP 头类型 |
| `Route<P, M, H>` | 路由定义 |
| `RouteParams<P>` | 提取路由参数 |
| `RouteQuery<Q>` | 路由查询类型 |
| `Router<T>` | 路由器类型 |
| `APIEndpoint<T>` | API 端点类型 |
| `APIRequest<T>` | API 请求类型 |
| `APIResponse<T>` | API 响应类型 |
| `APIError<T>` | API 错误类型 |
| `Middleware<C>` | 中间件类型 |
| `Context<C>` | 请求上下文 |
| `ComposeMiddleware<M>` | 组合中间件链 |

### 类型级数据库 *(v1.4.0)*

| 类型 | 描述 |
|------|------|
| `SQLType<T>` | TypeScript 到 SQL 类型映射 |
| `CreateTable<T>` | CREATE TABLE 类型 |
| `SelectQuery<T, F>` | SELECT 查询类型 |
| `WhereClause<T>` | WHERE 条件类型 |
| `JoinQuery<T, U>` | JOIN 查询类型 |
| `Migration<T>` | 迁移类型 |
| `MigrationUp<T>` | 升级迁移 |
| `MigrationDown<T>` | 降级迁移 |
| `QueryBuilder<T>` | 查询构建器类型 |
| `WhereBuilder<T>` | WHERE 构建器类型 |
| `Index<T>` | 索引类型 |
| `UniqueIndex<T>` | 唯一索引类型 |
| `CompositeIndex<T, K>` | 组合索引类型 |

### 类型级并发 *(v1.4.0)*

| 类型 | 描述 |
|------|------|
| `Task<T>` | 任务类型 |
| `TaskResult<T>` | 任务结果类型 |
| `TaskError<T>` | 任务错误类型 |
| `TaskStatus` | 任务状态类型 |
| `Pipeline<I, O, S>` | 管道类型 |
| `PipelineStage<N, I, O>` | 管道阶段类型 |
| `Scheduler<T>` | 调度器类型 |
| `Worker<I, O>` | 工作器类型 |
| `WorkerPool<I, O>` | 工作池类型 |
| `RateLimiter<T>` | 限流器类型 |
| `Throttle<T>` | 节流类型 |
| `Debounce<T>` | 防抖类型 |

### 类型级互操作 *(v1.4.0)*

| 类型 | 描述 |
|------|------|
| `ToTypeFest<T>` | 转换为 type-fest 格式 |
| `FromTypeFest<T>` | 从 type-fest 格式转换 |
| `ToTsToolbelt<T>` | 转换为 ts-toolbelt 格式 |
| `FromTsToolbelt<T>` | 从 ts-toolbelt 格式转换 |
| `ToUtilityTypes<T>` | 转换为 utility-types 格式 |
| `FromUtilityTypes<T>` | 从 utility-types 格式转换 |
| `ConvertTo<T, Format>` | 转换为指定格式 |
| `ConvertFrom<T, Format>` | 从指定格式转换 |
| `IsCompatible<T, U>` | 检查类型兼容性 |
| `CompatibleWith<T, Libs>` | 检查库兼容性 |

### 类型级测试 *(v1.4.0)*

| 类型 | 描述 |
|------|------|
| `ExpectTrue<T>` | 期望类型为 true |
| `ExpectFalse<T>` | 期望类型为 false |
| `ExpectEqual<T, U>` | 期望类型相等 |
| `ExpectExtends<T, U>` | 期望 T 继承 U |
| `TypeTest<Name, Test>` | 类型测试定义 |
| `TypeTestSuite<T>` | 测试套件类型 |
| `TypeTestResult` | 测试结果类型 |
| `TypeCoverage<T>` | 类型覆盖分析 |
| `TypeComplexity<T>` | 类型复杂度分析 |
| `TypeInfo<T>` | 类型信息 |
| `InspectType<T>` | 检查类型详情 |

### 权限与授权 *(v1.5.0)*

| 类型 | 描述 |
|------|------|
| `Permission<T>` | 权限定义 |
| `PermissionSet<T>` | 权限集合 |
| `Role<T>` | 角色定义 |
| `RoleSet<T>` | 角色集合 |
| `Policy` | ABAC 策略 |
| `PolicyRule<T>` | 策略规则 |
| `PolicyEffect` | 允许或拒绝 |
| `RBAC<R, P>` | 基于角色的访问控制 |
| `ABAC<T>` | 基于属性的访问控制 |
| `ACL` | 访问控制列表 |
| `AccessControl<T>` | 访问控制接口 |
| `Resource<T>` | 授权资源 |
| `Action` | 操作类型 (create, read, update, delete 等) |
| `AuthorizationProvider<T>` | 授权提供者 |

### 缓存策略 *(v1.5.0)*

| 类型 | 描述 |
|------|------|
| `Cache<T>` | 缓存接口 |
| `CacheEntry<T>` | 缓存条目 |
| `CacheOptions` | 缓存选项 (TTL, tags) |
| `CacheStats` | 缓存统计 |
| `LRUCache<T>` | LRU 缓存 |
| `LFUCache<T>` | LFU 缓存 |
| `TTLCache<T>` | TTL 缓存 |
| `FIFOCache<T>` | FIFO 缓存 |
| `ARCCache<T>` | 自适应替换缓存 |
| `DistributedCache<T>` | 分布式缓存 |
| `CacheAside<T>` | 缓存旁路模式 |
| `ReadThroughCache<T>` | 读穿透模式 |
| `WriteThroughCache<T>` | 写穿透模式 |
| `WriteBehindCache<T>` | 写回模式 |

### 配置管理 *(v1.5.0)*

| 类型 | 描述 |
|------|------|
| `Config<T>` | 配置类型 |
| `ConfigField<T>` | 配置字段定义 |
| `ConfigLoader<T>` | 配置加载器接口 |
| `ConfigSchema<T>` | 配置 Schema |
| `EnvConfig` | 环境配置 |
| `EnvMapping` | 环境变量映射 |
| `FeatureFlag` | 功能开关 |
| `FeatureFlagConfig` | 功能开关配置 |
| `FeatureFlags<T>` | 功能开关集合 |
| `RemoteConfigProvider<T>` | 远程配置提供者 |
| `Secret` | 密钥值 |
| `SecretProvider` | 密钥提供者 |

### 事件驱动架构 *(v1.5.0)*

| 类型 | 描述 |
|------|------|
| `EventBus<T>` | 事件总线接口 |
| `EventStream<T>` | 事件流 |
| `Command<T>` | CQRS 命令 |
| `CommandBus<T>` | 命令总线 |
| `CommandHandler<T, R>` | 命令处理器 |
| `Query<T>` | CQRS 查询 |
| `QueryBus<T>` | 查询总线 |
| `QueryHandler<T, R>` | 查询处理器 |
| `Saga<T>` | Saga 编排器 |
| `SagaStep<T>` | Saga 步骤 |
| `MessageQueue<T>` | 消息队列 |
| `EventStore<T>` | 事件存储 |
| `DeadLetterQueue<T>` | 死信队列 |

### GraphQL 集成 *(v1.5.0)*

| 类型 | 描述 |
|------|------|
| `GraphQLSchema` | GraphQL Schema |
| `GraphQLType` | GraphQL 类型包装器 |
| `GraphQLScalar<T>` | 标量类型 |
| `GraphQLEnum<T>` | 枚举类型 |
| `GraphQLInput<T>` | 输入类型 |
| `GraphQLObject<T>` | 对象类型 |
| `GraphQLField<T, A, R>` | 字段类型 |
| `GraphQLResolver<T, A, R>` | Resolver 类型 |
| `GraphQLContext<T>` | 上下文类型 |
| `GraphQLResult<T>` | 结果包装器 |
| `GraphQLError` | 错误类型 |

### 日志与可观测性 *(v1.5.0)*

| 类型 | 描述 |
|------|------|
| `Logger<T>` | 日志接口 |
| `LogLevel` | 日志级别 |
| `LogEntry<T>` | 日志条目 |
| `Metric<T>` | 指标类型 |
| `Counter<T>` | 计数器指标 |
| `Gauge<T>` | 仪表指标 |
| `Histogram` | 直方图指标 |
| `Tracer` | 追踪器接口 |
| `Span` | 追踪 Span |
| `Trace<T>` | Trace 类型 |
| `Monitor` | 监控类型 |
| `Alert<T>` | 告警类型 |
| `HealthIndicator<T>` | 健康指示器 |
| `HealthCheckResult<T>` | 健康检查结果 |

### 微服务架构 *(v1.5.0)*

| 类型 | 描述 |
|------|------|
| `Microservice<T>` | 微服务类型 |
| `ServiceConfig<T>` | 服务配置 |
| `ServiceRegistry<T>` | 服务注册中心 |
| `ServiceInstance` | 服务实例 |
| `ServiceDiscovery<T>` | 服务发现 |
| `CircuitBreaker<T>` | 熔断器 |
| `RateLimit` | 限流 |
| `LoadBalancer<T>` | 负载均衡器 |
| `APIGateway<T>` | API 网关 |
| `GatewayRoute` | 网关路由 |
| `HealthReport` | 健康报告 |

### 验证规则 *(v1.5.0)*

| 类型 | 描述 |
|------|------|
| `ValidationRule<T>` | 验证规则 |
| `Validator<T>` | 验证函数 |
| `ValidatorResult<T>` | 验证结果 |
| `ValidationError` | 验证错误 |
| `StringFieldValidator<T>` | 字符串验证器 |
| `NumberFieldValidator<T>` | 数字验证器 |
| `ArrayFieldValidator<T>` | 数组验证器 |
| `ObjectFieldValidator<T>` | 对象验证器 |
| `MinLength` | 最小长度约束 |
| `MaxLength` | 最大长度约束 |
| `MinValue` | 最小值约束 |
| `MaxValue` | 最大值约束 |
| `Pattern` | 正则模式 |
| `Sanitizer<T>` | 清洗函数 |

### WebSocket 与实时通信 *(v1.5.0)*

| 类型 | 描述 |
|------|------|
| `WebSocketConfig` | WebSocket 配置 |
| `WebSocketMessage<T>` | WebSocket 消息 |
| `EventEmitter<T>` | 事件发射器 |
| `PubSub<T>` | Pub/Sub 接口 |
| `Publisher<T>` | 发布者 |
| `Subscriber<T>` | 订阅者 |
| `RealTimeChannel<T>` | 实时通道 |
| `RealTimeClient<T>` | 实时客户端 |
| `Stream<T>` | 流接口 |
| `StreamReader<T>` | 流读取器 |
| `StreamWriter<T>` | 流写入器 |

### 工作流引擎 *(v1.5.0)*

| 类型 | 描述 |
|------|------|
| `Workflow<T>` | 工作流定义 |
| `WorkflowInstance<T>` | 工作流实例 |
| `WorkflowStep<T>` | 工作流步骤 |
| `WorkflowTransition<T>` | 工作流转换 |
| `WorkflowExecution<T>` | 工作流执行 |
| `WorkflowHistory<T>` | 工作流历史 |
| `WorkflowEngine<T>` | 工作流引擎 |
| `RetryPolicy` | 重试策略 |
| `BPMNProcess<T>` | BPMN 流程 |
| `BPMNTask<T>` | BPMN 任务 |
| `BPMNGateway<T>` | BPMN 网关 |
| `BPMNEvent<T>` | BPMN 事件 |

### AI/ML 类型 *(v1.6.0)*

| 类型 | 描述 |
|------|------|
| `Tensor<Shape, DType>` | 具有形状和数据类型的张量 |
| `TensorShape` | 张量形状类型 |
| `TensorDType` | 张量数据类型 (float32, int32 等) |
| `Model<Input, Output>` | 模型类型 |
| `ModelConfig<T>` | 模型配置 |
| `Layer<T>` | 神经网络层 |
| `LayerType` | 层类型 (dense, conv2d, lstm 等) |
| `Optimizer` | 优化器 (adam, sgd, rmsprop) |
| `LossFunction` | 损失函数 (mse, crossentropy) |
| `MLMetric` | ML 指标 (accuracy, precision, recall) |
| `Dataset<T>` | 数据集类型 |
| `DataLoader<T>` | 数据加载器类型 |
| `Batch<T>` | 批次类型 |
| `InferenceResult<T>` | 推理结果 |
| `Prediction<T>` | 预测结果 |

### 函数式编程 *(v1.6.0)*

| 类型 | 描述 |
|------|------|
| `Functor<T>` | Functor 类型 |
| `Monad<T>` | Monad 类型 |
| `Applicative<T>` | Applicative 类型 |
| `Maybe<T>` | Maybe 单子 (Some/None) |
| `Either<L, R>` | Either 单子 (Left/Right) |
| `IO<T>` | IO 单子 |
| `Reader<R, T>` | Reader 单子 |
| `Writer<W, T>` | Writer 单子 |
| `State<S, T>` | State 单子 |
| `Result<T, E>` | Result 类型 (Ok/Err) |
| `Lens<S, A>` | 用于深层访问的 Lens |
| `Semigroup<T>` | Semigroup 类型 |
| `Monoid<T>` | Monoid 类型 |
| `Compose` | 函数组合 |
| `Pipe` | 管道组合 |
| `Curry` | 柯里化函数 |

### 类型级编译器 *(v1.6.0)*

| 类型 | 描述 |
|------|------|
| `ASTNode<T>` | AST 节点类型 |
| `ASTNodeType` | AST 节点类型 |
| `Token<T>` | 词法单元类型 |
| `TokenType` | 词法类型 (keyword, identifier 等) |
| `Parser<T>` | 解析器类型 |
| `ParserResult<T>` | 解析器结果 |
| `CodeGenerator<T>` | 代码生成器 |
| `GeneratedCode` | 生成的代码类型 |
| `Transformer<T>` | AST 转换器 |
| `Formatter` | 代码格式化器 |

### 分布式系统 *(v1.6.0)*

| 类型 | 描述 |
|------|------|
| `Consensus<T>` | 共识协议 |
| `ConsensusState` | 共识状态 (leader, follower, candidate) |
| `Replica<T>` | 副本类型 |
| `ReplicationStrategy` | 复制策略 (sync, async) |
| `Partition<T>` | 分区类型 |
| `PartitionStrategy` | 分区策略 (hash, range) |
| `ConsistencyLevel` | 一致性级别 (strong, eventual) |
| `DistributedLock<T>` | 分布式锁 |
| `TwoPhaseCommit<T>` | 两阶段提交协议 |
| `TransactionState` | 事务状态 |
| `FailureDetector<T>` | 故障检测器 |
| `Heartbeat<T>` | 心跳类型 |

### 安全类型 *(v1.6.0)*

| 类型 | 描述 |
|------|------|
| `Authentication<T>` | 身份验证配置 |
| `AuthType` | 认证类型 (bearer, jwt, oauth2) |
| `AuthStatus` | 认证状态 (authenticated, failed) |
| `Session<T>` | 会话类型 |
| `Encryption<T>` | 加密配置 |
| `EncryptionAlgorithm` | 加密算法 |
| `Hash<T>` | 哈希类型 |
| `HashAlgorithm` | 哈希算法 (sha256, blake3) |
| `Signature<T>` | 签名类型 |
| `SignatureAlgorithm` | 签名算法 |
| `JWT<T>` | JWT 令牌类型 |
| `OAuthToken` | OAuth 令牌 |
| `CSRFToken` | CSRF 令牌 |

### 国际化 *(v1.6.0)*

| 类型 | 描述 |
|------|------|
| `Locale` | 语言环境配置 |
| `LocaleCode` | 语言环境代码 (en-US, zh-CN 等) |
| `LanguageCode` | 语言代码 |
| `CountryCode` | 国家代码 |
| `Translation<T>` | 翻译映射 |
| `PluralForm` | 复数形式 (one, many 等) |
| `Currency` | 货币类型 (USD, EUR, CNY) |
| `TimeZone` | 时区类型 |
| `DateFormat` | 日期格式配置 |
| `NumberFormat` | 数字格式配置 |
| `Direction` | 文本方向 (ltr, rtl) |

### 测试框架 *(v1.6.0)*

| 类型 | 描述 |
|------|------|
| `TestSuite<T>` | 测试套件类型 |
| `TestCase<T>` | 测试用例类型 |
| `TestResultType` | 测试结果 (passed, failed, skipped) |
| `Assertion<T>` | 断言类型 |
| `Mock<T>` | Mock 类型 |
| `Spy<T>` | Spy 类型 |
| `Fixture<T>` | Fixture 类型 |
| `Coverage` | 覆盖率配置 |
| `CoverageReport<T>` | 覆盖率报告 |
| `Snapshot<T>` | 快照类型 |
| `Benchmark<T>` | 基准测试类型 |
| `BenchmarkResult<T>` | 基准测试结果 |

### 插件系统 *(v1.6.0)*

| 类型 | 描述 |
|------|------|
| `Plugin<T>` | 插件类型 |
| `PluginLifecycle` | 插件生命周期事件 |
| `Hook<T>` | 钩子类型 |
| `HookResult<T>` | 钩子结果 |
| `Extension<T>` | 扩展类型 |
| `ExtensionPoint<T>` | 扩展点 |
| `Middleware<T>` | 中间件类型 |
| `MiddlewarePipeline<T>` | 中间件管道 |
| `Module<T>` | 模块类型 |
| `Registry<T>` | 注册表类型 |

### 类型推断 *(v1.6.0)*

| 类型 | 描述 |
|------|------|
| `Infer<T>` | 从包装类型提取类型 |
| `InferReturn<T>` | 提取返回类型 |
| `InferArgs<T>` | 提取函数参数 |
| `ExtractFunction<T>` | 提取函数类型 |
| `ExtractClass<T>` | 提取类类型 |
| `Reconstruct<T>` | 重建类型 |
| `Narrow<T>` | 使用谓词缩小类型 |
| `Widen<T>` | 将字面量扩大为原始类型 |
| `IsAny<T>` | 检查类型是否为 any |
| `IsNever<T>` | 检查类型是否为 never |
| `IsUnknown<T>` | 检查类型是否为 unknown |
| `IsFunction<T>` | 检查类型是否为函数 |
| `IsArray<T>` | 检查类型是否为数组 |
| `IsUnion<T>` | 检查类型是否为联合类型 |
| `Equals<X, Y>` | 检查类型相等 |
| `TypeName<T>` | 获取类型名称 |
| `TypeCategory` | 类型类别 |

### 性能监控 *(v1.6.0)*

| 类型 | 描述 |
|------|------|
| `Performance` | 性能监控 |
| `PerformanceMetric<T>` | 性能指标 |
| `Timing` | 计时操作 |
| `TimingResult` | 计时结果 |
| `MemoryUsage` | 内存使用类型 |
| `MemoryMetric<T>` | 内存指标 |
| `CPUUsage` | CPU 使用类型 |
| `Profiler` | 分析器类型 |
| `ProfileResult<T>` | 分析结果 |
| `TraceSpan<T>` | 追踪跨度 |
| `PerformanceTrace<T>` | 性能追踪 |
| `PerformanceAlert` | 性能告警 |

### 元编程 *(v1.7.0)*

| 类型 | 描述 |
|------|------|
| `MetaType<T>` | 元类型包装器 |
| `TypeRepr<T>` | 类型表示 |
| `GetType<T>` | 从元类型提取类型 |
| `HasType<T, U>` | 检查类型是否包含嵌套类型 |
| `TypePath<T>` | 到嵌套类型的路径 |
| `TypeDepth<T>` | 最大嵌套深度 |
| `TypeSize<T>` | 类型大小估计 |
| `TypeComplexity<T>` | 类型复杂度评分 |
| `AnalyzeType<T>` | 完整类型分析 |
| `TypeStats<T>` | 类型统计 |

### 装饰器类型 *(v1.7.0)*

| 类型 | 描述 |
|------|------|
| `ClassDecorator<T>` | 类装饰器类型 |
| `MethodDecorator<T>` | 方法装饰器类型 |
| `PropertyDecorator<T>` | 属性装饰器类型 |
| `ParameterDecorator<T>` | 参数装饰器类型 |
| `DecoratorResult<T>` | 装饰器结果类型 |
| `DecoratorMetadata<T>` | 装饰器元数据 |
| `DecoratorChain<T>` | 装饰器链 |
| `ComposableDecorator<T>` | 可组合装饰器 |

### 类型生成 *(v1.7.0)*

| 类型 | 描述 |
|------|------|
| `GenerateType<T>` | 从 schema 生成类型 |
| `GeneratedType<T>` | 生成的类型结果 |
| `TypeBuilder<T>` | 类型构建器接口 |
| `SchemaToType<S>` | 将 schema 转换为类型 |
| `TypeFromSchema<T, S>` | 从 schema 定义生成类型 |
| `GeneratedClass<T>` | 生成的类类型 |
| `GeneratedInterface<T>` | 生成的接口 |
| `GeneratedEnum<T>` | 生成的枚举类型 |

### 框架类型 *(v1.7.0)*

| 类型 | 描述 |
|------|------|
| `NestModule<T>` | NestJS 模块类型 |
| `NestController<T>` | NestJS 控制器类型 |
| `NestService<T>` | NestJS 服务类型 |
| `ExpressApp<T>` | Express 应用类型 |
| `ExpressRouter<T>` | Express 路由器类型 |
| `ExpressMiddleware<T>` | Express 中间件 |
| `FastifyApp<T>` | Fastify 应用类型 |
| `FastifyPlugin<T>` | Fastify 插件类型 |
| `KoaApp<T>` | Koa 应用类型 |
| `KoaMiddleware<T>` | Koa 中间件类型 |

### 类型安全配置 *(v1.7.0)*

| 类型 | 描述 |
|------|------|
| `SafeConfig<T>` | 类型安全配置 |
| `ConfigDefinition<T>` | 配置定义 |
| `ConfigValue<T, K>` | 类型化配置值 |
| `ConfigSchema<T>` | 配置 Schema 类型 |
| `EnvDefinition<T>` | 环境变量定义 |
| `EnvValue<K>` | 环境变量值 |
| `ConfigPath<T>` | 配置路径类型 |
| `ValidateConfig<T>` | 配置验证类型 |
| `MergeConfig<A, B>` | 合并配置 |
| `DeepConfig<T>` | 深层配置类型 |

### 类型可视化 *(v1.7.0)*

| 类型 | 描述 |
|------|------|
| `VisualizeType<T>` | 可视化类型结构 |
| `TypeDiagram<T>` | 类型图表示 |
| `TypeTree<T>` | 类型树可视化 |
| `PrintType<T>` | 可打印类型字符串 |
| `TypeFormat<T>` | 类型格式化选项 |
| `TypeName<T>` | 提取类型名称 |
| `TypeStructure<T>` | 类型结构信息 |
| `ExpandType<T>` | 展开的类型显示 |

### 加密类型 *(v1.7.0)*

| 类型 | 描述 |
|------|------|
| `HashAlgorithm` | 哈希算法类型 |
| `HashOutput<L>` | 哈希输出类型 |
| `CryptoKey<T>` | 加密密钥类型 |
| `KeyPair<T>` | 密钥对类型 |
| `Signature<T>` | 签名类型 |
| `EncryptedData<T>` | 加密数据类型 |
| `CryptoConfig<T>` | 加密配置 |
| `CryptoProvider<T>` | 加密提供者接口 |
| `HashFunction<T>` | 哈希函数类型 |
| `EncryptFunction<T>` | 加密函数 |
| `DecryptFunction<T>` | 解密函数 |

### 日期时间类型 *(v1.7.0)*

| 类型 | 描述 |
|------|------|
| `DateTime<T>` | DateTime 类型 |
| `DateFormat<T>` | 日期格式类型 |
| `TimeFormat<T>` | 时间格式类型 |
| `Timestamp<T>` | 时间戳类型 |
| `Duration<T>` | 持续时间类型 |
| `DateRange<T>` | 日期范围类型 |
| `TimeZoneType` | 时区类型 |
| `UTCDate<T>` | UTC 日期类型 |
| `LocalDate<T>` | 本地日期类型 |
| `ISODateString` | ISO 日期字符串 |
| `ParsedDate<T>` | 解析后的日期类型 |
| `FormatDate<T, F>` | 格式化日期类型 |

### 高级数学 *(v1.7.0)*

| 类型 | 描述 |
|------|------|
| `Add<A, B>` | 类型级加法 |
| `Subtract<A, B>` | 类型级减法 |
| `Multiply<A, B>` | 类型级乘法 |
| `Divide<A, B>` | 类型级除法 |
| `Power<A, B>` | 幂运算 |
| `Sqrt<N>` | 平方根 |
| `Sin<N>`, `Cos<N>` | 三角函数 |
| `PI`, `E` | 数学常量 |
| `Factorial<N>` | 阶乘 |
| `Fibonacci<N>` | 斐波那契数 |
| `IsPrime<N>` | 质数检查 |
| `Mean<T>`, `Median<T>` | 统计函数 |
| `IsEven<N>`, `IsOdd<N>` | 奇偶检查 |

### 类型级搜索 *(v1.7.0)*

| 类型 | 描述 |
|------|------|
| `Sort<T, Order>` | 元组排序 |
| `QuickSort<T>` | 快速排序算法 |
| `MergeSort<T>` | 归并排序算法 |
| `BinarySearch<T, V>` | 二分搜索 |
| `Includes<T, V>` | 检查包含 |
| `Filter<T, P>` | 按谓词过滤 |
| `Take<T, N>` | 取前 N 个元素 |
| `Drop<T, N>` | 丢弃前 N 个元素 |
| `Chunk<T, N>` | 分块为子列表 |
| `Union<A, B>` | 集合并集 |
| `Intersection<A, B>` | 集合交集 |
| `Unique<T>` | 唯一元素 |
| `Reverse<T>` | 反转元组 |
| `Zip<A, B>` | 拼接元组 |
| `Flatten<T>` | 展平嵌套元组 |
| `MinElement<T>`, `MaxElement<T>` | 最小/最大元素 |

## 示例

```typescript
import type {
  SnakeCase,
  CamelCaseKeys,
  UnionToIntersection,
  AtLeastOne,
  Microservice,
  ServiceConfig,
  EventBus,
  Workflow
} from 'uni-types'

// 字符串命名转换
SnakeCase<'XMLParser'>  // 'xml_parser'
CamelCaseKeys<{ user_name: string, user_age: number }>
// { userName: string, userAge: number }

// 联合转交叉
UnionToIntersection<{ a: string } | { b: number }>
// { a: string } & { b: number }

// 至少需要一个属性
type Options = AtLeastOne<{ a?: string; b?: number; c?: boolean }>
// 必须有 a、b、c 中的至少一个

// v1.5.0 - 微服务架构
const userService: Microservice = {
  name: 'user-service',
  version: '1.0.0',
  config: {
    name: 'user-service',
    version: '1.0.0',
    port: 3000,
    host: '0.0.0.0',
    env: 'production'
  },
  start: async () => { /* 启动服务器 */ },
  stop: async () => { /* 优雅关闭 */ },
  health: async () => ({ status: 'healthy', timestamp: new Date(), service: 'user-service', version: '1.0.0', uptime: 0, checks: {} })
}

// v1.5.0 - 事件总线
type AppEvents = EventBus<{
  userCreated: { id: string; name: string }
  orderPlaced: { orderId: string; userId: string }
}>

// v1.5.0 - 工作流
type OrderWorkflow = Workflow<{
  orderId: string
  status: 'pending' | 'processing' | 'completed'
}>
```

## 开发

```bash
# 安装依赖
pnpm install

# 运行测试
pnpm test

# 构建
pnpm build

# 类型检查
pnpm typecheck

# 启动文档开发服务器
pnpm docs:dev
```

## 贡献

欢迎贡献！请阅读我们的 [贡献指南](./CONTRIBUTING.md) 了解详情。

## 许可证

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
