# 网络协议 Types

**从 1.8.0 开始**

类型级网络协议定义。

## 协议核心

### Protocol

通用协议定义。

```typescript
import type { Protocol } from 'uni-types'

type MyProtocol = Protocol<string>
```

### ProtocolMessage

协议消息结构。

```typescript
import type { ProtocolMessage } from 'uni-types'

type Msg = ProtocolMessage<{ data: string }>
// { type: string; id: string | number; timestamp: number; payload: { data: string }; metadata?: Record<string, unknown> }
```

## HTTP 类型

### HTTPRequest

HTTP 请求类型定义。

```typescript
import type { HTTPRequest } from 'uni-types'

type Req = HTTPRequest<{}, { name: string }>
```

### HTTPResponse

HTTP 响应类型定义。

```typescript
import type { HTTPResponse } from 'uni-types'

type Res = HTTPResponse<{}, { success: boolean }>
```

### HTTPMethod

HTTP 方法类型。

```typescript
import type { HTTPMethod } from 'uni-types'

type Method = HTTPMethod  // 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | ...
```

### HTTPHeaders

HTTP 头类型。

```typescript
import type { HTTPHeaders } from 'uni-types'

type Headers = HTTPHeaders
// Record<string, string | string[]> 及常用头属性
```

### HTTPStatus

HTTP 状态码类型。

```typescript
import type { HTTPStatus } from 'uni-types'

type Status = HTTPStatus  // 200 | 201 | 400 | 404 | 500 | ...
```

## WebSocket 类型

### WSMessage

WebSocket 消息类型。

```typescript
import type { WSMessage } from 'uni-types'

type Msg = WSMessage<string>
// { type: 'text' | 'binary' | 'ping' | 'pong' | 'close'; data: string; timestamp: number }
```

### WSEvent

WebSocket 事件类型。

```typescript
import type { WSEvent } from 'uni-types'

type Event = WSEvent<string>
// { type: 'open' | 'close' | 'error' | 'message' | 'ping' | 'pong'; ... }
```

### WSOptions

WebSocket 连接选项。

```typescript
import type { WSOptions } from 'uni-types'

type Options = WSOptions
// { protocols?: string[]; headers?: Record<string, string>; timeout?: number; ... }
```

## gRPC 类型

### gRPCService

gRPC 服务定义。

```typescript
import type { gRPCService } from 'uni-types'

interface MyMethods {
  getUser: (id: string) => Promise<User>
  createUser: (user: User) => Promise<User>
}

type Service = gRPCService<MyMethods>
```

### gRPCRequest

gRPC 请求类型。

```typescript
import type { gRPCRequest } from 'uni-types'

type Req = gRPCRequest<{ id: string }>
```

### gRPCResponse

gRPC 响应类型。

```typescript
import type { gRPCResponse } from 'uni-types'

type Res = gRPCResponse<User>
```

### gRPCStatus

gRPC 状态码。

```typescript
import type { gRPCStatus } from 'uni-types'

type Status = gRPCStatus
// { code: 0 | 1 | 2 | ...; name: 'OK' | 'CANCELLED' | 'UNKNOWN' | ... }
```

## TCP/UDP 类型

### TCPPacket

TCP 数据包结构。

```typescript
import type { TCPPacket } from 'uni-types'

type Packet = TCPPacket<Buffer>
```

### UDPPacket

UDP 数据包结构。

```typescript
import type { UDPPacket } from 'uni-types'

type Packet = UDPPacket<Buffer>
```

### SocketAddress

套接字地址定义。

```typescript
import type { SocketAddress } from 'uni-types'

type Address = SocketAddress
// { host: string; port: number; family?: 'IPv4' | 'IPv6' }
```

## Protocol Buffer 类型

### ProtoMessage

Protocol Buffer 消息定义。

```typescript
import type { ProtoMessage } from 'uni-types'

type Msg = ProtoMessage<User>
```

### ProtoField

Protocol Buffer 字段定义。

```typescript
import type { ProtoField } from 'uni-types'

type Field = ProtoField<string>
```

## MQTT 类型

### MQTTPacket

MQTT 数据包类型。

```typescript
import type { MQTTPacket } from 'uni-types'

type Packet = MQTTPacket<Buffer>
```

### MQTTQoS

MQTT 服务质量级别。

```typescript
import type { MQTTQoS } from 'uni-types'

type QoS = MQTTQoS  // 0 | 1 | 2
```

### MQTTConnectOptions

MQTT 连接选项。

```typescript
import type { MQTTConnectOptions } from 'uni-types'

type Options = MQTTConnectOptions
// { clientId: string; keepAlive?: number; username?: string; ... }
```
