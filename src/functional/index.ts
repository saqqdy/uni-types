/**
 * Functional Programming Patterns
 *
 * Type-level functional programming utilities.
 */

// ============================================================================
// Functor Types
// ============================================================================

/**
 * Functor type
 */
export interface Functor<T> {
	map: <U>(f: (value: T) => U) => Functor<U>
}

/**
 * Map type (fmap)
 */
export type Map<F extends Functor<unknown>, T, U> = F extends Functor<T> ? (fa: F, f: (a: T) => U) => Functor<U> : never

/**
 * FMap type
 */
export interface FMap<T, U> {
	<F extends Functor<T>>(fa: F, f: (a: T) => U): Functor<U>
}

// ============================================================================
// Monad Types
// ============================================================================

/**
 * Monad type
 */
export interface Monad<T> extends Functor<T> {
	bind: <U>(f: (value: T) => Monad<U>) => Monad<U>
	return: (value: T) => Monad<T>
}

/**
 * Bind type (flatMap, chain)
 */
export type Bind<M extends Monad<unknown>, T, U> = M extends Monad<T> ? (ma: M, f: (a: T) => Monad<U>) => Monad<U> : never

/**
 * Return type (pure, unit)
 */
export type Return<M extends Monad<unknown>, T> = (value: T) => M

/**
 * Chain type
 */
export type Chain<M extends Monad<unknown>, T> = M extends Monad<T> ? (ma: M) => T : never

// ============================================================================
// Applicative Types
// ============================================================================

/**
 * Applicative type
 */
export interface Applicative<T> extends Functor<T> {
	ap: <U>(fab: Applicative<(a: T) => U>) => Applicative<U>
	pure: (value: T) => Applicative<T>
}

/**
 * Apply type
 */
export type Apply<F extends Applicative<unknown>, T, U> = F extends Applicative<T> ? (fa: F, fab: Applicative<(a: T) => U>) => Applicative<U> : never

/**
 * Pure type
 */
export type Pure<F extends Applicative<unknown>, T> = (value: T) => F

/**
 * Lift type (liftA2)
 */
export type Lift<_F extends Applicative<unknown>, T, U, V> = (f: (a: T, b: U) => V, fa: Applicative<T>, fb: Applicative<U>) => Applicative<V>

// ============================================================================
// Maybe Monad
// ============================================================================

/**
 * None type
 */
export interface None {
	readonly _tag: 'None'
}

/**
 * Some type
 */
export interface Some<T> {
	readonly _tag: 'Some'
	readonly value: T
}

/**
 * Maybe type (Option)
 */
export type Maybe<T> = Some<T> | None

/**
 * Maybe operations
 */
export interface MaybeOps<T> {
	isSome: (m: Maybe<T>) => m is Some<T>
	isNone: (m: Maybe<T>) => m is None
	fromNullable: (value: T | null | undefined) => Maybe<T>
	toNullable: (m: Maybe<T>) => T | null
	toUndefined: (m: Maybe<T>) => T | undefined
	getOrElse: (m: Maybe<T>, defaultValue: T) => T
	map: <U>(m: Maybe<T>, f: (a: T) => U) => Maybe<U>
	chain: <U>(m: Maybe<T>, f: (a: T) => Maybe<U>) => Maybe<U>
	fold: <U>(m: Maybe<T>, onNone: () => U, onSome: (a: T) => U) => U
}

// ============================================================================
// Either Monad
// ============================================================================

/**
 * Left type
 */
export interface Left<L> {
	readonly _tag: 'Left'
	readonly left: L
}

/**
 * Right type
 */
export interface Right<R> {
	readonly _tag: 'Right'
	readonly right: R
}

/**
 * Either type
 */
export type Either<L, R> = Left<L> | Right<R>

/**
 * Either operations
 */
export interface EitherOps<L, R> {
	isLeft: (e: Either<L, R>) => e is Left<L>
	isRight: (e: Either<L, R>) => e is Right<R>
	left: <L>(value: L) => Either<L, never>
	right: <R>(value: R) => Either<never, R>
	fromNullable: <E>(error: E, value: R | null | undefined) => Either<E, R>
	map: <U>(e: Either<L, R>, f: (a: R) => U) => Either<L, U>
	mapLeft: <M>(e: Either<L, R>, f: (a: L) => M) => Either<M, R>
	chain: <U>(e: Either<L, R>, f: (a: R) => Either<L, U>) => Either<L, U>
	fold: <U>(e: Either<L, R>, onLeft: (a: L) => U, onRight: (a: R) => U) => U
	getOrElse: (e: Either<L, R>, defaultValue: R) => R
	swap: (e: Either<L, R>) => Either<R, L>
}

// ============================================================================
// IO Monad
// ============================================================================

/**
 * IO type (for side effects)
 */
