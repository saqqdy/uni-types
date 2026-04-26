# 文档生成器 Types

**从 1.8.0 开始**

类型级文档生成。

## 文档核心

### Documentation

文档结构定义。

```typescript
import type { Documentation } from 'uni-types'

type Docs = Documentation<string>
```

### DocEntry

文档条目类型。

```typescript
import type { DocEntry } from 'uni-types'

type Entry = DocEntry<string>
// { id: string; name: string; kind: DocEntryKind; description?: string; ... }
```

### DocSection

文档章节类型。

```typescript
import type { DocSection } from 'uni-types'

type Section = DocSection<string>
```

### DocPage

文档页面定义。

```typescript
import type { DocPage } from 'uni-types'

type Page = DocPage<string>
```

## JSDoc 类型

### JSDoc

JSDoc 定义。

```typescript
import type { JSDoc } from 'uni-types'

type Doc = JSDoc<string>
```

### JSDocTag

JSDoc 标签类型。

```typescript
import type { JSDocTag } from 'uni-types'

type Tag = JSDocTag<string>
// { name: 'param'; content: JSDocParam } | { name: 'returns'; content: JSDocReturn } | ...
```

### JSDocParam

JSDoc 参数类型。

```typescript
import type { JSDocParam } from 'uni-types'

type Param = JSDocParam
// { name: string; type?: string; description?: string; optional?: boolean; ... }
```

## API 文档

### APIDoc

API 文档定义。

```typescript
import type { APIDoc } from 'uni-types'

type API = APIDoc<string>
```

### APIEndpoint

API 端点类型。

```typescript
import type { APIEndpoint } from 'uni-types'

type Endpoint = APIEndpoint<string>
```

### APIParameter

API 参数定义。

```typescript
import type { APIParameter } from 'uni-types'

type Param = APIParameter<string>
```

### APIResponse

API 响应类型。

```typescript
import type { APIResponse } from 'uni-types'

type Response = APIResponse<string>
```

## 类型文档

### TypeDoc

类型文档定义。

```typescript
import type { TypeDoc } from 'uni-types'

type Doc = TypeDoc<string>
```

### TypeDocProperty

类型属性文档。

```typescript
import type { TypeDocProperty } from 'uni-types'

type Prop = TypeDocProperty<string>
```

### TypeDocMethod

类型方法文档。

```typescript
import type { TypeDocMethod } from 'uni-types'

type Method = TypeDocMethod<string>
```

## 文档输出

### DocOutput

文档输出定义。

```typescript
import type { DocOutput } from 'uni-types'

type Output = DocOutput<string>
```

### DocFormat

文档格式类型。

```typescript
import type { DocFormat } from 'uni-types'

type Format = DocFormat  // 'markdown' | 'html' | 'json' | 'yaml' | 'pdf' | ...
```

## 文档搜索

### DocSearch

文档搜索定义。

```typescript
import type { DocSearch } from 'uni-types'

type Search = DocSearch<string>
```

### SearchResult

搜索结果类型。

```typescript
import type { SearchResult } from 'uni-types'

type Result = SearchResult<string>
```

### SearchIndex

搜索索引定义。

```typescript
import type { SearchIndex } from 'uni-types'

type Index = SearchIndex
```

## 文档导航

### DocNavigation

文档导航结构。

```typescript
import type { DocNavigation } from 'uni-types'

type Nav = DocNavigation<string>
```

### DocSidebar

侧边栏定义。

```typescript
import type { DocSidebar } from 'uni-types'

type Sidebar = DocSidebar<string>
```

### DocBreadcrumb

面包屑类型。

```typescript
import type { DocBreadcrumb } from 'uni-types'

type Crumb = DocBreadcrumb
```
