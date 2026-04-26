# Language Processing Types

**Since 1.9.0**

Types for natural language processing (NLP) applications.

## Overview

Language Processing Types provides type-level natural language processing utilities. It supports tokenization, parsing, semantic analysis, sentiment detection, translation, and text classification.

This module enables building type-safe NLP applications with proper constraints for tokens, sentences, embeddings, and language models.

## Basic Usage

```typescript
import type { Token, Sentence, Document, Embedding, SentimentResult } from 'uni-types'

// Define token type
type WordToken = Token<{ lemma: string, pos: PartOfSpeech }>

// Define document type
type TextDocument = Document<{ title: string, author: string }>

// Define embedding
type WordEmbedding = Embedding<{ word: string }>
```

## Key Types

### TokenType

Token type classification.

```typescript
type TokenType =
  | 'word'
  | 'punctuation'
  | 'number'
  | 'whitespace'
  | 'symbol'
  | 'emoji'
  | 'url'
  | 'email'
  | 'mention'
  | 'hashtag'
```

### Token

Token base interface.

```typescript
interface Token<T = unknown> {
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
```

### Sentence

Sentence type with tokens.

```typescript
interface Sentence<T extends Token = Token> {
  id: number
  text: string
  tokens: T[]
  start: number
  end: number
  parseTree?: ParseTree
  dependencies?: DependencyRelation[]
  sentiment?: SentimentResult
}
```

### Document

Document type with paragraphs.

```typescript
interface Document<P extends Paragraph = Paragraph> {
  id: string
  text: string
  paragraphs: P[]
  metadata?: DocumentMetadata
  language?: Locale
}
```

### ParseTree

Parse tree structure.

```typescript
interface ParseTree {
  root: ParseNode
  nodes: Map<string, ParseNode>
  depth: number
}
```

### PartOfSpeech

Part of speech enumeration.

```typescript
type PartOfSpeech =
  | 'noun'
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
```

### Embedding

Embedding type with vector.

```typescript
interface Embedding<T = unknown> {
  vector: EmbeddingVector
  dimension: number
  model: string
  data?: T
}
```

### SentimentResult

Sentiment analysis result.

```typescript
interface SentimentResult {
  score: SentimentScore
  label: SentimentLabel
  confidence: number
  aspectSentiments?: AspectSentiment[]
}
```

### EntityType

Named entity recognition types.

```typescript
type EntityType =
  | 'person'
  | 'organization'
  | 'location'
  | 'date'
  | 'time'
  | 'money'
  | 'percent'
  | 'quantity'
  | 'event'
  | 'product'
  | 'language'
  | 'nationality'
```

### TranslationResult

Translation result type.

```typescript
interface TranslationResult {
  text: string
  sourceLanguage: Locale
  targetLanguage: Locale
  alternatives?: string[]
  confidence?: number
  metadata?: TranslationMetadata
}
```

### Locale

Locale type (ISO 639-1).

```typescript
type Locale =
  | 'en' | 'zh' | 'es' | 'ja' | 'de' | 'fr' | 'ko' | 'ru'
  | 'pt' | 'it' | 'ar' | 'hi' | 'bn' | 'pa' | 'id' | 'ms'
  // ... more locales
```

## Related

- [AI/ML](./ai) - ML model types
- [Error Handling](./error-handling) - Error types
- [Functional Programming](./functional) - Functional patterns