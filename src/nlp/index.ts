/**
 * Type-Level Language Processing
 *
 * Type-level natural language processing utilities.
 */

// ============================================================================
// Tokenization Types
// ============================================================================

/**
 * Token type classification
 */
export type TokenType
	= | 'word'
	| 'punctuation'
	| 'number'
	| 'whitespace'
	| 'symbol'
	| 'emoji'
	| 'url'
	| 'email'
	| 'mention'
	| 'hashtag'

/**
 * Token base interface
 */
export interface Token<T = unknown> {
	id: number
	text: string
	type: TokenType
	start: number
	end: number
	lemma?: string
	pos?: PartOfSpeech
	tag?: string
	data?: T
}

/**
 * Token stream
 */
export type TokenStream<T extends Token = Token> = T[]

/**
 * Tokenizer options
 */
export interface TokenizerOptions {
	lowercase?: boolean
	removePunctuation?: boolean
	removeStopwords?: boolean
	minLength?: number
	maxLength?: number
	customPatterns?: RegExp[]
}

// ============================================================================
// NLP Types
// ============================================================================

/**
 * Sentence type
 */
export interface Sentence<T extends Token = Token> {
	id: number
	text: string
	tokens: T[]
	start: number
	end: number
	parseTree?: ParseTree
	dependencies?: DependencyRelation[]
	sentiment?: SentimentResult
}

/**
 * Paragraph type
 */
export interface Paragraph<S extends Sentence = Sentence> {
	id: number
	text: string
	sentences: S[]
	start: number
	end: number
}

/**
 * Document type
 */
export interface Document<P extends Paragraph = Paragraph> {
	id: string
	text: string
	paragraphs: P[]
	metadata?: DocumentMetadata
	language?: Locale
}

/**
 * Corpus type
 */
export interface Corpus<D extends Document = Document> {
	id: string
	documents: D[]
	metadata?: CorpusMetadata
	index?: TermIndex
}

/**
 * Document metadata
 */
export interface DocumentMetadata {
	title?: string
	author?: string
	date?: string | Date
	source?: string
	language?: Locale
	tags?: string[]
}

/**
 * Corpus metadata
 */
export interface CorpusMetadata {
	name: string
	description?: string
	size: number
	createdAt: Date
	updatedAt: Date
}

// ============================================================================
// Parsing Types
// ============================================================================

/**
 * Parse tree node
 */
export interface ParseNode<T = unknown> {
	id: string
	label: string
	children: ParseNode<T>[]
	parent?: string
	token?: Token
	data?: T
}

/**
 * Parse tree
 */
export interface ParseTree {
	root: ParseNode
	nodes: Map<string, ParseNode>
	depth: number
}

/**
 * Grammar rule
 */
export interface GrammarRule {
	lhs: string
	rhs: string[]
	probability?: number
}

/**
 * Grammar type
 */
export interface Grammar {
	start: string
	rules: GrammarRule[]
	terminals: string[]
	nonTerminals: string[]
}

/**
 * Production rule
 */
export interface Production<L = string, R = string[]> {
	left: L
	right: R
}

/**
 * Dependency relation
 */
export interface DependencyRelation {
	id: number
	head: Token
	dependent: Token
	relation: DependencyRelationType
}

/**
 * Dependency relation types (Universal Dependencies)
 */
export type DependencyRelationType
	= | 'acl' | 'acl:relcl' | 'advcl' | 'advmod' | 'amod' | 'appos'
	| 'aux' | 'aux:pass' | 'case' | 'cc' | 'ccomp' | 'clf'
	| 'compound' | 'compound:redup' | 'conj' | 'cop' | 'csubj'
	| 'csubj:pass' | 'dep' | 'det' | 'det:numgov' | 'det:nummod'
	| 'discourse' | 'dislocated' | 'expl' | 'fixed' | 'flat'
	| 'flat:name' | 'goeswith' | 'iobj' | 'list' | 'mark'
	| 'nmod' | 'nmod:poss' | 'nsubj' | 'nsubj:pass' | 'nummod'
	| 'obj' | 'obl' | 'obl:agent' | 'orphan' | 'parataxis'
	| 'punct' | 'reparandum' | 'root' | 'vocative' | 'xcomp'

// ============================================================================
// Language Models
// ============================================================================

/**
 * Language model type
 */
export interface LanguageModel<T = unknown> {
	name: string
	type: 'ngram' | 'neural' | 'hybrid'
	vocabSize: number
	parameters?: number
	tasks: NLMTask[]
	data?: T
}

/**
 * NL model tasks
 */
export type NLMTask
	= | 'text-generation'
	| 'text-classification'
	| 'token-classification'
	| 'question-answering'
	| 'translation'
	| 'summarization'
	| 'fill-mask'

/**
 * Vocabulary type
 */
