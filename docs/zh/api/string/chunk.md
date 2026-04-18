# Chunk

**Since v1.3.0**

将字符串类型按指定大小分块。从左到右将字符串分割为固定长度的段。

## 签名

```typescript
export type Chunk<S extends string, N extends number> = S extends ''
	? []
	: N extends 0
		? []
		: S extends `${infer First}${infer Rest}`
			? First extends ''
				? []
				: [First, ...Chunk<Rest, N>]
			: []
```

## 参数

| 参数 | 说明 |
|------|------|
| `S` | 要分块的字符串类型 |
| `N` | 每块的大小（字面量数字类型） |

## 示例

### 基本用法

```typescript
import type { Chunk } from 'uni-types'

type Result = Chunk<'abcdef', 2>
// ['a', 'b', 'c', 'd', 'e', 'f'] - 按大小为 1 分块时为单个字符
```

### 拆分字符

```typescript
import type { Chunk } from 'uni-types'

type Characters = Chunk<'hello', 1>
// ['h', 'e', 'l', 'l', 'o']
```