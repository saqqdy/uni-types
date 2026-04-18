import type {
	// v1.3.0 - Assert
	AssertEqual,
	AssertExtends,
	AssertKeyof,
	RequireKeys,
	MakeOptional,
	RequireAtLeastOne,
	// v1.3.0 - Async
	PromiseValue,
	PromiseResult,
	IsPromise,
	UnwrapPromise,
	WrapPromise,
	AsyncResult,
	AsyncSuccess,
	AsyncFailure,
	// v1.3.0 - Collection
	TypeSet,
	SetAdd,
	SetRemove,
	SetHas,
	SetUnion,
	SetIntersection,
	SetDifference,
	TypeMap,
	MapGet,
	MapSet,
	MapHas,
	MapKeys,
	MapValues,
	ListFilter,
	ListFind,
	ListIncludes,
	ListReverse,
	ListConcat,
	ListLength,
	// v1.3.0 - Object
	ObjectMap,
	ObjectFilter,
	ObjectPickByType,
	ObjectOmitByType,
	DeepMerge,
	HasProperty,
	HasProperties,
	IsEmptyObject,
	ObjectPath,
	PathExists,
	// v1.3.0 - Pattern
	Match,
	TypeFilter,
	TypeFind,
	TypeIncludes,
	TypeEvery,
	TypeSome,
	// v1.3.0 - String
	Split,
	Join,
	KebabCase,
	PascalCase,
	ConstantCase,
	DotCase,
	IsEmail,
	IsUUID,
	IsURL,
	IsNumeric,
	ReverseString,
	RemoveSpaces,
} from '../src/index'
import { describe, expectTypeOf, it } from 'vitest'

describe('v1.3.0 - Assert Types', () => {
	describe('AssertEqual', () => {
		it('should return type when equal', () => {
			type Actual = AssertEqual<string, string>
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})

		it('should return never when not equal', () => {
			type Actual = AssertEqual<string, number>
			expectTypeOf<Actual>().toEqualTypeOf<never>()
		})
	})

	describe('AssertExtends', () => {
		it('should return type when extends', () => {
			type Actual = AssertExtends<string, string | number>
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})

		it('should return never when not extends', () => {
			type Actual = AssertExtends<string, number>
			expectTypeOf<Actual>().toEqualTypeOf<never>()
		})
	})

	describe('RequireKeys', () => {
		it('should make specified keys required', () => {
			interface Input {
				a?: string
				b?: number
			}
			type Actual = RequireKeys<Input, 'a'>
			interface Expected {
				a: string
				b?: number
			}
			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})
	})

	describe('MakeOptional', () => {
		it('should make specified keys optional', () => {
			interface Input {
				a: string
				b: number
			}
			type Actual = MakeOptional<Input, 'a'>
			interface Expected {
				a?: string
				b: number
			}
			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})
	})
})

