# 类型守卫

在编译时检查类型，返回类型级别的布尔结果。

## IsArray

检查类型是否为数组。

```typescript
import type { IsArray } from 'uni-types'

type Check1 = IsArray<string[]> // true
type Check2 = IsArray<number[]> // true
type Check3 = IsArray<readonly string[]> // true
type Check4 = IsArray<string> // false
type Check5 = IsArray<{ length: number }> // false
```

## IsTuple

检查类型是否为元组。

```typescript
import type { IsTuple } from 'uni-types'

type Check1 = IsTuple<[string, number]> // true
type Check2 = IsTuple<[string]> // true
type Check3 = IsTuple<readonly [number, string]> // true
type Check4 = IsTuple<string[]> // false
type Check5 = IsTuple<number[]> // false
```

## IsEqual

检查两个类型是否完全相等。

```typescript
import type { IsEqual } from 'uni-types'

type Check1 = IsEqual<string, string> // true
type Check2 = IsEqual<number, number> // true
type Check3 = IsEqual<{ a: string }, { a: string }> // true
type Check4 = IsEqual<string, number> // false
type Check5 = IsEqual<{ a: string }, { a: number }> // false
type Check6 = IsEqual<any, unknown> // false
```

### 在条件类型中使用

```typescript
import type { IsEqual } from 'uni-types'

type Conditional<T, U> = IsEqual<T, U> extends true ? 'same' : 'different'

type Result1 = Conditional<string, string> // 'same'
type Result2 = Conditional<string, number> // 'different'
```

## IsAny

检查类型是否为 `any`。

```typescript
import type { IsAny } from 'uni-types'

type Check1 = IsAny<any> // true
type Check2 = IsAny<string> // false
type Check3 = IsAny<unknown> // false
type Check4 = IsAny<never> // false
```

## IsNever

检查类型是否为 `never`。

```typescript
import type { IsNever } from 'uni-types'

type Check1 = IsNever<never> // true
type Check2 = IsNever<string> // false
type Check3 = IsNever<undefined> // false
type Check4 = IsNever<null> // false
```

## IsUnknown

检查类型是否为 `unknown`。

```typescript
import type { IsUnknown } from 'uni-types'

type Check1 = IsUnknown<unknown> // true
type Check2 = IsUnknown<string> // false
type Check3 = IsUnknown<any> // false
type Check4 = IsUnknown<never> // false
```
