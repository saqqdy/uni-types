/**
 * Type-Level Network Protocols (v1.8.0)
 *
 * Type-level network protocol definitions including:
 * - Protocol types
 * - HTTP types
 * - WebSocket types
 * - gRPC types
 * - TCP/UDP types
 * - Protocol Buffers
 * - MQTT types
 */

// ============================================================================
// Protocol Core
// ============================================================================

/**
 * Protocol type
 */
export interface Protocol<T = unknown> {
	name: string
	version: ProtocolVersion
	encoding: ProtocolEncoding
	message: ProtocolMessage<T>
	handler: ProtocolHandler<T>
}

/**
 * Protocol version
 */
export type ProtocolVersion = `${number}.${number}.${number}`

/**
 * Protocol encoding
 */
export type ProtocolEncoding
	= | 'json'
		| 'xml'
		| 'binary'
		| 'protobuf'
		| 'msgpack'
		| 'text'
		| 'multipart'

/**
 * Protocol message
 */
export interface ProtocolMessage<T = unknown> {
	type: string
	id: string | number
	timestamp: number
	payload: T
	metadata?: Record<string, unknown>
}

/**
 * Protocol handler
 */
export type ProtocolHandler<T = unknown> = (
	message: ProtocolMessage<T>,
	context: ProtocolContext,
) => Promise<ProtocolMessage<T>> | ProtocolMessage<T>

/**
 * Protocol context
 */
export interface ProtocolContext {
	sessionId: string
	connectionId: string
	headers: Record<string, string>
	remote: SocketAddress
	local: SocketAddress
	createdAt: number
	updatedAt: number
}

// ============================================================================
// HTTP Types
// ============================================================================

/**
 * HTTP request type
 */
export interface HTTPRequest<T = unknown, B = unknown> {
	method: HTTPMethod
	url: string
	path: string
	query: Record<string, string | string[]>
	params: Record<string, string>
	headers: HTTPHeaders
	body: B
	state: T
}

/**
 * HTTP method
 */
export type HTTPMethod
	= | 'GET'
		| 'POST'
		| 'PUT'
		| 'PATCH'
		| 'DELETE'
		| 'HEAD'
		| 'OPTIONS'
		| 'TRACE'
		| 'CONNECT'

/**
 * HTTP headers
 */
export type HTTPHeaders = Record<string, string | string[]> & {
	'content-type'?: string
	'content-length'?: string
	accept?: string
	authorization?: string
	'cache-control'?: string
	cookie?: string
	'set-cookie'?: string | string[]
	'user-agent'?: string
	host?: string
	origin?: string
	referer?: string
}

/**
 * HTTP response type
 */
export interface HTTPResponse<T = unknown, B = unknown> {
	status: HTTPStatus
	statusText?: string
	headers: HTTPHeaders
	body: B
	state: T
}

/**
 * HTTP status codes
 */
export type HTTPStatus
	= | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226
		| 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308
		| 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410
		| 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451
		| 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511

/**
 * HTTP body type
 */
export type HTTPBody<T = unknown>
	= | T
		| FormData
		| URLSearchParams
		| ArrayBuffer
		| Blob
		| ReadableStream
		| null

/**
 * HTTP request options
 */
export interface HTTPRequestOptions {
	timeout?: number
	retries?: number
	retryDelay?: number
	followRedirects?: boolean
	maxRedirects?: number
	cache?: 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached'
	credentials?: 'omit' | 'same-origin' | 'include'
	mode?: 'cors' | 'no-cors' | 'same-origin' | 'navigate'
	referrer?: string
	referrerPolicy?: ReferrerPolicy
	signal?: AbortSignal
}

/**
 * Referrer policy
 */
export type ReferrerPolicy
	= | 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'origin'
		| 'origin-when-cross-origin'
		| 'same-origin'
		| 'strict-origin'
		| 'strict-origin-when-cross-origin'
		| 'unsafe-url'

