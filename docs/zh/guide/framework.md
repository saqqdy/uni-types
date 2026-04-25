# 框架集成

各种框架的特定类型工具。

## 概述

`framework` 模块为流行的 JavaScript/TypeScript 框架提供类型定义，包括 Remix、Astro、SvelteKit、Qwik、Fresh、Express、Fastify、Hono 和 NestJS。

## Remix 类型

### Loader / Action

```ts
import type { RemixLoader, RemixAction, RemixRoute } from 'uni-types'

type MyLoader = RemixLoader<{ user: User }>
type MyAction = RemixAction<{ success: boolean }>
```

## Astro 类型

```ts
import type { AstroProps, AstroFrontmatter, AstroGlobal } from 'uni-types'

interface MyProps extends AstroProps<{ title: string }> {
  title: string
}
```

## SvelteKit 类型

```ts
import type { SvelteKitLoad, SvelteKitAction, SvelteKitPage } from 'uni-types'

type MyLoad = SvelteKitLoad<{ id: string }, { user: User }>
```

## Express 类型

```ts
import type { ExpressHandler, ExpressRequest, ExpressResponse } from 'uni-types'

type MyHandler = ExpressHandler<{ id: string }, User, CreateUserInput>
```

## Hono 类型

```ts
import type { HonoHandler, HonoContext } from 'uni-types'

type MyHandler = HonoHandler<{ id: string }, { env: string }>
```

## NestJS 类型

```ts
import type { NestController, NestService, NestModule } from 'uni-types'

type MyController = NestController<{ findAll: () => User[] }>
```

## API 参考

| 类型 | 描述 |
|------|------|
| `RemixLoader<T>` | Remix loader 类型 |
| `AstroProps<T>` | Astro 组件 props |
| `SvelteKitLoad<Params, Data>` | SvelteKit load 函数 |
| `QwikComponent<Props>` | Qwik 组件类型 |
| `ExpressHandler<P, ResBody, ReqBody>` | Express handler 类型 |
| `HonoHandler<Params, Env>` | Hono handler 类型 |
| `NestController<T>` | NestJS 控制器类型 |