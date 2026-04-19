/**
 * AI/ML Type Utilities
 *
 * Types for machine learning and AI applications.
 */

// ============================================================================
// Tensor Types
// ============================================================================

/**
 * Tensor shape type
 */
export type TensorShape = number[]

/**
 * Tensor rank type
 */
export type TensorRank = 0 | 1 | 2 | 3 | 4 | 5 | 6

/**
 * Tensor data type
 */
export type TensorDType = 'float32' | 'float64' | 'int32' | 'int64' | 'uint8' | 'bool' | 'string'

/**
 * Tensor type
 */
export interface Tensor<Shape extends TensorShape = TensorShape, DType extends TensorDType = 'float32'> {
	shape: Shape
	dtype: DType
	data: unknown
	rank: number
	size: number
	strides: number[]
}

/**
 * Scalar tensor (rank 0)
 */
export type ScalarTensor<DType extends TensorDType = 'float32'> = Tensor<[], DType>

/**
 * Vector tensor (rank 1)
 */
export type VectorTensor<Dim extends number, DType extends TensorDType = 'float32'> = Tensor<[Dim], DType>

/**
 * Matrix tensor (rank 2)
 */
export type MatrixTensor<Rows extends number, Cols extends number, DType extends TensorDType = 'float32'> = Tensor<[Rows, Cols], DType>

/**
 * 3D Tensor
 */
export type Tensor3D<D1 extends number, D2 extends number, D3 extends number, DType extends TensorDType = 'float32'> = Tensor<[D1, D2, D3], DType>

/**
 * 4D Tensor (common for images: batch, height, width, channels)
 */
export type Tensor4D<Batch extends number, Height extends number, Width extends number, Channels extends number, DType extends TensorDType = 'float32'> = Tensor<[Batch, Height, Width, Channels], DType>

// ============================================================================
// Model Types
// ============================================================================

/**
 * Model type
 */
export interface Model<Input = unknown, Output = unknown> {
	name: string
	version: string
	inputShape: TensorShape
	outputShape: TensorShape
	forward: (input: Input) => Output
	backward?: (gradient: Output) => Input
}

/**
 * Model configuration
 */
export interface ModelConfig<T = unknown> {
	name: string
	version?: string
	layers: LayerConfig[]
	loss: LossFunction
	optimizer: Optimizer
	metrics?: MLMetric[]
	inputShape: TensorShape
	outputShape: TensorShape
	options?: T
}

/**
 * Model weights
 */
export interface ModelWeights<T = Tensor> {
	layers: Record<string, T>
	biases: Record<string, T>
	metadata: {
		createdAt: Date
		updatedAt: Date
		version: string
	}
}

/**
 * Model parameters
 */
export interface ModelParams {
	trainable: number
	nonTrainable: number
	total: number
	layers: Record<string, { trainable: number, nonTrainable: number }>
}

// ============================================================================
// Layer Types
// ============================================================================

/**
 * Layer type
 */
export interface Layer<T = unknown> {
	name: string
	type: LayerType
	inputShape: TensorShape
	outputShape: TensorShape
	params: T
	trainable: boolean
}

/**
 * Layer type enumeration
 */
export type LayerType = 'dense' | 'conv1d' | 'conv2d' | 'conv3d' | 'maxpool' | 'avgpool' | 'lstm' | 'gru' | 'attention' | 'dropout' | 'batchnorm' | 'layernorm' | 'activation' | 'embedding' | 'flatten' | 'reshape' | 'concatenate' | 'add' | 'multiply'

/**
 * Layer configuration
 */
export interface LayerConfig<T = unknown> {
	type: LayerType
	name?: string
	inputShape?: TensorShape
	units?: number
	filters?: number
	kernelSize?: number | [number, number]
	strides?: number | [number, number]
	padding?: 'valid' | 'same'
	activation?: ActivationFunction
	dropoutRate?: number
	trainable?: boolean
	options?: T
}

/**
 * Dense layer
 */
export interface DenseLayer extends Layer<{ units: number, activation?: ActivationFunction }> {
	type: 'dense'
}

/**
 * Convolutional layer
 */
