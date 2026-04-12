# ValueOf

**自 1.0.0 起**

获取对象值类型的联合类型。

## 签名

```typescript
type ValueOf<T> = T[keyof T]
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 对象类型 |

## 描述

从对象类型中提取所有值类型作为联合类型。

## 示例

### 基本用法

```typescript
import type { ValueOf } from 'uni-types'

type Values = ValueOf<{ a: string; b: number; c: boolean }>
// string | number | boolean
```

### 与枚举一起使用

```typescript
enum Status {
  Pending = 'pending',
  Active = 'active',
  Done = 'done'
}

type StatusValue = ValueOf<typeof Status>
// 'pending' | 'active' | 'done'
```

### 常量对象

```typescript
const config = {
  host: 'localhost',
  port: 3000,
  ssl: true
} as const

type ConfigValue = ValueOf<typeof config>
// 'localhost' | 3000 | true
```

## 相关

- [`ArrayElement`](./array-element) - 获取数组元素类型
- [`FunctionKeys`](./function-keys) - 获取函数属性键