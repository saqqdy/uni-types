# Documentation Generator Types

**Since 1.8.0**

Type-level documentation generation.

## Documentation Core

### Documentation

Documentation structure definition.

```typescript
import type { Documentation } from 'uni-types'

type Docs = Documentation<string>
```

### DocEntry

Documentation entry type.

```typescript
import type { DocEntry } from 'uni-types'

type Entry = DocEntry<string>
// { id: string; name: string; kind: DocEntryKind; description?: string; ... }
```

### DocSection

Documentation section type.

```typescript
import type { DocSection } from 'uni-types'

type Section = DocSection<string>
```

### DocPage

Documentation page definition.

```typescript
import type { DocPage } from 'uni-types'

type Page = DocPage<string>
```

## JSDoc Types

### JSDoc

JSDoc definition.

```typescript
import type { JSDoc } from 'uni-types'

type Doc = JSDoc<string>
```

### JSDocTag

JSDoc tag types.

```typescript
import type { JSDocTag } from 'uni-types'

type Tag = JSDocTag<string>
// { name: 'param'; content: JSDocParam } | { name: 'returns'; content: JSDocReturn } | ...
```

### JSDocParam

JSDoc parameter type.

```typescript
import type { JSDocParam } from 'uni-types'

type Param = JSDocParam
// { name: string; type?: string; description?: string; optional?: boolean; ... }
```

## API Documentation

### APIDoc

API documentation definition.

```typescript
import type { APIDoc } from 'uni-types'

type API = APIDoc<string>
```

### APIEndpoint

API endpoint type.

```typescript
import type { APIEndpoint } from 'uni-types'

type Endpoint = APIEndpoint<string>
```

### APIParameter

API parameter definition.

```typescript
import type { APIParameter } from 'uni-types'

type Param = APIParameter<string>
```

### APIResponse

API response type.

```typescript
import type { APIResponse } from 'uni-types'

type Response = APIResponse<string>
```

## Type Documentation

### TypeDoc

Type documentation definition.

```typescript
import type { TypeDoc } from 'uni-types'

type Doc = TypeDoc<string>
```

### TypeDocProperty

Type property documentation.

```typescript
import type { TypeDocProperty } from 'uni-types'

type Prop = TypeDocProperty<string>
```

### TypeDocMethod

Type method documentation.

```typescript
import type { TypeDocMethod } from 'uni-types'

type Method = TypeDocMethod<string>
```

## Documentation Output

### DocOutput

Documentation output definition.

```typescript
import type { DocOutput } from 'uni-types'

type Output = DocOutput<string>
```

### DocFormat

Documentation format types.

```typescript
import type { DocFormat } from 'uni-types'

type Format = DocFormat  // 'markdown' | 'html' | 'json' | 'yaml' | 'pdf' | ...
```

## Documentation Search

### DocSearch

Documentation search definition.

```typescript
import type { DocSearch } from 'uni-types'

type Search = DocSearch<string>
```

### SearchResult

Search result type.

```typescript
import type { SearchResult } from 'uni-types'

type Result = SearchResult<string>
```

### SearchIndex

Search index definition.

```typescript
import type { SearchIndex } from 'uni-types'

type Index = SearchIndex
```

## Documentation Navigation

### DocNavigation

Documentation navigation structure.

```typescript
import type { DocNavigation } from 'uni-types'

type Nav = DocNavigation<string>
```

### DocSidebar

Sidebar definition.

```typescript
import type { DocSidebar } from 'uni-types'

type Sidebar = DocSidebar<string>
```

### DocBreadcrumb

Breadcrumb type.

```typescript
import type { DocBreadcrumb } from 'uni-types'

type Crumb = DocBreadcrumb
```
