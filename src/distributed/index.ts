/**
 * Distributed Systems Types
 *
 * Types for distributed computing and coordination.
 */

// ============================================================================
// Consensus Types
// ============================================================================

/**
 * Consensus state
 */
export type ConsensusState = 'leader' | 'follower' | 'candidate' | 'observer'

/**
 * Consensus type
 */
export interface Consensus<T = unknown> {
	state: ConsensusState
	term: number
	leader: string | null
	nodes: NodeInfo[]
	log: LogEntry<T>[]
	commitIndex: number
	appliedIndex: number
}

/**
 * Leader election type
 */
export interface LeaderElection {
	candidateId: string
	term: number
	lastLogIndex: number
	lastLogTerm: number
	votes: Set<string>
	voteThreshold: number
	timeout: number
}

/**
 * Vote type
 */
export interface Vote<T = string> {
	term: number
	candidateId: T
	granted: boolean
	timestamp: number
}

/**
 * Log entry type
 */
export interface LogEntry<T = unknown> {
	term: number
	index: number
	command: T
	timestamp: number
}

/**
 * Node info type
 */
export interface NodeInfo {
	id: string
	address: string
	port: number
	role: ConsensusState
	lastContact: number
	matchIndex: number
	nextIndex: number
}

// ============================================================================
// Raft Types
// ============================================================================

/**
 * Raft configuration
 */
export interface RaftConfig {
	electionTimeoutMin: number
	electionTimeoutMax: number
	heartbeatInterval: number
	maxEntriesPerRequest: number
	logCompactionThreshold: number
	snapshotThreshold: number
}

/**
 * Append entries request
 */
export interface AppendEntriesRequest<T = unknown> {
	term: number
	leaderId: string
	prevLogIndex: number
	prevLogTerm: number
	entries: LogEntry<T>[]
	leaderCommit: number
}

/**
 * Append entries response
 */
export interface AppendEntriesResponse {
	term: number
	success: boolean
	matchIndex: number
	retry: boolean
}

/**
 * Vote request
 */
export interface VoteRequest {
	term: number
	candidateId: string
	lastLogIndex: number
	lastLogTerm: number
}

/**
 * Vote response
 */
export interface VoteResponse {
	term: number
	voteGranted: boolean
}

// ============================================================================
// Replication Types
// ============================================================================

/**
 * Replication strategy
 */
export type ReplicationStrategy = 'sync' | 'async' | 'semi-sync' | 'quorum'

/**
 * Replication type
 */
export interface Replication<T = unknown> {
	strategy: ReplicationStrategy
	primary: string
	replicas: Replica<T>[]
	status: ReplicaStatus
	lag: number
	ackTimeout: number
}

/**
 * Replica type
 */
export interface Replica<T = unknown> {
	id: string
	endpoint: string
	status: ReplicaStatus
	lag: number
	lastSync: Date
	data?: T
}

/**
 * Replica status
 */
export type ReplicaStatus = 'syncing' | 'ready' | 'recovering' | 'failed' | 'offline'

/**
 * Replica set type
 */
export interface ReplicaSet<T = unknown> {
	name: string
	members: Replica<T>[]
	primary: string
	config: ReplicaSetConfig
}

/**
 * Replica set configuration
 */
export interface ReplicaSetConfig {
	writeConcern: number
	readConcern: 'local' | 'majority' | 'linearizable'
	chainingAllowed: boolean
	heartbeatInterval: number
	electionTimeout: number
}

/**
 * Write concern
 */
export type WriteConcern = number | 'majority' | 'all'

/**
 * Read concern level
 */
export type ReadConcernLevel = 'local' | 'available' | 'majority' | 'linearizable' | 'snapshot'

// ============================================================================
// Partition Types
// ============================================================================

/**
 * Partition strategy
 */
export type PartitionStrategy = 'hash' | 'range' | 'list' | 'composite'

/**
 * Partition type
 */
export interface Partition<T = unknown> {
	id: string
	range?: [T, T]
	hash?: number
	nodes: string[]
	config: PartitionConfig
}

