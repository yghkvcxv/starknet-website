בפוסט זה אנו צוללים עמוק יותר לתוך העיצוב של StarkNet Token, לוח הזמנים שלו וציר הזמן הצפוי.

### שיקולים

העיצוב של StarkNet Token מעוצב על ידי הצורך להפעיל רשת המורכבת מ-(i)**משתמשים**של StarkNet, (ii)**מפעילים**- אנשים המספקים לרשת משאבי מחשוב המבצעים רצף של עסקאות, יצירת הוכחות STARK, וספקי אחסון לטווח ארוך, ו-(iii)**מפתחים**תוכנות כתיבת לתשתית שלה ולאפליקציות הפועלות עליה.

מנגנוני מבנה העמלות והטבעת אסימונים צריכים להיות:

* אוטומטית במידה רבה, בניגוד למבוסס על התערבות אנושית משמעותית
* ידוע ונבדק במערכות בלוקצ'יין אחרות
* פשוט לנתח ולהסביר; שָׁקוּף
* עמיד בפני מניפולציות ספקולטיביות וגימיפיקציה שאינה יוצרת ערך
* נחשב לבעל חווית משתמש טובה (UX)

העדפות אלו יעצבו את המנגנון להקצאת אסימונים מעמלות טביעה חדשות ועסקאות המשולמות על ידי המשתמשים:

**מפעילים**מבטיחים את החיים המתמשכים של StarkNet ומספקים את הביצועים האיכותיים של הפרוטוקול שמשתמשים דורשים.

**מפתחים**בונים ומתחזקים את התוכנה המשמשת את המפעילים לאבטחת הרשת, והם יוצרים אפליקציות שמשפרות את הפונקציונליות של הרשת עבור המשתמשים. כתוצאה מכך, חלק מהעמלות והטביעה החדשה יועברו למפתחי חוזים חכמים ולמפתחי ליבה, כדלקמן:

* **מפתחי חוזים חכמים:**פרוטוקול StarkNet יכול למדוד באופן אוטומטי את הערך המסופק על ידי חוזים חכמים, באמצעות עמלות L1 ו-L2 ששולמו על ידי המשתמשים בחוזים אלה. פרוטוקול StarkNet יקצה באופן אוטומטי חלק מהעמלות והטבעה חדשה מתמשכת למפתחי חוזים חכמים. חוזים חכמים המציעים ערך רב יותר למשתמשים - הנמדדים בעמלות המשולמות עבורם - יקבלו חלק גדול יותר מהאסימונים שיוקצו למטרה זו.
* **מפתחי ליבה:**לפרוטוקול StarkNet אין דרך אוטומטית לכמת את התרומה של מפתחי ליבה, כגון אלה שכותבים קוד למוכיחים, רצפים, צמתים מלאים וכו'. כתוצאה מכך, הקצאת סמלים למפתחי ליבה כאלה ולתורמים אחרים שתרומתם אינה ניתנת למדידה על ידי הפרוטוקול דורשת בהכרח שיקול דעת אנושי מסוים. יוקם מודל ליישום זה באופן העולה בקנה אחד עם מטרת הביזור.
* המנגנון המדויק להקצאת אסימונים מהטבעה חדשה ועמלות לשני סוגי המפתחים טרם נקבע. עקרונות העיצוב יכללו אנטי gamification ושקיפות.

### הקצאה ראשונית של אסימוני StarkNet

עשרה מיליארד אסימונים הוטבעו מחוץ לשרשרת על ידי StarkWare. להבהרה: אסימוני StarkNet אלה אינם מייצגים הון עצמי ב-StarkWare וגם אינם מספקים זכות השתתפות כלשהי ב-StarkWare או מעניקים כל זכות תביעה מ-StarkWare. היצע האסימונים במחזור יגדל עם הזמן עם הטבעת אסימונים חדשים לפי הפרוטוקול, בהתאם ללוח זמנים שיקבע על ידי הקהילה בשלב מאוחר יותר.\
*האספקה במחזור לא יכולה, אם כן, להישאר קבועה.*

ההקצאה היא כך:

**17%**— משקיעי סטארקוור

**32.9%**— תורמים מרכזיים: StarkWare ועובדיה ויועציה, ושותפי מפתחי תוכנה StarkNet

**50.1%**שהוענקה על ידי StarkWare לקרן, המיועד כדלקמן:

