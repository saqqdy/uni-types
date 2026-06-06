# Plugin System Preview

Preview of the enhanced plugin system with improved lifecycle management and type safety.

## PluginV2

Enhanced plugin definition with full type safety.

```typescript
import type { PluginV2 } from 'uni-types'

interface MyPlugin extends PluginV2<'my-plugin', { port: number }> {
	name: 'my-plugin'
	setup(ctx: PluginContextV2<{ port: number }>): Promise<void>
	teardown?(): Promise<void>
}
```

## PluginContextV2

Enhanced plugin context with dependency injection.

```typescript
import type { PluginContextV2 } from 'uni-types'

type Context = PluginContextV2<{ port: number }>
// { config: { port: number }; logger: Logger; registerHook: ... }
```

## PluginHookV2

Type-safe hook definition for plugin extensibility.

```typescript
import type { PluginHookV2 } from 'uni-types'

interface BeforeRequestHook extends PluginHookV2<
	'beforeRequest',
	{ url: string; headers: Record<string, string> },
	{ url: string; headers: Record<string, string> }
> {}
```

## PluginRegistryV2

Enhanced plugin registry with dependency resolution.

```typescript
import type { PluginRegistryV2 } from 'uni-types'

type Registry = PluginRegistryV2<
	['auth-plugin', 'logging-plugin'],
	{ 'auth-plugin': { token: string }; 'logging-plugin': { level: string } }
>
```

## PluginDependency

Declare plugin dependencies with version constraints.

```typescript
import type { PluginDependency } from 'uni-types'

type Dep = PluginDependency<'auth-plugin', '>=1.0.0'>
// { name: 'auth-plugin'; version: '>=1.0.0'; optional: false }
```

## PluginLifecycleV2

Enhanced plugin lifecycle hooks.

```typescript
import type { PluginLifecycleV2 } from 'uni-types'

type Lifecycle = PluginLifecycleV2<{
	onInit: () => void
	onReady: () => void
	onDestroy: () => void
	onError: (error: Error) => void
}>
```

## PluginConfigV2

Type-safe plugin configuration schema.

```typescript
import type { PluginConfigV2 } from 'uni-types'

type Config = PluginConfigV2<{
	port: { type: 'number'; default: 3000; required: true }
	host: { type: 'string'; default: 'localhost'; required: false }
}>
```

## PluginMiddlewareV2

Type-safe middleware chain for plugins.

```typescript
import type { PluginMiddlewareV2 } from 'uni-types'

type Middleware = PluginMiddlewareV2<
	{ request: Request },
	{ response: Response }
>
```
