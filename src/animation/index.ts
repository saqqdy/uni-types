/**
 * Type-Level Animation
 *
 * Type-level animation utilities.
 */

// ============================================================================
// Animation Core Types
// ============================================================================

/**
 * Animation target
 */
export type AnimationTarget = unknown

/**
 * Animation duration (milliseconds)
 */
export type AnimationDuration = number

/**
 * Animation frame type
 */
export interface AnimationFrame<T = unknown> {
	time: number // Time within animation (0 to duration)
	value: T
	progress: number // Normalized progress (0 to 1)
	easedProgress: number // After easing function
}

/**
 * Animation timeline
 */
export interface AnimationTimeline<T = unknown> {
	id: string
	animations: Animation<T>[]
	duration: AnimationDuration
	frames: AnimationFrame<T>[]
	loop: boolean
	autoReverse?: boolean
}

/**
 * Animation playback state
 */
export type AnimationPlaybackState = 'idle' | 'running' | 'paused' | 'finished'

/**
 * Animation direction
 */
export type AnimationDirection
	= | 'normal'
	| 'reverse'
	| 'alternate'
	| 'alternate-reverse'

/**
 * Animation fill mode
 */
export type AnimationFillMode
	= | 'none'
	| 'forwards'
	| 'backwards'
	| 'both'

// ============================================================================
// Base Animation Type
// ============================================================================

/**
 * Animation base interface
 */
export interface AnimationBase<T = unknown> {
	id: string
	target?: T
	property?: string
	duration: AnimationDuration
	delay?: number
	startDelay?: number
	endDelay?: number
	direction?: AnimationDirection
	fill?: AnimationFillMode
	iterations?: number
	iterationStart?: number
	easing?: EasingType
}

/**
 * Full animation type
 */
export interface Animation<T = unknown> extends AnimationBase<T> {
	from: number
	to: number
	value?: T
	keyframes?: Keyframe<T>[]
	playState?: AnimationPlaybackState
	currentTime?: number
	startTime?: number
}

// ============================================================================
// Keyframe Types
// ============================================================================

/**
 * Keyframe base
 */
export interface KeyframeBase<T = unknown> {
	offset: number // 0 to 1
	value: T
	easing?: EasingType
}

/**
 * Keyframe timing
 */
export interface Keyframe<T = unknown> extends KeyframeBase<T> {
	time: number // Absolute time in ms
	computed?: boolean
	interpolation?: KeyframeInterpolation
}

/**
 * Keyframe interpolation mode
 */
export type KeyframeInterpolation
	= | 'linear'
	| 'step-start'
	| 'step-end'
	| 'smooth'
	| 'bezier'

/**
 * Keyframe value type
 */
export type KeyframeValue<T>
	= | T
	| { value: T, easing?: EasingType }

/**
 * Keyframe sequence
 */
export interface KeyframeSequence<T = unknown> {
	property: string
	keyframes: Keyframe<T>[]
}

// ============================================================================
// Easing Types
// ============================================================================

/**
 * Easing function
 */
export type EasingFunction = (t: number) => number

/**
 * Easing type (CSS-like)
 */
export type EasingType
	= | 'linear'
	| 'ease'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| 'step-start'
	| 'step-end'
	| `steps(${number}, start)`
	| `steps(${number}, end)`
	| `cubic-bezier(${string})`

/**
 * Built-in easing presets
 */
export type EasingPreset
	= | 'linear'
	| 'ease'
	| 'easeIn'
	| 'easeOut'
	| 'easeInOut'
	| 'backEaseIn'
	| 'backEaseOut'
	| 'backEaseInOut'
	| 'bounceEaseIn'
	| 'bounceEaseOut'
	| 'bounceEaseInOut'
	| 'circEaseIn'
	| 'circEaseOut'
	| 'circEaseInOut'
	| 'elasticEaseIn'
	| 'elasticEaseOut'
	| 'elasticEaseInOut'
	| 'expoEaseIn'
	| 'expoEaseOut'
	| 'expoEaseInOut'
	| 'quadEaseIn'
	| 'quadEaseOut'
	| 'quadEaseInOut'
	| 'sineEaseIn'
	| 'sineEaseOut'
	| 'sineEaseInOut'

/**
 * Cubic bezier control points
 */
export interface CubicBezier {
	x1: number
	y1: number
	x2: number
	y2: number
}

/**
 * Steps easing
 */
export interface StepsEasing {
	steps: number
	jumpTerm: 'start' | 'end' | 'jump-both' | 'jump-none'
}

// ============================================================================
// Transition Types
// ============================================================================

/**
 * CSS-like transition
 */
export interface Transition<T = unknown> {
	property: string
	target?: string | T
	properties?: string[]
	duration: number
	delay?: number
	easing?: EasingType
	from?: T
	to?: T
}

