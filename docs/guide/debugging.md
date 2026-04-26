# Debugging Tools Types

**Since 1.8.0**

Type-level debugging and introspection.

## Debug Core

### DebugSession

Debug session definition.

```typescript
import type { DebugSession } from 'uni-types'

type Session = DebugSession
```

### DebugContext

Debug context containing session, thread, and variables.

```typescript
import type { DebugContext } from 'uni-types'

type Context = DebugContext
```

### DebugStatus

Debug session status.

```typescript
import type { DebugStatus } from 'uni-types'

type Status = DebugStatus  // 'initialized' | 'running' | 'paused' | 'stopped' | ...
```

## Breakpoint Types

### Breakpoint

Breakpoint definition.

```typescript
import type { Breakpoint } from 'uni-types'

type BP = Breakpoint
```

### BreakpointLocation

Breakpoint location.

```typescript
import type { BreakpointLocation } from 'uni-types'

type Loc = BreakpointLocation
// { path: string; line: number; column?: number; ... }
```

### BreakpointCondition

Breakpoint condition type.

```typescript
import type { BreakpointCondition } from 'uni-types'

type Cond = BreakpointCondition  // string | ((context: DebugContext) => boolean)
```

### BreakpointAction

Breakpoint action types.

```typescript
import type { BreakpointAction } from 'uni-types'

type Action = BreakpointAction
// { type: 'log'; message: string } | { type: 'evaluate'; expression: string } | ...
```

## Stack Trace Types

### StackTrace

Stack trace definition.

```typescript
import type { StackTrace } from 'uni-types'

type Trace = StackTrace
```

### DebugStackFrame

Stack frame type.

```typescript
import type { DebugStackFrame } from 'uni-types'

type Frame = DebugStackFrame
```

### CallStack

Call stack structure.

```typescript
import type { CallStack } from 'uni-types'

type Stack = CallStack
```

## Variable Inspection

### Variable

Variable definition.

```typescript
import type { Variable } from 'uni-types'

type Var = Variable<string>
```

### VariableValue

Variable value type.

```typescript
import type { VariableValue } from 'uni-types'

type Val = VariableValue<string>
```

### DebugScope

Debug scope definition.

```typescript
import type { DebugScope } from 'uni-types'

type Scope = DebugScope
```

## Watch Types

### WatchExpression

Watch expression type.

```typescript
import type { WatchExpression } from 'uni-types'

type Watch = WatchExpression
```

### EvaluateResult

Evaluation result type.

```typescript
import type { EvaluateResult } from 'uni-types'

type Result = EvaluateResult<string>
```

## Memory Inspection

### MemoryRegion

Memory region definition.

```typescript
import type { MemoryRegion } from 'uni-types'

type Region = MemoryRegion
```

### MemoryAddress

Memory address type.

```typescript
import type { MemoryAddress } from 'uni-types'

type Addr = MemoryAddress  // number | string
```

### MemoryValue

Memory value definition.

```typescript
import type { MemoryValue } from 'uni-types'

type Val = MemoryValue
```

## Debug Protocol

### DebugProtocol

Debug protocol message type.

```typescript
import type { DebugProtocol } from 'uni-types'

type Protocol = DebugProtocol
```

### DebugMessage

Debug message types.

```typescript
import type { DebugMessage } from 'uni-types'

type Msg = DebugMessage
```

### DebugEvent

Debug event types.

```typescript
import type { DebugEvent } from 'uni-types'

type Event = DebugEvent
```

## REPL Types

### REPL

REPL definition.

```typescript
import type { REPL } from 'uni-types'

type MyREPL = REPL
```

### REPLCommand

REPL command type.

```typescript
import type { REPLCommand } from 'uni-types'

type Cmd = REPLCommand
```