* **9%**- הוראות קהילה - עבור אלה שביצעו עבודה עבור StarkNet והפעילו או פיתחו את הטכנולוגיה הבסיסית שלה, למשל באמצעות שימוש בעבר במערכות StarkEx L2. באופן מכריע, כל הוראות הקהילה יתבססו על עבודה ניתנת לאימות שבוצעה בעבר. לדוגמה, במידה והוראות קהילה יינתנו למשתמשי StarkEx בעבר, ההקצאות ייקבעו על סמך שימוש שניתן לאימות בטכנולוגיה של StarkEx שהתרחש**לפני 1 ביוני 2022.**
* **9%**- הנחות קהילתיות - הנחות באסימוני StarkNet ל**חלקית**מכסים את עלויות הכניסה ל-StarkNet מ-Ethereum. כדי למנוע משחקיות, הנחות קהילתיות יחולו רק על עסקאות המתרחשות**לאחר**הוכרז מנגנון ההנחה.
* **12%**- מענקים עבור מחקר ועבודה שנעשתה לפיתוח, בדיקה, פריסה ותחזוקה של פרוטוקול StarkNet
* **10%**— עתודה אסטרטגית, למימון פעילויות של מערכת אקולוגית המתואמים עם המשימה של הקרן כפי שהוסבר ב[הפוסטים הקודמים](https://medium.com/@starkware/part-2-a-decentralization-and-governance-proposal-for-starknet-23e335645778)בסדרה זו.
* **2%**- תרומות למוסדות וארגונים נחשבים מאוד, כגון אוניברסיטאות, ארגונים לא ממשלתיים וכו', כפי שהוחלט על ידי מחזיקי אסימון StarkNet והקרן.
* **8.1%**לא מוקצה — האוצר הלא מוקצה של הקרן קיים כדי לתמוך עוד יותר בקהילת StarkNet באופן שיוחלט על ידי הקהילה.

כדי להתאים את התמריצים ארוכי הטווח של תורמי הליבה ומשקיעי הליבה עם האינטרסים של קהילת StarkNet, ובעקבות נוהג מקובל במערכות אקולוגיות מבוזרות, כל האסימונים שיוקצו לתורמי הליבה ולמשקיעים יהיו כפופים לתקופת נעילה של 4 שנים, עם שחרור ליניארי וצוק של שנה.

![](/assets/1_qcosthgskfd-q6bn3yzghq-1.png)

### האם יש דרך לקבל אסימוני StarkNet?

התשובה הקצרה היא כן, אבל אין קיצורי דרך לקבלת אסימונים.

הקצאת אסימון StarkNet ושוק העמלות שלה ועיצוב ההטבעה החדש נותנים עדיפות למפתחי תשתיות ליבה ו-dApps, כמו גם לאחרים התורמים לאבטחה ולבריאות של המערכת האקולוגית. מה זה אומר בפועל ביחס לאסימון?

אם אתה מפתח וכבר כתבת תוכנה עבור תשתית StarkNet, או עבור חוזה חכם, המוערכים באמת ומשמשים את משתמשי הקצה של StarkNet, אז אתה יכול לצפות לקבל אסימונים באופן אוטומטי דרך הפרוטוקול. אחד מאמצעי ההגנה הרבים נגד gamification של מנגנון זה הוא שהעמלות שמקבלים מפתחים יהיו נמוכות בהחלט מהעמלות שמשלמים המשתמשים.

מפתחים עשויים גם לקבל מענקים סמליים עבור עבודה שנעשתה לפיתוח, בדיקה ותחזוקה של פרוטוקול StarkNet. כל מענק כזה ייקבע בבוא העת על ידי הקרן בהתאם לייעודה.

אם אתה מפתח בלוקצ'יין שמאמין ש-StarkNet היא התשובה לצרכי קנה המידה של Ethereum, אנו ממליצים לך ללמוד עוד על[StarkNet](https://starknet.io/)ושפת התכנות שלה,[Cairo](https://www.cairo-lang.org/), ולהתחיל לפתח חוזים חכמים משלך.

אם אתה משתמש קצה, השתמש ב-StarkNet - אבל רק מכיוון שהוא משרת את הצרכים שלך היום. השתמש בו עבור אותן עסקאות ויישומים שאתה מעריך,*לא בציפייה לכל תגמול עתידי של אסימוני StarkNet.*כאשר יוכרזו הוראות קהילתיות, הן יתייחסו רק לצילומי מצב שהתרחשו לפני תאריך ההכרזה, ויסננו ולא יכללו שימוש שנחשב על ידה כניצול לרעה והשתוללות של הרשת, בהתבסס על המידע הזמין באותה עת. נקודה בזמן. כאשר נהוגות הנחות קהילתיות, הן לעולם לא יחולו על עסקאות שהתרחשו לפני שהוכרז ההנחה, ולכן ביצוע עסקה היום בציפייה להנחה עתידית הוא חסר תועלת.

### הערות סיכום

בניית רשת פתוחה פירושה אימוץ של הלא נודע. האינטרנט, הביטקוין והאת'ריום, הומצאו על ידי חדשנים שהאמינו שהכלים שלהם עשויים לשנות את העולם, אבל לא ממש ידעו איך. בענווה, אנו מקווים שהיכולת של StarkNet להרחיב את הבלוקצ'יין תהיה טובה עבור Ethereum וטובה עבור רשת מבוזרת. אנחנו לא יכולים לדעת מה ייבנה. אבל אנחנו מאמינים ש-StarkNet מעמידה יכולת טכנולוגית יוצאת דופן בידיה של קהילה יצירתית, ואנו מקווים לראות את הקהילה הזו משתמשת בה במספר עצום של דרכים, רבות מהן עדין בלתי נתפסות.