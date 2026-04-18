# ExpectTrue

**自 1.4.0 起**

期望类型为 true。

## 签名

```typescript
type ExpectTrue<T extends true> = T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 应该继承 true 的类型 |

## 描述

用于测试类型是否为 true 的类型断言。

## 示例

### 基本用法

```typescript
import type { ExpectTrue, IsEqual } from 'uni-types'

type Test1 = ExpectTrue<IsEqual<string, string>> // 正确
type Test2 = ExpectTrue<IsEqual<string, number>> // 错误
```

## 相关

- [`ExpectFalse`](./expectfalse) - 期望类型为 false
- [`ExpectEqual`](./expectequal) - 期望类型相等