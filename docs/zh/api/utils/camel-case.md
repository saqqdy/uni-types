# CamelCase

将字符串转换为驼峰命名（camelCase）。

## 签名

```typescript
type CamelCase<S extends string> = S extends `${infer P}_${infer Q}`
  ? `${P}${Capitalize<CamelCase<Q>>}`
  : S extends `${infer P}-${infer Q}`
    ? `${P}${Capitalize<CamelCase<Q>>}`
    : S
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 要转换的字符串类型 |

## 描述

将 snake_case 或 kebab-case 字符串转换为 camelCase。

## 示例

### 从 snake_case 转换

```typescript
import type { CamelCase } from 'uni-types'

type Result1 = CamelCase<'hello_world'> // 'helloWorld'
type Result2 = CamelCase<'foo_bar_baz'> // 'fooBarBaz'
```

### 从 kebab-case 转换

```typescript
type Result3 = CamelCase<'hello-world'> // 'helloWorld'
type Result4 = CamelCase<'foo-bar-baz'> // 'fooBarBaz'
```

### 混合分隔符

```typescript
type Result5 = CamelCase<'hello_world-foo'> // 'helloWorldFoo'
```

## 相关

- [`SnakeCase`](./snake-case) - 转换为 snake_case
- [`CamelCaseKeys`](./camel-case-keys) - 转换对象键
