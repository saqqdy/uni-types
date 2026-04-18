# ToTypeFest

**自 1.4.0 起**

将类型转换为 type-fest 格式。

## 签名

```typescript
type ToTypeFest<T> = T extends object ? { [K in keyof T]: ToTypeFest<T[K]> } : T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要转换的类型 |

## 描述

将 uni-types 转换为 type-fest 兼容格式。

## 示例

### 基本用法

```typescript
import type { ToTypeFest } from 'uni-types'

type Converted = ToTypeFest<{ name: string; age: number }>
```

## 相关

- [`FromTypeFest`](./fromtypefest) - 从 type-fest 转换
- [`ToTsToolbelt`](./totoolbelt) - 转换为 ts-toolbelt