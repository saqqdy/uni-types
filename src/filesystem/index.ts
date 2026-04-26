/**
 * Type-Level File System (v1.8.0)
 *
 * Type-level file system operations including:
 * - Path types
 * - File types
 * - Directory types
 * - Watch types
 * - Virtual file system
 * - Archive types
 * - File metadata
 */

// ============================================================================
// Path Types
// ============================================================================

/**
 * Path type
 */
export type Path<T extends string = string> = T

/**
 * Relative path type
 */
export type RelativePath<T extends string = string> = T extends `./${string}` | `../${string}` | `${string}/${string}`
	? T
	: never

/**
 * Absolute path type
 */
export type AbsolutePath<T extends string = string> = T extends `/` | `/${string}`
	? T
	: never

/**
 | Path segment
 */
export type PathSegment = string

/**
 * Path parts
 */
export interface PathParts {
	dirname: string
	basename: string
	extname: string
}

/**
 * Parse path into parts
 */
export type ParsePath<P extends string> = P extends `${infer Dir}/${infer Base}.${infer Ext}`
	? { dirname: Dir, basename: `${Base}.${Ext}`, extname: `.${Ext}` }
	: P extends `${infer Dir}/${infer Base}`
		? { dirname: Dir, basename: Base, extname: '' }
		: P extends `${infer Base}.${infer Ext}`
			? { dirname: '', basename: `${Base}.${Ext}`, extname: `.${Ext}` }
			: { dirname: '', basename: P, extname: '' }

/**
 | Join paths
 */
export type JoinPath<P1 extends string, P2 extends string>
	= P1 extends ''
		? P2
		: P2 extends ''
			? P1
			: P1 extends `${infer Rest}/`
				? `${Rest}/${P2}`
				: `${P1}/${P2}`

/**
 | Resolve path
 */
export type ResolvePath<Base extends string, Target extends string>
	= Target extends AbsolutePath<Target>
		? Target
		: Base extends AbsolutePath<Base>
			? JoinPath<Base, Target>
			: never

/**
 * Normalize path
 */
export type NormalizePath<P extends string>
	= P extends `${infer Start}/./${infer Rest}`
		? NormalizePath<`${Start}/${Rest}`>
		: P extends `${infer Start}/${infer _Segment}/../${infer Rest}`
			? NormalizePath<`${Start}/${Rest}`>
			: P extends `./${infer Rest}`
				? NormalizePath<Rest>
				: P

/**
 * Path depth (simplified)
 */
export type PathDepth<P extends string> = P extends '' | '/'
	? 0
	: P extends `${infer _Start}/${infer _Rest}`
		? 1
		: 1

/**
 * Extension type
 */
export type Extension<T extends string = string> = T extends `.${string}` ? T : never

/**
 * Common extensions
 */
export type CommonExtension
	= | '.ts' | '.tsx' | '.js' | '.jsx' | '.mjs' | '.cjs'
		| '.json' | '.yaml' | '.yml' | '.toml'
		| '.md' | '.txt' | '.csv'
		| '.html' | '.css' | '.scss' | '.sass' | '.less'
		| '.png' | '.jpg' | '.jpeg' | '.gif' | '.svg' | '.webp' | '.ico'
		| '.mp3' | '.mp4' | '.wav' | '.ogg' | '.webm' | '.avi'
		| '.zip' | '.tar' | '.gz' | '.bz2' | '.7z' | '.rar'
		| '.pdf' | '.doc' | '.docx' | '.xls' | '.xlsx' | '.ppt' | '.pptx'
		| '.exe' | '.dll' | '.so' | '.dylib'
		| '.lock' | '.log'

// ============================================================================
// File Types
// ============================================================================

/**
 * File type
 */
export interface File<T extends string = string> {
	path: Path<T>
	name: string
	content: FileContent
	type: FileType
	size: number
	permissions: FilePermission[]
	metadata: FileMetadata
}

/**
 * File content type
 */
export type FileContent
	= | string
		| ArrayBuffer
		| Buffer
		| Blob
		| Uint8Array
		| ReadableStream

/**
 * File type enumeration
 */
