# Framework Integrations

Framework-specific type utilities for various frameworks.

## Overview

The `framework` module provides type definitions for popular JavaScript/TypeScript frameworks including Remix, Astro, SvelteKit, Qwik, Fresh, Express, Fastify, Hono, and NestJS.

## Remix Types

### Loader / Action

```ts
import type { RemixLoader, RemixAction, RemixRoute } from 'uni-types'

type MyLoader = RemixLoader<{ user: User }>
type MyAction = RemixAction<{ success: boolean }>

interface MyRoute extends RemixRoute<{ user: User }, { success: boolean }> {
  loader?: MyLoader
  action?: MyAction
}
```

### Meta / Route

```ts
import type { RemixMeta, RemixLoaderData } from 'uni-types'

type MyMeta = RemixMeta<{ user: User }>
type LoaderData = RemixLoaderData<MyRoute> // { user: User }
```

## Astro Types

### Props / Frontmatter

```ts
import type { AstroProps, AstroFrontmatter, AstroGlobal } from 'uni-types'

interface MyProps extends AstroProps<{ title: string }> {
  title: string
  class?: string
}

interface MyFrontmatter extends AstroFrontmatter<{ title: string }> {
  props: MyProps
  astro: AstroGlobal
}
```

## SvelteKit Types

### Load / Action

```ts
import type { SvelteKitLoad, SvelteKitAction, SvelteKitPage } from 'uni-types'

type MyLoad = SvelteKitLoad<{ id: string }, { user: User }>
type MyAction = SvelteKitAction<{ id: string }, { success: boolean }>

interface MyPage extends SvelteKitPage<{ id: string }, { user: User }> {
  url: URL
  params: { id: string }
  data: { user: User }
}
```

## Qwik Types

### Component / Signal

```ts
import type { QwikComponent, QwikSignal, QwikStore } from 'uni-types'

type MyComponent = QwikComponent<{ count: number }>

interface MySignal extends QwikSignal<number> {
  value: number
}

type MyStore = QwikStore<{ count: number, name: string }>
```

## Express Types

### Handler / Request / Response

```ts
import type { ExpressHandler, ExpressRequest, ExpressResponse } from 'uni-types'

type MyHandler = ExpressHandler<{ id: string }, User, CreateUserInput>

interface MyRequest extends ExpressRequest<{ id: string }, User, CreateUserInput> {
  params: { id: string }
  body: CreateUserInput
}

interface MyResponse extends ExpressResponse<User> {
  json: (body: User) => void
}
```

## Fastify Types

### Handler / Request / Reply

```ts
import type { FastifyHandler, FastifyRequest, FastifyReply } from 'uni-types'

type MyHandler = FastifyHandler<{ id: string }, { user: User }>

interface MyRequest extends FastifyRequest<{ id: string }, { user: User }> {
  params: { id: string }
}
```

## Hono Types

### Handler / Context

```ts
import type { HonoHandler, HonoContext, HonoMiddleware } from 'uni-types'

type MyHandler = HonoHandler<{ id: string }, { env: string }>

interface MyContext extends HonoContext<{ id: string }, { env: string }> {
  req: { method: string, url: URL, path: string }
  json: <T>(data: T, status?: number) => Response
}
```

## NestJS Types

### Controller / Service / Module

```ts
import type { NestController, NestService, NestModule } from 'uni-types'

type MyController = NestController<{ findAll: () => User[], create: (user: CreateUser) => User }>
type MyService = NestService<{ findAll: () => Promise<User[]> }>

interface MyModule extends NestModule {
  controllers?: unknown[]
  providers?: unknown[]
  imports?: unknown[]
}
```

## API Reference

| Type | Description |
|------|-------------|
| `RemixLoader<T>` | Remix loader function type |
| `RemixAction<T>` | Remix action function type |
| `RemixRoute<LoaderData, ActionData>` | Remix route module |
| `AstroProps<T>` | Astro component props |
| `SvelteKitLoad<Params, Data>` | SvelteKit load function |
| `QwikComponent<Props>` | Qwik component type |
| `ExpressHandler<P, ResBody, ReqBody>` | Express handler type |
| `FastifyHandler<Params, Data>` | Fastify handler type |
| `HonoHandler<Params, Env>` | Hono handler type |
| `NestController<T>` | NestJS controller type |
| `NestService<T>` | NestJS service type |