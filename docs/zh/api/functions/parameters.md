# Parameters

获取函数参数作为元组类型。

## 签名

```typescript
type Parameters<T> = T extends (...args: infer P) => any ? P : never
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 函数类型 |

## 示例

### 基本用法

```typescript
import type { Parameters } from 'uni-types'

type Fn = (a: string, b: number) => boolean
type Params = Parameters<Fn>  // [string, number]
```

### 函数类型

```typescript
function greet(name: string, age: number) {
  return `你好 ${name}，你 ${age} 岁`
}

type GreetParams = Parameters<typeof greet>
// [string, number]
```

### 剩余参数

```typescript
type Variadic = (...args: string[]) => void
type Params = Parameters<Variadic>  // string[]
```

## 相关

- [`ReturnType`](./return-type) - 获取函数返回类型
- [`NthParameter`](./nth-parameter) - 获取第 N 个参数