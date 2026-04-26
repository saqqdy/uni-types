/**
 * Type-Level Graphics
 *
 * Type-level graphics and rendering utilities.
 */

// ============================================================================
// Color Types
// ============================================================================

/**
 * Color type (CSS color string)
 */
export type Color = string

/**
 * RGB color tuple
 */
export type RGB = [r: number, g: number, b: number]

/**
 * RGBA color tuple
 */
export type RGBA = [r: number, g: number, b: number, a: number]

/**
 * HSL color tuple
 */
export type HSL = [h: number, s: number, l: number]

/**
 * HSLA color tuple
 */
export type HSLA = [h: number, s: number, l: number, a: number]

/**
 * HSV color tuple
 */
export type HSV = [h: number, s: number, v: number]

/**
 * Hex color string
 */
export type HexColor = `#${string}`

/**
 * Color format
 */
export type ColorFormat = 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hex' | 'hsv' | 'name'

/**
 * Color stop for gradients
 */
export interface ColorStop {
	offset: number
	color: Color
}

/**
 * Gradient type
 */
export type GradientType = 'linear' | 'radial' | 'conic'

/**
 * Gradient definition
 */
export interface Gradient {
	type: GradientType
	stops: ColorStop[]
	angle?: number
	x1?: number
	y1?: number
	x2?: number
	y2?: number
	r1?: number
	r2?: number
}

// ============================================================================
// Vector Types
// ============================================================================

/**
 * 2D Vector
 */
export interface Vector2 {
	x: number
	y: number
}

/**
 * 3D Vector
 */
export interface Vector3 {
	x: number
	y: number
	z: number
}

/**
 * 4D Vector
 */
export interface Vector4 {
	x: number
	y: number
	z: number
	w: number
}

/**
 * Point 2D
 */
export type Point2D = Vector2

/**
 * Point 3D
 */
export type Point3D = Vector3

/**
 * Size 2D
 */
export interface Size2D {
	width: number
	height: number
}

/**
 * Size 3D
 */
export interface Size3D {
	width: number
	height: number
	depth: number
}

/**
 * Rectangle
 */
export interface Rect {
	x: number
	y: number
	width: number
	height: number
}

/**
 * Bounds (bounding box)
 */
export interface Bounds {
	min: Vector3
	max: Vector3
}

/**
 * Ray
 */
export interface Ray {
	origin: Vector3
	direction: Vector3
}

/**
 * Plane
 */
export interface Plane {
	normal: Vector3
	distance: number
}

// ============================================================================
// Matrix Types
// ============================================================================

/**
 * 2x2 Matrix
 */
export type Matrix2x2 = [
	[number, number],
	[number, number],
]

/**
 * 3x3 Matrix
 */
export type Matrix3x3 = [
	[number, number, number],
	[number, number, number],
	[number, number, number],
]

/**
 * 4x4 Matrix
 */
export type Matrix4x4 = [
	[number, number, number, number],
	[number, number, number, number],
	[number, number, number, number],
	[number, number, number, number],
]

/**
 * Flat 4x4 matrix (column-major)
 */
export type Matrix4x4Flat = [
	number, number, number, number,
	number, number, number, number,
	number, number, number, number,
	number, number, number, number,
]

/**
 * Transformation matrix
 */
export interface TransformMatrix {
	matrix: Matrix4x4
	decomposed?: DecomposedTransform
}

/**
 * Decomposed transformation
 */
export interface DecomposedTransform {
	translation: Vector3
	rotation: Quaternion
	scale: Vector3
	skew: Vector3
}

/**
 * Quaternion
 */
export interface Quaternion {
	x: number
	y: number
	z: number
	w: number
}

// ============================================================================
// Transform Types
// ============================================================================

/**
 * Translation vector
 */
export type Translation = Vector3

/**
 * Rotation (axis-angle or euler)
 */
export interface Rotation {
	x: number
	y: number
	z: number
	order?: 'xyz' | 'xzy' | 'yxz' | 'yzx' | 'zxy' | 'zyx'
}

/**
 * Scale vector
 */
export type Scale = Vector3

/**
 * Transform combined
 */
