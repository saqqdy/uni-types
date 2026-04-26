/**
 * Type-Level Game Development
 *
 * Type-level game development utilities.
 */

// ============================================================================
// Entity Types
// ============================================================================

/**
 * Entity identifier type
 */
export type EntityId = number | string

/**
 * Base entity type
 */
export interface Entity<T = unknown> {
	id: EntityId
	name?: string
	components: T
	active: boolean
	tags?: string[]
}

/**
 * Entity component type
 */
export type EntityComponent<T = unknown> = T & {
	_entityId: EntityId
}

/**
 * Entity system type
 */
export interface EntitySystem<C = unknown> {
	name: string
	components: C
	update: (deltaTime: number) => void
	priority?: number
	enabled: boolean
}

/**
 * Entity query type
 */
export interface EntityQuery<C = unknown> {
	with: (keyof C)[]
	without?: (keyof C)[]
}

// ============================================================================
// Component Types
// ============================================================================

/**
 * Base component interface
 */
export interface Component {
	readonly type: string
}

/**
 * Position component (2D)
 */
export interface Position2D extends Component {
	type: 'position2d'
	x: number
	y: number
}

/**
 * Position component (3D)
 */
export interface Position3D extends Component {
	type: 'position3d'
	x: number
	y: number
	z: number
}

/**
 * Velocity component
 */
export interface Velocity extends Component {
	type: 'velocity'
	vx: number
	vy: number
	vz?: number
}

/**
 * Transform component
 */
export interface TransformComponent extends Component {
	type: 'transform'
	position: Position3D
	rotation: Rotation3D
	scale: Scale3D
}

/**
 * Rotation in 3D space
 */
export interface Rotation3D {
	x: number
	y: number
	z: number
	w?: number // quaternion component
}

/**
 * Scale in 3D space
 */
export interface Scale3D {
	x: number
	y: number
	z: number
}

/**
 * Sprite component
 */
export interface SpriteComponent extends Component {
	type: 'sprite'
	texture: string
	width: number
	height: number
	anchor?: { x: number, y: number }
	flipX?: boolean
	flipY?: boolean
}

/**
 * Animation component
 */
export interface AnimationComponent extends Component {
	type: 'animation'
	currentAnimation: string
	animations: Record<string, AnimationClip>
	playing: boolean
	speed?: number
}

/**
 * Animation clip
 */
export interface AnimationClip {
	frames: number[]
	frameRate: number
	loop: boolean
}

/**
 * Health component
 */
export interface HealthComponent extends Component {
	type: 'health'
	current: number
	max: number
	regeneration?: number
	invulnerable?: boolean
}

/**
 * Tag component (marker)
 */
export interface TagComponent<T extends string = string> extends Component {
	type: 'tag'
	tag: T
}

// ============================================================================
// State Types
// ============================================================================

/**
 * Game state type
 */
export interface GameState<T = unknown> {
	name: string
	data: T
	enter?: () => void
	exit?: () => void
	update?: (deltaTime: number) => void
}

/**
 * Game action type for state management
 */
export interface GameAction<T = string, P = unknown> {
	type: T
	payload?: P
	timestamp: number
}

/**
 * Game reducer type
 */
export type GameReducer<S, A extends GameAction> = (
	state: S,
	action: A,
) => S

/**
 * Game store type
 */
export interface GameStore<S = unknown> {
	state: S
	dispatch: <A extends GameAction>(action: A) => void
	subscribe: (listener: (state: S) => void) => () => void
	getState: () => S
}

// ============================================================================
// Input Types
// ============================================================================

/**
 * Keyboard key state
 */
export interface KeyState {
	pressed: boolean
	held: boolean
	released: boolean
	duration: number
}

/**
 * Keyboard input state
 */
export interface KeyboardState {
	keys: Map<string, KeyState>
}

/**
 * Mouse button state
 */
export interface MouseButtonState {
	pressed: boolean
	held: boolean
	released: boolean
}

/**
 * Mouse position
 */
export interface MousePosition {
	x: number
	y: number
	clientX: number
	clientY: number
}

/**
 * Mouse input state
 */
export interface MouseState {
	position: MousePosition
	buttons: Map<number, MouseButtonState>
	wheel: { x: number, y: number }
}

/**
 * Gamepad button state
 */
export interface GamepadButtonState {
	pressed: boolean
	touched: boolean
	value: number
}

/**
 * Gamepad axis state
 */
