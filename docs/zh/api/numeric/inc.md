# Inc

**自 1.1.0 起**

数字类型自增 1。

## 签名

```typescript
type Inc<N extends number> = [...NumberToArray<N>, 0]['length']
```

## 参数

| 参数 | 描述 |
|------|------|
| `N` | 要自增的数字 |

## 示例

### 基本用法

```typescript
import type { Inc } from 'uni-types'

type A = Inc<5>   // 6
type B = Inc<0>   // 1
type C = Inc<10>  // 11
```

## 相关

- [`Dec`](./dec) - 数字自减
- [`Add`](./add) - 两数相加