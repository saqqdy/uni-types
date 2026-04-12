# Add

**自 1.1.0 起**

两数相加。

## 签名

```typescript
type Add<A extends number, B extends number> = [
  ...NumberToArray<A>,
  ...NumberToArray<B>,
]['length']
```

## 参数

| 参数 | 描述 |
|------|------|
| `A` | 第一个数字 |
| `B` | 第二个数字 |

## 示例

### 基本用法

```typescript
import type { Add } from 'uni-types'

type A = Add<3, 4>   // 7
type B = Add<0, 5>   // 5
type C = Add<10, 20> // 30
```

### 与其他数字类型

```typescript
type Sum = Add<Inc<5>, Dec<10>>  // 15
```

## 相关

- [`Subtract`](./subtract) - 两数相减
- [`Inc`](./inc) - 自增 1
- [`Dec`](./dec) - 自减 1