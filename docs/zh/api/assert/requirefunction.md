# RequireFunction

**自 1.3.0 起**

确保类型是函数。

## 签名

```typescript
type RequireFunction<T> = T extends (...args: any[]) => any ? T : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要检查的类型 |

## 示例

### 基本用法

```typescript
import type { RequireFunction } from 'uni-types'

type Result = RequireFunction<() => void> // () => void
type Failed = RequireFunction<string> // never
```

### 带类型的函数

```typescript
type Handler = (event: Event) => void
type ValidHandler = RequireFunction<Handler> // Handler
```

### 联合类型

```typescript
type MaybeFunc = string | ((x: number) => number)
type OnlyFunc = RequireFunction<MaybeFunc> // (x: number) => number
```

## 相关

- [`RequireArray`](./requirearray) - 确保类型是数组
- [`RequireNotNullish`](./requirenotnullish) - 确保类型不是 null 或 undefined
