# API 参考

uni-types 所有类型工具的完整 API 参考。

## 分类

### [核心操作](#核心操作-1)

| 类型 | 描述 |
|------|------|
| [`PickRequired<T, K>`](/zh/api/core/pick-required) | 将指定属性变为必需 |
| [`PickPartial<T, K>`](/zh/api/core/pick-partial) | 将指定属性变为可选 |
| [`OmitRequired<T, K>`](/zh/api/core/omit-required) | 将指定属性之外变为必需 |
| [`OmitPartial<T, K>`](/zh/api/core/omit-partial) | 将指定属性之外变为可选 |

### [元组操作](#元组操作-1)

| 类型 | 描述 |
|------|------|
| [`Head<T>`](/zh/api/core/head) | 获取元组第一个元素 |
| [`Last<T>`](/zh/api/core/last) | 获取元组最后一个元素 |
| [`Tail<T>`](/zh/api/core/tail) | 获取除第一个外的所有元素 |
| [`Init<T>`](/zh/api/core/init) | 获取除最后一个外的所有元素 |
| [`Reverse<T>`](/zh/api/core/reverse) | 反转元组 |
| [`Flatten<T>`](/zh/api/core/flatten) | 展平嵌套元组 |
| [`TupleLength<T>`](/zh/api/core/tuple-length) | 获取元组长度 |
| [`IsEmptyTuple<T>`](/zh/api/core/is-empty-tuple) | 判断元组是否为空 |

### [深度操作](#深度操作-1)

| 类型 | 描述 |
|------|------|
| [`DeepPartial<T>`](/zh/api/deep/deep-partial) | 递归将所有属性变为可选 |
| [`DeepRequired<T>`](/zh/api/deep/deep-required) | 递归将所有属性变为必需 |
| [`DeepReadonly<T>`](/zh/api/deep/deep-readonly) | 递归将所有属性变为只读 |
| [`DeepMutable<T>`](/zh/api/deep/deep-mutable) | 递归移除所有 readonly |
| [`DeepOmit<T, P>`](/zh/api/deep/deep-omit) | 移除嵌套路径处的属性 |
| [`DeepPick<T, P>`](/zh/api/deep/deep-pick) | 选择嵌套路径处的属性 |

### [品牌类型](#品牌类型-1)

| 类型 | 描述 |
|------|------|
| [`Brand<T, B>`](/zh/api/brand/brand) | 创建品牌名义类型 |
| [`Unbrand<T>`](/zh/api/brand/unbrand) | 从品牌类型提取底层类型 |

### [条件类型](#条件类型-1)

| 类型 | 描述 |
|------|------|
| [`If<C, T, F>`](/zh/api/conditional/if) | 类型级别的 if-then-else |
| [`Not<B>`](/zh/api/conditional/not) | 布尔类型的逻辑非 |
| [`And<A, B>`](/zh/api/conditional/and) | 布尔类型的逻辑与 |
| [`Or<A, B>`](/zh/api/conditional/or) | 布尔类型的逻辑或 |

### [函数类型](#函数类型-1)

| 类型 | 描述 |
|------|------|
| [`Parameters<T>`](/zh/api/functions/parameters) | 获取函数参数作为元组 |
| [`ReturnType<T>`](/zh/api/functions/return-type) | 获取函数返回类型 |
| [`NthParameter<T, N>`](/zh/api/functions/nth-parameter) | 获取第 N 个参数类型 |
| [`AsyncReturnType<T>`](/zh/api/functions/async-return-type) | 解包 Promise 返回类型 |

### [键工具](#键工具-1)

| 类型 | 描述 |
|------|------|
| [`RenameKeys<T, M>`](/zh/api/keys/rename-keys) | 重命名对象键 |
| [`PrefixKeys<T, P>`](/zh/api/keys/prefix-keys) | 为所有键添加前缀 |
| [`SuffixKeys<T, S>`](/zh/api/keys/suffix-keys) | 为所有键添加后缀 |
| [`KeysByValueType<T, V>`](/zh/api/keys/keys-by-value-type) | 按值类型获取键 |

