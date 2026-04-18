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

### [Algorithms](#algorithms-1)

| Type | Description |
|------|-------------|
| [`Sort<T, Order>`](/api/algorithms/sort) | Sort tuple of numbers |
| [`QuickSort<T>`](/api/algorithms/quicksort) | QuickSort implementation |
| [`MergeSort<T>`](/api/algorithms/mergesort) | MergeSort implementation |
| [`GCD<A, B>`](/api/algorithms/gcd) | Greatest Common Divisor |
| [`LCM<A, B>`](/api/algorithms/lcm) | Least Common Multiple |
| [`Factorial<N>`](/api/algorithms/factorial) | Factorial of number |
| [`Fibonacci<N>`](/api/algorithms/fibonacci) | Fibonacci number |
| [`IsPrime<N>`](/api/algorithms/isprime) | Check if number is prime |
| [`Find<T, P>`](/api/algorithms/find) | Find first element matching predicate |
| [`FindIndex<T, P>`](/api/algorithms/findindex) | Find index of first match |
| [`Includes<T, U>`](/api/algorithms/includes) | Check if tuple includes element |
| [`IndexOf<T, U>`](/api/algorithms/indexof) | Get index of element |
| [`LongestCommonPrefix<T>`](/api/algorithms/longestcommonprefix) | Find longest common prefix |
| [`Reverse<T>`](/api/algorithms/reverse) | Reverse a tuple |
| [`Unique<T>`](/api/algorithms/unique) | Remove duplicates from tuple |
| [`Flatten<T>`](/api/algorithms/flatten) | Flatten nested tuples |
| [`FlattenDeep<T>`](/api/algorithms/flattendeep) | Deep flatten nested tuples |
| [`LevenshteinDistance<A, B>`](/api/algorithms/levenshteindistance) | Levenshtein distance between strings |

### [Parsers](#parsers-1)

| Type | Description |
|------|-------------|
| [`ParseJSON<S>`](/api/parsers/parsejson) | Parse JSON string to type |
| [`StringifyJSON<T>`](/api/parsers/stringifyjson) | Stringify type to JSON |
| [`IsValidJSON<S>`](/api/parsers/isvalidjson) | Check if valid JSON |
| [`ParseURL<S>`](/api/parsers/parseurl) | Parse URL string |
| [`QueryParams<S>`](/api/parsers/queryparams) | Parse query string |
| [`ParseCSV<S>`](/api/parsers/parsecsv) | Parse CSV string |

### [State Machines](#state-machines-1)

| Type | Description |
|------|-------------|
| [`StateMachine<T>`](/api/statemachine/statemachine) | State machine definition |
| [`State<S, Data>`](/api/statemachine/state) | State definition |
| [`Transition<E, From, To>`](/api/statemachine/transition) | Transition definition |

### [Data Structures](#data-structures-1)

| Type | Description |
|------|-------------|
| [`Tree<T>`](/api/datastructures/tree) | Tree type |
| [`TreeNode<T>`](/api/datastructures/treenode) | Tree node type |
| [`Graph<A>`](/api/datastructures/graph) | Graph type (adjacency list) |
| [`LinkedList<T>`](/api/datastructures/linkedlist) | Linked list type |
| [`Stack<T>`](/api/datastructures/stack) | Stack type (LIFO) |
| [`Queue<T>`](/api/datastructures/queue) | Queue type (FIFO) |

### [HTTP & API](#http-api-1)

| Type | Description |
|------|-------------|
| [`HTTPMethod`](/api/http/httpmethod) | HTTP methods union |
| [`HTTPStatus`](/api/http/httpstatus) | HTTP status codes |
| [`Route<P, M, H>`](/api/http/route) | Route definition |
| [`Middleware<C>`](/api/http/middleware) | Middleware function |

### [Database](#database-1)

| Type | Description |
|------|-------------|
| [`SQLType<T>`](/api/database/sqltype) | TS to SQL type mapping |
| [`QueryBuilder<T>`](/api/database/querybuilder) | Query builder |
| [`Migration<T>`](/api/database/migration) | Migration definition |

### [Concurrency](#concurrency-1)

| Type | Description |
|------|-------------|
| [`Task<T>`](/api/concurrency/task) | Task type |
| [`Pipeline<I, O>`](/api/concurrency/pipeline) | Pipeline type |
| [`Scheduler<T>`](/api/concurrency/scheduler) | Scheduler type |
| [`WorkerPool<I, O>`](/api/concurrency/workerpool) | Worker pool type |

### [Interop](#interop-1)

