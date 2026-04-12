import type {
	AssertionFunction,
	Cached,
	CachedValue,
	Compact,
	ComponentProps,
	DeepSimplify,
	Deferred,
	ExactType,
	ForceEvaluate,
	GuardedType,
	HasRuntimeCheck,
	Lazy,
	MergeAll,
	MergeDefaultProps,
	Memoized,
	Normalize,
	OptionalProps,
	Optionalize,
	PickNonNullable,
	PickNullable,
	PrismaCreateInput,
	PrismaOrderByInput,
	PrismaScalarFields,
	PrismaUpdateInput,
	PrismaWhereInput,
	PropsWithChildren,
	PropsWithoutChildren,
	ReduceIntersection,
	RequiredProps,
	RuntimeGuard,
	Simplify,
	StripNever,
	StripUndefined,
	TRPCProcedureInput,
	TRPCProcedureOutput,
	TRPCProcedureType,
	TypeEq,
	VueEmitType,
	VueModelProps,
	VuePropType,
	YupOutput,
	YupInput,
	ZodOutput,
	ZodInput,
	IsZodSchema,
} from '../src/index'
import { describe, expectTypeOf, it } from 'vitest'

describe('v1.2.0 - Schema Runtime Types', () => {
	describe('RuntimeGuard', () => {
		it('should define a type guard function type', () => {
			const isString: RuntimeGuard<string> = (value): value is string =>
				typeof value === 'string'
			expectTypeOf(isString).toBeFunction()
		})
	})

	describe('GuardedType', () => {
		it('should extract the guarded type', () => {
			const isNumber = (value: unknown): value is number => typeof value === 'number'
			type Num = GuardedType<typeof isNumber>
			expectTypeOf<Num>().toEqualTypeOf<number>()
		})
	})

	describe('HasRuntimeCheck', () => {
		it('should return true for primitives', () => {
			expectTypeOf<HasRuntimeCheck<string>>().toEqualTypeOf<true>()
			expectTypeOf<HasRuntimeCheck<number>>().toEqualTypeOf<true>()
			expectTypeOf<HasRuntimeCheck<boolean>>().toEqualTypeOf<true>()
		})

		it('should return false for plain objects', () => {
			expectTypeOf<HasRuntimeCheck<{ a: string }>>().toEqualTypeOf<false>()
		})
	})

	describe('AssertionFunction', () => {
		it('should define assertion function type', () => {
			const assertString: AssertionFunction<string> = (value: unknown): asserts value is string => {
				if (typeof value !== 'string') throw new Error('Not a string')
			}
			expectTypeOf(assertString).toBeFunction()
		})
	})
})

describe('v1.2.0 - Zod Types', () => {
	describe('ZodOutput', () => {
		it('should extract output type from schema stub', () => {
			type Schema = { _output: { name: string } }
			type Output = ZodOutput<Schema>
			expectTypeOf<Output>().toEqualTypeOf<{ name: string }>()
		})
	})

	describe('ZodInput', () => {
		it('should extract input type from schema stub', () => {
			type Schema = { _input: { name?: string } }
			type Input = ZodInput<Schema>
			expectTypeOf<Input>().toEqualTypeOf<{ name?: string }>()
		})
	})

	describe('IsZodSchema', () => {
		it('should return true for schema-like types', () => {
			type Schema = { _def: { typeName: 'ZodString' } }
			expectTypeOf<IsZodSchema<Schema>>().toEqualTypeOf<true>()
		})

		it('should return false for non-schema types', () => {
			expectTypeOf<IsZodSchema<string>>().toEqualTypeOf<false>()
		})
	})
})

describe('v1.2.0 - Yup Types', () => {
	describe('YupOutput', () => {
		it('should extract output type from schema stub', () => {
			type Schema = { __outputType: { name: string } }
			type Output = YupOutput<Schema>
			expectTypeOf<Output>().toEqualTypeOf<{ name: string }>()
		})
	})

	describe('YupInput', () => {
		it('should extract input type from schema stub', () => {
			type Schema = { __inputType: { name?: string } }
			type Input = YupInput<Schema>
			expectTypeOf<Input>().toEqualTypeOf<{ name?: string }>()
		})
	})
})