export type GamepadAxisState = number

/**
 * Gamepad state
 */
export interface GamepadState {
	connected: boolean
	id: string
	buttons: GamepadButtonState[]
	axes: GamepadAxisState[]
	mapping: 'standard' | 'unknown'
}

/**
 * Touch state
 */
export interface TouchState {
	touches: TouchPoint[]
}

/**
 * Touch point
 */
export interface TouchPoint {
	id: number
	x: number
	y: number
	pressure?: number
}

/**
 * Input state aggregator
 */
export interface InputState {
	keyboard: KeyboardState
	mouse: MouseState
	gamepads: GamepadState[]
	touch: TouchState
	timestamp: number
}

// ============================================================================
// Physics Types
// ============================================================================

/**
 * Physics body type
 */
export interface PhysicsBody<T = unknown> {
	id: EntityId
	mass: number
	velocity: Velocity
	acceleration?: Velocity
	shape: ColliderShape
	material?: PhysicsMaterial
	data?: T
}

/**
 * Collider shape type
 */
export type ColliderShape
	= | { type: 'box', width: number, height: number, depth?: number }
	| { type: 'sphere', radius: number }
	| { type: 'capsule', radius: number, height: number }
	| { type: 'polygon', vertices: Vector2D[] }
	| { type: 'circle', radius: number }
	| { type: 'mesh', meshId: string }

/**
 * Physics material properties
 */
export interface PhysicsMaterial {
	friction: number
	restitution: number
	density?: number
}

/**
 * Collision info
 */
export interface Collision<T = unknown> {
	bodyA: EntityId
	bodyB: EntityId
	normal: Vector2D | Vector3D
	penetration: number
	contactPoint: Vector2D | Vector3D
	timestamp: number
	data?: T
}

/**
 * Collision event
 */
export interface CollisionEvent {
	type: 'collision-enter' | 'collision-stay' | 'collision-exit'
	collision: Collision
}

/**
 * Rigid body dynamics
 */
export interface RigidBody {
	type: 'dynamic' | 'static' | 'kinematic'
	gravityScale: number
	linearDamping: number
	angularDamping: number
	fixedRotation: boolean
}

/**
 * Force application
 */
export interface Force {
	x: number
	y: number
	z?: number
	mode: 'force' | 'impulse' | 'acceleration'
}

// ============================================================================
// Rendering Types
// ============================================================================

/**
 * Renderable component
 */
export interface Renderable<T = unknown> {
	id: EntityId
	layer: number
	order: number
	visible: boolean
	opacity: number
	renderData: T
}

/**
 * Material type
 */
export interface Material {
	id: string
	shader: string
	uniforms: Record<string, unknown>
	textures?: Texture[]
	transparent?: boolean
	cullMode?: 'front' | 'back' | 'none'
}

/**
 * Shader type
 */
export interface Shader {
	id: string
	vertex: string
	fragment?: string
	vertexEntryPoint?: string
	fragmentEntryPoint?: string
}

/**
 * Texture type
 */
export interface Texture {
	id: string
	source: string | { data: Uint8ClampedArray, width: number, height: number }
	width: number
	height: number
	format: TextureFormat
	filter?: TextureFilter
	wrap?: TextureWrap
}

/**
 * Texture format
 */
export type TextureFormat = 'rgba' | 'rgb' | 'r' | 'rg' | 'depth' | 'stencil'

/**
 * Texture filter mode
 */
export type TextureFilter = 'nearest' | 'linear' | 'mipmap'

/**
 * Texture wrap mode
 */
export type TextureWrap = 'repeat' | 'clamp' | 'mirror'

/**
 * Mesh type
 */
export interface Mesh {
	id: string
	vertices: number[]
	indices: number[]
	normals?: number[]
	uvs?: number[]
	tangents?: number[]
	topology?: 'triangles' | 'lines' | 'points'
}

/**
 * Render target
 */
export interface RenderTarget {
	id: string
	width: number
	height: number
	colorAttachments: Texture[]
	depthAttachment?: Texture
}

/**
 * Camera type
 */
export interface Camera {
	id: string
	type: 'orthographic' | 'perspective'
	position: Position3D
	rotation: Rotation3D
	near: number
	far: number
	fov?: number
	zoom?: number
	viewport?: { x: number, y: number, width: number, height: number }
}

// ============================================================================
// Audio Types
// ============================================================================

/**
 * Audio clip
 */
