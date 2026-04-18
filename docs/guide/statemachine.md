# Type-Level State Machines

**Since 1.4.0**

State machine types for complex state modeling.

## Basic Usage

### StateMachine

Define a state machine with states and transitions.

```typescript
import type { StateMachine } from 'uni-types'

type TrafficLight = StateMachine<{
  states: { red: {}; yellow: {}; green: {} }
  initial: 'red'
  transitions: {
    next: { red: 'green'; green: 'yellow'; yellow: 'red' }
  }
}>
```

### State

Define a state with data.

```typescript
import type { State } from 'uni-types'

type Loading = State<'loading', { progress: number }>
// { state: 'loading'; data: { progress: number } }
```

## State Utilities

### CurrentState

Get current state type.

```typescript
import type { CurrentState } from 'uni-types'

type Current = CurrentState<TrafficLight>  // 'red'
```

### NextState

Get next state after an event.

```typescript
import type { NextState } from 'uni-types'

type Next = NextState<TrafficLight, 'next'>  // 'green'
```

### ValidTransitions

Get all valid transitions from current state.

```typescript
import type { ValidTransitions } from 'uni-types'

type Transitions = ValidTransitions<TrafficLight>  // 'next'
```

### CanTransition

Check if a transition is valid.

```typescript
import type { CanTransition } from 'uni-types'

type Can = CanTransition<TrafficLight, 'next'>  // true
```

### IsTerminal

Check if current state is terminal.

```typescript
import type { IsTerminal } from 'uni-types'

type Done = IsTerminal<{ current: 'done'; transitions: {} }>  // true
```

## Building State Machines

### BuildStateMachine

Build state machine from config.

```typescript
import type { BuildStateMachine } from 'uni-types'

type SM = BuildStateMachine<{
  states: ['idle', 'running', 'stopped']
  initial: 'idle'
  transitions: {
    start: { idle: 'running' }
    stop: { running: 'stopped' }
  }
}>
```

### SendEvent

Send event to state machine.

```typescript
import type { SendEvent } from 'uni-types'

type NewState = SendEvent<TrafficLight, 'next'>
// { current: 'green'; ... }
```

## Related

- [Pattern Types](./pattern) - Pattern matching utilities
- [Data Structures](./datastructures) - Tree, Graph structures
