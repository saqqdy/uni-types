# Type Visualization

Type visualization and debugging utilities.

## Overview

The `visualize` module provides type visualization and debugging utilities, including diagrams, trees, diffs, and documentation generation.

## Visual Representation

### TypeDiagram

```ts
import type { TypeDiagram, TypeDiagramProperty, TypeDiagramMethod } from 'uni-types'

interface MyClassDiagram extends TypeDiagram<User> {
  name: 'User'
  type: 'class'
  properties: TypeDiagramProperty[]
  methods: TypeDiagramMethod[]
  extends?: ['BaseEntity']
  implements?: ['Serializable']
}
```

### TypeTree

```ts
import type { TypeTree, TypeName } from 'uni-types'

interface MyTypeTree extends TypeTree<{ a: { b: { c: number } } }> {
  name: 'MyObject'
  type: 'object'
  children: TypeTree[]
  depth: 3
}
```

### TypeGraph

```ts
import type { TypeGraph, TypeGraphNode, TypeGraphEdge } from 'uni-types'

interface MyGraph extends TypeGraph<User> {
  nodes: TypeGraphNode[]
  edges: TypeGraphEdge[]
  root: 'User'
}
```

## Debugging Utilities

### Debug

```ts
import type { Debug, Inspect, Pretty } from 'uni-types'

type MyDebug = Debug<{ a: number, b: string }>
// { _type: { a: number, b: string }, _name: '...', ... }
```

### Inspect

```ts
import type { Inspect } from 'uni-types'

type MyInspect = Inspect<{ a: number }>
// { type: 'object', keys: 'a', depth: 1, width: 1 }
```

## Type Diff

### TypeDiff

```ts
import type { TypeDiff, AddedProperties, RemovedProperties, ChangedProperties } from 'uni-types'

type Diff = TypeDiff<{ a: number }, { a: string, b: boolean }>
// { added: 'b', removed: never, changed: 'a' }
```

### Similarity

```ts
import type { Similarity } from 'uni-types'

type Score = Similarity<string, number> // 0
type Score2 = Similarity<string, string> // 100
type Score3 = Similarity<string, string | number> // 50
```

## Documentation Generation

### TypeDoc

```ts
import type { TypeDoc, DocEntry, DocMethod } from 'uni-types'

interface MyTypeDoc extends TypeDoc<User> {
  name: 'User'
  description?: 'User entity'
  properties: DocEntry[]
  methods: DocMethod[]
}
```

## ASCII Art

### ASCIITree

```ts
import type { ASCIITree, ASCIITreeNode } from 'uni-types'

type MyTree = ASCIITree<'root\n  child1\n  child2'>
```

### ASCIITable

```ts
import type { ASCIITable, ASCIITableColumn } from 'uni-types'

interface MyTable extends ASCIITable {
  columns: ASCIITableColumn[]
}
```

## Mermaid Diagrams

### MermaidClassDiagram

```ts
import type { MermaidClassDiagram, MermaidClass, MermaidRelationship } from 'uni-types'

interface MyClassDiagram extends MermaidClassDiagram<User> {
  type: 'classDiagram'
  classes: MermaidClass[]
  relationships: MermaidRelationship[]
}
```

## Type Expansion

### Expand / ExpandRecursively

```ts
import type { Expand, ExpandRecursively } from 'uni-types'

type MyType = { a: number } & { b: string }
type Expanded = Expand<MyType> // { a: number, b: string }
type DeepExpanded = ExpandRecursively<{ x: { a: number } & { b: string } }>
```

### Printable

```ts
import type { Printable } from 'uni-types'

type P = Printable<number> // '${number}'
type P2 = Printable<string> // '"${string}"'
```

## API Reference

| Type | Description |
|------|-------------|
| `TypeDiagram<T>` | Type diagram representation |
| `TypeTree<T>` | Type tree representation |
| `TypeGraph<T>` | Type graph representation |
| `Debug<T>` | Debug type wrapper |
| `Inspect<T>` | Inspect type details |
| `TypeDiff<T, U>` | Type diff result |
| `Similarity<T, U>` | Similarity score (0-100) |
| `TypeDoc<T>` | Type documentation |
| `ASCIITree<T>` | ASCII tree |
| `MermaidClassDiagram<T>` | Mermaid class diagram |
| `Expand<T>` | Expand type |
| `ExpandRecursively<T>` | Expand recursively |
| `Printable<T>` | Printable type |