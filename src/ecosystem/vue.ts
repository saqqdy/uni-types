/**
 * Vue component props utilities
 *
 * These types help work with Vue component props.
 * Note: Vue is an optional peer dependency.
 */

/**
 * Vue prop type definition
 *
 * @example
 * ```vue
 * <script setup lang="ts">
 * const props = defineProps<{
 *   name: string
 *   age?: number
 * }>()
 * </script>
 * ```
 */
export interface VuePropType<T> {
	type: VuePropConstructor<T>
	required?: boolean
	default?: T | (() => T)
}

/**
 * Vue prop constructor types
 */
export type VuePropConstructor<T>
	= | (abstract new (...args: any[]) => T & object)
		| { (): T }
		| { new (...args: any[]): T & object }

/**
 * Extract props from Vue component options
 *
 * @example
 * ```ts
 * interface Props {
 *   title: string
 *   count?: number
 * }
 *
 * type Props = ExtractVueProps<Props>
 * ```
 */
export type ExtractVueProps<T> = T extends { props: infer P } ? P : T

/**
 * Vue component raw props (before normalization)
 */
export type VueRawProps = Record<string, VuePropConstructor<unknown> | VuePropType<unknown>>

/**
 * Normalize Vue props to TypeScript types
 *
 * @example
 * ```ts
 * const props = {
 *   name: String,
 *   age: { type: Number, required: false }
 * }
 *
 * type Normalized = NormalizeVueProps<typeof props>
 * // { name: string; age?: number }
 * ```
 */
export type NormalizeVueProps<T extends VueRawProps> = {
	[K in keyof T]: T[K] extends VuePropType<infer V>
		? T[K] extends { required: true }
			? V
			: V | undefined
		: T[K] extends VuePropConstructor<infer V>
			? V | undefined
			: never
}

/**
 * Vue emit function type
 *
 * @example
 * ```vue
 * <script setup lang="ts">
 * const emit = defineEmits<{
 *   change: [value: string]
 *   submit: []
 * }>()
 * </script>
 * ```
 */
export type VueEmitType<T extends Record<string, unknown[]>> = {
	[K in keyof T]: (...args: T[K]) => void
}

/**
 * Vue model props (for v-model)
 *
 * @example
 * ```ts
 * interface Props {
 *   modelValue: string
 *   'onUpdate:modelValue'?: (value: string) => void
 * }
 *
 * type Model = VueModelProps<'modelValue', string>
 * ```
 */
export type VueModelProps<K extends string, T> = {
	[P in K]: T
} & {
	[P in `onUpdate:${K}`]?: (value: T) => void
}

/**
 * Vue prop with default value
 */
export interface VuePropWithDefault<T, D extends T> {
	type: VuePropConstructor<T>
	required: false
	default: D
}

/**
 * Required Vue prop
 */
export interface RequiredVueProp<T> {
	type: VuePropConstructor<T>
	required: true
}

/**
 * Optional Vue prop
 */
export interface OptionalVueProp<T> {
	type: VuePropConstructor<T>
	required: false
}

/**
 * Vue slot type
 */
export type VueSlot<T = Record<string, unknown>> = (props: T) => unknown

/**
 * Vue slots type
 */
export type VueSlots<T extends Record<string, Record<string, unknown> | undefined>> = {
	[K in keyof T]: VueSlot<NonNullable<T[K]>>
}

/**
 * Vue expose type
 */
export type VueExpose<T extends Record<string, (...args: any[]) => any>> = T

/**
 * Vue injection key type
 */
export type VueInjectionKey<_T> = symbol | string

/**
 * Vue provide/inject type pair
 */
export interface VueProvideInjectPair<T> {
	key: VueInjectionKey<T>
	defaultValue?: T
}

/**
 * Vue computed property type
 */
export interface VueComputed<T> {
	get: () => T
	set?: (value: T) => void
}

/**
 * Vue ref type
 */
export interface VueRef<T = unknown> {
	value: T
}

/**
 * Vue reactive type
 */
export type VueReactive<T extends object> = T

/**
 * Convert Vue props options to TypeScript type
 */
export type VuePropsToType<T extends VueRawProps> = {
	[K in keyof T]: T[K] extends { type: infer C, required: true }
		? C extends VuePropConstructor<infer V>
			? V
			: never
		: T[K] extends { type: infer C, default: unknown }
			? C extends VuePropConstructor<infer V>
				? V
				: never
			: T[K] extends VuePropConstructor<infer V>
				? V | undefined
				: T[K] extends VuePropType<infer V>
					? V | undefined
					: never
}

/**
 * Vue component instance type
 */
export interface VueComponentInstance<P = unknown, S = unknown> {
	$props: P
	$slots: S
	$emit: (event: string, ...args: unknown[]) => void
}
