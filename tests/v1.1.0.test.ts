import type {
	Add,
	And,
	Assert,
	AsyncReturnType,
	ArrayPaths,
	Brand,
	CapitalizeAll,
	Dec,
	DeepNullable,
	DeepNonNullable,
	DeepOmit,
	DeepOptional,
	DeepPick,
	EndsWith,
	Exact,
	GreaterThan,
	If,
	Immutable,
	Inc,
	IsAsyncFunction,
	IsEven,
	IsFunction,
	IsOdd,
	Keys,
	KeysByValueType,
	LessThan,
	Max,
	Min,
	Mutable,
	Neg,
	NthParameter,
	Not,
	Or,
	Parameters,
	PadEnd,
	PadStart,
	ParentPath,
	PathLeaf,
	PathLength,
	PrefixKeys,
	Range,
	RenameKeys,
	Repeat,
	Replace,
	ReplaceAll,
	ReturnType,
	StartsWith,
	StringToArray,
	StringLength,
	Subtract,
	SuffixKeys,
	Trim,
	TrimLeft,
	TrimRight,
	Unbrand,
	ValidPath,
} from '../src/index'
import { describe, expectTypeOf, it } from 'vitest'

describe('v1.1.0 - Conditional Types', () => {
	describe('If', () => {
		it('should return T when condition is true', () => {
			expectTypeOf<If<true, string, number>>().toEqualTypeOf<string>()
		})

		it('should return F when condition is false', () => {
			expectTypeOf<If<false, string, number>>().toEqualTypeOf<number>()
		})
	})

	describe('Not', () => {
		it('should negate true to false', () => {
			expectTypeOf<Not<true>>().toEqualTypeOf<false>()
		})

		it('should negate false to true', () => {
			expectTypeOf<Not<false>>().toEqualTypeOf<true>()
		})
	})

	describe('And', () => {
		it('should return true when both are true', () => {
			expectTypeOf<And<true, true>>().toEqualTypeOf<true>()
		})

		it('should return false when one is false', () => {
			expectTypeOf<And<true, false>>().toEqualTypeOf<false>()
			expectTypeOf<And<false, true>>().toEqualTypeOf<false>()
			expectTypeOf<And<false, false>>().toEqualTypeOf<false>()
		})
	})

	describe('Or', () => {
		it('should return true when one is true', () => {
			expectTypeOf<Or<true, true>>().toEqualTypeOf<true>()
			expectTypeOf<Or<true, false>>().toEqualTypeOf<true>()
			expectTypeOf<Or<false, true>>().toEqualTypeOf<true>()
		})

		it('should return false when both are false', () => {
			expectTypeOf<Or<false, false>>().toEqualTypeOf<false>()
		})
	})

	describe('Assert', () => {
		it('should return T when T extends U', () => {
			expectTypeOf<Assert<string | number, string>>().toEqualTypeOf<string>()
		})

		it('should return never when T does not extend U', () => {
			expectTypeOf<Assert<string, number>>().toEqualTypeOf<never>()
		})
	})
})

describe('v1.1.0 - Brand Types', () => {
	describe('Brand', () => {
		it('should create a branded type', () => {
			type UserId = Brand<string, 'UserId'>
			const userId = 'user-123' as UserId
			expectTypeOf(userId).toEqualTypeOf<UserId>()
		})
	})

	describe('Unbrand', () => {
		it('should extract the underlying type', () => {
			type UserId = Brand<string, 'UserId'>
			expectTypeOf<Unbrand<UserId>>().toEqualTypeOf<string>()
		})

		it('should return original type if not branded', () => {
			expectTypeOf<Unbrand<string>>().toEqualTypeOf<string>()
		})
	})
})

describe('v1.1.0 - Deep Path Operations', () => {
	describe('DeepOmit', () => {
		it('should omit nested property by path', () => {
			interface User {
				profile: {
					name: string
					email: string
					settings: {
						theme: string
						lang: string
					}
				}
			}

			type Result = DeepOmit<User, 'profile.settings'>
			expectTypeOf<Result['profile']>().toEqualTypeOf<{
				name: string
				email: string
			}>()
		})
	})

	describe('DeepPick', () => {
		it('should pick nested property by path', () => {
			interface User {
				profile: {
					name: string
					email: string
					settings: {
						theme: string
						lang: string
					}
				}
			}

			type Result = DeepPick<User, 'profile.name'>
			expectTypeOf<Result['profile']>().toEqualTypeOf<{ name: string }>()
		})
	})
})

