# 包管理器 Types

**从 1.8.0 开始**

类型级包管理工具。

## 包类型

### Package

包定义。

```typescript
import type { Package } from 'uni-types'

type Pkg = Package<{ custom?: string }>
```

### PackageName

包名类型。

```typescript
import type { PackageName } from 'uni-types'

type Name = PackageName  // string
```

### PackageVersion

包版本类型。

```typescript
import type { PackageVersion } from 'uni-types'

type Version = PackageVersion  // string
```

### PackageExports

包导出定义。

```typescript
import type { PackageExports } from 'uni-types'

type Exports = PackageExports
// string | Record<string, string | { defaultExport?: string; types?: string; ... }>
```

## 依赖类型

### Dependencies

依赖映射类型。

```typescript
import type { Dependencies } from 'uni-types'

type Deps = Dependencies  // Record<string, DependencyVersion>
```

### Dependency

依赖定义。

```typescript
import type { Dependency } from 'uni-types'

type Dep = Dependency<string>
```

### DependencyType

依赖类型枚举。

```typescript
import type { DependencyType } from 'uni-types'

type Type = DependencyType  // 'dependencies' | 'devDependencies' | 'peerDependencies' | ...
```

### DependencyGraph

依赖图定义。

```typescript
import type { DependencyGraph } from 'uni-types'

type Graph = DependencyGraph<string>
```

### DependencyTree

依赖树结构。

```typescript
import type { DependencyTree } from 'uni-types'

type Tree = DependencyTree<string>
```

## SemVer 类型

### SemVer

语义版本定义。

```typescript
import type { SemVer } from 'uni-types'

type Ver = SemVer
// { major: number; minor: number; patch: number; prerelease?: string[]; ... }
```

### SemVerRange

语义版本范围。

```typescript
import type { SemVerRange } from 'uni-types'

type Range = SemVerRange  // string
```

### SemVerDiff

版本差异类型。

```typescript
import type { SemVerDiff } from 'uni-types'

type Diff = SemVerDiff  // 'major' | 'minor' | 'patch' | 'premajor' | ... | null
```

## 解析类型

### Resolution

包解析定义。

```typescript
import type { Resolution } from 'uni-types'

type Res = Resolution<string>
```

### ResolveStrategy

解析策略类型。

```typescript
import type { ResolveStrategy } from 'uni-types'

type Strategy = ResolveStrategy  // 'latest' | 'lowest' | 'highest' | 'semver' | 'tag' | ...
```

### ResolvedPackage

已解析包类型。

```typescript
import type { ResolvedPackage } from 'uni-types'

type Pkg = ResolvedPackage<string>
```

## 锁文件类型

### LockFile

锁文件定义。

```typescript
import type { LockFile } from 'uni-types'

type Lock = LockFile<string>
```

### LockEntry

锁条目类型。

```typescript
import type { LockEntry } from 'uni-types'

type Entry = LockEntry<string>
```

### LockFormat

锁文件格式类型。

```typescript
import type { LockFormat } from 'uni-types'

type Format = LockFormat  // 'npm' | 'yarn' | 'yarn2' | 'pnpm'
```

## 注册表类型

### Registry

注册表定义。

```typescript
import type { Registry } from 'uni-types'

type Reg = Registry<string>
```

### RegistryPackage

注册表包类型。

```typescript
import type { RegistryPackage } from 'uni-types'

type Pkg = RegistryPackage<string>
```

## Monorepo 类型

### Workspace

工作区定义。

```typescript
import type { Workspace } from 'uni-types'

type Ws = Workspace<string>
```

### WorkspaceConfig

工作区配置。

```typescript
import type { WorkspaceConfig } from 'uni-types'

type Config = WorkspaceConfig<string>
```

### WorkspaceGraph

工作区依赖图。

```typescript
import type { WorkspaceGraph } from 'uni-types'

type Graph = WorkspaceGraph<string>
```

## 插件类型

### PackagePlugin

包插件定义。

```typescript
import type { PackagePlugin } from 'uni-types'

type Plugin = PackagePlugin<string>
```

### PluginHook

插件钩子类型。

```typescript
import type { PluginHook } from 'uni-types'

type Hook = PluginHook<string>
// { type: 'preinstall'; handler: ... } | { type: 'postinstall'; handler: ... } | ...
```

## 安装类型

### InstallOptions

安装选项定义。

```typescript
import type { InstallOptions } from 'uni-types'

type Options = InstallOptions
```

### InstallResult

安装结果类型。

```typescript
import type { InstallResult } from 'uni-types'

type Result = InstallResult<string>
```

### Vulnerability

漏洞定义。

```typescript
import type { Vulnerability } from 'uni-types'

type Vuln = Vulnerability
```

## 生命周期类型

### LifecycleHook

生命周期钩子类型。

```typescript
import type { LifecycleHook } from 'uni-types'

type Hook = LifecycleHook  // 'preinstall' | 'install' | 'postinstall' | ...
```
