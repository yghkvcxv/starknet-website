### TL;DR

* StarkNet Token (STRK) тепер розгорнутий на Ethereum Mainnet
* **Остерігайтеся шахраїв!**Токени StarkNet не пропонуються для продажу
* Для визначення механізму розподілення своїх токенів потрібен час
* Токени, які займають акціонери StarkWare акціонери, співробітники та незалежні партнерські розробники будуть заблоковані протягом 4 років з поступовим випуском, що починається через рік
* Токен буде подальше децентралізація StarkNet, завдяки використанню для голосування, заявок і сплати за оплату

Сьогодні[StarkNet](https://starknet.io/)робить ще один крок до децентралізації. Токен StarkNet тепер[на Ethereum](https://etherscan.io/address/0xca14007eff0db1f8135f4c25b34de49ab0d42766). Швидке відновлення: STRK буде використовуватися як жетон для участі в механізмах консенсусу StarkNet, як маркер управління, та для сплати транзакцій. Обґрунтування кожної з цих комутацій представлено в[нашій пропозиції децентралізації](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778), в розділі "Які токени будуть використовуватися для?"

***Остерігайтеся шахраїв:**під час письма немає можливості купувати StarkNet Токени; період безпродажного використання якого не буде розміщуватись аж до наступного повідомлення на[StarkNet Foundation](https://twitter.com/StarkNetFndn)слідуйте офіційній комунікації від StarkNet Foundation для вивчення будь-яких оновлень до стану STRK. Ви можете повідомити про шахрайство та перевірити інші повідомлення про шахрайство в каналі[scam-report](https://discord.gg/qypnmzkhbc)на сервері[StarkNet Discord](http://starknet.io/discord).*

Цей пост пояснює процес розподілу термінів і як розгорнуті токенні договори обслуговують два з трьох розроблених правил маркера, а саме, голосу та акції. Третя корисна річ - платити за StarkNet - буде обговорюватися пізніше.

### Планування процесу розподілу токенів

Ми вже запропонували[план](https://medium.com/starkware/part-3-starknet-token-design-5cc17af066c6)для початкового розподілу токенів. Токени, виділені акціонерам, службовцям та незалежним розробникам програмного забезпечення заблоковано протягом чотирьох років, з розкладу поступового звільнення, що починається через один рік. Заблоковані токени можуть бути використані для голосування та розміщення, але вони не можуть бути передані або торгуватися. Деякі токени закриваються через виділений розумний контракт на Ethereum, тоді як інші токени будуть заблоковані за допомогою кластодіанів.

Окремо кажучи, 50.1% існуючих токенів StarkNet будуть виділені для Фундації StarkNet, щоб використовувати його[цілі](https://medium.com/@StarkNet_Foundation/welcome-to-the-world-starknet-foundation-7bd55d5dbc59)(cf.[пост StarkWare-е](https://medium.com/starkware/introducing-the-starknet-foundation-bd4b4379fbb)). Ці токени не заблоковані. Тим не менш, Фонду знадобиться час, щоб сформулювати точний механізм розподілу токенів та ділитися своїми планами у свій час.

#### Чому замкнено?

Блокування токенів для раніше зазначеного періоду гарантує, що нинішні учасники відповідатимуть довготерміновим стимулом StarkNet. Він також відлякує спекуляції щодо широкого використання для своїх призначених цілей: забезпечення мережі, оплати праці та децентралізації управління.

Далі, ми пояснимо, як маркерна реалізація підтримує голосування та опитування.

### Голосування

Фундація, відповідальна за сприяння надійному управлінню та формування механізмів голосування. StarkNet Token був розроблений для того, щоб дозволити як пряме голосування, так і низку механізмів делегування.

#### L1 голосування

Оформлена імплементація ERC-20 тепер включає**необов'язкове**використання модуля делегування зв'язку[підтримки](https://docs.compound.finance/v2/governance/). Цей модуль широко використовується для голосування по ланцюжках. Причина не обов'язкова для StarkNet, і по замовчуванню, це розгляд витрат. Увімкнення його значить, що кожна передача токенів StarkNet на L1 потребує додаткового газу, необхідного виключно для відстеження змін при виборі потужності голосування.

#### Non-L1 voting

Альтернативи голосування по L1 у ланцюжку з модулем делегування компанії включають голосування за ланцюги голос, а також систему голосування за сток-ланцюг (наприклад,[SnapshotX](https://snapshot.mirror.xyz/cUOrwdtEs5PvNh0sqYWWxPjt8GdJWn_Qp3cl7E3_8IU)). Ці альтернативи, які значно зменшують споживання газу для L1 передач, не потребують явної підтримки вже розгорнутого коду ERC-20, і, таким чином, за своєю сутністю підтримуються.

Як було зазначено вище, всі токени - заблоковані та розблоковані - будуть доступні в механізмі голосування StarkNett.

### Стак

StarkNet'а бездозволу та цензурована операція потребує випадкового вибору послідовників. Ймовірність вузла, що вибирається до послідовності і пропонується блок пропорційна кількості токенів StarkNet, які ставлять вузол. Обґрунтування використання токенів StarkNet (а не, скажімо, Ethereum або Bitcoin) пояснюється в пропозиції управління[](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)і точні деталі акції, послідовне створення та блокування в StarkNet тривають,[обговорень спільнотою](https://community.starknet.io/t/starknet-decentralized-protocol-introduction/2671)і вони ще мають бути завершені.

Як і з голосуванням, токени можуть використовуватися для битви навіть якщо вони заблоковані. Це сприяє різноманітності StarkNet операторів та стійкості StarkNet.

### Summary

Розгортання контрактів StarkNet Token на Ethereum — ще один крок в децентралізації StarkNet.

Ми закликаємо розробників і користувачів насторожено ставитися до шахрайства! У момент публікації відсутні токени маркери і цей статус не торгуватиме буде поки більше не буде помічено в StarkNet Foundation.

Щодо додаткових питань, то ви можете перейти на сервер[Token-discussions](https://discord.gg/qypnmzkhbc)на сервері[StarkNet Discord](http://starknet.io/discord).