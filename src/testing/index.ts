/**
 * Type-level testing utilities
 *
 * This module provides types for:
 * - Type assertions (Expect, ExpectTrue, ExpectFalse)
 * - Type test utilities
 * - Type coverage
 * - Type complexity
 */

// ============================================================================
// Type Assertions
// ============================================================================

/**
 * Expect a type to be true
 *
 * @example
 * ```ts
 * ExpectTrue<true>  // ok
 * ExpectTrue<false>  // TypeScript error
 * ```
 */
export type ExpectTrue<T extends true> = T

/**
 * Expect a type to be false
 *
 * @example
 * ```ts
 * ExpectFalse<false>  // ok
 * ExpectFalse<true>  // TypeScript error
 * ```
 */
export type ExpectFalse<T extends false> = T

/**
 * Expect two types to be equal
 *
 * @example
 * ```ts
 * ExpectEqual<string, string>  // ok
 * ExpectEqual<string, number>  // TypeScript error
 * ```
 */
export type ExpectEqual<T, Expected> = (() => T extends Expected ? Expected extends T ? true : false : false) extends () => true
	? true
	: false

/**
 * Assert type equality (returns never if not equal)
 *
 * @example
 * ```ts
 * type A = AssertType<string, string>  // string
 * type B = AssertType<string, number>  // never
 * ```
 */
export type AssertType<T, Expected> = ExpectEqual<T, Expected> extends true ? T : never

/**
 * Expect type to extend another
 *
 * @example
 * ```ts
 * ExpectExtends<string, string | number>  // ok
 * ```
 */
export type ExpectExtends<T, U> = T extends U ? true : false

/**
 * Expect type NOT to extend another
 *
 * @example
 * ```ts
 * ExpectNotExtends<string, number>  // ok
 * ```
 */
export type ExpectNotExtends<T, U> = T extends U ? false : true

/**
 * Expect type to be any
 *
 * @example
 * ```ts
 * ExpectAny<any>  // true
 * ```
 */
export type ExpectAny<T> = 0 extends (1 & T) ? true : false

/**
 * Expect type to be never
 *
 * @example
 * ```ts
 * ExpectNever<never>  // true
 * ```
 */
export type ExpectNever<T> = [T] extends [never] ? true : false

/**
 * Expect type to be unknown
 *
 * @example
 * ```ts
 * ExpectUnknown<unknown>  // true
 * ```
 */
export type ExpectUnknown<T> = unknown extends T ? (T extends unknown ? true : false) : false

// ============================================================================
// Type Test Utilities
// ============================================================================

/**
 * Type test definition
 *
 * @example
 * ```ts
 * type Test = TypeTest<'StringTest', ExpectEqual<string, string>>
 * ```
 */
export type TypeTest<Name extends string, Test extends boolean> = {
	name: Name
	result: Test extends true ? 'pass' : 'fail'
}

/**
 * Type test suite
 *
 * @example
 * ```ts
 * type Suite = TypeTestSuite<[TypeTest<'Test1', true>, TypeTest<'Test2', true>]>
 * ```
 */
export type TypeTestSuite<Tests extends TypeTest<string, boolean>[] = []> = {
	tests: Tests
	allPassed: AllTestsPassed<Tests>
	failedTests: FailedTests<Tests>
}

type AllTestsPassed<Tests extends TypeTest<string, boolean>[] = []> = Tests extends [
	TypeTest<string, infer R>,
	...infer Rest extends TypeTest<string, boolean>[],
]
	? R extends true
		? AllTestsPassed<Rest>
		: false
	: true

type FailedTests<Tests extends TypeTest<string, boolean>[] = []> = Tests extends [
	TypeTest<infer N, infer R>,
	...infer Rest extends TypeTest<string, boolean>[],
]
	? R extends false
		? [N, ...FailedTests<Rest>]
		: FailedTests<Rest>
	: []

/**
 * Type test result
 *
 * @example
 * ```ts
 * type Result = TypeTestResult  // 'pass' | 'fail' | 'skip'
 * ```
 */
export type TypeTestResult = 'pass' | 'fail' | 'skip'

/**
 * Run type test
 *
 * @example
 * ```ts
 * type Result = RunTypeTest<TypeTest<'Test', true>>
 * ```
 */
export type RunTypeTest<Test extends TypeTest<string, boolean>> = Test['result']

/**
 * Skip type test
 *
 * @example
 * ```ts
 * type Skipped = SkipTest<'Test'>
 * ```
 */
export type SkipTest<Name extends string> = TypeTest<Name, true> & { skipped: true }

// ============================================================================
// Type Coverage
// ============================================================================

/**
 * Calculate type coverage percentage
 *
 * @example
 * ```ts
 * type Coverage = TypeCoverage<{ a: string; b?: number }>
 * ```
 */
export type TypeCoverage<T> = {
	total: TotalKeys<T>
	covered: CoveredKeys<T>
	percentage: CoveragePercentage<T>
}

type TotalKeys<T> = keyof T extends never ? 0 : (keyof T) extends (keyof T) ? CountKeys<keyof T> : 0

