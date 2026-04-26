# Blockchain Types

**Since 1.9.0**

Types for blockchain and smart contract development.

## Overview

Blockchain Types provides type-level blockchain and smart contract utilities. It supports block structures, transaction types, smart contract ABIs, token standards, wallet management, and network configuration.

This module enables building type-safe blockchain applications with proper constraints for blocks, transactions, addresses, and smart contracts.

## Basic Usage

```typescript
import type { Block, Transaction, SmartContract, Address, TokenInfo } from 'uni-types'

// Define block type
type EthereumBlock = Block<EIP1559Transaction>

// Define smart contract
type ERC20Contract = SmartContract<ContractABI>

// Define token info
type TokenData = TokenInfo & { balance: bigint }
```

## Key Types

### BlockHash

Block hash type (hex string).

```typescript
type BlockHash = `0x${string}`
```

### BlockHeader

Block header with metadata.

```typescript
interface BlockHeader {
  number: number
  hash: BlockHash
  parentHash: BlockHash
  nonce: string
  timestamp: number
  gasUsed: bigint
  gasLimit: bigint
  difficulty: bigint
  transactionsRoot: string
  stateRoot: string
  miner: Address
  baseFeePerGas?: bigint
}
```

### TransactionType

Transaction type enumeration (EIP types).

```typescript
type TransactionType =
  | 0 // Legacy
  | 1 // EIP-2930
  | 2 // EIP-1559
  | 3 // EIP-4844
```

### Transaction

All transaction types union.

```typescript
type Transaction =
  | LegacyTransaction
  | EIP2930Transaction
  | EIP1559Transaction
  | EIP4844Transaction
```

### Address

Ethereum address type.

```typescript
type Address = `0x${string}`
```

### SmartContract

Smart contract type with ABI.

```typescript
interface SmartContract<A extends ContractABI = ContractABI> {
  address: Address
  abi: A
  bytecode?: string
  deployedBytecode?: string
}
```

### ContractABI

Contract ABI type.

```typescript
type ContractABI = ABIFunction[] | ABIFunction
```

### ABIParameter

ABI parameter with type.

```typescript
interface ABIParameter {
  name: string
  type: ABIType
  components?: ABIParameter[]
  indexed?: boolean
}
```

### TokenInfo

ERC-20 token information.

```typescript
interface TokenInfo {
  address: Address
  name: string
  symbol: string
  decimals: number
  totalSupply: bigint
}
```

### NonFungibleToken

ERC-721 NFT type.

```typescript
interface NonFungibleToken {
  contract: Address
  tokenId: bigint
  owner: Address
  tokenURI?: string
  name?: string
  description?: string
  image?: string
  attributes?: Record<string, unknown>[]
}
```

### WalletAccount

Wallet account type.

```typescript
interface WalletAccount {
  address: Address
  publicKey?: PublicKey
  chainId: number
}
```

### NetworkConfig

Network configuration type.

```typescript
interface NetworkConfig {
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
```

## Related

- [Error Handling](./error-handling) - Error types
- [Event System](./event-system) - Event handling types
- [Language Processing](./nlp) - NLP types