export interface Transform {
	translation: Translation
	rotation: Rotation
	scale: Scale
}

/**
 * Transform options
 */
export interface TransformOptions {
	position?: Partial<Vector3>
	rotation?: Partial<Rotation>
	scale?: Partial<Vector3>
	pivot?: Vector3
}

// ============================================================================
// Primitive Types
// ============================================================================

/**
 * Point primitive
 */
export interface Point {
	position: Vector3
	color?: Color
	size?: number
}

/**
 * Line primitive
 */
export interface Line {
	start: Vector3
	end: Vector3
	color?: Color
	width?: number
}

/**
 * Line strip (connected line segments)
 */
export interface LineStrip {
	points: Vector3[]
	color?: Color
	width?: number
	closed?: boolean
}

/**
 * Triangle primitive
 */
export interface Triangle {
	vertices: [Vector3, Vector3, Vector3]
	color?: Color
	uvs?: [Vector2, Vector2, Vector2]
	normal?: Vector3
}

/**
 * Quad primitive
 */
export interface Quad {
	vertices: [Vector3, Vector3, Vector3, Vector3]
	color?: Color
	uvs?: [Vector2, Vector2, Vector2, Vector2]
	normal?: Vector3
}

/**
 * Polygon primitive
 */
export interface Polygon {
	vertices: Vector3[]
	color?: Color
	uvs?: Vector2[]
	holes?: Vector3[][]
}

// ============================================================================
// Shape Types
// ============================================================================

/**
 * Circle shape
 */
export interface Circle {
	center: Vector2
	radius: number
	filled?: boolean
	strokeWidth?: number
}

/**
 * Ellipse shape
 */
export interface Ellipse {
	center: Vector2
	radiusX: number
	radiusY: number
	rotation?: number
	filled?: boolean
	strokeWidth?: number
}

/**
 * Rectangle shape (with possible rounded corners)
 */
export interface Rectangle {
	position: Vector2
	size: Size2D
	cornerRadius?: number | [number, number, number, number]
	filled?: boolean
	strokeWidth?: number
}

/**
 * Sphere shape
 */
export interface Sphere {
	center: Vector3
	radius: number
	segments?: number
	rings?: number
}

/**
 * Box shape (3D)
 */
export interface Box {
	min: Vector3
	max: Vector3
	center: Vector3
	size: Size3D
}

/**
 * Cylinder shape
 */
export interface Cylinder {
	center: Vector3
	radius: number
	height: number
	segments?: number
}

/**
 * Cone shape
 */
export interface Cone {
	center: Vector3
	radius: number
	height: number
	segments?: number
}

/**
 * Capsule shape
 */
export interface Capsule {
	center: Vector3
	radius: number
	height: number
	direction?: 'x' | 'y' | 'z'
}

/**
 * Torus shape
 */
export interface Torus {
	center: Vector3
	majorRadius: number
	minorRadius: number
	radialSegments?: number
	tubularSegments?: number
}

/**
 * All shape types
 */
export type Shape
	= | Circle
	| Ellipse
	| Rectangle
	| Sphere
	| Box
	| Cylinder
	| Cone
	| Capsule
	| Torus

// ============================================================================
// Buffer Types
// ============================================================================

/**
 * Vertex attribute
 */
export interface VertexAttribute {
	name: string
	size: number
	type: 'float' | 'int' | 'uint'
	normalized?: boolean
	stride?: number
	offset?: number
}

/**
 * Vertex buffer layout
 */
export interface VertexBufferLayout {
	attributes: VertexAttribute[]
	arrayStride: number
	stepMode?: 'vertex' | 'instance'
}

/**
 * Vertex buffer data
 */
export interface VertexBuffer<T = Float32Array | number[]> {
	data: T
	layout: VertexBufferLayout
	topology?: 'point-list' | 'line-list' | 'line-strip' | 'triangle-list' | 'triangle-strip'
}

/**
 * Index buffer
 */
export interface IndexBuffer<T = Uint16Array | Uint32Array | number[]> {
	data: T
	format: 'uint16' | 'uint32'
	topology?: 'point-list' | 'line-list' | 'line-strip' | 'triangle-list' | 'triangle-strip'
}

