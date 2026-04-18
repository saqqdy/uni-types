# TypeCoverage

**自 1.4.0 起**

类型覆盖分析。

## 签名

```typescript
interface TypeCoverage<T> {
  total: number
  covered: number
  uncovered: string[]
  percentage: number
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要分析的类型 |

## 描述

分析给定类型的类型覆盖情况。

## 示例

### 基本用法

```typescript
import type { TypeCoverage } from 'uni-types'

type Coverage = TypeCoverage<{ a: string; b?: number }>
```

## 相关

- [`TypeComplexity`](./typecomplexity) - 类型复杂度分析
- [`UncoveredTypes`](./uncoveredtypes) - 获取未覆盖类型