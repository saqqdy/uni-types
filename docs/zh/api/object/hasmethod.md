# HasMethod

**Since v1.3.0**

检查对象类型是否具有指定方法。如果属性键存在于对象类型上且其值为函数类型则返回 `true`。

## 签名

```typescript
export type HasMethod<T, K> = K extends keyof T
	? T[K] extends (...args: any[]) => any
		? true
		: false
	: false
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要检查的对象类型 |
| `K` | 要查找的方法属性键 |

## 示例

### 基本用法

```typescript
import type { HasMethod } from 'uni-types'

type Service = { getName: () => string; age: number }
type HasGetName = HasMethod<Service, 'getName'> // true
type HasAgeMethod = HasMethod<Service, 'age'> // false
```

### 接口方法检查

```typescript
import type { HasMethod } from 'uni-types'

type ApiClient = { fetch: (url: string) => Promise<any>; baseUrl: string; post: (url: string, body: any) => Promise<any> }
type HasFetch = HasMethod<ApiClient, 'fetch'> // true
type HasBaseUrl = HasMethod<ApiClient, 'baseUrl'> // false
```