/**
 * Transition property type
 */
export type TransitionProperty = string | string[] | 'all'

/**
 * Transition duration
 */
export type TransitionDuration = number | number[]

/**
 * Transition delay
 */
export type TransitionDelay = number | number[]

/**
 * Transition timing function
 */
export type TransitionTimingFunction = EasingType | EasingType[]

/**
 * Transition shorthand
 */
export interface TransitionShorthand {
	properties: TransitionProperty
	durations: TransitionDuration
	delays?: TransitionDelay
	timingFunctions?: TransitionTimingFunction
}

// ============================================================================
// Spring Animation Types
// ============================================================================

/**
 * Spring physics parameters
 */
export interface SpringConfig {
	stiffness: number // Tension
	damping: number // Friction
	mass?: number
	velocity?: number
	precision?: number
}

/**
 * Spring animation state
 */
export interface SpringState {
	position: number
	velocity: number
	settled: boolean
}

/**
 * Spring presets
 */
export type SpringPreset
	= | 'stiff'
	| 'gentle'
	| 'bouncy'
	| 'wobbly'
	| 'slow'
	| 'molasses'
	| 'noWobble'
	| 'wobbly'
	| 'stiff'

// ============================================================================
// Sprite Animation Types
// ============================================================================

/**
 * Sprite sheet configuration
 */
export interface SpriteSheet {
	image: string
	frameWidth: number
	frameHeight: number
	frames: SpriteFrame[]
	animations: Record<string, SpriteAnimationDef>
	scale?: number
}

/**
 * Sprite frame
 */
export interface SpriteFrame {
	id: number | string
	x: number
	y: number
	width?: number
	height?: number
	duration?: number
	flipX?: boolean
	flipY?: boolean
	anchor?: { x: number, y: number }
}

/**
 * Sprite animation definition
 */
export interface SpriteAnimationDef {
	frames: (number | string)[]
	frameRate?: number
	loop?: boolean
	pingPong?: boolean
	reverse?: boolean
}

/**
 * Sprite animation instance
 */
export interface SpriteAnimation {
	name: string
	currentFrame: number
	frames: SpriteFrame[]
	frameRate: number
	loop: boolean
	playing: boolean
	direction: 1 | -1
	elapsed: number
}

/**
 * Frame animation options
 */
export interface FrameAnimationOptions {
	frameRate: number
	loop: boolean
	pingPong?: boolean
	reverse?: boolean
	onFrame?: (frame: SpriteFrame, index: number) => void
	onComplete?: () => void
}

// ============================================================================
// Morph Target Animation
// ============================================================================

/**
 * Morph target
 */
export interface MorphTarget {
	name: string
	weights: number[]
	targets: unknown[]
	influence: number
}

/**
 * Morph weights array
 */
export type MorphWeights = number[]

/**
 * Morph animation configuration
 */
export interface MorphAnimation {
	targets: MorphTarget[]
	keyframes: Keyframe<MorphWeights>[]
	defaultWeights: MorphWeights
}

// ============================================================================
// Skeletal Animation Types
// ============================================================================

/**
 * Skeleton structure
 */
export interface Skeleton {
	bones: Bone[]
	root: Bone
	name: string
}

/**
 * Bone in skeleton
 */
export interface Bone {
	id: string
	name: string
	parent: Bone | null
	children: Bone[]
	bindTransform: BoneTransform
	localTransform?: BoneTransform
	worldTransform?: BoneTransform
	length?: number
	inheritRotation?: boolean
	inheritScale?: boolean
}

/**
 * Bone transform
 */
export interface BoneTransform {
	translation: { x: number, y: number, z: number }
	rotation: { x: number, y: number, z: number, w?: number }
	scale: { x: number, y: number, z: number }
}

/**
 * Joint (alternative to bone)
 */
export interface Joint {
	id: string
	name: string
	parent: Joint | null
	children: Joint[]
	bindMatrix: number[] // 4x4 matrix as array
}

/**
 * Pose (skeleton state at time)
 */
export interface Pose {
	bones: Map<string, BoneTransform>
	time?: number
}

// ============================================================================
// Animation State Machine
// ============================================================================

/**
 * Animation state
 */
export interface AnimationState<T = unknown> {
	name: string
	animation: Animation<T> | string
	speed?: number
	blendDuration?: number
	layer?: number
	additive?: boolean
	loop?: boolean
}

/**
 * Animation transition
 */
export interface AnimationTransition {
	from: string | '*'
	to: string
	condition?: string | (() => boolean)
	duration: number
	blendMode?: 'override' | 'additive'
	exitTime?: number
	transitionOffset?: number
	blendOut?: number
	blendIn?: number
	blendCurve?: EasingType
}