/**
 * Uniform buffer
 */
export interface UniformBuffer<T = unknown> {
	binding: number
	visibility: GPUShaderStageFlags
	data: T
}

/**
 * Storage buffer
 */
export interface StorageBuffer<T = unknown> {
	binding: number
	visibility: GPUShaderStageFlags
	data: T
	readOnly?: boolean
}

/**
 * GPU shader stage flags
 */
export type GPUShaderStageFlags
	= | 'vertex'
	| 'fragment'
	| 'compute'
	| ('vertex' | 'fragment' | 'compute')[]

// ============================================================================
// Shader Types
// ============================================================================

/**
 * Shader language
 */
export type ShaderLanguage = 'wgsl' | 'glsl' | 'hlsl' | 'msl'

/**
 * Shader stage
 */
export type ShaderStage = 'vertex' | 'fragment' | 'compute'

/**
 * Vertex shader
 */
export interface VertexShader {
	code: string
	entryPoint?: string
	language?: ShaderLanguage
	inputs?: ShaderInput[]
	outputs?: ShaderOutput[]
}

/**
 * Fragment shader
 */
export interface FragmentShader {
	code: string
	entryPoint?: string
	language?: ShaderLanguage
	inputs?: ShaderInput[]
	outputs?: ShaderOutput[]
	targets?: RenderTargetInfo[]
}

/**
 * Compute shader
 */
export interface ComputeShader {
	code: string
	entryPoint?: string
	language?: ShaderLanguage
	bindings?: ShaderBinding[]
	workgroupSize?: [number, number?, number?]
}

/**
 * Shader input
 */
export interface ShaderInput {
	name: string
	type: string
	location: number
	semantic?: string
}

/**
 * Shader output
 */
export interface ShaderOutput {
	name: string
	type: string
	location?: number
}

/**
 * Shader binding
 */
export interface ShaderBinding {
	name: string
	type: 'uniform' | 'storage' | 'texture' | 'sampler'
	binding: number
	group?: number
}

/**
 * Shader program
 */
export interface ShaderProgram {
	vertex?: VertexShader
	fragment?: FragmentShader
	compute?: ComputeShader
	bindGroupLayouts?: BindGroupLayout[]
}

/**
 * Bind group layout
 */
export interface BindGroupLayout {
	entries: BindGroupLayoutEntry[]
}

/**
 * Bind group layout entry
 */
export interface BindGroupLayoutEntry {
	binding: number
	visibility: GPUShaderStageFlags
	type: 'uniform-buffer' | 'storage-buffer' | 'sampled-texture' | 'sampler'
	hasDynamicOffset?: boolean
}

// ============================================================================
// Texture Types
// ============================================================================

/**
 * Texture format
 */
export type TextureFormat
	= | 'rgba8unorm' | 'rgba8snorm' | 'rgba8uint' | 'rgba8sint'
	| 'bgra8unorm' | 'bgra8unorm-srgb'
	| 'rgba16float' | 'r32float' | 'rg32float' | 'rgba32float'
	| 'depth16unorm' | 'depth24plus' | 'depth24plus-stencil8' | 'depth32float'
	| 'bc1-rgba-unorm' | 'bc2-rgba-unorm' | 'bc3-rgba-unorm'
	| 'etc2-rgb8unorm' | 'etc2-rgb8unorm-srgb'
	| 'astc-4x4-unorm' | 'astc-8x8-unorm'

/**
 * Texture dimension
 */
export type TextureDimension = '1d' | '2d' | '3d'

/**
 * Texture usage
 */
export type TextureUsage
	= | 'copy-src'
	| 'copy-dst'
	| 'texture-binding'
	| 'storage-binding'
	| 'render-attachment'
	| 'transient-attachment'

/**
 * Texture descriptor
 */
export interface TextureDescriptor {
	label?: string
	size: [number, number?, number?]
	format: TextureFormat
	dimension?: TextureDimension
	mipLevelCount?: number
	sampleCount?: number
	usage: TextureUsage[]
	viewFormats?: TextureFormat[]
}

/**
 * Texture view descriptor
 */
