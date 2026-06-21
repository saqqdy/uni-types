# Plugin System

This guide covers the **Plugin System** features introduced in v2.0.0.

## Overview

The Plugin System provides an extensible architecture for custom type operations. It allows developers to create, register, and compose plugins that extend uni-types' type-level capabilities.

## Plugin Core

### Plugin Definition

```typescript
import type { PluginV2, PluginAPIV2, PluginHookV2 } from 'uni-types'

// Define a plugin with configuration
type MyPlugin = PluginV2<{
  name: 'my-plugin'
  version: '1.0.0'
  hooks: ['before-transform', 'after-transform']
}>
```

### Plugin API

```typescript
import type { PluginAPIV2 } from 'uni-types'

// The PluginAPI provides access to the type system
type API = PluginAPIV2<{
  context: { transforms: number }
}>
```

### Plugin Hooks

```typescript
import type { PluginHookV2 } from 'uni-types'

// Define hook types for plugin lifecycle
type InitHook = PluginInitV2<MyPluginConfig>
type LoadHook = PluginLoadV2<MyPluginConfig>
```

## Plugin Registry

```typescript
import type { PluginRegistryV2, RegisteredPlugin } from 'uni-types'

// Registered plugins are tracked in the registry
type Registry = PluginRegistryV2<{
  'my-plugin': MyPlugin
  'another-plugin': AnotherPlugin
}>

// Access a registered plugin
type MyRegistered = RegisteredPlugin<Registry, 'my-plugin'>
```

## Plugin Types

uni-types provides several built-in plugin type variants:

- **TypePlugin** — Plugins that add new type operations
- **TransformPlugin** — Plugins that transform existing types
- **AnalysisPlugin** — Plugins that analyze type structures
- **ValidationPlugin** — Plugins that validate type constraints

## Migration from v1.x

In v1.x, plugins used `Plugin`, `PluginAPI`, and `PluginHook`. In v2.0.0, these are replaced by `PluginV2`, `PluginAPIV2`, and `PluginHookV2` with improved type safety and lifecycle management.

| v1.x API | v2.0.0 API | Notes |
|-----------|------------|-------|
| `Plugin<T>` | `PluginV2<T>` | Added lifecycle hooks |
| `PluginAPI<T>` | `PluginAPIV2<T>` | Context-aware API |
| `PluginHook<T>` | `PluginHookV2<T>` | Typed hook system |

## API Reference

See the [Plugin System API Reference](/api/plugin-v2) for complete documentation.
