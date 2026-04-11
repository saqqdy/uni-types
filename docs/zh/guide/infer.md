# 类型推断

从复杂结构中提取类型。

## Awaited

递归解包 Promise 类型。

```typescript
import type { Awaited } from 'uni-types'

type Result1 = Awaited<Promise<string>> // string
type Result2 = Awaited<Promise<Promise<number>>> // number
type Result3 = Awaited<string> // string（非 Promise 保持不变）
```

## ArrayElement

获取数组的元素类型。

```typescript
import type { ArrayElement } from 'uni-types'

type Element1 = ArrayElement<string[]> // string
type Element2 = ArrayElement<number[]> // number
type Element3 = ArrayElement<(string | number)[]> // string | number
type Element4 = ArrayElement<readonly string[]> // string
```

## ValueOf

获取对象值类型的联合类型。

```typescript
import type { ValueOf } from 'uni-types'

type Values = ValueOf<{ a: string; b: number; c: boolean }>
// string | number | boolean
```

## FunctionKeys

获取函数属性的键名。

```typescript
import type { FunctionKeys } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
  onChange: (value: string) => void
}

type FnKeys = FunctionKeys<User> // 'onClick' | 'onChange'
```

## NonFunctionKeys

获取非函数属性的键名。

```typescript
import type { NonFunctionKeys } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
}

type DataKeys = NonFunctionKeys<User> // 'name' | 'age'
```

## FirstParameter

获取函数的第一个参数类型。

```typescript
import type { FirstParameter } from 'uni-types'

type Param = FirstParameter<(first: string, second: number) => void>
// string

type NoParam = FirstParameter<() => void> // never
```

## FunctionOnly

从对象中仅提取函数属性。

```typescript
import type { FunctionOnly } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
}

type Fns = FunctionOnly<User> // { onClick: () => void }
```

## DataOnly

从对象中仅提取非函数属性。

```typescript
import type { DataOnly } from 'uni-types'

interface User {
  name: string
  age: number
  onClick: () => void
}

type Data = DataOnly<User> // { name: string; age: number }
```