export interface ConvLayer extends Layer<{ filters: number, kernelSize: [number, number], strides?: [number, number], padding?: 'valid' | 'same' }> {
	type: 'conv1d' | 'conv2d' | 'conv3d'
}

/**
 * Pooling layer
 */
export interface PoolingLayer extends Layer<{ poolSize: [number, number], strides?: [number, number], padding?: 'valid' | 'same' }> {
	type: 'maxpool' | 'avgpool'
}

/**
 * Activation layer
 */
export interface ActivationLayer extends Layer<{ activation: ActivationFunction }> {
	type: 'activation'
}

/**
 * Normalization layer
 */
export interface NormalizationLayer extends Layer<{ axis: number, epsilon?: number }> {
	type: 'batchnorm' | 'layernorm'
}

/**
 * Recurrent layer
 */
export interface RecurrentLayer extends Layer<{ units: number, returnSequences?: boolean, bidirectional?: boolean }> {
	type: 'lstm' | 'gru'
}

/**
 * Attention layer
 */
export interface AttentionLayer extends Layer<{ heads: number, keyDim: number }> {
	type: 'attention'
}

// ============================================================================
// Activation Functions
// ============================================================================

/**
 * Activation function type
 */
export type ActivationFunction = 'relu' | 'sigmoid' | 'tanh' | 'softmax' | 'leakyrelu' | 'elu' | 'selu' | 'gelu' | 'swish' | 'mish' | 'linear'

// ============================================================================
// Training Types
// ============================================================================

/**
 * Optimizer type
 */
export type Optimizer = 'sgd' | 'adam' | 'adamw' | 'rmsprop' | 'adagrad' | 'adadelta' | 'nadam' | 'ftrl'

/**
 * Loss function type
 */
export type LossFunction = 'mse' | 'mae' | 'crossentropy' | 'binary_crossentropy' | 'categorical_crossentropy' | 'sparse_categorical_crossentropy' | 'hinge' | 'huber' | 'logcosh' | 'kl_divergence'

/**
 * ML metric type
 */
export type MLMetric = 'accuracy' | 'precision' | 'recall' | 'f1' | 'auc' | 'mae' | 'mse' | 'rmse' | 'mape' | 'r2' | 'top_k_accuracy' | 'bleu' | 'rouge' | 'perplexity'

/**
 * Training configuration
 */
export interface TrainingConfig<T = unknown> {
	epochs: number
	batchSize: number
	optimizer: Optimizer
	learningRate: number
	loss: LossFunction
	metrics?: MLMetric[]
	validationSplit?: number
	validationData?: Dataset
	callbacks?: TrainingCallback[]
	earlyStopping?: EarlyStoppingConfig
	checkpoint?: CheckpointConfig
	options?: T
}

/**
 * Training callback
 */
export interface TrainingCallback {
	onEpochEnd?: (epoch: number, logs: TrainingLogs) => void | 'stop'
	onBatchEnd?: (batch: number, logs: TrainingLogs) => void
	onTrainEnd?: (logs: TrainingLogs[]) => void
}

/**
 * Training logs
 */
export interface TrainingLogs {
	epoch: number
	loss: number
	metrics?: Record<string, number>
	valLoss?: number
	valMetrics?: Record<string, number>
	learningRate?: number
}

/**
 * Early stopping configuration
 */
export interface EarlyStoppingConfig {
	monitor: string
	patience: number
	minDelta: number
	mode: 'min' | 'max' | 'auto'
	restoreBestWeights: boolean
}

/**
 * Checkpoint configuration
 */
export interface CheckpointConfig {
	filepath: string
	monitor: string
	saveBestOnly: boolean
	saveWeightsOnly: boolean
	mode: 'min' | 'max' | 'auto'
}

// ============================================================================
// Data Types
// ============================================================================

/**
 * Dataset type
 */
export interface Dataset<T = unknown> {
	size: number
	shape: TensorShape
	batch: (batchSize: number) => DataLoader<T>
	map: <U>(fn: (item: T) => U) => Dataset<U>
	filter: (fn: (item: T) => boolean) => Dataset<T>
	shuffle: (bufferSize?: number) => Dataset<T>
	split: (ratio: number) => [Dataset<T>, Dataset<T>]
	toArray: () => T[]
}