export type FileType
	= | 'file'
		| 'directory'
		| 'symlink'
		| 'socket'
		| 'pipe'
		| 'block-device'
		| 'character-device'
		| 'unknown'

/**
 | File permission
 */
export type FilePermission
	= | 'read'
		| 'write'
		| 'execute'
		| 'delete'
		| 'append'
		| 'share'
		| 'rename'
		| 'copy'
		| 'move'

/**
 * File mode
 */
export type FileMode
	= | 'r' // read
		| 'r+' // read and write
		| 'w' // write (truncate)
		| 'w+' // read and write (truncate)
		| 'a' // append
		| 'a+' // read and append
		| 'rw' // read and write
		| 'wx' // write exclusive
		| 'ax' // append exclusive
		| 'rs' // read sync
		| 'ws' // write sync
		| 'as' // append sync

/**
 * File encoding
 */
export type FileEncoding
	= | 'utf8' | 'utf-8'
		| 'utf16le' | 'utf-16le'
		| 'latin1' | 'ascii' | 'binary'
		| 'base64' | 'hex'

/**
 | File flags
 */
export type FileFlags
	= | 'r'
		| 'r+'
		| 'rs+'
		| 'w'
		| 'w+'
		| 'wx'
		| 'wx+'
		| 'a'
		| 'a+'
		| 'ax'
		| 'ax+'

/**
 | File options
 */
export interface FileOptions {
	encoding?: FileEncoding
	mode?: number
	flag?: FileFlags
	autoClose?: boolean
	emitClose?: boolean
	start?: number
	end?: number
	highWaterMark?: number
}

/**
 * File stats
 */
export interface FileStats<T extends string = string> {
	path: Path<T>
	size: number
	type: FileType
	mode: number
	uid: number
	gid: number
	atime: Timestamp
	mtime: Timestamp
	ctime: Timestamp
	birthtime: Timestamp
	isBlockDevice: boolean
	isCharacterDevice: boolean
	isDirectory: boolean
	isFIFO: boolean
	isFile: boolean
	isSocket: boolean
	isSymbolicLink: boolean
	nlink: number
	rdev: number
	blksize: number
	blocks: number
}

/**
 | Timestamp type
 */
export type Timestamp = number

// ============================================================================
// Directory Types
// ============================================================================

/**
 * Directory type
 */
export interface Directory<T extends string = string> {
	path: Path<T>
	name: string
	entries: DirectoryEntry<T>[]
	parent?: Directory<T>
	children?: Directory<T>[]
}

/**
 | Directory entry
 */
export interface DirectoryEntry<T extends string = string> {
	path: Path<T>
	name: string
	type: FileType
	isFile: boolean
	isDirectory: boolean
	isSymlink: boolean
}

/**
 | Directory tree
 */
export interface DirectoryTree<T extends string = string> {
	root: Path<T>
	nodes: TreeNode<T>[]
}

/**
 | Tree node
 */
export interface TreeNode<T extends string = string> {
	path: Path<T>
	name: string
	type: FileType
	children?: TreeNode<T>[]
}

/**
 | Glob pattern
 */
export type GlobPattern = string

/**
 | Glob match result
 */
export type GlobMatch<_P extends GlobPattern> = string[]

/**
 | Common glob patterns
 */
export type CommonGlob
	= | '*.ts'
		| '*.tsx'
		| '*.js'
		| '*.jsx'
		| '*.json'
		| '*.md'
		| '**/*.ts'
		| '**/*.js'
		| '**/node_modules/**'
		| '**/dist/**'
		| '**/src/**'
		| '**/.git/**'
		| '.*'

/**
 * Walk options
 */
export interface WalkOptions {
	depth?: number
	filter?: (entry: DirectoryEntry) => boolean
	includeFiles?: boolean
	includeDirectories?: boolean
	includeSymlinks?: boolean
	followSymlinks?: boolean
	maxFiles?: number
}

// ============================================================================
// Watch Types
// ============================================================================

/**
 | File watch type
 */
export interface FileWatch<T extends string = string> {
	path: Path<T>
	events: WatchEvent[]
	handler: WatchHandler<T>
	options?: WatchOptions
}

/**
 * Watch event types
 */
