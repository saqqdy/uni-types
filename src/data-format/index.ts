/**
 * Data Format Types
 *
 * Type definitions for various data formats and serialization.
 */

// ============== JSON Types ==============

/**
 * JSON value type
 */
export type JSONValue
	= | string
	| number
	| boolean
	| null
	| JSONValue[]
	| { [key: string]: JSONValue }

/**
 * JSON object type
 */
export interface JSONObject { [key: string]: JSONValue }

/**
 * JSON array type
 */
export type JSONArray = JSONValue[]

/**
 * JSON primitive type
 */
export type JSONPrimitive = string | number | boolean | null

/**
 * JSON schema type
 */
export interface JSONSchema<_T = unknown> {
	$schema?: string
	$id?: string
	title?: string
	description?: string
	type?: 'null' | 'boolean' | 'object' | 'array' | 'number' | 'integer' | 'string' | ('null' | 'boolean' | 'object' | 'array' | 'number' | 'integer' | 'string')[]
	enum?: unknown[]
	const?: unknown
	default?: unknown
	items?: JSONSchema | JSONSchema[]
	properties?: Record<string, JSONSchema>
	additionalProperties?: boolean | JSONSchema
	required?: string[]
	patternProperties?: Record<string, JSONSchema>
	propertyNames?: JSONSchema | string[]
	minProperties?: number
	maxProperties?: number
	dependencies?: Record<string, JSONSchema | string[]>
	if?: JSONSchema
	then?: JSONSchema
	else?: JSONSchema
	allOf?: JSONSchema[]
	anyOf?: JSONSchema[]
	oneOf?: JSONSchema[]
	not?: JSONSchema
	format?: string
	minimum?: number
	maximum?: number
	exclusiveMinimum?: number | boolean
	exclusiveMaximum?: number | boolean
	multipleOf?: number
	minLength?: number
	maxLength?: number
	pattern?: string
	minItems?: number
	maxItems?: number
	uniqueItems?: boolean
	contentMediaType?: string
	examples?: unknown[]
	ref?: string
	$ref?: string
	definitions?: Record<string, JSONSchema>
	$defs?: Record<string, JSONSchema>
	nullable?: boolean
	discriminator?: { propertyName: string, mapping?: Record<string, string> }
	xml?: { name?: string, namespace?: string, prefix?: string, attribute?: boolean, wrapped?: boolean }
	externalDocs?: { url: string, description?: string }
	deprecated?: boolean
	readOnly?: boolean
	writeOnly?: boolean
}

/**
 * JSON path type
 */
export type JSONPath<_T = unknown> = string | (string | number)[]

/**
 * JSON patch operation type
 */
export interface JSONPatch {
	op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test'
	path: string
	from?: string
	value?: unknown
}

/**
 * JSON pointer type
 */
export type JSONPointer = string

/**
 * JSON merge patch type
 */
export type JSONMergePatch<T = unknown> = Partial<T> | null

// ============== XML Types ==============

/**
 * XML node type
 */
export interface XMLNode<T = unknown> {
	name: string
	attributes?: XMLAttributes
	children?: XMLNode[]
	content?: string | T
	cdata?: boolean
	comment?: boolean
}

/**
 * XML attribute type
 */
export type XMLAttribute = string | number | boolean | null

/**
 * XML attributes type
 */
export type XMLAttributes = Record<string, XMLAttribute>

/**
 * XML document type
 */
export interface XMLDocument {
	declaration?: {
		version?: '1.0' | '1.1'
		encoding?: string
		standalone?: 'yes' | 'no'
	}
	processingInstructions?: { target: string, content: string }[]
	doctype?: string
	root: XMLNode
}

/**
 * XML schema type (XSD)
 */
export interface XMLSchema<_T = unknown> {
	targetNamespace?: string
	elementFormDefault?: 'qualified' | 'unqualified'
	attributeFormDefault?: 'qualified' | 'unqualified'
	elements?: Record<string, XMLElement>
	complexTypes?: Record<string, XComplexType>
	simpleTypes?: Record<string, XSimpleType>
	attributes?: Record<string, XMLAttribute>
	attributeGroups?: Record<string, XMLAttributeGroup>
	groups?: Record<string, XMLGroup>
}

/**
 * XML element definition
 */
export interface XMLElement {
	name: string
	type?: string
	minOccurs?: number
	maxOccurs?: number | 'unbounded'
	nillable?: boolean
	default?: string
	fixed?: string
	substitutionGroup?: string
}

/**
 * XML complex type
 */
