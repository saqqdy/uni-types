import type {
	ArrayElement,
	AtLeastOne,
	Awaited,
	CamelCase,
	CamelCaseKeys,
	DataOnly,
	DeepMutable,
	DeepPartial,
	DeepReadonly,
	DeepRequired,
	FirstParameter,
	Flatten,
	FunctionKeys,
	FunctionOnly,
	Head,
	Init,
	IsAny,
	IsArray,
	IsEmptyTuple,
	IsEqual,
	IsNever,
	IsTuple,
	IsUnknown,
	Last,
	Literal,
	LiteralBoolean,
	LiteralNumber,
	LiteralString,
	LoosePartial,
	Maybe,
	Merge,
	NonFunctionKeys,
	NonNullable,
	NoNullish,
	Nullable,
	OmitPartial,
	OmitRequired,
	Optional,
	OptionalKeys,
	Paths,
	PathValue,
	PickPartial,
	PickRequired,
	ReadonlyKeys,
	RequiredKeys,
	Reverse,
	SnakeCase,
	SnakeCaseKeys,
	SplitPath,
	StrictExclude,
	StrictExtract,
	Tail,
	TupleLength,
	UnionToIntersection,
	UnionToTuple,
	ValueOf,
	WritableKeys,
} from '../src/index'
import type { Exclusive } from '../src/utils'
import { describe, expectTypeOf, it } from 'vitest'

describe('Core Types', () => {
	describe('PickRequired', () => {
		it('should make specified properties required', () => {
			interface Input { a?: string, b?: number, c: boolean }
			interface Expected { a: string, b?: number, c: boolean }
			type Actual = PickRequired<Input, 'a'>

			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})

		it('should support multiple properties', () => {
			interface Input { a?: string, b?: number, c?: boolean }
			interface Expected { a: string, b: number, c?: boolean }
			type Actual = PickRequired<Input, 'a' | 'b'>

			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})

		it('should work with empty object', () => {
			type Actual = PickRequired<{}, never>
			expectTypeOf<Actual>().toEqualTypeOf<{}>()
		})
	})

	describe('OmitRequired', () => {
		it('should make properties required except specified ones', () => {
			interface Input { a?: string, b?: number, c?: boolean }
			interface Expected { a?: string, b: number, c: boolean }
			type Actual = OmitRequired<Input, 'a'>

			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})
	})

	describe('PickPartial', () => {
		it('should make specified properties optional', () => {
			interface Input { a: string, b: number, c: boolean }
			interface Expected { a?: string, b: number, c: boolean }
			type Actual = PickPartial<Input, 'a'>

			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})
	})

	describe('OmitPartial', () => {
		it('should make properties optional except specified ones', () => {
			interface Input { a: string, b: number, c: boolean }
			interface Expected { a: string, b?: number, c?: boolean }
			type Actual = OmitPartial<Input, 'a'>

			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})
	})
})

