# Ecosystem Integration

Types for popular frameworks and libraries.

## React Props

Utilities for React component props.

```typescript
import type { ComponentProps, PropsWithChildren, RequiredProps, OptionalProps } from 'uni-types'

// Get props from intrinsic elements
type ButtonProps = ComponentProps<'button'>
type InputProps = ComponentProps<'input'>

// Add children to props
type CardProps = PropsWithChildren<{ title: string }>
// { title: string; children?: React.ReactNode }

// Get required/optional props keys
interface Props {
  name: string      // required
  age?: number      // optional
  onChange?: () => void
}

type Required = RequiredProps<Props>  // 'name'
type Optional = OptionalProps<Props>  // 'age' | 'onChange'
```

### MergeDefaultProps

Merge default props with optional overrides.

```typescript
import type { MergeDefaultProps } from 'uni-types'

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
}

type WithDefaults = MergeDefaultProps<ButtonProps, { size: 'md' }>
// size defaults to 'md' but remains optional
```

### Event Handlers

Pre-defined event handler types.

```typescript
import type { 
  EventHandler, 
  ChangeEventHandler, 
  MouseEventHandler, 
  KeyboardEventHandler 
} from 'uni-types'

const handleClick: MouseEventHandler = (event) => {
  // event is typed
}
```

## Vue Props

Utilities for Vue component props.

```typescript
import type { VuePropType, VueEmitType, VueModelProps } from 'uni-types'

// Define prop type
const nameProp: VuePropType<string> = {
  type: String,
  required: true
}

// Define emits type
type Emits = VueEmitType<{
  change: [value: string]
  submit: []
}>
// { change: (value: string) => void; submit: () => void }

// Define v-model props
type ModelProps = VueModelProps<'modelValue', string>
// { modelValue: string; 'onUpdate:modelValue'?: (value: string) => void }
```

### NormalizeVueProps

Convert Vue props options to TypeScript types.

```typescript
import type { NormalizeVueProps } from 'uni-types'

const props = {
  name: String,
  age: { type: Number, required: false }
}

type Props = NormalizeVueProps<typeof props>
// { name: string | undefined; age: number | undefined }
```

## tRPC

Utilities for tRPC routers and procedures.

```typescript
import type { TRPCProcedureInput, TRPCProcedureOutput, TRPCRouterShape } from 'uni-types'

// Extract input/output types from procedures
type Input = TRPCProcedureInput<typeof userProcedure>
type Output = TRPCProcedureOutput<typeof userProcedure>

// Get router shape
type Router = TRPCRouterShape<typeof appRouter>
```

### Procedure Types

```typescript
import type { TRPCQueries, TRPCMutations, TRPCSubscriptions } from 'uni-types'

type Queries = TRPCQueries<typeof router>       // keys of query procedures
type Mutations = TRPCMutations<typeof router>   // keys of mutation procedures
type Subscriptions = TRPCSubscriptions<typeof router>  // keys of subscriptions
```

## Prisma

Utilities for Prisma models and operations.

```typescript
import type { 
  PrismaCreateInput, 
  PrismaUpdateInput, 
  PrismaWhereInput,
  PrismaScalarFields,
  PrismaRelationFields 
} from 'uni-types'

interface User {
  id: string
  name: string
  email: string
  posts: Post[]
  createdAt: Date
}

// Input types
type Create = PrismaCreateInput<User>
type Update = PrismaUpdateInput<User>
type Where = PrismaWhereInput<User>

// Field extraction
type Scalars = PrismaScalarFields<User>     // 'id' | 'name' | 'email' | 'createdAt'
type Relations = PrismaRelationFields<User> // 'posts'
```

### Prisma Args Types

Pre-defined argument types for Prisma operations.

```typescript
import type { 
  PrismaFindManyArgs, 
  PrismaCreateArgs, 
  PrismaUpdateArgs 
} from 'uni-types'

type FindManyArgs = PrismaFindManyArgs<User>
type CreateArgs = PrismaCreateArgs<User>
type UpdateArgs = PrismaUpdateArgs<User>
```
