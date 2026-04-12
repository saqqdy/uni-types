# GuardedType

从类型守卫函数中提取被守卫的类型。

## 签名

```typescript
type GuardedType<G> = G extends (value: unknown) => value is infer T ? T : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `G` | 类型守卫函数 |

## 示例

### 基本用法

```typescript
import type { GuardedType } from 'uni-types'

const isNumber = (value: unknown): value is number => typeof value === 'number'

type Num = GuardedType<typeof isNumber>  // number
```

### 复杂守卫

```typescript
interface User {
  id: string
  name: string
}

const isUser = (value: unknown): value is User => {
  // 守卫实现
}

type UserType = GuardedType<typeof isUser>  // User
```

### 从数组提取

```typescript
const guards = [isString, isNumber, isBoolean]
type Types = GuardedType<typeof guards[number]>  // string | number | boolean
```

## 相关

- [`RuntimeGuard`](./runtime-guard) - 定义类型守卫函数
