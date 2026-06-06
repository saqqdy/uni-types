/**
 * Higher-Kinded Types (HKT) Preview
 *
 * Early implementation of higher-kinded types for v2.0.0,
 * providing type-level abstraction over type constructors.
 */

// ============== HKT Primitives ==============

/**
 * HKTV2 - Higher-kinded type primitive (v2 preview)
 * Represents a type constructor applied to a type
 */
export type HKTV2<F, A> = F extends { _type: infer _R }
	? { _type: A, _kind: F }
	: { _type: A, _kind: F }

/**
 * KindV2 - Kind type for v2.0.0
 * Represents the "kind" of a type constructor
 */
export type KindV2<F, A> = F extends (...args: [A]) => infer R
	? R
	: F extends { _type: unknown }
		? Omit<F, '_type'> & { _type: A }
		: never

/**
 * ApplyV2 - Apply a type constructor to a type argument
 */
export type ApplyV2<F, A> = F extends (...args: [A]) => infer R
	? R
	: F extends { _apply: (a: A) => infer R }
		? R
		: never

// ============== Type Constructors ==============

/**
 * TypeConstructorV2 - Represents a type-level constructor
 */
export interface TypeConstructorV2<F = unknown> {
	/** The constructor's kind */
	readonly _kind: F
}

/**
 * ConstructV2 - Construct a type from a constructor and arguments
 */
export type ConstructV2<F, Args extends unknown[]> = F extends (
	...args: Args
) => infer R
	? R
	: F extends { _construct: (...args: Args) => infer R }
		? R
		: never

// ============== Functor Preview ==============

/**
 * FunctorV2 - Functor type class (v2 preview)
 * A type that can be mapped over
 */
export interface FunctorV2<F> {
	/** The functor's kind */
	readonly _kind: F
}

/**
 * FunctorMap - Type-level map operation
 */
export type FunctorMap<F, A, B> = HKTV2<F, A> extends unknown
	? HKTV2<F, B>
	: never

// ============== Monad Preview ==============

/**
 * MonadV2 - Monad type class (v2 preview)
 * A type that supports flatMap/chain operations
 */
export type MonadV2<M> = FunctorV2<M> & {
	/** The monad's kind */
	readonly _monad: true
}

/**
 * MonadPure - Type-level pure/return operation
 */
export type MonadPure<M, A> = HKTV2<M, A>

/**
 * MonadFlatten - Type-level flatten/join operation
 */
export type MonadFlatten<M, A> = HKTV2<M, HKTV2<M, A>> extends unknown
	? HKTV2<M, A>
	: never

/**
 * MonadChain - Type-level chain/flatMap operation
 */
export type MonadChain<M, A, B> = HKTV2<M, A> extends unknown
	? HKTV2<M, B>
	: never

// ============== Applicative Preview ==============

/**
 * ApplicativeV2 - Applicative functor (v2 preview)
 */
export type ApplicativeV2<F> = FunctorV2<F> & {
	/** The applicative's kind */
	readonly _applicative: true
}

/**
 * ApplicativeLift2 - Lift a binary function
 */
export type ApplicativeLift2<F, A, B, C> = (
	f: (a: A, b: B) => C,
	fa: HKTV2<F, A>,
	fb: HKTV2<F, B>,
) => HKTV2<F, C>

// ============== HKT Utilities ==============

/**
 * HKTIdentity - Identity higher-kinded type
 */
export type HKTIdentity<A> = A

/**
 * HKTConst - Constant higher-kinded type
 */
export type HKTConst<A, _B = unknown> = A

/**
 * HKTCompose - Compose two higher-kinded types
 */
export type HKTCompose<F, G, A> = HKTV2<F, HKTV2<G, A>>

/**
 * HKTFlip - Flip the type arguments of a higher-kinded type
 */
export type HKTFlip<F, A, B> = HKTV2<F, B> extends HKTV2<F, infer _R>
	? HKTV2<F, A>
	: never

/**
 * HKTPartial - Partial application of a higher-kinded type
 */
export type HKTPartial<F, A, B = unknown> = HKTV2<F, [A, B]>
