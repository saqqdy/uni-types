# ReplaceAll

**自 1.1.0 起**

替换所有匹配的子串。

## 签名

```typescript
type ReplaceAll<S extends string, From extends string, To extends string> = 
  From extends ''
    ? S
    : S extends `${infer Before}${From}${infer After}`
      ? `${Before}${To}${ReplaceAll<After, From, To>}`
      : S
```

## 参数

| 参数 | 描述 |
|------|------|
| `S` | 源字符串 |
| `From` | 要替换的子串 |
| `To` | 替换字符串 |

## 示例

### 基本用法

```typescript
import type { ReplaceAll } from 'uni-types'

type A = ReplaceAll<'hello world world', 'world', 'there'>
// 'hello there there'

type B = ReplaceAll<'aaa', 'a', 'b'>
// 'bbb'
```

### 蛇形命名转换

```typescript
type SnakeCase = 'hello_world_foo_bar'
type CamelCase = ReplaceAll<SnakeCase, '_', ''>
// 'helloworldfoobar'
```

## 相关

- [`Replace`](./replace) - 仅替换第一个匹配