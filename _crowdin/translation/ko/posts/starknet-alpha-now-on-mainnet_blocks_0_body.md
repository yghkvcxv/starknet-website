### TL;DR

* Alpha is live on Mainnet
* It supports general computation and composability
* Fast-growing community, developing tooling, and applications
* Additional features to be rolled out on an ongoing basis in the coming weeks
* Disclaimer: this is an Alpha version (read the fine print below)

### Introduction

StarkNet Alpha is launching today on Ethereum Mainnet!

StarkNet is a permissionless decentralized Rollup operating as an L2 network over Ethereum. StarkNet allows any dApp to achieve unlimited scale for its computation, without compromising Ethereum’s composability and security, thanks to its reliance on the safest and most scalable cryptographic proof system — [STARK](https://starkware.co/stark/). StarkNet is built on the [Cairo](https://starkware.co/cairo/) programming language, the first production-grade Turing complete von-Neumann verifier on Ethereum. Both Cairo and STARK were developed in-house by StarkWare and have powered all our production-grade applications, which have settled over 50M txs and $250B since Summer 2020.

Among other features, StarkNet Alpha enables general computation smart contracts that support composability, both with other StarkNet contracts and via L1<>L2 messaging with L1 contracts. StarkNet Alpha operates in a Rollup mode, meaning all the state diff data is sent on-chain.

Back in January, we shared the StarkNet [roadmap](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). In June, StarkNet Alpha went live on a public testnet, and has been updated with new features on a rolling basis. We are delighted to be ahead of schedule, thanks, in part, to our reliance on our production-grade battle-hardened STARK/Cairo software stack.

### How Should you Treat StarkNet Alpha?

First, with great care, as the “Alpha” label is there for a reason. Expect changes, fixes, and improvements to come. StarkNet Alpha has yet to be audited, and we may delay such an audit till the network matures some more (read the disclaimer at the end of this post for more information).

Generally, we follow the cautious and sensible path defined by our Optimistic Rollup colleagues, namely, Arbitrum and Optimism: launch the network with a single sequencer, and whitelist applications in order to ensure their developers understand the risks involved. We continue to be fully committed to a complete decentralization of StarkNet.

And how should you treat StarkNet Alpha’s economics? The Alpha will start out with no transaction fees. The next upgrade, only a few weeks away, will introduce a fee mechanism — we will share more details in a separate post.

### Start Building

We invite you to start writing your own applications over StarkNet by either checking the (new!) [website](http://starknet.io/), or jumping directly to the [tutorial](https://starknet.io/docs/).

If you are ready to deploy, please follow this [onboarding process](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu); created to ensure all developers are well aware of the preliminary state of the system.

### 생태계

Over the past couple of months, we have seen amazing growth in the size and activity of the StarkNet community, which congregates on the [StarkNet Discord](https://discord.gg/uJ9HZTUk2Y). Dozens of developers — teams and individuals — across the blockchain ecosystem are contributing to this effort. (See the disclaimer at the end of this post)

#### Developer Tools

* OpenZeppelin is defining the standard contracts. Their [repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts) and [discussions](https://github.com/OpenZeppelin/cairo-contracts/discussions) are worth following
* The [Warp](https://github.com/NethermindEth/warp) Solidity–>Cairo transpiler, developed by Nethermind
* Shard Labs’ [HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin) and [StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* Argent is developing tooling, including its joint effort on StarkNet.js, alongside [Sean Han](https://twitter.com/seanjameshan), its creator

#### Infrastructure

**Block explorer**:

* [The Voyager](http://voyager.online/) project by Nethermind
* [Eth.tx](https://ethtx.info/) will offer support analysis and a detailed view of StarkNet transactions

**Full nodes**: two efforts underway: one is the Fermion project led by Erigon, the other is the [Pathfinder](https://github.com/eqlabs/pathfinder) project, led by Equilibrium

**Wallets**:

* [ArgentX](https://github.com/argentlabs/argent-x) is a browser extension developed by Argent, already available to devs
* Torus key management solution is StarkNet ready
* Ledger is developing a native StarkNet app; to be made available before the end of the year

**Cairo Audits**: ConsenSys Diligence, Trail of Bits, Peckshield, and ABDK are either conducting Cairo audits already, or about to start soon

**API Services**: after a StarkNet full node is made available, API services will be offered by Figment, Chainstack, and Infura

**Indexer**: we will be working on integrating TheGraph to work with StarkNet, together with the Figment team

### The Road Ahead

In the weeks and months to come, we will upgrade the Alpha with the following capabilities:

* Contract upgradability mechanism
* Fee Mechanism
* Events
* Addition of missing syscalls (get_block_number, get_block_timestamp, and more)
* Skeletal version of Volition
* And much more …

To monitor this effort on an ongoing basis, see the features’ [tentative roadmap](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

Looking further out, we continue to invest heavily in active research on multiple fronts (come join the [Shamans](https://community.starknet.io/) effort):

* Decentralization
* Scaling
* Data availability
* Permissionless incentivization

### Call to Action

* Start writing contracts on the permissionless StarkNet testnet on Goerli
* Join the [StarkNet Discord](https://discord.gg/uJ9HZTUk2Y)
* Join the community calls
* Attend the first [StarkNet Ecosystem Summit](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157) (Jan 27–28 2022, Stanford CA)
* Join the [StarkNet Shamans](https://community.starknet.io/) for a deeper dive into research challenges

### Disclaimer

***StarkNet Alpha is a new and complex system that has not been fully audited. Like all complex software systems, the StarkNet system may contain bugs which, in extreme cases, could lead to a loss of all of your funds. So, ***tread carefully and beware!******

*The StarkNet ecosystem is a large and fast-growing set of independent teams and individuals, over which StarkWare has no oversight and assumes no responsibility. Any one of the projects developed by ecosystem members may contain bugs that, in extreme cases, could lead to a loss of all your funds. Furthermore, as more smart contracts are deployed, the potential for unintended harmful bugs and even malicious scams and rug pulls increases. So, treat all smart contracts on StarkNet as you treat smart contracts on Ethereum, and use only those that you have good reason to trust as secure.*