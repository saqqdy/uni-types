# StringLength

**自 1.1.0 起**

获取类型级别的字符串长度。

## 签名

```typescript
type StringLength<S extends string, Acc extends 0[] = []> = 
  S extends `${string}${infer Rest}`
    ? StringLength<Rest, [...Acc, 0]>
    : Acc['length']
```

## 参数

| 参数 | 描述 |
|------|------|
| `S` | 要测量的字符串 |

## 示例

### 基本用法

```typescript
import type { StringLength } from 'uni-types'

type A = StringLength<'hello'>   // 5
type B = StringLength<''>        // 0
type C = StringLength<'abc'>     // 3
```

### 条件逻辑

```typescript
type IsLongString<S extends string> = StringLength<S> extends 1 | 2 | 3
  ? 'short'
  : 'long'
```

## 相关

- [`PadStart`](./pad-start) - 左侧填充字符串
- [`PadEnd`](./pad-end) - 右侧填充字符串