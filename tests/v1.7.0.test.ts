import type {
	// v1.7.0 - Meta
	Reflect,
	TypeName,
	TypeCategory,
	GetTypeCategory,
	Transform,
	Apply,
	ComposeTypes,
	MergeTypes,
	Satisfies,
	ExtendsType,
	Exactly,
	Compatible,
	IsNullable,
	IsOptionalType,
	Construct,
	Deconstruct,
	FlattenType,
	Analyze,
	Depth,
	Width,
	Generate,
	TypeAtPath,
	SetTypeAtPath,
	// v1.7.0 - Decorator
	Decorator,
	ClassDecorator,
	MethodDecorator,
	PropertyDecorator,
	ParameterDecorator,
	AccessorDecorator,
	ClassDecoratorContext,
	ClassMethodDecoratorContext,
	ClassFieldDecoratorContext,
	ComposeDecorators,
	ChainDecorators,
	MetadataKey,
	MetadataValue,
	MetadataMap,
	DefineMetadata,
	GetMetadata,
	HasMetadata,
	DecoratorFactory,
	DecoratorOptions,
	Frozen,
	Sealed,
	ReadOnly,
	Deprecated,
	// v1.7.0 - Generate
	Template,
	TemplateString,
	TemplateResult,
	GeneratedType,
	GeneratedInterface,
	GeneratedClass,
	GeneratedFunction,
	TypeBuilder,
	InterfaceBuilder,
	ClassBuilder,
	FunctionBuilder,
	OutputFormat,
	FormattedOutput,
	GenerateFromSchema,
	SchemaField,
	// v1.7.0 - Framework
	RemixLoader,
	RemixAction,
	RemixMeta,
	RemixRoute,
	AstroProps,
	AstroFrontmatter,
	SvelteKitLoad,
	SvelteKitAction,
	SvelteKitPage,
	QwikComponent,
	QwikSignal,
	QwikStore,
	FreshHandler,
	FreshContext,
	ExpressHandler,
	ExpressRequest,
	ExpressResponse,
	FastifyHandler,
	FastifyRequest,
	FastifyReply,
	HonoHandler,
	HonoContext,
	NestController,
	NestService,
	NestModule,
	NestPipe,
	// v1.7.0 - Config
	ConfigSchema,
	ConfigField,
	ConfigFieldType,
	ConfigValidationResult,
	EnvConfig,
	EnvMapping,
	MultiSourceConfig,
	ConfigSource,
	ConfigPriority,
	ConfigBuilder,
	ConfigLoader,
	LoadResult,
	LoadError,
	LoadOptions,
	ConfigWatcher,
	ConfigChange,
	// v1.7.0 - Visualize
	TypeDiagram,
	TypeTree,
	TypeGraph,
	TypeGraphEdge,
	Debug,
	Inspect,
	Pretty,
	TypeDiff,
	AddedProperties,
	RemovedProperties,
	ChangedProperties,
	Similarity,
	Difference,
	Compatibility,
	TypeDoc,
	DocEntry,
	ASCIITree,
	ASCIITable,
	MermaidClassDiagram,
	// v1.7.0 - Crypto
	HashAlgorithm,
	HashResult,
	SHA256,
	Base64,
	Base64URL,
	Hex,
	URLEncoded,
	EncryptionAlgorithm,
	EncryptedData,
	Key,
	KeyPair,
	DerivedKey,
	SignatureAlgorithm,
	SignatureResult,
	Checksum,
	CRC32,
	JWT,
	JWTHeader,
	JWTPayload,
	// v1.7.0 - DateTime
	DateString,
	ISODate,
	ISODateTime,
	UnixTimestamp,
	Duration,
	TimeUnit,
	AddDays,
	AddMonths,
	AddYears,
	SubtractDays,
	DaysBetween,
	MonthsBetween,
	IsValidDate,
	IsLeapYear,
	DayOfWeek,
	DateFormat,
	TimeFormat,
	Timezone,
	UTCTime,
	LocalTime,
	// v1.7.0 - Math
	Add,
	Subtract,
	Multiply,
	Divide,
	Modulo,
	Power,
	Sqrt,
	Log,
	Abs,
	Sin,
	Cos,
	Tan,
	PI,
	GreaterThan,
	LessThan,
	Max,
	Min,
	IsPrime,
	Fibonacci,
	Factorial,
	Mean,
	Median,
	Mode,
	Variance,
	StdDev,
	BitAnd,
	BitOr,
	BitXor,
	IsEven,
	IsOdd,
	IsPositive,
	IsNegative,
	IsInteger,
	IsFloat,
	DegreesToRadians,
	RadiansToDegrees,
	// v1.7.0 - Search
	Sort,
	SortOrder,
	QuickSort,
	MergeSort,
	BinarySearch,
	LinearSearch,
	FindIndex,
	Includes,
	Filter,
	Reject,
	Take,
	Drop,
	GroupBy,
	Chunk,
	Partition,
	Union,
	Intersection,
	Difference as SetDifference,
	SymmetricDifference,
	IsSubset,
	Unique,
	Zip,
	Unzip,
	Flatten,
	Reverse,
	Every,
	Some,
} from '../src/index'
import { describe, expectTypeOf, it } from 'vitest'

