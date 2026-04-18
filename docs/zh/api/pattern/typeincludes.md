# TypeIncludes

**Since v1.3.0**

元组的类型级别包含检查。如果元组中有任何元素继承自谓词类型则返回 `true`，否则返回 `false`。

## 签名

```typescript
export type TypeIncludes<T extends unknown[], P> = T extends [infer First, ...infer Rest]
	? First extends P
		? true
		: TypeIncludes<Rest, P>
	: false
```

## 参数

| 参数 | 说明 |
|------|------|
| `T` | 要检查的元组类型 |
| `P` | 要查找的谓词类型 |

## 示例

### 基本用法

```typescript
import type { TypeIncludes } from 'uni-types'

type HasNumber = TypeIncludes<['a', 1, 'b'], number> // true
type HasBoolean = TypeIncludes<['a', 1, 'b'], boolean> // false
```

### 检查类型是否存在

```typescript
import type { TypeIncludes } from 'uni-types'

type Mixed = [string, number, boolean, string, number]
type IncludesString = TypeIncludes<Mixed, number> // true
type IncludesNull = TypeIncludes<Mixed, null> // false
```