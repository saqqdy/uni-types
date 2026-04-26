# Reactive Programming Types

**Since 1.9.0**

Types for reactive programming patterns.

## Overview

Reactive Programming Types provides type-level reactive programming utilities. It supports Observable, Subject, Signal, Stream, Channel, operators, and reactive stores.

This module enables building type-safe reactive applications with proper constraints for streams, subscriptions, and reactive primitives.

## Basic Usage

```typescript
import type { Observable, Subject, Signal, Stream, OperatorFunction } from 'uni-types'

// Define observable
type DataObservable = Observable<Data>

// Define subject
type DataSubject = Subject<Data>

// Define signal
type CountSignal = Signal<number>

// Define operator
type MapOperator = OperatorFunction<Input, Output>
```

## Key Types

### Observable

Observable type.

```typescript
interface Observable<T> {
  subscribe: (observer: Observer<T>) => Subscription
  pipe: <R>(...operators: OperatorFunction<T, R>[]) => Observable<R>
}
```

### Observer

Observer type.

```typescript
interface Observer<T> {
  next: (value: T) => void
  error?: (error: Error) => void
  complete?: () => void
}
```

### Subscription

Subscription type.

```typescript
interface Subscription {
  unsubscribe: () => void
  add: (subscription: Subscription) => Subscription
  remove: (subscription: Subscription) => void
  closed: boolean
}
```

### Subject

Subject type (observable and observer).

```typescript
interface Subject<T> extends Observable<T> {
  next: (value: T) => void
  error: (error: Error) => void
  complete: () => void
  value: T | undefined
  closed: boolean
  hasError: boolean
}
```

### BehaviorSubject

Behavior subject (has current value).

```typescript
interface BehaviorSubject<T> extends Subject<T> {
  value: T
  getValue: () => T
}
```

### ReplaySubject

Replay subject (replays values to new subscribers).

```typescript
interface ReplaySubject<T> extends Subject<T> {
  bufferSize: number
  windowTime?: number
}
```

### OperatorFunction

Operator function type.

```typescript
type OperatorFunction<T, R> = (source: Observable<T>) => Observable<R>
```

### OperatorName

Common operator names.

```typescript
type OperatorName =
  | 'map' | 'filter' | 'reduce' | 'scan'
  | 'take' | 'takeUntil' | 'takeWhile' | 'skip'
  | 'debounce' | 'debounceTime' | 'throttle' | 'throttleTime'
  | 'mergeMap' | 'switchMap' | 'concatMap' | 'exhaustMap'
  | 'catchError' | 'retry' | 'retryWhen'
  | 'combineLatest' | 'zip' | 'forkJoin'
  // ... more operators
```

### Stream

Stream type.

```typescript
interface Stream<T> extends Observable<T> {
  readonly closed: boolean
  abort: () => void
  [Symbol.asyncIterator]: () => AsyncIterator<T>
}
```

### Signal

Signal type (reactive primitive).

```typescript
interface Signal<T> {
  value: T
  subscribe: (callback: (value: T) => void) => () => void
  readonly: () => ReadonlySignal<T>
}
```

### WritableSignal

Writable signal type.

```typescript
interface WritableSignal<T> extends Signal<T> {
  set: (value: T) => void
  update: (updater: (value: T) => T) => void
}
```

### Computed

Computed signal type.

```typescript
interface Computed<T> extends ReadonlySignal<T> {
  effect: () => void
  dependencies: Set<Signal<unknown>>
}
```

### Effect

Effect type.

```typescript
interface Effect {
  execute: () => void | (() => void)
  cleanup?: () => void
  dependencies?: Set<Signal<unknown>>
  dispose: () => void
}
```

### BackpressureStrategy

Backpressure strategy types.

```typescript
type BackpressureStrategy =
  | 'drop' // Drop new items when buffer is full
  | 'buffer' // Buffer items until processed
  | 'error' // Throw error when buffer is full
  | 'latest' // Only keep latest item
  | 'block' // Block producer until space available
```

### Channel

Channel type.

```typescript
interface Channel<T> {
  send: (value: T) => Promise<void> | void
  receive: () => Promise<T>
  close: () => void
  closed: boolean
}
```

### ReactiveStore

Reactive store type.

```typescript
interface ReactiveStore<T> {
  state: T
  subscribe: (listener: (state: T) => void) => () => void
  update: (updater: (state: T) => T) => void
  setState: (newState: T) => void
  reset: () => void
}
```

## Related

- [Event System](./event-system) - Event types
- [Functional Programming](./functional) - Functional patterns
- [Async Utilities](./async) - Async types