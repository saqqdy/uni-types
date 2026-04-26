# 文件系统 Types

**从 1.8.0 开始**

类型级文件系统操作。

## 路径类型

### Path

路径类型定义。

```typescript
import type { Path } from 'uni-types'

type MyPath = Path<'/src/index.ts'>
```

### RelativePath

相对路径类型。

```typescript
import type { RelativePath } from 'uni-types'

type Rel = RelativePath<'./src/index.ts'>  // './src/index.ts'
type Invalid = RelativePath<'/absolute'>  // never
```

### AbsolutePath

绝对路径类型。

```typescript
import type { AbsolutePath } from 'uni-types'

type Abs = AbsolutePath<'/src/index.ts'>  // '/src/index.ts'
```

### ParsePath

解析路径为组件。

```typescript
import type { ParsePath } from 'uni-types'

type Parts = ParsePath<'/src/index.ts'>
// { dirname: '/src'; basename: 'index.ts'; extname: '.ts' }
```

### JoinPath

连接两个路径。

```typescript
import type { JoinPath } from 'uni-types'

type Joined = JoinPath<'/src', 'index.ts'>  // '/src/index.ts'
```

## 文件类型

### File

文件定义。

```typescript
import type { File } from 'uni-types'

type MyFile = File<'/src/index.ts'>
```

### FileContent

文件内容类型。

```typescript
import type { FileContent } from 'uni-types'

type Content = FileContent  // string | ArrayBuffer | Buffer | Blob | ...
```

### FileType

文件类型枚举。

```typescript
import type { FileType } from 'uni-types'

type Type = FileType  // 'file' | 'directory' | 'symlink' | 'socket' | ...
```

### FilePermission

文件权限类型。

```typescript
import type { FilePermission } from 'uni-types'

type Perm = FilePermission  // 'read' | 'write' | 'execute' | 'delete' | ...
```

## 目录类型

### Directory

目录定义。

```typescript
import type { Directory } from 'uni-types'

type Dir = Directory<'/src'>
```

### DirectoryEntry

目录条目类型。

```typescript
import type { DirectoryEntry } from 'uni-types'

type Entry = DirectoryEntry<string>
```

### DirectoryTree

目录树结构。

```typescript
import type { DirectoryTree } from 'uni-types'

type Tree = DirectoryTree<string>
```

### GlobPattern

Glob 模式类型。

```typescript
import type { GlobPattern, CommonGlob } from 'uni-types'

type Pattern = GlobPattern  // string
type Common = CommonGlob  // '*.ts' | '**/*.js' | ...
```

## 监视类型

### FileWatch

文件监视定义。

```typescript
import type { FileWatch } from 'uni-types'

type Watch = FileWatch<string>
```

### WatchEvent

监视事件类型。

```typescript
import type { WatchEvent } from 'uni-types'

type Event = WatchEvent  // 'create' | 'modify' | 'delete' | 'rename' | ...
```

## 虚拟文件系统

### VirtualFS

虚拟文件系统定义。

```typescript
import type { VirtualFS } from 'uni-types'

type VFS = VirtualFS<string>
```

### VFSNode

VFS 节点类型。

```typescript
import type { VFSNode } from 'uni-types'

type Node = VFSNode<string>
```

## 归档类型

### Archive

归档定义。

```typescript
import type { Archive } from 'uni-types'

type Zip = Archive<string>
```

### ArchiveFormat

归档格式类型。

```typescript
import type { ArchiveFormat } from 'uni-types'

type Format = ArchiveFormat  // 'zip' | 'tar' | 'gz' | 'bz2' | '7z' | ...
```

## 文件元数据

### FileMetadata

文件元数据定义。

```typescript
import type { FileMetadata } from 'uni-types'

type Meta = FileMetadata<string>
```

### FileHash

文件哈希定义。

```typescript
import type { FileHash } from 'uni-types'

type Hash = FileHash
// { algorithm: 'md5' | 'sha1' | 'sha256' | ...; value: string }
```