describe('Tuple Operations', () => {
	describe('Head', () => {
		it('should get first element of tuple', () => {
			expectTypeOf<Head<[1, 2, 3]>>().toEqualTypeOf<1>()
			expectTypeOf<Head<['a', 'b']>>().toEqualTypeOf<'a'>()
		})

		it('should work with single element tuple', () => {
			expectTypeOf<Head<[string]>>().toEqualTypeOf<string>()
		})

		it('should work with arrays', () => {
			expectTypeOf<Head<string[]>>().toEqualTypeOf<string>()
			expectTypeOf<Head<number[]>>().toEqualTypeOf<number>()
		})
	})

	describe('Last', () => {
		it('should get last element of tuple', () => {
			expectTypeOf<Last<[1, 2, 3]>>().toEqualTypeOf<3>()
			expectTypeOf<Last<['a', 'b']>>().toEqualTypeOf<'b'>()
		})

		it('should work with arrays', () => {
			expectTypeOf<Last<string[]>>().toEqualTypeOf<string>()
		})
	})

	describe('Tail', () => {
		it('should get all elements except first', () => {
			expectTypeOf<Tail<[1, 2, 3]>>().toEqualTypeOf<[2, 3]>()
			expectTypeOf<Tail<['a', 'b', 'c']>>().toEqualTypeOf<['b', 'c']>()
		})

		it('should return empty tuple for single element', () => {
			expectTypeOf<Tail<[1]>>().toEqualTypeOf<[]>()
		})
	})

	describe('Init', () => {
		it('should get all elements except last', () => {
			expectTypeOf<Init<[1, 2, 3]>>().toEqualTypeOf<[1, 2]>()
		})

		it('should return empty tuple for single element', () => {
			expectTypeOf<Init<[1]>>().toEqualTypeOf<[]>()
		})
	})

	describe('Reverse', () => {
		it('should reverse tuple', () => {
			expectTypeOf<Reverse<[1, 2, 3]>>().toEqualTypeOf<[3, 2, 1]>()
		})

		it('should work with empty tuple', () => {
			expectTypeOf<Reverse<[]>>().toEqualTypeOf<[]>()
		})
	})

	describe('Flatten', () => {
		it('should flatten nested tuples', () => {
			expectTypeOf<Flatten<[1, [2, [3]]]>>().toEqualTypeOf<[1, 2, 3]>()
		})
	})

	describe('TupleLength', () => {
		it('should get tuple length', () => {
			expectTypeOf<TupleLength<[1, 2, 3]>>().toEqualTypeOf<3>()
			expectTypeOf<TupleLength<[]>>().toEqualTypeOf<0>()
		})
	})

	describe('IsEmptyTuple', () => {
		it('should check if tuple is empty', () => {
			expectTypeOf<IsEmptyTuple<[]>>().toEqualTypeOf<true>()
			expectTypeOf<IsEmptyTuple<[1]>>().toEqualTypeOf<false>()
		})
	})
})

describe('Deep Operations', () => {
	describe('DeepPartial', () => {
		it('should make all nested properties optional', () => {
			interface Input {
				a: {
					b: {
						c: string
					}
				}
			}
			interface Expected {
				a?: {
					b?: {
						c?: string
					}
				}
			}
			type Actual = DeepPartial<Input>

			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})

		it('should handle arrays correctly', () => {
			interface Input {
				arr: string[]
			}
			type Actual = DeepPartial<Input>

			// Arrays should remain arrays (not become objects)
			expectTypeOf<Actual['arr']>().toMatchTypeOf<(string | undefined)[] | undefined>()
		})

		it('should preserve built-in types', () => {
			interface Input {
				date: Date
				fn: () => void
			}
			type Actual = DeepPartial<Input>

			expectTypeOf<Actual['date']>().toEqualTypeOf<Date | undefined>()
			expectTypeOf<Actual['fn']>().toEqualTypeOf<(() => void) | undefined>()
		})
	})

	describe('DeepRequired', () => {
		it('should make all nested properties required', () => {
			interface Input {
				a?: {
					b?: {
						c?: string
					}
				}
			}
			interface Expected {
				a: {
					b: {
						c: string
					}
				}
			}
			type Actual = DeepRequired<Input>

			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})

		it('should handle arrays correctly', () => {
			interface Input {
				arr?: (string | undefined)[]
			}
			type Actual = DeepRequired<Input>

			expectTypeOf<Actual['arr']>().toMatchTypeOf<string[]>()
		})
	})

	describe('DeepReadonly', () => {
		it('should make all nested properties readonly', () => {
			interface Input {
				a: {
					b: string
				}
			}
			interface Expected {
				readonly a: {
					readonly b: string
				}
			}
			type Actual = DeepReadonly<Input>

			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})
	})

	describe('DeepMutable', () => {
		it('should make all nested properties mutable', () => {
			interface Input {
				readonly a: {
					readonly b: string
				}
			}
			interface Expected {
				a: {
					b: string
				}
			}
			type Actual = DeepMutable<Input>

			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})

		it('should work with readonly arrays', () => {
			type Input = readonly string[]
			type Actual = DeepMutable<Input>

			expectTypeOf<Actual>().toEqualTypeOf<string[]>()
		})
	})
})