describe('v1.2.0 - React Props Types', () => {
	describe('PropsWithChildren', () => {
		it('should add children to props', () => {
			type Props = PropsWithChildren<{ name: string }>
			expectTypeOf<Props>().toEqualTypeOf<{ name: string; children?: unknown }>()
		})
	})

	describe('PropsWithoutChildren', () => {
		it('should remove children from props', () => {
			type Props = PropsWithoutChildren<{ name: string; children: string }>
			expectTypeOf<Props>().toEqualTypeOf<{ name: string }>()
		})
	})

	describe('RequiredProps', () => {
		it('should get required props keys', () => {
			interface Props {
				name: string
				age?: number
			}
			expectTypeOf<RequiredProps<Props>>().toEqualTypeOf<'name'>()
		})
	})

	describe('OptionalProps', () => {
		it('should get optional props keys', () => {
			interface Props {
				name: string
				age?: number
			}
			expectTypeOf<OptionalProps<Props>>().toEqualTypeOf<'age'>()
		})
	})

	describe('MergeDefaultProps', () => {
		it('should merge default props', () => {
			interface Props {
				size?: 'sm' | 'md' | 'lg'
				variant?: 'primary' | 'secondary'
			}
			type WithDefaults = MergeDefaultProps<Props, { size: 'md' }>
			expectTypeOf<WithDefaults>().toEqualTypeOf<{
				size?: 'sm' | 'md' | 'lg'
				variant?: 'primary' | 'secondary'
			}>()
		})
	})
})

describe('v1.2.0 - Vue Props Types', () => {
	describe('VuePropType', () => {
		it('should define Vue prop type', () => {
			type Prop = VuePropType<string>
			expectTypeOf<Prop>().toEqualTypeOf<{
				type: abstract new (...args: any[]) => string & object
				required?: boolean
				default?: string
			}>()
		})
	})

	describe('VueEmitType', () => {
		it('should define Vue emit type', () => {
			type Emits = VueEmitType<{
				change: [value: string]
				submit: []
			}>
			expectTypeOf<Emits['change']>().toBeFunction()
		})
	})

	describe('VueModelProps', () => {
		it('should define v-model props', () => {
			type Model = VueModelProps<'modelValue', string>
			expectTypeOf<Model>().toEqualTypeOf<{
				modelValue: string
				'onUpdate:modelValue'?: ((value: string) => void) | undefined
			}>()
		})
	})
})

describe('v1.2.0 - tRPC Types', () => {
	describe('TRPCProcedureType', () => {
		it('should define procedure types', () => {
			expectTypeOf<TRPCProcedureType>().toEqualTypeOf<'query' | 'mutation' | 'subscription'>()
		})
	})

	describe('TRPCProcedureInput', () => {
		it('should extract input from procedure', () => {
			type Procedure = { _def: { inputs: [{ name: string }] } }
			type Input = TRPCProcedureInput<Procedure>
			expectTypeOf<Input>().toEqualTypeOf<{ name: string }>()
		})
	})

	describe('TRPCProcedureOutput', () => {
		it('should extract output from procedure', () => {
			type Procedure = { _def: { output: { id: string } } }
			type Output = TRPCProcedureOutput<Procedure>
			expectTypeOf<Output>().toEqualTypeOf<{ id: string }>()
		})
	})
})

describe('v1.2.0 - Prisma Types', () => {
	describe('PrismaCreateInput', () => {
		it('should create input type', () => {
			interface User {
				id: string
				name: string
				age?: number
			}
			type Create = PrismaCreateInput<User>
			expectTypeOf<Create['id']>().toEqualTypeOf<string>()
			expectTypeOf<Create['name']>().toEqualTypeOf<string>()
		})
	})

	describe('PrismaUpdateInput', () => {
		it('should create update input type', () => {
			interface User {
				id: string
				name: string
			}
			type Update = PrismaUpdateInput<User>
			expectTypeOf<Update>().toEqualTypeOf<{
				id?: string | null
				name?: string | null
			}>()
		})
	})

	describe('PrismaWhereInput', () => {
		it('should create where input type', () => {
			interface User {
				id: string
				name: string
			}
			type Where = PrismaWhereInput<User>
			expectTypeOf<Where['AND']>().toBeArray()
		})
	})

	describe('PrismaOrderByInput', () => {
		it('should create order by type', () => {
			interface User {
				name: string
				createdAt: Date
			}
			type OrderBy = PrismaOrderByInput<User>
			expectTypeOf<OrderBy>().toEqualTypeOf<{
				name?: 'asc' | 'desc'
				createdAt?: 'asc' | 'desc'
			}>()
		})
	})

	describe('PrismaScalarFields', () => {
		it('should extract scalar fields', () => {
			interface User {
				id: string
				name: string
				posts: { title: string }[]
			}
			type Scalars = PrismaScalarFields<User>
			expectTypeOf<Scalars>().toEqualTypeOf<'id' | 'name'>()
		})
	})
})