| Type | Description |
|------|-------------|
| [`ToTypeFest<T>`](/api/interop/totypefest) | Convert to type-fest |
| [`ToTsToolbelt<T>`](/api/interop/totoolbelt) | Convert to ts-toolbelt |
| [`IsCompatible<T, U>`](/api/interop/iscompatible) | Check type compatibility |

### [Testing](#testing-1)

| Type | Description |
|------|-------------|
| [`ExpectTrue<T>`](/api/testing/expecttrue) | Expect type to be true |
| [`ExpectEqual<T, U>`](/api/testing/expectequal) | Expect types equal |
| [`TypeCoverage<T>`](/api/testing/typecoverage) | Type coverage analysis |
| [`TypeComplexity<T>`](/api/testing/typecomplexity) | Type complexity analysis |

### [Assert](#assert-1)

| Type | Description |
|------|-------------|
| [`AssertEqual<T, Expected>`](/api/assert/assertequal) | Assert types are equal |
| [`AssertExtends<T, U>`](/api/assert/assertextends) | Assert T extends U |
| [`AssertKeyof<T, K>`](/api/assert/assertkeyof) | Assert K is a key of T |
| [`AssertNotNil<T>`](/api/assert/assertnotnil) | Assert type is not never |
| [`RequireKeys<T, K>`](/api/assert/requirekeys) | Require specific keys |
| [`MakeOptional<T, K>`](/api/assert/makeoptional) | Make specific keys optional |
| [`RequireAtLeastOne<T, K>`](/api/assert/requireatleastone) | Require at least one key |
| [`RequireExactlyOne<T, K>`](/api/assert/requireexactlyone) | Require exactly one key |
| [`AssertHasProperty<T, K>`](/api/assert/asserthasproperty) | Ensure object has property |
| [`RequireNotNullish<T>`](/api/assert/requirenotnullish) | Ensure type is not nullish |
| [`RequireArray<T>`](/api/assert/requirearray) | Ensure type is an array |
| [`RequireFunction<T>`](/api/assert/requirefunction) | Ensure type is a function |

### [Async](#async-1)

| Type | Description |
|------|-------------|
| [`PromiseValue<T>`](/api/async/promisevalue) | Extract Promise value recursively |
| [`PromiseResult<T>`](/api/async/promiseresult) | Get Promise resolved value |
| [`IsPromise<T>`](/api/async/ispromise) | Check if type is Promise |
| [`UnwrapPromise<T>`](/api/async/unwrappromise) | Unwrap Promise to value |
| [`WrapPromise<T>`](/api/async/wrappromise) | Wrap type in Promise |
| [`PromiseSettledResult<T>`](/api/async/promisesettledresult) | Promise settlement result |

### [Collection](#collection-1)

| Type | Description |
|------|-------------|
| [`TypeSet<T>`](/api/collection/typeset) | Type-level set |
| [`SetAdd<S, T>`](/api/collection/setadd) | Add element to set |
| [`SetRemove<S, T>`](/api/collection/setremove) | Remove element from set |
| [`SetHas<S, T>`](/api/collection/sethas) | Check if element in set |
| [`SetUnion<A, B>`](/api/collection/setunion) | Union of sets |
| [`SetIntersection<A, B>`](/api/collection/setintersection) | Intersection of sets |
| [`SetDifference<A, B>`](/api/collection/setdifference) | Difference of sets |
| [`SetIsEmpty<S>`](/api/collection/setisempty) | Check if set is empty |
| [`SetIsSubset<A, B>`](/api/collection/setissubset) | Check if A is subset of B |
| [`TypeMap<K, V>`](/api/collection/typemap) | Type-level map |
| [`MapGet<M, K>`](/api/collection/mapget) | Get value from map |
| [`MapSet<M, K, V>`](/api/collection/mapset) | Set value in map |
| [`MapHas<M, K>`](/api/collection/maphas) | Check if key in map |
| [`MapDelete<M, K>`](/api/collection/mapdelete) | Delete key from map |
| [`MapKeys<M>`](/api/collection/mapkeys) | Get map keys |
| [`MapValues<M>`](/api/collection/mapvalues) | Get map values |
| [`ListLength<T>`](/api/collection/listlength) | Get list length |
| [`ListReverse<T>`](/api/collection/listreverse) | Reverse list |
| [`ListConcat<A, B>`](/api/collection/listconcat) | Concatenate lists |
| [`ListFilter<T, P>`](/api/collection/listfilter) | Filter list elements |
| [`ListFind<T, P>`](/api/collection/listfind) | Find element in list |
| [`ListIncludes<T, U>`](/api/collection/listincludes) | Check if list includes |

### [Object](#object-1)

