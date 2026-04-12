# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2026-04-12

### Added

#### Schema Validation
- `RuntimeGuard<T>` - Define type guard function for runtime type checking
- `GuardedType<G>` - Extract the guarded type from a type guard function
- `HasRuntimeCheck<T>` - Check if a type has runtime check available
- `AssertionFunction<T>` - Assertion function type
- `CompositeGuard<T>` - Composite type guard for objects
- `NegateGuard<T>` - Negate a type guard
- `CombinedGuard<T, U>` - Combine multiple type guards (AND)
- `UnionGuard<T, U>` - Union type guard (OR)

#### Zod Integration
- `ZodOutput<T>` - Extract output type from Zod schema
- `ZodInput<T>` - Extract input type from Zod schema
- `IsZodSchema<T>` - Check if type is a Zod schema
- `ZodShape<T>` - Extract shape from ZodObject
- `ZodUnwrapOptional<T>` - Unwrap ZodOptional type
- `ZodUnwrapNullable<T>` - Unwrap ZodNullable type
- `IsZodOptional<T>` - Check if Zod schema is optional
- `IsZodNullable<T>` - Check if Zod schema is nullable
- `ZodArrayElement<T>` - Get element type from ZodArray
- `ZodRequiredKeys<T>` - Get required keys from ZodObject
- `ZodOptionalKeys<T>` - Get optional keys from ZodObject
- `ZodPick<T, K>` - Pick properties from ZodObject at type level
- `ZodOmit<T, K>` - Omit properties from ZodObject at type level
- `ZodDeepPartialInput<T>` - Deep partial input for Zod schemas

#### Yup Integration
- `YupOutput<T>` - Extract output type from Yup schema
- `YupInput<T>` - Extract input type from Yup schema
- `IsYupSchema<T>` - Check if type is a Yup schema
- `YupFields<T>` - Get Yup schema fields from object schema
- `YupRequiredKeys<T>` - Get required keys from Yup schema
- `YupOptionalKeys<T>` - Get optional keys from Yup schema

#### Ecosystem Integration - React
- `ComponentProps<T>` - Extract props from React component or intrinsic element
- `ComponentPropsWithRef<T>` - Get props with ref included
- `PropsWithChildren<P>` - Add children to props
- `PropsWithoutChildren<P>` - Remove children from props
- `ExtractPropTypes<T>` - Extract prop types from component
- `RequiredProps<P>` - Get required prop keys
- `OptionalProps<P>` - Get optional prop keys
- `MergeDefaultProps<P, D>` - Merge props with default props
- `PropsWithStyle<P>` - Props with style property
- `PropsWithClassName<P>` - Props with className property
- `EventHandler<E>`, `MouseEventHandler`, `KeyboardEventHandler`, etc. - Event handler types

#### Ecosystem Integration - Vue
- `VuePropType<T>` - Vue prop type definition
- `VuePropConstructor<T>` - Vue prop constructor types
- `ExtractVueProps<T>` - Extract props from Vue component options
- `NormalizeVueProps<T>` - Normalize Vue props to TypeScript types
- `VueEmitType<T>` - Vue emit function type
- `VueModelProps<K, T>` - Vue model props for v-model
- `VueSlot<T>` - Vue slot type
- `VueSlots<T>` - Vue slots type
- `VuePropsToType<T>` - Convert Vue props options to TypeScript type

#### Ecosystem Integration - Prisma
- `PrismaModel<T>` - Prisma model type helper
- `PrismaCreateInput<T>` - Prisma create input type
- `PrismaUpdateInput<T>` - Prisma update input type
- `PrismaUniqueWhere<T, K>` - Prisma unique where input
- `PrismaWhereInput<T>` - Prisma where input type
- `PrismaOrderByInput<T>` - Prisma order by input
- `PrismaSelect<T, K>` - Prisma select type
- `PrismaInclude<T, K>` - Prisma include type
- `PrismaScalarFields<T>` - Extract scalar fields from model
- `PrismaRelationFields<T>` - Extract relation fields from model
- `PrismaFindManyArgs<T>`, `PrismaCreateArgs<T>`, `PrismaUpdateArgs<T>`, etc. - Typed query args

