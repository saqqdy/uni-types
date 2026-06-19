# 最终文档

用于生成全面的、版本化文档的最终文档类型。

## FinalDocConfig

文档生成的主配置。

```typescript
import type { FinalDocConfig } from 'uni-types'

type Config = FinalDocConfig<{
	version: '1.13.0'
	format: 'markdown'
	languages: ['en', 'zh']
	includeExamples: true
	includePlayground: true
	generateSidebar: true
	validateLinks: true
	theme: 'default'
}>
```

## TypeDocumentation

单个类型的完整文档。

```typescript
import type { TypeDocumentation } from 'uni-types'

type Doc = TypeDocumentation<{
	name: 'DeepPartial'
	category: 'Deep Operations'
	since: '1.0.0'
	description: 'Recursively makes all properties optional'
	signature: 'type DeepPartial<T> = { ... }'
	parameters: [{ name: 'T'; description: 'The type to partialize' }]
	examples: [{ code: string; description: string }()]
	related: ['DeepRequired', 'DeepReadonly', 'DeepOmit']
	breakingChanges: []
}>
```

## VersionedDoc

具有版本特定内容的文档。

```typescript
import type { VersionedDoc } from 'uni-types'

type Versioned = VersionedDoc<{
	type: 'DeepPartial'
	versions: {
		'1.0.0': { signature: 'type DeepPartial<T> = ...' }
		'1.13.0': { signature: 'type DeepPartial<T, Depth = infinite> = ...' }
	}
	currentVersion: '1.13.0'
	changelog: [{ version: '1.13.0'; change: 'Added depth parameter' }]
}>
```

## DocIndex

所有文档的可搜索索引。

```typescript
import type { DocIndex } from 'uni-types'

type Index = DocIndex<{
	totalTypes: 2500
	categories: 30
	searchable: true
	indexVersion: '1.13.0'
	lastRebuilt: string
	crossReferences: true
}>
```

## DocValidation

验证文档的完整性和准确性。

```typescript
import type { DocValidation } from 'uni-types'

type Validation = DocValidation<{
	coverage: 100
	missingDescriptions: 0
	missingExamples: 5
	brokenLinks: 0
	outdatedSince: '1.12.0'
	score: 95
}>
```

## DocTemplate

用于生成一致性文档页面的模板。

```typescript
import type { DocTemplate } from 'uni-types'

type Template = DocTemplate<{
	sections: ['title', 'description', 'signature', 'parameters', 'examples', 'related']
	requiredSections: ['title', 'description', 'signature']
	exampleFormat: 'typescript'
	localization: true
}>
```

## APIReference

生成的 API 参考文档。

```typescript
import type { APIReference } from 'uni-types'

type Reference = APIReference<{
	version: '1.13.0'
	modules: [
		{ name: 'core'; types: 4; description: 'Core operations' },
		{ name: 'deep'; types: 6; description: 'Deep operations' }
	]
	totalTypes: 2500
	generatedAt: string
	format: 'markdown'
}>
```
