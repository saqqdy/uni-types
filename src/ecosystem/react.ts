/**
 * React component props utilities
 *
 * These types help work with React component props.
 * Note: React is an optional peer dependency.
 */

/**
 * Extract props from a React component
 *
 * @example
 * ```tsx
 * import type { ComponentProps } from 'uni-types'
 *
 * type ButtonProps = ComponentProps<'button'>
 * type InputProps = ComponentProps<'input'>
 * ```
 */
export type ComponentProps<T> = T extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[T]
	: T extends ReactComponentType<infer P>
		? P
		: never

/**
 * Get props with ref included
 *
 * @example
 * ```tsx
 * type ButtonPropsWithRef = ComponentPropsWithRef<'button'>
 * ```
 */
export type ComponentPropsWithRef<T> = T extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[T] & { ref?: unknown }
	: T extends ReactComponentType<infer P>
		? P & { ref?: unknown }
		: never

/**
 * Add children to props
 *
 * @example
 * ```tsx
 * type Props = PropsWithChildren<{ name: string }>
 * // { name: string; children?: React.ReactNode }
 * ```
 */
export type PropsWithChildren<P = unknown> = P & { children?: ReactNode }

/**
 * Remove children from props
 *
 * @example
 * ```tsx
 * type Props = PropsWithoutChildren<{ name: string; children: ReactNode }>
 * // { name: string }
 * ```
 */
export type PropsWithoutChildren<P> = Omit<P, 'children'>

/**
 * Extract the prop types from a component
 *
 * @example
 * ```tsx
 * const MyComponent = (props: { name: string; age: number }) => null
 * type Props = ExtractPropTypes<typeof MyComponent>
 * // { name: string; age: number }
 * ```
 */
export type ExtractPropTypes<T> = T extends ReactComponentType<infer P> ? P : never

/**
 * Get required props from a component
 *
 * @example
 * ```tsx
 * interface Props {
 *   name: string      // required
 *   age?: number      // optional
 *   onChange?: () => void
 * }
 *
 * type Required = RequiredProps<Props>
 * // 'name'
 * ```
 */
export type RequiredProps<P> = {
	// eslint-disable-next-line ts/no-empty-object-type
	[K in keyof P]-?: {} extends Pick<P, K> ? never : K
}[keyof P]

/**
 * Get optional props from a component
 *
 * @example
 * ```tsx
 * interface Props {
 *   name: string      // required
 *   age?: number      // optional
 *   onChange?: () => void
 * }
 *
 * type Optional = OptionalProps<Props>
 * // 'age' | 'onChange'
 * ```
 */
export type OptionalProps<P> = {
	// eslint-disable-next-line ts/no-empty-object-type
	[K in keyof P]-?: {} extends Pick<P, K> ? K : never
}[keyof P]

/**
 * Props for forward ref components
 *
 * @example
 * ```tsx
 * type InputProps = ForwardRefProps<'input'>
 * ```
 */
export type ForwardRefProps<T extends keyof JSX.IntrinsicElements> = ComponentProps<T> & {
	ref?: unknown
}

/**
 * Merge props with default props
 *
 * @example
 * ```tsx
 * interface Props {
 *   size?: 'sm' | 'md' | 'lg'
 *   variant?: 'primary' | 'secondary'
 * }
 *
 * type WithDefaults = MergeDefaultProps<Props, { size: 'md' }>
 * // size becomes optional with default 'md'
 * ```
 */
export type MergeDefaultProps<P, D extends Partial<P>> = Omit<P, keyof D> & {
	[K in keyof D]?: P extends Record<K, infer V> ? V : D[K]
}

/**
 * Props with style
 */
export type PropsWithStyle<P = unknown> = P & { style?: CSSProperties }

/**
 * Props with className
 */
export type PropsWithClassName<P = unknown> = P & { className?: string }

/**
 * Props with style and className
 */
export type PropsWithStyleAndClassName<P = unknown> = P & {
	style?: CSSProperties
	className?: string
}

/**
 * Event handler type
 */
export type EventHandler<E = SyntheticEvent> = (event: E) => void

/**
 * Change event handler
 */
export type ChangeEventHandler = (event: SyntheticEvent) => void

/**
 * Mouse event handler
 */
export type MouseEventHandler = (event: SyntheticEvent) => void

/**
 * Keyboard event handler
 */
export type KeyboardEventHandler = (event: SyntheticEvent) => void

/**
 * Focus event handler
 */
export type FocusEventHandler = (event: SyntheticEvent) => void

/**
 * Form event handler
 */
export type FormEventHandler = (event: SyntheticEvent) => void

// Type stubs for React types (since React is optional peer dependency)
type ReactComponentType<P = unknown> = (props: P) => unknown
type ReactNode = unknown
interface SyntheticEvent {
	type: string
	nativeEvent: unknown
	currentTarget: unknown
	target: unknown
}
type CSSProperties = Record<string, string | number | undefined>

// JSX namespace stub
// eslint-disable-next-line ts/no-namespace
declare namespace JSX {
	type IntrinsicElements = Record<string, unknown>
}