#### Ecosystem Integration - tRPC
- `TRPCRouterShape<T>` - tRPC router shape
- `TRPCProcedureInput<T>` - Extract input from tRPC procedure
- `TRPCProcedureOutput<T>` - Extract output from tRPC procedure
- `TRPCProcedureType` - tRPC procedure type (query/mutation/subscription)
- `TRPCExtractProcedureType<T>` - Extract procedure type
- `TRPCContext<T>` - tRPC context type
- `TRPCMiddleware<T>` - tRPC middleware type
- `TRPCQueries<T>`, `TRPCMutations<T>`, `TRPCSubscriptions<T>` - Get procedure keys by type

#### Performance Optimization
- `Simplify<T>` - Flatten intersection types
- `DeepSimplify<T>` - Recursively simplify nested types
- `FlattenType<T>` - Remove extra intersections
- `ReduceIntersection<T>` - Simplify intersection types
- `ReduceUnion<T>` - Remove duplicate union members
- `Compact<T>` - Remove never and undefined from objects
- `StripNever<T>` - Strip never properties from object
- `StripUndefined<T>` - Strip undefined properties from object
- `StripNull<T>` - Strip null properties from object
- `MergeAll<T>` - Merge all object types in array
- `PickNonNullable<T>` - Pick only non-nullable properties
- `PickNullable<T>` - Pick only nullable properties
- `TypeEq<A, B>` - Type equivalence check (optimized)
- `ExactType<T, Shape>` - Ensure exact shape match
- `Normalize<T>` - Remove optional markers
- `Optionalize<T>` - Make all properties optional

#### Lazy Type Evaluation
- `Lazy<T>` - Lazy type wrapper
- `ForceEvaluate<T>` - Force evaluate a lazy type
- `Deferred<T>` - Prevents immediate expansion
- `Thunk<T>` - Zero-argument function returning a type
- `LazyKey<T, K>` - Lazy property access
- `LazyConditional<C, T, F>` - Lazy conditional evaluation
- `LazyArrayElement<T>` - Lazy array element
- `LazyAwaited<T>` - Lazy promise unwrap
- `LazyReturnType<T>` - Lazy function return
- `LazyParameters<T>` - Lazy function parameters
- `LazyMap<T, F>` - Lazy map over array type

#### Type Caching
- `Cached<T>` - Cached type
- `CachedValue<T>` - Extract cached value
- `Memoized<T>` - Memoized type computation
- `TypeIdentity<T>` - Prevent structural typing
- `BrandCache<T, B>` - Brand cache for memoization
- `CachedIntersection<A, B>` - Cached intersection
- `CachedUnion<A, B>` - Cached union
- `CachedKeyOf<T>` - Cached keyof
- `CachedProperty<T, K>` - Cached property access
- `TypeCache<T>` - Type cache structure
- `FlushCache<T>` - Force re-computation

### Documentation
- Added Schema Validation guide (English & Chinese)
- Added Ecosystem Integration guide (English & Chinese)
- Added Performance Optimization guide (English & Chinese)
- Added API reference pages for all new types

---

## [1.1.0] - 2026-04-11

### Added

#### Conditional Types
- `If<C, T, F>` - Type-level if-then-else
- `Not<B>` - Logical NOT for boolean types
- `And<A, B>` - Logical AND for boolean types
- `Or<A, B>` - Logical OR for boolean types
- `Assert<T, U>` - Type constraint assertion

#### Brand Types
- `Brand<T, B>` - Create branded type for nominal typing
- `Unbrand<T>` - Extract underlying type from branded type
- `BrandedString<B>` - String branded type helper
- `BrandedNumber<B>` - Number branded type helper

