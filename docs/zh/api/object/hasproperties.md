# HasProperties

**Since v1.3.0**

检查对象类型是否具有所有指定属性。仅当列表中的每个属性键都存在于对象类型上时才返回 `true`。

## 签名

```typescript
export type HasProperties<T, K extends PropertyKey[]> = K extends [infer First, ...infer Rest]
	? First extends keyof T
		? Rest extends PropertyKey[]
			? HasProperties<T, Rest>
			: true
		: false
	: true
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要检查的对象类型 |
| `K` | 要查找的属性键数组 |

## 示例

### 基本用法

```typescript
import type { HasProperties } from 'uni-types'

type User = { name: string; age: number; email: string }
type HasNameAndAge = HasProperties<User, ['name', 'age']> // true
type HasNameAndPhone = HasProperties<User, ['name', 'phone']> // false
```

### 检查多个属性

```typescript
import type { HasProperties } from 'uni-types'

type Config = { host: string; port: number; protocol: string }
type HasRequired = HasProperties<Config, ['host', 'port', 'protocol']> // true
type HasOptional = HasProperties<Config, ['host', 'timeout']> // false
```