describe('Type Guards', () => {
	describe('IsArray', () => {
		it('should return true for array types', () => {
			expectTypeOf<IsArray<string[]>>().toEqualTypeOf<true>()
			expectTypeOf<IsArray<number[]>>().toEqualTypeOf<true>()
			expectTypeOf<IsArray<readonly string[]>>().toEqualTypeOf<true>()
		})

		it('should return false for non-array types', () => {
			expectTypeOf<IsArray<string>>().toEqualTypeOf<false>()
			expectTypeOf<IsArray<number>>().toEqualTypeOf<false>()
			expectTypeOf<IsArray<{ length: number }>>().toEqualTypeOf<false>()
		})
	})

	describe('IsTuple', () => {
		it('should return true for tuple types', () => {
			expectTypeOf<IsTuple<[string, number]>>().toEqualTypeOf<true>()
			expectTypeOf<IsTuple<[string]>>().toEqualTypeOf<true>()
			expectTypeOf<IsTuple<readonly [number, string]>>().toEqualTypeOf<true>()
		})

		it('should return false for array types', () => {
			expectTypeOf<IsTuple<string[]>>().toEqualTypeOf<false>()
			expectTypeOf<IsTuple<number[]>>().toEqualTypeOf<false>()
		})
	})

	describe('IsEqual', () => {
		it('should return true for equal types', () => {
			expectTypeOf<IsEqual<string, string>>().toEqualTypeOf<true>()
			expectTypeOf<IsEqual<number, number>>().toEqualTypeOf<true>()
			expectTypeOf<IsEqual<{ a: string }, { a: string }>>().toEqualTypeOf<true>()
		})

		it('should return false for different types', () => {
			expectTypeOf<IsEqual<string, number>>().toEqualTypeOf<false>()
			expectTypeOf<IsEqual<{ a: string }, { a: number }>>().toEqualTypeOf<false>()
		})

		it('should distinguish any and unknown', () => {
			expectTypeOf<IsEqual<any, unknown>>().toEqualTypeOf<false>()
		})
	})

	describe('IsAny', () => {
		it('should return true for any type', () => {
			expectTypeOf<IsAny<any>>().toEqualTypeOf<true>()
		})

		it('should return false for non-any types', () => {
			expectTypeOf<IsAny<string>>().toEqualTypeOf<false>()
			expectTypeOf<IsAny<unknown>>().toEqualTypeOf<false>()
		})
	})

	describe('IsNever', () => {
		it('should return true for never type', () => {
			expectTypeOf<IsNever<never>>().toEqualTypeOf<true>()
		})

		it('should return false for non-never types', () => {
			expectTypeOf<IsNever<string>>().toEqualTypeOf<false>()
			expectTypeOf<IsNever<undefined>>().toEqualTypeOf<false>()
		})
	})

	describe('IsUnknown', () => {
		it('should return true for unknown type', () => {
			expectTypeOf<IsUnknown<unknown>>().toEqualTypeOf<true>()
		})

		it('should return false for non-unknown types', () => {
			expectTypeOf<IsUnknown<string>>().toEqualTypeOf<false>()
			expectTypeOf<IsUnknown<any>>().toEqualTypeOf<false>()
		})
	})
})

describe('Type Inference', () => {
	describe('Awaited', () => {
		it('should unwrap Promise types', () => {
			expectTypeOf<Awaited<Promise<string>>>().toEqualTypeOf<string>()
			expectTypeOf<Awaited<Promise<Promise<number>>>>().toEqualTypeOf<number>()
		})

		it('should preserve non-Promise types', () => {
			expectTypeOf<Awaited<string>>().toEqualTypeOf<string>()
		})
	})

	describe('ArrayElement', () => {
		it('should get array element type', () => {
			expectTypeOf<ArrayElement<string[]>>().toEqualTypeOf<string>()
			expectTypeOf<ArrayElement<number[]>>().toEqualTypeOf<number>()
			expectTypeOf<ArrayElement<(string | number)[]>>().toEqualTypeOf<string | number>()
		})
	})

	describe('ValueOf', () => {
		it('should get object value type', () => {
			expectTypeOf<ValueOf<{ a: string, b: number }>>().toEqualTypeOf<string | number>()
		})
	})

	describe('FunctionKeys', () => {
		it('should get function type keys', () => {
			interface Obj {
				name: string
				onClick: () => void
				onChange: (v: string) => void
			}
			expectTypeOf<FunctionKeys<Obj>>().toEqualTypeOf<'onClick' | 'onChange'>()
		})

		it('should return never for object without functions', () => {
			interface Obj { name: string }
			expectTypeOf<FunctionKeys<Obj>>().toEqualTypeOf<never>()
		})
	})

	describe('NonFunctionKeys', () => {
		it('should get non-function type keys', () => {
			interface Obj {
				name: string
				age: number
				onClick: () => void
			}
			expectTypeOf<NonFunctionKeys<Obj>>().toEqualTypeOf<'name' | 'age'>()
		})
	})

	describe('FirstParameter', () => {
		it('should get first parameter type', () => {
			type Fn = (first: string, second: number) => void
			expectTypeOf<FirstParameter<Fn>>().toEqualTypeOf<string>()
		})

		it('should return never for functions without parameters', () => {
			type Fn = () => void
			expectTypeOf<FirstParameter<Fn>>().toEqualTypeOf<never>()
		})
	})
})