export interface XComplexType {
	name: string
	base?: string
	sequence?: XMLElement[]
	choice?: XMLElement[]
	all?: XMLElement[]
	attributes?: XMLAttribute[]
	content?: 'complex' | 'simple'
	mixed?: boolean
}

/**
 * XML simple type
 */
export interface XSimpleType {
	name: string
	restriction?: {
		base: string
		minInclusive?: number
		maxInclusive?: number
		minExclusive?: number
		maxExclusive?: number
		pattern?: string
		length?: number
		minLength?: number
		maxLength?: number
		enumeration?: string[]
		whiteSpace?: 'preserve' | 'replace' | 'collapse'
	}
	list?: { itemType: string }
	union?: { memberTypes: string[] }
}

/**
 * XML attribute group
 */
export interface XMLAttributeGroup {
	name: string
	attributes: XMLAttribute[]
}

/**
 * XML group
 */
export interface XMLGroup {
	name: string
	sequence?: XMLElement[]
	choice?: XMLElement[]
	all?: XMLElement[]
}

/**
 * XPath expression type
 */
export type XPathExpression = string

/**
 * XPath result type
 */
export type XPathResult<T = unknown> = T | T[] | null

// ============== YAML Types ==============

/**
 * YAML value type
 */
export type YAMLValue<T = unknown>
	= | string
	| number
	| boolean
	| null
	| YAMLValue[]
	| { [key: string]: YAMLValue }
	| T

/**
 * YAML node type
 */
export interface YAMLNode<T = unknown> {
	type: 'scalar' | 'map' | 'seq' | 'alias' | 'null' | 'comment'
	tag?: string
	value?: string | YAMLNode[] | Record<string, YAMLNode>
	key?: string
	anchor?: string
	content?: T
	startPosition?: number
	endPosition?: number
	range?: [number, number]
}

/**
 * YAML document type
 */
export interface YAMLDocument<T = unknown> {
	contents: YAMLNode | null
	errors: YAMLError[]
	warnings: string[]
	custom?: T
}

/**
 * YAML error type
 */
export interface YAMLError {
	name: string
	reason: string
	mark?: {
		line: number
		column: number
		position: number
		buffer?: string
	}
	message: string
}

/**
 * YAML path type
 */
export type YAMLPath = string | (string | number)[]

/**
 * YAML schema type
 */
export interface YAMLConfig {
	version?: '1.1' | '1.2'
	schema?: 'failsafe' | 'json' | 'core' | 'yaml-1.1'
	merge?: boolean
	tags?: { tag: string, test: RegExp, resolve: (value: string) => unknown }[]
}

// ============== CSV Types ==============

/**
 * CSV row type
 */
export type CSVRow<T = unknown> = T extends Record<string, unknown>
	? T
	: string[]

/**
 * CSV header type
 */
export type CSVHeader = string[]

/**
 * CSV configuration type
 */
export interface CSVConfig<T = unknown> {
	delimiter?: string
	quote?: string
	escape?: string
	header?: boolean
	columns?: string[]
	skipLines?: number
	skipEmptyLines?: boolean
	trim?: boolean
	trimHeaders?: boolean
	cast?: boolean | ((value: string, context: { header: string | number, index: number }) => unknown)
	castDate?: boolean | string
	comment?: string
	maxRowSize?: number
	bom?: boolean
	encoding?: string
	transform?: (row: CSVRow<T>) => CSVRow<T>
}

/**
 * CSV parse options
 */
export interface CSVParseOptions extends CSVConfig {
	from?: number | string
	to?: number | string
	limit?: number
}

/**
 * CSV stringification options
 */
export interface CSVStringifyOptions extends CSVConfig {
	header?: boolean
	rowDelimiter?: string
	quoted?: boolean
	quotedEmpty?: boolean
	quotedString?: boolean
	quotedMatch?: RegExp
	formatters?: {
		bool?: (value: boolean) => string
		date?: (value: Date) => string
		number?: (value: number) => string
		object?: (value: unknown) => string
	}
}

/**
 * CSV parse result
 */
export interface CSVParseResult<T = unknown> {
	data: CSVRow<T>[]
	errors: { message: string, row: number, column?: number }[]
	meta: {
		delimiter: string
		linebreak: string
		aborted: boolean
		truncated: boolean
		cursor: number
		fields?: string[]
	}
}

// ============== TOML Types ==============

/**
 * TOML value type
 */
export type TOMLValue<T = unknown>
	= | string
	| number
	| boolean
	| Date
	| TOMLValue[]
	| { [key: string]: TOMLValue }
	| T

/**
 * TOML table type
 */
