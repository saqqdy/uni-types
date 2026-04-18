# StringifyJSON

**自 1.4.0 起**

类型转 JSON 字符串表示。

## 签名

```typescript
type StringifyJSON<T> = T extends string ? `"${T}"` : T extends number ? `${T}` : ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 要转换的类型 |

## 描述

将 TypeScript 类型转换为 JSON 字符串表示。

## 示例

### 基本用法

```typescript
import type { StringifyJSON } from 'uni-types'

type Str = StringifyJSON<'hello'>
// '"hello"'

type Num = StringifyJSON<123>
// '123'

type Bool = StringifyJSON<true>
// 'true'

type Null = StringifyJSON<null>
// 'null'
```

## 相关

- [`ParseJSON`](./parsejson) - 解析 JSON 字符串为类型