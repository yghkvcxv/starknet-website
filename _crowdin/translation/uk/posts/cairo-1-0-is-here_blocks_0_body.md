### TL;DR

* Перша версія в Каїрі 1.0 тут!
* Розробники можуть почати писати та тестувати програми Каїра 1.0
* Ви отримаєте паритет характеристик з попередньою версією Каїра в найближчі тижні
* Підтримка контрактів StarkNet буде додана в наступній версії StarkNet Alpha

### Фон

Ми з радістю повідомляємо, що перша державна версія Каїра 1.0 вже доступна. Це знаменує велику віху в еволюції Каїра, яка вперше з'явилася в 2020 році як цілковита мова програмування для ефективного написання програм STARK. Каїр 1.0 - мова іржавого рівня високорівню. Як і Rust, він повинен дозволити розробникам легко писати код, який є ефективним і безпечним.

З моменту його призову в Каїрі було використано для створення додатків Layer-2, які[обробити](https://dashboard.starkware.co/starkex)понад 790 мільярдів доларів торгів, оброблено понад 300 мільйонів транзакцій та для видобутку понад 90 мільйонів неFTs, всі виконані поза ланцюгом Ethereum із математичною цілісністю, гарантованою доказами STARK. Каїр став 4-ю найчастіше використовуваною мовою програмування в блоці[екосистемою](https://defillama.com/languages)великою. З випуском Каїра 1. , ми прагнемо зробити мову ще більш доступною та зручною для користувача, одночасно запроваджуючи нові функції, що покращують безпеку та зручність.

Однією з найбільш значущих змін в Каїрі 1.0 є синтаксис. Ми взяли натхнення від**Ірландії**для створення більш дружньої до розробника мови, якою легко читати і писати. Нова версія Каїра дозволяє писати безпечніший код (вдало введений, право власності та запозичення тощо), а також більш виражений.

Каїра 1.0 також вступає в Sierra, нове проміжне представлення, яке забезпечує перехід**кожен**Каїр, може бути доведено. Це робить Каїр 1.0 особливо добре придатним для використання у такій безрезультатній мережі, як-от StarkNet, де він може забезпечити надійний захист від DoS та стійкість до цензури. Ви можете прочитати більше про Сьєрру в[попередньому повідомленні](https://medium.com/starkware/cairo-1-0-aa96eefb19a0).

## Перший смак!

### Що ви можете зробити сьогодні?

Розробники можуть почати писати, компілювати і тестувати Каїр 1.0 програм! Ми заохочуємо розробників до експериментів з Каїром 1.0 і звикли до нового синтаксису та властивостей.

Оскільки Каїр 1.0 все ще розробляється активно, і нові функції постійно додаються , ознайомтеся з[Каїрським репозиторієм](https://github.com/starkware-libs/cairo/)для останніх оновлень.

### Що далі?

У даний момент Каїр 1. до сих пір відсутні деякі функції, що підтримуються у старій версії Каїра ([детальніше](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md)). Наш наступний етап, очікуваний через кілька тижнів, забезпечить Каїро 1.0 співвідношення функції до старої версії. Тут ви можете слідкувати за прогресом до цього етапу[](https://github.com/starkware-libs/cairo/blob/main/docs/FEATURE_PARITY.md).

### Підтримка Starknet

Написання договорів StarkNet у Каїрі 1.0 підтримується (хоча деякі функції все ще відсутні). Однак StarkNet ще не підтримує розгортання та виконання контрактів на Каїрі 1.0. StarkNet Alpha V0.11.0, заплановані на майбутні тижні, запровадить можливість розгортання і запускати Каїр 1.0 контрактів. Оновлення до версії v0.11.0 ознаменує початок періоду переходу до системи, яка запускає лише Каїр 1.0 контрактів. Період цього переходу закінчиться[Регенезом](https://medium.com/starkware/starknet-regenesis-the-plan-bd0219843ef4), очікував кілька місяців по тому.

![](/assets/0_odxbxeacqdwizlfw.jpg)

### Давайте будемо будувати!

Мета StarkNet - експоненціально масштабувати Ethereum використовує математичну цілісність колишніх мереж, і метою Каїру є зробити цей експоненційний масштаб доступний розробникам. Спеціальні можливості означають мову програмування, яка є ефективною, простою для читання та запису та безпечного використання. Ми сподіваємось, що випуск Каїру 1.0 надихне ще більше розробників на приєднання до StarkNet і масштабу Ethereum для задоволення світового попиту.