### [数字类型](#数字类型-1)

| 类型 | 描述 |
|------|------|
| [`Inc<N>`](/zh/api/numeric/inc) | 数字类型自增 |
| [`Dec<N>`](/zh/api/numeric/dec) | 数字类型自减 |
| [`Add<A, B>`](/zh/api/numeric/add) | 两数相加 |
| [`Subtract<A, B>`](/zh/api/numeric/subtract) | 两数相减 |
| [`Range<From, To>`](/zh/api/numeric/range) | 创建数字范围联合 |

### [路径工具](#路径工具-1)

| 类型 | 描述 |
|------|------|
| [`ValidPath<T, P>`](/zh/api/path/valid-path) | 检查路径是否存在 |
| [`ArrayPaths<T>`](/zh/api/path/array-paths) | 获取包含数组索引的所有路径 |
| [`LeafPaths<T>`](/zh/api/path/leaf-paths) | 获取叶子节点路径 |
| [`PathLength<P>`](/zh/api/path/path-length) | 获取路径段数 |

### [记录类型](#记录类型-1)

| 类型 | 描述 |
|------|------|
| [`DeepNullable<T>`](/zh/api/record/deep-nullable) | 使所有属性可空 |
| [`DeepOptional<T>`](/zh/api/record/deep-optional) | 使所有属性可选 |
| [`Immutable<T>`](/zh/api/record/immutable) | 使所有属性只读 |
| [`Mutable<T>`](/zh/api/record/mutable) | 移除所有属性的只读 |

### [模板字面量](#模板字面量-1)

| 类型 | 描述 |
|------|------|
| [`ReplaceAll<S, From, To>`](/zh/api/template/replace-all) | 替换所有匹配 |
| [`Trim<S>`](/zh/api/template/trim) | 修剪空白字符 |
| [`StringLength<S>`](/zh/api/template/string-length) | 获取字符串长度 |
| [`Repeat<S, N>`](/zh/api/template/repeat) | 重复字符串 N 次 |

### [类型判断](#类型判断-1)

| 类型 | 描述 |
|------|------|
| [`IsArray<T>`](/zh/api/guards/is-array) | 判断是否为数组 |
| [`IsTuple<T>`](/zh/api/guards/is-tuple) | 判断是否为元组 |
| [`IsEqual<X, Y>`](/zh/api/guards/is-equal) | 判断两个类型是否相等 |
| [`IsAny<T>`](/zh/api/guards/is-any) | 判断是否为 any |
| [`IsNever<T>`](/zh/api/guards/is-never) | 判断是否为 never |
| [`IsUnknown<T>`](/zh/api/guards/is-unknown) | 判断是否为 unknown |

### [类型推导](#类型推导-1)

| 类型 | 描述 |
|------|------|
| [`Awaited<T>`](/zh/api/infer/awaited) | 解包 Promise 类型 |
| [`ArrayElement<T>`](/zh/api/infer/array-element) | 获取数组元素类型 |
| [`ValueOf<T>`](/zh/api/infer/value-of) | 获取对象值类型 |
| [`FunctionKeys<T>`](/zh/api/infer/function-keys) | 获取函数属性的键 |
| [`NonFunctionKeys<T>`](/zh/api/infer/non-function-keys) | 获取非函数属性的键 |
| [`FirstParameter<T>`](/zh/api/infer/first-parameter) | 获取函数第一个参数类型 |
| [`FunctionOnly<T>`](/zh/api/infer/function-only) | 提取函数属性 |
| [`DataOnly<T>`](/zh/api/infer/data-only) | 提取非函数属性 |

### [实用类型](#实用类型-1)

