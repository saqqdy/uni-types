# DeepMerge

**Since v1.3.0**

递归深度合并两个对象类型。当两个类型在同一键上都有对象值时，递归合并；否则第二个类型的值优先。

## 签名

```typescript
export type DeepMerge<T, U> = {
	[K in keyof T | keyof U]: K extends keyof U
		? K extends keyof T
			? T[K] extends Record<string, any>
				? U[K] extends Record<string, any>
					? DeepMerge<T[K], U[K]>
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
| `T` | 基础对象类型 |
| `U` | 要合并到 T 中的对象类型 |

## 示例

### 基本用法

```typescript
import type { DeepMerge } from 'uni-types'

type Defaults = { host: string; port: number; ssl: { enabled: boolean; cert: string } }
type Overrides = { port: number; ssl: { enabled: boolean; key: string } }
type Config = DeepMerge<Defaults, Overrides>
// { host: string; port: number; ssl: { enabled: boolean; cert: string; key: string } }
```

### 嵌套对象合并

```typescript
import type { DeepMerge } from 'uni-types'

type Base = { a: { b: { c: number }; d: string } }
type Extension = { a: { b: { e: boolean } } }
type Result = DeepMerge<Base, Extension>
// { a: { b: { c: number; e: boolean }; d: string } }
```
