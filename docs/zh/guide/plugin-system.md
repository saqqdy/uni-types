# 插件系统

本指南介绍 v2.0.0 中引入的 **插件系统** 特性。

## 概述

插件系统提供了可扩展的类型操作架构，允许开发者创建、注册和组合扩展 uni-types 类型层面能力的插件。

## 插件核心

### 插件定义

```typescript
import type { PluginV2, PluginAPIV2, PluginHookV2 } from 'uni-types'

// 定义带配置的插件
type MyPlugin = PluginV2<{
  name: 'my-plugin'
  version: '1.0.0'
  hooks: ['before-transform', 'after-transform']
}>
```

### 插件 API

```typescript
import type { PluginAPIV2 } from 'uni-types'

// PluginAPI 提供类型系统的访问能力
type API = PluginAPIV2<{
  context: { transforms: number }
}>
```

### 插件钩子

```typescript
import type { PluginHookV2 } from 'uni-types'

// 定义插件生命周期钩子类型
type InitHook = PluginInitV2<MyPluginConfig>
type LoadHook = PluginLoadV2<MyPluginConfig>
```

## 插件注册表

```typescript
import type { PluginRegistryV2, RegisteredPlugin } from 'uni-types'

// 已注册的插件在注册表中追踪
type Registry = PluginRegistryV2<{
  'my-plugin': MyPlugin
  'another-plugin': AnotherPlugin
}>

// 访问已注册的插件
type MyRegistered = RegisteredPlugin<Registry, 'my-plugin'>
```

## 插件类型

uni-types 提供多种内置插件类型变体：

- **TypePlugin** — 添加新类型操作的插件
- **TransformPlugin** — 变换现有类型的插件
- **AnalysisPlugin** — 分析类型结构的插件
- **ValidationPlugin** — 验证类型约束的插件

## 从 v1.x 迁移

v1.x 使用 `Plugin`、`PluginAPI` 和 `PluginHook`，v2.0.0 中替换为 `PluginV2`、`PluginAPIV2` 和 `PluginHookV2`，提供更强的类型安全和生命周期管理。

| v1.x API | v2.0.0 API | 说明 |
|-----------|------------|------|
| `Plugin<T>` | `PluginV2<T>` | 增加生命周期钩子 |
| `PluginAPI<T>` | `PluginAPIV2<T>` | 上下文感知 API |
| `PluginHook<T>` | `PluginHookV2<T>` | 类型化钩子系统 |

## API 参考

参阅 [插件系统 API 参考](/zh/api/plugin-v2) 获取完整文档。
