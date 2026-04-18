# Transition

**Since 1.4.0**

Transition definition for state machines.

## Signature

```typescript
interface Transition<Event extends string, From extends string, To extends string> {
  event: Event
  from: From
  to: To
}
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `Event` | Event name triggering transition |
| `From` | Source state |
| `To` | Target state |

## Description

Defines a state transition triggered by an event.

## Examples

### Basic Usage

```typescript
import type { Transition } from 'uni-types'

type NextTransition = Transition<'next', 'idle', 'loading'>
// { event: 'next'; from: 'idle'; to: 'loading' }
```

## Related

- [`StateMachine`](./statemachine) - State machine definition
- [`State`](./state) - State definition