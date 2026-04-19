# Stream

**Since 1.5.0**

Represents an async iterable stream with readable and closed state tracking.

## Signature

```typescript
type Stream<T = unknown> = {
  [Symbol.asyncIterator]: () => AsyncIterator<T>
  readable: boolean
  closed: boolean
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The type of values produced by the stream |

## Examples

### Basic Usage

```typescript
import type { Stream } from 'uni-types'

type NumberStream = Stream<number>

async function processStream(stream: NumberStream) {
  if (!stream.readable || stream.closed) return

  for await (const value of stream) {
    console.log('Received:', value)
  }
}
```

### Chunk Stream

```typescript
import type { Stream } from 'uni-types'

type ChunkStream = Stream<Uint8Array>

async function readChunks(stream: ChunkStream) {
  const chunks: Uint8Array[] = []

  for await (const chunk of stream) {
    chunks.push(chunk)
    if (stream.closed) break
  }

  return chunks
}
```

## Related

- [`StreamReader`](./stream-reader)
- [`StreamWriter`](./stream-writer)
