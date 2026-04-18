# PascalCase

**Since v1.3.0**

将字符串类型转换为 PascalCase 格式。将字符串转换为每个单词以大写字母开头且单词之间没有分隔符的格式。

## 签名

```typescript
export type PascalCase<S extends string> = S extends `${infer First}${infer Rest}`
	? First extends Uppercase<First>
		? First extends Lowercase<First>
			? `${Uppercase<First>}${PascalCase<Rest>}`
			: `${First}${PascalCase<Rest>}`
		: `${Uppercase<First>}${PascalCase<Rest>}`
	: S
```

## 参数

| 参数 | 说明 |
|------|------|
| `S` | 要转换为 PascalCase 的字符串类型 |

## 示例

### 基本用法

```typescript
import type { PascalCase } from 'uni-types'

type Result = PascalCase<'hello-world'>
// 'HelloWorld'
```

### 从 camelCase 转换

```typescript
import type { PascalCase } from 'uni-types'

type Result = PascalCase<'myVariableName'>
// 'MyVariableName'
```