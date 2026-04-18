# ObjectInvert

**Since v1.3.0**

反转对象类型，交换其键和值。结果对象使用原始值作为键，原始键作为值。

## 签名

```typescript
export type ObjectInvert<T extends Record<string, string | number>> = {
	[K in T[keyof T]]: { [P in keyof T]: T[P] extends K ? P : never }[keyof T]
}
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 值为 string 或 number 的源对象类型 |

## 示例

### 基本用法

```typescript
import type { ObjectInvert } from 'uni-types'

type Roles = { admin: 'a'; editor: 'e'; viewer: 'v' }
type InvertedRoles = ObjectInvert<Roles>
// { a: 'admin'; e: 'editor'; v: 'viewer' }
```

### 数值类型值

```typescript
import type { ObjectInvert } from 'uni-types'

type StatusCodes = { ok: 200; notFound: 404; error: 500 }
type CodeToName = ObjectInvert<StatusCodes>
// { 200: 'ok'; 404: 'notFound'; 500: 'error' }
```