describe('v1.1.0 - Enhanced Path Types', () => {
	describe('ValidPath', () => {
		it('should return true for valid path', () => {
			interface Obj {
				a: {
					b: string
				}
			}
			expectTypeOf<ValidPath<Obj, 'a'>>().toEqualTypeOf<true>()
			expectTypeOf<ValidPath<Obj, 'a.b'>>().toEqualTypeOf<true>()
		})

		it('should return false for invalid path', () => {
			interface Obj {
				a: {
					b: string
				}
			}
			expectTypeOf<ValidPath<Obj, 'c'>>().toEqualTypeOf<false>()
			expectTypeOf<ValidPath<Obj, 'a.c'>>().toEqualTypeOf<false>()
		})
	})

	describe('ArrayPaths', () => {
		it('should include array indices in paths', () => {
			interface Users {
				users: { name: string }[]
			}
			type Paths = ArrayPaths<Users>
			expectTypeOf<'users'>().toMatchTypeOf<Paths>()
			expectTypeOf<`${number}`>().toMatchTypeOf<Paths>()
		})
	})

	describe('PathLength', () => {
		it('should return the number of segments', () => {
			expectTypeOf<PathLength<'a.b.c'>>().toEqualTypeOf<3>()
			expectTypeOf<PathLength<'single'>>().toEqualTypeOf<1>()
		})
	})

	describe('ParentPath', () => {
		it('should return the parent path', () => {
			expectTypeOf<ParentPath<'a.b.c'>>().toEqualTypeOf<'a.b'>()
			expectTypeOf<ParentPath<'a'>>().toEqualTypeOf<''>()
		})
	})

	describe('PathLeaf', () => {
		it('should return the last segment', () => {
			expectTypeOf<PathLeaf<'a.b.c'>>().toEqualTypeOf<'c'>()
			expectTypeOf<PathLeaf<'a'>>().toEqualTypeOf<'a'>()
		})
	})
})

describe('v1.1.0 - Key Utilities', () => {
	describe('Keys', () => {
		it('should return all keys', () => {
			expectTypeOf<Keys<{ a: string; b: number }>>().toEqualTypeOf<'a' | 'b'>()
		})
	})

	describe('RenameKeys', () => {
		it('should rename keys based on mapping', () => {
			type Result = RenameKeys<{ oldName: string }, { oldName: 'newName' }>
			expectTypeOf<Result>().toEqualTypeOf<{ newName: string }>()
		})
	})

	describe('PrefixKeys', () => {
		it('should prefix all keys', () => {
			type Result = PrefixKeys<{ a: string; b: number }, 'data'>
			expectTypeOf<Result>().toEqualTypeOf<{ dataA: string; dataB: number }>()
		})
	})

	describe('SuffixKeys', () => {
		it('should suffix all keys', () => {
			type Result = SuffixKeys<{ a: string; b: number }, 'Data'>
			expectTypeOf<Result>().toEqualTypeOf<{ aData: string; bData: number }>()
		})
	})

	describe('KeysByValueType', () => {
		it('should return keys by value type', () => {
			interface User {
				name: string
				age: number
				email: string
			}
			expectTypeOf<KeysByValueType<User, string>>().toEqualTypeOf<'name' | 'email'>()
		})
	})
})

describe('v1.1.0 - Function Utilities', () => {
	describe('Parameters', () => {
		it('should get function parameters', () => {
			type Fn = (a: string, b: number) => boolean
			expectTypeOf<Parameters<Fn>>().toEqualTypeOf<[string, number]>()
		})
	})

	describe('ReturnType', () => {
		it('should get function return type', () => {
			type Fn = (a: string) => number
			expectTypeOf<ReturnType<Fn>>().toEqualTypeOf<number>()
		})
	})

	describe('NthParameter', () => {
		it('should get Nth parameter type', () => {
			type Fn = (a: string, b: number, c: boolean) => void
			expectTypeOf<NthParameter<Fn, 0>>().toEqualTypeOf<string>()
			expectTypeOf<NthParameter<Fn, 1>>().toEqualTypeOf<number>()
			expectTypeOf<NthParameter<Fn, 2>>().toEqualTypeOf<boolean>()
		})
	})

	describe('AsyncReturnType', () => {
		it('should unwrap Promise from async function', () => {
			type AsyncFn = () => Promise<string>
			expectTypeOf<AsyncReturnType<AsyncFn>>().toEqualTypeOf<string>()
		})
	})

	describe('IsFunction', () => {
		it('should return true for function types', () => {
			expectTypeOf<IsFunction<() => void>>().toEqualTypeOf<true>()
		})

		it('should return false for non-function types', () => {
			expectTypeOf<IsFunction<string>>().toEqualTypeOf<false>()
		})
	})

	describe('IsAsyncFunction', () => {
		it('should return true for async function types', () => {
			expectTypeOf<IsAsyncFunction<() => Promise<string>>>().toEqualTypeOf<true>()
		})

		it('should return false for sync function types', () => {
			expectTypeOf<IsAsyncFunction<() => string>>().toEqualTypeOf<false>()
		})
	})
})

