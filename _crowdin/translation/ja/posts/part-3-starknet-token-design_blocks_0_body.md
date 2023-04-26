この記事では、StarkNetトークン、その鋳造スケジュールと期待されるタイムラインのデザインについて深く掘り下げます。

### 考慮事項

StarkNet トークンの設計は、(i) StarkNet の**ユーザー**、(ii)**オペレーター**— ネットワークにトランザクションのシーケンシングを実行するコンピューティング リソースを提供する人々、 STARK プルーフ、および長期ストレージ プロバイダー、および (iii)**の開発者**そのインフラストラクチャおよびその上で実行されるアプリケーション用のソフトウェアを作成します。

手数料の構造とトークンの鋳造のためのメカニズムは次のとおりです。

* 有意な人間の介入に基づくのに対し、大部分自動化された
* 他のブロックチェーンシステムで知られテストされています
* 分析と説明が簡単; 透過的
* 投機的な操作と非価値のゲーム化に強いです
* 良いユーザーエクスペリエンスを持っていると考えられます (UX)

これらの設定は、ユーザーが支払った新しい鋳造手数料と取引手数料からトークンを割り当てるメカニズムを形成します。

**オペレータ**は、StarkNetの継続的なライブ性を確保し、ユーザーが要求するプロトコルの高品質なパフォーマンスを提供します。

**開発者**は、Operatorsがネットワークを保護するために使用するソフトウェアを構築し、維持します。 そして、ユーザーのためにネットワークの機能を強化するアプリを作成します。 したがって、手数料と新規鋳造の一部は、以下のようにスマートコントラクト開発者とコア開発者に支払われます。

* **スマートコントラクト開発者:**StarkNetプロトコルは、スマートコントラクトによって提供される値を自動的に測定できます。 これらの契約のユーザーが支払ったL1およびL2料金を介して。 StarkNetプロトコルは、スマートコントラクト開発者にわずかな手数料と継続的な新規ミニングを自動的に割り当てます。 より多くの価値をユーザーに提供するスマートな契約 (支払い手数料で測定されます) は、この目的に割り当てられたトークンの大部分を受け取ります。
* **コア開発者:**StarkNetプロトコルには、コア開発者の貢献を定量化する自動的な方法はありません。 例えばプロバやシーケンサやフルノードなどのコードを書いています したがって、このようなコア開発者やその他の貢献者に対するトークンの割り当ては、プロトコルによって測定できない場合は必ずしも人間の裁量が必要になります。 分散化の目標と一致する方法でこれを適用するためのモデルが確立されます。
* 新しい鋳造からのトークンと手数料を両方のタイプの開発者に割り当てるための正確なメカニズムはまだ決定されていません。 設計原則には、反ゲーム化と透明性が含まれます。

### StarkNetトークンの初期割り当て

StarkWareによって100億のトークンがチェーン外で鋳造されました。 明確にするために:これらのStarkNetトークンはStarkWareの株式を表すものではなく、StarkWareへの参加を提供したり、StarkWareからのクレームの権利を付与したりするものでもありません。 トークンの循環供給は、プロトコルによる新しいトークンの鋳造によって時間が経つにつれて増加します。 後にコミュニティによって決定されるスケジュールに従います\
*したがって、循環供給は固定されたままではないかもしれない。*

割り当ては以下の通りです:

**17%**— StarkWare Investors

**32.9%**— コアコントリビューター: StarkWareとその従業員とコンサルタント、およびStarkNetソフトウェア開発者パートナー

**50.1%**StarkWareから財団に付与されたもので、以下のように留意されています:

