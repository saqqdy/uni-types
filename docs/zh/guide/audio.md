# 音频处理类型

**始于 1.9.0**

用于音频处理和音乐应用的类型。

## 概述

音频处理类型提供了类型级音频处理工具。它支持音频采样、波形、MIDI、效果器、合成器和音频分析。

此模块支持构建具有音频缓冲区、效果器和音乐记号正确约束的类型安全音频应用。

## 基本用法

```typescript
import type { AudioSample, WaveformType, MIDINote, AudioEffect, Frequency } from 'uni-types'

// 定义音频缓冲区
type AudioBuffer = AudioBufferData<Float32Array>

// 定义 MIDI 音符
type Note = MIDINote

// 定义效果链
type EffectChain = AudioEffect[]
```

## 核心类型

### AudioSample

音频采样类型（单个采样值）。

```typescript
type AudioSample = number
```

### AudioBufferData

具有元数据的音频缓冲区。

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

采样率枚举。

```typescript
type SampleRate =
  | 8000 | 11025 | 16000 | 22050 | 32000
  | 44100 | 48000 | 88200 | 96000 | 192000
```

### WaveformType

波形类型枚举。

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

用于合成的 ADSR 包络。

```typescript
interface ADSREnvelope {
  attack: number // 起音时间（秒）
  decay: number // 衰减时间（秒）
  sustain: number // 保持电平 (0-1)
  release: number // 释放时间（秒）
}
```

### NoteName

音符名称。

```typescript
type NoteName =
  | 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E'
  | 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab' | 'A'
  | 'A#' | 'Bb' | 'B'
```

### Octave

八度范围（标准钢琴）。

```typescript
type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
```

### Frequency

频率（Hz）。

```typescript
type Frequency = number
```

### AudioEffect

所有音频效果类型。

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

MIDI 事件类型。

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

具有音轨的 MIDI 序列。

```typescript
interface MIDISequence {
  tracks: MIDITrack[]
  bpm: number
  timeSignature: [number, number]
  ppqn: number // 每四分音符脉冲数
  duration: number
}
```

### SynthesizerPatch

合成器音色配置。

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

FFT 分析结果。

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

音频格式枚举。

```typescript
type AudioFormat =
  | 'wav' | 'mp3' | 'ogg' | 'flac'
  | 'aac' | 'm4a' | 'opus' | 'aiff' | 'webm'
```

## 相关

- [动画系统](./animation) - 动画类型
- [游戏开发](./game) - 游戏音频类型
- [图形渲染](./graphics) - 图形类型