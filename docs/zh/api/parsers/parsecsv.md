# ParseCSV

**自 1.4.0 起**

解析 CSV 字符串为记录元组。

## 签名

```typescript
type ParseCSV<S extends string> = S extends `${infer Header}\n${infer Rows}` ? ...
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `S` | 包含标题行的 CSV 字符串 |

## 描述

将 CSV 字符串转换为记录类型数组。

## 示例

### 基本用法

```typescript
import type { ParseCSV } from 'uni-types'

type CSV = ParseCSV<'name,age\nJohn,30\nJane,25'>
// [{ name: 'John'; age: '30' }, { name: 'Jane'; age: '25' }]
```

## 相关

- [`StringifyCSV`](./stringifycsv) - 记录转 CSV 格式