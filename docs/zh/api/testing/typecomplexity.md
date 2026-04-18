# TypeComplexity

**自 1.4.0 起**

类型复杂度分析。

## 签名

```typescript
interface TypeComplexity<T, Depth extends 0[] = []> {
  depth: number
  branches: number
  nodes: number
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要分析的类型 |
| `Depth` | 内部深度计数器 |

## 描述

分析类型的复杂度以便性能优化。

## 示例

### 基本用法

```typescript
import type { TypeComplexity } from 'uni-types'

type Simple = TypeComplexity<string>
type Complex = TypeComplexity<{ a: { b: { c: string } } }>
```

## 相关

- [`TypeCoverage`](./typecoverage) - 类型覆盖分析
- [`TypeInfo`](./typeinfo) - 类型信息