// ============================================================================
// WebSocket Types
// ============================================================================

/**
 * WebSocket message type
 */
export interface WSMessage<T = unknown> {
	type: 'text' | 'binary' | 'ping' | 'pong' | 'close'
	data: T
	timestamp: number
}

/**
 * WebSocket frame type
 */
export interface WSFrame {
	fin: boolean
	opcode: WSOpcode
	masked: boolean
	payloadLength: number
	payload: ArrayBuffer
}

/**
 * WebSocket opcode
 */
export type WSOpcode
	= | 0x0 // continuation
		| 0x1 // text
		| 0x2 // binary
		| 0x8 // close
		| 0x9 // ping
		| 0xA // pong

/**
 * WebSocket event type
 */
export type WSEvent<T = unknown>
	= | { type: 'open', timestamp: number }
		| { type: 'close', code: number, reason: string, timestamp: number }
		| { type: 'error', error: Error, timestamp: number }
		| { type: 'message', message: WSMessage<T>, timestamp: number }
		| { type: 'ping', data: ArrayBuffer, timestamp: number }
		| { type: 'pong', data: ArrayBuffer, timestamp: number }

/**
 * WebSocket handler type
 */
export type WSHandler<T = unknown> = (event: WSEvent<T>) => void | Promise<void>

/**
 * WebSocket connection options
 */
export interface WSOptions {
	protocols?: string | string[]
	headers?: Record<string, string>
	timeout?: number
	maxPayload?: number
	binaryType?: 'arraybuffer' | 'blob'
	heartbeat?: {
		interval: number
		timeout: number
	}
	reconnect?: {
		maxRetries: number
		delay: number
		backoff?: 'linear' | 'exponential'
	}
}

/**
 * WebSocket close codes
 */
export type WSCloseCode
	= | 1000 // normal closure
		| 1001 // going away
		| 1002 // protocol error
		| 1003 // unsupported data
		| 1005 // no status received
		| 1006 // abnormal closure
		| 1007 // invalid frame payload data
		| 1008 // policy violation
		| 1009 // message too big
		| 1010 // mandatory extension
		| 1011 // internal error
		| 1012 // service restart
		| 1013 // try again later
		| 1014 // bad gateway
		| 1015 // TLS handshake failure

// ============================================================================
// gRPC Types
// ============================================================================

/**
 * gRPC service type
 */
export interface gRPCService<T extends Record<string, (...args: unknown[]) => unknown> = Record<string, (...args: unknown[]) => unknown>> {
	name: string
	package: string
	methods: { [K in keyof T]: gRPCMethod<T[K]> }
}

/**
 * gRPC method type
 */
export interface gRPCMethod<T extends (...args: unknown[]) => unknown = (...args: unknown[]) => unknown> {
	name: string
	type: 'unary' | 'client-streaming' | 'server-streaming' | 'bidi-streaming'
	requestType: unknown
	responseType: unknown
	impl: T
}

/**
 * gRPC request type
 */
export interface gRPCRequest<T = unknown> {
	method: string
	service: string
	message: T
	metadata: Record<string, string>
	deadline?: Date
	cancellationToken?: AbortSignal
}

/**
 * gRPC response type
 */
export interface gRPCResponse<T = unknown> {
	message: T
	metadata: Record<string, string>
	status: gRPCStatus
	trailer: Record<string, string>
}

/**
 * gRPC status codes
 */