export interface Vocabulary<T = unknown> {
	tokens: Map<string, number>
	index: Map<number, string>
	size: number
	specialTokens: SpecialTokens
	data?: T
}

/**
 * Special tokens
 */
export interface SpecialTokens {
	pad: string
	unk: string
	bos: string
	eos: string
	mask: string
	sep: string
	cls: string
}

/**
 * Embedding type
 */
export interface Embedding<T = unknown> {
	vector: EmbeddingVector
	dimension: number
	model: string
	data?: T
}

/**
 * Embedding vector
 */
export type EmbeddingVector = number[]

/**
 * Word embedding
 */
export interface WordEmbedding extends Embedding<{ word: string }> {
	word: string
}

/**
 * Document embedding
 */
export interface DocumentEmbedding extends Embedding<{ document: string }> {
	document: string
	chunks?: string[]
}

// ============================================================================
// Semantic Types
// ============================================================================

/**
 * Semantic role type
 */
export type SemanticRole
	= | 'agent'
	| 'patient'
	| 'theme'
	| 'experiencer'
	| 'beneficiary'
	| 'instrument'
	| 'location'
	| 'goal'
	| 'source'
	| 'time'
	| 'manner'
	| 'cause'
	| 'purpose'

/**
 * Semantic frame
 */
export interface SemanticFrame {
	name: string
	lu: string // Lexical unit
	frameElements: FrameElement[]
}

/**
 * Frame element
 */
export interface FrameElement {
	name: string
	role: SemanticRole
	filler: Token | null
}

/**
 * Entity mention
 */
export interface EntityMention {
	id: string
	text: string
	type: EntityType
	start: number
	end: number
	confidence: number
	normalizedName?: string
	entityId?: string
}

/**
 * Entity types (Named Entity Recognition)
 */
export type EntityType
	= | 'person'
	| 'organization'
	| 'location'
	| 'date'
	| 'time'
	| 'money'
	| 'percent'
	| 'quantity'
	| 'ordinal'
	| 'cardinal'
	| 'event'
	| 'product'
	| 'language'
	| 'nationality'
	| 'religion'
	| 'title'
	| 'law'
	| 'fac' // Facility
	| 'gpe' // Geo-Political Entity
	| 'norp' // Nationality, Organization, Religious/Political groups
	| 'misc'

/**
 * Relation mention
 */
export interface RelationMention {
	id: string
	type: RelationType
	subject: EntityMention
	object: EntityMention
	confidence: number
}

/**
 * Relation types
 */
export type RelationType
	= | 'per:title' | 'per:employee_of' | 'per:spouse'
	| 'per:parent' | 'per:children' | 'per:sibling'
	| 'per:other_family' | 'per:origin' | 'per:religion'
	| 'org:founded_by' | 'org:founder' | 'org:member_of'
	| 'org:members' | 'org:subsidiary' | 'org:parent'
	| 'org:shareholders' | 'org:top_members'
	| 'located_in' | 'part_of' | 'capital_of'
	| 'contains' | 'adjacent_to' | 'borrows_from'

// ============================================================================
// Morphology Types
// ============================================================================

/**
 * Morpheme type
 */
export interface Morpheme {
	id: number
	text: string
	lemma: string
	type: MorphemeType
	features: MorphologicalFeatures
}

/**
 * Morpheme type classification
 */
export type MorphemeType
	= | 'root'
	| 'prefix'
	| 'suffix'
	| 'infix'
	| 'circumfix'

/**
 * Morphological features
 */
export interface MorphologicalFeatures {
	number?: 'singular' | 'plural' | 'dual'
	case?: 'nominative' | 'accusative' | 'genitive' | 'dative' | 'instrumental' | 'locative' | 'vocative'
	gender?: 'masculine' | 'feminine' | 'neuter'
	tense?: 'present' | 'past' | 'future' | 'perfect'
	aspect?: 'perfective' | 'imperfective' | 'progressive'
	mood?: 'indicative' | 'imperative' | 'subjunctive' | 'conditional'
	voice?: 'active' | 'passive' | 'middle'
	person?: 'first' | 'second' | 'third'
	degree?: 'positive' | 'comparative' | 'superlative'
	definiteness?: 'definite' | 'indefinite'
	[key: string]: string | undefined
}

/**
 * Word form type
 */
export type WordForm
	= | 'base'
	| 'inflected'
	| 'derived'
	| 'compound'
	| 'clitic'

/**
 * Part of speech
 */
export type PartOfSpeech
	= | 'noun'
	| 'verb'
	| 'adjective'
	| 'adverb'
	| 'pronoun'
	| 'preposition'
	| 'conjunction'
	| 'interjection'
	| 'determiner'
	| 'numeral'
	| 'particle'
	| 'auxiliary'
	| 'proper_noun'
	| 'symbol'
	| 'punctuation'

// ============================================================================
// Sentiment Types
// ============================================================================

/**
 * Sentiment score
 */
export type SentimentScore = number

