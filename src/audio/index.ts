/**
 * Type-Level Audio Processing
 *
 * Type-level audio processing utilities.
 */

// ============================================================================
// Audio Sample Types
// ============================================================================

/**
 * Audio sample type (single sample value)
 */
export type AudioSample = number

/**
 * Audio buffer type
 */
export interface AudioBufferData<T = Float32Array | number[]> {
	data: T
	sampleRate: number
	numberOfChannels: number
	length: number
	duration: number
}

/**
 * Audio channel (array of samples)
 */
export type AudioChannel = AudioSample[]

/**
 * Sample rate type
 */
export type SampleRate
	= | 8000
	| 11025
	| 16000
	| 22050
	| 32000
	| 44100
	| 48000
	| 88200
	| 96000
	| 192000

/**
 * Bit depth type
 */
export type BitDepth = 8 | 16 | 24 | 32 | 64

/**
 * Audio sample format
 */
export type SampleFormat = 'int8' | 'int16' | 'int24' | 'int32' | 'float32' | 'float64'

// ============================================================================
// Waveform Types
// ============================================================================

/**
 * Waveform type
 */
export type WaveformType
	= | 'sine'
	| 'square'
	| 'triangle'
	| 'sawtooth'
	| 'pulse'
	| 'noise-white'
	| 'noise-pink'
	| 'noise-brown'

/**
 * ADSR Envelope
 */
export interface ADSREnvelope {
	attack: number // Attack time in seconds
	decay: number // Decay time in seconds
	sustain: number // Sustain level (0-1)
	release: number // Release time in seconds
}

/**
 * Full envelope with additional parameters
 */
export interface Envelope extends ADSREnvelope {
	delay?: number // Initial delay before attack
	hold?: number // Hold time at sustain level before release
	attackCurve?: 'linear' | 'exponential' | 's-curve' | 'bounce'
	decayCurve?: 'linear' | 'exponential'
	releaseCurve?: 'linear' | 'exponential' | 's-curve'
}

/**
 * Waveform generator options
 */
export interface WaveformOptions {
	type: WaveformType
	frequency: Frequency
	detune?: number // Cents
	phase?: number // Initial phase (0-1)
	pulseWidth?: number // For pulse wave (0-1)
}

// ============================================================================
// Frequency Types
// ============================================================================

/**
 * Frequency in Hz
 */
export type Frequency = number

/**
 * Musical note names
 */
export type NoteName
	= | 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E'
	| 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab' | 'A'
	| 'A#' | 'Bb' | 'B'

/**
 * Octave range (standard piano range)
 */
export type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

/**
 * MIDI note number (0-127)
 */
export type MIDINoteNumber = number & { readonly _brand: unique symbol }

/**
 * Note pitch info
 */
export interface NotePitch {
	note: NoteName
	octave: Octave
	frequency: Frequency
	midiNumber: number
}

/**
 * Musical interval type
 */
export type MusicalInterval
	= | 'unison' | 'minor-second' | 'major-second'
	| 'minor-third' | 'major-third' | 'perfect-fourth'
	| 'tritone' | 'perfect-fifth' | 'minor-sixth'
	| 'major-sixth' | 'minor-seventh' | 'major-seventh'
	| 'octave'

/**
 * Semitone interval
 */
export type SemitoneInterval = number

// ============================================================================
// Audio Effect Types
// ============================================================================

/**
 * Base audio effect
 */
export interface AudioEffectBase {
	type: string
	enabled: boolean
	mix: number // Dry/wet mix (0-1)
}

/**
 * Reverb effect
 */
export interface ReverbEffect extends AudioEffectBase {
	type: 'reverb'
	decay: number // Decay time in seconds
	preDelay?: number
	damping?: number
	roomSize?: 'small' | 'medium' | 'large' | 'hall' | 'cathedral'
	impulseResponse?: AudioBufferData
}

/**
 * Delay effect
 */
export interface DelayEffect extends AudioEffectBase {
	type: 'delay'
	time: number // Delay time in seconds
	feedback: number // Feedback amount (0-1)
	maxDelayTime?: number
	pingPong?: boolean
}