describe('Utility Types', () => {
	describe('FunctionOnly', () => {
		it('should extract function properties', () => {
			interface Obj {
				name: string
				onClick: () => void
			}
			expectTypeOf<FunctionOnly<Obj>>().toEqualTypeOf<{ onClick: () => void }>()
		})
	})

	describe('DataOnly', () => {
		it('should extract non-function properties', () => {
			interface Obj {
				name: string
				onClick: () => void
			}
			expectTypeOf<DataOnly<Obj>>().toEqualTypeOf<{ name: string }>()
		})
	})

	describe('Merge', () => {
		it('should merge two types', () => {
			interface A { a: string, b: number }
			interface B { b: boolean, c: string }
			interface Expected { a: string, b: boolean, c: string }
			expectTypeOf<Merge<A, B>>().toEqualTypeOf<Expected>()
		})
	})

	describe('NonNullable', () => {
		it('should exclude null and undefined', () => {
			expectTypeOf<NonNullable<string | null | undefined>>().toEqualTypeOf<string>()
			expectTypeOf<NonNullable<number | null>>().toEqualTypeOf<number>()
		})
	})

	describe('NoNullish', () => {
		it('should remove null and undefined from properties', () => {
			interface Input { a: string | null, b: number | undefined }
			interface Expected { a: string, b: number }
			expectTypeOf<NoNullish<Input>>().toEqualTypeOf<Expected>()
		})
	})

	describe('Nullable', () => {
		it('should create nullable type', () => {
			expectTypeOf<Nullable<string>>().toEqualTypeOf<string | null>()
		})
	})

	describe('Optional', () => {
		it('should create optional type', () => {
			expectTypeOf<Optional<string>>().toEqualTypeOf<string | undefined>()
		})
	})

	describe('Maybe', () => {
		it('should create maybe type', () => {
			expectTypeOf<Maybe<string>>().toEqualTypeOf<string | null | undefined>()
		})
	})

	describe('LoosePartial', () => {
		it('should create loose partial type', () => {
			interface Input {
				a: string
				b: number
			}
			interface Expected {
				a?: string
				b?: number
			}
			expectTypeOf<LoosePartial<Input>>().toEqualTypeOf<Expected>()
		})
	})

	describe('RequiredKeys', () => {
		it('should get required keys', () => {
			interface User {
				name: string
				age?: number
				email: string
				phone?: string
			}
			expectTypeOf<RequiredKeys<User>>().toEqualTypeOf<'name' | 'email'>()
		})

		it('should return never for all optional', () => {
			interface Obj { a?: string, b?: number }
			expectTypeOf<RequiredKeys<Obj>>().toEqualTypeOf<never>()
		})
	})

	describe('OptionalKeys', () => {
		it('should get optional keys', () => {
			interface User {
				name: string
				age?: number
				email: string
				phone?: string
			}
			expectTypeOf<OptionalKeys<User>>().toEqualTypeOf<'age' | 'phone'>()
		})

		it('should return never for all required', () => {
			interface Obj { a: string, b: number }
			expectTypeOf<OptionalKeys<Obj>>().toEqualTypeOf<never>()
		})
	})

	describe('WritableKeys', () => {
		it('should get writable keys', () => {
			interface Obj {
				name: string
				readonly age: number
			}
			type Actual = WritableKeys<Obj>
			expectTypeOf<'name'>().toMatchTypeOf<Actual>()
		})
	})

	describe('ReadonlyKeys', () => {
		it('should get readonly keys', () => {
			interface Obj {
				name: string
				readonly age: number
			}
			type Actual = ReadonlyKeys<Obj>
			expectTypeOf<'age'>().toMatchTypeOf<Actual>()
		})
	})
})

