# 插件系统类型

**始于 1.6.0**

用于构建插件架构的类型。

## 概述

插件系统类型提供了用于构建可扩展插件架构的类型，包括插件定义、钩子、扩展、中间件和模块加载。它支持生命周期管理、依赖注入和注册表模式。

此模块支持构建具有插件、钩子和扩展正确类型约束的类型安全插件系统。

## 基本用法

```typescript
import type { Plugin, Hook, Extension, Middleware, Module, Registry } from 'uni-types'

// 插件定义
type AuthPlugin = Plugin<{
  name: 'auth'
  version: '1.0.0'
  dependencies: ['core']
}>

// 钩子配置
type OnLoginHook = Hook<{
  name: 'onLogin'
  subscribers: HookCallback[]
}>

// 中间件链
type AuthMiddleware = Middleware<{
  name: 'auth'
  priority: 10
}>
```

## 核心类型

### Plugin

具有生命周期方法的插件类型。

```typescript
type Plugin<T = unknown> = {
  name: string
  version: string
  description?: string
  dependencies?: string[]
  config: T
  install: (context: PluginContext) => void
  uninstall?: () => void
}
```

### PluginLifecycle

插件生命周期类型。

```typescript
type PluginLifecycle = 'init' | 'start' | 'stop' | 'destroy' | 'install' | 'uninstall' | 'update' | 'enable' | 'disable'
```

### Hook

用于事件订阅的钩子类型。

```typescript
type Hook<T = unknown> = {
  name: string
  subscribers: HookCallback[]
  priority?: number
  config: T
}
```

### Extension

用于扩展功能的扩展类型。

```typescript
type Extension<T = unknown> = {
  id: string
  name: string
  version: string
  point: ExtensionPoint
  handler: ExtensionHandler
  config: T
}
```

### ExtensionPoint

扩展点类型。

```typescript
type ExtensionPoint<T = unknown> = {
  id: string
  name: string
  description?: string
  schema?: ExtensionSchema
  extensions: Extension[]
}
```

### Middleware

用于请求处理的中间件类型。

```typescript
type Middleware<T = unknown> = {
  name: string
  priority?: number
  handler: (context: MiddlewareContext, next: () => void) => void
  config: T
}
```

### MiddlewarePipeline

中间件管道类型。

```typescript
type MiddlewarePipeline<T = unknown> = {
  middlewares: Middleware[]
  execute: (context: T) => MiddlewareResult
}
```

### Module

用于代码组织的模块类型。

```typescript
type Module<T = unknown> = {
  name: string
  version: string
  exports: ModuleExport[]
  imports: ModuleImport[]
  config: T
}
```

### Registry

用于组件注册的注册表类型。

```typescript
type Registry<T = unknown> = {
  register: (name: string, component: T) => void
  get: (name: string) => T | undefined
  has: (name: string) => boolean
  remove: (name: string) => void
  clear: () => void
  entries: RegistryEntry[]
}
```

## 相关

- [事件](./event) - 事件类型
- [微服务](./microservice) - 微服务类型