export interface TextureViewDescriptor {
	label?: string
	format?: TextureFormat
	dimension?: '1d' | '2d' | '2d-array' | 'cube' | 'cube-array' | '3d'
	aspect?: 'all' | 'stencil-only' | 'depth-only'
	baseMipLevel?: number
	mipLevelCount?: number
	baseArrayLayer?: number
	arrayLayerCount?: number
}

/**
 * Sampler descriptor
 */
export interface SamplerDescriptor {
	label?: string
	addressModeU?: 'clamp-to-edge' | 'repeat' | 'mirror-repeat'
	addressModeV?: 'clamp-to-edge' | 'repeat' | 'mirror-repeat'
	addressModeW?: 'clamp-to-edge' | 'repeat' | 'mirror-repeat'
	magFilter?: 'nearest' | 'linear'
	minFilter?: 'nearest' | 'linear'
	mipmapFilter?: 'nearest' | 'linear'
	lodMinClamp?: number
	lodMaxClamp?: number
	maxAnisotropy?: number
	compare?: 'never' | 'less' | 'equal' | 'less-equal' | 'greater' | 'not-equal' | 'greater-equal' | 'always'
}

// ============================================================================
// Rendering Types
// ============================================================================

/**
 * Render pass descriptor
 */
export interface RenderPassDescriptor {
	label?: string
	colorAttachments: ColorAttachment[]
	depthStencilAttachment?: DepthStencilAttachment
}

/**
 * Color attachment
 */
export interface ColorAttachment {
	view: unknown // TextureView
	resolveTarget?: unknown
	clearValue?: Color
	loadOp: 'load' | 'clear'
	storeOp: 'store' | 'discard'
}

/**
 * Depth stencil attachment
 */
export interface DepthStencilAttachment {
	view: unknown // TextureView
	depthClearValue?: number
	depthLoadOp?: 'load' | 'clear'
	depthStoreOp?: 'store' | 'discard'
	depthReadOnly?: boolean
	stencilClearValue?: number
	stencilLoadOp?: 'load' | 'clear'
	stencilStoreOp?: 'store' | 'discard'
	stencilReadOnly?: boolean
}

/**
 * Render pipeline descriptor
 */
export interface RenderPipelineDescriptor {
	label?: string
	layout?: 'auto' | unknown
	vertex: VertexState
	fragment?: FragmentState
	primitive?: PrimitiveState
	depthStencil?: DepthStencilState
	multisample?: MultisampleState
}

/**
 * Vertex state
 */
export interface VertexState {
	module: unknown
	entryPoint?: string
	buffers?: VertexBufferLayout[]
}

/**
 * Fragment state
 */
export interface FragmentState {
	module: unknown
	entryPoint?: string
	targets: RenderTargetInfo[]
}

/**
 * Render target info
 */
export interface RenderTargetInfo {
	format: TextureFormat
	blend?: BlendState
	writeMask?: number
}

/**
 * Blend state
 */
export interface BlendState {
	color?: BlendComponent
	alpha?: BlendComponent
}

/**
 * Blend component
 */
export interface BlendComponent {
	operation: 'add' | 'subtract' | 'reverse-subtract' | 'min' | 'max'
	srcFactor: BlendFactor
	dstFactor: BlendFactor
}

/**
 * Blend factor
 */
export type BlendFactor
	= | 'zero' | 'one' | 'src' | 'one-minus-src'
	| 'src-alpha' | 'one-minus-src-alpha'
	| 'dst' | 'one-minus-dst'
	| 'dst-alpha' | 'one-minus-dst-alpha'
	| 'src-alpha-saturated' | 'constant' | 'one-minus-constant'

/**
 * Primitive state
 */
export interface PrimitiveState {
	topology?: 'point-list' | 'line-list' | 'line-strip' | 'triangle-list' | 'triangle-strip'
	stripIndexFormat?: 'uint16' | 'uint32'
	cullMode?: 'none' | 'front' | 'back'
	frontFace?: 'ccw' | 'cw'
	unclippedDepth?: boolean
}

/**
 * Depth stencil state
 */
