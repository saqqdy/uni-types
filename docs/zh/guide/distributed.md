# 分布式系统

**始于 1.6.0**

用于分布式计算的类型。

## 概述

分布式系统提供了用于构建分布式应用程序的类型，包括共识算法、复制策略、分区方案和协调协议。它支持 Raft、Gossip、2PC 和分布式锁定模式。

此模块支持构建具有一致性、容错和协调正确类型约束的类型安全分布式系统。

## 基本用法

```typescript
import type { Consensus, Replica, Partition, DistributedLock, TwoPhaseCommit } from 'uni-types'

// 共识配置
type RaftConsensus = Consensus<{
  state: ConsensusState
  leader: string
  term: number
}>

// 副本集
type DataReplica = Replica<{
  id: string
  status: ReplicaStatus
  data: unknown
}>

// 分布式锁
type Lock = DistributedLock<{
  resource: string
  holder: string
  ttl: number
}>
```

## 核心类型

### ConsensusState

共识节点状态。

```typescript
type ConsensusState = 'leader' | 'follower' | 'candidate' | 'observer'
```

### Consensus

共识协议配置。

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

用于数据复制的副本类型。

```typescript
type Replica<T = unknown> = {
  id: string
  status: ReplicaStatus
  data: T
  lastSync: Date
}
```

### ReplicationStrategy

复制策略类型。

```typescript
type ReplicationStrategy = 'sync' | 'async' | 'semi-sync' | 'chain' | 'tree'
```

### Partition

用于数据分区的分区类型。

```typescript
type Partition<T = unknown> = {
  id: string
  key: PartitionKey<T>
  range: [number, number]
  nodes: string[]
}
```

### PartitionStrategy

分区策略类型。

```typescript
type PartitionStrategy = 'hash' | 'range' | 'list' | 'composite' | 'consistent-hash'
```

### ConsistencyLevel

一致性级别类型。

```typescript
type ConsistencyLevel = 'strong' | 'eventual' | 'causal' | 'linearizable' | 'quorum' | 'one' | 'all'
```

### DistributedLock

分布式锁类型。

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

锁获取结果。

```typescript
type LockAcquireResult = 'acquired' | 'timeout' | 'conflict' | 'error'
```

### TwoPhaseCommit

两阶段提交协议类型。

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

事务状态类型。

```typescript
type TransactionState = 'init' | 'prepared' | 'committed' | 'aborted' | 'timeout'
```

### NodeStatusType

节点状态类型。

```typescript
type NodeStatusType = 'alive' | 'suspected' | 'dead' | 'joining' | 'leaving'
```

## 相关

- [微服务](./microservice) - 微服务类型
- [工作流](./workflow) - 工作流编排