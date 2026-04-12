# RuntimeGuard

**自 1.2.0 起**

定义运行时类型检查的类型守卫函数。

## 签名

```typescript
type RuntimeGuard<T> = (value: unknown) => value is T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要守卫的类型 |

## 示例

### 基本用法

```typescript
import type { RuntimeGuard } from 'uni-types'

const isString: RuntimeGuard<string> = (value): value is string =>
  typeof value === 'string'

const isNumber: RuntimeGuard<number> = (value): value is number =>
  typeof value === 'number'
```

### 对象类型守卫

```typescript
interface User {
  name: string
  age: number
}

const isUser: RuntimeGuard<User> = (value): value is User => {
  return typeof value === 'object' && value !== null &&
    'name' in value && 'age' in value &&
    typeof (value as User).name === 'string' &&
    typeof (value as User).age === 'number'
}
```

### 在函数中使用

```typescript
function processValue(value: unknown, guard: RuntimeGuard<string>) {
  if (guard(value)) {
    // value 现在被类型为 string
    console.log(value.toUpperCase())
  }
}
```

## 相关

- [`GuardedType`](./guarded-type) - 从守卫提取类型
- [`AssertionFunction`](./assertion-function) - 断言函数类型