export type gRPCStatus
	= | { code: 0, name: 'OK' }
		| { code: 1, name: 'CANCELLED' }
		| { code: 2, name: 'UNKNOWN' }
		| { code: 3, name: 'INVALID_ARGUMENT' }
		| { code: 4, name: 'DEADLINE_EXCEEDED' }
		| { code: 5, name: 'NOT_FOUND' }
		| { code: 6, name: 'ALREADY_EXISTS' }
		| { code: 7, name: 'PERMISSION_DENIED' }
		| { code: 8, name: 'RESOURCE_EXHAUSTED' }
		| { code: 9, name: 'FAILED_PRECONDITION' }
		| { code: 10, name: 'ABORTED' }
		| { code: 11, name: 'OUT_OF_RANGE' }
		| { code: 12, name: 'UNIMPLEMENTED' }
		| { code: 13, name: 'INTERNAL' }
		| { code: 14, name: 'UNAVAILABLE' }
		| { code: 15, name: 'DATA_LOSS' }
		| { code: 16, name: 'UNAUTHENTICATED' }

/**
 * gRPC stream type
 */
export interface gRPCStream<T = unknown, U = unknown> {
	type: 'client' | 'server' | 'bidi'
	request: AsyncIterable<T>
	response: AsyncIterable<U>
	cancel: () => void
}

// ============================================================================
// TCP/UDP Types
// ============================================================================

/**
 * TCP packet type
 */
export interface TCPPacket<T = unknown> {
	sequence: number
	acknowledgment: number
	flags: TCPFlags
	window: number
	payload: T
	checksum: number
	urgentPointer: number
}

/**
 * TCP flags
 */
export interface TCPFlags {
	fin: boolean
	syn: boolean
	rst: boolean
	psh: boolean
	ack: boolean
	urg: boolean
	ece: boolean
	cwr: boolean
}

/**
 * UDP packet type
 */
export interface UDPPacket<T = unknown> {
	sourcePort: number
	destinationPort: number
	length: number
	checksum: number
	payload: T
}

/**
 * Socket address
 */
export interface SocketAddress {
	host: string
	port: number
	family?: 'IPv4' | 'IPv6'
}

/**
 * TCP socket options
 */
export interface TCPSocketOptions {
	keepAlive?: boolean
	keepAliveInitialDelay?: number
	noDelay?: boolean
	timeout?: number
	reuseAddress?: boolean
	reusePort?: boolean
}

/**
 * UDP socket options
 */
export interface UDPSocketOptions {
	recvBufferSize?: number
	sendBufferSize?: number
	reuseAddress?: boolean
	reusePort?: boolean
	broadcast?: boolean
	multicastInterface?: string
	multicastLoopback?: boolean
	multicastTTL?: number
}

/**
 | TCP connection state
 */
export type TCPState
	= | 'LISTEN'
		| 'SYN_SENT'
		| 'SYN_RECEIVED'
		| 'ESTABLISHED'
		| 'FIN_WAIT_1'
		| 'FIN_WAIT_2'
		| 'CLOSE_WAIT'
		| 'CLOSING'
		| 'LAST_ACK'
		| 'TIME_WAIT'
		| 'CLOSED'

// ============================================================================
// Protocol Buffer Types
// ============================================================================

/**
 * Proto message type
 */
export interface ProtoMessage<T = unknown> {
	name: string
	fields: Record<string, ProtoField<T>>
	nested?: Record<string, ProtoMessage<T>>
}

/**
 * Proto field type
 */
export interface ProtoField<T = unknown> {
	number: number
	type: ProtoFieldType
	repeated?: boolean
	optional?: boolean
	oneof?: string
	map?: { key: ProtoFieldType, value: ProtoFieldType }
	default?: T
}

/**
 * Proto field types
 */
export type ProtoFieldType
	= | 'double' | 'float'
		| 'int32' | 'int64' | 'uint32' | 'uint64'
		| 'sint32' | 'sint64' | 'fixed32' | 'fixed64' | 'sfixed32' | 'sfixed64'
		| 'bool' | 'string' | 'bytes'
		| string // custom message or enum type

/**
 * Proto enum type
 */
export interface ProtoEnum<T extends Record<string, number> = Record<string, number>> {
	name: string
	values: T
	reserved?: Array<number | string>
}

/**
 * Proto service type
 */
