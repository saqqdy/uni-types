import type {
	// v1.6.0 - AI/ML
	Tensor,
	TensorShape,
	TensorRank,
	TensorDType,
	Model,
	ModelConfig,
	Layer,
	LayerType,
	Optimizer,
	LossFunction,
	MLMetric,
	ActivationFunction,
	Dataset,
	DataLoader,
	Batch,
	InferenceResult,
	Prediction,
	Confidence,
	// v1.6.0 - Functional Programming
	Functor,
	Monad,
	Applicative,
	Maybe,
	Some,
	None,
	Either,
	Left,
	Right,
	IO,
	Reader,
	Writer,
	State,
	Result,
	Ok,
	Err,
	Lens,
	Getter,
	Setter,
	Compose,
	Pipe,
	Curry,
	Semigroup,
	Monoid,
	Eq,
	Ord,
	Ordering,
	// v1.6.0 - Compiler
	ASTNode,
	ASTNodeType,
	ASTProgram,
	ASTExpression,
	ASTStatement,
	Token,
	TokenType,
	TokenStream,
	Parser,
	ParserResult,
	ParseError,
	CodeGenerator,
	GeneratedCode,
	SourceMap,
	Transformer,
	TransformPipeline,
	Formatter,
	FormatOptions,
	// v1.6.0 - Distributed
	ConsensusState,
	Consensus,
	LeaderElection,
	Vote,
	Replica,
	ReplicaStatus,
	ReplicationStrategy,
	Partition,
	PartitionStrategy,
	Sharding,
	ConsistencyLevel,
	VectorClock,
	LamportClock,
	DistributedLock,
	LockAcquireResult,
	Lease,
	TwoPhaseCommit,
	TransactionState,
	FailureDetector,
	NodeStatusType,
	Heartbeat,
	Membership,
	MembershipStatus,
	// v1.6.0 - Security
	Authentication,
	AuthType,
	AuthStatus,
	AuthProvider,
	AuthToken,
	AuthResult,
	Session,
	SessionId,
	Encryption,
	EncryptionAlgorithm,
	Key,
	KeyPair,
	Hash,
	HashAlgorithm,
	Signature,
	SignatureAlgorithm,
	CSRFToken,
	OAuthToken,
	OAuthProviderType,
	JWT,
	JWTHeader,
	JWTPayload,
	// v1.6.0 - i18n
	Locale,
	LocaleCode,
	LocaleConfig,
	Translation,
	TranslationKey,
	TranslationValue,
	PluralForm,
	MessageFormat,
	MessageParams,
	DateFormat,
	TimeFormat,
	TimeZone,
	Currency,
	NumberFormat,
	Direction,
	RegionType,
	CountryCode,
	LanguageCode,
	// v1.6.0 - Testing
	TestSuite,
	TestCase,
	TestResultType,
	TestConfig,
	Assertion,
	AssertionResult,
	AssertionError,
	ExpectType,
	Mock,
	MockConfig,
	MockCall,
	Spy,
	Fixture,
	FixtureConfig,
	Coverage,
	CoverageReport,
	CoverageThreshold,
	Snapshot,
	SnapshotResult,
	Benchmark,
	BenchmarkResult,
	BenchmarkConfig,
	PerformanceMetric as TestPerformanceMetric,
	// v1.6.0 - Plugin
	Plugin,
	PluginConfig,
	PluginContext,
	PluginLifecycle,
	Hook,
	HookConfig,
	HookResult,
	HookCallback,
	Extension,
	ExtensionPoint,
	ExtensionConfig,
	ExtensionRegistry,
	Middleware,
	MiddlewareConfig,
	MiddlewarePipeline,
	Module,
	ModuleConfig,
	ModuleExport,
	ModuleImport,
	Registry,
	RegistryEntry,
	RegistryConfig,
	// v1.6.0 - Inference
	Infer,
	InferReturn,
	InferArgs,
	InferPromise,
	ExtractFunction,
	ExtractClass,
	ExtractConstructor,
	ExtractMethod,
	Reconstruct,
	ReconstructDeep,
	Narrow,
	NarrowTo,
	Widen,
	WidenLiteral,
	IsAny,
	IsNever,
	IsUnknown,
	IsFunction,
	IsObject,
	IsArray,
	IsTuple,
	IsString,
	IsNumber,
	IsBoolean,
	IsUnion,
	Equals,
	Extends,
	TypeName,
	TypeCategory,
	// v1.6.0 - Monitoring
	Performance,
	PerformanceMetric,
	PerformanceEntry,
	PerformanceMark,
	Timing,
	TimingResult,
	MemoryUsage,
	MemoryMetric,
	MemorySnapshot,
	CPUUsage,
	CPUMetric,
	Profiler,
	ProfileResult,
	ProfileFrame,
	ProfileStack,
	PerformanceTrace,
	TraceSpan,
	TraceContext,
	PerformanceBenchmark,
	BenchmarkSuite,
	BenchmarkComparison,
	MetricsRegistry,
	PerformanceAlert,
} from '../src/index'
import { describe, expectTypeOf, it } from 'vitest'

