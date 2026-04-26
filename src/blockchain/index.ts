/**
 * Type-Level Blockchain
 *
 * Type-level blockchain and smart contract utilities.
 */

// ============================================================================
// Block Types
// ============================================================================

/**
 * Block hash type
 */
export type BlockHash = `0x${string}`

/**
 * Block header type
 */
export interface BlockHeader {
	number: number
	hash: BlockHash
	parentHash: BlockHash
	nonce: string
	timestamp: number
	gasUsed: bigint
	gasLimit: bigint
	difficulty: bigint
	totalDifficulty?: bigint
	transactionsRoot: string
	stateRoot: string
	receiptsRoot: string
	miner: Address
	extraData: string
	baseFeePerGas?: bigint
	blobGasUsed?: bigint
	excessBlobGas?: bigint
}

/**
 * Block body type
 */
export interface BlockBody {
	transactions: Transaction[]
	uncles: BlockHash[]
	withdrawals?: Withdrawal[]
}

/**
 * Block type
 */
export interface Block {
	header: BlockHeader
	body: BlockBody
	uncles?: Block[]
	size?: number
}

/**
 * Withdrawal type (EIP-4895)
 */
export interface Withdrawal {
	index: number
	validatorIndex: number
	address: Address
	amount: bigint
}

// ============================================================================
// Transaction Types
// ============================================================================

/**
 * Transaction hash type
 */
export type TransactionHash = `0x${string}`

/**
 * Transaction type enum
 */
export type TransactionType
	= | 0 // Legacy
	| 1 // EIP-2930
	| 2 // EIP-1559
	| 3 // EIP-4844

/**
 * Base transaction interface
 */
export interface BaseTransaction {
	hash: TransactionHash
	type: TransactionType
	blockHash?: BlockHash
	blockNumber?: number
	transactionIndex?: number
	from: Address
	to?: Address
	value: bigint
	data: string
	nonce: number
	gas: bigint
	chainId: number
}

/**
 * Legacy transaction (type 0)
 */
export interface LegacyTransaction extends BaseTransaction {
	type: 0
	gasPrice: bigint
}

/**
 * EIP-2930 transaction (type 1)
 */
export interface EIP2930Transaction extends BaseTransaction {
	type: 1
	gasPrice: bigint
	accessList: AccessList
}

/**
 * EIP-1559 transaction (type 2)
 */
export interface EIP1559Transaction extends BaseTransaction {
	type: 2
	maxFeePerGas: bigint
	maxPriorityFeePerGas: bigint
	accessList?: AccessList
}

/**
 * EIP-4844 blob transaction (type 3)
 */
export interface EIP4844Transaction extends BaseTransaction {
	type: 3
	maxFeePerGas: bigint
	maxPriorityFeePerGas: bigint
	maxFeePerBlobGas: bigint
	blobVersionedHashes: string[]
	accessList?: AccessList
}

/**
 * All transaction types
 */
export type Transaction
	= | LegacyTransaction
	| EIP2930Transaction
	| EIP1559Transaction
	| EIP4844Transaction

/**
 * Transaction input type
 */
export type TransactionInput
	= | string
	| Record<string, unknown>

/**
 * Transaction output type
 */
export type TransactionOutput = unknown

/**
 * Transaction signature
 */
export interface TransactionSignature {
	r: bigint
	s: bigint
	v: number
	yParity?: 0 | 1
}

/**
 * Access list for EIP-2930
 */
export type AccessList = AccessListEntry[]

/**
 * Access list entry
 */
export interface AccessListEntry {
	address: Address
	storageKeys: string[]
}

/**
 * Transaction receipt
 */
export interface TransactionReceipt {
	transactionHash: TransactionHash
	transactionIndex: number
	blockHash: BlockHash
	blockNumber: number
	from: Address
	to: Address | null
	cumulativeGasUsed: bigint
	gasUsed: bigint
	effectiveGasPrice?: bigint
	contractAddress?: Address
	logs: Log[]
	logsBloom: string
	status: 0 | 1
	type: TransactionType
}

// ============================================================================
// Smart Contract Types
// ============================================================================

/**
 * Smart contract type
 */
export interface SmartContract<A extends ContractABI = ContractABI> {
	address: Address
	abi: A
	bytecode?: string
	deployedBytecode?: string
}

/**
 * Contract ABI type
 */
export type ContractABI = ABIFunction[] | ABIFunction

/**
 * ABI function element
 */
export interface ABIFunction {
	name: string
	type: 'function' | 'constructor' | 'receive' | 'fallback'
	inputs: ABIParameter[]
	outputs?: ABIParameter[]
	stateMutability: 'pure' | 'view' | 'nonpayable' | 'payable'
}

/**
 * ABI event element
 */
export interface ABIEvent {
	name: string
	type: 'event'
	inputs: ABIParameter[]
	anonymous?: boolean
}

/**
 * ABI error element
 */