export interface TOMLTable<T = unknown> {
	name: string
	items: Record<string, TOMLValue>
	subTables?: TOMLTable[]
	arrayOfTables?: TOMLTable[]
	custom?: T
}

/**
 * TOML key type
 */
export type TOMLKey = string

/**
 * TOML document type
 */
export interface TOMLDocument<T = unknown> {
	tables: TOMLTable[]
	errors: { message: string, line: number, column: number }[]
	custom?: T
}

/**
 * TOML datetime type
 */
export interface TOMLDateTime {
	type: 'local-date' | 'local-time' | 'local-datetime' | 'offset-datetime'
	value: string
}

// ============== Protocol Buffers Types ==============

/**
 * Proto message type
 */
export interface ProtoMessage<T = unknown> {
	name: string
	fields: ProtoField[]
	nestedTypes?: ProtoMessage[]
	nestedEnums?: ProtoEnum[]
	extensions?: ProtoExtension[]
	options?: Record<string, unknown>
	reserved?: { start: number, end?: number }[] | string[]
	custom?: T
}

/**
 * Proto field type
 */
export interface ProtoField {
	name: string
	number: number
	type: string
	label?: 'optional' | 'required' | 'repeated'
	options?: Record<string, unknown>
	defaultValue?: unknown
	comment?: string
	oneof?: string
	mapKey?: string
	mapValue?: string
	jsonName?: string
}

/**
 * Proto enum type
 */
export interface ProtoEnum {
	name: string
	values: { name: string, number: number, options?: Record<string, unknown> }[]
	options?: Record<string, unknown>
	reserved?: { start: number, end?: number }[] | string[]
}

/**
 * Proto service type
 */
export interface ProtoService {
	name: string
	methods: {
		name: string
		inputType: string
		outputType: string
		clientStreaming?: boolean
		serverStreaming?: boolean
		options?: Record<string, unknown>
	}[]
	options?: Record<string, unknown>
}

/**
 * Proto extension type
 */
export interface ProtoExtension {
	name: string
	extendee: string
	fields: ProtoField[]
}

/**
 * Proto file type
 */
export interface ProtoFile<T = unknown> {
	syntax: 'proto2' | 'proto3'
	package?: string
	imports?: string[]
	publicImports?: string[]
	messages: ProtoMessage[]
	enums: ProtoEnum[]
	services: ProtoService[]
	extensions?: ProtoExtension[]
	options?: Record<string, unknown>
	custom?: T
}

// ============== MessagePack Types ==============

/**
 * MessagePack value type
 */
export type MessagePackValue<T = unknown>
	= | null
	| boolean
	| number
	| string
	| Uint8Array
	| MessagePackValue[]
	| Map<MessagePackValue, MessagePackValue>
	| { [key: string]: MessagePackValue }
	| T

/**
 * MessagePack type
 */
export type MessagePackType
	= | 'nil'
	| 'bool'
	| 'int'
	| 'float'
	| 'str'
	| 'bin'
	| 'array'
	| 'map'
	| 'timestamp'
	| 'ext'

/**
 * MessagePack extension type
 */
export interface MessagePackExtension {
	type: number
	data: Uint8Array
}

/**
 * MessagePack options
 */
export interface MessagePackOptions {
	extensionCodec?: {
		encode: (data: unknown) => MessagePackExtension | null
		decode: (ext: MessagePackExtension) => unknown
	}[]
	forceFloat32?: boolean
	forceIntegerToFloat?: boolean
	ignoreUndefined?: boolean
	bigint?: boolean
}

// ============== Avro Types ==============

/**
 * Avro schema type
 */
export type AvroSchema
	= | string
	| AvroPrimitiveType
	| AvroRecordSchema
	| AvroEnumSchema
	| AvroArraySchema
	| AvroMapSchema
	| AvroFixedSchema
	| AvroUnionSchema

export type AvroPrimitiveType
	= | 'null'
	| 'boolean'
	| 'int'
	| 'long'
	| 'float'
	| 'double'
	| 'bytes'
	| 'string'

/**
 * Avro record schema
 */
export interface AvroRecordSchema<T = unknown> {
	type: 'record'
	name: string
	namespace?: string
	doc?: string
	aliases?: string[]
	fields: AvroField[]
	custom?: T
}

/**
 * Avro field type
 */
export interface AvroField {
	name: string
	doc?: string
	type: AvroSchema
	default?: unknown
	aliases?: string[]
	order?: 'ascending' | 'descending' | 'ignore'
}

/**
 * Avro enum schema
 */
export interface AvroEnumSchema {
	type: 'enum'
	name: string
	namespace?: string
	aliases?: string[]
	doc?: string
	symbols: string[]
	default?: string
}

