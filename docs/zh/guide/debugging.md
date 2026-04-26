# 调试工具 Types

**从 1.8.0 开始**

类型级调试和内省。

## 调试核心

### DebugSession

调试会话定义。

```typescript
import type { DebugSession } from 'uni-types'

type Session = DebugSession
```

### DebugContext

包含会话、线程和变量的调试上下文。

```typescript
import type { DebugContext } from 'uni-types'

type Context = DebugContext
```

### DebugStatus

调试会话状态。

```typescript
import type { DebugStatus } from 'uni-types'

type Status = DebugStatus  // 'initialized' | 'running' | 'paused' | 'stopped' | ...
```

## 断点类型

### Breakpoint

断点定义。

```typescript
import type { Breakpoint } from 'uni-types'

type BP = Breakpoint
```

### BreakpointLocation

断点位置。

```typescript
import type { BreakpointLocation } from 'uni-types'

type Loc = BreakpointLocation
// { path: string; line: number; column?: number; ... }
```

### BreakpointCondition

断点条件类型。

```typescript
import type { BreakpointCondition } from 'uni-types'

type Cond = BreakpointCondition  // string | ((context: DebugContext) => boolean)
```

### BreakpointAction

断点动作类型。

```typescript
import type { BreakpointAction } from 'uni-types'

type Action = BreakpointAction
// { type: 'log'; message: string } | { type: 'evaluate'; expression: string } | ...
```

## 堆栈跟踪类型

### StackTrace

堆栈跟踪定义。

```typescript
import type { StackTrace } from 'uni-types'

type Trace = StackTrace
```

### DebugStackFrame

堆栈帧类型。

```typescript
import type { DebugStackFrame } from 'uni-types'

type Frame = DebugStackFrame
```

### CallStack

调用堆栈结构。

```typescript
import type { CallStack } from 'uni-types'

type Stack = CallStack
```

## 变量检查

### Variable

变量定义。

```typescript
import type { Variable } from 'uni-types'

type Var = Variable<string>
```

### VariableValue

变量值类型。

```typescript
import type { VariableValue } from 'uni-types'

type Val = VariableValue<string>
```

### DebugScope

调试作用域定义。

```typescript
import type { DebugScope } from 'uni-types'

type Scope = DebugScope
```

## 监视类型

### WatchExpression

监视表达式类型。

```typescript
import type { WatchExpression } from 'uni-types'

type Watch = WatchExpression
```

### EvaluateResult

求值结果类型。

```typescript
import type { EvaluateResult } from 'uni-types'

type Result = EvaluateResult<string>
```

## 内存检查

### MemoryRegion

内存区域定义。

```typescript
import type { MemoryRegion } from 'uni-types'

type Region = MemoryRegion
```

### MemoryAddress

内存地址类型。

```typescript
import type { MemoryAddress } from 'uni-types'

type Addr = MemoryAddress  // number | string
```

### MemoryValue

内存值定义。

```typescript
import type { MemoryValue } from 'uni-types'

type Val = MemoryValue
```

## 调试协议

### DebugProtocol

调试协议消息类型。

```typescript
import type { DebugProtocol } from 'uni-types'

type Protocol = DebugProtocol
```

### DebugMessage

调试消息类型。

```typescript
import type { DebugMessage } from 'uni-types'

type Msg = DebugMessage
```

### DebugEvent

调试事件类型。

```typescript
import type { DebugEvent } from 'uni-types'

type Event = DebugEvent
```

## REPL 类型

### REPL

REPL 定义。

```typescript
import type { REPL } from 'uni-types'

type MyREPL = REPL
```

### REPLCommand

REPL 命令类型。

```typescript
import type { REPLCommand } from 'uni-types'

type Cmd = REPLCommand
```