export interface ABIError {
	name: string
	type: 'error'
	inputs: ABIParameter[]
}

/**
 * ABI parameter
 */
export interface ABIParameter {
	name: string
	type: ABIType
	components?: ABIParameter[]
	indexed?: boolean
}

/**
 * ABI type
 */
export type ABIType
	= | 'uint' | 'int' | 'address' | 'bool' | 'fixed' | 'ufixed'
	| 'bytes' | 'string'
	| `${'uint' | 'int'}${number}`
	| `${'bytes'}${number}`
	| `${'fixed' | 'ufixed'}${number}x${number}`
	| string // Allow array and tuple forms like 'uint[]', 'uint[10]', 'tuple(...)'

/**
 * Contract method type
 */
export interface ContractMethod<
	Inputs extends unknown[] = unknown[],
	Output = unknown,
> {
	inputs: ABIParameter[]
	outputs: ABIParameter[]
	encode: (...args: Inputs) => string
	decode: (data: string) => Output
}

/**
 * Contract event type
 */
export interface ContractEvent<
	Name extends string = string,
	Inputs = unknown,
> {
	name: Name
	inputs: ABIParameter[]
	encodeTopics: (params: Inputs) => (string | null)[]
	decodeData: (data: string) => Inputs
}

// ============================================================================
// Address Types
// ============================================================================

/**
 * Ethereum address type
 */
export type Address = `0x${string}`

/**
 * Address with checksum validation
 */
export type ChecksumAddress = Address

/**
 * Public key type
 */
export type PublicKey = `0x${string}`

/**
 * Private key type
 */
export type PrivateKey = `0x${string}`

/**
 * Signature type
 */
export type Signature = `0x${string}`

/**
 * Check if address is valid
 */
export type IsValidAddress<T extends string> = T extends Address ? true : false

// ============================================================================
// Token Types
// ============================================================================

/**
 * ERC-20 token info
 */
export interface TokenInfo {
	address: Address
	name: string
	symbol: string
	decimals: number
	totalSupply: bigint
}

/**
 * Fungible token balance
 */
export interface FungibleTokenBalance {
	token: Address
	owner: Address
	balance: bigint
}

/**
 * ERC-20 token allowance
 */
export interface TokenAllowance {
	token: Address
	owner: Address
	spender: Address
	amount: bigint
}

/**
 * ERC-721 NFT
 */
export interface NonFungibleToken {
	contract: Address
	tokenId: bigint
	owner: Address
	tokenURI?: string
	name?: string
	description?: string
	image?: string
	attributes?: Record<string, unknown>[]
}

/**
 * ERC-1155 multi-token
 */
export interface MultiToken {
	contract: Address
	id: bigint
	amount: bigint
	owner: Address
	uri?: string
}

/**
 * Token balance type
 */
export type TokenBalance = bigint

// ============================================================================
// Wallet Types
// ============================================================================

/**
 * Wallet account
 */
export interface WalletAccount {
	address: Address
	publicKey?: PublicKey
	chainId: number
}

/**
 * Wallet connection status
 */
export type WalletConnectionStatus
	= | 'disconnected'
	| 'connecting'
	| 'connected'
	| 'error'

/**
 * Wallet connection
 */
export interface WalletConnection {
	account: WalletAccount | null
	status: WalletConnectionStatus
	chainId: number | null
	peerMeta?: WalletMetadata
}

/**
 * Wallet metadata
 */
export interface WalletMetadata {
	name: string
	icon?: string
	description?: string
	url?: string
}

/**
 * Wallet provider
 */
export interface WalletProvider {
	isConnected: () => boolean
	connect: () => Promise<WalletAccount[]>
	disconnect: () => Promise<void>
	request: (args: { method: string, params?: unknown[] }) => Promise<unknown>
	on: (event: string, listener: (...args: unknown[]) => void) => void
	removeListener: (event: string, listener: (...args: unknown[]) => void) => void
}

// ============================================================================
// Chain Types
// ============================================================================

/**
 * Supported chains
 */
export type Chain
	= | 'ethereum'
	| 'polygon'
	| 'arbitrum'
	| 'optimism'
	| 'base'
	| 'zksync'
	| 'scroll'
	| 'linea'
	| 'avalanche'
	| 'bsc'
	| 'fantom'
	| 'gnosis'

/**
 * Chain ID type
 */
export type ChainId = number

/**
 * Network configuration
 */
export interface NetworkConfig {
	chainId: ChainId
	name: string
	rpcUrls: string[]
	blockExplorerUrls?: string[]
	nativeCurrency: {
		name: string
		symbol: string
		decimals: number
	}
	testnet?: boolean
}

/**
 * EVM chain IDs
 */