/**
 * Sentiment label
 */
export type SentimentLabel = 'positive' | 'negative' | 'neutral' | 'mixed'

/**
 * Sentiment result
 */
export interface SentimentResult {
	score: SentimentScore
	label: SentimentLabel
	confidence: number
	aspectSentiments?: AspectSentiment[]
}

/**
 * Aspect-based sentiment
 */
export interface AspectSentiment {
	aspect: string
	text: string
	score: SentimentScore
	label: SentimentLabel
}

/**
 * Emotion detection
 */
export interface EmotionResult {
	emotions: Record<EmotionType, number>
	dominant: EmotionType
	confidence: number
}

/**
 * Emotion types
 */
export type EmotionType
	= | 'joy'
	| 'sadness'
	| 'anger'
	| 'fear'
	| 'surprise'
	| 'disgust'
	| 'trust'
	| 'anticipation'
	| 'love'
	| 'neutral'

// ============================================================================
// Translation Types
// ============================================================================

/**
 * Locale type (ISO 639-1)
 */
export type Locale
	= | 'en' | 'zh' | 'es' | 'ja' | 'de' | 'fr' | 'ko' | 'ru'
	| 'pt' | 'it' | 'ar' | 'hi' | 'bn' | 'pa' | 'id' | 'ms'
	| 'nl' | 'pl' | 'tr' | 'vi' | 'th' | 'uk' | 'cs' | 'sv'
	| 'hu' | 'ro' | 'el' | 'he' | 'da' | 'fi' | 'no' | 'bg'
	| 'sk' | 'hr' | 'sr' | 'sl' | 'et' | 'lv' | 'lt' | 'fa'

/**
 * Language pair
 */
export type LanguagePair = [source: Locale, target: Locale]

/**
 * Translation result
 */
export interface TranslationResult {
	text: string
	sourceLanguage: Locale
	targetLanguage: Locale
	alternatives?: string[]
	confidence?: number
	metadata?: TranslationMetadata
}

/**
 * Translation metadata
 */
export interface TranslationMetadata {
	model: string
	qualityEstimate?: number
	alignment?: AlignmentInfo[]
}

/**
 * Alignment info (word alignment)
 */
export interface AlignmentInfo {
	sourceStart: number
	sourceEnd: number
	targetStart: number
	targetEnd: number
	score?: number
}

/**
 * Translation options
 */
export interface TranslationOptions {
	sourceLanguage?: Locale
	targetLanguage: Locale
	text: string
	model?: string
	preserveFormat?: boolean
	formality?: 'informal' | 'formal'
	tone?: 'neutral' | 'casual' | 'professional'
}

// ============================================================================
// Text Processing Types
// ============================================================================

/**
 * Text normalization options
 */
export interface NormalizationOptions {
	lowercase?: boolean
	removeAccents?: boolean
	removePunctuation?: boolean
	normalizeUnicode?: boolean
	normalizeWhitespace?: boolean
	expandContractions?: boolean
	replaceEmojis?: boolean
	collapseNumbers?: boolean
}

/**
 * Text chunk
 */
export interface TextChunk {
	id: number
	text: string
	start: number
	end: number
	overlap?: number
}

/**
 * Chunking options
 */
export interface ChunkingOptions {
	strategy: 'fixed' | 'sentence' | 'paragraph' | 'semantic'
	size: number
	overlap?: number
	delimiter?: string
}

// ============================================================================
// Term Index Types
// ============================================================================

/**
 * Term index
 */
export interface TermIndex {
	terms: Map<string, TermInfo>
	documents: Set<string>
	size: number
}

/**
 * Term info
 */
export interface TermInfo {
	df: number // Document frequency
	postings: PostingListEntry[]
	idf?: number // Inverse document frequency
}

/**
 * Posting list entry
 */
export interface PostingListEntry {
	docId: string
	tf: number // Term frequency
	positions: number[]
	fields?: string[]
}

// ============================================================================
// Text Classification Types
// ============================================================================

/**
 * Text classification result
 */
export interface ClassificationResult {
	label: string
	confidence: number
	scores?: Record<string, number>
}

/**
 * Multi-label classification result
 */
export interface MultiLabelResult {
	labels: string[]
	confidences: number[]
	threshold?: number
}

/**
 * Topic modeling result
 */
export interface TopicModelingResult {
	topics: TopicInfo[]
	numTopics: number
	coherence?: number
}

/**
 * Topic info
 */
export interface TopicInfo {
	id: number
	words: string[]
	weights: number[]
	label?: string
}

// ============================================================================
// Question Answering Types
// ============================================================================

/**
 * QA result
 */
export interface QAResult {
	answer: string
	score: number
	start?: number
	end?: number
	context?: string
}

/**
 * QA options
 */
export interface QAOptions {
	question: string
	context: string
	maxAnswerLength?: number
	maxAnswers?: number
}