| 类型 | 描述 |
|------|------|
| [`Merge<T, U>`](/zh/api/utils/merge) | 合并两个类型 |
| [`NonNullable<T>`](/zh/api/utils/non-nullable) | 排除 null/undefined |
| [`Exclusive<T, K>`](/zh/api/utils/exclusive) | 创建互斥属性 |
| [`NoNullish<T>`](/zh/api/utils/no-nullish) | 移除所有属性的 null/undefined |
| [`Nullable<T>`](/zh/api/utils/nullable) | 添加 null |
| [`Optional<T>`](/zh/api/utils/optional) | 添加 undefined |
| [`Maybe<T>`](/zh/api/utils/maybe) | 添加 null/undefined |
| [`LoosePartial<T>`](/zh/api/utils/loose-partial) | 将所有属性变为可选 |

### [键类型](#键类型-1)

| 类型 | 描述 |
|------|------|
| [`RequiredKeys<T>`](/zh/api/utils/required-keys) | 获取必需属性的键 |
| [`OptionalKeys<T>`](/zh/api/utils/optional-keys) | 获取可选属性的键 |
| [`WritableKeys<T>`](/zh/api/utils/writable-keys) | 获取可写属性的键 |
| [`ReadonlyKeys<T>`](/zh/api/utils/readonly-keys) | 获取只读属性的键 |

### [路径类型](#路径类型-1)

| 类型 | 描述 |
|------|------|
| [`Paths<T>`](/zh/api/utils/paths) | 获取所有嵌套属性路径 |
| [`PathValue<T, P>`](/zh/api/utils/path-value) | 获取路径处的值类型 |
| [`SplitPath<S>`](/zh/api/utils/split-path) | 将路径分割为数组 |

### [字符串命名](#字符串命名-1)

| 类型 | 描述 |
|------|------|
| [`CamelCase<S>`](/zh/api/utils/camel-case) | 转换为驼峰命名 |
| [`SnakeCase<S>`](/zh/api/utils/snake-case) | 转换为蛇形命名 |
| [`CamelCaseKeys<T>`](/zh/api/utils/camel-case-keys) | 将对象键转为驼峰 |
| [`SnakeCaseKeys<T>`](/zh/api/utils/snake-case-keys) | 将对象键转为蛇形 |

### [高级类型](#高级类型-1)

| 类型 | 描述 |
|------|------|
| [`AtLeastOne<T>`](/zh/api/utils/at-least-one) | 要求至少一个属性 |
| [`StrictExtract<T, U>`](/zh/api/utils/strict-extract) | 严格提取类型 |
| [`StrictExclude<T, U>`](/zh/api/utils/strict-exclude) | 严格排除类型 |
| [`UnionToIntersection<U>`](/zh/api/utils/union-to-intersection) | 联合转交叉 |
| [`UnionToTuple<T>`](/zh/api/utils/union-to-tuple) | 联合转元组 |

### [算法](#算法-1)

| 类型 | 描述 |
|------|-------------|
| [`Sort<T, Order>`](/zh/api/algorithms/sort) | 数字元组排序 |
| [`QuickSort<T>`](/zh/api/algorithms/quicksort) | 快速排序实现 |
| [`MergeSort<T>`](/zh/api/algorithms/mergesort) | 归并排序实现 |
| [`GCD<A, B>`](/zh/api/algorithms/gcd) | 最大公约数 |
| [`LCM<A, B>`](/zh/api/algorithms/lcm) | 最小公倍数 |
| [`Factorial<N>`](/zh/api/algorithms/factorial) | 阶乘 |
| [`Fibonacci<N>`](/zh/api/algorithms/fibonacci) | 斐波那契数 |
| [`IsPrime<N>`](/zh/api/algorithms/isprime) | 判断是否为质数 |
| [`Find<T, P>`](/zh/api/algorithms/find) | 查找第一个匹配元素 |
| [`FindIndex<T, P>`](/zh/api/algorithms/findindex) | 查找第一个匹配索引 |
| [`Includes<T, U>`](/zh/api/algorithms/includes) | 检查元组是否包含元素 |
| [`IndexOf<T, U>`](/zh/api/algorithms/indexof) | 获取元素索引 |
| [`LongestCommonPrefix<T>`](/zh/api/algorithms/longestcommonprefix) | 查找最长公共前缀 |
| [`Reverse<T>`](/zh/api/algorithms/reverse) | 反转元组 |
| [`Unique<T>`](/zh/api/algorithms/unique) | 移除重复元素 |
| [`Flatten<T>`](/zh/api/algorithms/flatten) | 展平嵌套元组 |
| [`FlattenDeep<T>`](/zh/api/algorithms/flattendeep) | 深度展平嵌套元组 |
| [`LevenshteinDistance<A, B>`](/zh/api/algorithms/levenshteindistance) | 字符串编辑距离 |