#### Deep Path Operations
- `DeepOmit<T, P>` - Omit properties by path string
- `DeepPick<T, P>` - Pick properties by path string
- `DeepPickPaths<T, P>` - Deep pick for union paths
- `DeepOmitPaths<T, P>` - Deep omit for union paths

#### Enhanced Path Types
- `ValidPath<T, P>` - Check if path exists in type
- `ArrayPaths<T>` - Get paths including array indices
- `LeafPaths<T>` - Get paths to primitive values only
- `PathLength<P>` - Get number of path segments
- `ParentPath<P>` - Get parent path
- `PathLeaf<P>` - Get last segment of path

#### Key Utilities
- `Keys<T>` - Get all keys as literal union
- `RenameKeys<T, M>` - Rename keys based on mapping
- `PrefixKeys<T, P>` - Add prefix to all keys
- `SuffixKeys<T, S>` - Add suffix to all keys
- `PascalCaseKeys<T>` - Convert keys to PascalCase
- `KeysByValueType<T, V>` - Get keys by value type
- `FilterKeys<T, P>` - Get keys matching pattern

#### Function Utilities
- `Parameters<T>` - Get function parameters as tuple
- `ReturnType<T>` - Get function return type
- `NthParameter<T, N>` - Get Nth parameter type
- `AsyncReturnType<T>` - Extract async function return type
- `ThisParameterType<T>` - Get this parameter type
- `OmitThisParameter<T>` - Omit this parameter from function
- `IsFunction<T>` - Check if type is a function
- `IsAsyncFunction<T>` - Check if type is an async function
- `OptionalParameters<T>` - Make function parameters optional
- `AppendParameter<T, P>` - Append parameter to function
- `PrependParameter<T, P>` - Prepend parameter to function

#### Template Literal Utilities
- `ReplaceAll<S, From, To>` - Replace all occurrences
- `Replace<S, From, To>` - Replace first occurrence
- `Trim<S>` - Trim whitespace from both ends
- `TrimLeft<S>` - Trim whitespace from left
- `TrimRight<S>` - Trim whitespace from right
- `StringToArray<S>` - Convert string to array of characters
- `CapitalizeAll<S>` - Capitalize all words
- `UncapitalizeAll<S>` - Uncapitalize all words
- `StartsWith<S, P>` - Check if string starts with prefix
- `EndsWith<S, P>` - Check if string ends with suffix
- `StringLength<S>` - Get string length at type level
- `Repeat<S, N>` - Repeat string N times
- `PadStart<S, N, P>` - Pad string on the left
- `PadEnd<S, N, P>` - Pad string on the right

#### Record Utilities
- `DeepNullable<T>` - Make all properties nullable
- `DeepOptional<T>` - Make all properties optional
- `Immutable<T>` - Make all properties readonly
- `Mutable<T>` - Make all properties mutable
- `DeepNonNullable<T>` - Remove null/undefined from all properties
- `Exact<T, Shape>` - Ensure exact shape match
- `Required<T>` - Make all properties required
- `DeepRequiredProperties<T>` - Deep required with null/undefined handling
- `HasKeys<T, K>` - Check if object has specified keys
- `HasExactKeys<T, K>` - Check if object has exactly specified keys

#### Numeric Utilities
- `Inc<N>` - Increment number type
- `Dec<N>` - Decrement number type
- `Add<A, B>` - Add two number types
- `Subtract<A, B>` - Subtract two number types
- `GreaterThan<A, B>` - Check if A > B
- `LessThan<A, B>` - Check if A < B
- `Max<A, B>` - Maximum of two numbers
- `Min<A, B>` - Minimum of two numbers
- `IsEven<N>` - Check if number is even
- `IsOdd<N>` - Check if number is odd
- `Neg<N>` - Negate a number

### Testing
- Added 71 new type tests
- Total 162 tests passing
- Full type coverage validation

### Documentation
- Updated README with v1.1.0 features
- Updated ROADMAP.md with release status

---

