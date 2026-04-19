# Microservices Architecture

**Since 1.5.0**

Types for microservices patterns and inter-service communication.

## Overview

Microservices Architecture provides types for building distributed systems with service discovery, circuit breakers, load balancing, and API gateways. It supports the key patterns needed for resilient, scalable microservice deployments.

This module includes types for service registration and discovery, health checking, circuit breaker patterns, and API gateway configuration. It enables type-safe communication between services with proper error handling and retry logic.

## Basic Usage

```typescript
import type { Microservice, ServiceRegistry, CircuitBreaker, LoadBalancer } from 'uni-types'

// Define a microservice
type UserService = Microservice<UserConfig>

// Service registry for discovery
type Registry = ServiceRegistry<ServiceInstance>

// Circuit breaker for resilience
type UserCircuitBreaker = CircuitBreaker<User>
```

## Key Types

### Microservice

Microservice definition with lifecycle methods.

```typescript
type Microservice<T = unknown> = {
  name: string
  version: string
  config: ServiceConfig<T>
  start: () => Promise<void>
  stop: () => Promise<void>
  health: () => Promise<HealthReport>
}
```

### ServiceRegistry

Service registry for registration and discovery.

```typescript
type ServiceRegistry<S = unknown> = {
  register: (service: S) => Promise<void>
  deregister: (serviceName: string) => Promise<void>
  getService: (serviceName: string) => Promise<ServiceInstance | undefined>
  getAllServices: () => Promise<ServiceInstance[]>
  heartbeat: (serviceName: string, instanceId: string) => Promise<void>
}
```

### CircuitBreaker

Circuit breaker for fault tolerance.

```typescript
type CircuitBreaker<T = unknown> = {
  execute: (fn: () => Promise<T>) => Promise<T>
  getState: () => CircuitBreakerState
  getStats: () => CircuitBreakerStats
  reset: () => void
  open: () => void
  close: () => void
}
```

### LoadBalancer

Load balancer for distributing requests.

```typescript
type LoadBalancer = {
  select: (instances: ServiceInstance[]) => ServiceInstance | undefined
  getStrategy: () => LoadBalancerStrategy
  setStrategy: (strategy: LoadBalancerStrategy) => void
}
```

### APIGateway

API Gateway for routing and middleware.

```typescript
type APIGateway = {
  routes: GatewayRoute[]
  start: () => Promise<void>
  stop: () => Promise<void>
  addRoute: (route: GatewayRoute) => void
  removeRoute: (path: string) => void
}
```

## Related

- [API Reference](/api/microservice/)
- [Event-Driven](./event) - Event architecture