/**
 * Partition configuration
 */
export interface PartitionConfig {
	strategy: PartitionStrategy
	keyField: string
	replicationFactor: number
	rebalanceThreshold?: number
}

/**
 * Partition key type
 */
export interface PartitionKey<T = unknown> {
	field: string
	value: T
	hash?: number
	partition?: string
}

/**
 * Sharding configuration
 */
export interface Sharding<T = unknown> {
	enabled: boolean
	strategy: PartitionStrategy
	shards: Partition<T>[]
	keyGenerator?: (data: unknown) => string
	balancer: 'automatic' | 'manual' | 'consistent_hash'
}

/**
 * Shard map type
 */
export interface ShardMap {
	version: number
	shards: Record<string, string[]>
	ranges: Array<{ min: string, max: string, shard: string }>
}

// ============================================================================
// Consistency Types
// ============================================================================

/**
 * Consistency level
 */
export type ConsistencyLevel = 'strong' | 'eventual' | 'causal' | 'linearizable' | 'sequential' | 'serializable'

/**
 * Consistency model
 */
export interface ConsistencyModel<T = unknown> {
	level: ConsistencyLevel
	config: ConsistencyConfig
	check: (state: T) => boolean
}

/**
 * Consistency configuration
 */
export interface ConsistencyConfig {
	readRepair: boolean
	writeRepair: boolean
	readQuorum: number
	writeQuorum: number
	timeout: number
}

/**
 * Vector clock type
 */
export interface VectorClock {
	nodeId: string
	counters: Map<string, number>
	increment: () => void
	merge: (other: VectorClock) => VectorClock
	compare: (other: VectorClock) => 'before' | 'after' | 'concurrent' | 'equal'
}

/**
 * Lamport clock type
 */
export interface LamportClock {
	nodeId: string
	counter: number
	tick: () => number
	send: () => number
	receive: (otherTime: number) => number
}

// ============================================================================
// Distributed Lock Types
// ============================================================================

/**
 * Distributed lock type
 */
export interface DistributedLock<T = string> {
	lock: (resource: T, options?: LockOptions) => Promise<LockResult>
	unlock: (resource: T) => Promise<void>
	renew: (resource: T) => Promise<boolean>
	isLocked: (resource: T) => Promise<boolean>
}

/**
 * Lock options
 */
export interface LockOptions {
	timeout?: number
	retryInterval?: number
	maxRetries?: number
	owner?: string
	metadata?: Record<string, unknown>
}

/**
 * Lock result type
 */
export type LockResult = { acquired: true, leaseId: string } | { acquired: false, reason: 'timeout' | 'conflict' | 'error', holder?: string }

/**
 * Lock acquire result
 */
export type LockAcquireResult = 'acquired' | 'timeout' | 'conflict' | 'error'

/**
 * Lease type
 */
export interface Lease<T = string> {
	id: string
	resource: T
	holder: string
	acquiredAt: Date
	expiresAt: Date
	ttl: number
	metadata?: Record<string, unknown>
}

/**
 * Lock entry type
 */
export interface LockEntry {
	key: string
	holder: string
	acquiredAt: number
	expiresAt: number
	version: number
}

// ============================================================================
// Coordination Types
// ============================================================================

/**
 * Coordinator type
 */
export interface Coordinator<T = unknown> {
	prepare: (transaction: T) => Promise<PrepareResult>
	commit: (transaction: T) => Promise<CommitResult>
	abort: (transaction: T) => Promise<void>
	status: (transactionId: string) => Promise<TransactionState>
}

/**
 * Participant type
 */
export interface Participant<T = unknown> {
	id: string
	endpoint: string
	status: ParticipantStatus
	prepare: (transaction: T) => Promise<boolean>
	commit: (transaction: T) => Promise<void>
	rollback: (transaction: T) => Promise<void>
}

/**
 * Participant status
 */
export type ParticipantStatus = 'ready' | 'prepared' | 'committed' | 'aborted' | 'failed'

/**
 * Two-phase commit type
 */
