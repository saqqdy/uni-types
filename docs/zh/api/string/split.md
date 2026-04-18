# Split

**Since v1.3.0**

将字符串类型按分隔符拆分为字符串字面量元组。在每次出现分隔符的位置递归分割字符串。

## 签名

```typescript
export type Split<S extends string, D extends string> = S extends `${infer Head}${D}${infer Tail}`
	? [Head, ...Split<Tail, D>]
	: S extends ''
		? []
		: [S]
```

## 参数

| 参数 | 说明 |
|------|------|
| `S` | 要拆分的字符串类型 |
| `D` | 用于拆分的分隔符字符串 |

## 示例

### 基本用法

```typescript
import type { Split } from 'uni-types'

type Parts = Split<'a-b-c', '-'>
// ['a', 'b', 'c']
```

### 拆分单词

```typescript
import type { Split } from 'uni-types'

type Words = Split<'hello world today', ' '>
// ['hello', 'world', 'today']
```