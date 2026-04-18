# HasProperty

**Since v1.3.0**

检查对象类型是否具有指定属性。如果属性键存在于对象类型上则返回 `true`，否则返回 `false`。

## 签名

```typescript
export type HasProperty<T, K> = K extends keyof T ? true : false
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要检查的对象类型 |
| `K` | 要查找的属性键 |

## 示例

### 基本用法

```typescript
import type { HasProperty } from 'uni-types'

type User = { name: string; age: number }
type HasName = HasProperty<User, 'name'> // true
type HasEmail = HasProperty<User, 'email'> // false
```

### 使用 Symbol 键

```typescript
import type { HasProperty } from 'uni-types'

const sym = Symbol('id')
type Obj = { [sym]: number; name: string }
type HasSym = HasProperty<Obj, typeof sym> // true
type HasAge = HasProperty<Obj, 'age'> // false
```
