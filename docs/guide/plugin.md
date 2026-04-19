# Plugin System Types

**Since 1.6.0**

Types for building plugin architectures.

## Overview

Plugin System Types provides types for building extensible plugin architectures including plugin definitions, hooks, extensions, middleware, and module loading. It supports lifecycle management, dependency injection, and registry patterns.

This module enables building type-safe plugin systems with proper constraints for plugins, hooks, and extensions.

## Basic Usage

```typescript
import type { Plugin, Hook, Extension, Middleware, Module, Registry } from 'uni-types'

// Plugin definition
type AuthPlugin = Plugin<{
  name: 'auth'
  version: '1.0.0'
  dependencies: ['core']
}>

// Hook configuration
type OnLoginHook = Hook<{
  name: 'onLogin'
  subscribers: HookCallback[]
}>

// Middleware chain
type AuthMiddleware = Middleware<{
  name: 'auth'
  priority: 10
}>
```

## Key Types

### Plugin

Plugin type with lifecycle methods.

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

Plugin lifecycle types.

```typescript
type PluginLifecycle = 'init' | 'start' | 'stop' | 'destroy' | 'install' | 'uninstall' | 'update' | 'enable' | 'disable'
```

### Hook

Hook type for event subscription.

```typescript
type Hook<T = unknown> = {
  name: string
  subscribers: HookCallback[]
  priority?: number
  config: T
}
```

### Extension

Extension type for extending functionality.

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

Extension point type.

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

Middleware type for request handling.

```typescript
type Middleware<T = unknown> = {
  name: string
  priority?: number
  handler: (context: MiddlewareContext, next: () => void) => void
  config: T
}
```

### MiddlewarePipeline

Middleware pipeline type.

```typescript
type MiddlewarePipeline<T = unknown> = {
  middlewares: Middleware[]
  execute: (context: T) => MiddlewareResult
}
```

### Module

Module type for code organization.

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

Registry type for component registration.

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

## Related

- [Event](./event) - Event types
- [Microservice](./microservice) - Microservice types