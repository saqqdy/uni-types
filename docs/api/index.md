# API Reference

Complete API reference for all type utilities in uni-types.

## Categories

### [Core Operations](#core-operations-1)

| Type | Description |
|------|-------------|
| [`PickRequired<T, K>`](/api/core/pick-required) | Make specified properties required |
| [`PickPartial<T, K>`](/api/core/pick-partial) | Make specified properties optional |
| [`OmitRequired<T, K>`](/api/core/omit-required) | Make properties required except specified |
| [`OmitPartial<T, K>`](/api/core/omit-partial) | Make properties optional except specified |

### [Tuple Operations](#tuple-operations-1)

| Type | Description |
|------|-------------|
| [`Head<T>`](/api/core/head) | Get first element of tuple |
| [`Last<T>`](/api/core/last) | Get last element of tuple |
| [`Tail<T>`](/api/core/tail) | Get all elements except first |
| [`Init<T>`](/api/core/init) | Get all elements except last |
| [`Reverse<T>`](/api/core/reverse) | Reverse a tuple |
| [`Flatten<T>`](/api/core/flatten) | Flatten nested tuples |
| [`TupleLength<T>`](/api/core/tuple-length) | Get tuple length |
| [`IsEmptyTuple<T>`](/api/core/is-empty-tuple) | Check if tuple is empty |

### [Deep Operations](#deep-operations-1)

| Type | Description |
|------|-------------|
| [`DeepPartial<T>`](/api/deep/deep-partial) | Make all nested properties optional |
| [`DeepRequired<T>`](/api/deep/deep-required) | Make all nested properties required |
| [`DeepReadonly<T>`](/api/deep/deep-readonly) | Make all nested properties readonly |
| [`DeepMutable<T>`](/api/deep/deep-mutable) | Make all nested properties mutable |
| [`DeepOmit<T, P>`](/api/deep/deep-omit) | Omit properties at nested paths |
| [`DeepPick<T, P>`](/api/deep/deep-pick) | Pick properties at nested paths |

### [Brand Types](#brand-types-1)

| Type | Description |
|------|-------------|
| [`Brand<T, B>`](/api/brand/brand) | Create a branded nominal type |
| [`Unbrand<T>`](/api/brand/unbrand) | Extract underlying type from branded type |

### [Conditional Types](#conditional-types-1)

| Type | Description |
|------|-------------|
| [`If<C, T, F>`](/api/conditional/if) | If-then-else at type level |
| [`Not<B>`](/api/conditional/not) | Logical NOT for boolean types |
| [`And<A, B>`](/api/conditional/and) | Logical AND for boolean types |
| [`Or<A, B>`](/api/conditional/or) | Logical OR for boolean types |

### [Function Types](#function-types-1)

| Type | Description |
|------|-------------|
| [`Parameters<T>`](/api/functions/parameters) | Get function parameters as tuple |
| [`ReturnType<T>`](/api/functions/return-type) | Get function return type |
| [`NthParameter<T, N>`](/api/functions/nth-parameter) | Get Nth parameter type |
| [`AsyncReturnType<T>`](/api/functions/async-return-type) | Unwrap Promise return type |

### [Key Utilities](#key-utilities-1)

| Type | Description |
|------|-------------|
| [`RenameKeys<T, M>`](/api/keys/rename-keys) | Rename object keys |
| [`PrefixKeys<T, P>`](/api/keys/prefix-keys) | Add prefix to all keys |
| [`SuffixKeys<T, S>`](/api/keys/suffix-keys) | Add suffix to all keys |
| [`KeysByValueType<T, V>`](/api/keys/keys-by-value-type) | Get keys by value type |

### [Numeric Types](#numeric-types-1)

| Type | Description |
|------|-------------|
| [`Inc<N>`](/api/numeric/inc) | Increment number type |
| [`Dec<N>`](/api/numeric/dec) | Decrement number type |
| [`Add<A, B>`](/api/numeric/add) | Add two number types |
| [`Subtract<A, B>`](/api/numeric/subtract) | Subtract two number types |
| [`Range<From, To>`](/api/numeric/range) | Create number range union |

### [Path Utilities](#path-utilities-1)

| Type | Description |
|------|-------------|
| [`ValidPath<T, P>`](/api/path/valid-path) | Check if path exists in type |
| [`ArrayPaths<T>`](/api/path/array-paths) | Get all paths with array indices |
| [`LeafPaths<T>`](/api/path/leaf-paths) | Get paths to leaf nodes |
| [`PathLength<P>`](/api/path/path-length) | Get path segment count |

### [Record Types](#record-types-1)

