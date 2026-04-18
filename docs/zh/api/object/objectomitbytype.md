# ObjectOmitByType

**Since v1.3.0**

按值类型省略对象属性。创建一个排除值继承自指定类型属性的新对象类型。

## 签名

```typescript
export type ObjectOmitByType<T extends Record<string, any>, U> = {
	[K in keyof T as T[K] extends U ? never : K]: T[K]
}
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 源对象类型 |
| `U` | 要省略的值类型 |

## 示例

### 基本用法

```typescript
import type { ObjectOmitByType } from 'uni-types'

type User = { name: string; age: number; email: string; score: number }
type WithoutNumbers = ObjectOmitByType<User, number>
// { name: string; email: string }
```

### 省略函数属性

```typescript
import type { ObjectOmitByType } from 'uni-types'

type Mixed = { name: string; onClick: () => void; value: number; onChange: () => string }
type DataOnly = ObjectOmitByType<Mixed, Function>
// { name: string; value: number }
```
