# TypeFilter

**Since v1.3.0**

元组元素的类型级别过滤器。过滤元组，仅保留继承自谓词类型的元素。

## 签名

```typescript
export type TypeFilter<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? [First, ...TypeFilter<Rest, P>]
		: TypeFilter<Rest, P>
	: []
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要过滤的元组类型 |
| `P` | 用于过滤元素的谓词类型 |

## 示例

### 基本用法

```typescript
import type { TypeFilter } from 'uni-types'

type Mixed = [string, number, string, boolean, number]
type OnlyStrings = TypeFilter<Mixed, string>
// [string, string]
```

### 按联合类型过滤

```typescript
import type { TypeFilter } from 'uni-types'

type Elements = [1, 'a', 2, 'b', true, 'c']
type OnlyNumbersAndBooleans = TypeFilter<Elements, number | boolean>
// [1, 2, true]
```