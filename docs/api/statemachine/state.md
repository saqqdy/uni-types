# State

**Since 1.4.0**

State definition for state machines.

## Signature

```typescript
interface State<S extends string, Data = object> { state: S, data: Data }
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `S` | State name |
| `Data` | Optional state data |

## Description

Represents a state in the state machine with optional data.

## Examples

### Basic Usage

```typescript
import type { State } from 'uni-types'

type Loading = State<'loading', { progress: number }>
// { state: 'loading'; data: { progress: number } }

type Idle = State<'idle'>
// { state: 'idle'; data: object }
```

## Related

- [`StateMachine`](./statemachine) - State machine definition