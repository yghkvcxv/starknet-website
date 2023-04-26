### TL;DR

* Рекурсивне доведення залишається в інтернеті, масштабування додатків StarkEx, а також StarkNet з одним доказом
* Це збільшує масштаб, і приносить користь вартості, і латентність (рідкісне і захоплююче виникнення масштабів і запізнень, що рухається в тандемі, а не бути компромісами)
* It встановлює стадію для L3 та інших переваг, прочитайте запис у блозі на[Рекурсивне доведення](https://medium.com/@starkware/recursive-starks-78f8dd401025). Це круто речі 😉

### Масштабувати!

Рекурсивні доведення - що працюють від загальних обчислень Каїра - зараз у виробництві. Це знаменує потужний приріст потужності L2 масштабуванням із STARK. Швидко ви отримаєте мультиплікаційне збільшення кількості транзакцій, які можуть бути записані в Ethereum через одне значення.

До цих пір масштабування STARK спрацювало шляхом «розгортання вгору» десятків, а то й сотні тисяч транзакцій в єдину доказу, це було записано Етірому. З рекурсією багато таких доведення можуть бути «згорнуті» в одне докази.

Зараз цей метод розробляється для безлічі програм на базі Каїр: додатки, що працюють на StarkEx, Minecraft SaaS StarkWare, та StarkNet, бездозволене розгортання на екрані.

### Ця історія досі

З першого підтвердження в мережі інтернет, у березні 2020 року, наступні події сформували як використовуються СТАР.

### Масштаб на основі СТАРУ

У червні 2020 року перше рішення масштабування СПОРТ —[StarkEx](https://youtu.be/P-qoPVoneQA)— було розгорнуто на Ethereum Mainnet. StarkEx має постачальника, який виконує великі обчислення за межами ланцюга і веде до того, що вони тверджують про вірність, та перевіряє, що підтверджує цей ланцюг доказів. Обмеження для першого розгортання були "рукописними" інженерами StarkWare, тим самим обмежуючи швидкість функції для StarkEx. Ми дійшли висновку, що мова програмування для підтримки доведення загальних обчислень потрібна - Каїр.

#### Cairo

Влітку 2020 року Cairo[з’явився в Ethereum Mainnet](https://medium.com/starkware/hello-cairo-3cb43b13b209). Каїр - це Алгебраїчна програма відтворення ЦП (AIR), і включає єдиний AIR, який перевіряє набір інструкцій цього "CPU". Він відкрив двері для доведення програмування для складнішої бізнес-логіки, для довільних обчислювальних операторів, а за це робити швидше і безпечніше. Каїрська програма може довести виконання логіки єдиної програми. Але Каїрська програма також може бути об'єднанням багатьох таких додатків - SHARP.

#### ПОДІЛИТИСЯ

SHARP - SHARed Prover - забирає транзакції з декількох окремих додатків і доводить все це в одному ЗА GPS. Додатки поєднують свої пакети транзакцій, заповнюючи можливості STARK-профілів швидше. Транзакції обробляються за покращеною ставкою та запізненням. Наступна межа : Рекурсивні Кореї, а не просто деяку логіку, закодовану складністю, а скоріше**загальне обчислення**.

Щоб зрозуміти повну вигоду Рекурсивного зондування це варто трохи більше зрозуміти про те, як (нерекурсивне) доводилося доводити себе SHARP до цих пір. Малювання 1 зображує типовий нерекурсивний потік:

![Малювання 1: Типовий не рекурсивний потік доведення](/assets/recursive_starks_01.png "Малювання 1: Типовий не рекурсивний потік доведення")

Тут, заяви надходять з часом. Коли досягнуто певного порогу (або часу), створюється велика комбінована інструкція (a.k.a Train). Ця комбінована заява доведена лише один раз всі окремі твердження були отримані. Це підтвердження займає багато часу для підтвердження (приблизно сума часу, необхідна, щоб довести кожну заяву індивідуально).

Переконання надзвичайно великих операторів з часом обмежується доступними ресурсами, такими як пам'ять. Попередня рекурсія була обмеженою бар'єром для масштабування хвороби (STARK).

### Що таке Рекурсивне розслідування?

З результатами STARK необхідно час аби довести твердження майже лінійне, але потрібен час, щоб виконати твердження. Крім того, якщо подання твердження потребує часу, а потім перевірка доказів приймає приблизно журнал (T), який зазвичай називають "логарифмічним стисненням". Іншими словами, з СТАП ви проводите набагато менше часу на перевірку твердження, ніж на підрахунку.

[Каїр](https://starkware.co/cairo/)дозволяє висловлювати загальні обчислювальні оператори, які можна перевірити доказами STARK та перевіреними відповідними верифікаторами STARK.

Тут є можливість здійснити[рекурсію](https://en.wikipedia.org/wiki/Recursion)викидається в: так само, як ми пишемо Каїрську програму, яка доводить правильність тисяч транзакцій, ми також можемо написати Каїрську програму, яка перевіряє вирази STARK. Ми можемо створити єдиний доказ атестації про достовірність декількох доказів "поза потоком". Це те, що ми називаємо Рекурсивним Прованням.

Через логарифмічну стиснення і приблизно лінійний час доведення, підтвердження особи у STARK потребує порівняно короткого часу (очікується, що він буде найближчим часом).

Реалізуючи Recursion, SHARP може виявитись заявою на їх прибутті. Їх докази можуть бути об'єднані знову і знову в рекурсивні доведення різних візерунків долі, в певний момент отримане підтвердження подається до угоди на ланцюговому перевіряючому договорі. Типовий шаблон змальований в малюванні 2:

![Малювання 2: Типовий рекурсивний потік доказу.](/assets/recursive_starks_02.png "Малювання 2: Типовий рекурсивний потік доказу.")

### Миттєві переваги Рекурсивних

#### Скорочені витрати на ланцюжок

Через кажан ми досягаємо "стиснення" кількох доведення в один, що передбачає нижчу вартість перевірки мережі за кожну транзакцію (де кожна заявка може включати багато транзакцій).

З рекурсією, бар'єром обчислювальних ресурсів (наприклад, пам’яті), яка обмежена кількість доказів до цього часу, буде ліквідована, оскільки кожна з обмежених операторів розміру може бути виявлена окремо. Отже, при використанні рекурсії ефективний розмір потягу майже необмежений, а вартість однієї трансакції може бути знижена за рахунок розмірів замовлень.

На практиці зменшення залежить від прийнятної затримки (і швидкості, з якою надходять транзакції). Крім того, оскільки кожне твердження як правило, супроводжується і деяким виводом, такими як дані по ланцюгу, є обмеження в кількості даних, які можна записати у ланцюжку разом з одним доказом. Тим не менш, зниження витрат за порядком величини і навіть краще є тривіально досяжним.

#### Зменшена затримка

Рекурсивний шаблон сприяння зменшує латентність доведення великих поїздів. Це результат двох факторів:

1. Вхідні оператори можуть бути перевірені**паралельно**(на відміну від доведення надзвичайно великої комбінованої команди).
2. Немає потреби чекати останньої заяви у потязі, щоб почати довестися. Швидше, доведення можна поєднувати з новими твердженнями при прибутті. Це означає, що затримка останньої заяви приєднання до поїзду, приблизно в час, необхідний для того, щоб довести, що дуже остання заявка плюс час, необхідний для того, щоб довести рекурсивну заяву про Верифікацію (що свідчить про всі ті твердження, які вже "на борті" цього конкретного Трену).

Ми активно розвиваємо і оптимізуємо приховану затримку доведення рекурсивної команди Verifier. Ми очікуємо що це замовлення на кілька хвилин в кілька місяців. Отже, високоефективний SHARP може запропонувати затримки з кількох хвилин до кількох годин, в залежності від компромісу та вартості мережі за транзакцію. Це означає значне поліпшення до співучасті SHARP.

#### Фасилітую L3

Розробка рекурсивної заяви Verifier в Каїрі, також відкриває можливість подання доказів StarkNet, так як дане твердження можна застосувати в смарт-контракті StarkNet. Це дозволяє будувати[L3 розгортання на верхній частині загальнодоступної StarkNet](https://medium.com/starkware/fractal-scaling-from-l2-to-l3-7fe238ecfb4f)(L2 мережі).

Рекурсивний шаблон також поширюється на агрегацію доказів L3, щоб бути перевірений одним доказом на L2. Отже, гіпермасштабування і досягається.

### Більш тонкі переваги

#### Застосування рекурсії

Рекурсія відкриває ще більше можливостей для платформ та застосування бажають збільшити масштаб своїх витрат та ефективності.

Кожна перевірка STARK надає підтвердження до валідності заявки, яка була застосована до певного вводу, відомого як «публічне введення» (або «результат програми» в Каїрських умовах). Концептуально рекурсія STARK стискає два докази з входами*два*у докази*один*із двома входами. Іншими словами, хоча кількість доказів зменшується, кількість входів залишається постійною. Ці вхідні дані зазвичай використовуються додатком, щоб оновити певний стан на L1 (наприклад наприклад . . для оновлення права Root стану, або виконання зняття на ланцюжку).

Якщо дозволяє рекурсивний оператор*перевірити*, тобто розпізнає семантику самої програми, воно може стискати два корективи на один*і*поєднувати два входи на один. Отримана заява свідчить про валідність вхідної комбінації на основі семантики програми, Отже, назва Applicative Recursion (див. "Малюнок 3", наприклад)..

![Малювання 3: Прикладний приклад](/assets/recursive_starks_03.png "Малювання 3: Прикладний приклад")

Тут Заява 1 свідчить про стан оновлення від А до А до Ті 2 свідчить про подальше оновлення з B до C. Висловлення Положення 1 і Ті Положення 2 можуть бути об'єднані в третю інструкцію, що свідчить про пряме оновлення з А до С. Застосовуючи подібну логіку рекурсивно, можна суттєво зменшити витрати на оновлення штатів, при цьому при необхідності остаточності.

Ще одним важливим прикладом застосування є стискання даних розгортання з кількох доведень. Наприклад, для розгалуження дійсності, таких як StarkNet, всі оновлення сховища на L2 також включені як дані передачі по L1, щоб забезпечити доступність даних. Однак, немає необхідності надсилати декілька оновлень для одного сховища елементу, для доступності даних необхідно лише остаточне значення транзакцій. Цю оптимізацію вже виконано в межах*одного*блоку StarkNet. Проте, породжуючи підтвердження на блок, Applicative Recursion може стискати дані для розгортання через*кілька блоків*L2. Це може призвести до значного зниження витрат, що дозволить зробити більш короткі інтервали блоків L2, без пожертвування масштабами оновлення L1.

Нотатка: Застосоване рекурсія може поєднуватися з рекурсією програми як зображено раніше. Ці дві оптимізації є незалежними.

#### Зменшена складність відкладених онлайнерів

Складність перевірки STARK залежить від тих тверджень, створених для перевірки. Зокрема, для заяви в Каїрі, складність перевірки залежить від конкретних елементів, дозволених в Каїрській мові, і, конкретніше, підтримувані конструкції (якщо ми використовуємо метафору процесора для Каїру, тоді побудувати речі є еквівалентом мікросхем в ЦП: обчислення, що виконуються так часто, що вони потребують власних оптимізованих обчислень).

Каїрська мова продовжує розвиватись і запропонувати все більше і більше корисних будівель. З іншого боку, Рекурсивний Верифікатор вимагає використовувати лише невелику підмножину цих вбудованих елементів. Отже, рекурсивний SHARP може успішно підтримати будь-яку заяву в Каїрі, підтримуючи повну мову в рекурсивних перевірках. Зокрема, підтвердження рекурсивних доведення L1 потребує лише перевірки рекурсивних доказів, і таким чином може бути обмежений стабільнішим підмножиною Каїрської мови: L1 Verifier не повинен бути в курсі останніх і найбільших вбудованих систем. Іншими словами, перевірка постійно розвивається складних тверджень, що розробляються до L2, залишивши L1 Verifier для перевірки простіших і стабільніших команд.

#### Зменшений слід обчислення

До рекурсії можливість сукупності кількох заяв в одному доказі була обмежена максимальним розміром твердження, яке можна було б довести за наявними обчислювальними екземплярами (і часом можна було б сформувати такі докази).

З рекурсією більше не потрібно виявляти такі надзвичайно великі заяви. В результаті менше, можна використовувати менш дорогі та більше доступних обчислювальних екземплярів (хоча більше з них може знадобитися, ніж у великих монолітних провінціях). Це дозволяє розгорнути екземпляри постачальника в більшій фізичному та віртуальному середовищах, ніж раніше можливо.

### Summary

Рекурсивні доведення загальних обчислень тепер служать декільком виробничим системам, включно StarkNet, на Mainnet Ethereum.

Переваги рекурсії будуть реалізовані поступово, оскільки вони продовжують дозволяти нові вдосконалення, і незабаром це забезпечить гіпершкали, скорочення газових зборів та покращить затримку, розблокувавши потенціал паралелізації.

Це принесе значну користь по ній та затримці разом з новими можливостями, такими як L3 та рекурсивна рекурсія. Подальша оптимізація Рекурсивного Верифікатора триває і навіть краща продуктивність і вигоди, які будуть надані з часом.



**Gidi Kaempfer**, голова Core Engineering, StarkWare