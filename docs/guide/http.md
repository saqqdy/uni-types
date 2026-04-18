# HTTP & API Types

**Since 1.4.0**

Type-level HTTP and API utilities.

## HTTP Types

### HTTPMethod

HTTP methods.

```typescript
import type { HTTPMethod } from 'uni-types'

type Method = HTTPMethod  // 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE'
```

### HTTPStatus

HTTP status codes.

```typescript
import type { HTTPStatus } from 'uni-types'

type Status = HTTPStatus  // 200 | 201 | 400 | 404 | 500 | ...
```

### HTTPStatusCategory

Get status code category.

```typescript
import type { HTTPStatusCategory } from 'uni-types'

type Cat1 = HTTPStatusCategory<200>  // 'success'
type Cat2 = HTTPStatusCategory<404>  // 'client_error'
type Cat3 = HTTPStatusCategory<500>  // 'server_error'
```

### HTTPHeaders

HTTP headers type.

```typescript
import type { HTTPHeaders } from 'uni-types'

type Headers = HTTPHeaders<{ 'X-Custom': 'value' }>
```

### ContentType

Content-Type values.

```typescript
import type { ContentType } from 'uni-types'

type Json = ContentType  // 'application/json' | 'text/html' | ...
```

## Route Types

### Route

Define a route.

```typescript
import type { Route } from 'uni-types'

type UserRoute = Route<'/users/:id', 'GET', User>
```

### RouteParams

Extract path params from route path.

```typescript
import type { RouteParams } from 'uni-types'

type Params = RouteParams<'/users/:id/posts/:postId'>  // { id: string; postId: string }
```

### RouteQuery

Query params type.

```typescript
import type { RouteQuery } from 'uni-types'

type Query = RouteQuery<{ page: number; limit: number }>  // { page?: string; limit?: string }
```

### Router

Router type.

```typescript
import type { Router } from 'uni-types'

type MyRouter = Router<{
  '/users': { GET: { response: User[] }; POST: { response: User, request: CreateUser } }
  '/users/:id': { GET: { response: User }; DELETE: { response: void } }
}>
```

## API Types

### APIEndpoint

API endpoint type.

```typescript
import type { APIEndpoint } from 'uni-types'

type Endpoint = APIEndpoint<{
  method: 'GET'
  path: '/users'
  response: User[]
}>
```

### APIRequest / APIResponse / APIError

Request and response types.

```typescript
import type { APIRequest, APIResponse, APIError } from 'uni-types'

type Req = APIRequest<{ body: CreateUserInput }>
type Res = APIResponse<{ data: User; status: 200 }>
type Err = APIError<{ message: string; code: 'NOT_FOUND' }>
```

## Middleware Types

### Middleware

Middleware function type.

```typescript
import type { Middleware, Context } from 'uni-types'

type AuthMiddleware = Middleware<{ user: User }>
```

### MiddlewareChain / ComposeMiddleware

Middleware composition.

```typescript
import type { MiddlewareChain, ComposeMiddleware } from 'uni-types'

type Chain = MiddlewareChain<[AuthMiddleware, LoggingMiddleware]>
type Composed = ComposeMiddleware<[AuthMiddleware]>
```

## REST Helpers

### RESTCollection

REST collection endpoints.

```typescript
import type { RESTCollection } from 'uni-types'

type UserEndpoints = RESTCollection<User, CreateUserInput, UpdateUserInput>
```

### CRUDOperation

CRUD operation types.

```typescript
import type { CRUDOperation } from 'uni-types'

type Op = CRUDOperation  // 'create' | 'read' | 'update' | 'delete'
```

## Related

- [Parsers](./parsers) - JSON, URL, CSV parsers
- [Database](./database) - Database types