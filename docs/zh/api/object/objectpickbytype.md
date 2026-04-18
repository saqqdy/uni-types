# ObjectPickByType

**Since v1.3.0**

按值类型选取对象属性。创建一个仅包含值继承自指定类型属性的新对象类型。

## 签名

```typescript
export type ObjectPickByType<T extends Record<string, any>, U> = {
	[K in keyof T as T[K] extends U ? K : never]: T[K]
}
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 源对象类型 |
| `U` | 要选取的值类型 |

## 示例

### 基本用法

```typescript
import type { ObjectPickByType } from 'uni-types'

type User = { name: string; age: number; email: string; score: number }
type OnlyStrings = ObjectPickByType<User, string>
// { name: string; email: string }
```

### 选取函数属性

```typescript
import type { ObjectPickByType } from 'uni-types'

type Methods = { greet: () => void; count: number; farewell: () => string; id: number }
type OnlyFunctions = ObjectPickByType<Methods, Function>
// { greet: () => void; farewell: () => string }
```
