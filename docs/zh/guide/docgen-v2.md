# 文档生成 v2

增强的文档生成，具有更丰富的输出格式和自定义选项。

## DocGenV2

增强的文档生成配置。

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

具有更丰富元数据的增强类型文档。

```typescript
import type { TypeDocV2 } from 'uni-types'

interface User {
	/** 用户的完整名称 */
	name: string
	/** 用户的年龄（年） */
	age: number
}

type UserDoc = TypeDocV2<User>
// { name: { type: 'string'; description: '用户的完整名称'; required: true }; age: { type: 'number'; description: '用户的年龄（年）'; required: true } }
```

## APIDocV2

具有端点详细信息的增强 API 文档。

```typescript
import type { APIDocV2 } from 'uni-types'

type EndpointDoc = APIDocV2<{
	method: 'GET'
	path: '/api/users/:id'
	response: { id: string; name: string }
}>
```

## MarkdownOutput

从类型定义生成 Markdown 文档。

```typescript
import type { MarkdownOutput } from 'uni-types'

interface Config {
	port: number
	host: string
}

type MD = MarkdownOutput<Config>
// 生成 Markdown 表格表示
```

## HTMLDocOutput

从类型定义生成 HTML 文档。

```typescript
import type { HTMLDocOutput } from 'uni-types'

interface Service {
	name: string
	version: string
}

type HTML = HTMLDocOutput<Service>
// 生成 HTML 表格表示
```

## DocTemplateV2

可自定义的文档模板。

```typescript
import type { DocTemplateV2 } from 'uni-types'

type Template = DocTemplateV2<
	'default',
	{ header: true; toc: true; examples: true }
>
```

## DocSearchV2

增强的文档搜索索引。

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

从版本间的类型差异生成变更日志。

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