export type EVMChainId
	= | 1 // Ethereum Mainnet
	| 5 // Goerli
	| 11155111 // Sepolia
	| 137 // Polygon
	| 80001 // Mumbai
	| 42161 // Arbitrum One
	| 421613 // Arbitrum Goerli
	| 10 // Optimism
	| 420 // Optimism Goerli
	| 56 // BSC
	| 97 // BSC Testnet
	| 43114 // Avalanche
	| 43113 // Fuji
	| 250 // Fantom
	| 4002 // Fantom Testnet
	| 100 // Gnosis
	| 8453 // Base
	| 84531 // Base Goerli

// ============================================================================
// Gas Types
// ============================================================================

/**
 * Gas estimate
 */
export type GasEstimate = bigint

/**
 * Gas price
 */
export type GasPrice = bigint

/**
 * Gas limit
 */
export type GasLimit = bigint

/**
 * Transaction fee
 */
export type TransactionFee = bigint

/**
 * Gas fee configuration (EIP-1559)
 */
export interface GasFees {
	maxFeePerGas: bigint
	maxPriorityFeePerGas: bigint
}

/**
 * Legacy gas configuration
 */
export interface LegacyGas {
	gasPrice: bigint
}

/**
 * Estimate gas parameters
 */
export interface EstimateGasParams {
	from?: Address
	to?: Address
	data?: string
	value?: bigint
	gas?: bigint
}

// ============================================================================
// Consensus Types
// ============================================================================

/**
 * Consensus mechanism type
 */
export type ConsensusMechanism
	= | 'pow' // Proof of Work
	| 'pos' // Proof of Stake
	| 'poa' // Proof of Authority
	| 'dpos' // Delegated Proof of Stake
	| 'pbft' // Practical Byzantine Fault Tolerance

/**
 * Validator info
 */
export interface ValidatorInfo {
	address: Address
	stake: bigint
	active: boolean
	commission?: number
	uptime?: number
}

/**
 * Staking info
 */
export interface StakingInfo {
	stake: bigint
	reward: bigint
	unlockTime?: number
	validator?: Address
}

// ============================================================================
// Log Types
// ============================================================================

/**
 * Log type
 */
export interface Log {
	address: Address
	topics: string[]
	data: string
	blockNumber: number
	transactionHash: TransactionHash
	transactionIndex: number
	blockHash: BlockHash
	logIndex: number
	removed?: boolean
}

/**
 * Event log filter
 */
export interface LogFilter {
	address?: Address | Address[]
	topics?: (string | string[] | null)[]
	fromBlock?: number | 'latest' | 'earliest'
	toBlock?: number | 'latest' | 'earliest'
}

// ============================================================================
// Provider Types
// ============================================================================

/**
 * JSON-RPC provider
 */
export interface JsonRpcProvider {
	request: <T = unknown>(request: JsonRpcRequest) => Promise<T>
	send: <T = unknown>(method: string, params?: unknown[]) => Promise<T>
	getBlockNumber: () => Promise<number>
	getBalance: (address: Address) => Promise<bigint>
	getTransaction: (hash: TransactionHash) => Promise<Transaction | null>
	getTransactionReceipt: (hash: TransactionHash) => Promise<TransactionReceipt | null>
}

/**
 * JSON-RPC request
 */
export interface JsonRpcRequest {
	jsonrpc: '2.0'
	id: number | string
	method: string
	params?: unknown[]
}

/**
 * JSON-RPC response
 */
export interface JsonRpcResponse<T = unknown> {
	jsonrpc: '2.0'
	id: number | string
	result?: T
	error?: { code: number, message: string, data?: unknown }
}

// ============================================================================
// Contract Deployment Types
// ============================================================================

/**
 * Contract deployment options
 */
export interface ContractDeployOptions {
	abi: ContractABI
	bytecode: string
	constructorArgs?: unknown[]
	gas?: GasLimit
	gasPrice?: GasPrice
	maxFeePerGas?: bigint
	maxPriorityFeePerGas?: bigint
	value?: bigint
	nonce?: number
}

/**
 * Contract deployment result
 */
export interface ContractDeployResult {
	contractAddress: Address
	transactionHash: TransactionHash
	transactionReceipt: TransactionReceipt
}

// ============================================================================
// ENS Types
// ============================================================================

/**
 * ENS name type
 */
export type ENSName = `${string}.eth`

/**
 * ENS resolver
 */
export interface ENSResolver {
	name: string
	address: Address
	contentHash?: string
	avatar?: string
	description?: string
	twitter?: string
	github?: string
	email?: string
	url?: string
}

// ============================================================================
// DeFi Types
// ============================================================================

/**
 * Pool pair
 */
export interface PoolPair {
	token0: Address
	token1: Address
	fee: number // bps
}

/**
 * Liquidity pool
 */
export interface LiquidityPool {
	address: Address
	token0: Address
	token1: Address
	reserve0: bigint
	reserve1: bigint
	totalSupply: bigint
	fee: number
}

/**
 * Swap parameters
 */
export interface SwapParams {
	tokenIn: Address
	tokenOut: Address
	amountIn: bigint
	amountOutMinimum: bigint
	recipient: Address
	deadline: number
}