describe('v1.1.0 - Template Literal Utilities', () => {
	describe('ReplaceAll', () => {
		it('should replace all occurrences', () => {
			expectTypeOf<ReplaceAll<'hello world world', 'world', 'there'>>().toEqualTypeOf<'hello there there'>()
		})
	})

	describe('Replace', () => {
		it('should replace first occurrence', () => {
			expectTypeOf<Replace<'hello world world', 'world', 'there'>>().toEqualTypeOf<'hello there world'>()
		})
	})

	describe('Trim', () => {
		it('should trim whitespace', () => {
			expectTypeOf<Trim<'  hello  '>>().toEqualTypeOf<'hello'>()
		})
	})

	describe('TrimLeft', () => {
		it('should trim left whitespace', () => {
			expectTypeOf<TrimLeft<'  hello  '>>().toEqualTypeOf<'hello  '>()
		})
	})

	describe('TrimRight', () => {
		it('should trim right whitespace', () => {
			expectTypeOf<TrimRight<'  hello  '>>().toEqualTypeOf<'  hello'>()
		})
	})

	describe('StringToArray', () => {
		it('should convert string to array', () => {
			expectTypeOf<StringToArray<'abc'>>().toEqualTypeOf<['a', 'b', 'c']>()
		})
	})

	describe('CapitalizeAll', () => {
		it('should capitalize all words', () => {
			expectTypeOf<CapitalizeAll<'hello world'>>().toEqualTypeOf<'Hello World'>()
		})
	})

	describe('StartsWith', () => {
		it('should check if string starts with prefix', () => {
			expectTypeOf<StartsWith<'hello world', 'hello'>>().toEqualTypeOf<true>()
			expectTypeOf<StartsWith<'hello world', 'world'>>().toEqualTypeOf<false>()
		})
	})

	describe('EndsWith', () => {
		it('should check if string ends with suffix', () => {
			expectTypeOf<EndsWith<'hello world', 'world'>>().toEqualTypeOf<true>()
			expectTypeOf<EndsWith<'hello world', 'hello'>>().toEqualTypeOf<false>()
		})
	})

	describe('StringLength', () => {
		it('should get string length', () => {
			expectTypeOf<StringLength<'hello'>>().toEqualTypeOf<5>()
		})
	})

	describe('Repeat', () => {
		it('should repeat string N times', () => {
			expectTypeOf<Repeat<'ab', 3>>().toEqualTypeOf<'ababab'>()
		})
	})

	describe('PadStart', () => {
		it('should pad string on the left', () => {
			expectTypeOf<PadStart<'5', 3, '0'>>().toEqualTypeOf<'005'>()
		})
	})

	describe('PadEnd', () => {
		it('should pad string on the right', () => {
			expectTypeOf<PadEnd<'5', 3, '0'>>().toEqualTypeOf<'500'>()
		})
	})
})

