# Testing Utilities

**Since 1.4.0**

Type-level testing utilities.

## Type Assertions

### ExpectTrue / ExpectFalse

Expect a type to be true/false.

```typescript
import type { ExpectTrue, ExpectFalse } from 'uni-types'

ExpectTrue<true>  // ok
ExpectFalse<false>  // ok
```

### ExpectEqual

Expect two types to be equal.

```typescript
import type { ExpectEqual } from 'uni-types'

ExpectEqual<string, string>  // true
ExpectEqual<string, number>  // false
```

### AssertType

Assert type equality (returns never if not equal).

```typescript
import type { AssertType } from 'uni-types'

type A = AssertType<string, string>  // string
type B = AssertType<string, number>  // never
```

### ExpectExtends / ExpectNotExtends

Expect type to (not) extend another.

```typescript
import type { ExpectExtends, ExpectNotExtends } from 'uni-types'

ExpectExtends<string, string | number>  // true
ExpectNotExtends<string, number>  // true
```

### ExpectAny / ExpectNever / ExpectUnknown

Type expectations.

```typescript
import type { ExpectAny, ExpectNever, ExpectUnknown } from 'uni-types'

ExpectAny<any>  // true
ExpectNever<never>  // true
ExpectUnknown<unknown>  // true
```

## Type Tests

### TypeTest

Type test definition.

```typescript
import type { TypeTest } from 'uni-types'

type Test = TypeTest<'StringTest', ExpectEqual<string, string>>
// { name: 'StringTest'; result: 'pass' }
```

### TypeTestSuite

Type test suite.

```typescript
import type { TypeTestSuite } from 'uni-types'

type Suite = TypeTestSuite<[
  TypeTest<'Test1', true>,
  TypeTest<'Test2', true>
]>
// { tests: [...]; allPassed: true; failedTests: [] }
```

### RunTypeTest / SkipTest

Run or skip tests.

```typescript
import type { RunTypeTest, SkipTest } from 'uni-types'

type Result = RunTypeTest<TypeTest<'Test', true>>  // 'pass'
type Skipped = SkipTest<'Test'>  // { name: 'Test'; result: 'pass'; skipped: true }
```

## Type Coverage

### TypeCoverage

Calculate type coverage percentage.

```typescript
import type { TypeCoverage } from 'uni-types'

type Coverage = TypeCoverage<{ a: string; b?: number }>
// { total: 2; covered: 1; percentage: ... }
```

### UncoveredTypes

Find uncovered types.

```typescript
import type { UncoveredTypes } from 'uni-types'

type Uncovered = UncoveredTypes<{ a: never; b: string }>  // { a: never }
```

### TypeComplexity

Calculate type complexity score.

```typescript
import type { TypeComplexity } from 'uni-types'

type Complexity = TypeComplexity<{ a: { b: { c: string } }>
// { depth: 3; nested: ...; recursionRisk: false }
```

## Type Inspection

### InspectType

Inspect type structure.

```typescript
import type { InspectType } from 'uni-types'

type Info = InspectType<{ a: string }>
// { type: 'object'; keys: 'a'; isNullable: false; isArray: false; ... }
```

### TypeCategory

Type category.

```typescript
import type { TypeCategory } from 'uni-types'

type Cat1 = TypeCategory<string>  // 'string'
type Cat2 = TypeCategory<string[]>  // 'array'
type Cat3 = TypeCategory<{ a: 1 }>  // 'object'
```

### TypeInfo

Get type information.

```typescript
import type { TypeInfo } from 'uni-types'

type Info = TypeInfo<{ a: string }>
// { category: 'object'; nullable: false; optional: false; literal: false; union: false }
```

### IsUnion / IsIntersection

Check type structure.

```typescript
import type { IsUnion, IsIntersection } from 'uni-types'

IsUnion<string | number>  // true
IsIntersection<{ a: 1 } & { b: 2 }>  // true
```

## Debug Utilities

### DebugType

Debug type (show expanded type).

```typescript
import type { DebugType } from 'uni-types'

type Debug = DebugType<DeepPartial<{ a: { b: string } }>>
```

### PrettyType

Pretty print type.

```typescript
import type { PrettyType } from 'uni-types'

type Pretty = PrettyType<{ a: { b: string } }>
```

### ExpandType

Expand type recursively.

```typescript
import type { ExpandType } from 'uni-types'

type Expanded = ExpandType<{ a: { b: { c: string } } }>
```

### MarkType

Mark type for inspection.

```typescript
import type { MarkType } from 'uni-types'

type Marked = MarkType<string, 'debug'>  // string & { __tag: 'debug' }
```

## Related

- [Type Assertions](./assert) - Type assertion utilities
- [Type Guards](./guards) - Type guard utilities