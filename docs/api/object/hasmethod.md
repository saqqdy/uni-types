# HasMethod

**Since v1.3.0**

Check if an object type has a specific method. Returns `true` if the property key exists on the object type and its value is a function type.

## Signature

```typescript
export type HasMethod<T, K> = K extends keyof T
	? T[K] extends (...args: any[]) => any
		? true
		: false
	: false
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | The object type to check |
| `K` | The property key to look for as a method |

## Examples

### Basic Usage

```typescript
import type { HasMethod } from 'uni-types'

type Service = { getName: () => string; age: number }
type HasGetName = HasMethod<Service, 'getName'> // true
type HasAgeMethod = HasMethod<Service, 'age'> // false
```

### With Interface Methods

```typescript
import type { HasMethod } from 'uni-types'

type ApiClient = { fetch: (url: string) => Promise<any>; baseUrl: string; post: (url: string, body: any) => Promise<any> }
type HasFetch = HasMethod<ApiClient, 'fetch'> // true
type HasBaseUrl = HasMethod<ApiClient, 'baseUrl'> // false
```
