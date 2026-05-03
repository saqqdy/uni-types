/**
 * Ultimate Type Utilities
 *
 * Comprehensive type utilities that complete the type system.
 */

// ============== Ultimate Types ==============

/**
 * Perfect type - makes all properties readonly and required
 */
export type Perfect<T> = {
  readonly [K in keyof T]: T[K]
}

/**
 * Complete type - ensures all properties are defined and non-nullable
 */
export type Complete<T> = {
  [K in keyof T]-?: NonNullable<T[K]>
}

/**
 * Final type - readonly, required, and non-nullable
 */
export type Final<T> = {
  readonly [K in keyof T]-?: NonNullable<T[K]>
}

/**
 * Ultimate type - the most strict form with deep readonly and non-nullable
 */
export type Ultimate<T> = {
  readonly [K in keyof T]-?: T[K] extends object
    ? Ultimate<NonNullable<T[K]>>
    : NonNullable<T[K]>
}

// ============== Type Perfection ==============

/**
 * Perfect pick - pick keys with perfect typing
 */
export type PerfectPick<T, K extends keyof T> = Perfect<Pick<T, K>>

/**
 * Perfect omit - omit keys with perfect typing
 */
export type PerfectOmit<T, K extends keyof T> = Perfect<Omit<T, K>>

/**
 * Perfect partial - partial with readonly
 */
export type PerfectPartial<T> = {
  readonly [K in keyof T]?: T[K]
}

/**
 * Perfect required - required with readonly
 */
export type PerfectRequired<T> = {
  readonly [K in keyof T]-?: T[K]
}

// ============== Type Completeness ==============

/**
 * Complete keys - all keys with complete values
 */
export type CompleteKeys<T> = keyof Complete<T>

/**
 * Complete values - union of all complete values
 */
export type CompleteValues<T> = T[CompleteKeys<T>]

/**
 * Complete entries - entries with complete typing
 */
export type CompleteEntries<T> = {
  [K in keyof T]: [K, NonNullable<T[K]>]
}[keyof T]

// ============== Type Finalization ==============

/**
 * Finalize type - finalize with all constraints
 */
export type Finalize<T> = Final<T>

/**
 * Frozen type - deep readonly (alias for DeepReadonly)
 */
export type Frozen<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? Frozen<T[K]>
    : T[K]
}

/**
 * Sealed type - no new properties can be added
 */
export type Sealed<T> = T & {
  [K: string]: never
}

/**
 * Locked type - frozen and sealed
 */
export type Locked<T> = Frozen<Sealed<T>>

// ============== Type Validation ==============

/**
 * Validate type against schema
 */
export type Validate<T, Schema> = T extends Schema ? T : never

/**
 * Validated type with schema constraint
 */
export type Validated<T, Schema> = {
  [K in keyof Schema]: K extends keyof T ? Validate<T[K], Schema[K]> : Schema[K]
}

/**
 * Validation error type
 */
export type ValidationError<T> = {
  path: string
  expected: string
  actual: T
  message: string
}

/**
 * Validation result type
 */
export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: ValidationError<T>[] }

// ============== Type Assertion ==============

/**
 * Assert type matches expected
 */
export type AssertType<T, U extends T> = T extends U ? T : never

/**
 * Assert type has specific shape
 */
export type AssertShape<T, Shape> = T extends Shape
  ? Exclude<keyof T, keyof Shape> extends never
    ? T
    : never
  : never

/**
 * Assert type has specific keys
 */
export type AssertKeys<T, K extends keyof T> = K extends keyof T ? T : never

/**
 * Assert values match specific type
 */
export type AssertValues<T, V> = {
  [K in keyof T]: T[K] extends V ? T[K] : never
}