/**
 * Filter effect
 */
export interface FilterEffect extends AudioEffectBase {
	type: 'filter'
	filterType: FilterType
	frequency: Frequency
	Q?: number // Quality factor
	gain?: number // For peaking/shelving filters
}

/**
 * Filter type
 */
export type FilterType
	= | 'lowpass' | 'highpass' | 'bandpass'
	| 'notch' | 'allpass' | 'peaking'
	| 'lowshelf' | 'highshelf'

/**
 * Compressor effect
 */
export interface CompressorEffect extends AudioEffectBase {
	type: 'compressor'
	threshold: number // dB
	ratio: number
	attack: number // seconds
	release: number // seconds
	knee?: number // dB
	makeUpGain?: number // dB
}

/**
 * Equalizer effect
 */
export interface EqualizerEffect extends AudioEffectBase {
	type: 'equalizer'
	bands: EQBand[]
}

/**
 * EQ band
 */
export interface EQBand {
	frequency: Frequency
	gain: number // dB
	Q?: number
	type: 'lowpass' | 'highpass' | 'peaking' | 'lowshelf' | 'highshelf'
}

/**
 * Distortion effect
 */
export interface DistortionEffect extends AudioEffectBase {
	type: 'distortion'
	amount: number // 0-1
	oversample?: 'none' | '2x' | '4x'
	curve?: 'soft' | 'hard' | 'fuzz' | number[]
}

/**
 * Chorus effect
 */
export interface ChorusEffect extends AudioEffectBase {
	type: 'chorus'
	rate: number // Hz
	depth: number // 0-1
	delay: number // seconds
	feedback?: number
	spread?: number
}

/**
 * Flanger effect
 */
export interface FlangerEffect extends AudioEffectBase {
	type: 'flanger'
	rate: number // Hz
	depth: number
	delay: number // seconds
	feedback: number
}

/**
 * Phaser effect
 */
export interface PhaserEffect extends AudioEffectBase {
	type: 'phaser'
	rate: number
	depth: number
	stages: number
	feedback: number
	baseFrequency?: Frequency
}

/**
 * Tremolo effect
 */
export interface TremoloEffect extends AudioEffectBase {
	type: 'tremolo'
	rate: number // Hz
	depth: number // 0-1
	shape?: 'sine' | 'square' | 'triangle'
}

/**
 * Limiter effect
 */
export interface LimiterEffect extends AudioEffectBase {
	type: 'limiter'
	threshold: number // dB
	release: number // seconds
	lookahead?: number // seconds
}

/**
 * All audio effects
 */
export type AudioEffect
	= | ReverbEffect
	| DelayEffect
	| FilterEffect
	| CompressorEffect
	| EqualizerEffect
	| DistortionEffect
	| ChorusEffect
	| FlangerEffect
	| PhaserEffect
	| TremoloEffect
	| LimiterEffect

// ============================================================================
// MIDI Types
// ============================================================================

/**
 * MIDI note
 */
export interface MIDINote {
	note: NoteName
	octave: Octave
	velocity: number // 0-127
	duration: number // seconds
	channel?: number // 0-15
	startTime?: number // seconds
}

/**
 * MIDI event
 */
export type MIDIEvent
	= | MIDINoteOnEvent
	| MIDINoteOffEvent
	| MIDIControlChangeEvent
	| MIDIPitchBendEvent
	| MIDIAftertouchEvent
	| MIDIProgramChangeEvent
	| MIDISystemExclusiveEvent

/**
 * MIDI Note On event
 */
export interface MIDINoteOnEvent {
	type: 'note-on'
	channel: number
	note: number
	velocity: number
	timestamp: number
}

/**
 * MIDI Note Off event
 */
export interface MIDINoteOffEvent {
	type: 'note-off'
	channel: number
	note: number
	velocity: number
	timestamp: number
}

/**
 * MIDI Control Change event
 */
