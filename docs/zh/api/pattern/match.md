# Match

**Since v1.3.0**

类型级别的模式匹配工具。将类型与模式对象进行匹配并返回对应的值，支持默认情况。

## 签名

```typescript
export type Match<T, Patterns extends Record<string, any>> = T extends keyof Patterns
	? Patterns[T]
	: Patterns extends { _: infer Default }
		? Default
		: never
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要与模式匹配的类型 |
| `Patterns` | 将类型映射到结果的对象 |

## 示例

### 基本用法

```typescript
import type { Match } from 'uni-types'

type Status = 'success' | 'error' | 'pending'
type StatusMessage = Match<Status, { success: 'OK'; error: 'Failed'; pending: 'Waiting' }>
// 'OK' | 'Failed' | 'Waiting'
```

### 使用默认情况

```typescript
import type { Match } from 'uni-types'

type Color = 'red' | 'green' | 'blue'
type HexColor = Match<Color, { red: '#ff0000'; green: '#00ff00'; _: '#000000' }>
// '#ff0000' | '#00ff00' | '#000000' (blue 匹配默认值)
```