export interface IO<T> {
	run: () => T
	map: <U>(f: (a: T) => U) => IO<U>
	chain: <U>(f: (a: T) => IO<U>) => IO<U>
}

/**
 * IO operations
 */
export interface IOOps<T> {
	of: (value: T) => IO<T>
	from: (thunk: () => T) => IO<T>
	map: <U>(io: IO<T>, f: (a: T) => U) => IO<U>
	chain: <U>(io: IO<T>, f: (a: T) => IO<U>) => IO<U>
	ap: <U>(iof: IO<(a: T) => U>, io: IO<T>) => IO<U>
}

// ============================================================================
// Reader Monad
// ============================================================================

/**
 * Reader type
 */
export interface Reader<R, T> {
	run: (env: R) => T
	map: <U>(f: (a: T) => U) => Reader<R, U>
	chain: <U>(f: (a: T) => Reader<R, U>) => Reader<R, U>
	ask: () => Reader<R, R>
	local: <R2>(f: (env: R2) => R) => Reader<R2, T>
}

/**
 * Reader operations
 */
export interface ReaderOps<R, T> {
	of: (value: T) => Reader<R, T>
	ask: () => Reader<R, R>
	asks: <A>(f: (env: R) => A) => Reader<R, A>
	local: <R2>(reader: Reader<R, T>, f: (env: R2) => R) => Reader<R2, T>
}

// ============================================================================
// Writer Monad
// ============================================================================

/**
 * Writer type
 */
export interface Writer<W, T> {
	run: () => [T, W]
	map: <U>(f: (a: T) => U) => Writer<W, U>
	chain: <U>(f: (a: T) => Writer<W, U>) => Writer<W, U>
	tell: (w: W) => Writer<W, void>
	listen: () => Writer<W, [T, W]>
	pass: () => Writer<W, T>
}

/**
 * Writer operations
 */
export interface WriterOps<W, T> {
	of: (value: T) => Writer<W, T>
	tell: (w: W) => Writer<W, void>
	listen: (writer: Writer<W, T>) => Writer<W, [T, W]>
	pass: (writer: Writer<W, [T, (w: W) => W]>) => Writer<W, T>
}

// ============================================================================
// State Monad
// ============================================================================

/**
 * State type
 */
export interface State<S, T> {
	run: (state: S) => [T, S]
	eval: (state: S) => T
	exec: (state: S) => S
	map: <U>(f: (a: T) => U) => State<S, U>
	chain: <U>(f: (a: T) => State<S, U>) => State<S, U>
	get: () => State<S, S>
	put: (s: S) => State<S, void>
	modify: (f: (s: S) => S) => State<S, void>
}

/**
 * State operations
 */
export interface StateOps<S, T> {
	of: (value: T) => State<S, T>
	get: () => State<S, S>
	put: (s: S) => State<S, void>
	modify: (f: (s: S) => S) => State<S, void>
	gets: <A>(f: (s: S) => A) => State<S, A>
}

// ============================================================================
// Task (Async) Types
// ============================================================================

/**
 * Task type (Promise-like but lazy)
 */
export interface Task<T> {
	run: () => Promise<T>
	map: <U>(f: (a: T) => U) => Task<U>
	chain: <U>(f: (a: T) => Task<U>) => Task<U>
	ap: <U>(tf: Task<(a: T) => U>) => Task<U>
}

/**
 * Task operations
 */
export interface TaskOps<T> {
	of: (value: T) => Task<T>
	from: (promise: () => Promise<T>) => Task<T>
	map: <U>(task: Task<T>, f: (a: T) => U) => Task<U>
	chain: <U>(task: Task<T>, f: (a: T) => Task<U>) => Task<U>
	ap: <U>(tf: Task<(a: T) => U>, task: Task<T>) => Task<U>
	race: (tasks: Task<T>[]) => Task<T>
	all: (tasks: Task<T>[]) => Task<T[]>
}

// ============================================================================
// Result Type
// ============================================================================

/**
 * Ok type
 */
export interface Ok<T> {
	readonly _tag: 'Ok'
	readonly value: T
}

/**
 * Err type
 */
export interface Err<E> {
	readonly _tag: 'Err'
	readonly error: E
}

/**
 * Result type
 */
export type Result<T, E = Error> = Ok<T> | Err<E>

/**
 * Result operations
 */
export interface ResultOps<T, E> {
	ok: (value: T) => Result<T, E>
	err: (error: E) => Result<T, E>
	isOk: (r: Result<T, E>) => r is Ok<T>
	isErr: (r: Result<T, E>) => r is Err<E>
	map: <U>(r: Result<T, E>, f: (a: T) => U) => Result<U, E>
	mapErr: <F>(r: Result<T, E>, f: (e: E) => F) => Result<T, F>
	chain: <U>(r: Result<T, E>, f: (a: T) => Result<U, E>) => Result<U, E>
	fold: <U>(r: Result<T, E>, onErr: (e: E) => U, onOk: (a: T) => U) => U
}

