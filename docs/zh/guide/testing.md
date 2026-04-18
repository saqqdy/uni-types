# 类型测试工具

**自 1.4.0 起**

类型级测试工具。

## 类型断言

### ExpectTrue / ExpectFalse

期望类型为 true/false。

```typescript
import type { ExpectTrue, ExpectFalse } from 'uni-types'

ExpectTrue<true>  // ok
ExpectFalse<false>  // ok
```

### ExpectEqual

期望两个类型相等。

```typescript
import type { ExpectEqual } from 'uni-types'

ExpectEqual<string, string>  // true
ExpectEqual<string, number>  // false
```

### AssertType

断言类型相等（不相等则返回 never）。

```typescript
import type { AssertType } from 'uni-types'

type A = AssertType<string, string>  // string
type B = AssertType<string, number>  // never
```

### ExpectExtends / ExpectNotExtends

期望类型（不）继承另一个类型。

```typescript
import type { ExpectExtends, ExpectNotExtends } from 'uni-types'

ExpectExtends<string, string | number>  // true
ExpectNotExtends<string, number>  // true
```

### ExpectAny / ExpectNever / ExpectUnknown

类型期望。

```typescript
import type { ExpectAny, ExpectNever, ExpectUnknown } from 'uni-types'

ExpectAny<any>  // true
ExpectNever<never>  // true
ExpectUnknown<unknown>  // true
```

## 类型测试

### TypeTest

类型测试定义。

```typescript
import type { TypeTest } from 'uni-types'

type Test = TypeTest<'StringTest', ExpectEqual<string, string>>
// { name: 'StringTest'; result: 'pass' }
```

### TypeTestSuite

类型测试套件。

```typescript
import type { TypeTestSuite } from 'uni-types'

type Suite = TypeTestSuite<[
  TypeTest<'Test1', true>,
  TypeTest<'Test2', true>
]>
// { tests: [...]; allPassed: true; failedTests: [] }
```

### RunTypeTest / SkipTest

运行或跳过测试。

```typescript
import type { RunTypeTest, SkipTest } from 'uni-types'

type Result = RunTypeTest<TypeTest<'Test', true>>  // 'pass'
type Skipped = SkipTest<'Test'>  // { name: 'Test'; result: 'pass'; skipped: true }
```

## 类型覆盖率

### TypeCoverage

计算类型覆盖率百分比。

```typescript
import type { TypeCoverage } from 'uni-types'

type Coverage = TypeCoverage<{ a: string; b?: number }>
// { total: 2; covered: 1; percentage: ... }
```

### UncoveredTypes

查找未覆盖的类型。

```typescript
import type { UncoveredTypes } from 'uni-types'

type Uncovered = UncoveredTypes<{ a: never; b: string }>  // { a: never }
```

### TypeComplexity

计算类型复杂度分数。

```typescript
import type { TypeComplexity } from 'uni-types'

type Complexity = TypeComplexity<{ a: { b: { c: string } }>
// { depth: 3; nested: ...; recursionRisk: false }
```

## 类型检查

### InspectType

检查类型结构。

```typescript
import type { InspectType } from 'uni-types'

type Info = InspectType<{ a: string }>
// { type: 'object'; keys: 'a'; isNullable: false; isArray: false; ... }
```

### TypeCategory

类型分类。

```typescript
import type { TypeCategory } from 'uni-types'

type Cat1 = TypeCategory<string>  // 'string'
type Cat2 = TypeCategory<string[]>  // 'array'
type Cat3 = TypeCategory<{ a: 1 }>  // 'object'
```

### TypeInfo

获取类型信息。

```typescript
import type { TypeInfo } from 'uni-types'

type Info = TypeInfo<{ a: string }>
// { category: 'object'; nullable: false; optional: false; literal: false; union: false }
```

### IsUnion / IsIntersection

检查类型结构。

```typescript
import type { IsUnion, IsIntersection } from 'uni-types'

IsUnion<string | number>  // true
IsIntersection<{ a: 1 } & { b: 2 }>  // true
```

## 调试工具

### DebugType

调试类型（显示展开类型）。

```typescript
import type { DebugType } from 'uni-types'

type Debug = DebugType<DeepPartial<{ a: { b: string } }>>
```

### PrettyType

美化打印类型。

```typescript
import type { PrettyType } from 'uni-types'

type Pretty = PrettyType<{ a: { b: string } }>
```

### ExpandType

递归展开类型。

```typescript
import type { ExpandType } from 'uni-types'

type Expanded = ExpandType<{ a: { b: { c: string } } }>
```

### MarkType

标记类型以供检查。

```typescript
import type { MarkType } from 'uni-types'

type Marked = MarkType<string, 'debug'>  // string & { __tag: 'debug' }
```

## 相关

- [类型断言](./assert) - 类型断言工具
- [类型判断](./guards) - 类型守卫工具