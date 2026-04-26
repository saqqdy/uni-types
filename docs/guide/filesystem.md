# File System Types

**Since 1.8.0**

Type-level file system operations.

## Path Types

### Path

Path type definition.

```typescript
import type { Path } from 'uni-types'

type MyPath = Path<'/src/index.ts'>
```

### RelativePath

Relative path type.

```typescript
import type { RelativePath } from 'uni-types'

type Rel = RelativePath<'./src/index.ts'>  // './src/index.ts'
type Invalid = RelativePath<'/absolute'>  // never
```

### AbsolutePath

Absolute path type.

```typescript
import type { AbsolutePath } from 'uni-types'

type Abs = AbsolutePath<'/src/index.ts'>  // '/src/index.ts'
```

### ParsePath

Parse path into components.

```typescript
import type { ParsePath } from 'uni-types'

type Parts = ParsePath<'/src/index.ts'>
// { dirname: '/src'; basename: 'index.ts'; extname: '.ts' }
```

### JoinPath

Join two paths.

```typescript
import type { JoinPath } from 'uni-types'

type Joined = JoinPath<'/src', 'index.ts'>  // '/src/index.ts'
```

## File Types

### File

File definition.

```typescript
import type { File } from 'uni-types'

type MyFile = File<'/src/index.ts'>
```

### FileContent

File content types.

```typescript
import type { FileContent } from 'uni-types'

type Content = FileContent  // string | ArrayBuffer | Buffer | Blob | ...
```

### FileType

File type enumeration.

```typescript
import type { FileType } from 'uni-types'

type Type = FileType  // 'file' | 'directory' | 'symlink' | 'socket' | ...
```

### FilePermission

File permission types.

```typescript
import type { FilePermission } from 'uni-types'

type Perm = FilePermission  // 'read' | 'write' | 'execute' | 'delete' | ...
```

## Directory Types

### Directory

Directory definition.

```typescript
import type { Directory } from 'uni-types'

type Dir = Directory<'/src'>
```

### DirectoryEntry

Directory entry type.

```typescript
import type { DirectoryEntry } from 'uni-types'

type Entry = DirectoryEntry<string>
```

### DirectoryTree

Directory tree structure.

```typescript
import type { DirectoryTree } from 'uni-types'

type Tree = DirectoryTree<string>
```

### GlobPattern

Glob pattern type.

```typescript
import type { GlobPattern, CommonGlob } from 'uni-types'

type Pattern = GlobPattern  // string
type Common = CommonGlob  // '*.ts' | '**/*.js' | ...
```

## Watch Types

### FileWatch

File watch definition.

```typescript
import type { FileWatch } from 'uni-types'

type Watch = FileWatch<string>
```

### WatchEvent

Watch event types.

```typescript
import type { WatchEvent } from 'uni-types'

type Event = WatchEvent  // 'create' | 'modify' | 'delete' | 'rename' | ...
```

## Virtual File System

### VirtualFS

Virtual file system definition.

```typescript
import type { VirtualFS } from 'uni-types'

type VFS = VirtualFS<string>
```

### VFSNode

VFS node type.

```typescript
import type { VFSNode } from 'uni-types'

type Node = VFSNode<string>
```

## Archive Types

### Archive

Archive definition.

```typescript
import type { Archive } from 'uni-types'

type Zip = Archive<string>
```

### ArchiveFormat

Archive format types.

```typescript
import type { ArchiveFormat } from 'uni-types'

type Format = ArchiveFormat  // 'zip' | 'tar' | 'gz' | 'bz2' | '7z' | ...
```

## File Metadata

### FileMetadata

File metadata definition.

```typescript
import type { FileMetadata } from 'uni-types'

type Meta = FileMetadata<string>
```

### FileHash

File hash definition.

```typescript
import type { FileHash } from 'uni-types'

type Hash = FileHash
// { algorithm: 'md5' | 'sha1' | 'sha256' | ...; value: string }
```
