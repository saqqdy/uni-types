# RequireArray

**自 1.3.0 起**

确保类型是数组。

## 签名

```typescript
type RequireArray<T> = T extends unknown[] ? T : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 示例

### 基本用法

```typescript
import type { RequireArray } from 'uni-types'

type Result = RequireArray<string[]> // string[]
type Failed = RequireArray<string> // never
```

### 联合类型

```typescript
type MaybeArray = string[] | number
type OnlyArray = RequireArray<MaybeArray> // string[]
```

### 只读数组

```typescript
type ReadonlyStrings = readonly string[]
type Result = RequireArray<ReadonlyStrings> // readonly string[]
```

## 相关

- [`RequireFunction`](./requirefunction) - 确保类型是函数
- [`RequireNotNullish`](./requirenotnullish) - 确保类型不是 null 或 undefined
