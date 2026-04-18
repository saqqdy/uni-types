# AssertExtends

**自 1.3.0 起**

在编译时断言类型 `T` 扩展 `U`。

## 签名

```typescript
type AssertExtends<T, U> = T extends U ? T : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |
| `U` | T 必须扩展的类型 |

## 示例

### 基本用法

```typescript
import type { AssertExtends } from 'uni-types'

type Result = AssertExtends<'hello', string> // 'hello'
type Failed = AssertExtends<number, string> // never
```

### 联合类型

```typescript
type Result = AssertExtends<'a' | 'b', string> // 'a' | 'b'
```

### 对象类型

```typescript
type Extended = AssertExtends<{ name: string; age: number }, { name: string }> // { name: string; age: number }
```

## 相关

- [`AssertEqual`](./assertequal) - 断言类型相等
- [`AssertKeyof`](./assertkeyof) - 断言键存在于类型上
