# IsUUID

**Since v1.3.0**

检查字符串类型是否匹配有效的 UUID 格式。如果字符串匹配 UUID 模式（8-4-4-4-12 十六进制格式）则返回 `true`，否则返回 `false`。

## 签名

```typescript
export type IsUUID<T extends string> = T extends `${string}-${string}-${string}-${string}-${string}`
	? T extends `${`${string}` & { length: 8 }}-${`${string}` & { length: 4 }}-${`${string}` & { length: 4 }}-${`${string}` & { length: 4 }}-${`${string}` & { length: 12 }}`
		? true
		: false
	: false
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要验证为 UUID 的字符串类型 |

## 示例

### 基本用法

```typescript
import type { IsUUID } from 'uni-types'

type Valid = IsUUID<'550e8400-e29b-41d4-a716-446655440000'> // true
type Invalid = IsUUID<'not-a-uuid'> // false
```

### 格式验证

```typescript
import type { IsUUID } from 'uni-types'

type CorrectFormat = IsUUID<'12345678-1234-1234-1234-123456789012'> // true
type WrongSegments = IsUUID<'12345678-1234-1234-123456789012'> // false (缺少段)
```