| Type | Description |
|------|-------------|
| [`DeepNullable<T>`](/api/record/deep-nullable) | Make all properties nullable |
| [`DeepOptional<T>`](/api/record/deep-optional) | Make all properties optional |
| [`Immutable<T>`](/api/record/immutable) | Make all properties readonly |
| [`Mutable<T>`](/api/record/mutable) | Remove readonly from all properties |

### [Template Literals](#template-literals-1)

| Type | Description |
|------|-------------|
| [`ReplaceAll<S, From, To>`](/api/template/replace-all) | Replace all occurrences |
| [`Trim<S>`](/api/template/trim) | Trim whitespace |
| [`StringLength<S>`](/api/template/string-length) | Get string length |
| [`Repeat<S, N>`](/api/template/repeat) | Repeat string N times |

### [Type Guards](#type-guards-1)

| Type | Description |
|------|-------------|
| [`IsArray<T>`](/api/guards/is-array) | Check if type is array |
| [`IsTuple<T>`](/api/guards/is-tuple) | Check if type is tuple |
| [`IsEqual<X, Y>`](/api/guards/is-equal) | Check if types are equal |
| [`IsAny<T>`](/api/guards/is-any) | Check if type is any |
| [`IsNever<T>`](/api/guards/is-never) | Check if type is never |
| [`IsUnknown<T>`](/api/guards/is-unknown) | Check if type is unknown |

### [Type Inference](#type-inference-1)

| Type | Description |
|------|-------------|
| [`Awaited<T>`](/api/infer/awaited) | Unwrap Promise type |
| [`ArrayElement<T>`](/api/infer/array-element) | Get array element type |
| [`ValueOf<T>`](/api/infer/value-of) | Get object value types |
| [`FunctionKeys<T>`](/api/infer/function-keys) | Get function property keys |
| [`NonFunctionKeys<T>`](/api/infer/non-function-keys) | Get non-function property keys |
| [`FirstParameter<T>`](/api/infer/first-parameter) | Get first parameter type |
| [`FunctionOnly<T>`](/api/infer/function-only) | Extract function properties |
| [`DataOnly<T>`](/api/infer/data-only) | Extract non-function properties |

### [Utility Types](#utility-types-1)

| Type | Description |
|------|-------------|
| [`Merge<T, U>`](/api/utils/merge) | Merge two types |
| [`NonNullable<T>`](/api/utils/non-nullable) | Exclude null/undefined |
| [`Exclusive<T, K>`](/api/utils/exclusive) | Create exclusive properties |
| [`NoNullish<T>`](/api/utils/no-nullish) | Remove null/undefined from all properties |
| [`Nullable<T>`](/api/utils/nullable) | Add null to type |
| [`Optional<T>`](/api/utils/optional) | Add undefined to type |
| [`Maybe<T>`](/api/utils/maybe) | Add null/undefined to type |
| [`LoosePartial<T>`](/api/utils/loose-partial) | Make all properties optional |

### [Key Types](#key-types-1)

| Type | Description |
|------|-------------|
| [`RequiredKeys<T>`](/api/utils/required-keys) | Get required property keys |
| [`OptionalKeys<T>`](/api/utils/optional-keys) | Get optional property keys |
| [`WritableKeys<T>`](/api/utils/writable-keys) | Get writable property keys |
| [`ReadonlyKeys<T>`](/api/utils/readonly-keys) | Get readonly property keys |

### [Path Types](#path-types-1)

| Type | Description |
|------|-------------|
| [`Paths<T>`](/api/utils/paths) | Get all nested property paths |
| [`PathValue<T, P>`](/api/utils/path-value) | Get value type at path |
| [`SplitPath<S>`](/api/utils/split-path) | Split path into array |

### [String Case](#string-case-1)

| Type | Description |
|------|-------------|
| [`CamelCase<S>`](/api/utils/camel-case) | Convert to camelCase |
| [`SnakeCase<S>`](/api/utils/snake-case) | Convert to snake_case |
| [`CamelCaseKeys<T>`](/api/utils/camel-case-keys) | Convert object keys to camelCase |
| [`SnakeCaseKeys<T>`](/api/utils/snake-case-keys) | Convert object keys to snake_case |

### [Advanced Types](#advanced-types-1)

| Type | Description |
|------|-------------|
| [`AtLeastOne<T>`](/api/utils/at-least-one) | Require at least one property |
| [`StrictExtract<T, U>`](/api/utils/strict-extract) | Strictly extract types |
| [`StrictExclude<T, U>`](/api/utils/strict-exclude) | Strictly exclude types |
| [`UnionToIntersection<U>`](/api/utils/union-to-intersection) | Union to intersection |
| [`UnionToTuple<T>`](/api/utils/union-to-tuple) | Union to tuple |