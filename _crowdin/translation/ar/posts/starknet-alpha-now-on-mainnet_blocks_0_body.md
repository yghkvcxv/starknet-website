### TL;DR

* ألفا يعيش على مينيت
* وهو يدعم الحساب العام والقدرة على التدوين
* مجتمع سريع النمو، تطوير الأدوات والتطبيقات
* سمات إضافية ستنشر باستمرار في الأسابيع المقبلة
* إخلاء المسؤولية: هذه نسخة ألفا (قراءة الطباعة الدقيقة أدناه)

### مقدمة

يبدأ تشغيل StarkNet Alpha اليوم على معماين إيثيريوم!

StarkNet هو Rollup لامركزي لا يصرح به يعمل كشبكة L2 عبر إيثيريوم. تسمح StarkNet لأي تطبيق أن يحقق مقياساً غير محدود لحسابه، دون المساس بقدرة إيثيريوم على التكوينات والأمان، بفضل اعتمادها على نظام إثبات التشفير الأكثر أمنا وقابلية للتطوير -[STARK](https://starkware.co/stark/). تم بناء StarkNet على لغة البرمجة[القاهرة](https://starkware.co/cairo/)وهي أول درجة إنتاجية تورينغ كاملة von-Neumann على إيثيريوم. وقد تم تطوير كل من القاهرة وستارك داخل المؤسسة من قبل StarkWre، وقدرا جميع تطبيقاتنا من فئة الإنتاج، وقد سويت أكثر من 50 مليون طن و 250 باء منذ صيف 2020.

من بين الميزات الأخرى، تتيح StarkNet Alpha العقود الذكية للحساب العام التي تدعم قابلية الترسين، سواء مع عقود StarkNet الأخرى أو عبر L1<>L2 المراسلة مع عقود L1. يعمل StarkNet Alpha في وضع Rollup، مما يعني أن جميع بيانات فجوة الدولة ترسل على السلسلة.

في يناير/كانون الثاني، شاركنا StarkNet[خريطة الطريق](https://medium.com/starkware/on-the-road-to-starknet-a-permissionless-stark-powered-l2-zk-rollup-83be53640880). وفي حزيران/يونيه، دخلت شركة StarkNet Alpha مباشرة على شبكة اختبار عامة، وتم تحديثها بمميزات جديدة على أساس متداول. ويسعدنا أن نكون قبل الموعد المحدد، ويرجع الفضل في ذلك جزئيا إلى اعتمادنا على برنامج ستارك/القاهرة المتشدد في إنتاجنا من البرمجيات (STARK/القاهرة.

### كيف يجب عليك معالجة شبكةStarkNet Alpha؟

أولا، بحرص شديد، كما أن تسمية “ألفا” موجودة لسبب ما. يتوقع التغييرات والإصلاحات والتحسينات المقبلة. StarkNet Alpha لم يتم تدقيقه بعد، وقد نؤجل عملية مراجعة الحسابات هذه إلى أن تستكمل الشبكة أكثر من ذلك (نقرأ إخلاء المسؤولية في نهاية هذه الوظيفة للحصول على مزيد من المعلومات).

وبصفة عامة، فإننا نتبع المسار الحذر والمعقول الذي حدده زملاؤنا المتفائلون، وهو: هيئة التحكيم والأمثل: اطلاق الشبكة باستخدام متسلسل واحد، وتطبيقات القائمة البيضاء من أجل ضمان فهم مطوريها للمخاطر التي ينطوي عليها الأمر. ولا نزال ملتزمين التزاما كاملا بتحقيق اللامركزية الكاملة لـ StarkNet.

وكيف يجب عليك أن تتعامل مع اقتصاد StarkNet Alpha؟ ستبدأ ألفا بدون رسوم معاملة. وستدخل الترقية التالية، التي لا تتجاوز بضعة أسابيع، آلية للرسوم - وسنتشاطر المزيد من التفاصيل في وظيفة منفصلة.

### بدء البناء

ندعوك لبدء كتابة تطبيقاتك الخاصة عبر StarkNet إما بالتحقق من (الجديدة!) [الموقع](http://starknet.io/)، أو القفز مباشرة إلى[البرنامج التعليمي](https://starknet.io/docs/).

إذا كنت على استعداد للنشر، يرجى اتباع هذه العملية[onboarding](https://forms.reform.app/starkware/SN-Alpha-Contract-Deployment/l894lu)؛ تم إنشاؤها لضمان أن يكون جميع المطورين على علم تام بالحالة الأولية للنظام.

### النظام الإيكولوجي

على مدى الشهرين الماضيين، شهدنا نموا مذهلا في حجم ونشاط مجتمع StarkNet، التي تتجمع في[ديسكورد StarkNet](https://discord.gg/uJ9HZTUk2Y). العشرات من المطورين - الفرق والأفراد - عبر النظام الإيكولوجي للبلوكشين يساهمون في هذا الجهد. (انظر إبراء الذمة في نهاية هذه الوظيفة)

#### أدوات المطور

* يقوم OpenZeppelin بتحديد العقود القياسية. [repo](https://github.com/OpenZeppelin/cairo-contracts/tree/main/contracts)و[مناقشات](https://github.com/OpenZeppelin/cairo-contracts/discussions)تستحق المتابعة
* [Warp](https://github.com/NethermindEth/warp)Solidity->Cairo transpiler، الذي طورته هولندا
* شريحة[HardHat plugin](https://github.com/Shard-Labs/starknet-hardhat-plugin)و[StarkNet Devnet](https://github.com/Shard-Labs/starknet-devnet)
* تقوم آربنج بتطوير أدوات، بما في ذلك جهودها المشتركة على StarkNet.js، إلى جانب[Sean Han](https://twitter.com/seanjameshan)، منشئها

#### البنية التحتية

**مستكشف الكتلة**:

* [مشروع Voyager](http://voyager.online/)من هولندا
* [Eth.tx](https://ethtx.info/)سوف يقدم تحليل دعم وعرض مفصل لمعاملات StarkNet

**العقد الكاملة**: جهدان جاريان : الأول هو مشروع فيرميون بقيادة إيريغون، أما المشروع الآخر فهو مشروع[Pathfinder](https://github.com/eqlabs/pathfinder)بقيادة التوازن.

**المحفظة**:

* [ArgentX](https://github.com/argentlabs/argent-x)هو ملحق متصفح تم تطويره بواسطة Argent، متوفر بالفعل للاعتبارات.
* حل إدارة مفتاح توروس جاهز لـ StarkNet
* الدفتر Ledger تطوير تطبيق StarkNet أصلي؛ سيتاح قبل نهاية العام

**مراجعة حسابات القاهرة**: توافق آراء ديليجينس، تريل بيتس، بيكشيلد، وشركة ABDK إما أنها تقوم بالفعل بمراجعة حسابات القاهرة، أو على وشك البدء قريبا

**خدمات API**: بعد أن يتم توفير عقدة كاملة لـ StarkNet ، سيتم تقديم خدمات API عن طريق الرقم، و Chainstack، و Infura

**المفهرس**: سنعمل على دمج TheGraph للعمل مع StarkNet مع فريق الشكل

### الطريق إلى الأمام

وفي الأسابيع والأشهر القادمة، سنقوم برفع مستوى ألفا بالقدرات التالية:

* آلية تحسين العقود
* آلية الرسوم
* الأحداث
* إضافة الأعراض المفقودة (get_block_number, get_block_timestamp, والمزيد)
* نسخة الهيكل العظمي من Volition
* وأكثر من ذلك بكثير …

لمراقبة هذا الجهد على أساس مستمر، راجع[خريطة الطريق المؤقتة للمميزات](https://www.notion.so/starkware/StarkNet-Alpha-Features-Tentative-Roadmap-f2b8f5f25a2d4d1cb3265fb82a098c51).

وإذ ننظر إلى ما هو أبعد من ذلك، نواصل الاستثمار بكثافة في البحث النشط على جبهات متعددة (انضم إلى جهد[شامانز](https://community.starknet.io/)) ):

* اللامركزية
* القياس
* توافر البيانات
* حفز غير مسموح

### استدعاء للعمل

* بدء كتابة العقود على StarkNet Ttestnet بدون إذن على Goerli
* انضم إلى[Discord StarkNet](https://discord.gg/uJ9HZTUk2Y)
* الانضمام إلى مكالمات المجتمع
* حضور أول مؤتمر قمة للنظام الإيكولوجي[StarkNet](https://www.eventbrite.com/e/starknet-ecosystem-summit-2022-tickets-206671880157)(Jan 27–28 2022 Stanford CA)
* انضم إلى[StarkNet Shamans](https://community.starknet.io/)للغوص أعمق في تحديات البحث

### إخلاء المسؤولية

***StarkNet Alpha هو نظام جديد ومعقد لم تتم مراجعة حساباته بالكامل. مثل جميع أنظمة البرمجيات المعقدة، قد يحتوي نظام StarkNet على أخطاء قد تؤدي في الحالات القصوى إلى فقدان جميع أموالك. إذاً,***تردد بعناية و هز!******

*والنظام الإيكولوجي لشبكة StarkNet، مجموعة كبيرة وسريعة النمو من الأفرقة المستقلة والأفراد، ليس لشركة StarkWare أي رقابة عليها ولا تتحمل أي مسؤولية. وأي مشروع من المشاريع التي وضعها أعضاء النظام الإيكولوجي قد يحتوي على أخطاء يمكن أن تؤدي في الحالات القصوى إلى فقدان جميع أموالك. وعلاوة على ذلك، ومع نشر عقود ذكية أكثر، تزداد احتمالات حدوث أعطال ضارة غير مقصودة بل وحتى عمليات الاحتيال الضارة وسحب السجاد. لذا، تعامل مع جميع العقود الذكية على StarkNet كما تعامل العقود الذكية على Ethereum، واستخدم فقط تلك التي لديك سبب وجيه للثقة بها كآمنة.*