* **90%**— コミュニティプロビジョニング— StarkNetで仕事をし、基礎となる技術を駆動または開発した人のために、e. をクリックします。 重要なことに、すべてのCommunity Provisionsは、過去に実行された検証可能な作業に基づいています。 たとえば、コミュニティ規定が過去の StarkEx ユーザーに与えられる範囲で、割り当ては、2022 年 6</strong>**日より前に行われた StarkEx の技術の検証可能な使用に基づいて決定されます。</li>
* **9%**— コミュニティリベート — StarkNetトークンで**部分的**へのリベートは、EthereumからStarkNetへのオンボーディングのコストをカバーしています。 ゲーム化を防ぐため、コミュニティリベートは、**リベートの発表後に**発生するトランザクションにのみ適用されます。
* **122**— StarkNetプロトコルの開発、テスト、デプロイおよび保守のための補助金。
* **10%**— このシリーズの[前の投稿](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)で説明したように、財団の使命に沿った生態系活動に資金を提供するための戦略的準備金。
* **2%**— StarkNetトークン保有者と財団によって決定された、大学、NGOなどの高く評価されている機関や組織への寄付。
* **8.1%**割り当てられていない — 財団の割り当てられていない宝庫は、コミュニティによって決定される方法で StarkNet コミュニティをさらにサポートするために用意されています。</ul>

コア貢献者と投資家の長期的なインセンティブをStarkNetコミュニティの利益に合わせ、分散型エコシステムにおける一般的な慣行に従うこと。 Core ContributorsとInvestorsに割り当てられたすべてのトークンは、リニアリリースと1年間の崖で4年間のロックアップ期間の対象となります。

![](/assets/1_qcosthgskfd-q6bn3yzghq-1.png)

### StarkNetトークンを受け取る方法はありますか?

短い答えはイエスですが、トークンの受信への近道はありません。

StarkNetトークンの割り当てとその手数料市場と新しい鋳造デザインは、コアインフラストラクチャとdAppsの開発者に優先します。 生態系の安全と健康に貢献しているのです これは実質的にトークンに関連して何を意味しますか?

あなたが開発者で、すでにStarkNetインフラストラクチャ用またはスマートコントラクト用のソフトウェアを作成している場合。 StarkNetエンドユーザーによって真に評価され使用されているもので、プロトコルを通じてトークンを自動的に受け取ることが期待できます。 このメカニズムのgamificationに対する多くの保護策の1つは、開発者が受け取った料金は、ユーザーが支払った料金より厳しく低くなるということです。

開発者は、StarkNetプロトコルの開発、テスト、および保守のための作業に対してトークン助成金を受け取ることもできます。 そのような助成金は、その使命に従って財団によって適時決定されます。

StarkNet が Ethereum のスケーリング ニーズに対する答えであると信じるブロックチェーン開発者である場合は、[StarkNet](https://starknet.io/)とそのプログラミング言語[Cairo](https://www.cairo-lang.org/)についてさらに学び、独自のスマート コントラクトの開発を開始することをお勧めします。

エンドユーザーの場合は、StarkNet を使用してください。ただし、今日のニーズに応えるだけです。 StarkNet トークンの将来の報酬を期待するのでは*、価値のあるトランザクションやアプリケーションに使用してください。*コミュニティ規定が発表されると、発表日より前に発生したスナップショットのみが参照され、その時点で入手可能な情報に基づいて、ネットワークの悪用およびゲーミフィケーションであると見なされる使用法がフィルタリングおよび除外されます。時点。 コミュニティリベートが制定された場合、リベートが発表される前に発生した取引には適用されません。 だから今日は将来のリベートを見据えた取引は無駄だ

### 終了中のコメント

オープンなネットワークを構築することは、未知を受け入れることを意味します。 インターネット、Bitcoin、Ethereumは、彼らのツールが世界を変えるかもしれないと信じた革新者によって発明されましたが、どのようにしてかはわかりませんでした。 Humbly、私たちはStarkNetがブロックチェーンをスケールする能力がEthereumにとって良く、分散型Webにも良いと願っています。 何が作られるのか分かりません。 しかし、私たちはStarkNetが創造的なコミュニティの手に注目すべき技術力を置くと信じています。 コミュニティが無数の方法で使うことを期待しています 多くは想像を絶するでしょう