| Type | Description |
|------|-------------|
| [`ObjectMap<T, F>`](/api/object/objectmap) | Map over object values |
| [`ObjectFilter<T, P>`](/api/object/objectfilter) | Filter object properties |
| [`ObjectPickByType<T, U>`](/api/object/objectpickbytype) | Pick by value type |
| [`ObjectOmitByType<T, U>`](/api/object/objectomitbytype) | Omit by value type |
| [`ObjectInvert<T>`](/api/object/objectinvert) | Invert keys and values |
| [`DeepMerge<T, U>`](/api/object/deepmerge) | Deep merge objects |
| [`DeepAssign<T, U>`](/api/object/deepassign) | Deep assign properties |
| [`DeepDefaults<T, U>`](/api/object/deepdefaults) | Deep defaults |
| [`HasProperty<T, K>`](/api/object/hasproperty) | Check if has property |
| [`HasProperties<T, K>`](/api/object/hasproperties) | Check if has properties |
| [`HasMethod<T, K>`](/api/object/hasmethod) | Check if has method |

### [Pattern](#pattern-1)

| Type | Description |
|------|-------------|
| [`Match<T, Patterns>`](/api/pattern/match) | Pattern matching |
| [`Case<P>`](/api/pattern/case) | Case helper for matching |
| [`Default<R>`](/api/pattern/default) | Default case |
| [`TypeFilter<T, P>`](/api/pattern/typefilter) | Filter tuple by predicate |
| [`TypeFind<T, P>`](/api/pattern/typefind) | Find element by predicate |
| [`TypeIncludes<T, P>`](/api/pattern/typeincludes) | Check if type in tuple |

### [String](#string-1)

| Type | Description |
|------|-------------|
| [`Split<S, D>`](/api/string/split) | Split string by delimiter |
| [`Join<T, S>`](/api/string/join) | Join strings with separator |
| [`KebabCase<S>`](/api/string/kebab-case) | Convert to kebab-case |
| [`PascalCase<S>`](/api/string/pascal-case) | Convert to PascalCase |
| [`IsEmail<T>`](/api/string/isemail) | Check if email format |
| [`IsUUID<T>`](/api/string/isuuid) | Check if UUID format |
| [`IsURL<T>`](/api/string/isurl) | Check if URL format |
| [`Chunk<S, N>`](/api/string/chunk) | Chunk string into parts |

### [Performance](#performance-1)

| Type | Description |
|------|-------------|
| [`Simplify<T>`](/api/perf/simplify) | Simplify complex types |
| [`DeepSimplify<T>`](/api/perf/deep-simplify) | Deep simplify types |
| [`Cached<T>`](/api/perf/cached) | Cache type computation |
| [`CachedValue<T>`](/api/perf/cachedvalue) | Extract cached value |
| [`Memoized<T>`](/api/perf/memoized) | Memoize type |
| [`Lazy<T>`](/api/perf/lazy) | Lazy type wrapper |
| [`ForceEvaluate<T>`](/api/perf/forceevaluate) | Force evaluate lazy type |
| [`Deferred<T>`](/api/perf/deferred) | Defer type expansion |
| [`FlattenType<T>`](/api/perf/flattentype) | Flatten intersections |
| [`StripNever<T>`](/api/perf/stripnever) | Strip never properties |
| [`StripUndefined<T>`](/api/perf/stripundefined) | Strip undefined properties |
| [`Compact<T>`](/api/perf/compact) | Remove never and undefined |

### [Schema](#schema-1)

| Type | Description |
|------|-------------|
| [`RuntimeGuard<T>`](/api/schema/runtime-guard) | Runtime type guard |
| [`GuardedType<G>`](/api/schema/guarded-type) | Extract guarded type |
| [`HasRuntimeCheck<T>`](/api/schema/hasruntimecheck) | Check if has runtime check |
| [`CompositeGuard<T>`](/api/collection/compositeguard) | Composite object guard |
| [`ZodOutput<T>`](/api/schema/zod-output) | Extract Zod output type |
| [`ZodInput<T>`](/api/schema/zod-input) | Extract Zod input type |
| [`IsZodSchema<T>`](/api/schema/iszodschema) | Check if Zod schema |
| [`ZodShape<T>`](/api/schema/zodshape) | Extract Zod shape |
| [`ZodArrayElement<T>`](/api/schema/zodarrayelement) | Get Zod array element |
| [`YupOutput<T>`](/api/schema/yup-output) | Extract Yup output type |
| [`YupInput<T>`](/api/schema/yup-input) | Extract Yup input type |
| [`IsYupSchema<T>`](/api/schema/isyupschema) | Check if Yup schema |