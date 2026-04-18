# LinkedList

**Since 1.4.0**

Linked list type.

## Signature

```typescript
type LinkedList<T> = ListNode<T> | undefined
```

## Parameters

| Parameter | Description |
|-----------|-------------|
| `T` | Value type |

## Description

Represents a singly linked list.

## Examples

### Basic Usage

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

## Related

- [`ListNode`](./listnode) - List node type
- [`ListHead`](./listhead) - Get head value