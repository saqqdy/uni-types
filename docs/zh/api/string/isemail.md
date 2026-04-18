# IsEmail

**Since v1.3.0**

检查字符串类型是否匹配有效的电子邮件格式。如果字符串匹配电子邮件模式则返回 `true`，否则返回 `false`。

## 签名

```typescript
export type IsEmail<T extends string> = T extends `${string}@${string}.${string}`
	? true
	: false
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要验证为电子邮件的字符串类型 |

## 示例

### 基本用法

```typescript
import type { IsEmail } from 'uni-types'

type Valid = IsEmail<'user@example.com'> // true
type Invalid = IsEmail<'not-an-email'> // false
```

### 类型约束

```typescript
import type { IsEmail } from 'uni-types'

type CheckEmail = IsEmail<'test.name@domain.co.uk'> // true
type MissingAt = IsEmail<'userexample.com'> // false
type MissingDomain = IsEmail<'user@'> // false
```