/**
 * Animation layer
 */
export interface AnimationLayer {
	name: string
	blendMode: 'override' | 'additive'
	weight: number
	states: AnimationState[]
	transitions: AnimationTransition[]
	currentState?: string
	mask?: AvatarMask
	avatarMask?: string
}

/**
 * Animation blend tree
 */
export interface AnimationBlendTree {
	name: string
	type: '1D' | '2D' | 'direct'
	children: BlendTreeChild[]
	blendParameter: string
	blendParameterY?: string
}

/**
 * Blend tree child
 */
export type BlendTreeChild
	= | { type: 'animation', animation: string, threshold: number, position?: [number, number] }
	| { type: 'blendTree', tree: AnimationBlendTree }

/**
 * Avatar mask
 */
export interface AvatarMask {
	body: boolean
	head: boolean
	leftArm: boolean
	rightArm: boolean
	leftHand: boolean
	rightHand: boolean
	leftLeg: boolean
	rightLeg: boolean
	leftFoot: boolean
	rightFoot: boolean
	root: boolean
}

// ============================================================================
// IK (Inverse Kinematics) Types
// ============================================================================

/**
 * IK chain
 */
export interface IKChain {
	bones: Bone[]
	target: IKTarget
	pole?: { x: number, y: number, z: number }
	iterations?: number
	tolerance?: number
}

/**
 * IK target
 */
export interface IKTarget {
	position: { x: number, y: number, z: number }
	rotation?: { x: number, y: number, z: number, w?: number }
	weight?: number
}

/**
 * IK solver type
 */
export type IKSolverType
	= | 'fabrik'
	| 'ccd'
	| 'jacobian'
	| 'two-bone'
	| 'look-at'

/**
 * IK solver configuration
 */
export interface IKSolverConfig {
	type: IKSolverType
	maxIterations: number
	tolerance: number
	verbose?: boolean
}

// ============================================================================
// Timeline/Track Types
// ============================================================================

/**
 * Animation track
 */
export interface AnimationTrack<T = unknown> {
	id: string
	property: string
	keyframes: Keyframe<T>[]
	duration: number
	preExtrapolation?: ExtrapolationMode
	postExtrapolation?: ExtrapolationMode
}

/**
 * Extrapolation mode
 */
export type ExtrapolationMode
	= | 'clamp' // Hold last value
	| 'zero' // Use zero value
	| 'cycle' // Loop
	| 'bounce' // Ping-pong

/**
 * Animation clip (collection of tracks)
 */
export interface AnimationClip {
	name: string
	tracks: AnimationTrack[]
	duration: number
	startTime?: number
	endTime?: number
	speed?: number
	wrapMode?: ExtrapolationMode
	events?: AnimationEvent[]
}

/**
 * Animation event
 */
export interface AnimationEvent {
	name: string
	time: number
	floatParameter?: number
	intParameter?: number
	stringParameter?: string
	objectParameter?: unknown
}

// ============================================================================
// Animation Controller Types
// ============================================================================

/**
 * Animation controller
 */
export interface AnimationController {
	name: string
	paramaters: AnimationParameters
	layers: AnimationLayer[]
	entries: AnimationTransition[]
	anyStateTransitions?: AnimationTransition[]
}

/**
 * Animation parameters
 */
export type AnimationParameters = Record<string, AnimationParameter>

/**
 * Animation parameter
 */
export type AnimationParameter
	= | { type: 'float', default?: number }
	| { type: 'int', default?: number }
	| { type: 'bool', default?: boolean }
	| { type: 'trigger', default?: boolean }

/**
 * Animation parameter value
 */
export type AnimationParameterValue
	= | number // float
	| number // int
	| boolean // bool
	| boolean // trigger

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Interpolate function type
 */
export type InterpolateFunction<T = unknown> = (
	start: T,
	end: T,
	progress: number,
) => T

/**
 * Standard interpolators
 */
export type StandardInterpolate<T> = T extends number
	? 'number'
	: T extends { x: number, y: number }
		? 'vector2'
		: T extends { x: number, y: number, z: number }
			? 'vector3'
			: T extends { x: number, y: number, z: number, w: number }
				? 'vector4'
				: T extends number[]
					? 'array'
					: 'custom'

/**
 * Animation options
 */
export interface AnimationOptions<T = unknown> {
	target: T
	property?: string
	from: unknown
	to: unknown
	duration: number
	easing?: EasingType
	delay?: number
	iterations?: number
	direction?: AnimationDirection
	fill?: AnimationFillMode
	interpolate?: InterpolateFunction<T>
	onUpdate?: (value: T, progress: number) => void
	onComplete?: () => void
	onStart?: () => void
	onIteration?: (iteration: number) => void
}
