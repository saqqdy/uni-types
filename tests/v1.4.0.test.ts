import type {
	// v1.4.0 - Algorithms
	Find,
	FindIndex,
	Includes,
	IndexOf,
	LongestCommonPrefix,
	Unique,
	Flatten,
	FlattenDeep,
	// v1.4.0 - Parsers
	IsValidJSON,
	ParseJSON,
	StringifyJSON,
	ParseURL,
	QueryParams,
	PathParams,
	ParseCSV,
	SplitByComma,
	// v1.4.0 - StateMachine
	StateMachine,
	State,
	CurrentState,
	NextState,
	CanTransition,
	IsTerminal,
	ValidTransitions,
	// v1.4.0 - DataStructures
	TreeNode,
	BinaryTreeNode,
	Graph,
	GraphNodes,
	ListNode,
	ListHead,
	ListTail,
	Push,
	Pop,
	Peek,
	Enqueue,
	Dequeue,
	Front,
	// v1.4.0 - HTTP
	HTTPMethod,
	HTTPStatus,
	RouteParams,
	// v1.4.0 - Database
	SQLType,
	WhereClause,
	// v1.4.0 - Concurrency
	TaskStatus,
	Task,
	TaskResult,
	Pipeline,
	PipelineStage,
	Scheduler,
	RateLimiter,
	Throttle,
	Debounce,
	// v1.4.0 - Interop
	ToTypeFest,
	FromTypeFest,
	IsCompatible,
	ConvertTo,
	// v1.4.0 - Testing
	ExpectTrue,
	ExpectFalse,
	ExpectEqual,
	ExpectExtends,
	TypeInfo,
	TypeCategory,
	IsUnion,
} from '../src/index'
import { describe, expectTypeOf, it } from 'vitest'

