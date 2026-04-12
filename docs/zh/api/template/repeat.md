# Repeat

**自 1.1.0 起**

将字符串重复 N 次。

## 签名

```typescript
type Repeat<
  S extends string,
  N extends number,
  Acc extends string = '',
  Count extends 0[] = [],
> = Count['length'] extends N ? Acc : Repeat<S, N, `${Acc}${S}`, [...Count, 0]>
```

## 参数

| 参数 | 描述 |
|------|------|
| `S` | 要重复的字符串 |
| `N` | 重复次数 |

## 示例

### 基本用法

```typescript
import type { Repeat } from 'uni-types'

type A = Repeat<'ab', 3>   // 'ababab'
type B = Repeat<'x', 5>    // 'xxxxx'
type C = Repeat<'hi', 0>   // ''
```

### 创建缩进字符串

```typescript
type Indent = Repeat<' ', 4>  // '    '
type Tab = Repeat<'\t', 2>    // '\t\t'
```

### 字符串填充

```typescript
type DashedLine = Repeat<'-', 10>  // '----------'
```

## 相关

- [`PadStart`](./pad-start) - 左侧填充
- [`PadEnd`](./pad-end) - 右侧填充