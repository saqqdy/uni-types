# ExpectEqual

**自 1.4.0 起**

期望类型相等。

## 签名

```typescript
type ExpectEqual<T, Expected> = (() => T extends Expected ? Expected extends T ? true : false : false) extends () => true ? T : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 实际类型 |
| `Expected` | 期望类型 |

## 描述

用于测试类型相等性的类型断言。

## 示例

### 基本用法

```typescript
import type { ExpectEqual } from 'uni-types'

type Test1 = ExpectEqual<'hello', 'hello'> // 正确
type Test2 = ExpectEqual<'hello', 'world'> // 错误
```

## 相关

- [`ExpectTrue`](./expecttrue) - 期望类型为 true
- [`ExpectFalse`](./expectfalse) - 期望类型为 false