describe('Literal Types', () => {
	describe('Literal', () => {
		it('should match literal types', () => {
			expectTypeOf<Literal>().toEqualTypeOf<string | number | boolean | undefined | null | void | bigint>()
		})
	})

	describe('LiteralString', () => {
		it('should create exact string literal', () => {
			expectTypeOf<LiteralString<'hello'>>().toEqualTypeOf<'hello'>()
		})
	})

	describe('LiteralNumber', () => {
		it('should create exact number literal', () => {
			expectTypeOf<LiteralNumber<42>>().toEqualTypeOf<42>()
		})
	})

	describe('LiteralBoolean', () => {
		it('should create exact boolean literal', () => {
			expectTypeOf<LiteralBoolean<true>>().toEqualTypeOf<true>()
		})
	})
})

describe('String Transformations', () => {
	describe('CamelCase', () => {
		it('should convert snake_case to camelCase', () => {
			expectTypeOf<CamelCase<'hello_world'>>().toEqualTypeOf<'helloWorld'>()
			expectTypeOf<CamelCase<'foo_bar_baz'>>().toEqualTypeOf<'fooBarBaz'>()
		})

		it('should convert kebab-case to camelCase', () => {
			expectTypeOf<CamelCase<'hello-world'>>().toEqualTypeOf<'helloWorld'>()
			expectTypeOf<CamelCase<'foo-bar-baz'>>().toEqualTypeOf<'fooBarBaz'>()
		})

		it('should handle mixed separators', () => {
			expectTypeOf<CamelCase<'hello_world-foo'>>().toEqualTypeOf<'helloWorldFoo'>()
		})
	})

	describe('SnakeCase', () => {
		it('should convert camelCase to snake_case', () => {
			expectTypeOf<SnakeCase<'helloWorld'>>().toEqualTypeOf<'hello_world'>()
			expectTypeOf<SnakeCase<'fooBarBaz'>>().toEqualTypeOf<'foo_bar_baz'>()
		})

		it('should handle consecutive uppercase letters', () => {
			expectTypeOf<SnakeCase<'XMLParser'>>().toEqualTypeOf<'xml_parser'>()
			expectTypeOf<SnakeCase<'HTMLElement'>>().toEqualTypeOf<'html_element'>()
			expectTypeOf<SnakeCase<'HTTPSConnection'>>().toEqualTypeOf<'https_connection'>()
		})

		it('should handle single word', () => {
			expectTypeOf<SnakeCase<'hello'>>().toEqualTypeOf<'hello'>()
		})

		it('should handle already snake_case', () => {
			expectTypeOf<SnakeCase<'hello_world'>>().toEqualTypeOf<'hello_world'>()
		})
	})

	describe('CamelCaseKeys', () => {
		it('should convert object keys to camelCase', () => {
			interface Input { hello_world: string, foo_bar: number }
			interface Expected { helloWorld: string, fooBar: number }
			expectTypeOf<CamelCaseKeys<Input>>().toEqualTypeOf<Expected>()
		})
	})

	describe('SnakeCaseKeys', () => {
		it('should convert object keys to snake_case', () => {
			interface Input { helloWorld: string, fooBar: number }
			interface Expected { hello_world: string, foo_bar: number }
			expectTypeOf<SnakeCaseKeys<Input>>().toEqualTypeOf<Expected>()
		})
	})
})

