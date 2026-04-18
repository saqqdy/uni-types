# LinkedList

**自 1.4.0 起**

链表类型。

## 签名

```typescript
type LinkedList<T> = ListNode<T> | undefined
```

## 参数

| 参数 | 描述 |
|-----------|-------------|
| `T` | 值类型 |

## 描述

表示单向链表。

## 示例

### 基本用法

```typescript
import type { LinkedList, ListNode } from 'uni-types'

const list: LinkedList<number> = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3
    }
  }
}
```

## 相关

- [`ListNode`](./listnode) - 链表节点类型
- [`ListHead`](./listhead) - 获取头部值