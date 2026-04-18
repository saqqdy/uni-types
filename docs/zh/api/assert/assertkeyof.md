# AssertKeyof

**自 1.3.0 起**

在编译时断言 `K` 是 `T` 的键。

## 签名

```typescript
type AssertKeyof<T, K> = K extends keyof T ? K : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的对象类型 |
| `K` | 要验证的键 |

## 示例

### 基本用法

```typescript
import type { AssertKeyof } from 'uni-types'

type Result = AssertKeyof<{ name: string; age: number }, 'name'> // 'name'
type Failed = AssertKeyof<{ name: string }, 'email'> // never
```

### 联合键

```typescript
type Keys = 'name' | 'age'
type Result = AssertKeyof<{ name: string; age: number }, Keys> // 'name' | 'age'
```

### Symbol 键

```typescript
const sym = Symbol('id')
type Obj = { [sym]: number }
type Result = AssertKeyof<Obj, typeof sym> // typeof sym
```

## 相关

- [`AssertExtends`](./assertextends) - 断言类型扩展另一个类型
- [`AssertHasProperty`](./asserthasproperty) - 确保对象具有特定属性
