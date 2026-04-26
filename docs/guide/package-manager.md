# Package Manager Types

**Since 1.8.0**

Type-level package management utilities.

## Package Types

### Package

Package definition.

```typescript
import type { Package } from 'uni-types'

type Pkg = Package<{ custom?: string }>
```

### PackageName

Package name type.

```typescript
import type { PackageName } from 'uni-types'

type Name = PackageName  // string
```

### PackageVersion

Package version type.

```typescript
import type { PackageVersion } from 'uni-types'

type Version = PackageVersion  // string
```

### PackageExports

Package exports definition.

```typescript
import type { PackageExports } from 'uni-types'

type Exports = PackageExports
// string | Record<string, string | { defaultExport?: string; types?: string; ... }>
```

## Dependency Types

### Dependencies

Dependencies map type.

```typescript
import type { Dependencies } from 'uni-types'

type Deps = Dependencies  // Record<string, DependencyVersion>
```

### Dependency

Dependency definition.

```typescript
import type { Dependency } from 'uni-types'

type Dep = Dependency<string>
```

### DependencyType

Dependency type enumeration.

```typescript
import type { DependencyType } from 'uni-types'

type Type = DependencyType  // 'dependencies' | 'devDependencies' | 'peerDependencies' | ...
```

### DependencyGraph

Dependency graph definition.

```typescript
import type { DependencyGraph } from 'uni-types'

type Graph = DependencyGraph<string>
```

### DependencyTree

Dependency tree structure.

```typescript
import type { DependencyTree } from 'uni-types'

type Tree = DependencyTree<string>
```

## SemVer Types

### SemVer

Semantic version definition.

```typescript
import type { SemVer } from 'uni-types'

type Ver = SemVer
// { major: number; minor: number; patch: number; prerelease?: string[]; ... }
```

### SemVerRange

Semantic version range.

```typescript
import type { SemVerRange } from 'uni-types'

type Range = SemVerRange  // string
```

### SemVerDiff

Version difference type.

```typescript
import type { SemVerDiff } from 'uni-types'

type Diff = SemVerDiff  // 'major' | 'minor' | 'patch' | 'premajor' | ... | null
```

## Resolution Types

### Resolution

Package resolution definition.

```typescript
import type { Resolution } from 'uni-types'

type Res = Resolution<string>
```

### ResolveStrategy

Resolution strategy types.

```typescript
import type { ResolveStrategy } from 'uni-types'

type Strategy = ResolveStrategy  // 'latest' | 'lowest' | 'highest' | 'semver' | 'tag' | ...
```

### ResolvedPackage

Resolved package type.

```typescript
import type { ResolvedPackage } from 'uni-types'

type Pkg = ResolvedPackage<string>
```

## Lock File Types

### LockFile

Lock file definition.

```typescript
import type { LockFile } from 'uni-types'

type Lock = LockFile<string>
```

### LockEntry

Lock entry type.

```typescript
import type { LockEntry } from 'uni-types'

type Entry = LockEntry<string>
```

### LockFormat

Lock file format types.

```typescript
import type { LockFormat } from 'uni-types'

type Format = LockFormat  // 'npm' | 'yarn' | 'yarn2' | 'pnpm'
```

## Registry Types

### Registry

Registry definition.

```typescript
import type { Registry } from 'uni-types'

type Reg = Registry<string>
```

### RegistryPackage

Registry package type.

```typescript
import type { RegistryPackage } from 'uni-types'

type Pkg = RegistryPackage<string>
```

## Monorepo Types

### Workspace

Workspace definition.

```typescript
import type { Workspace } from 'uni-types'

type Ws = Workspace<string>
```

### WorkspaceConfig

Workspace configuration.

```typescript
import type { WorkspaceConfig } from 'uni-types'

type Config = WorkspaceConfig<string>
```

### WorkspaceGraph

Workspace dependency graph.

```typescript
import type { WorkspaceGraph } from 'uni-types'

type Graph = WorkspaceGraph<string>
```

## Plugin Types

### PackagePlugin

Package plugin definition.

```typescript
import type { PackagePlugin } from 'uni-types'

type Plugin = PackagePlugin<string>
```

### PluginHook

Plugin hook types.

```typescript
import type { PluginHook } from 'uni-types'

type Hook = PluginHook<string>
// { type: 'preinstall'; handler: ... } | { type: 'postinstall'; handler: ... } | ...
```

## Install Types

### InstallOptions

Install options definition.

```typescript
import type { InstallOptions } from 'uni-types'

type Options = InstallOptions
```

### InstallResult

Install result type.

```typescript
import type { InstallResult } from 'uni-types'

type Result = InstallResult<string>
```

### Vulnerability

Vulnerability definition.

```typescript
import type { Vulnerability } from 'uni-types'

type Vuln = Vulnerability
```

## Lifecycle Types

### LifecycleHook

Lifecycle hook types.

```typescript
import type { LifecycleHook } from 'uni-types'

type Hook = LifecycleHook  // 'preinstall' | 'install' | 'postinstall' | ...
```