export interface ProtoService<T extends Record<string, (...args: unknown[]) => unknown> = Record<string, (...args: unknown[]) => unknown>> {
	name: string
	methods: { [K in keyof T]: ProtoMethod<T[K]> }
}

/**
 * Proto method type
 */
export interface ProtoMethod<_T extends (...args: unknown[]) => unknown = (...args: unknown[]) => unknown> {
	name: string
	inputType: string
	outputType: string
	clientStreaming?: boolean
	serverStreaming?: boolean
	options?: Record<string, unknown>
}

// ============================================================================
// MQTT Types
// ============================================================================

/**
 * MQTT packet type
 */
export interface MQTTPacket<T = unknown> {
	type: MQTTPacketType
	flags: number
	remainingLength: number
	payload: T
}

/**
 * MQTT packet types
 */
export type MQTTPacketType
	= | 'CONNECT' | 'CONNACK' | 'PUBLISH' | 'PUBACK' | 'PUBREC' | 'PUBREL' | 'PUBCOMP'
		| 'SUBSCRIBE' | 'SUBACK' | 'UNSUBSCRIBE' | 'UNSUBACK'
		| 'PINGREQ' | 'PINGRESP' | 'DISCONNECT' | 'AUTH'

/**
 * MQTT topic
 */
export type MQTTTopic = string

/**
 * MQTT payload
 */
export type MQTTPayload<T = unknown> = T

/**
 * MQTT QoS level
 */
export type MQTTQoS = 0 | 1 | 2

/**
 * MQTT connect options
 */
export interface MQTTConnectOptions {
	clientId: string
	keepAlive?: number
	username?: string
	password?: string
	clean?: boolean
	will?: {
		topic: MQTTTopic
		payload: MQTTPayload
		qos: MQTTQoS
		retain: boolean
	}
}

/**
 * MQTT publish options
 */
export interface MQTTPublishOptions {
	qos: MQTTQoS
	retain?: boolean
	duplicate?: boolean
	properties?: MQTTProperties
}

/**
 * MQTT subscribe options
 */
export interface MQTTSubscribeOptions {
	qos: MQTTQoS
	rap?: boolean // Retain as Published
	nl?: boolean // No Local
	'retain-handling'?: 0 | 1 | 2
}

/**
 * MQTT properties
 */
export interface MQTTProperties {
	'payload-format-indicator'?: boolean
	'message-expiry-interval'?: number
	'content-type'?: string
	'response-topic'?: string
	'correlation-data'?: ArrayBuffer
	'subscription-identifier'?: number | number[]
	'topic-alias'?: number
	'user-properties'?: Record<string, string>
}

/**
 * MQTT handler
 */
export type MQTTHandler<T = unknown> = (
	topic: MQTTTopic,
	payload: MQTTPayload<T>,
	properties?: MQTTProperties,
) => void | Promise<void>

// ============================================================================
// Network Utilities
// ============================================================================

/**
 * URL type
 */
export interface URLType {
	protocol: string
	host: string
	hostname: string
	port: number
	pathname: string
	search: string
	hash: string
	username?: string
	password?: string
}

/**
 | Parse URL to URL type
 */
type ParseURLImpl<S extends string> = S extends `${infer Protocol}://${infer Rest}`
	? Rest extends `${infer Hostname}:${infer Port}/${infer Pathname}?${infer Search}#${infer Hash}`
		? URLType & {
			protocol: Protocol
			hostname: Hostname
			port: Port extends `${number}` ? Port : never
			pathname: `/${Pathname}`
			search: `?${Search}`
			hash: `#${Hash}`
		}
		: URLType
	: never

export type ParseURL<S extends string> = ParseURLImpl<S>

/**
 * IP address type
 */
export type IPAddress = string

/**
 * Port number type
 */
export type Port = number

/**
 | Network interface type
 */
export interface NetworkInterface {
	name: string
	address: IPAddress
	netmask: string
	family: 'IPv4' | 'IPv6'
	internal: boolean
	cidr?: string
	mac?: string
}
