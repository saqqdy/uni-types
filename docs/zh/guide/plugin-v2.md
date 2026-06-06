# 插件系统预览

增强的插件系统预览，具有改进的生命周期管理和类型安全。

## PluginV2

具有完整类型安全的增强插件定义。

```typescript
import type { PluginV2 } from 'uni-types'

interface MyPlugin extends PluginV2<'my-plugin', { port: number }> {
	name: 'my-plugin'
	setup(ctx: PluginContextV2<{ port: number }>): Promise<void>
	teardown?(): Promise<void>
}
```

## PluginContextV2

具有依赖注入的增强插件上下文。

```typescript
import type { PluginContextV2 } from 'uni-types'

type Context = PluginContextV2<{ port: number }>
// { config: { port: number }; logger: Logger; registerHook: ... }
```

## PluginHookV2

用于插件扩展性的类型安全钩子定义。

```typescript
import type { PluginHookV2 } from 'uni-types'

interface BeforeRequestHook extends PluginHookV2<
	'beforeRequest',
	{ url: string; headers: Record<string, string> },
	{ url: string; headers: Record<string, string> }
> {}
```

## PluginRegistryV2

具有依赖解析的增强插件注册表。

```typescript
import type { PluginRegistryV2 } from 'uni-types'

type Registry = PluginRegistryV2<
	['auth-plugin', 'logging-plugin'],
	{ 'auth-plugin': { token: string }; 'logging-plugin': { level: string } }
>
```

## PluginDependency

声明具有版本约束的插件依赖。

```typescript
import type { PluginDependency } from 'uni-types'

type Dep = PluginDependency<'auth-plugin', '>=1.0.0'>
// { name: 'auth-plugin'; version: '>=1.0.0'; optional: false }
```

## PluginLifecycleV2

增强的插件生命周期钩子。

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

类型安全的插件配置模式。

```typescript
import type { PluginConfigV2 } from 'uni-types'

type Config = PluginConfigV2<{
	port: { type: 'number'; default: 3000; required: true }
	host: { type: 'string'; default: 'localhost'; required: false }
}>
```

## PluginMiddlewareV2

插件的类型安全中间件链。

```typescript
import type { PluginMiddlewareV2 } from 'uni-types'

type Middleware = PluginMiddlewareV2<
	{ request: Request },
	{ response: Response }
>
```
