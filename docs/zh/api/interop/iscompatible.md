# IsCompatible

**自 1.4.0 起**

检查类型兼容性。

## 签名

```typescript
type IsCompatible<T, U> = T extends U ? true : false
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 第一个类型 |
| `U` | 要检查的第二个类型 |

## 描述

检查类型 T 是否与类型 U 兼容。

## 示例

### 基本用法

```typescript
import type { IsCompatible } from 'uni-types'

type Check1 = IsCompatible<string, string | number>
// true

type Check2 = IsCompatible<string, number>
// false
```

## 相关

- [`CompatibleWith`](./compatiblewith) - 检查库兼容性