## [1.0.0] - 2024-04-11

### Added

#### Core Operations
- `PickRequired<T, K>` - Make specified properties required
- `OmitRequired<T, K>` - Make properties except specified ones required
- `PickPartial<T, K>` - Make specified properties optional
- `OmitPartial<T, K>` - Make properties except specified ones optional

#### Tuple Operations
- `Head<T>` - Get first element of tuple
- `Last<T>` - Get last element of tuple
- `Tail<T>` - Get all elements except first
- `Init<T>` - Get all elements except last
- `Reverse<T>` - Reverse a tuple
- `Flatten<T>` - Flatten nested tuples
- `TupleLength<T>` - Get tuple length
- `IsEmptyTuple<T>` - Check if tuple is empty

#### Deep Operations
- `DeepPartial<T>` - Make all nested properties optional
- `DeepRequired<T>` - Make all nested properties required
- `DeepReadonly<T>` - Make all nested properties readonly
- `DeepMutable<T>` - Make all nested properties mutable

#### Type Guards
- `IsArray<T>` - Check if type is an array
- `IsTuple<T>` - Check if type is a tuple
- `IsEqual<X, Y>` - Check if two types are equal
- `IsAny<T>` - Check if type is `any`
- `IsNever<T>` - Check if type is `never`
- `IsUnknown<T>` - Check if type is `unknown`

#### Type Inference
- `Awaited<T>` - Unwrap Promise type recursively
- `ArrayElement<T>` - Get array element type
- `ValueOf<T>` - Get object value types
- `FunctionKeys<T>` - Get keys of function properties
- `NonFunctionKeys<T>` - Get keys of non-function properties
- `FirstParameter<T>` - Get first parameter type of function
- `FunctionOnly<T>` - Extract only function properties
- `DataOnly<T>` - Extract only non-function properties

#### Utility Types
- `Merge<T, U>` - Merge two types
- `NonNullable<T>` - Exclude null and undefined
- `Exclusive<T, K>` - Create mutually exclusive properties
- `NoNullish<T>` - Remove null/undefined from all properties
- `Nullable<T>` - Add null to type
- `Optional<T>` - Add undefined to type
- `Maybe<T>` - Add null and undefined to type
- `LoosePartial<T>` - Make all properties optional

#### Key Types
- `RequiredKeys<T>` - Get all required property keys
- `OptionalKeys<T>` - Get all optional property keys
- `WritableKeys<T>` - Get all writable keys
- `ReadonlyKeys<T>` - Get all readonly keys

#### Path Types
- `Paths<T>` - Get all nested property paths
- `PathValue<T, P>` - Get value type at path
- `SplitPath<S>` - Split path string into array

#### Literal Types
- `Literal` - All literal types union
- `LiteralString<T>` - Exact string literal
- `LiteralNumber<T>` - Exact number literal
- `LiteralBoolean<T>` - Exact boolean literal

#### String Case Conversion
- `CamelCase<S>` - Convert to camelCase
- `SnakeCase<S>` - Convert to snake_case (handles consecutive uppercase letters correctly)
- `CamelCaseKeys<T>` - Convert object keys to camelCase
- `SnakeCaseKeys<T>` - Convert object keys to snake_case

#### Advanced Types
- `AtLeastOne<T>` - Require at least one property
- `StrictExtract<T, U>` - Strictly extract matching types
- `StrictExclude<T, U>` - Strictly exclude types
- `UnionToIntersection<U>` - Convert union to intersection
- `UnionToTuple<T>` - Convert union to tuple

### Changed
- Improved `DeepPartial`, `DeepRequired`, `DeepReadonly` to properly handle arrays, Maps, Sets, and built-in types
- Fixed `SnakeCase` to correctly handle consecutive uppercase letters (e.g., `XMLParser` → `xml_parser`)

### Documentation
- Added comprehensive JSDoc comments for all types
- Added `@see` references to related types
- Added README in Chinese (README_CN.md)
