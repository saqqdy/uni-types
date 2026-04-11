# Changelog

All notable changes to this project will be documented in this file.

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