### [解析器](#解析器-1)

| 类型 | 描述 |
|------|-------------|
| [`ParseJSON<S>`](/zh/api/parsers/parsejson) | 解析 JSON 字符串为类型 |
| [`StringifyJSON<T>`](/zh/api/parsers/stringifyjson) | 类型转 JSON 字符串 |
| [`IsValidJSON<S>`](/zh/api/parsers/isvalidjson) | 检查是否为有效 JSON |
| [`ParseURL<S>`](/zh/api/parsers/parseurl) | 解析 URL 字符串 |
| [`QueryParams<S>`](/zh/api/parsers/queryparams) | 解析查询字符串 |
| [`ParseCSV<S>`](/zh/api/parsers/parsecsv) | 解析 CSV 字符串 |

### [状态机](#状态机-1)

| 类型 | 描述 |
|------|-------------|
| [`StateMachine<T>`](/zh/api/statemachine/statemachine) | 状态机定义 |
| [`State<S, Data>`](/zh/api/statemachine/state) | 状态定义 |
| [`Transition<E, From, To>`](/zh/api/statemachine/transition) | 转换定义 |

### [数据结构](#数据结构-1)

| 类型 | 描述 |
|------|-------------|
| [`Tree<T>`](/zh/api/datastructures/tree) | 树类型 |
| [`TreeNode<T>`](/zh/api/datastructures/treenode) | 树节点类型 |
| [`Graph<A>`](/zh/api/datastructures/graph) | 图类型（邻接表） |
| [`LinkedList<T>`](/zh/api/datastructures/linkedlist) | 链表类型 |
| [`Stack<T>`](/zh/api/datastructures/stack) | 栈类型（LIFO） |
| [`Queue<T>`](/zh/api/datastructures/queue) | 队列类型（FIFO） |

### [HTTP & API](#http-api-1)

| 类型 | 描述 |
|------|-------------|
| [`HTTPMethod`](/zh/api/http/httpmethod) | HTTP 方法联合 |
| [`HTTPStatus`](/zh/api/http/httpstatus) | HTTP 状态码 |
| [`Route<P, M, H>`](/zh/api/http/route) | 路由定义 |
| [`Middleware<C>`](/zh/api/http/middleware) | 中间件函数 |

### [数据库](#数据库-1)

| 类型 | 描述 |
|------|-------------|
| [`SQLType<T>`](/zh/api/database/sqltype) | TS 到 SQL 类型映射 |
| [`QueryBuilder<T>`](/zh/api/database/querybuilder) | 查询构建器 |
| [`Migration<T>`](/zh/api/database/migration) | 迁移定义 |

### [并发](#并发-1)

| 类型 | 描述 |
|------|-------------|
| [`Task<T>`](/zh/api/concurrency/task) | 任务类型 |
| [`Pipeline<I, O>`](/zh/api/concurrency/pipeline) | 管道类型 |
| [`Scheduler<T>`](/zh/api/concurrency/scheduler) | 调度器类型 |
| [`WorkerPool<I, O>`](/zh/api/concurrency/workerpool) | 工作池类型 |