describe('v1.3.0 - Async Types', () => {
	describe('PromiseValue', () => {
		it('should extract value from Promise', () => {
			type Actual = PromiseValue<Promise<string>>
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})

		it('should unwrap nested promises', () => {
			type Actual = PromiseValue<Promise<Promise<number>>>
			expectTypeOf<Actual>().toEqualTypeOf<number>()
		})
	})

	describe('IsPromise', () => {
		it('should return true for Promise', () => {
			type Actual = IsPromise<Promise<string>>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false for non-Promise', () => {
			type Actual = IsPromise<string>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('UnwrapPromise', () => {
		it('should unwrap Promise', () => {
			type Actual = UnwrapPromise<Promise<string>>
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})

		it('should return original type if not Promise', () => {
			type Actual = UnwrapPromise<string>
			expectTypeOf<Actual>().toEqualTypeOf<string>()
		})
	})

	describe('AsyncResult', () => {
		it('should create result type', () => {
			type Actual = AsyncResult<string>
			expectTypeOf<Actual>().toEqualTypeOf<AsyncSuccess<string> | AsyncFailure<Error>>()
		})
	})
})

describe('v1.3.0 - Collection Types', () => {
	describe('SetHas', () => {
		it('should return true when element exists', () => {
			type Actual = SetHas<'a' | 'b', 'a'>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false when element does not exist', () => {
			type Actual = SetHas<'a' | 'b', 'c'>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('SetUnion', () => {
		it('should union two sets', () => {
			type Actual = SetUnion<'a' | 'b', 'b' | 'c'>
			expectTypeOf<Actual>().toEqualTypeOf<'a' | 'b' | 'c'>()
		})
	})

	describe('MapGet', () => {
		it('should get value from map', () => {
			type Actual = MapGet<{ a: 1; b: 2 }, 'a'>
			expectTypeOf<Actual>().toEqualTypeOf<1>()
		})

		it('should return never for missing key', () => {
			type Actual = MapGet<{ a: 1 }, 'b'>
			expectTypeOf<Actual>().toEqualTypeOf<never>()
		})
	})

	describe('ListFilter', () => {
		it('should filter by type', () => {
			type Actual = ListFilter<[1, 'a', 2, 'b'], string>
			expectTypeOf<Actual>().toEqualTypeOf<['a', 'b']>()
		})
	})

	describe('ListIncludes', () => {
		it('should return true when includes', () => {
			type Actual = ListIncludes<[1, 2, 3], 2>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false when not includes', () => {
			type Actual = ListIncludes<[1, 2, 3], 4>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('ListReverse', () => {
		it('should reverse list', () => {
			type Actual = ListReverse<[1, 2, 3]>
			expectTypeOf<Actual>().toEqualTypeOf<[3, 2, 1]>()
		})
	})
})

describe('v1.3.0 - Object Types', () => {
	describe('ObjectFilter', () => {
		it('should filter by type', () => {
			type Actual = ObjectFilter<{ a: string; b: number; c: string }, string>
			expectTypeOf<Actual>().toEqualTypeOf<{ a: string; c: string }>()
		})
	})

	describe('HasProperty', () => {
		it('should return true when has property', () => {
			type Actual = HasProperty<{ a: string }, 'a'>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false when not has property', () => {
			type Actual = HasProperty<{ a: string }, 'b'>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('IsEmptyObject', () => {
		it('should return true for empty object', () => {
			type Actual = IsEmptyObject<{}>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false for non-empty object', () => {
			type Actual = IsEmptyObject<{ a: 1 }>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('ObjectPath', () => {
		it('should get value at path', () => {
			type Actual = ObjectPath<{ a: { b: { c: 1 } } }, 'a.b.c'>
			expectTypeOf<Actual>().toEqualTypeOf<1>()
		})
	})

	describe('PathExists', () => {
		it('should return true when path exists', () => {
			type Actual = PathExists<{ a: { b: 1 } }, 'a.b'>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false when path does not exist', () => {
			type Actual = PathExists<{ a: { b: 1 } }, 'a.c'>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})
})

describe('v1.3.0 - Pattern Types', () => {
	describe('Match', () => {
		it('should match value', () => {
			type Actual = Match<'hello', { hello: 'greeting'; world: 'planet' }>
			expectTypeOf<Actual>().toEqualTypeOf<'greeting'>()
		})

		it('should use default case', () => {
			type Actual = Match<'unknown', { hello: 'greeting'; _: 'default' }>
			expectTypeOf<Actual>().toEqualTypeOf<'default'>()
		})
	})

	describe('TypeIncludes', () => {
		it('should return true when includes', () => {
			type Actual = TypeIncludes<[1, 2, 3], 2>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false when not includes', () => {
			type Actual = TypeIncludes<[1, 2, 3], 4>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('TypeEvery', () => {
		it('should return true when all match', () => {
			type Actual = TypeEvery<[1, 2, 3], number>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false when some do not match', () => {
			type Actual = TypeEvery<[1, 'a', 2], number>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('TypeSome', () => {
		it('should return true when some match', () => {
			type Actual = TypeSome<[1, 'a', 2], string>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false when none match', () => {
			type Actual = TypeSome<[1, 2, 3], string>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})
})

describe('v1.3.0 - String Types', () => {
	describe('Split', () => {
		it('should split string', () => {
			type Actual = Split<'a-b-c', '-'>
			expectTypeOf<Actual>().toEqualTypeOf<['a', 'b', 'c']>()
		})
	})

	describe('Join', () => {
		it('should join strings', () => {
			type Actual = Join<['a', 'b', 'c'], '-'>
			expectTypeOf<Actual>().toEqualTypeOf<'a-b-c'>()
		})
	})

	describe('KebabCase', () => {
		it('should convert to kebab-case', () => {
			type Actual = KebabCase<'fooBar'>
			expectTypeOf<Actual>().toEqualTypeOf<'foo-bar'>()
		})
	})

	describe('PascalCase', () => {
		it('should convert to PascalCase', () => {
			type Actual = PascalCase<'foo-bar'>
			expectTypeOf<Actual>().toEqualTypeOf<'FooBar'>()
		})
	})

	describe('IsEmail', () => {
		it('should return true for valid email', () => {
			type Actual = IsEmail<'test@example.com'>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false for invalid email', () => {
			type Actual = IsEmail<'invalid'>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('IsURL', () => {
		it('should return true for valid URL', () => {
			type Actual = IsURL<'https://example.com'>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false for invalid URL', () => {
			type Actual = IsURL<'not-a-url'>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('ReverseString', () => {
		it('should reverse string', () => {
			type Actual = ReverseString<'hello'>
			expectTypeOf<Actual>().toEqualTypeOf<'olleh'>()
		})
	})

	describe('RemoveSpaces', () => {
		it('should remove spaces', () => {
			type Actual = RemoveSpaces<'hello world'>
			expectTypeOf<Actual>().toEqualTypeOf<'helloworld'>()
		})
	})
})
