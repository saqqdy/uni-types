# CompositeGuard

**自 1.2.0 起**

用于对象的组合类型守卫。

## 签名

```typescript
type CompositeGuard<T extends object> = (value: unknown) => value is T
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要守卫的对象类型 |

## 描述

专门为对象类型定义类型守卫函数。适用于为复杂对象结构创建运行时验证。

## 示例

### 基本用法

```typescript
import type { CompositeGuard } from 'uni-types'

interface User {
  id: string
  name: string
  age: number
}

const isUser: CompositeGuard<User> = (value): value is User => {
  return typeof value === 'object' && value !== null &&
    'id' in value && 'name' in value && 'age' in value
}
```

### 与嵌套对象一起使用

```typescript
import type { CompositeGuard } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
  }
}

const isConfig: CompositeGuard<Config> = (value): value is Config => {
  return typeof value === 'object' && value !== null &&
    'database' in value &&
    typeof (value as Config).database === 'object'
}
```

## 相关

- [`RuntimeGuard`](./runtime-guard) - 定义类型守卫函数
- [`GuardedType`](./guarded-type) - 从守卫中提取类型
