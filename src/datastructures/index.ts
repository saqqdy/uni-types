/**
 * Type-level data structures
 *
 * This module provides type-level implementations of:
 * - Tree: Tree, TreeNode, TreePath, TreeLeaves
 * - Graph: Graph, GraphNode, GraphEdge, GraphPath
 * - LinkedList: LinkedList, ListNode
 * - Stack & Queue: Stack, Queue, Push, Pop
 */

// ============================================================================
// Tree Structures
// ============================================================================

/**
 * Tree type (alias for TreeNode)
 *
 * @example
 * ```ts
 * type MyTree = Tree<string>
 * ```
 */
export type Tree<T> = TreeNode<T>

/**
 * Tree node structure
 *
 * @example
 * ```ts
 * type MyTree = TreeNode<string, { left?: TreeNode<string>; right?: TreeNode<string> }>
 * ```
 */
export type TreeNode<T, Children extends Record<string, TreeNode<T, any> | undefined> = object> = {
	value: T
} & Children

/**
 * Binary tree node
 *
 * @example
 * ```ts
 * type BinTree = BinaryTreeNode<number>
 * ```
 */
export interface BinaryTreeNode<T> {
	value: T
	left?: BinaryTreeNode<T>
	right?: BinaryTreeNode<T>
}

/**
 * Generic tree type
 *
 * @example
 * ```ts
 * type Tree = GenericTree<string>
 * ```
 */
export interface GenericTree<T> {
	value: T
	children?: GenericTree<T>[]
}

/**
 * Get path to a value in tree
 *
 * @example
 * ```ts
 * TreePath<{ value: 1; left: { value: 2 } }, 2>  // ['left']
 * ```
 */
export type TreePath<T, V, Path extends string[] = []> = T extends { value: infer Val }
	? Val extends V
		? Path
		: T extends { left: infer L }
			? L extends TreeNode<any>
				? TreePath<L, V, [...Path, 'left']> extends string[]
					? TreePath<L, V, [...Path, 'left']>
					: T extends { right: infer R }
						? R extends TreeNode<any>
							? TreePath<R, V, [...Path, 'right']>
							: never
						: never
				: never
			: never
	: never

/**
 * Get maximum depth of tree
 *
 * @example
 * ```ts
 * TreeDepth<{ value: 1; left: { value: 2 } }>  // 2
 * ```
 */
export type TreeDepth<T, Acc extends 0[] = [0]> = T extends { left: infer L, right: infer R }
	? L extends TreeNode<any>
		? R extends TreeNode<any>
			? TreeDepth<L, [...Acc, 0]> extends infer LD
				? TreeDepth<R, [...Acc, 0]> extends infer RD
					? LD extends 0[]
						? RD extends 0[]
							? LD['length'] extends RD['length']
								? LD
								: RD
							: LD
						: RD
					: Acc
				: Acc
			: Acc
		: Acc
	: Acc

/**
 * Get all leaf values of tree
 *
 * @example
 * ```ts
 * TreeLeaves<{ value: 1; left: { value: 2 }; right: { value: 3 } }>  // [2, 3]
 * ```
 */
export type TreeLeaves<T> = T extends { left?: never, right?: never, value: infer V }
	? [V]
	: T extends { left: infer L, right: infer R }
		? L extends TreeNode<any>
			? R extends TreeNode<any>
				? [...TreeLeaves<L>, ...TreeLeaves<R>]
				: L extends TreeNode<any>
					? TreeLeaves<L>
					: []
			: R extends TreeNode<any>
				? TreeLeaves<R>
				: []
		: []

/**
 * Flatten tree to array (pre-order traversal)
 *
 * @example
 * ```ts
 * TreeFlatten<{ value: 1; left: { value: 2 }; right: { value: 3 } }>  // [1, 2, 3]
 * ```
 */
export type TreeFlatten<T> = T extends { value: infer V, left: infer L, right: infer R }
	? L extends TreeNode<any>
		? R extends TreeNode<any>
			? [V, ...TreeFlatten<L>, ...TreeFlatten<R>]
			: [V, ...TreeFlatten<L>]
		: R extends TreeNode<any>
			? [V, ...TreeFlatten<R>]
			: [V]
	: T extends { value: infer V }
		? [V]
		: []