/**
 * Avro array schema
 */
export interface AvroArraySchema {
	type: 'array'
	items: AvroSchema
}

/**
 * Avro map schema
 */
export interface AvroMapSchema {
	type: 'map'
	values: AvroSchema
}

/**
 * Avro fixed schema
 */
export interface AvroFixedSchema {
	type: 'fixed'
	name: string
	namespace?: string
	aliases?: string[]
	size: number
}

/**
 * Avro union schema
 */
export type AvroUnionSchema = AvroSchema[]

// ============== BSON Types ==============

/**
 * BSON value type
 */
export type BSONValue<T = unknown>
	= | null
	| boolean
	| number
	| string
	| Binary
	| ObjectId
	| Date
	| RegExp
	| Int32
	| Long
	| Double
	| Timestamp
	| Decimal128
	| Code
	| MinKey
	| MaxKey
	| BSONValue[]
	| { [key: string]: BSONValue }
	| T

/**
 * BSON document type
 */
export type BSONDocument<T = unknown> = { [key: string]: BSONValue } & T

/**
 * BSON types (minimal)
 */
export interface Binary {
	subtype: number
	buffer: Uint8Array
}

export interface ObjectId {
	id: string | Uint8Array
}

export interface Int32 {
	value: number
}

export interface Long {
	low: number
	high: number
}

export interface Double {
	value: number
}

export interface Timestamp {
	t: number
	i: number
}

export interface Decimal128 {
	bytes: Uint8Array
}

export interface Code {
	code: string
	scope?: Record<string, unknown>
}

export interface MinKey {}
export interface MaxKey {}

// ============== INI Types ==============

/**
 * INI configuration type
 */
export interface INIConfig {
	[section: string]: Record<string, string | number | boolean>
}

/**
 * INI parse options
 */
export interface INIParseOptions {
	delimiter?: string
	comment?: string | string[]
	sections?: boolean
	lists?: boolean
	autoTyping?: boolean
	allowDuplicateKeys?: boolean
	overrideDuplicateKeys?: boolean
}

/**
 * INI stringify options
 */
export interface INIStringifyOptions {
	delimiter?: string
	comment?: string
	whitespace?: boolean
	align?: boolean | 'left' | 'right' | 'center'
	sortKeys?: boolean | ((a: string, b: string) => number)
	platform?: 'windows' | 'unix'
}

// ============== Form Data Types ==============

/**
 * FormData entry type
 */
export type FormDataEntry = string | File | Blob

/**
 * FormData value type
 */
export type FormDataValue<T = unknown> = FormDataEntry | FormDataEntry[] | T

/**
 * Multipart form data configuration
 */
export interface MultipartConfig {
	boundary?: string
	type?: 'form-data' | 'related' | 'mixed' | 'alternative'
	encoding?: string
}

/**
 * URL-encoded form data options
 */
export interface URLEncodedOptions {
	allowDots?: boolean
	allowPrototypes?: boolean
	arrayFormat?: 'indices' | 'brackets' | 'repeat' | 'comma'
	bracketSeparator?: string
	commaRoundTrip?: boolean
	encoder?: (value: unknown) => string
	filter?: ((prefix: string, value: unknown) => unknown) | string[] | unknown
	indices?: boolean
	serializeDate?: (date: Date) => string
	skipNulls?: boolean
	sort?: (a: string, b: string) => number
	strictNullHandling?: boolean
	encode?: boolean
	encodeValuesOnly?: boolean
}

// ============== Universal Data Types ==============

/**
 * Universal data format
 */
export interface UniversalDataFormat<T = unknown> {
	format: 'json' | 'xml' | 'yaml' | 'csv' | 'toml' | 'msgpack' | 'avro' | 'bson' | 'ini' | 'form-data' | 'urlencoded'
	data: T
	schema?: JSONSchema | XMLSchema | AvroSchema | ProtoMessage | string
	encoding?: string
	compression?: 'gzip' | 'brotli' | 'deflate' | 'none'
	metadata?: Record<string, unknown>
}

/**
 * Data transformation result
 */
export interface DataTransformationResult<T = unknown, U = unknown> {
	input: T
	output: U
	errors: { message: string, path?: string, value?: unknown }[]
	warnings: string[]
	lost?: { path: string, value: unknown }[]
	gained?: { path: string, value: unknown }[]
}

/**
 * Data validation result
 */
export interface DataValidationResult<T = unknown> {
	valid: boolean
	errors: { path: string, message: string, value?: unknown, schema?: unknown }[]
	warnings: { path: string, message: string, value?: unknown }[]
	data?: T
}
