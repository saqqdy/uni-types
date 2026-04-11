# 快速上手

几分钟快速上手 uni-types。

## 核心操作

### PickRequired / PickPartial

将指定属性变为必需或可选：

```typescript
import type { PickRequired, PickPartial } from 'uni-types'

interface User {
  name?: string
  age?: number
  email: string
}

// 将 'name' 变为必需
type UserWithName = PickRequired<User, 'name'>
// { name: string; age?: number; email: string }

// 将 'email' 变为可选
type UserWithOptionalEmail = PickPartial<User, 'email'>
// { name?: string; age?: number; email?: string }
```

### OmitRequired / OmitPartial

将指定属性之外变为必需或可选：

```typescript
import type { OmitRequired, OmitPartial } from 'uni-types'

interface User {
  name?: string
  age?: number
  email?: string
}

// 除 'name' 外全部变为必需
type RequiredExceptName = OmitRequired<User, 'name'>
// { name?: string; age: number; email: string }

// 除 'email' 外全部变为可选
type OptionalExceptEmail = OmitPartial<User, 'email'>
// { name?: string; age?: number; email: string }
```

## 深度操作

递归转换嵌套对象：

```typescript
import type { DeepPartial, DeepRequired, DeepReadonly, DeepMutable } from 'uni-types'

interface Config {
  database: {
    host: string
    port: number
    credentials: {
      username: string
      password: string
    }
  }
}

// 所有属性递归变为可选
type PartialConfig = DeepPartial<Config>
/*
{
  database?: {
    host?: string
    port?: number
    credentials?: {
      username?: string
      password?: string
    }
  }
}
*/

// 所有属性递归变为必需
type RequiredConfig = DeepRequired<PartialConfig>

// 所有属性递归变为只读
type ReadonlyConfig = DeepReadonly<Config>

// 移除所有 readonly
type MutableConfig = DeepMutable<ReadonlyConfig>
```

## 类型判断

编译时类型检查：

```typescript
import type { IsArray, IsTuple, IsEqual, IsAny, IsNever } from 'uni-types'

// 数组判断
type Check1 = IsArray<string[]> // true
type Check2 = IsArray<string>   // false

// 元组判断
type Check3 = IsTuple<[string, number]> // true
type Check4 = IsTuple<string[]>         // false

// 相等判断
type Check5 = IsEqual<string, string>   // true
type Check6 = IsEqual<string, number>   // false

// 特殊类型判断
type Check7 = IsAny<any>     // true
type Check8 = IsAny<string>  // false

type Check9 = IsNever<never>    // true
type Check10 = IsNever<string>  // false
```

## 类型推导

从复杂结构提取类型：

```typescript
import type {
  Awaited,
  ArrayElement,
  ValueOf,
  FunctionKeys,
  NonFunctionKeys
} from 'uni-types'

// 解包 Promise
type Result = Awaited<Promise<string>> // string

// 获取数组元素类型
type Element = ArrayElement<string[]> // string

// 获取对象值类型
type Values = ValueOf<{ a: string; b: number }> // string | number

// 获取函数键
interface Obj {
  name: string
  onClick: () => void
  onChange: (v: string) => void
}
type FnKeys = FunctionKeys<Obj> // 'onClick' | 'onChange'
type DataKeys = NonFunctionKeys<Obj> // 'name'
```

## 下一步

- [核心操作](./core) - 了解 PickRequired、PickPartial 等
- [元组操作](./tuple) - 操作元组类型
- [深度操作](./deep) - 转换嵌套对象
- [品牌类型](./brand) - 创建名义类型
- [条件类型](./conditional) - 类型级别逻辑
- [函数类型](./functions) - 函数类型工具
- [键工具](./keys) - 操作对象键
- [数字类型](./numeric) - 编译时算术
- [路径工具](./path) - 类型安全嵌套路径
- [记录类型](./record) - 记录操作
- [模板字面量](./template) - 字符串操作
- [类型判断](./guards) - 编译时类型检查
- [类型推导](./infer) - 从结构提取类型
- [实用类型](./utils) - 各种实用类型