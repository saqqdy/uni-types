# UnwrapPromise

**Since 1.3.0**

将 Promise 类型解包为其内部值类型。如果包装在 Promise 中则返回内部类型，否则返回原始类型。

## Signature

```typescript
type UnwrapPromise<T> = T extends Promise<infer V> ? V : T
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | 要解包的类型 |

## Examples

### Basic Usage

```typescript
import type { UnwrapPromise } from 'uni-types'

type Value = UnwrapPromise<Promise<string>> // string
```

### 非 Promise 类型

```typescript
import type { UnwrapPromise } from 'uni-types'

type Direct = UnwrapPromise<number> // number
```

### 与异步函数一起使用

```typescript
import type { UnwrapPromise } from 'uni-types'

async function fetchUser() {
  return { id: 1, name: 'John' }
}

type User = UnwrapPromise<ReturnType<typeof fetchUser>> // { id: number; name: string }
```

## Related

- [`PromiseValue`](./promisevalue) - 递归提取值
- [`PromiseResult`](./promiseresult) - 获取解析值（单层）