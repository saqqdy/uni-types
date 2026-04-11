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