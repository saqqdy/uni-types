# Module System

This guide covers the **New Module System** features introduced in v2.0.0.

## Overview

The Module System provides improved type-level module organization, imports, exports, and namespace management for v2.0.0's cleaner API surface.

## Module

```typescript
import type { ModuleV2 } from 'uni-types'

type MyModule = ModuleV2<{ foo: string; bar: number }>
// MyModule.name, MyModule.version, MyModule.exports
```

## Export, Import, ReExport

```typescript
import type { ExportV2, ImportV2, ReExportV2 } from 'uni-types'

type E = ExportV2<string>   // string & { __exported__: true }
type I = ImportV2<number>  // number & { __imported__: true; __from__: string }
type R = ReExportV2<string> // Export & { __reexported_from__: string }
```

## Namespace

```typescript
import type { NamespaceV2, QualifiedV2, AliasV2 } from 'uni-types'

type NS = NamespaceV2<{ foo: string; bar: number }>
type Foo = QualifiedV2<NS, 'foo'>  // string
type A = AliasV2<string, 'MyString'>  // string & { __alias__: 'MyString' }
```

## Module Graph & Resolution

```typescript
import type { ModuleGraphV2, DependencyTypeV2, ResolutionStrategy } from 'uni-types'

// DependencyTypeV2: 'import' | 're-export' | 'dynamic-import' | 'side-effect'
// ResolutionStrategy: 'node-modules' | 'path-alias' | 'relative' | 'absolute' | 'virtual'
```

## Scope & Bundling

```typescript
import type { ModuleScopeV2, BundleFormatV2 } from 'uni-types'

// ModuleScopeV2: 'public' | 'protected' | 'private' | 'internal'
// BundleFormatV2: 'esm' | 'cjs' | 'umd' | 'iife' | 'system'
```

## API Reference

See the [Module System API Reference](/api/module-system) for complete documentation.
