# Audio Processing Types

**Since 1.9.0**

Types for audio processing and music applications.

## Overview

Audio Processing Types provides type-level audio processing utilities. It supports audio samples, waveforms, MIDI, effects, synthesizers, and audio analysis.

This module enables building type-safe audio applications with proper constraints for audio buffers, effects, and music notation.

## Basic Usage

```typescript
import type { AudioSample, WaveformType, MIDINote, AudioEffect, Frequency } from 'uni-types'

// Define audio buffer
type AudioBuffer = AudioBufferData<Float32Array>

// Define MIDI note
type Note = MIDINote

// Define effect chain
type EffectChain = AudioEffect[]
```

## Key Types

### AudioSample

Audio sample type (single sample value).

```typescript
type AudioSample = number
```

### AudioBufferData

Audio buffer with metadata.

```typescript
interface AudioBufferData<T = Float32Array | number[]> {
  data: T
  sampleRate: number
  numberOfChannels: number
  length: number
  duration: number
}
```

### SampleRate

Sample rate enumeration.

```typescript
type SampleRate =
  | 8000 | 11025 | 16000 | 22050 | 32000
  | 44100 | 48000 | 88200 | 96000 | 192000
```

### WaveformType

Waveform type enumeration.

```typescript
type WaveformType =
  | 'sine'
  | 'square'
  | 'triangle'
  | 'sawtooth'
  | 'pulse'
  | 'noise-white'
  | 'noise-pink'
  | 'noise-brown'
```

### ADSREnvelope

ADSR envelope for synthesis.

```typescript
interface ADSREnvelope {
  attack: number // Attack time in seconds
  decay: number // Decay time in seconds
  sustain: number // Sustain level (0-1)
  release: number // Release time in seconds
}
```

### NoteName

Musical note names.

```typescript
type NoteName =
  | 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E'
  | 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab' | 'A'
  | 'A#' | 'Bb' | 'B'
```

### Octave

Octave range (standard piano).

```typescript
type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
```

### Frequency

Frequency in Hz.

```typescript
type Frequency = number
```

### AudioEffect

All audio effect types.

```typescript
type AudioEffect =
  | ReverbEffect
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
```

### MIDIEvent

MIDI event types.

```typescript
type MIDIEvent =
  | MIDINoteOnEvent
  | MIDINoteOffEvent
  | MIDIControlChangeEvent
  | MIDIPitchBendEvent
  | MIDIAftertouchEvent
  | MIDIProgramChangeEvent
  | MIDISystemExclusiveEvent
```

### MIDISequence

MIDI sequence with tracks.

```typescript
interface MIDISequence {
  tracks: MIDITrack[]
  bpm: number
  timeSignature: [number, number]
  ppqn: number // Pulses per quarter note
  duration: number
}
```

### SynthesizerPatch

Synthesizer patch configuration.

```typescript
interface SynthesizerPatch {
  name: string
  voices: SynthVoice[]
  polyphonic: boolean
  maxVoices?: number
  portamento?: number
  effects?: AudioEffect[]
}
```

### FFTResult

FFT analysis result.

```typescript
interface FFTResult {
  magnitudes: number[]
  frequencies: number[]
  binSize: number
  size: number
  sampleRate: number
}
```

### AudioFormat

Audio format enumeration.

```typescript
type AudioFormat =
  | 'wav' | 'mp3' | 'ogg' | 'flac'
  | 'aac' | 'm4a' | 'opus' | 'aiff' | 'webm'
```

## Related

- [Animation](./animation) - Animation types
- [Game Development](./game) - Game audio types
- [Graphics](./graphics) - Graphics types