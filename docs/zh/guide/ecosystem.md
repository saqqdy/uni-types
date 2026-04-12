# 生态系统集成

用于流行框架和库的类型。

## React Props

React 组件 props 的工具类型。

```typescript
import type { ComponentProps, PropsWithChildren, RequiredProps, OptionalProps } from 'uni-types'

// 从内置元素获取 props
type ButtonProps = ComponentProps<'button'>
type InputProps = ComponentProps<'input'>

// 添加 children 到 props
type CardProps = PropsWithChildren<{ title: string }>
// { title: string; children?: React.ReactNode }

// 获取必需/可选 props 键
interface Props {
  name: string      // required
  age?: number      // optional
  onChange?: () => void
}

type Required = RequiredProps<Props>  // 'name'
type Optional = OptionalProps<Props>  // 'age' | 'onChange'
```

### MergeDefaultProps

合并默认 props 与可选覆盖。

```typescript
import type { MergeDefaultProps } from 'uni-types'

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
}

type WithDefaults = MergeDefaultProps<ButtonProps, { size: 'md' }>
// size 默认为 'md' 但保持可选
```

## Vue Props

Vue 组件 props 的工具类型。

```typescript
import type { VuePropType, VueEmitType, VueModelProps } from 'uni-types'

// 定义 prop 类型
const nameProp: VuePropType<string> = {
  type: String,
  required: true
}

// 定义 emits 类型
type Emits = VueEmitType<{
  change: [value: string]
  submit: []
}>
// { change: (value: string) => void; submit: () => void }

// 定义 v-model props
type ModelProps = VueModelProps<'modelValue', string>
// { modelValue: string; 'onUpdate:modelValue'?: (value: string) => void }
```

## tRPC

tRPC 路由和过程的工具类型。

```typescript
import type { TRPCProcedureInput, TRPCProcedureOutput, TRPCRouterShape } from 'uni-types'

// 从过程提取输入/输出类型
type Input = TRPCProcedureInput<typeof userProcedure>
type Output = TRPCProcedureOutput<typeof userProcedure>

// 获取路由形状
type Router = TRPCRouterShape<typeof appRouter>
```

## Prisma

Prisma 模型和操作的工具类型。

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

// 输入类型
type Create = PrismaCreateInput<User>
type Update = PrismaUpdateInput<User>
type Where = PrismaWhereInput<User>

// 字段提取
type Scalars = PrismaScalarFields<User>     // 'id' | 'name' | 'email' | 'createdAt'
type Relations = PrismaRelationFields<User> // 'posts'
```
