# ObjectFilter

**Since v1.3.0**

按类型谓词过滤对象属性。仅保留值继承自谓词类型的键值对。

## 签名

```typescript
export type ObjectFilter<T extends Record<string, any>, P> = {
	[K in keyof T as T[K] extends P ? K : never]: T[K]
}
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要过滤的源对象类型 |
| `P` | 用于过滤值的谓词类型 |

## 示例

### 基本用法

```typescript
import type { ObjectFilter } from 'uni-types'

type Mixed = { name: string; age: number; active: boolean; score: number }
type OnlyNumbers = ObjectFilter<Mixed, number>
// { age: number; score: number }
```

### 按联合类型过滤

```typescript
import type { ObjectFilter } from 'uni-types'

type Config = { host: string; port: number; debug: boolean; timeout: number }
type StringsAndNumbers = ObjectFilter<Config, string | number>
// { host: string; port: number; timeout: number }
```
