import type {
	// v1.8.0 - Inference Engine
	AllVars,
	ApplyConstraint,
	ApplyRule,
	ApplySubstitution,
	BaseKind,
	Bidirectional,
	BoundVars,
	CheckAgainst,
	CheckEffect,
	Closed,
	ComposeEffects,
	ComposeSubstitutions,
	CompoundKind,
	Constraint,
	ConstraintType,
	Deduce,
	DeduceAll,
	DeduceArray,
	DeduceDeep,
	DeduceFrom,
	DeduceKey,
	DeduceParams,
	DeducePromise,
	DeduceProperty,
	DeduceReturn,
	DefaultRules,
	Effect,
	EffectAnnotation,
	Effectful,
	EffectHandler,
	EffectRow,
	EffectType,
	EmptyEnv,
	EnvChain,
	ExtendEnv,
	FreeVars,
	FreshVar,
	Generalize,
	Handle,
	HigherKind,
	Impure,
	InferArrayShape,
	InferCommon,
	InferContext,
	InferEffect,
	InferenceRule,
	InferEngine,
	InferError,
	InferErrorCode,
	InferFunctionShape,
	InferIntersectionElement,
	InferObjectShape,
	InferResult,
	InferSourceLocation,
	InferUnionElement,
	Instantiate,
	Kind,
	KindArrow,
	KindCheck,
	KindConstructor,
	KindError,
	LookupEnv,
	Monomorphize,
	Open,
	Polymorphic,
	Pure,
	RankN,
	ReconstructConstraints,
	ReconstructInfer,
	RuleSet,
	Solve,
	SubstituteVar,
	Substitution,
	SubstitutionScope,
	Synthesize,
	TypeAbs,
	TypeApp,
	TypeEnv,
	TypeMismatchError,
	TypeVar,
	Unify,
	// v1.8.0 - Database Extended
	ColumnSchema,
	ConnectionPoolConfig,
	DatabaseConnectionOptions,
	DatabaseError,
	DBModel,
	DBValidationRule,
	DeleteBuilder,
	IndexSchema,
	InsertBuilder,
	IsolationLevel,
	MigrationActionDown,
	MigrationActionUp,
	MigrationHistoryEntry,
	MigrationRecord,
	ModelAttribute,
	ModelHook,
	ModelRelation,
	ModelScope,
	RelationSchema,
	SelectBuilder,
	SQLCondition,
	SQLExpression,
	SQLJoin,
	SQLQuery,
	SSLConfig,
	TableSchema,
	TransactionOptions,
	TransactionResult,
	UpdateBuilder,
	// v1.8.0 - Network
	gRPCMethod,
	gRPCRequest,
	gRPCResponse,
	gRPCService,
	gRPCStatus,
	gRPCStream,
	HTTPBody,
	HTTPHeaders,
	HTTPMethod,
	HTTPRequest,
	HTTPRequestOptions,
	HTTPResponse,
	IPAddress,
	MQTTConnectOptions,
	MQTTHandler,
	MQTTPacket,
	MQTTPacketType,
	MQTTPayload,
	MQTTProperties,
	MQTTPublishOptions,
	MQTTQoS,
	MQTTSubscribeOptions,
	MQTTTopic,
	NetHTTPStatus,
	NetworkInterface,
	Port,
	Protocol,
	ProtocolContext,
	ProtocolEncoding,
	ProtocolHandler,
	ProtocolMessage,
	ProtocolVersion,
	ProtoEnum,
	ProtoField,
	ProtoFieldType,
	ProtoMessage,
	ProtoMethod,
	ProtoService,
	ReferrerPolicy,
	SocketAddress,
	TCPFlags,
	TCPPacket,
	TCPSocketOptions,
	TCPState,
	UDPPacket,
	UDPSocketOptions,
	URLType,
	WSCloseCode,
	WSEvent,
	WSFrame,
	WSHandler,
	WSMessage,
	WSOpcode,
	WSOptions,
	// v1.8.0 - Filesystem
	AbsolutePath,
	AppendOptions,
	Archive,
	ArchiveEntry,
	ArchiveFormat,
	ArchiveOptions,
	CommonExtension,
	CommonGlob,
	CommonMimeType,
	CompressionLevel,
	CopyOptions,
	DeleteOptions,
	Directory,
	DirectoryEntry,
	DirectoryTree,
	ExtractOptions,
	File,
	FileContent,
	FileEncoding,
	FileFlags,
	FileHash,
	FileMetadata,
	FileMode,
	FileOptions,
	FilePermission,
	FileStats,
	FileType,
	FileWatch,
	FSEncryptionAlgorithm,
	FSExtension,
	FSHashAlgorithm,
	FSWatchOptions,
	GlobPattern,
	JoinPath,
	MimeType,
	MimeTypeFromExtension,
	MkdirOptions,
	MountOptions,
	MoveOptions,
	NormalizePath,
	ParsePath,
	Path,
	PathDepth,
	PathParts,
	PathSegment,
	ReadOptions,
	RelativePath,
	ResolvePath,
	Timestamp,
	TreeNode,
	VFSMount,
	VFSNode,
	VFSOperations,
	VirtualFS,
	WalkOptions,
	WatchDetails,
	WatchEvent,
	WatchHandler,
	WriteOptions,
	// v1.8.0 - Compiler Extended
	BindingKind,
	CompilerPlugin,
	CompilerPluginHook,
	CompilerPluginOptions,
	CompilerSymbol,
	Diagnostic,
	DiagnosticAction,
	DiagnosticLevel,
	DiagnosticRange,
	DiagnosticReporter,
	DiagnosticSuggestion,
	Macro,
	MacroBody,
	MacroContext,
	MacroExpansion,
	MacroParam,
	MacroResult,
	PluginError,
	PluginResult,
	ScopeChain,
	ScopeEntry,
	SourceLocationWithFile,
	SourceMapGenerator,
	SourceMapMapping,
	SourceRange,
	SymbolFlags,
	SymbolScope,
	SymbolTable,
	TransformPass,
	TransformPassResult,
	TransformScheduler,
	VisitContext,
	Visitor,
	VisitResult,
	// v1.8.0 - Debugging
	Breakpoint,
	BreakpointAction,
	BreakpointCondition,
	BreakpointLocation,
	BreakpointType,
	CallStack,
	DataBreakpoint,
	DebugCapabilities,
	DebugChecksum,
	DebugCommand,
	DebugConfiguration,
	DebugContext,
	DebugEvent,
	DebugEventType,
	DebugInfo,
	DebugMessage,
	DebugProtocol,
	DebugRequest,
	DebugResponse,
	DebugScope,
	DebugSession,
	DebugSource,
	DebugStackFrame,
	DebugStatus,
	DebugSymbol,
	DebugSymbolKind,
	DebugThread,
	DebugWatchOptions,
	EvaluateResult,
	ExceptionBreakpoint,
	FunctionBreakpoint,
	MemoryAddress,
	MemoryDisassembly,
	MemoryReadResult,
	MemoryRegion,
	MemoryValue,
	MemoryWriteResult,
	OutputEvent,
	REPL,
	REPLCommand,
	REPLContext,
	REPLOptions,
	REPLResult,
	StackTrace,
	StoppedEvent,
	StoppedReason,
	ThreadStatus,
	TypeInfoField,
	TypeInfoMethod,
	Variable,
	VariablePresentationHint,
	VariableTypeInfo,
	VariableValue,
	WatchCallback,
	WatchExpression,
	WatchResult,
	// v1.8.0 - Optimizer
	CodeMotion,
	CommonSubexpression,
	ConstantAnalysis,
	ConstantFold,
	ConstantFoldOptions,
	ConstantValue,
	DeadCode,
	DeadCodeAnalysis,
	DeadCodeLocation,
	DeadCodeOptions,
	DeadCodeType,
	EliminateDeadCode,
	FoldableExpression,
	FoldResult,
	FunctionAnalysis,
	FunctionOptimization,
	HintCategory,
	HintLevel,
	HintSuggestion,
	Inline,
	InlineCall,
	InlineCandidate,
	InlineOptions,
	InlineResult,
	InlineThreshold,
	LiveCode,
	LoopAnalysis,
	LoopOptimization,
	MinificationOptions,
	MinifiedType,
	MinifyType,
	ModuleAnalysis,
	ModuleOptimization,
	OptBinaryOperator,
	Optimization,
	OptimizationContext,
	OptimizationLevel,
	OptimizationOptions,
	OptimizationPass,
	OptimizationPipeline,
	OptimizationResult,
	OptimizationRule,
	OptimizationStats,
	OptTypeAlias,
	OptUnaryOperator,
	PerformanceHint,
	RuleCondition,
	RuleContext,
	RulePattern,
	RuleReplacement,
	RuleResult,
	ShakeMessage,
	ShallowResult,
	SideEffect,
	SideEffectsAnalysis,
	TreeShake,
	TreeShakeOptions,
	UnusedExports,
	UsedExports,
	// v1.8.0 - Docgen
	APIAuth,
	APIBody,
	APIDoc,
	APIEndpoint,
	APIError,
	APIHeader,
	APIMediaType,
	APIParameter,
	APIRateLimit,
	APIResponse,
	APISchema,
	BreadcrumbItem,
	CrossReference,
	DocAccessibility,
	DocBreadcrumb,
	DocCompleteness,
	DocConfig,
	DocCoverage,
	DocEntryKind,
	DocError,
	DocFile,
	DocFooter,
	DocFormat,
	DocGenEntry,
	DocGenOptions,
	DocGenTypeDoc,
	DocIndex,
	DocLayout,
	DocLayoutConfig,
	DocMenu,
	DocMetadata,
	DocMetrics,
	DocNavigation,
	DocOutput,
	DocPage,
	DocPlugin,
	DocQuality,
	DocSearch,
	DocSearchOptions,
	DocSection,
	DocSidebar,
	DocSidebarItem,
	DocSource,
	DocStats,
	DocTheme,
	Documentation,
	FooterLink,
	JSDoc,
	JSDocExample,
	JSDocParam,
	JSDocReturn,
	JSDocTag,
	JSDocThrows,
	JSDocTypeParam,
	MenuItem,
	ReferenceGraph,
	ReferenceMap,
	SearchIndex,
	SearchIndexEntry,
	SearchIndexMetadata,
	SearchResult,
	SocialLink,
	TypeDocExample,
	TypeDocGeneric,
	TypeDocKind,
	TypeDocMethod,
	TypeDocParam,
	TypeDocProperty,
	TypeHierarchy,
	TypeSignature,
	// v1.8.0 - Test Framework Extended
	Assert,
	AssertEqual,
	AssertExtends,
	AssertNever,
	Assertion,
	AssertionError,
	AssertionMatcher,
	AssertionResult,
	Benchmark,
	BenchmarkConfig,
	BenchmarkResult,
	BenchmarkStatistics,
	Coverage,
	CoverageChange,
	CoverageProvider,
	CoverageRange,
	CoverageReport,
	CoverageReporter,
	CoverageThreshold,
	CoverageWatermarks,
	DateMock,
	ExpectError,
	ExpectMethods,
	FileCoverage,
	Fixture,
	FixtureConfig,
	FixtureContext,
	FixtureData,
	InlineSnapshot,
	Mock,
	MockCall,
	MockConfig,
	MockFactory,
	MockFunction,
	MockImplementation,
	MockResult,
	MockReturn,
	ModuleMock,
	NegatedExpectMethods,
	ParallelOptions,
	ReportConfig,
	ReportFormat,
	Snapshot,
	SnapshotConfig,
	SnapshotMatch,
	SnapshotResult,
	SnapshotSerializer,
	Spy,
	SpyConfig,
	SpyFactory,
	Stub,
	StubFactory,
	SuiteResult,
	TestCase,
	TestConfig,
	TestContext,
	TestContextProvider,
	TestEnvironmentConfig,
	TestEnvironmentType,
	TestError,
	TestEvent,
	TestEventHandler,
	TestFilter,
	TestGroup,
	TestHook,
	TestHookFunction,
	TestHooksConfig,
	TestMetadata,
	TestReporterInterface,
	TestResult,
	TestResultType,
	TestRunner,
	TestRunnerResult,
	TestSetup,
	TestSnapshotOptions,
	TestSuite,
	TestSummary,
	TestTeardown,
	TestTiming,
	TestUtilities,
	TimerMock,
	TypeAssertionCheck,
	TypeTest,
	Worker,
	WorkerPool,
	// v1.8.0 - Package Manager
	Dependencies,
	Dependency,
	DependencyEdge,
	DependencyGraph,
	DependencyNode,
	DependencyTree,
	DependencyType,
	DependencyVersion,
	DistTags,
	InstallOptions,
	InstallResult,
	LifecycleHook,
	LifecycleOptions,
	LockFile,
	LockFileOptions,
	LockFormat,
	NPMConfig,
	PackageExports,
	PackageMeta,
	PackageName,
	PackagePlugin,
	PackageScript,
	PackageVersion,
	PackedFile,
	PackOptions,
	PackResult,
	Person,
	PkgLockEntry,
	PkgPackage,
	PkgPluginConfig,
	PkgPluginHook,
	PkgRegistry,
	PkgRegistryConfig,
	PNPMConfig,
	PublishConfig,
	RegistryAuth,
	RegistryPackage,
	RegistryVersion,
	Resolution,
	ResolutionError,
	ResolutionErrorCode,
	ResolutionOptions,
	ResolutionResult,
	ResolvedPackage,
	ResolveStrategy,
	ScriptOptions,
	ScriptResult,
	ScriptRunner,
	SemVer,
	SemVerComparator,
	SemVerDiff,
	SemVerRange,
	SemVerSatisfies,
	Vulnerability,
	Workspace,
	WorkspaceConfig,
	WorkspaceDependency,
	WorkspaceEdge,
	WorkspaceGraph,
	WorkspaceOptions,
	WorkspacesConfig,
	YarnConfig,
} from '../src/index'
import { describe, expectTypeOf, it } from 'vitest'

