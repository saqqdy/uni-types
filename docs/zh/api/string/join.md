# Join

**Since v1.3.0**

将字符串字面量元组连接为单个字符串类型，使用分隔符。在元组的每个元素之间插入分隔符来连接所有字符串。

## 签名

```typescript
export type Join<T extends string[], S extends string> = T extends [infer First extends string]
	? First
	: T extends [infer First extends string, ...infer Rest extends string[]]
		? `${First}${S}${Join<Rest, S>}`
		: ''
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要连接的字符串字面量元组 |
| `S` | 在元素之间插入的分隔符字符串 |

## 示例

### 基本用法

```typescript
import type { Join } from 'uni-types'

type Result = Join<['a', 'b', 'c'], '-'>
// 'a-b-c'
```

### 连接单词

```typescript
import type { Join } from 'uni-types'

type Sentence = Join<['hello', 'world'], ' '>
// 'hello world'
```