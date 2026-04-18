# ToTsToolbelt

**自 1.4.0 起**

将类型转换为 ts-toolbelt 格式。

## 签名

```typescript
type ToTsToolbelt<T> = ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要转换的类型 |

## 描述

将 uni-types 转换为 ts-toolbelt 兼容格式。

## 示例

### 基本用法

```typescript
import type { ToTsToolbelt } from 'uni-types'

type Converted = ToTsToolbelt<{ name: string; age: number }>
```

## 相关

- [`FromTsToolbelt`](./fromstoolbelt) - 从 ts-toolbelt 转换
- [`ToTypeFest`](./totypefest) - 转换为 type-fest