// ============================================================================
// Graph Structures
// ============================================================================

/**
 * Graph node type
 *
 * @example
 * ```ts
 * type Node = GraphNode<string, ['a', 'b']>
 * ```
 */
export interface GraphNode<T extends string, Edges extends string[]> {
	id: T
	edges: Edges
}

/**
 * Graph type (adjacency list)
 *
 * @example
 * ```ts
 * type MyGraph = Graph<{
 *   a: ['b', 'c']
 *   b: ['c']
 *   c: []
 * }>
 * ```
 */
export type Graph<Adjacency extends Record<string, string[]>> = {
	[K in keyof Adjacency]: GraphNode<K & string, Adjacency[K]>
}

/**
 * Get all nodes in graph
 *
 * @example
 * ```ts
 * GraphNodes<Graph<{ a: ['b']; b: [] }>>  // ['a', 'b']
 * ```
 */
export type GraphNodes<G extends Record<string, any>> = Extract<keyof G, string>

/**
 * Get edges from a node
 *
 * @example
 * ```ts
 * GraphEdges<Graph<{ a: ['b', 'c'] }>, 'a'>  // ['b', 'c']
 * ```
 */
export type GraphEdges<G extends Record<string, { edges: string[] }>, N extends keyof G> = G[N] extends {
	edges: infer E
}
	? E extends string[]
		? E
		: []
	: []

/**
 * Check if graph has cycle (limited detection)
 *
 * @example
 * ```ts
 * GraphHasCycle<{ a: ['b']; b: ['a'] }>  // true
 * ```
 */
export type GraphHasCycle<Adjacency extends Record<string, string[]>> = GraphHasCycleImpl<
	keyof Adjacency,
	Adjacency,
	[]
>

type GraphHasCycleImpl<
	Nodes extends string | number | symbol,
	Adjacency extends Record<string, string[]>,
	Visited extends string[],
> = Nodes extends string
	? Nodes extends Visited[number]
		? true
		: Adjacency[Nodes] extends infer Edges
			? Edges extends string[]
				? Edges[number] extends Visited[number]
					? true
					: GraphHasCycleImpl<Edges[number], Adjacency, [...Visited, Nodes]>
				: false
			: false
	: false

/**
 * Graph edge representation
 *
 * @example
 * ```ts
 * GraphEdge<'a', 'b'>  // { from: 'a'; to: 'b' }
 * ```
 */
export interface GraphEdge<From extends string, To extends string> {
	from: From
	to: To
}

/**
 * Graph path (list of nodes from start to end)
 *
 * @example
 * ```ts
 * GraphPath<{ a: ['b']; b: ['c']; c: [] }, 'a', 'c'>  // ['a', 'b', 'c']
 * ```
 */
export type GraphPath<
	Adjacency extends Record<string, string[]>,
	From extends string,
	To extends string,
	Visited extends string[] = [],
> = From extends To
	? [From]
	: From extends Visited[number]
		? never
		: Adjacency[From] extends infer Edges
			? Edges extends string[]
				? FindPath<Edges, Adjacency, To, [...Visited, From]> extends infer Path
					? Path extends string[]
						? [From, ...Path]
						: never
					: never
				: never
			: never

type FindPath<
	Edges extends string[],
	Adjacency extends Record<string, string[]>,
	To extends string,
	Visited extends string[],
> = Edges extends [infer First extends string, ...infer Rest extends string[]]
	? GraphPath<Adjacency, First, To, Visited> extends infer Path
		? Path extends string[]
			? Path
			: FindPath<Rest, Adjacency, To, Visited>
		: FindPath<Rest, Adjacency, To, Visited>
	: never

// ============================================================================
// Linked List
// ============================================================================

/**
 * Linked list node
 *
 * @example
 * ```ts
 * type Node = ListNode<string>
 * ```
 */
export interface ListNode<T> {
	value: T
	next?: ListNode<T>
}

/**
 * Linked list type
 *
 * @example
 * ```ts
 * type List = LinkedList<string>
 * ```
 */
