过去几年来，区块链中的技术革新蓬勃发展——STARK、SNARK、EIP-1559、以太坊合并——都是巨大的技术成就。 然而，UX和界面设计未能跟上。 人们仍然被困在16个字的种子短语上，如果没有集中的中间人就进入DeFi，对许多人来说仍然太具恐吓性。 为了将未来10亿用户登上万维网，改进用户的登临体验是至关重要的。

正如FTX所表明（和Gemini, Celsius和Mt. Gox），保留对一个资产的自我监管至关重要。 然而，直到最近，自我保管的钱包对普通用户来说一直很不明确，令人困惑。 大多数人每月忘记他们的 Web2 密码；用户如何能够保证其种子短语和私钥的安全性？

简而言之，它是一个安全恶梦。 正如我们无数次看到的那样，一个错误的举动，无论是由不良行为者发起还是由于疏忽，都可能造成数百万美元的损失。

作为新的加密用户的第一个联系人，Etherum钱包必须易于使用、安全和自定义，以满足每个用户的需要。 这就要求开发者将Web2金融产品的简单性与Web3的功能结合起来。

这正是抽象的结果。

账户抽象会取消用户对私人密钥的依赖，并使钱包更易于编程，从而提高了自保管钱包产品的安全性。 通过这种改进的 UX，非托管钱包可以最终扩大到数百万主流加密用户。

但为了充分了解账户抽象的影响，我们必须重新了解以太坊账户的运作情况。

### 以太坊账户的基本知识

Ethereum 帐户有两种类型：

1. 外部账户(EOA)
2. 合同帐户 (CA)

让我们进一步细分。

### 外部拥有的账户

外部拥有的账户，如MetaMask和Coinbase Wallet ，是Ethereum 用户的典型账户类型。 每个EOA都有一个私人和公共钥匙，称为钥匙。

所有交易都由私人密钥授权和签名。 交易一旦签名，EVM将使用EOA账户地址验证签名是否有效。 EVM 中硬编码的逻辑意味着账户(持有您的令牌的对象)和私钥(签名者)作为一个组合在一起。

丢失您的私钥意味着永远失去您的资金，甚至对您账户的控制。

### 合同账户

同时，合同账户与账户抽象同义词是智能合同，部署在以太坊区块链上。 这些合同由代码逻辑控制，不需要私钥。 与紧急情况援助不同的是，合同账户不能启动交易。 相反，他们的交易是根据经济审计官的指示触发的。

### 为什么账户抽象事项

账户抽象意味着摘取硬编码授权逻辑离开环境影响评估， 将每个账户转化为可编程的智能合同，可根据任何个人的需要加以调整。

正如Argentin共同创始人兼首席科学官Julien Niset在最近一次[Stark @ Home event](https://www.crowdcast.io/e/7olimxqv)中所解释的那样， 这种灵活的授权逻辑给予开发者自由玩帐户功能，如…

**硬件签名：**使用 iPhone 或 Android 的安全飞地将任何智能手机转化为硬件钱包。 从那里用户可以使用生物鉴别数据验证交易，例如指纹或 Apple Face ID。 我们已经开始看到自保管钱包，如Braavos[推出这个功能。](https://medium.com/@braavos_starknet_wallet/hardware-signer-the-last-innovation-for-wallet-crypto-everyday-users-7e1974f93944)

**付款主管：**允许用户支付任何煤气费，甚至有第三方设计的机制支付交易费用。

**社交恢复：**如果私人密钥丢失或损坏，用户可以授权一个新密钥作为合法的钱包拥有者。 这可以包括通过信任联系人、硬件钱包或第三方服务的各种恢复方法。 这个想法是为了让恢复对您账户的访问变得很容易，像通过电子邮件恢复您的银行账户密码一样。

**多重身份验证：**类似于常见的 Web2 2FA 练习。 用户可以为他们的加密钱包设置两种(或更多)身份验证方法 在这种情况下，只有当用户通过电子邮件或短信等第二个选项确认批准时，交易才会签名。 用户还可以设定每日转账限额或账户地址列表，在这些地址中，钱包被自动阻止交互。

**Quantum Resistant and Gas-Executive Signatures：**Etherum当前的签名方案。 ECDSA在计算上很广（即：较高的气体费），可以用定量电脑打破。 通过签字抽象，不同账户合同使用更有效率和数量安全的签字办法。 StarkNet使用自己专有的STARK友好曲线。

Not only do these features provide users with greater security and more flexibility, but more importantly, result in a much **better** user experience.

Vitalik Buterin列为以太坊开发者社区的“长期梦想”，自2020年以来围绕着账户抽象的创新，主要是EIP-2938和EIP-3074。 然而，这两方面都需要在安全和执行方面进行权衡。 [EIP-4337](https://github.com/ethereum/EIPs/blob/3fd65b1a782912bfc18cb975c62c55f733c7c96e/EIPS/eip-4337.md)，是迄今最有希望的发展，它提出了一个账户抽象版本，而不需要修改以太坊协议。

### **账户摘要和 Starknet**

比特币和以太坊正在为支持账户抽象而对当前协议进行修改，不同于[StarkNet](https://starkware.co/starknet/)自第一天起就执行了账户抽象操作。 如果加上我们的STARK证据的可扩展性和能力，钱包创新的潜力是无限的。 这就是为什么下一代自封钱包，如Argent和Braavos，目前正在我们的网络顶端建造。

StarkNet的方法类似于EIP-4337。[承认](https://community.starknet.io/t/starknet-account-abstraction-model-part-1/781)完整账户抽取仍会导致UX混淆，[可能会打开对序列器攻击的门](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-4337.md#rationale) 相反，它的目的是通过相互提供某些必要的环节基础设施和超链基础设施来实现签字抽象和付款抽取。

虽然还有更多的工作要做，但账户抽取正在超越一小圈子的加密本土。 In December, [Visa proposed the idea](https://www.coindesk.com/tech/2023/01/11/ethereum-upgrade-could-make-it-harder-to-lose-all-your-crypto/) of using account abstraction to set up automatic recurring payments on StarkNet. 使用可授权帐户，用户可以授予对预先批准的智能合约进行付款的权限。 从那里，这项智能合同将被编入程序，以便在规定的时间内在某一特定日期扣除一定的付款额。 虽然签证尚未公布其自己的服务计划，但仅有兴趣就能讲出很多内容， 并且可能预示着一个高科技订阅平台如Netflix 和 Spotify 可以采用加密技术的世界。

至于将来的情况，只有时间才能告诉我们。 但有一点是肯定的。 使钱包更容易和更安全地使用， 账户抽象将成为一个强大的催化剂，可将自保管区块链钱包扩大到数以百万计的主流加密用户。 与此同时我们将继续建造。