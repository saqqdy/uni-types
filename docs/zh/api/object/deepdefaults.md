# DeepDefaults

**Since v1.3.0**

深度设置对象类型的默认属性。递归地从默认对象填充缺失的属性，同时保留目标类型中已有的值。

## 签名

```typescript
export type DeepDefaults<T, U> = {
	[K in keyof T | keyof U]: K extends keyof T
		? K extends keyof U
			? T[K] extends Record<string, any>
				? U[K] extends Record<string, any>
					? DeepDefaults<T[K], U[K]>
					: T[K]
				: T[K]
			: T[K]
		: K extends keyof U
			? U[K]
			: never
}
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 目标对象类型 |
| `U` | 默认对象类型 |

## 示例

### 基本用法

```typescript
import type { DeepDefaults } from 'uni-types'

type Defaults = { host: string; port: number; ssl: { enabled: boolean; cert: string } }
type Partial = { host: string; ssl: { enabled: boolean } }
type Config = DeepDefaults<Partial, Defaults>
// { host: string; port: number; ssl: { enabled: boolean; cert: string } }
```

### 嵌套默认值

```typescript
import type { DeepDefaults } from 'uni-types'

type DefaultTheme = { colors: { primary: string; secondary: string }; fontSize: number }
type CustomTheme = { colors: { primary: string } }
type Theme = DeepDefaults<CustomTheme, DefaultTheme>
// { colors: { primary: string; secondary: string }; fontSize: number }
```