export interface MIDIControlChangeEvent {
	type: 'control-change'
	channel: number
	controller: number
	value: number
	timestamp: number
}

/**
 * MIDI Pitch Bend event
 */
export interface MIDIPitchBendEvent {
	type: 'pitch-bend'
	channel: number
	value: number // -8192 to 8191
	timestamp: number
}

/**
 * MIDI Aftertouch event
 */
export interface MIDIAftertouchEvent {
	type: 'aftertouch'
	channel: number
	note?: number
	pressure: number
	timestamp: number
}

/**
 * MIDI Program Change event
 */
export interface MIDIProgramChangeEvent {
	type: 'program-change'
	channel: number
	program: number
	timestamp: number
}

/**
 * MIDI System Exclusive event
 */
export interface MIDISystemExclusiveEvent {
	type: 'sysex'
	data: number[]
	timestamp: number
}

/**
 * MIDI sequence
 */
export interface MIDISequence {
	tracks: MIDITrack[]
	bpm: number
	timeSignature: [number, number]
	ppqn: number // Pulses per quarter note
	duration: number
}

/**
 * MIDI track
 */
export interface MIDITrack {
	name?: string
	events: MIDIEvent[]
	channel?: number
	instrument?: number
	volume?: number
	pan?: number
}

/**
 * MIDI controller numbers
 */
export type MIDIController
	= | 'bank-select' // 0
	| 'modulation' // 1
	| 'breath' // 2
	| 'foot' // 4
	| 'portamento-time' // 5
	| 'data-entry' // 6
	| 'volume' // 7
	| 'balance' // 8
	| 'pan' // 10
	| 'expression' // 11
	| 'sustain' // 64
	| 'portamento' // 65
	| 'sostenuto' // 66
	| 'soft-pedal' // 67

// ============================================================================
// Synthesizer Types
// ============================================================================

/**
 * Oscillator options
 */
export interface OscillatorOptions {
	type?: WaveformType
	frequency?: Frequency
	detune?: number
	partials?: number
}

/**
 * Oscillator node
 */
export interface OscillatorNodeOptions extends OscillatorOptions {
	frequency: Frequency
	type: WaveformType
}

/**
 * LFO (Low Frequency Oscillator)
 */
export interface LFOOptions {
	frequency: Frequency
	type: WaveformType
	depth: number
	target: 'frequency' | 'amplitude' | 'filter'
	phase?: number
}

/**
 * Audio source node
 */
export type AudioSourceNode
	= | { type: 'oscillator', options: OscillatorNodeOptions }
	| { type: 'sample', buffer: AudioBufferData, loop?: boolean }
	| { type: 'noise', color: 'white' | 'pink' | 'brown' }

/**
 * Synth voice
 */
export interface SynthVoice {
	oscillators: OscillatorOptions[]
	filter?: FilterEffect
	envelope: ADSREnvelope
	amp: number
	pan: number
}

/**
 * Synthesizer patch
 */
export interface SynthesizerPatch {
	name: string
	voices: SynthVoice[]
	polyphonic: boolean
	maxVoices?: number
	portamento?: number
	glideMode?: 'legato' | 'always'
	masterVolume?: number
	effects?: AudioEffect[]
}

// ============================================================================
// Analysis Types
// ============================================================================

/**
 * FFT result
 */
export interface FFTResult {
	magnitudes: number[]
	frequencies: number[]
	binSize: number
	size: number
	sampleRate: number
}

/**
 * Spectrum data
 */
export interface Spectrum {
	frequencies: Frequency[]
	magnitudes: number[]
	phases?: number[]
	binCount: number
}

/**
 * Spectrogram (time-frequency representation)
 */
export interface Spectrogram {
	data: number[][] // [time][frequency]
	times: number[]
	frequencies: number[]
	windowSize: number
	hopSize: number
}

/**
 * Waveform analysis data
 */
export interface WaveformAnalysis {
	peaks: number[]
	rms: number
	crestFactor: number
	zeroCrossingRate: number
	peakFrequency: Frequency
	spectralCentroid?: number
	spectralRolloff?: number
	spectralFlux?: number
}