export type LinkedList<T> = ListNode<T> | undefined

/**
 * Get head of linked list
 *
 * @example
 * ```ts
 * ListHead<{ value: 1; next: { value: 2 } }>  // 1
 * ```
 */
export type ListHead<L extends ListNode<any>> = L['value']

/**
 * Get tail of linked list (last element)
 *
 * @example
 * ```ts
 * ListTail<{ value: 1; next: { value: 2 } }>  // 2
 * ```
 */
export type ListTail<L extends ListNode<any>> = L extends { next: infer N }
	? N extends ListNode<any>
		? ListTail<N>
		: L['value']
	: L['value']

/**
 * Get length of linked list
 *
 * @example
 * ```ts
 * ListLength<{ value: 1; next: { value: 2 } }>  // 2
 * ```
 */
export type ListLength<L extends ListNode<any> | undefined, Acc extends 0[] = []> = L extends {
	next: infer N
}
	? N extends ListNode<any>
		? ListLength<N, [...Acc, 0]>
		: [...Acc, 0]['length']
	: L extends ListNode<any>
		? [...Acc, 0]['length']
		: 0

/**
 * Reverse linked list
 *
 * @example
 * ```ts
 * ListReverse<{ value: 1; next: { value: 2 } }>
 * // { value: 2; next: { value: 1 } }
 * ```
 */
export type ListReverse<
	L extends ListNode<any> | undefined,
	Acc extends ListNode<any> | undefined = undefined,
> = L extends { value: infer V, next: infer N }
	? N extends ListNode<any>
		? ListReverse<N, { value: V, next: Acc }>
		: { value: V, next: Acc }
	: Acc

// ============================================================================
// Stack & Queue
// ============================================================================

/**
 * Stack type (LIFO)
 *
 * @example
 * ```ts
 * type MyStack = Stack<string>
 * ```
 */
export type Stack<T> = T[]

/**
 * Push value onto stack
 *
 * @example
 * ```ts
 * Push<[1, 2], 3>  // [1, 2, 3]
 * ```
 */
export type Push<S extends unknown[], V> = [...S, V]

/**
 * Pop value from stack
 *
 * @example
 * ```ts
 * Pop<[1, 2, 3]>  // { stack: [1, 2]; value: 3 }
 * ```
 */
export type Pop<S extends unknown[]> = S extends [...infer Rest, infer Last]
	? { stack: Rest, value: Last }
	: { stack: S, value: never }

/**
 * Peek top of stack
 *
 * @example
 * ```ts
 * Peek<[1, 2, 3]>  // 3
 * ```
 */
export type Peek<S extends unknown[]> = S extends [...unknown[], infer Last] ? Last : never

/**
 * Queue type (FIFO)
 *
 * @example
 * ```ts
 * type MyQueue = Queue<string>
 * ```
 */
export type Queue<T> = T[]

/**
 * Enqueue value (add to back)
 *
 * @example
 * ```ts
 * Enqueue<[1, 2], 3>  // [1, 2, 3]
 * ```
 */
export type Enqueue<Q extends unknown[], V> = [...Q, V]

/**
 * Dequeue value (remove from front)
 *
 * @example
 * ```ts
 * Dequeue<[1, 2, 3]>  // { queue: [2, 3]; value: 1 }
 * ```
 */
export type Dequeue<Q extends unknown[]> = Q extends [infer First, ...infer Rest]
	? { queue: Rest, value: First }
	: { queue: Q, value: never }

/**
 * Front of queue
 *
 * @example
 * ```ts
 * Front<[1, 2, 3]>  // 1
 * ```
 */
export type Front<Q extends unknown[]> = Q extends [infer First, ...unknown[]] ? First : never

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Check if stack is empty
 */
export type IsEmptyStack<S extends unknown[]> = S['length'] extends 0 ? true : false

/**
 * Check if queue is empty
 */
export type IsEmptyQueue<Q extends unknown[]> = Q['length'] extends 0 ? true : false

/**
 * Get stack size
 */
export type StackSize<S extends unknown[]> = S['length']

/**
 * Get queue size
 */
export type QueueSize<Q extends unknown[]> = Q['length']
