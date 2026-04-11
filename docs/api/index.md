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