/**
 * Pitch detection result
 */
export interface PitchDetectionResult {
	frequency: Frequency | null
	probability: number
	note: NotePitch | null
	pitchClass: string | null
}

/**
 * Beat detection result
 */
export interface BeatDetectionResult {
	bpm: number
	beats: number[] // timestamps in seconds
	confidence: number
	timeSignature?: [number, number]
}

/**
 * Audio feature extraction
 */
export interface AudioFeatures {
	duration: number
	loudness: number
	energy: number
	danceability?: number
	valence?: number
	acousticness?: number
	instrumentalness?: number
	speechiness?: number
	tempo: number
	key?: NoteName
	mode?: 'major' | 'minor'
	timeSignature?: number
}

// ============================================================================
// Encoding Types
// ============================================================================

/**
 * Audio format
 */
export type AudioFormat
	= | 'wav'
	| 'mp3'
	| 'ogg'
	| 'flac'
	| 'aac'
	| 'm4a'
	| 'opus'
	| 'aiff'
	| 'webm'

/**
 * Audio encoding options
 */
export interface AudioEncodingOptions {
	format: AudioFormat
	bitRate?: number // For lossy formats
	bitDepth?: BitDepth // For lossless formats
	sampleRate?: SampleRate
	channels?: number
	compression?: number // For FLAC (0-8)
}

/**
 * Audio metadata
 */
export interface AudioMetadata {
	title?: string
	artist?: string
	album?: string
	year?: number
	track?: number
	genre?: string
	duration: number
	sampleRate: SampleRate
	bitDepth: BitDepth
	channels: number
	bitrate?: number
}

// ============================================================================
// Audio Node Types
// ============================================================================

/**
 * Audio node connection
 */
export interface AudioNodeConnection {
	from: string
	to: string
	output?: number
	input?: number
}

/**
 * Audio graph
 */
export interface AudioGraph {
	nodes: AudioGraphNode[]
	connections: AudioNodeConnection[]
	output: string
}

/**
 * Audio graph node
 */
export type AudioGraphNode
	= | { id: string, type: 'source', data: AudioSourceNode }
	| { id: string, type: 'effect', data: AudioEffect }
	| { id: string, type: 'destination' }
	| { id: string, type: 'analyser', options: AnalyserOptions }
	| { id: string, type: 'gain', options: GainOptions }
	| { id: string, type: 'panner', options: PannerOptions }
	| { id: string, type: 'splitter', options: ChannelSplitterOptions }
	| { id: string, type: 'merger', options: ChannelMergerOptions }

/**
 * Analyser node options
 */
export interface AnalyserOptions {
	fftSize: number
	smoothingTimeConstant: number
	minDecibels: number
	maxDecibels: number
}

/**
 * Gain node options
 */
export interface GainOptions {
	gain: number
}

/**
 * Panner node options
 */
export interface PannerOptions {
	pan: number // -1 (left) to 1 (right)
}

/**
 * Channel splitter options
 */
export interface ChannelSplitterOptions {
	outputs: number
}

/**
 * Channel merger options
 */
export interface ChannelMergerOptions {
	inputs: number
}

// ============================================================================
// Spatial Audio Types
// ============================================================================

/**
 * Spatial audio position
 */
export interface SpatialPosition {
	x: number
	y: number
	z: number
}

/**
 * Spatial orientation
 */
export interface SpatialOrientation {
	x: number
	y: number
	z: number
}

/**
 * Spatial panner options
 */
export interface SpatialPannerOptions {
	position: SpatialPosition
	orientation?: SpatialOrientation
	refDistance: number
	maxDistance: number
	rolloffFactor: number
	distanceModel: 'linear' | 'inverse' | 'exponential'
	coneInnerAngle?: number
	coneOuterAngle?: number
	coneOuterGain?: number
}

/**
 * Audio listener options
 */
export interface AudioListenerOptions {
	position: SpatialPosition
	forward: SpatialOrientation
	up: SpatialOrientation
}
