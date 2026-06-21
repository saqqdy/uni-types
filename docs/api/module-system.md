# Module System API Reference

## Module Core

### `ModuleV2<T>`

Represents a type-level module with name, version, and exports.

### `ExportV2<T>`

Type-level export marker with `__exported__: true`.

### `ImportV2<T>`

Type-level import marker with `__imported__: true` and `__from__: string`.

### `ReExportV2<T>`

Re-export with `__reexported_from__: string`.

## Namespace Types

### `NamespaceV2<T>`

Type-level namespace with name and members.

### `QualifiedV2<NS, Key>`

Access a namespace member by key.

### `AliasV2<T, Name>`

Named type alias with `__alias__: Name`.

## Module Graph

### `ModuleGraphV2`

Dependency graph with nodes and edges.

### `ModuleNodeV2`

Node with name, path, entry flag, and size.

### `ModuleDependencyV2`

Edge with from, to, type, and typeOnly flag.

### `DependencyTypeV2`

`'import' | 're-export' | 'dynamic-import' | 'side-effect'`

## Module Resolution

### `ModuleResolutionV2<T>`

Resolution result with module, path, and strategy.

### `ResolutionStrategy`

`'node-modules' | 'path-alias' | 'relative' | 'absolute' | 'virtual'`

## Module Scope

### `ModuleScopeV2`

`'public' | 'protected' | 'private' | 'internal'`

### `ScopedMemberV2<T>`

Member with value, scope, deprecated flag, and since version.

## Module Bundling

### `ModuleBundleV2`

Bundle with name, modules, format, and treeShaking flag.

### `BundleFormatV2`

`'esm' | 'cjs' | 'umd' | 'iife' | 'system'`

### `ModuleChunkV2`

Chunk with name, modules, estimatedSize, and async flag.

## Module Versioning

### `ModuleVersionV2`

Version with major, minor, patch, and optional prerelease/build.

### `VersionCompatibility`

`'compatible' | 'semver-compatible' | 'breaking' | 'unknown'`
