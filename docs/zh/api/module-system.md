# 模块系统 API 参考

## 模块核心

### `ModuleV2<T>`

类型级模块，包含名称、版本和导出。

```typescript
import type { ModuleV2 } from 'uni-types'

type M = ModuleV2<{ foo: string; bar: number }>
// M.exports: { foo: string; bar: number }
// M.name: string
// M.version: string
```

### `ExportV2<T>`

类型级导出标记，包含 `__exported__: true`。

```typescript
import type { ExportV2 } from 'uni-types'

type E = ExportV2<string>
// E.__exported__: true
```

### `ImportV2<T>`

类型级导入标记，包含 `__imported__: true` 和 `__from__: string`。

```typescript
import type { ImportV2 } from 'uni-types'

type I = ImportV2<number>
// I.__imported__: true, I.__from__: string
```

### `ReExportV2<T>`

类型级重导出，包含 `__exported__: true` 和 `__reexported_from__: string`。

```typescript
import type { ReExportV2 } from 'uni-types'

type R = ReExportV2<string>
// R.__exported__: true, R.__reexported_from__: string
```

## 命名空间类型

### `NamespaceV2<T>`

类型级命名空间，包含名称和成员。

```typescript
import type { NamespaceV2 } from 'uni-types'

type NS = NamespaceV2<{ foo: string; bar: number }>
```

### `QualifiedV2<NS, Key>`

通过键访问命名空间的成员。

```typescript
import type { QualifiedV2, NamespaceV2 } from 'uni-types'

type NS = NamespaceV2<{ foo: string; bar: number }>
type Q = QualifiedV2<NS, 'foo'>  // string
```

### `AliasV2<T, Name>`

命名类型别名，包含 `__alias__: Name` 标记。

```typescript
import type { AliasV2 } from 'uni-types'

type A = AliasV2<string, 'MyString'>
// A.__alias__: 'MyString'
```

## 模块图

### `ModuleGraphV2`

依赖图，包含节点和边。

### `ModuleNodeV2`

模块节点，包含名称、路径、入口标识和大小。

### `ModuleDependencyV2`

依赖边，包含 from、to、type 和 typeOnly 标识。

### `DependencyTypeV2`

依赖类型：`'import' | 're-export' | 'dynamic-import' | 'side-effect'`

## 模块解析

### `ModuleResolutionV2<T>`

解析结果，包含模块、路径和策略。

### `ResolutionStrategy`

解析策略：`'node-modules' | 'path-alias' | 'relative' | 'absolute' | 'virtual'`

## 模块作用域

### `ModuleScopeV2`

模块作用域级别：`'public' | 'protected' | 'private' | 'internal'`

### `ScopedMemberV2<T>`

作用域成员，包含值、作用域、废弃标识和引入版本。

```typescript
import type { ScopedMemberV2 } from 'uni-types'

type SM = ScopedMemberV2<string>
// SM.value: string, SM.scope: ModuleScopeV2, SM.deprecated: boolean
```

## 模块打包

### `ModuleBundleV2`

模块包，包含名称、模块列表、格式和 tree-shaking 标识。

### `BundleFormatV2`

打包格式：`'esm' | 'cjs' | 'umd' | 'iife' | 'system'`

### `ModuleChunkV2`

代码块，包含名称、模块、预估大小和异步标识。

## 模块版本

### `ModuleVersionV2`

版本信息，包含主版本、次版本和补丁号。

### `VersionCompatibility`

版本兼容性：`'compatible' | 'semver-compatible' | 'breaking' | 'unknown'`