### [互操作](#互操作-1)

| 类型 | 描述 |
|------|-------------|
| [`ToTypeFest<T>`](/zh/api/interop/totypefest) | 转换为 type-fest |
| [`ToTsToolbelt<T>`](/zh/api/interop/totoolbelt) | 转换为 ts-toolbelt |
| [`IsCompatible<T, U>`](/zh/api/interop/iscompatible) | 检查类型兼容性 |

### [测试](#测试-1)

| 类型 | 描述 |
|------|-------------|
| [`ExpectTrue<T>`](/zh/api/testing/expecttrue) | 期望类型为 true |
| [`ExpectEqual<T, U>`](/zh/api/testing/expectequal) | 期望类型相等 |
| [`TypeCoverage<T>`](/zh/api/testing/typecoverage) | 类型覆盖分析 |
| [`TypeComplexity<T>`](/zh/api/testing/typecomplexity) | 类型复杂度分析 |

### [断言](#断言-1)

| 类型 | 描述 |
|------|-------------|
| [`AssertEqual<T, Expected>`](/zh/api/assert/assertequal) | 断言类型相等 |
| [`AssertExtends<T, U>`](/zh/api/assert/assertextends) | 断言 T 继承 U |
| [`AssertKeyof<T, K>`](/zh/api/assert/assertkeyof) | 断言 K 是 T 的键 |
| [`AssertNotNil<T>`](/zh/api/assert/assertnotnil) | 断言类型不是 never |
| [`RequireKeys<T, K>`](/zh/api/assert/requirekeys) | 要求特定键 |
| [`MakeOptional<T, K>`](/zh/api/assert/makeoptional) | 使特定键可选 |
| [`RequireAtLeastOne<T, K>`](/zh/api/assert/requireatleastone) | 要求至少一个键 |
| [`RequireExactlyOne<T, K>`](/zh/api/assert/requireexactlyone) | 要求恰好一个键 |
| [`AssertHasProperty<T, K>`](/zh/api/assert/asserthasproperty) | 确保对象有属性 |
| [`RequireNotNullish<T>`](/zh/api/assert/requirenotnullish) | 确保类型非空 |
| [`RequireArray<T>`](/zh/api/assert/requirearray) | 确保类型为数组 |
| [`RequireFunction<T>`](/zh/api/assert/requirefunction) | 确保类型为函数 |

### [异步](#异步-1)

| 类型 | 描述 |
|------|-------------|
| [`PromiseValue<T>`](/zh/api/async/promisevalue) | 递归提取 Promise 值 |
| [`PromiseResult<T>`](/zh/api/async/promiseresult) | 获取 Promise 解析值 |
| [`IsPromise<T>`](/zh/api/async/ispromise) | 检查是否为 Promise |
| [`UnwrapPromise<T>`](/zh/api/async/unwrappromise) | 解包 Promise |
| [`WrapPromise<T>`](/zh/api/async/wrappromise) | 包装为 Promise |
| [`PromiseSettledResult<T>`](/zh/api/async/promisesettledresult) | Promise 结算结果 |

### [集合](#集合-1)

