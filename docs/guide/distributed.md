# Distributed Systems

**Since 1.6.0**

Types for distributed computing.

## Overview

Distributed Systems provides types for building distributed applications including consensus algorithms, replication strategies, partitioning schemes, and coordination protocols. It supports Raft, Gossip, 2PC, and distributed locking patterns.

This module enables building type-safe distributed systems with proper constraints for consistency, fault tolerance, and coordination.

## Basic Usage

```typescript
import type { Consensus, Replica, Partition, DistributedLock, TwoPhaseCommit } from 'uni-types'

// Consensus configuration
type RaftConsensus = Consensus<{
  state: ConsensusState
  leader: string
  term: number
}>

// Replica set
type DataReplica = Replica<{
  id: string
  status: ReplicaStatus
  data: unknown
}>

// Distributed lock
type Lock = DistributedLock<{
  resource: string
  holder: string
  ttl: number
}>
```

## Key Types

### ConsensusState

Consensus node states.

```typescript
type ConsensusState = 'leader' | 'follower' | 'candidate' | 'observer'
```

### Consensus

Consensus protocol configuration.

```typescript
type Consensus<T = unknown> = {
  nodes: string[]
  state: ConsensusState
  leader?: string
  term: number
  config: T
}
```

### Replica

Replica type for data replication.

```typescript
type Replica<T = unknown> = {
  id: string
  status: ReplicaStatus
  data: T
  lastSync: Date
}
```

### ReplicationStrategy

Replication strategy types.

```typescript
type ReplicationStrategy = 'sync' | 'async' | 'semi-sync' | 'chain' | 'tree'
```

### Partition

Partition type for data partitioning.

```typescript
type Partition<T = unknown> = {
  id: string
  key: PartitionKey<T>
  range: [number, number]
  nodes: string[]
}
```

### PartitionStrategy

Partitioning strategy types.

```typescript
type PartitionStrategy = 'hash' | 'range' | 'list' | 'composite' | 'consistent-hash'
```

### ConsistencyLevel

Consistency level types.

```typescript
type ConsistencyLevel = 'strong' | 'eventual' | 'causal' | 'linearizable' | 'quorum' | 'one' | 'all'
```

### DistributedLock

Distributed lock type.

```typescript
type DistributedLock<T = unknown> = {
  resource: string
  holder?: string
  ttl: number
  acquired: boolean
  lock: () => LockAcquireResult
  unlock: () => void
}
```

### LockAcquireResult

Lock acquisition result.

```typescript
type LockAcquireResult = 'acquired' | 'timeout' | 'conflict' | 'error'
```

### TwoPhaseCommit

Two-phase commit protocol type.

```typescript
type TwoPhaseCommit<T = unknown> = {
  coordinator: string
  participants: string[]
  transaction: T
  state: TransactionState
  prepare: () => boolean
  commit: () => void
  rollback: () => void
}
```

### TransactionState

Transaction state types.

```typescript
type TransactionState = 'init' | 'prepared' | 'committed' | 'aborted' | 'timeout'
```

### NodeStatusType

Node status types.

```typescript
type NodeStatusType = 'alive' | 'suspected' | 'dead' | 'joining' | 'leaving'
```

## Related

- [Microservice](./microservice) - Microservice types
- [Workflow](./workflow) - Workflow orchestration