describe('v1.6.0 - AI/ML Types', () => {
	describe('Tensor', () => {
		it('should have shape and dtype', () => {
			type Actual = Tensor<[2, 3], 'float32'>
			expectTypeOf<Actual>().toHaveProperty('shape')
			expectTypeOf<Actual>().toHaveProperty('dtype')
		})
	})

	describe('TensorDType', () => {
		it('should include float32', () => {
			type Actual = TensorDType
			expectTypeOf<'float32'>().toMatchTypeOf<Actual>()
		})

		it('should include int32', () => {
			type Actual = TensorDType
			expectTypeOf<'int32'>().toMatchTypeOf<Actual>()
		})

		it('should include bool', () => {
			type Actual = TensorDType
			expectTypeOf<'bool'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Model', () => {
		it('should have name and version', () => {
			type Actual = Model
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('version')
		})
	})

	describe('Optimizer', () => {
		it('should include adam', () => {
			type Actual = Optimizer
			expectTypeOf<'adam'>().toMatchTypeOf<Actual>()
		})

		it('should include sgd', () => {
			type Actual = Optimizer
			expectTypeOf<'sgd'>().toMatchTypeOf<Actual>()
		})
	})

	describe('LossFunction', () => {
		it('should include mse', () => {
			type Actual = LossFunction
			expectTypeOf<'mse'>().toMatchTypeOf<Actual>()
		})

		it('should include crossentropy', () => {
			type Actual = LossFunction
			expectTypeOf<'crossentropy'>().toMatchTypeOf<Actual>()
		})
	})

	describe('LayerType', () => {
		it('should include dense', () => {
			type Actual = LayerType
			expectTypeOf<'dense'>().toMatchTypeOf<Actual>()
		})

		it('should include conv2d', () => {
			type Actual = LayerType
			expectTypeOf<'conv2d'>().toMatchTypeOf<Actual>()
		})

		it('should include lstm', () => {
			type Actual = LayerType
			expectTypeOf<'lstm'>().toMatchTypeOf<Actual>()
		})
	})

	describe('ActivationFunction', () => {
		it('should include relu', () => {
			type Actual = ActivationFunction
			expectTypeOf<'relu'>().toMatchTypeOf<Actual>()
		})

		it('should include sigmoid', () => {
			type Actual = ActivationFunction
			expectTypeOf<'sigmoid'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Dataset', () => {
		it('should have size and shape', () => {
			type Actual = Dataset
			expectTypeOf<Actual>().toHaveProperty('size')
			expectTypeOf<Actual>().toHaveProperty('shape')
		})
	})

	describe('Prediction', () => {
		it('should have label and probability', () => {
			type Actual = Prediction
			expectTypeOf<Actual>().toHaveProperty('label')
			expectTypeOf<Actual>().toHaveProperty('probability')
		})
	})
})

describe('v1.6.0 - Functional Programming Types', () => {
	describe('Functor', () => {
		it('should have map method', () => {
			type Actual = Functor<number>
			expectTypeOf<Actual>().toHaveProperty('map')
		})
	})

	describe('Monad', () => {
		it('should have bind and return', () => {
			type Actual = Monad<number>
			expectTypeOf<Actual>().toHaveProperty('bind')
			expectTypeOf<Actual>().toHaveProperty('return')
		})
	})

	describe('Maybe', () => {
		it('should be Some or None', () => {
			type Actual = Maybe<string>
			expectTypeOf<Some<string> | None>().toMatchTypeOf<Actual>()
		})
	})

	describe('Either', () => {
		it('should be Left or Right', () => {
			type Actual = Either<string, number>
			expectTypeOf<Left<string> | Right<number>>().toMatchTypeOf<Actual>()
		})
	})

	describe('IO', () => {
		it('should have run method', () => {
			type Actual = IO<string>
			expectTypeOf<Actual>().toHaveProperty('run')
		})
	})

	describe('Reader', () => {
		it('should have run method', () => {
			type Actual = Reader<string, number>
			expectTypeOf<Actual>().toHaveProperty('run')
		})
	})

	describe('State', () => {
		it('should have run and eval methods', () => {
			type Actual = State<string, number>
			expectTypeOf<Actual>().toHaveProperty('run')
			expectTypeOf<Actual>().toHaveProperty('eval')
		})
	})

	describe('Result', () => {
		it('should be Ok or Err', () => {
			type Actual = Result<string, Error>
			expectTypeOf<Ok<string> | Err<Error>>().toMatchTypeOf<Actual>()
		})
	})

	describe('Semigroup', () => {
		it('should have concat method', () => {
			type Actual = Semigroup<string>
			expectTypeOf<Actual>().toHaveProperty('concat')
		})
	})

	describe('Monoid', () => {
		it('should have empty method', () => {
			type Actual = Monoid<string>
			expectTypeOf<Actual>().toHaveProperty('empty')
		})
	})

	describe('Lens', () => {
		it('should have get and set methods', () => {
			type Actual = Lens<{ a: string }, string>
			expectTypeOf<Actual>().toHaveProperty('get')
			expectTypeOf<Actual>().toHaveProperty('set')
		})
	})

	describe('Ordering', () => {
		it('should be -1, 0, or 1', () => {
			type Actual = Ordering
			expectTypeOf<-1 | 0 | 1>().toMatchTypeOf<Actual>()
		})
	})
})

describe('v1.6.0 - Compiler Types', () => {
	describe('ASTNode', () => {
		it('should have type property', () => {
			type Actual = ASTNode
			expectTypeOf<Actual>().toHaveProperty('type')
		})
	})

	describe('TokenType', () => {
		it('should include keyword', () => {
			type Actual = TokenType
			expectTypeOf<'keyword'>().toMatchTypeOf<Actual>()
		})

		it('should include identifier', () => {
			type Actual = TokenType
			expectTypeOf<'identifier'>().toMatchTypeOf<Actual>()
		})

		it('should include operator', () => {
			type Actual = TokenType
			expectTypeOf<'operator'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Parser', () => {
		it('should have parse method', () => {
			type Actual = Parser
			expectTypeOf<Actual>().toHaveProperty('parse')
		})
	})

	describe('ParserResult', () => {
		it('should have success property', () => {
			type Actual = ParserResult<ASTNode>
			expectTypeOf<{ success: boolean }>().toMatchTypeOf<Actual>()
		})
	})

	describe('CodeGenerator', () => {
		it('should have generate method', () => {
			type Actual = CodeGenerator
			expectTypeOf<Actual>().toHaveProperty('generate')
		})
	})

	describe('Transformer', () => {
		it('should have transform method', () => {
			type Actual = Transformer
			expectTypeOf<Actual>().toHaveProperty('transform')
		})
	})
})

describe('v1.6.0 - Distributed Systems Types', () => {
	describe('ConsensusState', () => {
		it('should include leader', () => {
			type Actual = ConsensusState
			expectTypeOf<'leader'>().toMatchTypeOf<Actual>()
		})

		it('should include follower', () => {
			type Actual = ConsensusState
			expectTypeOf<'follower'>().toMatchTypeOf<Actual>()
		})

		it('should include candidate', () => {
			type Actual = ConsensusState
			expectTypeOf<'candidate'>().toMatchTypeOf<Actual>()
		})
	})

	describe('ReplicationStrategy', () => {
		it('should include sync', () => {
			type Actual = ReplicationStrategy
			expectTypeOf<'sync'>().toMatchTypeOf<Actual>()
		})

		it('should include async', () => {
			type Actual = ReplicationStrategy
			expectTypeOf<'async'>().toMatchTypeOf<Actual>()
		})
	})

	describe('PartitionStrategy', () => {
		it('should include hash', () => {
			type Actual = PartitionStrategy
			expectTypeOf<'hash'>().toMatchTypeOf<Actual>()
		})

		it('should include range', () => {
			type Actual = PartitionStrategy
			expectTypeOf<'range'>().toMatchTypeOf<Actual>()
		})
	})

	describe('ConsistencyLevel', () => {
		it('should include strong', () => {
			type Actual = ConsistencyLevel
			expectTypeOf<'strong'>().toMatchTypeOf<Actual>()
		})

		it('should include eventual', () => {
			type Actual = ConsistencyLevel
			expectTypeOf<'eventual'>().toMatchTypeOf<Actual>()
		})
	})

	describe('DistributedLock', () => {
		it('should have lock and unlock methods', () => {
			type Actual = DistributedLock
			expectTypeOf<Actual>().toHaveProperty('lock')
			expectTypeOf<Actual>().toHaveProperty('unlock')
		})
	})

	describe('TransactionState', () => {
		it('should include committed', () => {
			type Actual = TransactionState
			expectTypeOf<'committed'>().toMatchTypeOf<Actual>()
		})

		it('should include aborted', () => {
			type Actual = TransactionState
			expectTypeOf<'aborted'>().toMatchTypeOf<Actual>()
		})
	})

	describe('NodeStatusType', () => {
		it('should include alive', () => {
			type Actual = NodeStatusType
			expectTypeOf<'alive'>().toMatchTypeOf<Actual>()
		})

		it('should include dead', () => {
			type Actual = NodeStatusType
			expectTypeOf<'dead'>().toMatchTypeOf<Actual>()
		})
	})
})

describe('v1.6.0 - Security Types', () => {
	describe('AuthType', () => {
		it('should include bearer', () => {
			type Actual = AuthType
			expectTypeOf<'bearer'>().toMatchTypeOf<Actual>()
		})

		it('should include jwt', () => {
			type Actual = AuthType
			expectTypeOf<'jwt'>().toMatchTypeOf<Actual>()
		})

		it('should include oauth2', () => {
			type Actual = AuthType
			expectTypeOf<'oauth2'>().toMatchTypeOf<Actual>()
		})
	})

	describe('AuthStatus', () => {
		it('should include authenticated', () => {
			type Actual = AuthStatus
			expectTypeOf<'authenticated'>().toMatchTypeOf<Actual>()
		})

		it('should include failed', () => {
			type Actual = AuthStatus
			expectTypeOf<'failed'>().toMatchTypeOf<Actual>()
		})
	})

	describe('EncryptionAlgorithm', () => {
		it('should include aes-256-gcm', () => {
			type Actual = EncryptionAlgorithm
			expectTypeOf<'aes-256-gcm'>().toMatchTypeOf<Actual>()
		})

		it('should include chacha20-poly1305', () => {
			type Actual = EncryptionAlgorithm
			expectTypeOf<'chacha20-poly1305'>().toMatchTypeOf<Actual>()
		})
	})

	describe('HashAlgorithm', () => {
		it('should include sha256', () => {
			type Actual = HashAlgorithm
			expectTypeOf<'sha256'>().toMatchTypeOf<Actual>()
		})

		it('should include blake3', () => {
			type Actual = HashAlgorithm
			expectTypeOf<'blake3'>().toMatchTypeOf<Actual>()
		})
	})

	describe('SignatureAlgorithm', () => {
		it('should include rsa-sha256', () => {
			type Actual = SignatureAlgorithm
			expectTypeOf<'rsa-sha256'>().toMatchTypeOf<Actual>()
		})

		it('should include ed25519', () => {
			type Actual = SignatureAlgorithm
			expectTypeOf<'ed25519'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Session', () => {
		it('should have id and data', () => {
			type Actual = Session
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('data')
		})
	})

	describe('JWT', () => {
		it('should have header, payload and signature', () => {
			type Actual = JWT
			expectTypeOf<Actual>().toHaveProperty('header')
			expectTypeOf<Actual>().toHaveProperty('payload')
			expectTypeOf<Actual>().toHaveProperty('signature')
		})
	})
})

describe('v1.6.0 - i18n Types', () => {
	describe('LocaleCode', () => {
		it('should include en-US', () => {
			type Actual = LocaleCode
			expectTypeOf<'en-US'>().toMatchTypeOf<Actual>()
		})

		it('should include zh-CN', () => {
			type Actual = LocaleCode
			expectTypeOf<'zh-CN'>().toMatchTypeOf<Actual>()
		})

		it('should include ja-JP', () => {
			type Actual = LocaleCode
			expectTypeOf<'ja-JP'>().toMatchTypeOf<Actual>()
		})
	})

	describe('PluralForm', () => {
		it('should include one', () => {
			type Actual = PluralForm
			expectTypeOf<'one'>().toMatchTypeOf<Actual>()
		})

		it('should include many', () => {
			type Actual = PluralForm
			expectTypeOf<'many'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Currency', () => {
		it('should include USD', () => {
			type Actual = Currency
			expectTypeOf<'USD'>().toMatchTypeOf<Actual>()
		})

		it('should include CNY', () => {
			type Actual = Currency
			expectTypeOf<'CNY'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Direction', () => {
		it('should include ltr', () => {
			type Actual = Direction
			expectTypeOf<'ltr'>().toMatchTypeOf<Actual>()
		})

		it('should include rtl', () => {
			type Actual = Direction
			expectTypeOf<'rtl'>().toMatchTypeOf<Actual>()
		})
	})
})

describe('v1.6.0 - Testing Framework Types', () => {
	describe('TestResultType', () => {
		it('should include passed', () => {
			type Actual = TestResultType
			expectTypeOf<'passed'>().toMatchTypeOf<Actual>()
		})

		it('should include failed', () => {
			type Actual = TestResultType
			expectTypeOf<'failed'>().toMatchTypeOf<Actual>()
		})

		it('should include skipped', () => {
			type Actual = TestResultType
			expectTypeOf<'skipped'>().toMatchTypeOf<Actual>()
		})
	})

	describe('TestSuite', () => {
		it('should have name and tests', () => {
			type Actual = TestSuite
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('tests')
		})
	})

	describe('Mock', () => {
		it('should have mockImplementation', () => {
			type Actual = Mock<() => string>
			expectTypeOf<Actual>().toHaveProperty('mockImplementation')
		})
	})

	describe('Coverage', () => {
		it('should have lines and functions', () => {
			type Actual = Coverage
			expectTypeOf<Actual>().toHaveProperty('lines')
			expectTypeOf<Actual>().toHaveProperty('functions')
		})
	})

	describe('CoverageThreshold', () => {
		it('should have lines and branches', () => {
			type Actual = CoverageThreshold
			expectTypeOf<{ lines?: number }>().toMatchTypeOf<Actual>()
		})
	})

	describe('Benchmark', () => {
		it('should have name and fn', () => {
			type Actual = Benchmark
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('fn')
		})
	})
})

describe('v1.6.0 - Plugin System Types', () => {
	describe('Plugin', () => {
		it('should have name and version', () => {
			type Actual = Plugin
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('version')
		})

		it('should have install method', () => {
			type Actual = Plugin
			expectTypeOf<Actual>().toHaveProperty('install')
		})
	})

	describe('PluginLifecycle', () => {
		it('should include init', () => {
			type Actual = PluginLifecycle
			expectTypeOf<'init'>().toMatchTypeOf<Actual>()
		})

		it('should include start', () => {
			type Actual = PluginLifecycle
			expectTypeOf<'start'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Hook', () => {
		it('should have name and subscribers', () => {
			type Actual = Hook
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('subscribers')
		})
	})

	describe('Extension', () => {
		it('should have id and name', () => {
			type Actual = Extension
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('name')
		})
	})

	describe('Middleware', () => {
		it('should be a function type', () => {
			type Actual = Middleware
			expectTypeOf<Actual>().toBeFunction()
		})
	})

	describe('Module', () => {
		it('should have name and exports', () => {
			type Actual = Module
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('exports')
		})
	})

	describe('Registry', () => {
		it('should have register and get methods', () => {
			type Actual = Registry
			expectTypeOf<Actual>().toHaveProperty('register')
			expectTypeOf<Actual>().toHaveProperty('get')
		})
	})
})

describe('v1.6.0 - Type Inference Types', () => {
	describe('Infer', () => {
		it('should extract type from promise', () => {
			type Actual = Infer<Promise<string>>
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})
	})

	describe('InferReturn', () => {
		it('should extract return type', () => {
			type Actual = InferReturn<() => string>
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})
	})

	describe('InferArgs', () => {
		it('should extract arguments type', () => {
			type Actual = InferArgs<(a: string, b: number) => void>
			expectTypeOf<Actual>().toEqualTypeOf<[string, number]>()
		})
	})

	describe('IsAny', () => {
		it('should return true for any', () => {
			type Actual = IsAny<any>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('IsNever', () => {
		it('should return true for never', () => {
			type Actual = IsNever<never>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('IsUnknown', () => {
		it('should return true for unknown', () => {
			type Actual = IsUnknown<unknown>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('IsFunction', () => {
		it('should return true for function', () => {
			type Actual = IsFunction<() => void>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('IsArray', () => {
		it('should return true for array', () => {
			type Actual = IsArray<string[]>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('IsUnion', () => {
		it('should return true for union', () => {
			type Actual = IsUnion<string | number>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('Equals', () => {
		it('should return true for equal types', () => {
			type Actual = Equals<string, string>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('TypeName', () => {
		it('should return string for string type', () => {
			type Actual = TypeName<string>
			expectTypeOf<Actual>().toEqualTypeOf<'string'>()
		})

		it('should return number for number type', () => {
			type Actual = TypeName<number>
			expectTypeOf<Actual>().toEqualTypeOf<'number'>()
		})
	})
})

describe('v1.6.0 - Performance Monitoring Types', () => {
	describe('Performance', () => {
		it('should have now and mark methods', () => {
			type Actual = Performance
			expectTypeOf<Actual>().toHaveProperty('now')
			expectTypeOf<Actual>().toHaveProperty('mark')
		})
	})

	describe('PerformanceMetric', () => {
		it('should have name and value', () => {
			type Actual = PerformanceMetric
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('value')
		})
	})

	describe('MemoryUsage', () => {
		it('should have heapUsed and heapTotal', () => {
			type Actual = MemoryUsage
			expectTypeOf<Actual>().toHaveProperty('heapUsed')
			expectTypeOf<Actual>().toHaveProperty('heapTotal')
		})
	})

	describe('CPUUsage', () => {
		it('should have user and system', () => {
			type Actual = CPUUsage
			expectTypeOf<Actual>().toHaveProperty('user')
			expectTypeOf<Actual>().toHaveProperty('system')
		})
	})

	describe('Profiler', () => {
		it('should have start and stop methods', () => {
			type Actual = Profiler
			expectTypeOf<Actual>().toHaveProperty('start')
			expectTypeOf<Actual>().toHaveProperty('stop')
		})
	})

	describe('ProfileFrame', () => {
		it('should have name and duration', () => {
			type Actual = ProfileFrame
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('duration')
		})
	})

	describe('TraceSpan', () => {
		it('should have traceId and spanId', () => {
			type Actual = TraceSpan
			expectTypeOf<Actual>().toHaveProperty('traceId')
			expectTypeOf<Actual>().toHaveProperty('spanId')
		})
	})

	describe('PerformanceBenchmark', () => {
		it('should have name and fn', () => {
			type Actual = PerformanceBenchmark
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('fn')
		})
	})

	describe('MetricsRegistry', () => {
		it('should have register and record methods', () => {
			type Actual = MetricsRegistry
			expectTypeOf<Actual>().toHaveProperty('register')
			expectTypeOf<Actual>().toHaveProperty('record')
		})
	})
})