| 类型 | 描述 |
|------|-------------|
| [`TypeSet<T>`](/zh/api/collection/typeset) | 类型级别集合 |
| [`SetAdd<S, T>`](/zh/api/collection/setadd) | 向集合添加元素 |
| [`SetRemove<S, T>`](/zh/api/collection/setremove) | 从集合移除元素 |
| [`SetHas<S, T>`](/zh/api/collection/sethas) | 检查元素是否在集合中 |
| [`SetUnion<A, B>`](/zh/api/collection/setunion) | 集合并集 |
| [`SetIntersection<A, B>`](/zh/api/collection/setintersection) | 集合交集 |
| [`SetDifference<A, B>`](/zh/api/collection/setdifference) | 集合差集 |
| [`SetIsEmpty<S>`](/zh/api/collection/setisempty) | 检查集合是否为空 |
| [`SetIsSubset<A, B>`](/zh/api/collection/setissubset) | 检查 A 是否为 B 子集 |
| [`TypeMap<K, V>`](/zh/api/collection/typemap) | 类型级别映射 |
| [`MapGet<M, K>`](/zh/api/collection/mapget) | 获取映射值 |
| [`MapSet<M, K, V>`](/zh/api/collection/mapset) | 设置映射值 |
| [`MapHas<M, K>`](/zh/api/collection/maphas) | 检查键是否在映射中 |
| [`MapDelete<M, K>`](/zh/api/collection/mapdelete) | 删除映射键 |
| [`MapKeys<M>`](/zh/api/collection/mapkeys) | 获取映射键 |
| [`MapValues<M>`](/zh/api/collection/mapvalues) | 获取映射值 |
| [`ListLength<T>`](/zh/api/collection/listlength) | 获取列表长度 |
| [`ListReverse<T>`](/zh/api/collection/listreverse) | 反转列表 |
| [`ListConcat<A, B>`](/zh/api/collection/listconcat) | 连接列表 |
| [`ListFilter<T, P>`](/zh/api/collection/listfilter) | 过滤列表元素 |
| [`ListFind<T, P>`](/zh/api/collection/listfind) | 在列表中查找元素 |
| [`ListIncludes<T, U>`](/zh/api/collection/listincludes) | 检查列表是否包含 |

### [对象](#对象-1)

| 类型 | 描述 |
|------|-------------|
| [`ObjectMap<T, F>`](/zh/api/object/objectmap) | 映射对象值 |
| [`ObjectFilter<T, P>`](/zh/api/object/objectfilter) | 过滤对象属性 |
| [`ObjectPickByType<T, U>`](/zh/api/object/objectpickbytype) | 按值类型选取 |
| [`ObjectOmitByType<T, U>`](/zh/api/object/objectomitbytype) | 按值类型省略 |
| [`ObjectInvert<T>`](/zh/api/object/objectinvert) | 反转键值 |
| [`DeepMerge<T, U>`](/zh/api/object/deepmerge) | 深度合并对象 |
| [`DeepAssign<T, U>`](/zh/api/object/deepassign) | 深度赋值属性 |
| [`DeepDefaults<T, U>`](/zh/api/object/deepdefaults) | 深度默认值 |
| [`HasProperty<T, K>`](/zh/api/object/hasproperty) | 检查是否有属性 |
| [`HasProperties<T, K>`](/zh/api/object/hasproperties) | 检查是否有多个属性 |
| [`HasMethod<T, K>`](/zh/api/object/hasmethod) | 检查是否有方法 |

### [模式匹配](#模式匹配-1)

| 类型 | 描述 |
|------|-------------|
| [`Match<T, Patterns>`](/zh/api/pattern/match) | 模式匹配 |
| [`Case<P>`](/zh/api/pattern/case) | 匹配用例 |
| [`Default<R>`](/zh/api/pattern/default) | 默认用例 |
| [`TypeFilter<T, P>`](/zh/api/pattern/typefilter) | 按谓词过滤元组 |
| [`TypeFind<T, P>`](/zh/api/pattern/typefind) | 按谓词查找元素 |
| [`TypeIncludes<T, P>`](/zh/api/pattern/typeincludes) | 检查类型是否在元组中 |

### [字符串](#字符串-1)

| 类型 | 描述 |
|------|-------------|
| [`Split<S, D>`](/zh/api/string/split) | 按分隔符拆分字符串 |
| [`Join<T, S>`](/zh/api/string/join) | 用分隔符连接字符串 |
| [`KebabCase<S>`](/zh/api/string/kebab-case) | 转换为 kebab-case |
| [`PascalCase<S>`](/zh/api/string/pascal-case) | 转换为 PascalCase |
| [`IsEmail<T>`](/zh/api/string/isemail) | 检查是否为邮箱格式 |
| [`IsUUID<T>`](/zh/api/string/isuuid) | 检查是否为 UUID 格式 |
| [`IsURL<T>`](/zh/api/string/isurl) | 检查是否为 URL 格式 |
| [`Chunk<S, N>`](/zh/api/string/chunk) | 将字符串分块 |

