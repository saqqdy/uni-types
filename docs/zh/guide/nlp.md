# 语言处理类型

**始于 1.9.0**

用于自然语言处理 (NLP) 应用的类型。

## 概述

语言处理类型提供了类型级自然语言处理工具。它支持分词、解析、语义分析、情感检测、翻译和文本分类。

此模块支持构建具有分词、句子、嵌入和语言模型正确约束的类型安全 NLP 应用。

## 基本用法

```typescript
import type { Token, Sentence, Document, Embedding, SentimentResult } from 'uni-types'

// 定义分词类型
type WordToken = Token<{ lemma: string, pos: PartOfSpeech }>

// 定义文档类型
type TextDocument = Document<{ title: string, author: string }>

// 定义嵌入
type WordEmbedding = Embedding<{ word: string }>
```

## 核心类型

### TokenType

分词类型分类。

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

分词基础接口。

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

具有分词的句子类型。

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

具有段落的文档类型。

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

解析树结构。

```typescript
interface ParseTree {
  root: ParseNode
  nodes: Map<string, ParseNode>
  depth: number
}
```

### PartOfSpeech

词性枚举。

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

具有向量的嵌入类型。

```typescript
interface Embedding<T = unknown> {
  vector: EmbeddingVector
  dimension: number
  model: string
  data?: T
}
```

### SentimentResult

情感分析结果。

```typescript
interface SentimentResult {
  score: SentimentScore
  label: SentimentLabel
  confidence: number
  aspectSentiments?: AspectSentiment[]
}
```

### EntityType

命名实体识别类型。

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

翻译结果类型。

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

区域设置类型（ISO 639-1）。

```typescript
type Locale =
  | 'en' | 'zh' | 'es' | 'ja' | 'de' | 'fr' | 'ko' | 'ru'
  | 'pt' | 'it' | 'ar' | 'hi' | 'bn' | 'pa' | 'id' | 'ms'
  // ... 更多区域设置
```

## 相关

- [AI/ML](./ai) - ML 模型类型
- [错误处理](./error-handling) - 错误类型
- [函数式编程](./functional) - 函数式模式