describe('v1.7.0 - Metaprogramming Types', () => {
	describe('TypeName', () => {
		it('should return string for string type', () => {
			type Actual = TypeName<string>
			expectTypeOf<Actual>().toEqualTypeOf<'string'>()
		})

		it('should return number for number type', () => {
			type Actual = TypeName<number>
			expectTypeOf<Actual>().toEqualTypeOf<'number'>()
		})

		it('should return boolean for boolean type', () => {
			type Actual = TypeName<boolean>
			expectTypeOf<Actual>().toEqualTypeOf<'boolean'>()
		})
	})

	describe('GetTypeCategory', () => {
		it('should return primitive for string', () => {
			type Actual = GetTypeCategory<string>
			expectTypeOf<Actual>().toEqualTypeOf<'primitive'>()
		})

		it('should return literal for string literal', () => {
			type Actual = GetTypeCategory<'hello'>
			expectTypeOf<Actual>().toEqualTypeOf<'literal'>()
		})

		it('should return object for object', () => {
			type Actual = GetTypeCategory<{ a: string }>
			expectTypeOf<Actual>().toEqualTypeOf<'object'>()
		})
	})

	describe('MergeTypes', () => {
		it('should merge two object types', () => {
			type A = { a: string }
			type B = { b: number }
			type Actual = MergeTypes<A, B>
			expectTypeOf<{ a: string; b: number }>().toMatchTypeOf<Actual>()
		})
	})

	describe('IsNullable', () => {
		it('should return true for nullable type', () => {
			type Actual = IsNullable<string | null>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false for non-nullable type', () => {
			type Actual = IsNullable<string>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})
})

describe('v1.7.0 - Decorator Types', () => {
	describe('ClassDecorator', () => {
		it('should be a function type', () => {
			type Actual = ClassDecorator<abstract new (...args: unknown[]) => unknown>
			expectTypeOf<Actual>().toBeFunction()
		})
	})

	describe('MetadataKey', () => {
		it('should include string', () => {
			type Actual = MetadataKey
			expectTypeOf<string>().toMatchTypeOf<Actual>()
		})

		it('should include symbol', () => {
			type Actual = MetadataKey
			expectTypeOf<symbol>().toMatchTypeOf<Actual>()
		})
	})

	describe('Frozen', () => {
		it('should have readonly properties', () => {
			type Actual = Frozen<{ a: string; b: number }>
			expectTypeOf<{ readonly a: string; readonly b: number }>().toMatchTypeOf<Actual>()
		})
	})

	describe('ReadOnly', () => {
		it('should make all properties readonly', () => {
			type Actual = ReadOnly<{ a: string }>
			expectTypeOf<{ readonly a: string }>().toMatchTypeOf<Actual>()
		})
	})
})

describe('v1.7.0 - Code Generation Types', () => {
	describe('Template', () => {
		it('should have name and params', () => {
			type Actual = Template<{ value: string }>
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('params')
		})
	})

	describe('OutputFormat', () => {
		it('should include typescript', () => {
			type Actual = OutputFormat
			expectTypeOf<'typescript'>().toMatchTypeOf<Actual>()
		})

		it('should include javascript', () => {
			type Actual = OutputFormat
			expectTypeOf<'javascript'>().toMatchTypeOf<Actual>()
		})

		it('should include json', () => {
			type Actual = OutputFormat
			expectTypeOf<'json'>().toMatchTypeOf<Actual>()
		})
	})

	describe('GeneratedType', () => {
		it('should have name and type', () => {
			type Actual = GeneratedType
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('type')
		})
	})
})

describe('v1.7.0 - Framework Integration Types', () => {
	describe('RemixLoader', () => {
		it('should be a function', () => {
			type Actual = RemixLoader<{ data: string }>
			expectTypeOf<Actual>().toBeFunction()
		})
	})

	describe('SvelteKitLoad', () => {
		it('should be a function', () => {
			type Actual = SvelteKitLoad<{ id: string }, { data: string }>
			expectTypeOf<Actual>().toBeFunction()
		})
	})

	describe('ExpressHandler', () => {
		it('should be a function', () => {
			type Actual = ExpressHandler<{ id: string }, { result: string }>
			expectTypeOf<Actual>().toBeFunction()
		})
	})

	describe('HonoHandler', () => {
		it('should be a function', () => {
			type Actual = HonoHandler<{ id: string }>
			expectTypeOf<Actual>().toBeFunction()
		})
	})
})

describe('v1.7.0 - Config Types', () => {
	describe('ConfigFieldType', () => {
		it('should include string', () => {
			type Actual = ConfigFieldType
			expectTypeOf<'string'>().toMatchTypeOf<Actual>()
		})

		it('should include number', () => {
			type Actual = ConfigFieldType
			expectTypeOf<'number'>().toMatchTypeOf<Actual>()
		})

		it('should include boolean', () => {
			type Actual = ConfigFieldType
			expectTypeOf<'boolean'>().toMatchTypeOf<Actual>()
		})
	})

	describe('ConfigValidationResult', () => {
		it('should have valid and errors', () => {
			type Actual = ConfigValidationResult
			expectTypeOf<Actual>().toHaveProperty('valid')
			expectTypeOf<Actual>().toHaveProperty('errors')
		})
	})

	describe('EnvMapping', () => {
		it('should map env vars', () => {
			type Actual = EnvMapping<{ API_KEY: string; PORT: number }>
			expectTypeOf<{ API_KEY: string; PORT: number }>().toMatchTypeOf<Actual>()
		})
	})
})

describe('v1.7.0 - Visualization Types', () => {
	describe('TypeDiagram', () => {
		it('should have name and type', () => {
			type Actual = TypeDiagram
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('type')
		})
	})

	describe('TypeTree', () => {
		it('should have name and depth', () => {
			type Actual = TypeTree
			expectTypeOf<Actual>().toHaveProperty('name')
			expectTypeOf<Actual>().toHaveProperty('depth')
		})
	})

	describe('AddedProperties', () => {
		it('should identify added keys', () => {
			type Old = { a: string }
			type New = { a: string; b: number }
			type Actual = AddedProperties<Old, New>
			expectTypeOf<'b'>().toMatchTypeOf<Actual>()
		})
	})
})

describe('v1.7.0 - Cryptography Types', () => {
	describe('HashAlgorithm', () => {
		it('should include sha256', () => {
			type Actual = HashAlgorithm
			expectTypeOf<'sha256'>().toMatchTypeOf<Actual>()
		})

		it('should include sha512', () => {
			type Actual = HashAlgorithm
			expectTypeOf<'sha512'>().toMatchTypeOf<Actual>()
		})

		it('should include blake3', () => {
			type Actual = HashAlgorithm
			expectTypeOf<'blake3'>().toMatchTypeOf<Actual>()
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

	describe('JWTHeader', () => {
		it('should have alg and typ', () => {
			type Actual = JWTHeader
			expectTypeOf<Actual>().toHaveProperty('alg')
			expectTypeOf<Actual>().toHaveProperty('typ')
		})
	})
})

describe('v1.7.0 - DateTime Types', () => {
	describe('TimeUnit', () => {
		it('should include ms', () => {
			type Actual = TimeUnit
			expectTypeOf<'ms'>().toMatchTypeOf<Actual>()
		})

		it('should include s', () => {
			type Actual = TimeUnit
			expectTypeOf<'s'>().toMatchTypeOf<Actual>()
		})

		it('should include h', () => {
			type Actual = TimeUnit
			expectTypeOf<'h'>().toMatchTypeOf<Actual>()
		})
	})

	describe('DayOfWeek', () => {
		it('should include monday', () => {
			type Actual = DayOfWeek
			expectTypeOf<'monday'>().toMatchTypeOf<Actual>()
		})

		it('should include sunday', () => {
			type Actual = DayOfWeek
			expectTypeOf<'sunday'>().toMatchTypeOf<Actual>()
		})
	})

	describe('DateFormat', () => {
		it('should include YYYY-MM-DD', () => {
			type Actual = DateFormat
			expectTypeOf<'YYYY-MM-DD'>().toMatchTypeOf<Actual>()
		})
	})
})

describe('v1.7.0 - Math Types', () => {
	describe('PI', () => {
		it('should be defined', () => {
			type Actual = PI
			expectTypeOf<3.141592653589793>().toMatchTypeOf<Actual>()
		})
	})

	describe('IsEven', () => {
		it('should return true for even', () => {
			type Actual = IsEven<4>
			expectTypeOf<Actual>().toEqualTypeOf<boolean>()
		})
	})

	describe('IsPositive', () => {
		it('should return boolean', () => {
			type Actual = IsPositive<5>
			expectTypeOf<Actual>().toEqualTypeOf<boolean>()
		})
	})

	describe('DegreesToRadians', () => {
		it('should be a number', () => {
			type Actual = DegreesToRadians<180>
			expectTypeOf<Actual>().toEqualTypeOf<number>()
		})
	})
})

describe('v1.7.0 - Search Types', () => {
	describe('SortOrder', () => {
		it('should include asc', () => {
			type Actual = SortOrder
			expectTypeOf<'asc'>().toMatchTypeOf<Actual>()
		})

		it('should include desc', () => {
			type Actual = SortOrder
			expectTypeOf<'desc'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Unique', () => {
		it('should be an array', () => {
			type Actual = Unique<[1, 2, 2, 3]>
			expectTypeOf<Actual>().toEqualTypeOf<unknown[]>()
		})
	})

	describe('Zip', () => {
		it('should pair elements', () => {
			type Actual = Zip<[1, 2], ['a', 'b']>
			expectTypeOf<[[1, 'a'], [2, 'b']]>().toMatchTypeOf<Actual>()
		})
	})

	describe('Reverse', () => {
		it('should reverse tuple', () => {
			type Actual = Reverse<[1, 2, 3]>
			expectTypeOf<[3, 2, 1]>().toMatchTypeOf<Actual>()
		})
	})

	describe('Chunk', () => {
		it('should chunk array', () => {
			type Actual = Chunk<[1, 2, 3, 4], 2>
			expectTypeOf<unknown[][]>().toMatchTypeOf<Actual>()
		})
	})
})