# Optional

向类型添加 undefined。

## 签名

```typescript
type Optional<T> = T | undefined
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 基础类型 |

## 描述

创建一个可以为 `undefined` 的类型。适用于表示可选值或可能未定义的值。

## 示例

### 基本用法

```typescript
import type { Optional } from 'uni-types'

type Name = Optional<string> // string | undefined

function greet(name: Optional<string>) {
  return `Hello, ${name ?? 'stranger'}!`
}
```

### 与配置一起使用

```typescript
interface Config {
  apiKey: string
  timeout: Optional<number>
  retries: Optional<number>
}

const config: Config = {
  apiKey: 'abc123',
  // timeout 和 retries 可以省略
}
```

## 相关

- [`Nullable`](./nullable) - 向类型添加 null
- [`Maybe`](./maybe) - 添加 null/undefined
- [`NonNullable`](./non-nullable) - 排除 null/undefined