### [性能优化](#性能优化-1)

| 类型 | 描述 |
|------|-------------|
| [`Simplify<T>`](/zh/api/perf/simplify) | 简化复杂类型 |
| [`DeepSimplify<T>`](/zh/api/perf/deep-simplify) | 深度简化类型 |
| [`Cached<T>`](/zh/api/perf/cached) | 缓存类型计算 |
| [`CachedValue<T>`](/zh/api/perf/cachedvalue) | 提取缓存值 |
| [`Memoized<T>`](/zh/api/perf/memoized) | 记忆化类型 |
| [`Lazy<T>`](/zh/api/perf/lazy) | 延迟类型包装 |
| [`ForceEvaluate<T>`](/zh/api/perf/forceevaluate) | 强制求值延迟类型 |
| [`Deferred<T>`](/zh/api/perf/deferred) | 延迟类型展开 |
| [`FlattenType<T>`](/zh/api/perf/flattentype) | 展平交叉类型 |
| [`StripNever<T>`](/zh/api/perf/stripnever) | 移除 never 属性 |
| [`StripUndefined<T>`](/zh/api/perf/stripundefined) | 移除 undefined 属性 |
| [`Compact<T>`](/zh/api/perf/compact) | 移除 never 和 undefined |

### [Schema](#schema-1)

| 类型 | 描述 |
|------|-------------|
| [`RuntimeGuard<T>`](/zh/api/schema/runtime-guard) | 运行时类型守卫 |
| [`GuardedType<G>`](/zh/api/schema/guarded-type) | 提取守卫类型 |
| [`HasRuntimeCheck<T>`](/zh/api/schema/hasruntimecheck) | 检查是否有运行时检查 |
| [`CompositeGuard<T>`](/zh/api/collection/compositeguard) | 组合对象守卫 |
| [`ZodOutput<T>`](/zh/api/schema/zod-output) | 提取 Zod 输出类型 |
| [`ZodInput<T>`](/zh/api/schema/zod-input) | 提取 Zod 输入类型 |
| [`IsZodSchema<T>`](/zh/api/schema/iszodschema) | 检查是否为 Zod schema |
| [`ZodShape<T>`](/zh/api/schema/zodshape) | 提取 Zod shape |
| [`ZodArrayElement<T>`](/zh/api/schema/zodarrayelement) | 获取 Zod 数组元素 |
| [`YupOutput<T>`](/zh/api/schema/yup-output) | 提取 Yup 输出类型 |
| [`YupInput<T>`](/zh/api/schema/yup-input) | 提取 Yup 输入类型 |
| [`IsYupSchema<T>`](/zh/api/schema/isyupschema) | 检查是否为 Yup schema |

### [迁移工具](/zh/api/migration) *(v1.11.0)*

