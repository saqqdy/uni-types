# TypeMap

**自 1.3.0 起**

类型层面的 Map 实现。在类型层面表示从键类型到值类型的映射。

## 签名

```typescript
export type TypeMap<K, V> = {
  readonly [key in K]: V
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `K` | Map 的键类型 |
| `V` | Map 的值类型 |

## 示例

### 基本用法

```typescript
import type { TypeMap } from 'uni-types'

type StringMap = TypeMap<string, number>
// { readonly [key in string]: number }
```

### 字面量键映射

```typescript
type UserRoleMap = TypeMap<'admin' | 'user' | 'guest', string>
// { readonly admin: string; readonly user: string; readonly guest: string }
```