export interface AudioClip {
	id: string
	source: string
	duration: number
	volume: number
	loop: boolean
}

/**
 * Audio source component
 */
export interface AudioSource {
	clip: AudioClip | null
	playing: boolean
	volume: number
	pitch: number
	pan: number
	loop: boolean
	spatialBlend?: number
	maxDistance?: number
}

/**
 * Audio listener
 */
export interface AudioListener {
	position: Position3D
	rotation: Rotation3D
	volume: number
}

/**
 * Sound effect configuration
 */
export interface SoundEffect {
	type: 'reverb' | 'delay' | 'filter' | 'compressor' | 'distortion'
	parameters: Record<string, number | boolean | string>
}

// ============================================================================
// Scene Types
// ============================================================================

/**
 * Scene type
 */
export interface Scene<T = unknown> {
	id: string
	name: string
	entities: Entity[]
	systems: EntitySystem[]
	data?: T
	loaded: boolean
	active: boolean
}

/**
 * Scene node for scene graph
 */
export interface SceneNode<T = unknown> {
	id: string
	name?: string
	parent: SceneNode | null
	children: SceneNode[]
	transform: TransformComponent
	data?: T
	worldTransform?: TransformComponent
}

/**
 * Scene graph
 */
export interface SceneGraph {
	root: SceneNode
	nodes: Map<string, SceneNode>
	depthFirst: () => SceneNode[]
	breadthFirst: () => SceneNode[]
}

// ============================================================================
// Vector Types
// ============================================================================

/**
 * 2D Vector
 */
export interface Vector2D {
	x: number
	y: number
}

/**
 * 3D Vector
 */
export interface Vector3D {
	x: number
	y: number
	z: number
}

/**
 * 4D Vector
 */
export interface Vector4D {
	x: number
	y: number
	z: number
	w: number
}

// ============================================================================
// UI Types
// ============================================================================

/**
 * UI element
 */
export interface UIElement {
	id: string
	type: 'text' | 'image' | 'button' | 'panel' | 'progress' | 'slider'
	position: Vector2D
	size: Vector2D
	anchor?: Vector2D
	pivot?: Vector2D
	visible: boolean
	interactive: boolean
}

/**
 * UI text element
 */
export interface UIText extends UIElement {
	type: 'text'
	text: string
	font: string
	fontSize: number
	color: string
	align: 'left' | 'center' | 'right'
	verticalAlign: 'top' | 'middle' | 'bottom'
}

/**
 * UI button element
 */
export interface UIButton extends UIElement {
	type: 'button'
	text?: string
	image?: string
	onClick?: () => void
	onPress?: () => void
	onRelease?: () => void
}

/**
 * UI progress bar
 */
export interface UIProgress extends UIElement {
	type: 'progress'
	value: number
	max: number
	fillColor: string
	backgroundColor: string
}

// ============================================================================
// Game Time Types
// ============================================================================

/**
 * Game time info
 */
export interface GameTime {
	deltaTime: number
	fixedDeltaTime: number
	time: number
	fixedTime: number
	timeScale: number
	frameCount: number
	fps: number
}

/**
 * Timer type
 */
export interface Timer {
	id: string
	duration: number
	elapsed: number
	running: boolean
	loop: boolean
	onComplete?: () => void
	onTick?: (elapsed: number) => void
}

/**
 * Tween animation
 */
export interface Tween {
	id: string
	target: unknown
	property: string
	from: number
	to: number
	duration: number
	elapsed: number
	easing: EasingFunction
	complete: boolean
}

/**
 * Easing function type
 */
export type EasingFunction = (t: number) => number

// ============================================================================
// Level Types
// ============================================================================

/**
 * Level configuration
 */
export interface Level {
	id: string
	name: string
	scene: Scene
	spawnPoints: SpawnPoint[]
	checkpoints: Checkpoint[]
	objectives: Objective[]
}

/**
 * Spawn point
 */
export interface SpawnPoint {
	id: string
	position: Position3D
	rotation?: Rotation3D
	default: boolean
}

/**
 * Checkpoint
 */
export interface Checkpoint {
	id: string
	position: Position3D
	rotation?: Rotation3D
	activated: boolean
}

/**
 * Objective
 */
export interface Objective {
	id: string
	description: string
	type: 'collect' | 'reach' | 'defeat' | 'interact' | 'survive'
	target?: string | number
	current: number
	required: number
	completed: boolean
}
