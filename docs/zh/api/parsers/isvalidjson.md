# IsValidJSON

**自 1.4.0 起**

检查字符串是否为有效 JSON。

## 签名

```typescript
type IsValidJSON<S extends string> = S extends `{}` ? true : S extends `[]` ? true : ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 要验证的字符串 |

## 描述

验证字符串是否表示有效的 JSON 格式。

## 示例

### 基本用法

```typescript
import type { IsValidJSON } from 'uni-types'

type Valid1 = IsValidJSON<'"hello"'>
// true

type Valid2 = IsValidJSON<'123'>
// true

type Valid3 = IsValidJSON<'{}'>
// true

type Valid4 = IsValidJSON<'[]'>
// true

type Invalid = IsValidJSON<'invalid'>
// false
```

## 相关

- [`ParseJSON`](./parsejson) - 解析 JSON 字符串为类型