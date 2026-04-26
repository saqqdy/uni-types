# Network Protocol Types

**Since 1.8.0**

Type-level network protocol definitions.

## Protocol Core

### Protocol

Generic protocol definition.

```typescript
import type { Protocol } from 'uni-types'

type MyProtocol = Protocol<string>
```

### ProtocolMessage

Protocol message structure.

```typescript
import type { ProtocolMessage } from 'uni-types'

type Msg = ProtocolMessage<{ data: string }>
// { type: string; id: string | number; timestamp: number; payload: { data: string }; metadata?: Record<string, unknown> }
```

## HTTP Types

### HTTPRequest

HTTP request type definition.

```typescript
import type { HTTPRequest } from 'uni-types'

type Req = HTTPRequest<{}, { name: string }>
```

### HTTPResponse

HTTP response type definition.

```typescript
import type { HTTPResponse } from 'uni-types'

type Res = HTTPResponse<{}, { success: boolean }>
```

### HTTPMethod

HTTP method types.

```typescript
import type { HTTPMethod } from 'uni-types'

type Method = HTTPMethod  // 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | ...
```

### HTTPHeaders

HTTP headers type.

```typescript
import type { HTTPHeaders } from 'uni-types'

type Headers = HTTPHeaders
// Record<string, string | string[]> with common header properties
```

### HTTPStatus

HTTP status code types.

```typescript
import type { HTTPStatus } from 'uni-types'

type Status = HTTPStatus  // 200 | 201 | 400 | 404 | 500 | ...
```

## WebSocket Types

### WSMessage

WebSocket message type.

```typescript
import type { WSMessage } from 'uni-types'

type Msg = WSMessage<string>
// { type: 'text' | 'binary' | 'ping' | 'pong' | 'close'; data: string; timestamp: number }
```

### WSEvent

WebSocket event types.

```typescript
import type { WSEvent } from 'uni-types'

type Event = WSEvent<string>
// { type: 'open' | 'close' | 'error' | 'message' | 'ping' | 'pong'; ... }
```

### WSOptions

WebSocket connection options.

```typescript
import type { WSOptions } from 'uni-types'

type Options = WSOptions
// { protocols?: string[]; headers?: Record<string, string>; timeout?: number; ... }
```

## gRPC Types

### gRPCService

gRPC service definition.

```typescript
import type { gRPCService } from 'uni-types'

interface MyMethods {
  getUser: (id: string) => Promise<User>
  createUser: (user: User) => Promise<User>
}

type Service = gRPCService<MyMethods>
```

### gRPCRequest

gRPC request type.

```typescript
import type { gRPCRequest } from 'uni-types'

type Req = gRPCRequest<{ id: string }>
```

### gRPCResponse

gRPC response type.

```typescript
import type { gRPCResponse } from 'uni-types'

type Res = gRPCResponse<User>
```

### gRPCStatus

gRPC status codes.

```typescript
import type { gRPCStatus } from 'uni-types'

type Status = gRPCStatus
// { code: 0 | 1 | 2 | ...; name: 'OK' | 'CANCELLED' | 'UNKNOWN' | ... }
```

## TCP/UDP Types

### TCPPacket

TCP packet structure.

```typescript
import type { TCPPacket } from 'uni-types'

type Packet = TCPPacket<Buffer>
```

### UDPPacket

UDP packet structure.

```typescript
import type { UDPPacket } from 'uni-types'

type Packet = UDPPacket<Buffer>
```

### SocketAddress

Socket address definition.

```typescript
import type { SocketAddress } from 'uni-types'

type Address = SocketAddress
// { host: string; port: number; family?: 'IPv4' | 'IPv6' }
```

## Protocol Buffer Types

### ProtoMessage

Protocol Buffer message definition.

```typescript
import type { ProtoMessage } from 'uni-types'

type Msg = ProtoMessage<User>
```

### ProtoField

Protocol Buffer field definition.

```typescript
import type { ProtoField } from 'uni-types'

type Field = ProtoField<string>
```

## MQTT Types

### MQTTPacket

MQTT packet type.

```typescript
import type { MQTTPacket } from 'uni-types'

type Packet = MQTTPacket<Buffer>
```

### MQTTQoS

MQTT Quality of Service levels.

```typescript
import type { MQTTQoS } from 'uni-types'

type QoS = MQTTQoS  // 0 | 1 | 2
```

### MQTTConnectOptions

MQTT connection options.

```typescript
import type { MQTTConnectOptions } from 'uni-types'

type Options = MQTTConnectOptions
// { clientId: string; keepAlive?: number; username?: string; ... }
```