export type WatchEvent
	= | 'create'
		| 'modify'
		| 'delete'
		| 'rename'
		| 'access'
		| 'attribute'
		| 'close'
		| 'open'
		| 'move'

/**
 | Watch handler
 */
export type WatchHandler<T extends string = string> = (
	event: WatchEvent,
	path: Path<T>,
	details: WatchDetails,
) => void | Promise<void>

/**
 * Watch details
 */
export interface WatchDetails {
	previousPath?: string
	type?: FileType
	timestamp?: number
	stats?: FileStats
}

/**
 | Watch options
 */
export interface WatchOptions {
	persistent?: boolean
	recursive?: boolean
	ignoreInitial?: boolean
	ignored?: string | string[] | ((path: string) => boolean)
	awaitWriteFinish?: {
		stabilityThreshold?: number
		pollInterval?: number
	}
	usePolling?: boolean
	pollInterval?: number
	depth?: number
	events?: WatchEvent[]
}

// ============================================================================
// Virtual File System
// ============================================================================

/**
 * Virtual file system type
 */
export interface VirtualFS<T extends string = string> {
	root: Path<T>
	nodes: Map<Path<T>, VFSNode<T>>
	mounts: Map<Path<T>, VFSMount<T>>
}

/**
 | VFS node
 */
export interface VFSNode<T extends string = string> {
	path: Path<T>
	name: string
	type: FileType
	content?: FileContent
	children?: Map<string, VFSNode<T>>
	metadata: FileMetadata
}

/**
 | VFS mount
 */
export interface VFSMount<T extends string = string> {
	path: Path<T>
	target: Path<T>
	options: MountOptions
}

/**
 | Mount options
 */
export interface MountOptions {
	readOnly?: boolean
	noExec?: boolean
	noDevice?: boolean
	sync?: boolean
	noatime?: boolean
}

/**
 | VFS operations
 */
export interface VFSOperations<T extends string = string> {
	read: (path: Path<T>) => FileContent | Promise<FileContent>
	write: (path: Path<T>, content: FileContent) => void | Promise<void>
	mkdir: (path: Path<T>) => void | Promise<void>
	rmdir: (path: Path<T>) => void | Promise<void>
	unlink: (path: Path<T>) => void | Promise<void>
	rename: (oldPath: Path<T>, newPath: Path<T>) => void | Promise<void>
	stat: (path: Path<T>) => FileStats<T> | Promise<FileStats<T>>
	exists: (path: Path<T>) => boolean | Promise<boolean>
	list: (path: Path<T>) => DirectoryEntry<T>[] | Promise<DirectoryEntry<T>[]>
	watch: (path: Path<T>, handler: WatchHandler<T>) => FileWatch<T> | Promise<FileWatch<T>>
}

// ============================================================================
// Archive Types
// ============================================================================

/**
 * Archive type
 */
export interface Archive<T extends string = string> {
	path: Path<T>
	format: ArchiveFormat
	entries: ArchiveEntry<T>[]
	compressed?: boolean
	comment?: string
}

/**
 * Archive entry type
 */
export interface ArchiveEntry<T extends string = string> {
	path: Path<T>
	name: string
	content?: FileContent
	compressed?: boolean
	mode?: number
	mtime?: Timestamp
	size?: number
	comment?: string
}

/**
 * Archive format type
 */
export type ArchiveFormat
	= | 'zip'
		| 'tar'
		| 'gz' | 'gzip'
		| 'bz2' | 'bzip2'
		| 'xz'
		| 'lz'
		| 'lz4'
		| 'zst' | 'zstd'
		| '7z' | '7zip'
		| 'rar'
		| 'ar'
		| 'deb'
		| 'rpm'
		| 'iso'
		| 'dmg'
		| 'tgz' // tar.gz
		| 'tbz2' // tar.bz2
		| 'txz' // tar.xz

/**
 | Archive options
 */
export interface ArchiveOptions {
	format?: ArchiveFormat
	compression?: CompressionLevel
	password?: string
	encryption?: EncryptionAlgorithm
	comment?: string
	overwrite?: boolean
	progress?: (percent: number) => void
}

/**
 | Compression level
 */
export type CompressionLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 'fast' | 'best' | 'default'

/**
 | Encryption algorithm
 */