| 类型 | 描述 |
|------|-------------|
| [`MigrationStatus`](/zh/api/migration#migrationstatus) | 迁移状态 |
| [`MigrationResult<T>`](/zh/api/migration#migrationresult) | 迁移结果 |
| [`MigrateToV2<T>`](/zh/api/migration#migratetov2) | 迁移到 V2 |
| [`MigrateFromV1<T>`](/zh/api/migration#migratefromv1) | 从 V1 迁移 |
| [`RenameType<T, From, To>`](/zh/api/migration#renametype) | 重命名属性 |
| [`CompatV1<T>`](/zh/api/migration#compatv1) | V1 兼容层 |
| [`CompatV2<T>`](/zh/api/migration#compatv2) | V2 兼容层 |
| [`ValidateMigration<T, U>`](/zh/api/migration#validatemigration) | 验证迁移 |
| [`MigrationDiff<T, U>`](/zh/api/migration#migrationdiff) | 迁移差异 |
| [`Codemod<T>`](/zh/api/migration#codemod) | Codemod 类型 |

### [废弃管理](/zh/api/deprecation) *(v1.11.0)*

| 类型 | 描述 |
|------|-------------|
| [`Deprecated<T, Message>`](/zh/api/deprecation#deprecated) | 废弃标记 |
| [`DeprecatedSince<T, Version>`](/zh/api/deprecation#deprecatedsince) | 废弃版本标记 |
| [`WillBeRemoved<T, Version>`](/zh/api/deprecation#willberemoved) | 移除版本标记 |
| [`Legacy<T>`](/zh/api/deprecation#legacy) | 遗留类型 |
| [`DeprecationWarning<T>`](/zh/api/deprecation#deprecationwarning) | 废弃警告 |
| [`VersionGate<T, Min, Max>`](/zh/api/deprecation#versiongate) | 版本门控 |
| [`RemovedIn<T, Version>`](/zh/api/deprecation#removedin) | 移除版本 |
| [`IntroducedIn<T, Version>`](/zh/api/deprecation#introducedin) | 引入版本 |
| [`Sunset<T>`](/zh/api/deprecation#sunset) | Sunset 标记 |
| [`EndOfLife<T>`](/zh/api/deprecation#endoflife) | 生命周期结束 |

### [增强错误消息](/zh/api/enhanced-error) *(v1.11.0)*

| 类型 | 描述 |
|------|-------------|
| [`DetailedError<T>`](/zh/api/enhanced-error#detailederror) | 详细错误 |
| [`ErrorDetails`](/zh/api/enhanced-error#errordetails) | 错误详情 |
| [`ErrorCategory`](/zh/api/enhanced-error#errorcategory) | 错误分类 |
| [`TypedError<T>`](/zh/api/enhanced-error#typederror) | 类型错误 |
| [`Diagnostic<T>`](/zh/api/enhanced-error#diagnostic) | 诊断类型 |
| [`DiagnosticSeverity`](/zh/api/enhanced-error#diagnosticseverity) | 诊断严重性 |
| [`TypeMismatch<T, Expected>`](/zh/api/enhanced-error#typemismatch) | 类型不匹配 |
| [`RecoverableError<T>`](/zh/api/enhanced-error#recoverableerror) | 可恢复错误 |
| [`RecoveryStrategy`](/zh/api/enhanced-error#recoverystrategy) | 恢复策略 |
| [`HelpMessage<T>`](/zh/api/enhanced-error#helpmessage) | 帮助消息 |

### [破坏性变更检测](/zh/api/breaking-change) *(v1.11.0)*

| 类型 | 描述 |
|------|-------------|
| [`BreakingChangeReport<T>`](/zh/api/breaking-change#breakingchangereport) | 破坏性变更报告 |
| [`BreakingChange`](/zh/api/breaking-change#breakingchange) | 破坏性变更 |
| [`BreakingChangeType`](/zh/api/breaking-change#breakingchangetype) | 变更类型 |
| [`APIDiff<T, U>`](/zh/api/breaking-change#apidiff) | API 差异 |
| [`CompatibilityCheck<T, U>`](/zh/api/breaking-change#compatibilitycheck) | 兼容性检查 |
| [`CompatibilityLevel`](/zh/api/breaking-change#compatibilitylevel) | 兼容性级别 |
| [`MigrationEffort`](/zh/api/breaking-change#migrationeffort) | 迁移工作量 |
| [`ImpactAnalysis`](/zh/api/breaking-change#impactanalysis) | 影响分析 |
| [`RiskLevel`](/zh/api/breaking-change#risklevel) | 风险级别 |
| [`BreakingChangeGuard`](/zh/api/breaking-change#breakingchangeguard) | 变更守卫 |