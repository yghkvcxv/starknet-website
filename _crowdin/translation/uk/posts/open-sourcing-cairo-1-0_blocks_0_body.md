### TL;DR

* **Каїр 1.0 є відкритим кодом! Це лише перший крок до відкритої сторінки зі стеком StarkNet.**
* Зараз ми презентуємо[перший подивіться](https://github.com/starkware-libs/cairo)у карету 1.0 компілятор. Тепер ви можете почати експериментувати з базовим кодом Каїра 1.0
* Каїр 1.0 в його ядрі дуже схожий на іржу
* Зверніть увагу, що це перший смак, а не реліз. Є більше поліпшень. Перша версія компілятора запланована для початку Q1 наступного року.
* Cairo 1.0 не підтримується в StarkNet, поки що. Додаток буде підтримуватися в StarkNet в Q1 наступному році.

### Вступ

У 2020 році ми випустили[Каїр](https://eprint.iacr.org/2021/1063.pdf)мову програмування, що підтримує перевірені обчислення. Каїр починався як складальна мова і поступово став більш вираженим. Два місяці тому ми оголосили[Каїр 1.0](https://medium.com/starkware/cairo-1-0-aa96eefb19a0), який стосується деяких основних проблем у поточній ситуації:

* Хоча синтаксис Каїра зазнав значного покращення з моменту його створення, досвід розробника завжди може покращитися. Каїр 1.0 - це натхненна повністю типізована мова, що робить написання тієї ж логіки набагато простішим і менш схильним до помилок.
* Існуючий компілятор розробляється в тому ж самому репозиторії, що і для запуску StarkNet, ускладнюючи відстеження змін мови. Cairo 1.0 компілятор записується з нуля, що дозволяє пришвидшити розробку та долучатись до спільноти.
* Усі обчислення тепер заборонені. В даний час програма Каїра може не працювати з певними вхідними даними (наприклад, досягнувши інструкції \`assert 1=2\` в деякій гілці обчислення), що робить обчислення непридатним. З Каїром 1.0 програмами можна знайти в кожній можливій гілці. Це особливо важливо для захисту DOS, і стійкості до цензури в StarkNet.

Сьогодні ми відзначаємо першу віху в досягненні вище цілей, коли ми рухаємо розвиток до громадського репозиторію, і**з відкритим вихідним кодом 1. !**Зараз розробники можуть вперше компілювати та виконувати прості програми Каїра 1.0. Це дозволяє розробникам почати експериментувати з Каїрою 1. і поступово звикли до нових функцій, навіть якщо на цій фазі вони не можуть реалізувати його на StarkNet поки що.

### Наявні можливості

В даний час ви можете компілювати і виконувати основні місцеві програми Каїра. Поки багато вдосконалень синтаксису/мови все ще тривають, це дозволяє використовуватися в Каїрі 1.0 і насолоджуватися оновленням, коли вони приходять.

**Зверніть увагу, що написання контрактів StarkNet все ще не підтримується.**StarkNet синтаксис (змінні для зберігання / виклик договорів/подій та інші системні дзвінки) будуть додані у найближчі тижні.

### Приклад коду

Щоб проілюструвати відмінності між старим синтаксисом і Каїром 1. , ми вирішили показати декілька різних реалізацій/смаків пошуку n-го числа Фібоначчі.

### Приклад I: вирази матчів

У Каїрі 1.0, ви можете використовувати іржаві, як[відповідні до виразів](https://doc.rust-lang.org/rust-by-example/flow_control/match.html?highlight=match#match). Більше не будете боятися операторів "якщо/інакше - це може призвести до відкликання посилань!

![](/assets/code01.png)

### Приклад 2: типи даних

В той час, як Каїр 0 працював з хлопцями і вказівниками, в Каїрі 1.0 ми маємо доступ до комплексних типів даних на мові. Нижче ви можете знайти приклад, який генерує масив з перших чисел Фібоначчі .

![](/assets/code02.png)

Як ви можете бачити вище, а не безпосередньо працювати з вказівками пам'яті, ми використовуємо `Array::<felt>\` тип і \`array_append\`функція.

### Приклад III: структує & право власності

Наступний код ілюструє використання структур в Каїрі 1.0.

![](/assets/code03.png)

> Наступні абзац призначені для раціонерів серед аудиторії. Каїр 1.0 керує пам'яттю таким чином на пил. Зокрема, він використовує концепції[власності і запозичення](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html). Таким чином, отримавши доступ до учасника інструкції \`FibRes` (у цьому випадку, \`результат. Lue\), ми перемістили \`результат, а це означає, що якщо файл не є копійованим, ми не можемо отримати доступ знову до нього через \`результат.index\`. Для подолання цього додайте атрибут \`#\[derive(Copy)]\` типу \`FibResult\`. У майбутніх версіях ми додамо автоматичне знесення інструкцій. Це дозволить перемістити власника одного члена не торкаючись інших (зокрема, наведений вище код буде скомпільувати, навіть якщо \`FibResult\` не має атрибуту копіювання).

**Зокрема, зверніть увагу, що Каїр 1.0 повністю абстрагує оригінальну (не детерміноване читання) модель пам'яті Каїра.**

## Приклад IV: поширення помилки

Цей код обчислює n-е число Фібоначчі, але на відміну від попередніх прикладів, всі дані мають тип uint128. Зауважте, що це вирішує велику болючу точку обробки в Каїрі 0. Тут uint128 (і в майбутньому uint256) є рідними типами.

![](/assets/0_s8bhjf_ade3carmi.png)

Додавання двох 128 бітових цілих може спричинити перекриття. Даний код використовує[Пункт](https://doc.rust-lang.org/rust-by-example/std/option.html)Опція і символ знаку[питання](https://doc.rust-lang.org/rust-by-example/std/result/question_mark.html), щоб обробляти випадок переповнення в одній з проміжних доповнень. Порівняйте це з[поточний](https://github.com/starkware-libs/cairo-lang/blob/9889fbd522edc5eff603356e1912e20642ae20af/src/starkware/cairo/common/uint256.cairo#L31)uint256 синтаксис, де функція \`unit256_check\` повинна була викликати для гарантії звучності. Крім того, у найближчому майбутньому, ми додамо поняття \`panic\` до мови подібний до макросу[паніки](https://doc.rust-lang.org/rust-by-example/std/panic.html)в іржах), і прості помилки, такі як додавання переповненого, будуть автоматично синхронізовані, що означає, що вам не доведеться використовувати \`Option\` або \`? ` під час додавання варень.

## Спробуйте самі

Тепер ви можете компілювати і запустити в даний час підтримувані карета 1.0 програми! Слідуйте за цими інструкціями[](https://github.com/starkware-libs/cairo/tree/main/crates/cairo-lang-runner)щодо використання команди \`cairo-run\`. Зверніть увагу, що під кодом,[Rust Cairo VM](https://github.com/lambdaclass/cairo-rs), розроблений[Lambdaclass](https://lambdaclass.com/), використовується для виконання.

Ви можете знайти більше прикладів щоб допомогти вам розпочати[тут](https://github.com/starkware-libs/cairo2/tree/main/examples). Зверніть увагу, що це лише перший пік розвитку компілятора; через найближчі тижні ми поліпшимо консольний комплекс поруч із компілятором.

## Плани майбутнього

Основна увага до першої версії компілятора, запланованої для початку Q1, підтримує можливість використання StarkNet у Каїрі 1.0. Також ми працюємо над розширенням можливостей Кейро 1.0. Протягом найближчих тижнів ви можете очікувати:

* Можливість StarkNet - написання розумних договорів і використання системних дзвінків.
* Цикли
* Функції нової бібліотеки
* Вдосконалений мовний сервер
* Рідний поняття StarkNet газу

Обов'язково слідкуйте за оновленнями та відстежуйте прогрес компілятора!