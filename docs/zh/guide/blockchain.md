# 区块链类型

**始于 1.9.0**

用于区块链和智能合约开发的类型。

## 概述

区块链类型提供了类型级区块链和智能合约工具。它支持区块结构、交易类型、智能合约 ABI、代币标准、钱包管理和网络配置。

此模块支持构建具有区块、交易、地址和智能合约正确约束的类型安全区块链应用。

## 基本用法

```typescript
import type { Block, Transaction, SmartContract, Address, TokenInfo } from 'uni-types'

// 定义区块类型
type EthereumBlock = Block<EIP1559Transaction>

// 定义智能合约
type ERC20Contract = SmartContract<ContractABI>

// 定义代币信息
type TokenData = TokenInfo & { balance: bigint }
```

## 核心类型

### BlockHash

区块哈希类型（十六进制字符串）。

```typescript
type BlockHash = `0x${string}`
```

### BlockHeader

具有元数据的区块头。

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

交易类型枚举（EIP 类型）。

```typescript
type TransactionType =
  | 0 // Legacy
  | 1 // EIP-2930
  | 2 // EIP-1559
  | 3 // EIP-4844
```

### Transaction

所有交易类型联合。

```typescript
type Transaction =
  | LegacyTransaction
  | EIP2930Transaction
  | EIP1559Transaction
  | EIP4844Transaction
```

### Address

以太坊地址类型。

```typescript
type Address = `0x${string}`
```

### SmartContract

具有 ABI 的智能合约类型。

```typescript
interface SmartContract<A extends ContractABI = ContractABI> {
  address: Address
  abi: A
  bytecode?: string
  deployedBytecode?: string
}
```

### ContractABI

合约 ABI 类型。

```typescript
type ContractABI = ABIFunction[] | ABIFunction
```

### ABIParameter

具有类型的 ABI 参数。

```typescript
interface ABIParameter {
  name: string
  type: ABIType
  components?: ABIParameter[]
  indexed?: boolean
}
```

### TokenInfo

ERC-20 代币信息。

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

ERC-721 NFT 类型。

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

钱包账户类型。

```typescript
interface WalletAccount {
  address: Address
  publicKey?: PublicKey
  chainId: number
}
```

### NetworkConfig

网络配置类型。

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

## 相关

- [错误处理](./error-handling) - 错误类型
- [事件系统](./event-system) - 事件处理类型
- [语言处理](./nlp) - NLP 类型