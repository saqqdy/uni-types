# Trim

从字符串两端移除空白字符。

## 签名

```typescript
type Trim<S extends string> = TrimLeft<TrimRight<S>>
```

## 参数

| 参数 | 描述 |
|------|------|
| `S` | 要修剪的字符串 |

## 描述

从字符串类型的左侧和右侧移除空白字符（空格、制表符、换行符）。

## 示例

### 基本用法

```typescript
import type { Trim } from 'uni-types'

type A = Trim<'  hello  '>     // 'hello'
type B = Trim<'\n\ttext\n'>    // 'text'
type C = Trim<'   spaced   '>  // 'spaced'
```

### 模板字面量

```typescript
type Input = `  ${string}  `
type Cleaned = Trim<Input>  // `${string}`
```

## 相关

- [`TrimLeft`](./trim-left) - 仅修剪左侧
- [`TrimRight`](./trim-right) - 仅修剪右侧