type CoveredKeys<T> = {
	[K in keyof T]: T[K] extends never ? never : K
}[keyof T] extends infer Covered
	? Covered extends never
		? 0
		: CountKeys<Covered>
	: 0

type CountKeys<K> = K extends `${infer _}` ? 1 : K extends symbol ? 1 : K extends number ? 1 : 0

type CoveragePercentage<T> = TotalKeys<T> extends 0
	? 100
	: CoveredKeys<T> extends number
		? TotalKeys<T> extends number
			? CoveredKeys<T> extends TotalKeys<T>
				? 100
				: 0
			: 0
		: 0

/**
 * Find uncovered types
 *
 * @example
 * ```ts
 * type Uncovered = UncoveredTypes<{ a: never; b: string }>
 * ```
 */
export type UncoveredTypes<T> = {
	[K in keyof T as T[K] extends never ? K : never]: T[K]
}

/**
 * Calculate type complexity score
 *
 * @example
 * ```ts
 * type Complexity = TypeComplexity<{ a: { b: { c: string } } }>
 * ```
 */
export type TypeComplexity<T, Depth extends 0[] = []> = {
	depth: Depth['length']
	nested: NestedTypes<T>
	recursionRisk: Depth['length'] extends 10 | 11 | 12 | 13 | 14 | 15 ? true : false
}

type NestedTypes<T> = T extends object
	? T extends unknown[]
		? 1
		: { [K in keyof T]: NestedTypes<T[K]> }[keyof T] extends number
			? MaxNested<T>
			: 0
	: 0

type MaxNested<T, Acc extends 0[] = []> = T extends object
	? Acc['length'] extends 10
		? 10
		: keyof T extends never
			? Acc['length']
			: T extends { [K in keyof T]: infer V }
				? V extends object
					? MaxNested<V, [...Acc, 0]>
					: Acc['length']
				: Acc['length']
	: Acc['length']

// ============================================================================
// Type Inspection
// ============================================================================

/**
 * Inspect type structure
 *
 * @example
 * ```ts
 * type Info = InspectType<{ a: string }>
 * ```
 */
export type InspectType<T> = {
	type: TypeCategory<T>
	keys: keyof T extends never ? never : keyof T
	isNullable: null extends T ? true : false
	isOptional: undefined extends T ? true : false
	isArray: T extends unknown[] ? true : false
	isObject: T extends object ? (T extends unknown[] | Function ? false : true) : false
}

/**
 * Type category
 *
 * @example
 * ```ts
 * type Cat = TypeCategory<string>  // 'primitive'
 * ```
 */
export type TypeCategory<T> = T extends string
	? 'string'
	: T extends number
		? 'number'
		: T extends boolean
			? 'boolean'
			: T extends symbol
				? 'symbol'
				: T extends null
					? 'null'
					: T extends undefined
						? 'undefined'
						: T extends unknown[]
							? 'array'
							: T extends (...args: any[]) => any
								? 'function'
								: T extends object
									? 'object'
									: 'unknown'

/**
 * Get type information
 *
 * @example
 * ```ts
 * type Info = TypeInfo<{ a: string }>
 * ```
 */
export type TypeInfo<T> = {
	category: TypeCategory<T>
	nullable: null extends T ? true : false
	optional: undefined extends T ? true : false
	literal: IsLiteral<T>
	union: IsUnion<T>
	intersection: IsIntersection<T>
}

type IsLiteral<T> = string extends T
	? false
	: number extends T
		? false
		: boolean extends T
			? false
			: true

/**
 * Check if type is union
 *
 * @example
 * ```ts
 * IsUnion<string | number>  // true
 * ```
 */
export type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true

type UnionToIntersection<T> = (T extends any ? (x: T) => void : never) extends (x: infer I) => void ? I : never

/**
 * Check if type is intersection
 *
 * @example
 * ```ts
 * IsIntersection<{ a: string } & { b: number }>  // true
 * ```
 */
export type IsIntersection<T> = T extends infer _I & infer _J ? true : false

// ============================================================================
// Debug Utilities
// ============================================================================

/**
 * Debug type (show expanded type)
 *
 * @example
 * ```ts
 * type Debug = DebugType<DeepPartial<{ a: { b: string } }>>
 * ```
 */
export type DebugType<T> = { [K in keyof T]: T[K] } & {}

/**
 * Pretty print type
 *
 * @example
 * ```ts
 * type Pretty = PrettyType<{ a: { b: string } }>
 * ```
 */
export type PrettyType<T> = T extends infer U ? { [K in keyof U]: U[K] } : never

/**
 * Expand type recursively
 *
 * @example
 * ```ts
 * type Expanded = ExpandType<{ a: { b: { c: string } } }>
 * ```
 */
export type ExpandType<T> = T extends object
	? T extends unknown[]
		? T
		: { [K in keyof T]: ExpandType<T[K]> }
	: T

/**
 * Mark type for inspection
 *
 * @example
 * ```ts
 * type Marked = MarkType<string, 'debug'>
 * ```
 */
export type MarkType<T, Tag extends string> = T & { __tag: Tag }