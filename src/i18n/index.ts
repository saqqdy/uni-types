/**
 * Internationalization (i18n) Types
 *
 * Types for internationalization and localization.
 */

// ============================================================================
// Locale Types
// ============================================================================

/**
 * Locale type
 */
export type Locale = string & {}

/**
 * Locale code type
 */
export type LocaleCode = 'en-US' | 'en-GB' | 'zh-CN' | 'zh-TW' | 'zh-HK' | 'ja-JP' | 'ko-KR' | 'es-ES' | 'es-MX' | 'fr-FR' | 'de-DE' | 'it-IT' | 'pt-BR' | 'pt-PT' | 'ru-RU' | 'ar-SA' | 'hi-IN' | 'tr-TR' | 'vi-VN' | 'th-TH' | 'id-ID' | 'nl-NL' | 'pl-PL' | 'uk-UA' | string

/**
 * Locale configuration
 */
export interface LocaleConfig<T = unknown> {
	defaultLocale: LocaleCode
	fallbackLocale?: LocaleCode
	supportedLocales: LocaleCode[]
	detection?: LocaleDetection
	load?: (locale: LocaleCode) => Promise<T>
}

/**
 * Locale detection config
 */
export interface LocaleDetection {
	order: ('querystring' | 'cookie' | 'session' | 'localStorage' | 'navigator' | 'htmlTag' | 'path' | 'subdomain')[]
	lookupQuerystring?: string
	lookupCookie?: string
	lookupSession?: string
	lookupFromPathIndex?: number
	lookupFromSubdomainIndex?: number
	caches?: string[]
}

/**
 * Language code type (ISO 639-1)
 */
export type LanguageCode = 'en' | 'zh' | 'ja' | 'ko' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ru' | 'ar' | 'hi' | 'tr' | 'vi' | 'th' | 'id' | 'nl' | 'pl' | 'uk' | string

/**
 * Country code type (ISO 3166-1 alpha-2)
 */
export type CountryCode = 'US' | 'GB' | 'CN' | 'TW' | 'HK' | 'JP' | 'KR' | 'ES' | 'MX' | 'FR' | 'DE' | 'IT' | 'BR' | 'PT' | 'RU' | 'SA' | 'IN' | 'TR' | 'VN' | 'TH' | 'ID' | 'NL' | 'PL' | 'UA' | string

// ============================================================================
// Translation Types
// ============================================================================

/**
 * Translation type
 */
export interface Translation<T = string> {
	key: TranslationKey<T>
	value: TranslationValue
	options?: TranslationOptions
}

/**
 * Translation key type
 */
export type TranslationKey<T = string> = T

/**
 * Translation value type
 */
export type TranslationValue = string | TranslationValue[] | { [key: string]: TranslationValue }

/**
 * Translation map type
 */
export type TranslationMap<T extends string = string> = Record<LocaleCode, Record<T, TranslationValue>>

/**
 * Translation options
 */
export interface TranslationOptions {
	context?: string
	count?: number
	gender?: 'male' | 'female' | 'neutral'
	defaultValue?: string
	escape?: boolean
	interpolation?: InterpolationOptions
}

/**
 * Plural form type
 */
export type PluralForm = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other'

/**
 * Plural rule function
 */
export type PluralRule = (count: number) => PluralForm

/**
 * Translation resource
 */
export interface TranslationResource {
	locale: LocaleCode
	namespace?: string
	messages: Record<string, TranslationValue>
	format: 'json' | 'yaml' | 'po' | 'xliff'
}

// ============================================================================
// Message Format Types
// ============================================================================

/**
 * Message format type
 */
export interface MessageFormat {
	format: (message: string, params: MessageParams, locale: LocaleCode) => string
	compile: (message: string, locale: LocaleCode) => CompiledMessage
}

/**
 * Message params type
 */
export type MessageParams = Record<string, unknown>

/**
 * Formatted message type
 */
export interface FormattedMessage {
	id: string
	defaultMessage?: string
	values?: MessageParams
}

/**
 * Interpolated message type
 */
export interface InterpolatedMessage {
	template: string
	values: Record<string, unknown>
	result: string
}

/**
 * Interpolation options
 */
export interface InterpolationOptions {
	prefix?: string
	suffix?: string
	escape?: (value: unknown) => string
	format?: (value: unknown, format: string, locale: LocaleCode) => string
}

/**
 * Compiled message type
 */
export type CompiledMessage = (params: MessageParams) => string

// ============================================================================
// Date/Time Types
// ============================================================================

/**
 * Date format type
 */
export type DateFormat = 'short' | 'medium' | 'long' | 'full' | string

/**
 * Time format type
 */
export type TimeFormat = 'short' | 'medium' | 'long' | 'full' | string

/**
 * Time zone type
 */
export type TimeZone = string

/**
 * Localized date type
 */
export interface LocalizedDate<T = string> {
	value: T
	locale: LocaleCode
	timeZone?: TimeZone
	format: DateFormat
	date: Date
}

/**
 * Localized time type
 */
export interface LocalizedTime<T = string> {
	value: T
	locale: LocaleCode
	timeZone?: TimeZone
	format: TimeFormat
	date: Date
}

/**
 * Date time format options
 */
export interface DateTimeFormatOptions {
	dateStyle?: DateFormat
	timeStyle?: TimeFormat
	year?: 'numeric' | '2-digit'
	month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
	day?: 'numeric' | '2-digit'
	hour?: 'numeric' | '2-digit'
	minute?: 'numeric' | '2-digit'
	second?: 'numeric' | '2-digit'
	timeZoneName?: 'short' | 'long'
	timeZone?: TimeZone
	hour12?: boolean
}

/**
 * Relative time format
 */
