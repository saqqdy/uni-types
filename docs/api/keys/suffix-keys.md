# SuffixKeys

Suffix all keys with a string.

## Signature

```typescript
type SuffixKeys<T, S extends string> = {
  [K in keyof T as `${K & string}${S}`]: T[K]
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type |
| `S` | The suffix to add |

## Examples

### Basic Usage

```typescript
import type { SuffixKeys } from 'uni-types'

type Data = { a: string; b: number }
type Suffixed = SuffixKeys<Data, 'Data'>
// { aData: string; bData: number }
```

### State Management

```typescript
type State = {
  loading: boolean
  error: string | null
  data: User[]
}

type LoadingState = SuffixKeys<State, 'Loading'>
// { loadingLoading: boolean; errorLoading: string | null; dataLoading: User[] }
```

### Event Handlers

```typescript
type Events = { click: Function; hover: Function }
type Handlers = SuffixKeys<Events, 'Handler'>
// { clickHandler: Function; hoverHandler: Function }
```

## Related

- [`PrefixKeys`](./prefix-keys) - Add prefix to all keys
- [`RenameKeys`](./rename-keys) - Rename specific keys