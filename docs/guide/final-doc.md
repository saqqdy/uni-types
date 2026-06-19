# Final Documentation

Final documentation types for generating comprehensive, versioned documentation.

## FinalDocConfig

Master configuration for documentation generation.

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

Complete documentation for a single type.

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

Documentation with version-specific content.

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

Searchable index of all documentation.

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

Validates documentation completeness and accuracy.

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

Template for generating consistent documentation pages.

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

Generated API reference documentation.

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
