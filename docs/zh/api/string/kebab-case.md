# KebabCase

**Since v1.3.0**

将字符串类型转换为 kebab-case 格式。将 camelCase 或 PascalCase 字符串转换为用连字符分隔的小写单词。

## 签名

```typescript
export type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
	? First extends Uppercase<First>
		? First extends Lowercase<First>
			? `${First}${KebabCase<Rest>}`
			: `-${Lowercase<First>}${KebabCase<Rest>}`
		: `${First}${KebabCase<Rest>}`
	: S
```

## 参数

| 参数 | 说明 |
|------|------|
| `S` | 要转换为 kebab-case 的字符串类型 |

## 示例

### 基本用法

```typescript
import type { KebabCase } from 'uni-types'

type Result = KebabCase<'camelCase'>
// 'camel-case'
```

### 从 PascalCase 转换

```typescript
import type { KebabCase } from 'uni-types'

type Result = KebabCase<'PascalCaseExample'>
// '-pascal-case-example'
```