# 类型可视化

类型可视化和调试工具。

## 概述

`visualize` 模块提供类型可视化和调试工具，包括图表、树形结构、差异比较和文档生成。

## 可视化表示

### TypeDiagram

```ts
import type { TypeDiagram, TypeDiagramProperty } from 'uni-types'

interface MyClassDiagram extends TypeDiagram<User> {
  name: 'User'
  type: 'class'
  properties: TypeDiagramProperty[]
}
```

### TypeTree

```ts
import type { TypeTree } from 'uni-types'

interface MyTypeTree extends TypeTree<{ a: { b: number } }> {
  name: 'MyObject'
  type: 'object'
  depth: 2
}
```

## 调试工具

### Debug / Inspect

```ts
import type { Debug, Inspect, Pretty } from 'uni-types'

type MyDebug = Debug<{ a: number }>
type MyInspect = Inspect<{ a: number }>
```

## 类型差异

### TypeDiff

```ts
import type { TypeDiff, AddedProperties, ChangedProperties } from 'uni-types'

type Diff = TypeDiff<{ a: number }, { a: string, b: boolean }>
// { added: 'b', changed: 'a' }
```

## Mermaid 图表

```ts
import type { MermaidClassDiagram, MermaidClass } from 'uni-types'

interface MyClassDiagram extends MermaidClassDiagram<User> {
  type: 'classDiagram'
  classes: MermaidClass[]
}
```

## API 参考

| 类型 | 描述 |
|------|------|
| `TypeDiagram<T>` | 类型图表示 |
| `TypeTree<T>` | 类型树表示 |
| `Debug<T>` | 调试类型包装 |
| `Inspect<T>` | 检查类型详情 |
| `TypeDiff<T, U>` | 类型差异结果 |
| `Similarity<T, U>` | 相似度分数 |
| `TypeDoc<T>` | 类型文档 |
| `Expand<T>` | 展开类型 |