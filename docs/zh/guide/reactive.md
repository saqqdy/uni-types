# 响应式编程类型

**始于 1.9.0**

用于响应式编程模式的类型。

## 概述

响应式编程类型提供了类型级响应式编程工具。它支持 Observable、Subject、Signal、Stream、Channel、操作符和响应式存储。

此模块支持构建具有流、订阅和响应式原语正确约束的类型安全响应式应用。

## 基本用法

```typescript
import type { Observable, Subject, Signal, Stream, OperatorFunction } from 'uni-types'

// 定义 Observable
type DataObservable = Observable<Data>

// 定义 Subject
type DataSubject = Subject<Data>

// 定义 Signal
type CountSignal = Signal<number>

// 定义操作符
type MapOperator = OperatorFunction<Input, Output>
```

## 核心类型

### Observable

Observable 类型。

```typescript
interface Observable<T> {
  subscribe: (observer: Observer<T>) => Subscription
  pipe: <R>(...operators: OperatorFunction<T, R>[]) => Observable<R>
}
```

### Observer

Observer 类型。

```typescript
interface Observer<T> {
  next: (value: T) => void
  error?: (error: Error) => void
  complete?: () => void
}
```

### Subscription

Subscription 类型。

```typescript
interface Subscription {
  unsubscribe: () => void
  add: (subscription: Subscription) => Subscription
  remove: (subscription: Subscription) => void
  closed: boolean
}
```

### Subject

Subject 类型（Observable 和 Observer）。

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

Behavior Subject（具有当前值）。

```typescript
interface BehaviorSubject<T> extends Subject<T> {
  value: T
  getValue: () => T
}
```

### ReplaySubject

Replay Subject（向新订阅者重放值）。

```typescript
interface ReplaySubject<T> extends Subject<T> {
  bufferSize: number
  windowTime?: number
}
```

### OperatorFunction

操作符函数类型。

```typescript
type OperatorFunction<T, R> = (source: Observable<T>) => Observable<R>
```

### OperatorName

常用操作符名称。

```typescript
type OperatorName =
  | 'map' | 'filter' | 'reduce' | 'scan'
  | 'take' | 'takeUntil' | 'takeWhile' | 'skip'
  | 'debounce' | 'debounceTime' | 'throttle' | 'throttleTime'
  | 'mergeMap' | 'switchMap' | 'concatMap' | 'exhaustMap'
  | 'catchError' | 'retry' | 'retryWhen'
  | 'combineLatest' | 'zip' | 'forkJoin'
  // ... 更多操作符
```

### Stream

Stream 类型。

```typescript
interface Stream<T> extends Observable<T> {
  readonly closed: boolean
  abort: () => void
  [Symbol.asyncIterator]: () => AsyncIterator<T>
}
```

### Signal

Signal 类型（响应式原语）。

```typescript
interface Signal<T> {
  value: T
  subscribe: (callback: (value: T) => void) => () => void
  readonly: () => ReadonlySignal<T>
}
```

### WritableSignal

可写 Signal 类型。

```typescript
interface WritableSignal<T> extends Signal<T> {
  set: (value: T) => void
  update: (updater: (value: T) => T) => void
}
```

### Computed

计算 Signal 类型。

```typescript
interface Computed<T> extends ReadonlySignal<T> {
  effect: () => void
  dependencies: Set<Signal<unknown>>
}
```

### Effect

Effect 类型。

```typescript
interface Effect {
  execute: () => void | (() => void)
  cleanup?: () => void
  dependencies?: Set<Signal<unknown>>
  dispose: () => void
}
```

### BackpressureStrategy

背压策略类型。

```typescript
type BackpressureStrategy =
  | 'drop' // 缓冲区满时丢弃新项
  | 'buffer' // 缓冲项直到处理
  | 'error' // 缓冲区满时抛出错误
  | 'latest' // 仅保留最新项
  | 'block' // 阻塞生产者直到有空间
```

### Channel

Channel 类型。

```typescript
interface Channel<T> {
  send: (value: T) => Promise<void> | void
  receive: () => Promise<T>
  close: () => void
  closed: boolean
}
```

### ReactiveStore

响应式存储类型。

```typescript
interface ReactiveStore<T> {
  state: T
  subscribe: (listener: (state: T) => void) => () => void
  update: (updater: (state: T) => T) => void
  setState: (newState: T) => void
  reset: () => void
}
```

## 相关

- [事件系统](./event-system) - 事件类型
- [函数式编程](./functional) - 函数式模式
- [异步工具](./async) - 异步类型