describe('Path Types', () => {
	describe('Paths', () => {
		it('should get all paths to nested properties', () => {
			interface Obj {
				a: {
					b: string
					c: {
						d: number
					}
				}
			}
			type Actual = Paths<Obj>
			expectTypeOf<'a'>().toMatchTypeOf<Actual>()
			expectTypeOf<'a.b'>().toMatchTypeOf<Actual>()
			expectTypeOf<'a.c'>().toMatchTypeOf<Actual>()
			expectTypeOf<'a.c.d'>().toMatchTypeOf<Actual>()
		})
	})

	describe('PathValue', () => {
		it('should get value type at path', () => {
			interface Obj {
				a: {
					b: string
					c: {
						d: number
					}
				}
			}
			expectTypeOf<PathValue<Obj, 'a'>>().toEqualTypeOf<{ b: string, c: { d: number } }>()
			expectTypeOf<PathValue<Obj, 'a.b'>>().toEqualTypeOf<string>()
			expectTypeOf<PathValue<Obj, 'a.c.d'>>().toEqualTypeOf<number>()
		})
	})

	describe('SplitPath', () => {
		it('should split path string into array', () => {
			expectTypeOf<SplitPath<'a.b.c'>>().toEqualTypeOf<['a', 'b', 'c']>()
			expectTypeOf<SplitPath<'single'>>().toEqualTypeOf<['single']>()
		})
	})
})

describe('Other Utilities', () => {
	describe('AtLeastOne', () => {
		it('should require at least one property', () => {
			interface Options {
				a?: string
				b?: number
				c?: boolean
			}
			type Actual = AtLeastOne<Options>
			expectTypeOf<{ a: string }>().toMatchTypeOf<Actual>()
			expectTypeOf<{ b: number }>().toMatchTypeOf<Actual>()
		})
	})

	describe('Exclusive', () => {
		it('should create exclusive union', () => {
			type Union = { type: 'a', valueA: string } | { type: 'b', valueB: number }
			type Actual = Exclusive<Union, 'type'>

			// Only one type can be selected at a time
			expectTypeOf<{ type?: undefined, valueA: string } | { type?: undefined, valueB: number }>().toMatchTypeOf<Actual>()
		})
	})

	describe('StrictExtract', () => {
		it('should strictly extract matching types', () => {
			type Union = { type: 'a', value: string } | { type: 'b', value: number } | { other: boolean }
			type Actual = StrictExtract<Union, 'type'>
			type Expected = { type: 'a', value: string } | { type: 'b', value: number }
			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})
	})

	describe('StrictExclude', () => {
		it('should strictly exclude types', () => {
			type Union = 'a' | 'b' | 'c'
			type Actual = StrictExclude<Union, 'a'>
			expectTypeOf<Actual>().toEqualTypeOf<'b' | 'c'>()
		})
	})

	describe('UnionToIntersection', () => {
		it('should convert union to intersection', () => {
			type Union = { a: string } | { b: number }
			type Actual = UnionToIntersection<Union>
			type Expected = { a: string } & { b: number }
			expectTypeOf<Actual>().toEqualTypeOf<Expected>()
		})
	})

	describe('UnionToTuple', () => {
		it('should convert union to tuple', () => {
			type Union = 'a' | 'b'
			type Actual = UnionToTuple<Union>
			expectTypeOf<Actual>().toMatchTypeOf<string[]>()
		})
	})
})

describe('Edge Cases', () => {
	it('should handle never type input', () => {
		expectTypeOf<DeepPartial<never>>().toEqualTypeOf<never>()
		expectTypeOf<DeepRequired<never>>().toEqualTypeOf<never>()
	})

	it('should handle primitive types', () => {
		expectTypeOf<DeepPartial<string>>().toEqualTypeOf<string>()
		expectTypeOf<DeepRequired<number>>().toEqualTypeOf<number>()
		expectTypeOf<DeepReadonly<boolean>>().toEqualTypeOf<boolean>()
	})

	it('should handle null and undefined', () => {
		expectTypeOf<DeepPartial<null>>().toEqualTypeOf<null>()
		expectTypeOf<DeepRequired<undefined>>().toEqualTypeOf<undefined>()
	})

	it('should handle empty objects', () => {
		expectTypeOf<DeepPartial<{}>>().toEqualTypeOf<{}>()
		expectTypeOf<RequiredKeys<{}>>().toEqualTypeOf<never>()
		expectTypeOf<OptionalKeys<{}>>().toEqualTypeOf<never>()
	})
})