export type EncryptionAlgorithm
	= | 'none'
		| 'AES-128'
		| 'AES-256'
		| 'ZipCrypto'
		| 'AES-256-CTR'

/**
 | Extract options
 */
export interface ExtractOptions {
	target?: string
	overwrite?: boolean
	preservePermissions?: boolean
	preserveTimestamps?: boolean
	password?: string
	progress?: (percent: number) => void
}

// ============================================================================
// File Metadata
// ============================================================================

/**
 | File metadata
 */
export interface FileMetadata<T extends string = string> {
	path: Path<T>
	size: number
	created: Timestamp
	modified: Timestamp
	accessed: Timestamp
	author?: string
	description?: string
	tags?: string[]
	custom?: Record<string, unknown>
	hash?: FileHash
	mimeType?: MimeType
	encoding?: FileEncoding
}

/**
 | File hash
 */
export interface FileHash {
	algorithm: HashAlgorithm
	value: string
}

/**
 | Hash algorithm
 */
export type HashAlgorithm
	= | 'md5'
		| 'sha1'
		| 'sha256'
		| 'sha384'
		| 'sha512'
		| 'sha3-256'
		| 'sha3-512'
		| 'blake2b'
		| 'blake2s'
		| 'crc32'
		| 'crc64'
		| 'ripemd160'

/**
 | MIME type
 */
export type MimeType = string

/**
 | Common MIME types
 */
export type CommonMimeType
	= | 'text/plain'
		| 'text/html'
		| 'text/css'
		| 'text/javascript'
		| 'application/json'
		| 'application/xml'
		| 'application/pdf'
		| 'application/zip'
		| 'application/octet-stream'
		| 'image/png'
		| 'image/jpeg'
		| 'image/gif'
		| 'image/svg+xml'
		| 'image/webp'
		| 'video/mp4'
		| 'video/webm'
		| 'audio/mpeg'
		| 'audio/ogg'
		| 'audio/wav'
		| 'font/woff'
		| 'font/woff2'

/**
 | Detect MIME type from extension
 */
export type MimeTypeFromExtension<Ext extends Extension>
	= Ext extends '.ts' | '.tsx' ? 'text/javascript'
		: Ext extends '.js' | '.mjs' | '.cjs' ? 'text/javascript'
			: Ext extends '.json' ? 'application/json'
				: Ext extends '.html' ? 'text/html'
					: Ext extends '.css' ? 'text/css'
						: Ext extends '.md' ? 'text/markdown'
							: Ext extends '.pdf' ? 'application/pdf'
								: Ext extends '.zip' ? 'application/zip'
									: Ext extends '.png' ? 'image/png'
										: Ext extends '.jpg' | '.jpeg' ? 'image/jpeg'
											: Ext extends '.gif' ? 'image/gif'
												: Ext extends '.svg' ? 'image/svg+xml'
													: Ext extends '.mp4' ? 'video/mp4'
														: Ext extends '.mp3' ? 'audio/mpeg'
															: 'application/octet-stream'

// ============================================================================
// File System Operations
// ============================================================================

/**
 | Copy options
 */
export interface CopyOptions {
	overwrite?: boolean
	errorOnExist?: boolean
	preserveTimestamps?: boolean
	preserveMode?: boolean
	filter?: (src: string, dest: string) => boolean
}

/**
 | Move options
 */
export interface MoveOptions {
	overwrite?: boolean
	errorOnExist?: boolean
}

/**
 | Delete options
 */
export interface DeleteOptions {
	force?: boolean
	recursive?: boolean
	maxRetries?: number
	retryDelay?: number
}

/**
 | Make directory options
 */
export interface MkdirOptions {
	recursive?: boolean
	mode?: number
}

/**
 | Read options
 */
export interface ReadOptions {
	encoding?: FileEncoding
	flag?: FileFlags
	signal?: AbortSignal
}

/**
 | Write options
 */
export interface WriteOptions {
	encoding?: FileEncoding
	mode?: number
	flag?: FileFlags
	signal?: AbortSignal
}

/**
 | Append options
 */
export interface AppendOptions {
	encoding?: FileEncoding
	mode?: number
	flag?: FileFlags
	signal?: AbortSignal
}