describe('v1.1.0 - Record Utilities', () => {
	describe('DeepNullable', () => {
		it('should make all properties nullable', () => {
			interface Input {
				a: { b: string }
			}
			type Result = DeepNullable<Input>
			expectTypeOf<Result['a']>().toEqualTypeOf<{ b: string | null } | null>()
		})
	})

	describe('DeepOptional', () => {
		it('should make all properties optional', () => {
			interface Input {
				a: { b: string }
			}
			type Result = DeepOptional<Input>
			expectTypeOf<Result['a']>().toEqualTypeOf<{ b?: string } | undefined>()
		})
	})

	describe('Immutable', () => {
		it('should make all properties readonly', () => {
			interface Input {
				a: { b: string }
			}
			type Result = Immutable<Input>
			expectTypeOf<Result['a']>().toEqualTypeOf<{ readonly b: string }>()
		})
	})

	describe('Mutable', () => {
		it('should make all properties mutable', () => {
			interface Input {
				readonly a: { readonly b: string }
			}
			type Result = Mutable<Input>
			expectTypeOf<Result['a']>().toEqualTypeOf<{ b: string }>()
		})
	})

	describe('DeepNonNullable', () => {
		it('should remove null and undefined from all properties', () => {
			interface Input {
				a: string | null
				b: number | undefined
			}
			type Result = DeepNonNullable<Input>
			expectTypeOf<Result['a']>().toEqualTypeOf<string>()
			expectTypeOf<Result['b']>().toEqualTypeOf<number>()
		})
	})

	describe('Exact', () => {
		it('should return type when keys match exactly', () => {
			type Result = Exact<{ a: string }, { a: string }>
			expectTypeOf<Result>().toEqualTypeOf<{ a: string }>()
		})

		it('should return never when keys do not match', () => {
			type Result = Exact<{ a: string }, { a: string; b: number }>
			expectTypeOf<Result>().toEqualTypeOf<never>()
		})
	})
})

describe('v1.1.0 - Numeric Utilities', () => {
	describe('Inc', () => {
		it('should increment a number', () => {
			expectTypeOf<Inc<5>>().toEqualTypeOf<6>()
			expectTypeOf<Inc<0>>().toEqualTypeOf<1>()
		})
	})

	describe('Dec', () => {
		it('should decrement a number', () => {
			expectTypeOf<Dec<5>>().toEqualTypeOf<4>()
			expectTypeOf<Dec<1>>().toEqualTypeOf<0>()
		})

		it('should clamp at 0', () => {
			expectTypeOf<Dec<0>>().toEqualTypeOf<0>()
		})
	})

	describe('Add', () => {
		it('should add two numbers', () => {
			expectTypeOf<Add<3, 4>>().toEqualTypeOf<7>()
			expectTypeOf<Add<0, 5>>().toEqualTypeOf<5>()
		})
	})

	describe('Subtract', () => {
		it('should subtract two numbers', () => {
			expectTypeOf<Subtract<10, 3>>().toEqualTypeOf<7>()
		})

		it('should clamp at 0', () => {
			expectTypeOf<Subtract<5, 10>>().toEqualTypeOf<0>()
		})
	})

	describe('GreaterThan', () => {
		it('should return true when A > B', () => {
			expectTypeOf<GreaterThan<5, 3>>().toEqualTypeOf<true>()
		})

		it('should return false when A <= B', () => {
			expectTypeOf<GreaterThan<3, 5>>().toEqualTypeOf<false>()
			expectTypeOf<GreaterThan<5, 5>>().toEqualTypeOf<false>()
		})
	})

	describe('LessThan', () => {
		it('should return true when A < B', () => {
			expectTypeOf<LessThan<3, 5>>().toEqualTypeOf<true>()
		})

		it('should return false when A >= B', () => {
			expectTypeOf<LessThan<5, 3>>().toEqualTypeOf<false>()
			expectTypeOf<LessThan<5, 5>>().toEqualTypeOf<false>()
		})
	})

	describe('Max', () => {
		it('should return the maximum', () => {
			expectTypeOf<Max<3, 5>>().toEqualTypeOf<5>()
			expectTypeOf<Max<5, 3>>().toEqualTypeOf<5>()
		})
	})

	describe('Min', () => {
		it('should return the minimum', () => {
			expectTypeOf<Min<3, 5>>().toEqualTypeOf<3>()
			expectTypeOf<Min<5, 3>>().toEqualTypeOf<3>()
		})
	})

	describe('IsEven', () => {
		it('should return true for even numbers', () => {
			expectTypeOf<IsEven<4>>().toEqualTypeOf<true>()
		})

		it('should return false for odd numbers', () => {
			expectTypeOf<IsEven<5>>().toEqualTypeOf<false>()
		})
	})

	describe('IsOdd', () => {
		it('should return true for odd numbers', () => {
			expectTypeOf<IsOdd<5>>().toEqualTypeOf<true>()
		})

		it('should return false for even numbers', () => {
			expectTypeOf<IsOdd<4>>().toEqualTypeOf<false>()
		})
	})

	describe('Neg', () => {
		it('should negate positive numbers', () => {
			expectTypeOf<Neg<5>>().toEqualTypeOf<-5>()
		})
	})
})