describe('v1.2.0 - Performance Types', () => {
	describe('Lazy', () => {
		it('should create lazy type', () => {
			type LazyString = Lazy<string>
			expectTypeOf<LazyString>().toEqualTypeOf<() => string>()
		})
	})

	describe('ForceEvaluate', () => {
		it('should force evaluate lazy type', () => {
			type Evaluated = ForceEvaluate<() => string>
			expectTypeOf<Evaluated>().toEqualTypeOf<string>()
		})
	})

	describe('Deferred', () => {
		it('should defer type', () => {
			type DeferredString = Deferred<string>
			expectTypeOf<DeferredString>().toEqualTypeOf<string>()
		})
	})

	describe('Simplify', () => {
		it('should simplify intersection', () => {
			type Complex = { a: string } & { b: number }
			type Simple = Simplify<Complex>
			expectTypeOf<Simple>().toEqualTypeOf<{ a: string; b: number }>()
		})
	})

	describe('DeepSimplify', () => {
		it('should deeply simplify', () => {
			type Nested = { a: { b: string } & { c: number } }
			type Deep = DeepSimplify<Nested>
			expectTypeOf<Deep['a']>().toEqualTypeOf<{ b: string; c: number }>()
		})
	})

	describe('Compact', () => {
		it('should remove never and undefined', () => {
			type Compacted = Compact<{ a: string; b: never }>
			expectTypeOf<Compacted>().toEqualTypeOf<{ a: string }>()
		})
	})

	describe('StripNever', () => {
		it('should remove never properties', () => {
			type Stripped = StripNever<{ a: string; b: never; c: number }>
			expectTypeOf<Stripped>().toEqualTypeOf<{ a: string; c: number }>()
		})
	})

	describe('StripUndefined', () => {
		it('should remove undefined properties', () => {
			type Stripped = StripUndefined<{ a: string; b?: undefined; c: number }>
			expectTypeOf<Stripped>().toEqualTypeOf<{ a: string; c: number }>()
		})
	})

	describe('MergeAll', () => {
		it('should merge all objects', () => {
			type Merged = MergeAll<[{ a: string }, { b: number }, { c: boolean }]>
			expectTypeOf<Merged>().toEqualTypeOf<{ a: string; b: number; c: boolean }>()
		})
	})

	describe('PickNonNullable', () => {
		it('should pick non-nullable properties', () => {
			type Picked = PickNonNullable<{ a: string; b: string | null; c: number | undefined }>
			expectTypeOf<Picked>().toEqualTypeOf<{ a: string }>()
		})
	})

	describe('PickNullable', () => {
		it('should pick nullable properties', () => {
			type Picked = PickNullable<{ a: string; b: string | null }>
			expectTypeOf<Picked>().toEqualTypeOf<{ b: string | null }>()
		})
	})

	describe('TypeEq', () => {
		it('should check type equality', () => {
			expectTypeOf<TypeEq<string, string>>().toEqualTypeOf<true>()
			expectTypeOf<TypeEq<string, number>>().toEqualTypeOf<false>()
		})
	})

	describe('ExactType', () => {
		it('should check exact type match', () => {
			type Exact = ExactType<{ a: string }, { a: string }>
			expectTypeOf<Exact>().toEqualTypeOf<{ a: string }>()
		})

		it('should return never for mismatch', () => {
			type NotExact = ExactType<{ a: string; b: number }, { a: string }>
			expectTypeOf<NotExact>().toEqualTypeOf<never>()
		})
	})

	describe('Normalize', () => {
		it('should normalize type', () => {
			type Normalized = Normalize<{ a?: string; b?: number }>
			expectTypeOf<Normalized>().toEqualTypeOf<{ a: string | undefined; b: number | undefined }>()
		})
	})

	describe('Optionalize', () => {
		it('should make all properties optional', () => {
			type Optional = Optionalize<{ a: string; b: number }>
			expectTypeOf<Optional>().toEqualTypeOf<{ a?: string; b?: number }>()
		})
	})

	describe('Cached', () => {
		it('should cache type', () => {
			type CachedString = Cached<string>
			expectTypeOf<CachedString>().toEqualTypeOf<{ __cached: string }>()
		})
	})

	describe('CachedValue', () => {
		it('should extract cached value', () => {
			type Value = CachedValue<Cached<string>>
			expectTypeOf<Value>().toEqualTypeOf<string>()
		})
	})

	describe('Memoized', () => {
		it('should memoize type', () => {
			type Memo = Memoized<{ a: string } & { b: number }>
			expectTypeOf<Memo>().toEqualTypeOf<{ a: string; b: number }>()
		})
	})

	describe('ReduceIntersection', () => {
		it('should reduce intersection', () => {
			type Reduced = ReduceIntersection<{ a: string } & { b: number }>
			expectTypeOf<Reduced>().toEqualTypeOf<{ a: string; b: number }>()
		})
	})
})
