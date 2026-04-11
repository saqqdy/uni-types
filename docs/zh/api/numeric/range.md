# Range

创建数字范围的联合类型（包含边界）。

## 签名

```typescript
type Range<From extends number, To extends number, Acc extends number = From> = 
  From extends To
    ? Acc
    : From extends To
      ? Acc
      : never
```

## 参数

| 参数 | 描述 |
|------|------|
| `From` | 范围起始（包含） |
| `To` | 范围结束（包含） |

## 描述

生成指定范围内所有数字的联合类型。

::: warning
由于 TypeScript 递归限制，仅支持小范围。大范围可能导致编译错误。
:::

## 示例

### 基本用法

```typescript
import type { Range } from 'uni-types'

type OneToFive = Range<1, 5>     // 1 | 2 | 3 | 4 | 5
type ZeroToThree = Range<0, 3>   // 0 | 1 | 2 | 3
```

### 用于验证

```typescript
type Percentage = Range<0, 100>

function setOpacity(value: Percentage) {
  // value 是 0-100
}
```

### 数组索引

```typescript
type SmallIndex = Range<0, 9>  // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

## 相关

- [`Min`](./min) - 两数最小值
- [`Max`](./max) - 两数最大值