// Git hub bu online store yani hamma koraoladigan va foydalanaoladigan online store

// Branch bu katta store yani hamma kurish imkoniyatga ega store unda hamma yuklab oladi 
// Branch bu filialga oxshagan  narsa branchlarda 
// branchdan branchga otish uchun git checkout master 


// 1 git add . bu osha papkani qolga olish 
// 2 git commit -m 'darslik'
// git push origin master yani branchni nomi yoziladi


// Pull  
// 1- git pul origin branchname // Pull  

// Repository 
// 1 git init 
// 2 git remote add origin https://github.com/SardorbekDevelop/Workin.git
// 3 git remote -v
// 4 git add .
// 5 git commit -m 'comment'

// Repository 
// 1 git init 
// 2 git remote add origin https://github.com/SardorbekDevelop/Workin.git
// 3 git remote -v
// 4 git add .
// 5 git commit -m 'comment'


// gut pull origin (navbar) yani branchdan branchga malumotni olish uchun shuni yozsak bishqa branchdagi maluotqmzni hammasi    masterga otadi 




////////////    R   E   A   C   T        ///////////////
////////////    R   E   A   C   T        ///////////////
////////////    R   E   A   C   T        ///////////////
////////////    R   E   A   C   T        ///////////////

// react bu hamma foydalanishi mumkin bolgan kutubxoba  
// nmaga react tez ishlaydi ? - single page application
// reactda tortta asosiy hususiyat bor 1-vertual dom borligi  2-unidirectional data flow 3-components 3server Side rendering


// 1 Virtual dom - rerender bolishini oladi yani vertual dom ishlatmasak biz ozgartradgn qismi ozgarmasda hammasini boshidan chizib kegn osha joyi ozgaradi
// real dom bn vertualdomni farqi real domda child ozgarsa parentga tasiq qiladi verttualda esa tasir qilmaydi 
// 2 component qism qismga bolib ishlashga aytiladi 
// 3 unidirectional data flow parentda childga malumot keladi lekin childddan parentga malumot bormedi 
// 4 server Side Renderending bu beceknd tomondan manikulyatsiya qilib ekranga chiqarishga aytiladi buning afzalliklari data tez yuklanb becekndga borib kelib tez ekranga chiqadi biz bajarga amallarni sekin birinma ketn qilib utrmedi 

// babel react  bu yangi avlod yani brauzer eskitta bor  biz yozgan kodni javascript kodiga aylantrish yani javascriptga uzini tiliga otkazb buyruq beradi  





///////////  K I R I SH ///////////////

// npx create-react-app (papka nomin) yani papkani ochish create qilish
// git ignore  file  buni icida biz githubga push bolmaydiganlar turadi yani ignore 
// readme.md esa qollanma yani reactda qandey foydalnishmz haqida qisqacha qollanma 
// npm run start yani proektni yurgizb beradi va avtamatik tarzda yangilab turadi huddi htmlda golivega oxshab


// package.json tasavvur qileli proekt mashina moshinani texpassporti boladi rangi qanaqa matori qande va hokazo
// dependencies  reactda qandey kutubxonalar ishlatganlarmz turadi
// scripts aynan qaysi buyruqni beryotkanmzni aniqlab berib turadi

// package-lock.json biz kutiubxonalar ishkatganmz bu fileda esa bizga internetdagi manzilin olib kelib beradi 

// public bunda root bor va react single page application deyilishini sababi ham shu root degan html papkaga hamma malumotlar kelib joylashadi


//src bunda npm start degan vaqtmzda buni icidagi index js filemz yuradi 
// index js da create root qilib publicdagi root degan html fileni yasab olyaopti
// render bu ekranga chiqarish yani renderni icida boladi ekranga chiqadigan malumotlarmz 
// root uziga bitta parametr  oladi  yani hamma narsamz renderda iciga bir divga oralga bolishi kerak yoki bitta html kodi yozishmz kerak 
// reactstricmode bu yani ogohlantrb turadi eski malumot ishlatyapsn seni proektninga tasiri bor deb yozsak ham boladi strict modeni yozmasak ham

