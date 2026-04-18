# Middleware

**自 1.4.0 起**

中间件函数类型。

## 签名

```typescript
type Middleware<C extends Record<string, any> = object> = (
  ctx: Context<C>,
  next: () => Promise<void>
) => Promise<void>
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `C` | 上下文类型 |

## 描述

可以修改上下文并调用下一个中间件的中间件函数。

## 示例

### 基本用法

```typescript
import type { Middleware, Context } from 'uni-types'

type AuthMiddleware = Middleware<{ user: { id: string } }>

const auth: AuthMiddleware = async (ctx, next) => {
  ctx.user = await authenticate(ctx.request)
  await next()
}
```

## 相关

- [`Context`](./context) - 请求上下文
- [`ComposeMiddleware`](./composemiddleware) - 组合中间件链