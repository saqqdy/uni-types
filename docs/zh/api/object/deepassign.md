# DeepAssign

**Since v1.3.0**

深度赋值属性，将一个对象类型的属性赋值到另一个。类似于 `Object.assign`，但递归操作嵌套对象，将源的所有属性赋值到目标。

## 签名

```typescript
export type DeepAssign<T, U> = {
	[K in keyof T | keyof U]: K extends keyof U
		? U[K] extends Record<string, any>
			? K extends keyof T
				? T[K] extends Record<string, any>
					? DeepAssign<T[K], U[K]>
					: U[K]
				: U[K]
			: U[K]
		: K extends keyof T
			? T[K]
			: never
}
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 目标对象类型 |
| `U` | 源对象类型，从中赋值 |

## 示例

### 基本用法

```typescript
import type { DeepAssign } from 'uni-types'

type Target = { a: number; b: { c: string } }
type Source = { b: { d: boolean }; e: number }
type Result = DeepAssign<Target, Source>
// { a: number; b: { c: string; d: boolean }; e: number }
```

### 覆盖嵌套属性

```typescript
import type { DeepAssign } from 'uni-types'

type Config = { database: { host: string; port: number }; cache: { ttl: number } }
type Override = { database: { host: string }; cache: { enabled: boolean } }
type Assigned = DeepAssign<Config, Override>
// { database: { host: string; port: number }; cache: { ttl: number; enabled: boolean } }
```