//  export agar bir xil nomlar kelib qolsa biz Card as Cards deb nomini uzimz xoxlagandek bervolsak boladi 

// this.props.title yni props bu boshqa bir komponentda turib boshqa bir componentda malumotni tutib olishga aytiladi va qande nom bnn pros jonatga bolsak shu nom bn tutib olamz 

//  children bu  closing teglaarni icida yozgan narsalarmzni this.props.children qilib tutib olamz 


// extends bu boshqa bir classdagi hususiyatlarni methotdlarni uzida ishlatolashga imkon beradi 

// constructor qaysi biriga bersak parametr yuboraolish uchun ishlatamz (props)


// super (props ) bu ham qoida yozilishi kerak 

// constructor bu doim yozgan paytmzda qayerda yozilishdan qattiy nazar birinchi yuradi 

// setState asinxron funksya emas callvacbka oxshab kyuga otadi 

// CRUD

 //////////                U  S  E      S  T  A  T  E             //////////
 //////////                U  S  E      S  T  A  T  E             //////////

 
// 1  Usestate birinci elemnti arrey ikkinchi funksya boladi
// 2  use stateda bergan qiymatmz birinchi paramaterga teng yani arrayga
// 3 ikkinchi elementi this.setState bn bir xil vazifani bajaradi yani qiymatni ozgartiradi
// 4 malumotlarmzni chiqarmoqchi bolsak {} qavsda yozamz this ishlatilmedi arrowda
// 5 yani javascriptda organganmzde arrow funktion da this ishlatilmedi
// 6 useState bitta clean code yani qoida emas lekn hamma ucuu  odat va tushnarli bulib qolgan usestate ikkinchi paramterga
// birinchi paramaterga mos kelishi ucun set qoshib yozsak szni codiz tushinarli boladi
// 7 endi countni ozgartrmoqchimz setcount deymzda count + 1 deb funksya yozamz
// 8 va yana bir qoida Hooksda biz componentni nomini kicik harfda yozaolmemz
// 9 inputni icidagi qiymatni olish ucun ham classdagindek setTitlega beramz qiymatni va inputdagini chiqarsh ucun titleni pasdan beramz
// 10 props bu yerda tepada ocgan compinentmzda () oddiy qavsini icida propsni beramz va qayerda props kerak bolsa props. nomini yozamz boldi



 //////////                U  S  E      E  F  F  E  C   T             //////////
 //////////                U  S  E      E  F  F  E  C   T             //////////


 // 1 UseEffect componentni icidagi birorta state ozgarganida yoki prop kelsa ana shu use Effectni uzi ishledi
// 2 UseEffectni bir tort hil caseda ishlataolamz
// 3 UseEffect doim callback funksya sifatida ishlatiladi
// 4 Case 1 biz stateni ozgartamzmi inputga malumot yozamzmi bizda case 1 ishledi
// 5 Case 2 biz beckenddan malumot keladi yani biz case ikkinchini ishlatshmz ucun
// ikkinchi paramater qoyishmz kerak shunda case ikki boladi
// yani birinchi paramater callback funksya ikkinchisi ess arrey arrey qoymasak
// yani ikkinchi paramter bolmasa bu birinchi casee bolib qoladi
// 6 case ikki component yurganda boshida bir marta yuradi boldi
// 7 case bu dependensis yani bogliqlik yani biz arreyni iciga bir state 
// yoki ozgartradigan narsamzni yozamz va osha ozgarsa case 3 ishledi yana
// ham tushinarli aytadgan bolsa case uc qaysi qiymatni berb qoygan bolsa osha pzgarganda
// ishledi boshqa bir state yoki boshqa narsa ozgarganda ishleamde
// 8 casee 4  case 3ni multiple xolati yani arreyga bir 
// qanca stateni biriktrb qoyamz va yozgnlarmzda case 4 ishledi