export interface TwoPhaseCommit<T = unknown> {
	transactionId: string
	coordinator: string
	participants: Participant<T>[]
	state: TransactionState
	timeout: number
	prepared: Set<string>
	committed: Set<string>
	log: TransactionLog[]
}

/**
 * Transaction state
 */
export type TransactionState = 'initial' | 'preparing' | 'prepared' | 'committing' | 'committed' | 'aborting' | 'aborted'

/**
 * Prepare result
 */
export type PrepareResult = { prepared: true } | { prepared: false, reason: string, participant?: string }

/**
 * Commit result
 */
export type CommitResult = { committed: true } | { committed: false, reason: string }

/**
 * Transaction status
 */
export type TransactionStatusTransaction = 'pending' | 'preparing' | 'prepared' | 'committing' | 'committed' | 'aborting' | 'aborted' | 'timeout'

/**
 * Transaction log type
 */
export interface TransactionLog {
	timestamp: number
	action: TransactionAction
	participant?: string
	success: boolean
}

/**
 * Transaction action
 */
export type TransactionAction = 'prepare' | 'commit' | 'abort' | 'voting' | 'complete'

/**
 * Transaction coordinator
 */
export interface TransactionCoordinator<T = unknown> {
	begin: () => string
	addParticipant: (id: string, participant: Participant<T>) => void
	commit: (transactionId: string) => Promise<CommitResult>
	abort: (transactionId: string) => Promise<void>
	recover: () => Promise<Record<string, TransactionState>>
}

// ============================================================================
// Failure Detection Types
// ============================================================================

/**
 * Failure detector type
 */
export interface FailureDetector<T = string> {
	nodes: Map<T, NodeStatusType>
	suspect: (nodeId: T) => void
	restore: (nodeId: T) => void
	isSuspected: (nodeId: T) => boolean
	getFailed: () => T[]
	getLive: () => T[]
}

/**
 * Node status
 */
export type NodeStatusType = 'alive' | 'suspected' | 'dead' | 'unknown'

/**
 * Heartbeat type
 */
export interface Heartbeat<T = string> {
	nodeId: T
	timestamp: number
	sequence: number
	status: NodeStatusType
	custom?: Record<string, unknown>
}

/**
 * Heartbeat config
 */
export interface HeartbeatConfig {
	interval: number
	timeout: number
	maxMissed: number
	recoverThreshold: number
}

/**
 * Phi accrual failure detector config
 */
export interface PhiAccrualConfig {
	threshold: number
	minStdDeviation: number
	acceptableHeartbeatPause: number
	firstHeartbeatEstimate: number
}

// ============================================================================
// Membership Types
// ============================================================================

/**
 * Membership type
 */
export interface Membership<T = string> {
	members: Map<T, MembershipEntry>
	join: (nodeId: T) => void
	leave: (nodeId: T) => void
	getMembers: () => T[]
	getState: () => MembershipState
}

/**
 * Membership entry type
 */
export interface MembershipEntry {
	nodeId: string
	status: MembershipStatus
	incarnation: number
	customStatus?: string
	metadata?: Record<string, unknown>
}

/**
 * Membership status
 */
export type MembershipStatus = 'alive' | 'suspect' | 'dead' | 'left'

/**
 * Membership state
 */
export interface MembershipState<T = string> {
	version: number
	members: Map<T, MembershipEntry>
	updates: MembershipUpdate[]
}

/**
 * Membership update
 */
export interface MembershipUpdate<T = string> {
	nodeId: T
	status: MembershipStatus
	incarnation: number
	timestamp: number
	source?: string
}

// ============================================================================
// Gossip Types
// ============================================================================

/**
 * Gossip config
 */
export interface GossipConfig {
	protocolPeriod: number
	fanout: number
	retransmitMultiplier: number
	suspicionTimeout: number
}

/**
 * Gossip message
 */
export interface GossipMessage<T = unknown> {
	origin: string
	sequence: number
	data: T
	ttl: number
	hops: number
}

/**
 * Gossip node state
 */
export interface GossipNodeState<T = string> {
	nodeId: T
	incarnation: number
	values: Map<string, unknown>
}