describe('v1.4.0 - Algorithm Types', () => {
	describe('Find', () => {
		it('should find element in tuple', () => {
			type Actual = Find<[1, 2, 3], 2>
			expectTypeOf<Actual>().toEqualTypeOf<2>()
		})

		it('should return never when not found', () => {
			type Actual = Find<[1, 2, 3], 4>
			expectTypeOf<Actual>().toEqualTypeOf<never>()
		})
	})

	describe('FindIndex', () => {
		it('should find index of element', () => {
			type Actual = FindIndex<[1, 2, 3], 2>
			expectTypeOf<Actual>().toEqualTypeOf<1>()
		})

		it('should return -1 when not found', () => {
			type Actual = FindIndex<[1, 2, 3], 4>
			expectTypeOf<Actual>().toEqualTypeOf<-1>()
		})
	})

	describe('Includes', () => {
		it('should return true when includes', () => {
			type Actual = Includes<[1, 2, 3], 2>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false when not includes', () => {
			type Actual = Includes<[1, 2, 3], 4>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('LongestCommonPrefix', () => {
		it('should find common prefix', () => {
			type Actual = LongestCommonPrefix<['flower', 'flow', 'flight']>
			expectTypeOf<Actual>().toEqualTypeOf<'fl'>()
		})

		it('should return empty string when no common prefix', () => {
			type Actual = LongestCommonPrefix<['dog', 'cat']>
			expectTypeOf<Actual>().toEqualTypeOf<''>()
		})
	})

	describe('Unique', () => {
		it('should remove duplicates', () => {
			type Actual = Unique<[1, 2, 1, 3, 2]>
			expectTypeOf<Actual>().toEqualTypeOf<[1, 2, 3]>()
		})
	})

	describe('Flatten', () => {
		it('should flatten one level', () => {
			type Actual = Flatten<[[1, 2], [3, 4]]>
			expectTypeOf<Actual>().toEqualTypeOf<[1, 2, 3, 4]>()
		})
	})

	describe('FlattenDeep', () => {
		it('should flatten deeply', () => {
			type Actual = FlattenDeep<[[1, [2, 3]], [4]]>
			expectTypeOf<Actual>().toEqualTypeOf<[1, 2, 3, 4]>()
		})
	})
})

describe('v1.4.0 - Parser Types', () => {
	describe('IsValidJSON', () => {
		it('should return true for valid JSON object', () => {
			type Actual = IsValidJSON<'{"name": "test"}'>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return true for valid JSON string', () => {
			type Actual = IsValidJSON<'"hello"'>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false for invalid JSON', () => {
			type Actual = IsValidJSON<'invalid'>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('ParseJSON', () => {
		it('should parse string', () => {
			type Actual = ParseJSON<'"hello"'>
			expectTypeOf<Actual>().toEqualTypeOf<'hello'>()
		})

		it('should parse number', () => {
			type Actual = ParseJSON<'123'>
			expectTypeOf<Actual>().toEqualTypeOf<123>()
		})

		it('should parse boolean', () => {
			type Actual = ParseJSON<'true'>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should parse null', () => {
			type Actual = ParseJSON<'null'>
			expectTypeOf<Actual>().toEqualTypeOf<null>()
		})
	})

	describe('StringifyJSON', () => {
		it('should stringify string', () => {
			type Actual = StringifyJSON<'hello'>
			expectTypeOf<Actual>().toEqualTypeOf<'"hello"'>()
		})

		it('should stringify number', () => {
			type Actual = StringifyJSON<123>
			expectTypeOf<Actual>().toEqualTypeOf<'123'>()
		})
	})

	describe('ParseURL', () => {
		it('should parse URL', () => {
			type Actual = ParseURL<'https://example.com/path?q=1'>
			expectTypeOf<Actual>().toEqualTypeOf<{
				protocol: 'https'
				host: 'example.com'
				pathname: '/path'
				search: '?q=1'
				hash: ''
			}>()
		})
	})

	describe('QueryParams', () => {
		it('should parse query params', () => {
			type Actual = QueryParams<'?a=1&b=2'>
			expectTypeOf<Actual>().toEqualTypeOf<{ a: '1'; b: '2' }>()
		})
	})

	describe('PathParams', () => {
		it('should extract path params', () => {
			type Actual = PathParams<'/users/:id', '/users/123'>
			expectTypeOf<Actual>().toEqualTypeOf<{ id: '123' }>()
		})
	})
})

describe('v1.4.0 - StateMachine Types', () => {
	describe('CurrentState', () => {
		it('should get current state', () => {
			type SM = { current: 'red'; states: { red: {}; green: {} }; transitions: {} }
			type Actual = CurrentState<SM>
			expectTypeOf<Actual>().toEqualTypeOf<'red'>()
		})
	})

	describe('CanTransition', () => {
		it('should return true for valid transition', () => {
			type SM = {
				current: 'red'
				transitions: { next: { red: 'green'; green: 'yellow' } }
			}
			type Actual = CanTransition<SM, 'next'>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('IsTerminal', () => {
		it('should return true for terminal state', () => {
			type SM = { current: 'done'; transitions: {} }
			type Actual = IsTerminal<SM>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})
})

describe('v1.4.0 - DataStructure Types', () => {
	describe('ListHead', () => {
		it('should get head of list', () => {
			type Actual = ListHead<{ value: 1; next?: { value: 2 } }>
			expectTypeOf<Actual>().toEqualTypeOf<1>()
		})
	})

	describe('Push', () => {
		it('should push to stack', () => {
			type Actual = Push<[1, 2], 3>
			expectTypeOf<Actual>().toEqualTypeOf<[1, 2, 3]>()
		})
	})

	describe('Pop', () => {
		it('should pop from stack', () => {
			type Actual = Pop<[1, 2, 3]>
			expectTypeOf<Actual>().toEqualTypeOf<{ stack: [1, 2]; value: 3 }>()
		})
	})

	describe('Peek', () => {
		it('should peek at stack', () => {
			type Actual = Peek<[1, 2, 3]>
			expectTypeOf<Actual>().toEqualTypeOf<3>()
		})
	})

	describe('Enqueue', () => {
		it('should enqueue to queue', () => {
			type Actual = Enqueue<[1, 2], 3>
			expectTypeOf<Actual>().toEqualTypeOf<[1, 2, 3]>()
		})
	})

	describe('Dequeue', () => {
		it('should dequeue from queue', () => {
			type Actual = Dequeue<[1, 2, 3]>
			expectTypeOf<Actual>().toEqualTypeOf<{ queue: [2, 3]; value: 1 }>()
		})
	})

	describe('Front', () => {
		it('should get front of queue', () => {
			type Actual = Front<[1, 2, 3]>
			expectTypeOf<Actual>().toEqualTypeOf<1>()
		})
	})
})

describe('v1.4.0 - HTTP Types', () => {
	describe('HTTPMethod', () => {
		it('should include GET', () => {
			type Actual = HTTPMethod
			expectTypeOf<'GET'>().toMatchTypeOf<Actual>()
		})

		it('should include POST', () => {
			type Actual = HTTPMethod
			expectTypeOf<'POST'>().toMatchTypeOf<Actual>()
		})
	})

	describe('HTTPStatus', () => {
		it('should include 200', () => {
			type Actual = HTTPStatus
			expectTypeOf<200>().toMatchTypeOf<Actual>()
		})

		it('should include 404', () => {
			type Actual = HTTPStatus
			expectTypeOf<404>().toMatchTypeOf<Actual>()
		})
	})

	describe('RouteParams', () => {
		it('should extract route params', () => {
			type Actual = RouteParams<'/users/:id/posts/:postId'>
			expectTypeOf<Actual>().toEqualTypeOf<{ id: string; postId: string }>()
		})
	})
})

describe('v1.4.0 - Database Types', () => {
	describe('SQLType', () => {
		it('should map string to VARCHAR', () => {
			type Actual = SQLType<string>
			expectTypeOf<Actual>().toEqualTypeOf<'VARCHAR'>()
		})

		it('should map number to INTEGER', () => {
			type Actual = SQLType<number>
			expectTypeOf<Actual>().toEqualTypeOf<'INTEGER'>()
		})

		it('should map boolean to BOOLEAN', () => {
			type Actual = SQLType<boolean>
			expectTypeOf<Actual>().toEqualTypeOf<'BOOLEAN'>()
		})
	})
})

describe('v1.4.0 - Concurrency Types', () => {
	describe('TaskStatus', () => {
		it('should include pending', () => {
			type Actual = TaskStatus
			expectTypeOf<'pending'>().toMatchTypeOf<Actual>()
		})

		it('should include completed', () => {
			type Actual = TaskStatus
			expectTypeOf<'completed'>().toMatchTypeOf<Actual>()
		})
	})

	describe('Task', () => {
		it('should create task type', () => {
			type Actual = Task<string>
			expectTypeOf<Actual>().toHaveProperty('id')
			expectTypeOf<Actual>().toHaveProperty('status')
		})
	})
})

describe('v1.4.0 - Interop Types', () => {
	describe('IsCompatible', () => {
		it('should return true when compatible', () => {
			type Actual = IsCompatible<{ a: string }, { a: string; b?: number }>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('ConvertTo', () => {
		it('should convert to type-fest format', () => {
			type Actual = ConvertTo<{ a: string }, 'type-fest'>
			expectTypeOf<Actual>().toEqualTypeOf<{ a: string }>()
		})
	})
})

describe('v1.4.0 - Testing Types', () => {
	describe('ExpectTrue', () => {
		it('should accept true', () => {
			type Actual = ExpectTrue<true>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})
	})

	describe('ExpectFalse', () => {
		it('should accept false', () => {
			type Actual = ExpectFalse<false>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('ExpectEqual', () => {
		it('should return true for equal types', () => {
			type Actual = ExpectEqual<string, string>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false for different types', () => {
			type Actual = ExpectEqual<string, number>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('ExpectExtends', () => {
		it('should return true when extends', () => {
			type Actual = ExpectExtends<string, string | number>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false when not extends', () => {
			type Actual = ExpectExtends<string, number>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})

	describe('TypeCategory', () => {
		it('should return string for string type', () => {
			type Actual = TypeCategory<string>
			expectTypeOf<Actual>().toEqualTypeOf<'string'>()
		})

		it('should return number for number type', () => {
			type Actual = TypeCategory<number>
			expectTypeOf<Actual>().toEqualTypeOf<'number'>()
		})

		it('should return array for array type', () => {
			type Actual = TypeCategory<string[]>
			expectTypeOf<Actual>().toEqualTypeOf<'array'>()
		})
	})

	describe('IsUnion', () => {
		it('should return true for union type', () => {
			type Actual = IsUnion<string | number>
			expectTypeOf<Actual>().toEqualTypeOf<true>()
		})

		it('should return false for non-union type', () => {
			type Actual = IsUnion<string>
			expectTypeOf<Actual>().toEqualTypeOf<false>()
		})
	})
})
