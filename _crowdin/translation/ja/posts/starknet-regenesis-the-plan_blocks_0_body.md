### TL;DR

* 私たちはStarkNetコミュニティとの広範な議論によって形成されてきたRegenesisの詳細な計画を共有しています。 Kuba@SWMに感謝いたします。
* 再発はCairo 1.0のリリースに続き、より簡単で安全なStarkNet契約を可能にすることで、システムの安全性を高めます。
* 移行フェーズ中にウォレットを更新する準備が必要です
* 開発者は、契約をカイロ1.0に移植する必要があります。

### はじめに

StarkNet Alphaは、生産への重要なステップであるRegenesisに向けて進んでいます。 今回の更新では、Regenesis の主な動機 ([Cairo 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0)) の詳細を共有し、ユーザーと開発者に何が必要かを説明したいと思います。 Regenesisの後、StarkNetはCairo 1.0ベースの契約でのみ動作し、新しいジェネシスブロックから既存の状態で開始します。

再発生に必要なものは何ですか? ウォレットの簡単なアップデート。 StarkNetのダップのビルダーには何が必要ですか？ 契約書を Cairo 1.0 に移植し、簡単なアップグレードガイドラインに従ってください。 具体的には、クリーンな状態からの再起動はなく、同じ StarkNet インスタンスにとどまります。つまり、移行**は必要ありません。**

Regenesisプランは、アプリケーションの状態を完全に維持し、アプリケーションにダウンタイムを伴わないようにするものです。 したがって、私たちが提供するガイドラインに従ったアプリケーションは、StarkNet Alpha Mainnetで即座に起動することができます。再発生プロセス中に操作とユーザーに影響を与えることはありません。 eはコミュニティーと協力し可能な限りスムーズにするために必要なすべての支援を提供することを約束している

私たちは、ソフトウェアマンションチームによる重要な提案を含むコミュニティとの広範な議論の結果、この方向に進んでいます。

### なぜ再発が起こるのか？

#### Cairo 1.0 and Sierra

カイロ1がもたらした新たな可能性を生かすことが、新生の主なモチベーションです。 すなわちシーケンサDOS保護、検閲抵抗とガス計測は、分散ネットワークとしてStarkNetにとって不可欠です。

Cairo 1.0は、すべてのトランザクションが確実に証明できるようにします。 これにより、StarkNetは、取り消されたトランザクションをブロックに含め、実行証明を生成することができます。 このメカニズムにより、元に戻されたトランザクションの実行時にシーケンサーが支払われ、悪意のあるアクターに対するDOS保護が増加します。 さらに、Cairo 1.0は、StarkNetがより直感的な手数料市場に移行することを可能にするガスメーターをサポートします。 最後に、StarkNetはL1からの強制取引を導入し、ネットワークの検閲機能を強化します。

これらのメリットを享受するために、Cairo v0とCairo 1.0の契約は混在できません。 不適切なステートメントは、カイロv0契約のビットがある場合、ガスの追跡が行われることはありません。 そのためには、StarkNetの状態、ergo RegenesisからCairo v0コードを完全に段階的に廃止する必要があります。

**再新生後は、カイロ1.0に基づいたStarknetシステムが完成します。**

#### コードとプロトコルを簡素化する

StarkNet, まだアルファで, すでに多くの変更を受けました. これまでのすべてのバージョンでStarkNet OS、ブロック、およびトランザクション構造が変更されました。 これにより、コードの一部が廃止されました。 しかし、(インデクサやステートエクスプローラなどの)完全なノードやインフラストラクチャプロバイダには注意が必要です。 そして、StarkNet Alpha バージョンの過去の動作をすべて実装し、状態と信頼できる状態を同期させます。 Regenesisがなければ、この負担はStarkNet向けにこのようなサービスを構築することを検討する開発者にとっての主要な抑止力になるかもしれません。

そのため、多くのインフラストラクチャツールの実装を持つ分散型の世界への準備として、本プロトコルの複雑さを軽減するつもりです。 これを達成するには、将来のインフラストラクチャがStarkNet 0を実行する必要はありません。 コードを入力し、遷移期以降の最初のブロックを生成点としてマークします。

### 温度再発症? 全体のタイムライン

再発は2022年末までに行われる予定のカイロ1.0のリリースに続く予定です。 2023年のQ1では、StarkNetがカイロ1をサポートするように更新されます。 そして、Q1の終わりまでに完全なカイロ1.0ベースのネットワークに移行することを目指しています。

**ユーザーとアプリケーションは、この期間中に移行する必要があります。**

![](/assets/1_ef85shzd2uudwex-cy8wdg-1.png)

### だから私は知る必要がありますか?

アプリケーション開発者は、Regenesis に関する以下の側面を認識する必要があります。

1. 契約のアップグレードの準備ができていることを確認してください。 計画の完全な技術は、[StarkNet Community Forum](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080) で共有されます。 詳細が確定したら、簡潔なガイドラインを共有します。
2. コードをCairo 1.0に移植する準備ができていることを確認してください。 すべての最新の詳細については次のセクションを参照してください。

#### あなたの契約をカイロ1.0に移植する

Cairo 1.0 は StarkNet 開発者にとって大きな期待を持っています。 既存のカイロでは、構文の改善、完全に本格的な型システム(ネイティブのuint256人?)により、契約書の作成がより安全で、より容易になります。 他にもね 開発者は、既存の StarkNet 契約を Cairo 1.0 構文に移植する必要があります。 ただし、ロジックとコード構造は同じままになります。 そもそもアプリの開発にかかった努力と比べると この取り組みは無視できると予想されます

この文脈では、あなたがあなたのアプリのCairo 1.0バージョンを再監査することを選択することができることに注意する価値があります。 過去にすでにアプリが監査済みの場合、再監査プロセスは大幅に安く、より簡単になります。 監査役はすでにあなたの論理に精通しているから

私たちは、2022年の第4四半期に、カイロ1.0周辺のすべてのドキュメントとチュートリアルとワークショップをリリースします。

### 私はStarkNetユーザーです。 私は何をすべきですか?

ユーザーとして、あなたはおそらくRegenesis中にいくつかのアクションを取る必要があります。 少なくとも、アカウントの契約をアップグレードする必要があります。 移行期間(数ヶ月)にわたってそれを行わないと、アカウントが失われます。 StarkNetアプリの開発者が選択したアップグレードパスに応じて、追加の手順を実行する必要があります。

StarkNetがまだアルファ段階であることを皆に思い出させます ユーザーは、StarkNetや使用しているアプリの通信に気を配る必要があります。 新しいシステムに早期にアップグレードすることを確認するのはお客様の責任です。 *アーリーアダプターであることは必ずしも簡単ではありません。私たちはあなたの役割を果たすことを期待しています！*

### 締結する

Cairo 1.0はすぐ近くにあり、StarkNetとその開発者に多くのエキサイティングな利点と改善を提供します。 これらを収集するには、ネットワークの再発生イベントが必要です。 幸運なことに、私たちはこのプロセスを最小限に抑え、ユーザーにとって完全にシームレスで、アプリケーションにとって非常にシンプルなものにする設計を念頭に置いています。

[コミュニティディスカッション](https://community.starknet.io/t/regenesis-state-migration-current-suggestion/2080)に参加し、コメントや懸念を共有することをお勧めします。 同様に、StarkNetでアプリケーション開発者として行う必要のあるステップの最新情報を確認してください。