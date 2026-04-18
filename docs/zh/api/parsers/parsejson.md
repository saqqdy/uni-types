# ParseJSON

**自 1.4.0 起**

解析 JSON 字符串为类型。

## 签名

```typescript
type ParseJSON<S extends string> = S extends `"${infer Content}"` ? Content : ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 要解析的 JSON 字符串 |

## 描述

类型级 JSON 解析器，对基本类型提供有限支持。

## 示例

### 基本用法

```typescript
import type { ParseJSON } from 'uni-types'

type String = ParseJSON<'"hello"'>
// 'hello'

type Number = ParseJSON<'123'>
// 123

type Boolean = ParseJSON<'true'>
// true

type Null = ParseJSON<'null'>
// null
```

## 相关

- [`StringifyJSON`](./stringifyjson) - 类型转 JSON 字符串
- [`IsValidJSON`](./isvalidjson) - 检查是否为有效 JSON