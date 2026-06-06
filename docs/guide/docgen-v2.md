# Documentation Generation v2

Enhanced documentation generation with richer output formats and customization.

## DocGenV2

Enhanced documentation generation configuration.

```typescript
import type { DocGenV2 } from 'uni-types'

type Config = DocGenV2<{
	format: 'markdown'
	includeExamples: true
	includeSourceLinks: true
	version: '1.12.0'
}>
```

## TypeDocV2

Enhanced type documentation with richer metadata.

```typescript
import type { TypeDocV2 } from 'uni-types'

interface User {
	/** The user's full name */
	name: string
	/** The user's age in years */
	age: number
}

type UserDoc = TypeDocV2<User>
// { name: { type: 'string'; description: "The user's full name"; required: true }; age: { type: 'number'; description: "The user's age in years"; required: true } }
```

## APIDocV2

Enhanced API documentation with endpoint details.

```typescript
import type { APIDocV2 } from 'uni-types'

type EndpointDoc = APIDocV2<{
	method: 'GET'
	path: '/api/users/:id'
	response: { id: string; name: string }
}>
```

## MarkdownOutput

Generate markdown documentation from type definitions.

```typescript
import type { MarkdownOutput } from 'uni-types'

interface Config {
	port: number
	host: string
}

type MD = MarkdownOutput<Config>
// Generates markdown table representation
```

## HTMLDocOutput

Generate HTML documentation from type definitions.

```typescript
import type { HTMLDocOutput } from 'uni-types'

interface Service {
	name: string
	version: string
}

type HTML = HTMLDocOutput<Service>
// Generates HTML table representation
```

## DocTemplateV2

Customizable documentation templates.

```typescript
import type { DocTemplateV2 } from 'uni-types'

type Template = DocTemplateV2<
	'default',
	{ header: true; toc: true; examples: true }
>
```

## DocSearchV2

Enhanced documentation search indexing.

```typescript
import type { DocSearchV2 } from 'uni-types'

type SearchIndex = DocSearchV2<{
	types: true
	functions: true
	properties: true
	examples: true
}>
```

## ChangelogGenerator

Generate changelog from type differences between versions.

```typescript
import type { ChangelogGenerator } from 'uni-types'

type Changes = ChangelogGenerator<
	{ name: string; age: number },
	{ name: string; age: number; email: string },
	'1.11.0',
	'1.12.0'
>
// { added: ['email']; removed: []; modified: []; version: '1.12.0' }
```
