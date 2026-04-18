# ObjectMap

**Since v1.3.0**

使用转换函数类型映射对象值。将函数类型应用于对象中的每个值，生成具有转换值的新对象。

## 签名

```typescript
export type ObjectMap<T extends Record<string, any>, F> = {
	[K in keyof T]: F extends (x: T[K]) => infer R ? R : never
}
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要映射的源对象类型 |
| `F` | 用于转换每个值的函数类型 |

## 示例

### 基本用法

```typescript
import type { ObjectMap } from 'uni-types'

type Source = { a: number; b: number; c: number }
type ToString = ObjectMap<Source, (x: number) => string>
// { a: string; b: string; c: string }
```

### 不同类型转换

```typescript
import type { ObjectMap } from 'uni-types'

type Data = { name: string; age: number; active: boolean }
type WrapInArray = ObjectMap<Data, (x: any) => Array<any>>
// { name: string[]; age: number[]; active: boolean[] }
```
