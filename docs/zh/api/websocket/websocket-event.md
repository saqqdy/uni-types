# WebSocketEvent

**自 1.5.0 起**

WebSocket 事件类型，定义实时通信中的事件结构。

## 签名

```typescript
type WebSocketEvent<T = unknown> = {
  event: string
  data: T
  timestamp: number
}
```

## 参数

| 参数 | 描述 |
|------|------|
| `T` | 事件数据类型 |

## 示例

### 基本用法

```typescript
import type { WebSocketEvent } from 'uni-types'

// 定义用户上线事件
type UserOnlineEvent = WebSocketEvent<{
  userId: string
  username: string
  device: 'web' | 'mobile' | 'desktop'
}>

const onlineEvent: UserOnlineEvent = {
  event: 'user:online',
  data: { userId: 'u-1', username: '张三', device: 'web' },
  timestamp: Date.now()
}
```

### 文档协作事件

```typescript
import type { WebSocketEvent } from 'uni-types'

// 定义文档编辑事件
type DocumentEditEvent = WebSocketEvent<{
  documentId: string
  userId: string
  operation: 'insert' | 'delete' | 'replace'
  position: number
  content: string
}>

const editEvent: DocumentEditEvent = {
  event: 'document:edit',
  data: {
    documentId: 'doc-1',
    userId: 'user-2',
    operation: 'insert',
    position: 42,
    content: '新增内容'
  },
  timestamp: Date.now()
}
```

## 相关

- [`WebSocketMessage`](./websocket-message)
- [`RealTimeChannel`](./realtime-channel)
- [`Stream`](./stream)