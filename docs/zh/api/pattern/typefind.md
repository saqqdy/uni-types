# TypeFind

**Since v1.3.0**

元组元素的类型级别查找。查找并返回元组中第一个继承自谓词类型的元素，如果没有匹配则返回 `never`。

## 签名

```typescript
export type TypeFind<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? First
		: TypeFind<Rest, P>
	: never
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要搜索的元组类型 |
| `P` | 要查找的谓词类型 |

## 示例

### 基本用法

```typescript
import type { TypeFind } from 'uni-types'

type Mixed = [string, number, boolean, string]
type FoundNumber = TypeFind<Mixed, number>
// number
```

### 未找到匹配

```typescript
import type { TypeFind } from 'uni-types'

type Strings = ['a', 'b', 'c']
type FindNumber = TypeFind<Strings, number>
// never
```