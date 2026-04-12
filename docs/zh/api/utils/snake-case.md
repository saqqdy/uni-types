# SnakeCase

**自 1.0.0 起**

将字符串转换为蛇形命名（snake_case）。

## 签名

```typescript
type SnakeCase<S extends string> = ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 要转换的字符串类型 |

## 描述

将 camelCase 字符串转换为 snake_case。正确处理连续的大写字母。

## 示例

### 基本用法

```typescript
import type { SnakeCase } from 'uni-types'

type Result1 = SnakeCase<'helloWorld'> // 'hello_world'
type Result2 = SnakeCase<'fooBarBaz'> // 'foo_bar_baz'
```

### 连续大写字母

```typescript
type Result3 = SnakeCase<'XMLParser'> // 'xml_parser'
type Result4 = SnakeCase<'HTMLElement'> // 'html_element'
type Result5 = SnakeCase<'HTTPSConnection'> // 'https_connection'
```

### 单个单词

```typescript
type Result6 = SnakeCase<'hello'> // 'hello'
```

## 相关

- [`CamelCase`](./camel-case) - 转换为 camelCase
- [`SnakeCaseKeys`](./snake-case-keys) - 转换对象键
