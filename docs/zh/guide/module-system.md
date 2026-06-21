# 模块系统

本指南介绍 v2.0.0 中引入的 **新模块系统** 特性。

## 概述

模块系统提供了改进的类型级模块组织、导入导出和命名空间管理，为 v2.0.0 更清晰的 API 表面服务。

## 模块定义

### ModuleV2

`ModuleV2` 是模块系统的核心包装类型，包含导出、名称和版本信息：

```typescript
import type { ModuleV2 } from 'uni-types'

type MyModule = ModuleV2<{ foo: string; bar: number }>
// MyModule.name: string
// MyModule.version: string
// MyModule.exports: { foo: string; bar: number }
```

### 导出、导入与重导出

```typescript
import type { ExportV2, ImportV2, ReExportV2 } from 'uni-types'

type E = ExportV2<string>   // string & { __exported__: true }
type I = ImportV2<number>  // number & { __imported__: true; __from__: string }
type R = ReExportV2<string> // Export & { __reexported_from__: string }
```

## 命名空间

```typescript
import type { NamespaceV2, QualifiedV2, AliasV2 } from 'uni-types'

type NS = NamespaceV2<{ foo: string; bar: number }>
type Foo = QualifiedV2<NS, 'foo'>  // string — 访问命名空间成员
type A = AliasV2<string, 'MyString'>  // string & { __alias__: 'MyString' } — 创建命名别名
```

## 依赖与解析

### 依赖类型

```typescript
import type { DependencyTypeV2, ModuleDependencyV2, ModuleGraphV2 } from 'uni-types'

// 依赖类型包含四种变体：
// 'import' | 're-export' | 'dynamic-import' | 'side-effect'

type Dep = ModuleDependencyV2<{
  type: 'import'
  source: 'lodash'
  specifiers: ['debounce', 'throttle']
}>
```

### 解析策略

```typescript
import type { ResolutionStrategy } from 'uni-types'

// 解析策略包含五种方式：
// 'node-modules' | 'path-alias' | 'relative' | 'absolute' | 'virtual'
```

## 作用域与打包

### 模块作用域

```typescript
import type { ModuleScopeV2, ScopedMemberV2 } from 'uni-types'

// ModuleScopeV2: 'public' | 'protected' | 'private' | 'internal'

type PublicMember = ScopedMemberV2<{ name: string }, 'public'>
// { name: string; __scope__: 'public' }
```

### 打包格式

```typescript
import type { BundleFormatV2, ModuleBundleV2, ModuleChunkV2 } from 'uni-types'

// BundleFormatV2: 'esm' | 'cjs' | 'umd' | 'iife' | 'system'

type Bundle = ModuleBundleV2<{
  format: 'esm'
  entry: 'index.ts'
  chunks: ['main', 'vendor']
}>
```

## 版本兼容性

```typescript
import type { ModuleVersionV2, VersionCompatibility } from 'uni-types'

type V = ModuleVersionV2<{ major: 2; minor: 0; patch: 0 }>
type Compat = VersionCompatibility<V, ModuleVersionV2<{ major: 1; minor: 13; patch: 0 }>>
// 'minor' — 次版本变更
```

## API 参考

参阅 [模块系统 API 参考](/zh/api/module-system) 获取完整文档。
