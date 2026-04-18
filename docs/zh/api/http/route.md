# Route

**自 1.4.0 起**

HTTP 路由定义。

## 签名

```typescript
interface Route<Path extends string, Method extends HTTPMethod, Handler, Context = object> {
  path: Path
  method: Method
  handler: Handler
}
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `Path` | 路由路径字符串 |
| `Method` | HTTP 方法 |
| `Handler` | 路由处理函数类型 |
| `Context` | 请求上下文类型 |

## 描述

定义包含路径、方法和处理函数的 HTTP 路由。

## 示例

### 基本用法

```typescript
import type { Route, HTTPMethod } from 'uni-types'

type GetUser = Route<'/users/:id', 'GET', (ctx: { params: { id: string } }) => Promise<Response>>
```

## 相关

- [`RouteParams`](./routeparams) - 提取路由参数
- [`Router`](./router) - 路由器类型