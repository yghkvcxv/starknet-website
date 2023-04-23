### TL;DR

* StarkNet тепер підтримує спільність, головна функція, яка визначає фазу StarkNet'а.
* Ми випускаємо тестовий фреймворк для StarkNet - розробники тепер можуть тестувати свої контракти локально і ефективно.
* У цій версії включно з декількома помітними покращеннями продуктивності, такими як підтримка племен Merkle-Patricia та побудова для гірких операцій.
* Звернення до екосистеми:

1. **Стандартні контракти**: OpenZeppelin буде розробляти стандартизовані контракти для StarkNet, як це було зроблено для Ethereum!
2. **EVM->Каїрський компілятор**: команда Warp @ Nethermind продемонструвала компіляція ERC-20 Солкості в StarkNet договорах StarkNet

### Фон

StarkNet - це допустимий децентралізований Validity-Rollup (він же "ZK-Rollup"). На початку року ми оголосили[дорожню карту](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). The [Alpha](https://medium.com/starkware/starknet-alpha-1-90c3348cca4f), currently running on a public Ethereum testnet, already supports permissionless deployment of smart contracts implementing any business logic, with L1<>L2 messaging and on-chain data. Крім того, це дозволяє будь-якому користувачеві надсилати транзакції до мережі без дозволу Ethereum-стилю.

Цей реліз: StarkNet Alpha 2, включає в себе ядерну функцію, яка дозволяє просуватися від планет до сузір'їв: композитність між розгорнутими розумними контрактами.

### Особливості

StarkNet Alpha 2 показує наступні функції:

* **Композитність:**StarkNet Alpha тепер підтримує взаємодію між розумними договорами - заздалегідь заплановано! Краса цього оновлення в тому, що розробники можуть очікувати майже такого ж досвіду, як Ethereum; виклики є синхронними і можуть бути використані як виклики функцій. Ми з нетерпінням чекаємо на нові додатки, які отримають користь як з необмеженої обчислювальної масштабу так і з складністю договору за допомогою StarkNet. Щоб зрозуміти, як користуватися цією функцією, ви можете почати слідкуючи за цим[посібником](https://www.cairo-lang.org/docs/hello_starknet/calling_contracts.html). Ми хотіли б почути ваші відгуки і подивитися, що ви будуєте на[StarkNet discord](https://discord.gg/uJ9HZTUk2Y).
* **Локальний тест Framework:**ви запитали, і ми доставлили -[кращий тестовий фреймворк](https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet/testing). Це дозволить розробникам прискорити розробку dApp, випробувавши розгортання StarkNet договору на локальному рівні - без будь-яких зовнішніх залежностей. Ця версія включає тільки L2 інтерактиву, наступні версії розширять функціональність і легкість використання. Перевірте підручник[тут](https://www.cairo-lang.org/docs/hello_starknet/unit_tests.html), і ми хотіли б почути вашу відгук про цю функцію.
* **Вдосконалення продуктивності:**

**Patricia Trees:**Ми покращили дизайн StarkNet, щоб підтримати більш високий рівень пролонгації і коротший термін генерації шляхів, переходячи до прихильності штату Merkle-Patricia ([документації](https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/patricia_utils.py)). Ця зміна дозволяє створювати набагато більші блоки, тим самим знижуючи витрати на транзакцію. Перехід до більш складних державних зобов'язань був включений Каїром, мовою ZKP - основним компонентом операційної системи StarkNet.

**Bitwise операції:**ми додали[будівництво](https://www.cairo-lang.org/docs/how_cairo_works/builtins.html)для підтримки значно ефективніших бітрейтів у контрактах StarkNet ([documentation](https://www.cairo-lang.org/docs/reference/common_library.html#common-library-bitwise)).

* **Goerli:**StarkNet рухається з Ropsten to[Goerli](https://goerli.etherscan.io/address/0xee02F29aE9A4988aE064940bF11954d6eafE26Ac)! Нарешті ми звільнили нашу систему від примх Ропстенських богів. Альфа 2 буде працювати над більш стабільним середовищем розробки.

### Екосистема

Система StarkNet постійно зростає, і ми з радістю поділяємо останні новини:

* **Стандартні контракти**, : ми раді працювати з OpenZeppelin на стандартній бібліотеці StarkNet. Їх канонічна робота над стандартизованими контрактами Ethereum служить нам усіх щодня, і ми впевнені, що вони будуть такими ж впливовими тут.
* **EVM->Каїр**: Команда Нідерландів Warp[продемонструвала](https://medium.com/nethermind-eth/warp-your-way-to-starknet-ddd6856875e0)перенесення контракту ERC-20 від EVM bytecode до договору StarkNet та розгортання на StarkNet. Ці зусилля швидко рухаються, і наша наступна мета - перенесення довільних розумних контрактів з Юлу до Каїру.
* **Maker-on-StarkNet**: пропозиція[](https://forum.makerdao.com/t/mip39c2-sp19-adding-the-starknet-engineering-core-unit-sne-001/9745)була представлена на Maker DAO для реалізації протоколу Maker над StarkNet. Перша фаза - це новий Міст DDAI до StarkNet (StarkNet, по StarkNet, по яким можна слідкувати за проектом DAI.
* **StarkNet/Cairo Auditing Services**: ми займаємося розробкою декількох аудиторських фірм для надання послуг StarkNet smart contract та Каїрських програм.

### Майннет в кутку

Ми готуємося до запуску StarkNet Alpha Mainnet, починаючи з білого набору програм. Триває кілька проектів, їх активно додають. Щоб приєднатися до вечірки, вас запрошують протягнути вас через[discord](https://discord.gg/uJ9HZTUk2Y).

**Оновлення (Новин. 2021):**StarkNet Alpha активована на Ethereum Mainnet