export interface DepthStencilState {
	format: TextureFormat
	depthWriteEnabled?: boolean
	depthCompare?: CompareFunction
	stencilFront?: StencilFaceState
	stencilBack?: StencilFaceState
	depthBias?: number
	depthBiasSlopeScale?: number
	depthBiasClamp?: number
}

/**
 * Stencil face state
 */
export interface StencilFaceState {
	compare?: CompareFunction
	failOp?: StencilOperation
	depthFailOp?: StencilOperation
	passOp?: StencilOperation
}

/**
 * Compare function
 */
export type CompareFunction
	= | 'never' | 'less' | 'equal' | 'less-equal'
	| 'greater' | 'not-equal' | 'greater-equal' | 'always'

/**
 * Stencil operation
 */
export type StencilOperation
	= | 'keep' | 'zero' | 'replace' | 'invert'
	| 'increment-clamp' | 'decrement-clamp'
	| 'increment-wrap' | 'decrement-wrap'

/**
 * Multisample state
 */
export interface MultisampleState {
	count?: number
	mask?: number
	alphaToCoverageEnabled?: boolean
}

// ============================================================================
// Compute Pipeline Types
// ============================================================================

/**
 * Compute pipeline descriptor
 */
export interface ComputePipelineDescriptor {
	label?: string
	layout?: 'auto' | unknown
	compute: ComputeState
}

/**
 * Compute state
 */
export interface ComputeState {
	module: unknown
	entryPoint?: string
}

/**
 * Compute pass descriptor
 */
export interface ComputePassDescriptor {
	label?: string
}

// ============================================================================
// Light Types
// ============================================================================

/**
 * Light type
 */
export type LightType = 'directional' | 'point' | 'spot' | 'ambient' | 'hemisphere'

/**
 * Light base
 */
export interface LightBase {
	type: LightType
	color?: Color
	intensity?: number
	enabled?: boolean
	castShadow?: boolean
	shadowBias?: number
	shadowMapSize?: number
}

/**
 * Directional light
 */
export interface DirectionalLight extends LightBase {
	type: 'directional'
	direction: Vector3
}

/**
 * Point light
 */
export interface PointLight extends LightBase {
	type: 'point'
	position: Vector3
	range?: number
	attenuation?: number
}

/**
 * Spot light
 */
export interface SpotLight extends LightBase {
	type: 'spot'
	position: Vector3
	direction: Vector3
	angle: number
	penumbra?: number
	range?: number
}

/**
 * Ambient light
 */
export interface AmbientLight extends LightBase {
	type: 'ambient'
}

/**
 * Hemisphere light
 */
export interface HemisphereLight extends LightBase {
	type: 'hemisphere'
	skyColor?: Color
	groundColor?: Color
}

/**
 * All light types
 */
export type Light
	= | DirectionalLight
	| PointLight
	| SpotLight
	| AmbientLight
	| HemisphereLight

// ============================================================================
// Material Types
// ============================================================================

/**
 * Texture reference (for materials)
 */
export type TextureRef = string | TextureDescriptor

/**
 * Material base
 */
export interface MaterialBase {
	id: string
	shader?: string
	transparent?: boolean
	side?: 'front' | 'back' | 'double'
	depthTest?: boolean
	depthWrite?: boolean
	blendMode?: 'opaque' | 'blend' | 'add' | 'multiply'
}

/**
 * PBR material
 */
export interface PBRMaterial extends MaterialBase {
	type: 'pbr'
	baseColor?: Color | TextureRef
	metallic?: number | TextureRef
	roughness?: number | TextureRef
	normal?: TextureRef
	occlusion?: TextureRef
	emissive?: Color | TextureRef
	emissiveIntensity?: number
}

/**
 * Unlit material
 */
export interface UnlitMaterial extends MaterialBase {
	type: 'unlit'
	color?: Color
	texture?: TextureRef
}

/**
 * Phong material
 */
export interface PhongMaterial extends MaterialBase {
	type: 'phong'
	diffuse?: Color | TextureRef
	specular?: Color
	shininess?: number
	normal?: TextureRef
	bump?: TextureRef
}

/**
 * All material types
 */
export type Material
	= | PBRMaterial
	| UnlitMaterial
	| PhongMaterial