describe('v1.8.0 - Inference Engine Types', () => {
	describe('InferEngine', () => {
		it('should have input, context and result', () => {
			type Actual = InferEngine<string>
			expectTypeOf<Actual>().toHaveProperty('input')
			expectTypeOf<Actual>().toHaveProperty('context')
			expectTypeOf<Actual>().toHaveProperty('result')
		})
	})

	describe('InferContext', () => {
		it('should have typeVariables and constraints', () => {
			type Actual = InferContext
			expectTypeOf<Actual>().toHaveProperty('typeVariables')
			expectTypeOf<Actual>().toHaveProperty('constraints')
		})
	})

	describe('InferError', () => {
		it('should have code and message', () => {
			type Actual = InferError
			expectTypeOf<Actual>().toHaveProperty('code')
			expectTypeOf<Actual>().toHaveProperty('message')
		})
	})

	describe('InferErrorCode', () => {
		it('should include unification-failed', () => {
			type Actual = InferErrorCode
			expectTypeOf<'unification-failed'>().toMatchTypeOf<Actual>()
		})

		it('should include type-mismatch', () => {
			type Actual = InferErrorCode
			expectTypeOf<'type-mismatch'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Deduce', () => {
		it('should deduce type', () => {
			type Actual = Deduce<string>
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})
	})

	describe('Constraint', () => {
		it('should have type property', () => {
			type Actual = Constraint<string>
			expectTypeOf<Actual>().toHaveProperty('type')
		})
	})

	describe('Substitution', () => {
		it('should be defined', () => {
			type Actual = Substitution<string>
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('TypeVar', () => {
		it('should have __typeVar property', () => {
			type Actual = TypeVar
			expectTypeOf<Actual>().toHaveProperty('__typeVar')
		})
	})

	describe('Kind', () => {
		it('should be a string', () => {
			type Actual = Kind
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})
	})

	describe('Effect', () => {
		it('should have value and effects', () => {
			type Actual = Effect<string>
			expectTypeOf<Actual>().toHaveProperty('value')
			expectTypeOf<Actual>().toHaveProperty('effects')
		})
	})

	describe('EffectType', () => {
		it('should include pure', () => {
			type Actual = EffectType
			expectTypeOf<'pure'>().toMatchTypeOf<Actual>()
		})

		it('should include impure', () => {
			type Actual = EffectType
			expectTypeOf<'impure'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Effectful', () => {
		it('should have value and effect', () => {
			type Actual = Effectful<string>
			expectTypeOf<Actual>().toHaveProperty('value')
			expectTypeOf<Actual>().toHaveProperty('effect')
		})
	})

	describe('Polymorphic', () => {
		it('should be defined', () => {
			type Actual = Polymorphic<string>
			expectTypeOf<Actual>().toBeObject()
		})
	})
})

describe('v1.8.0 - Database Extended Types', () => {
	describe('TableSchema', () => {
		it('should have name and columns', () => {
			type Actual = TableSchema
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('columns')
		})
	})

	describe('ColumnSchema', () => {
		it('should have name and type', () => {
			type Actual = ColumnSchema
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('type')
		})
	})

	describe('SQLQuery', () => {
		it('should have type and table', () => {
			type Actual = SQLQuery
			expectTypeOf<Actual>().toHaveProperty('type')
			expectTypeOf<Actual>().toHaveProperty('table')
		})
	})

	describe('SelectBuilder', () => {
		it('should be defined', () => {
			type Actual = SelectBuilder
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('MigrationRecord', () => {
		it('should have name property', () => {
			type Actual = MigrationRecord
			expectTypeOf<Actual>().toHaveProperty('name')
		})
	})

	describe('DBModel', () => {
		it('should have name and table', () => {
			type Actual = DBModel<Record<string, unknown>>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('table')
		})
	})

	describe('ConnectionPoolConfig', () => {
		it('should have max and min', () => {
			type Actual = ConnectionPoolConfig
			expectTypeOf<Actual>().toHaveProperty('max')
			expectTypeOf<Actual>().toHaveProperty('min')
		})
	})

	describe('IsolationLevel', () => {
		it('should include read-uncommitted', () => {
			type Actual = IsolationLevel
			expectTypeOf<'read-uncommitted'>().toMatchTypeOf<Actual>()
		})

		it('should include serializable', () => {
			type Actual = IsolationLevel
			expectTypeOf<'serializable'>().toMatchTypeOf<Actual>()
		})
	})
})

describe('v1.8.0 - Network Types', () => {
	describe('Protocol', () => {
		it('should have name and version', () => {
			type Actual = Protocol
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('version')
		})
	})

	describe('HTTPMethod', () => {
		it('should include GET', () => {
			type Actual = HTTPMethod
			expectTypeOf<'GET'>().toMatchTypeOf<Actual>()
		})

		it('should include POST', () => {
			type Actual = HTTPMethod
			expectTypeOf<'POST'>().toMatchTypeOf<Actual>()
		})

		it('should include DELETE', () => {
			type Actual = HTTPMethod
			expectTypeOf<'DELETE'>().toMatchTypeOf<Actual>()
		})
	})

	describe('HTTPHeaders', () => {
		it('should be a record type', () => {
			type Actual = HTTPHeaders
			expectTypeOf<Record<string, string | string[]>>().toMatchTypeOf<Actual>()
		})
	})

	describe('HTTPRequest', () => {
		it('should have method and url', () => {
			type Actual = HTTPRequest
			expectTypeOf<Actual>().toHaveProperty('method')
			expectTypeOf<Actual>().toHaveProperty('url')
		})
	})

	describe('HTTPResponse', () => {
		it('should have status and headers', () => {
			type Actual = HTTPResponse
			expectTypeOf<Actual>().toHaveProperty('status')
			expectTypeOf<Actual>().toHaveProperty('headers')
		})
	})

	describe('WSMessage', () => {
		it('should have type and data', () => {
			type Actual = WSMessage
			expectTypeOf<Actual>().toHaveProperty('type')
			expectTypeOf<Actual>().toHaveProperty('data')
		})
	})

	describe('WSOpcode', () => {
		it('should include numeric values', () => {
			type Actual = WSOpcode
			expectTypeOf<number>().toMatchTypeOf<Actual>()
		})
	})

	describe('gRPCService', () => {
		it('should have name and methods', () => {
			type Actual = gRPCService
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('methods')
		})
	})

	describe('TCPPacket', () => {
		it('should be defined', () => {
			type Actual = TCPPacket
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('MQTTQoS', () => {
		it('should include 0', () => {
			type Actual = MQTTQoS
			expectTypeOf<0>().toMatchTypeOf<Actual>()
		})

		it('should include 1', () => {
			type Actual = MQTTQoS
			expectTypeOf<1>().toMatchTypeOf<Actual>()
		})

		it('should include 2', () => {
			type Actual = MQTTQoS
			expectTypeOf<2>().toMatchTypeOf<Actual>()
		})
	})

	describe('ProtoMessage', () => {
		it('should have name and fields', () => {
			type Actual = ProtoMessage
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('fields')
		})
	})
})

describe('v1.8.0 - Filesystem Types', () => {
	describe('Path', () => {
		it('should be a string', () => {
			type Actual = Path
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})
	})

	describe('AbsolutePath', () => {
		it('should be a string', () => {
			type Actual = AbsolutePath
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})
	})

	describe('File', () => {
		it('should have path and content', () => {
			type Actual = File
			expectTypeOf<Actual>().toHaveProperty('path')
			expectTypeOf<Actual>().toHaveProperty('content')
		})
	})

	describe('FileContent', () => {
		it('should include string', () => {
			type Actual = FileContent
			expectTypeOf<string>().toMatchTypeOf<Actual>()
		})
	})

	describe('Directory', () => {
		it('should have path and entries', () => {
			type Actual = Directory
			expectTypeOf<Actual>().toHaveProperty('path')
			expectTypeOf<Actual>().toHaveProperty('entries')
		})
	})

	describe('FileMetadata', () => {
		it('should have size and modified', () => {
			type Actual = FileMetadata
			expectTypeOf<Actual>().toHaveProperty('size')
			expectTypeOf<Actual>().toHaveProperty('modified')
		})
	})

	describe('FilePermission', () => {
		it('should be defined', () => {
			type Actual = FilePermission
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('Archive', () => {
		it('should have format and entries', () => {
			type Actual = Archive
			expectTypeOf<Actual>().toHaveProperty('format')
			expectTypeOf<Actual>().toHaveProperty('entries')
		})
	})

	describe('ArchiveFormat', () => {
		it('should include zip', () => {
			type Actual = ArchiveFormat
			expectTypeOf<'zip'>().toMatchTypeOf<Actual>()
		})

		it('should include tar', () => {
			type Actual = ArchiveFormat
			expectTypeOf<'tar'>().toMatchTypeOf<Actual>()
		})
	})

	describe('VirtualFS', () => {
		it('should have root', () => {
			type Actual = VirtualFS
			expectTypeOf<Actual>().toHaveProperty('root')
		})
	})

	describe('MimeType', () => {
		it('should be a string', () => {
			type Actual = MimeType
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})
	})
})

describe('v1.8.0 - Compiler Extended Types', () => {
	describe('CompilerPlugin', () => {
		it('should have name and version', () => {
			type Actual = CompilerPlugin<string>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('version')
		})
	})

	describe('Diagnostic', () => {
		it('should have level and message', () => {
			type Actual = Diagnostic
			expectTypeOf<Actual>().toHaveProperty('level')
			expectTypeOf<Actual>().toHaveProperty('message')
		})
	})

	describe('DiagnosticLevel', () => {
		it('should include error', () => {
			type Actual = DiagnosticLevel
			expectTypeOf<'error'>().toMatchTypeOf<Actual>()
		})

		it('should include warning', () => {
			type Actual = DiagnosticLevel
			expectTypeOf<'warning'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Macro', () => {
		it('should have name property', () => {
			type Actual = Macro<string>
			expectTypeOf<Actual>().toHaveProperty('name')
		})
	})

	describe('SymbolTable', () => {
		it('should have symbols', () => {
			type Actual = SymbolTable
			expectTypeOf<Actual>().toHaveProperty('symbols')
		})
	})

	describe('Visitor', () => {
		it('should be defined', () => {
			type Actual = Visitor<string>
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('TransformPass', () => {
		it('should have name and transform', () => {
			type Actual = TransformPass<string>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('transform')
		})
	})
})

describe('v1.8.0 - Debugging Types', () => {
	describe('Breakpoint', () => {
		it('should have id and location', () => {
			type Actual = Breakpoint
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('location')
		})
	})

	describe('BreakpointType', () => {
		it('should include source', () => {
			type Actual = BreakpointType
			expectTypeOf<'source'>().toMatchTypeOf<Actual>()
		})

		it('should include function', () => {
			type Actual = BreakpointType
			expectTypeOf<'function'>().toMatchTypeOf<Actual>()
		})
	})

	describe('DebugSession', () => {
		it('should have id and status', () => {
			type Actual = DebugSession
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('status')
		})
	})

	describe('StackTrace', () => {
		it('should have frames', () => {
			type Actual = StackTrace
			expectTypeOf<Actual>().toHaveProperty('frames')
		})
	})

	describe('Variable', () => {
		it('should have name and value', () => {
			type Actual = Variable
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('value')
		})
	})

	describe('DebugProtocol', () => {
		it('should be defined', () => {
			type Actual = DebugProtocol
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('REPL', () => {
		it('should have prompt and history', () => {
			type Actual = REPL
			expectTypeOf<Actual>().toHaveProperty('prompt')
			expectTypeOf<Actual>().toHaveProperty('history')
		})
	})

	describe('MemoryRegion', () => {
		it('should have address and size', () => {
			type Actual = MemoryRegion
			expectTypeOf<Actual>().toHaveProperty('address')
			expectTypeOf<Actual>().toHaveProperty('size')
		})
	})
})

describe('v1.8.0 - Optimizer Types', () => {
	describe('Optimization', () => {
		it('should have name and type', () => {
			type Actual = Optimization<string>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('type')
		})
	})

	describe('OptimizationLevel', () => {
		it('should include 0', () => {
			type Actual = OptimizationLevel
			expectTypeOf<0>().toMatchTypeOf<Actual>()
		})

		it('should include aggressive', () => {
			type Actual = OptimizationLevel
			expectTypeOf<'aggressive'>().toMatchTypeOf<Actual>()
		})
	})

	describe('TreeShake', () => {
		it('should have options property', () => {
			type Actual = TreeShake<string>
			expectTypeOf<Actual>().toHaveProperty('options')
		})
	})

	describe('DeadCode', () => {
		it('should have location and type', () => {
			type Actual = DeadCode
			expectTypeOf<Actual>().toHaveProperty('location')
			expectTypeOf<Actual>().toHaveProperty('type')
		})
	})

	describe('Inline', () => {
		it('should have threshold property', () => {
			type Actual = Inline<string>
			expectTypeOf<Actual>().toHaveProperty('threshold')
		})
	})

	describe('ConstantFold', () => {
		it('should be defined', () => {
			type Actual = ConstantFold<string>
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('HintLevel', () => {
		it('should include info', () => {
			type Actual = HintLevel
			expectTypeOf<'info'>().toMatchTypeOf<Actual>()
		})

		it('should include warning', () => {
			type Actual = HintLevel
			expectTypeOf<'warning'>().toMatchTypeOf<Actual>()
		})
	})

	describe('SideEffect', () => {
		it('should have type', () => {
			type Actual = SideEffect
			expectTypeOf<Actual>().toHaveProperty('type')
		})
	})
})

describe('v1.8.0 - Documentation Generator Types', () => {
	describe('Documentation', () => {
		it('should have entries and sections', () => {
			type Actual = Documentation<string>
			expectTypeOf<Actual>().toHaveProperty('entries')
			expectTypeOf<Actual>().toHaveProperty('sections')
		})
	})

	describe('DocGenEntry', () => {
		it('should have id and name', () => {
			type Actual = DocGenEntry<string>
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('name')
		})
	})

	describe('JSDoc', () => {
		it('should have description and tags', () => {
			type Actual = JSDoc<string>
			expectTypeOf<Actual>().toHaveProperty('description')
			expectTypeOf<Actual>().toHaveProperty('tags')
		})
	})

	describe('JSDocTag', () => {
		it('should have name and content', () => {
			type Actual = JSDocTag<string>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('content')
		})
	})

	describe('APIDoc', () => {
		it('should have endpoints', () => {
			type Actual = APIDoc<string>
			expectTypeOf<Actual>().toHaveProperty('endpoints')
		})
	})

	describe('APIEndpoint', () => {
		it('should have method and path', () => {
			type Actual = APIEndpoint<string>
			expectTypeOf<Actual>().toHaveProperty('method')
			expectTypeOf<Actual>().toHaveProperty('path')
		})
	})

	describe('DocFormat', () => {
		it('should include markdown', () => {
			type Actual = DocFormat
			expectTypeOf<'markdown'>().toMatchTypeOf<Actual>()
		})

		it('should include html', () => {
			type Actual = DocFormat
			expectTypeOf<'html'>().toMatchTypeOf<Actual>()
		})
	})

	describe('DocNavigation', () => {
		it('should be defined', () => {
			type Actual = DocNavigation<string>
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('SearchIndex', () => {
		it('should have entries', () => {
			type Actual = SearchIndex
			expectTypeOf<Actual>().toHaveProperty('entries')
		})
	})
})

describe('v1.8.0 - Test Framework Extended Types', () => {
	describe('Assert', () => {
		it('should have condition', () => {
			type Actual = Assert
			expectTypeOf<Actual>().toHaveProperty('condition')
		})
	})

	describe('AssertExtends', () => {
		it('should return true for valid extension', () => {
			type Actual = AssertExtends<string, string>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('Coverage', () => {
		it('should have lines and functions', () => {
			type Actual = Coverage
			expectTypeOf<Actual>().toHaveProperty('lines')
			expectTypeOf<Actual>().toHaveProperty('functions')
		})
	})

	describe('MockFunction', () => {
		it('should be defined', () => {
			type Actual = MockFunction
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('Snapshot', () => {
		it('should have data', () => {
			type Actual = Snapshot
			expectTypeOf<Actual>().toHaveProperty('data')
		})
	})

	describe('TestGroup', () => {
		it('should have name and tests', () => {
			type Actual = TestGroup
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('tests')
		})
	})

	describe('TimerMock', () => {
		it('should be defined', () => {
			type Actual = TimerMock
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('Worker', () => {
		it('should have id', () => {
			type Actual = Worker
			expectTypeOf<Actual>().toHaveProperty('id')
		})
	})
})

describe('v1.8.0 - Package Manager Types', () => {
	describe('PkgPackage', () => {
		it('should have name and version', () => {
			type Actual = PkgPackage<{ custom?: string }>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('version')
		})
	})

	describe('PackageName', () => {
		it('should be a string', () => {
			type Actual = PackageName
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})
	})

	describe('Dependencies', () => {
		it('should be a record type', () => {
			type Actual = Dependencies
			expectTypeOf<Record<string, DependencyVersion>>().toMatchTypeOf<Actual>()
		})
	})

	describe('DependencyType', () => {
		it('should include dependencies', () => {
			type Actual = DependencyType
			expectTypeOf<'dependencies'>().toMatchTypeOf<Actual>()
		})

		it('should include devDependencies', () => {
			type Actual = DependencyType
			expectTypeOf<'devDependencies'>().toMatchTypeOf<Actual>()
		})

		it('should include peerDependencies', () => {
			type Actual = DependencyType
			expectTypeOf<'peerDependencies'>().toMatchTypeOf<Actual>()
		})
	})

	describe('SemVer', () => {
		it('should have major and minor', () => {
			type Actual = SemVer
			expectTypeOf<Actual>().toHaveProperty('major')
			expectTypeOf<Actual>().toHaveProperty('minor')
			expectTypeOf<Actual>().toHaveProperty('patch')
		})
	})

	describe('SemVerRange', () => {
		it('should be a string', () => {
			type Actual = SemVerRange
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})
	})

	describe('LockFile', () => {
		it('should be defined', () => {
			type Actual = LockFile<string>
			expectTypeOf<Actual>().toBeObject()
		})
	})

	describe('LockFormat', () => {
		it('should include npm', () => {
			type Actual = LockFormat
			expectTypeOf<'npm'>().toMatchTypeOf<Actual>()
		})

		it('should include yarn', () => {
			type Actual = LockFormat
			expectTypeOf<'yarn'>().toMatchTypeOf<Actual>()
		})

		it('should include pnpm', () => {
			type Actual = LockFormat
			expectTypeOf<'pnpm'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Workspace', () => {
		it('should have name and path', () => {
			type Actual = Workspace<string>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('path')
		})
	})

	describe('ResolveStrategy', () => {
		it('should include latest', () => {
			type Actual = ResolveStrategy
			expectTypeOf<'latest'>().toMatchTypeOf<Actual>()
		})

		it('should include semver', () => {
			type Actual = ResolveStrategy
			expectTypeOf<'semver'>().toMatchTypeOf<Actual>()
		})
	})

	describe('LifecycleHook', () => {
		it('should include preinstall', () => {
			type Actual = LifecycleHook
			expectTypeOf<'preinstall'>().toMatchTypeOf<Actual>()
		})

		it('should include postinstall', () => {
			type Actual = LifecycleHook
			expectTypeOf<'postinstall'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Vulnerability', () => {
		it('should have id and severity', () => {
			type Actual = Vulnerability
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('severity')
		})
	})
})
