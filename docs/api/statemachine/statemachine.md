# StateMachine

**Since 1.4.0**

Type-level state machine definition.

## Signature

```typescript
interface StateMachine<T extends MachineConfig> { ... }
```

## Description

Defines a type-level finite state machine with states, transitions, and events.

## Examples

### Basic Usage

```typescript
import type { StateMachine, MachineConfig } from 'uni-types'

interface TrafficLight extends MachineConfig {
  states: ['red', 'yellow', 'green']
  initial: 'red'
  transitions: [
    { from: 'red', to: 'green', event: 'next' },
    { from: 'green', to: 'yellow', event: 'next' },
    { from: 'yellow', to: 'red', event: 'next' },
  ]
}
```

## Related

- [`State`](./state) - State definition
- [`Transition`](./transition) - Transition definition