export interface RelativeTimeFormat {
	format: (value: number, unit: RelativeTimeUnit) => string
}

/**
 * Relative time unit
 */
export type RelativeTimeUnit = 'year' | 'quarter' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second'

// ============================================================================
// Number Types
// ============================================================================

/**
 * Number format type
 */
export type NumberFormat = 'decimal' | 'percent' | 'unit' | 'compact' | 'scientific' | 'engineering' | string

/**
 * Currency type (ISO 4217)
 */
export type Currency = 'USD' | 'EUR' | 'GBP' | 'CNY' | 'JPY' | 'KRW' | 'AUD' | 'CAD' | 'CHF' | 'HKD' | 'SGD' | 'SEK' | 'NOK' | 'DKK' | 'INR' | 'BRL' | 'MXN' | 'RUB' | 'TRY' | string

/**
 * Localized number type
 */
export interface LocalizedNumber<T = number> {
	value: T
	locale: LocaleCode
	format: NumberFormat
	options?: NumberFormatOptions
}

/**
 * Localized currency type
 */
export interface LocalizedCurrency<T = number> {
	value: T
	locale: LocaleCode
	currency: Currency
	options?: CurrencyFormatOptions
}

/**
 * Number format options
 */
export interface NumberFormatOptions {
	style?: 'decimal' | 'currency' | 'percent' | 'unit'
	minimumIntegerDigits?: number
	minimumFractionDigits?: number
	maximumFractionDigits?: number
	minimumSignificantDigits?: number
	maximumSignificantDigits?: number
	useGrouping?: boolean
	notation?: 'standard' | 'scientific' | 'engineering' | 'compact'
	compactDisplay?: 'short' | 'long'
	signDisplay?: 'auto' | 'never' | 'always' | 'exceptZero'
}

/**
 * Currency format options
 */
export interface CurrencyFormatOptions extends NumberFormatOptions {
	currency: Currency
	currencyDisplay?: 'symbol' | 'name' | 'code'
	currencySign?: 'standard' | 'accounting'
}

// ============================================================================
// List Format Types
// ============================================================================

/**
 * List format type
 */
export type ListFormatStyle = 'long' | 'short' | 'narrow'

/**
 * List format type
 */
export type ListFormatType = 'conjunction' | 'disjunction' | 'unit'

/**
 * List format options
 */
export interface ListFormatOptions {
	style?: ListFormatStyle
	type?: ListFormatType
}

// ============================================================================
// RTL Types
// ============================================================================

/**
 * Direction type
 */
export type Direction = 'ltr' | 'rtl'

/**
 * RTL config type
 */
export interface RTLConfig {
	direction: Direction
	locales: LocaleCode[]
	start?: string
	end?: string
	flip?: boolean
}

/**
 * RTL locale check
 */
export type RTLLocaleChecker = (locale: LocaleCode) => boolean

// ============================================================================
// Region Types
// ============================================================================

/**
 * Region type
 */
export type RegionType = 'US' | 'CN' | 'JP' | 'EU' | 'GB' | 'APAC' | 'EMEA' | 'LATAM' | string

/**
 * Region config type
 */
export interface RegionConfig<T = unknown> {
	region: RegionType
	countries: CountryCode[]
	languages: LanguageCode[]
	localeDefaults: Record<CountryCode, LocaleCode>
	currencies: Record<CountryCode, Currency>
	options?: T
}

// ============================================================================
// Numbering System Types
// ============================================================================

/**
 * Numbering system type
 */
export type NumberingSystem = 'latn' | 'arab' | 'arabext' | 'beng' | 'deva' | 'gujr' | 'guru' | 'hans' | 'hant' | 'mlym' | 'orya' | 'tamldec' | 'telu' | 'thai' | 'tibt' | string

// ============================================================================
// Calendar Types
// ============================================================================

/**
 * Calendar type
 */
export type CalendarType = 'gregory' | 'buddhist' | 'chinese' | 'hebrew' | 'islamic' | 'japanese' | 'persian' | 'indian' | 'iso8601' | string

/**
 * Calendar configuration
 */
export interface CalendarConfig {
	calendar: CalendarType
	timeZone?: TimeZone
	locale: LocaleCode
	weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

// ============================================================================
// Collation Types
// ============================================================================

/**
 * Collation type
 */
export type CollationType = 'default' | 'big5han' | 'gb2312han' | 'pinyin' | 'stroke' | 'zhuyin' | string

/**
 * Collation options
 */
export interface CollationOptions {
	localeMatcher?: 'lookup' | 'best fit'
	usage?: 'sort' | 'search'
	sensitivity?: 'base' | 'accent' | 'case' | 'variant'
	ignorePunctuation?: boolean
	numeric?: boolean
	caseFirst?: 'upper' | 'lower' | 'false'
	collation?: CollationType
}

// ============================================================================
// Unit Types
// ============================================================================

/**
 * Unit type
 */
export type UnitType = 'length' | 'area' | 'volume' | 'mass' | 'temperature' | 'time' | 'speed' | 'pressure' | 'energy' | 'power' | 'digital' | 'concentration' | string

/**
 * Unit format options
 */
export interface UnitFormatOptions {
	unit: UnitType
	unitDisplay?: 'long' | 'short' | 'narrow'
}

// ============================================================================
// Display Names Types
// ============================================================================

/**
 * Display names type
 */
export type DisplayNamesType = 'language' | 'region' | 'script' | 'calendar' | 'dateField' | 'month' | 'weekday' | string

/**
 * Display names options
 */
export interface DisplayNamesOptions {
	type: DisplayNamesType
	style?: 'narrow' | 'short' | 'long'
	fallback?: 'code' | 'none'
	languageDisplay?: 'dialect' | 'standard'
}