/**
 * Data loader type
 */
export interface DataLoader<T = unknown> {
	batchSize: number
	length: number
	iterator: () => AsyncIterable<Batch<T>>
	prefetch: (bufferSize: number) => DataLoader<T>
}

/**
 * Batch type
 */
export interface Batch<T = unknown> {
	data: T
	labels?: unknown
	index: number
	size: number
}

/**
 * Data transform
 */
export interface DataTransform<T = unknown> {
	name: string
	transform: (data: T) => T
	inverse?: (data: T) => T
}

/**
 * Data augmentation config
 */
export interface DataAugmentationConfig {
	enabled: boolean
	horizontalFlip?: boolean
	verticalFlip?: boolean
	rotationRange?: number
	widthShiftRange?: number
	heightShiftRange?: number
	zoomRange?: number | [number, number]
	brightnessRange?: [number, number]
	noise?: { mean: number, stddev: number }
}

// ============================================================================
// Inference Types
// ============================================================================

/**
 * Inference result
 */
export interface InferenceResult<T = unknown> {
	predictions: Prediction<T>[]
	confidence: number
	latency: number
	metadata?: Record<string, unknown>
}

/**
 * Prediction type
 */
export interface Prediction<T = unknown> {
	label: T
	probability: number
	confidence: Confidence
	boundingBox?: BoundingBox
}

/**
 * Probability type
 */
export type Probability = number & { __probability: true }

/**
 * Confidence type
 */
export type Confidence = 'high' | 'medium' | 'low' | number

/**
 * Bounding box (for object detection)
 */
export interface BoundingBox {
	x: number
	y: number
	width: number
	height: number
	label?: string
	score?: number
}

/**
 * Classification result
 */
export interface ClassificationResult<T extends string = string> {
	label: T
	probabilities: Record<T, Probability>
	topK: Array<{ label: T, probability: Probability }>
}

/**
 * Detection result
 */
export interface DetectionResult {
	boxes: BoundingBox[]
	scores: number[]
	labels: string[]
	count: number
}

/**
 * Segmentation result
 */
export interface SegmentationResult {
	mask: Tensor<TensorShape, 'float32'>
	classes: string[]
	scores: number[]
}

// ============================================================================
// Neural Network Architecture Types
// ============================================================================

/**
 * Neural network architecture
 */
export interface NeuralNetworkArchitecture {
	type: 'feedforward' | 'cnn' | 'rnn' | 'transformer' | 'gan' | 'autoencoder' | 'vae'
	layers: LayerConfig[]
	connections: Array<{ from: string, to: string }>
	inputs: string[]
	outputs: string[]
}

/**
 * Transformer config
 */
export interface TransformerConfig {
	vocabSize: number
	maxLength: number
	dModel: number
	nHead: number
	nLayer: number
	dFF: number
	dropout: number
	activation: ActivationFunction
}

/**
 * Attention config
 */
export interface AttentionConfig {
	type: 'self' | 'cross' | 'masked'
	headCount: number
	headDim: number
	dropout: number
	useBias: boolean
}

// ============================================================================
// Embedding Types
// ============================================================================

/**
 * Embedding config
 */
export interface EmbeddingConfig {
	vocabSize: number
	embeddingDim: number
	maxLength?: number
	pretrained?: string
	trainable: boolean
}

/**
 * Embedding result
 */
export interface EmbeddingResult {
	vector: number[]
	token: string
	index: number
}

// ============================================================================
// Tokenizer Types
// ============================================================================

/**
 * Tokenizer type
 */
export interface Tokenizer {
	type: 'word' | 'subword' | 'character' | 'bpe' | 'sentencepiece'
	vocabSize: number
	encode: (text: string) => number[]
	decode: (tokens: number[]) => string
	vocab: Record<string, number>
}

/**
 * Tokenizer config
 */
export interface TokenizerConfig {
	type: 'word' | 'subword' | 'character' | 'bpe' | 'sentencepiece'
	vocabSize: number
	maxLength?: number
	padToken?: string
	unkToken?: string
	startToken?: string
	endToken?: string
	lowercase?: boolean
}