// ============================================================================
// Combinators
// ============================================================================

/**
 * Compose type (right-to-left)
 */
export type Compose<F extends (...args: unknown[]) => unknown, G extends (arg: ReturnType<F>) => unknown> = (...args: Parameters<F>) => ReturnType<G>

/**
 * Pipe type (left-to-right)
 */
export type Pipe<F extends (...args: unknown[]) => unknown, G extends (arg: ReturnType<F>) => unknown> = (...args: Parameters<F>) => ReturnType<G>

/**
 * Curry type
 */
export type Curry<F> = F extends (...args: infer A) => infer R
	? A extends [infer First, ...infer Rest]
		? Rest extends []
			? (arg: First) => R
			: (arg: First) => Curry<(...args: Rest) => R>
		: () => R
	: never

/**
 * Uncurry type
 */
export type Uncurry<F> = F extends (a: infer A) => (b: infer B) => infer R
	? (a: A, b: B) => R
	: F extends (a: infer A) => (b: infer B) => (c: infer C) => infer R
		? (a: A, b: B, c: C) => R
		: F

/**
 * Flip type
 */
export type Flip<F extends (a: unknown, b: unknown) => unknown> = F extends (a: infer A, b: infer B) => infer R ? (b: B, a: A) => R : never

/**
 * Const type
 */
export type Const<T, _U = unknown> = T

/**
 * Identity type
 */
export type Identity<T> = T

/**
 * Flip function
 */
export type FlipFn<F> = F extends (a: infer A, b: infer B, ...rest: infer R) => infer Ret
	? (b: B, a: A, ...rest: R) => Ret
	: never

// ============================================================================
// Lens Types
// ============================================================================

/**
 * Lens type
 */
export interface Lens<S, A> {
	get: (s: S) => A
	set: (a: A, s: S) => S
	modify: (f: (a: A) => A, s: S) => S
}

/**
 * Getter type
 */
export type Getter<S, A> = (s: S) => A

/**
 * Setter type
 */
export type Setter<S, A> = (a: A, s: S) => S

/**
 * Lens path type
 */
export type LensPath<S, _Path extends string, A> = Lens<S, A>

/**
 * View type (read from lens)
 */
export type View<L extends Lens<unknown, unknown>, S> = L extends Lens<S, infer A> ? A : never

/**
 * Set type (write through lens)
 */
export type Set<L extends Lens<unknown, unknown>, S, A> = L extends Lens<S, infer _B> ? (a: A, s: S) => S : never

/**
 * Over type (modify through lens)
 */
export type Over<L extends Lens<unknown, unknown>, S, A> = L extends Lens<S, infer _B> ? (f: (a: A) => A, s: S) => S : never

/**
 * Prism type (for optional focus)
 */
export interface Prism<S, A> {
	getOption: (s: S) => Maybe<A>
	set: (a: A, s: S) => S
	modify: (f: (a: A) => A, s: S) => S
}

/**
 * Iso type (isomorphism)
 */
export interface Iso<S, A> {
	get: (s: S) => A
	reverseGet: (a: A) => S
}

/**
 * Traversal type
 */
export interface Traversal<S, A> {
	getAll: (s: S) => A[]
	modify: (f: (a: A) => A, s: S) => S
	set: (a: A, s: S) => S
}

// ============================================================================
// Predicate & Refinement Types
// ============================================================================

/**
 * Predicate type
 */
export type Predicate<T> = (value: T) => boolean

/**
 * Refinement type
 */
export type Refinement<T, U extends T> = (value: T) => value is U

/**
 * Predicate combinators
 */
export interface PredicateOps<T> {
	and: (p1: Predicate<T>, p2: Predicate<T>) => Predicate<T>
	or: (p1: Predicate<T>, p2: Predicate<T>) => Predicate<T>
	not: (p: Predicate<T>) => Predicate<T>
}

// ============================================================================
// Semigroup & Monoid Types
// ============================================================================

/**
 * Semigroup type
 */
export interface Semigroup<T> {
	concat: (a: T, b: T) => T
}

/**
 * Monoid type
 */
export interface Monoid<T> extends Semigroup<T> {
	empty: () => T
}

// ============================================================================
// Eq & Ord Types
// ============================================================================

/**
 * Eq type (equality)
 */
export interface Eq<T> {
	equals: (a: T, b: T) => boolean
}

/**
 * Ord type (ordering)
 */
export interface Ord<T> extends Eq<T> {
	compare: (a: T, b: T) => -1 | 0 | 1
}

/**
 * Ordering type
 */
export type Ordering = -1 | 0 | 1
