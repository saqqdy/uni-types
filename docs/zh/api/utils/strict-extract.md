# StrictExtract

**自 1.0.0 起**

严格提取类型。

## 签名

```typescript
type StrictExtract<T, U extends T> = T extends U ? T : never
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 源类型 |
| `U` | 要提取的类型（必须是 T 的子类型） |

## 描述

类似于 TypeScript 内置的 `Extract`，但要求 `U` 必须是 `T` 的子类型，提供更严格的类型检查。

## 示例

### 基本用法

```typescript
import type { StrictExtract } from 'uni-types'

type Status = 'pending' | 'active' | 'inactive' | 'deleted'

type ActiveStatus = StrictExtract<Status, 'active' | 'inactive'>
// 'active' | 'inactive'
```

### 与联合类型一起使用

```typescript
type Event = {
  type: 'click'
  x: number
  y: number
} | {
  type: 'scroll'
  scrollTop: number
} | {
  type: 'keypress'
  key: string
}

type ClickEvent = StrictExtract<Event, { type: 'click' }>
// { type: 'click'; x: number; y: number }
```

## 相关

- [`StrictExclude`](./strict-exclude) - 严格排除类型
- [`Extract`](https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union) - TypeScript 内置 Extract
