# AssertHasProperty

**自 1.3.0 起**

确保对象类型具有特定属性。

## 签名

```typescript
type AssertHasProperty<T, K extends PropertyKey> = K extends keyof T ? T : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的对象类型 |
| `K` | 要验证的属性键 |

## 示例

### 基本用法

```typescript
import type { AssertHasProperty } from 'uni-types'

type User = { name: string; age: number }
type HasName = AssertHasProperty<User, 'name'> // User
type NoEmail = AssertHasProperty<User, 'email'> // never
```

### 泛型类型

```typescript
type EnsureId<T> = AssertHasProperty<T, 'id'>
type Valid = EnsureId<{ id: number; name: string }> // { id: number; name: string }
type Invalid = EnsureId<{ name: string }> // never
```

### Symbol 属性

```typescript
const key = Symbol('key')
type Obj = { [key]: string }
type Result = AssertHasProperty<Obj, typeof key> // Obj
```

## 相关

- [`AssertKeyof`](./assertkeyof) - 断言键存在于类型上
- [`RequireKeys`](./requirekeys) - 将特定键设为必需
