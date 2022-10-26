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

// react bu hamma foydalanishi mumkin bolgan tekn kutubxoba  
// user interfecesni qurish uchun ishlatildgn javascript kutubxonasi

// nmaga react tez ishlaydi ? - single page application 
// reactda tortta asosiy hususiyat bor 1-vertual dom borligi  2-unidirectional data flow 3-components 3server Side rendering


// 1 Virtual dom - rerender bolishini oladi yani vertual dom ishlatmasak biz ozgartradgn qismi ozgarmasda hammasini boshidan chizib kegn osha joyi ozgaradi vertual dom real domni memorysida joylashadi
// UI copyni saqlab oladi real dom bn vertualdomni farqi real domda child ozgarsa parentga tasir qiladi verttualda esa tasir qilmaydi 
// 2 component based qism qismga bolib ishlashga aytiladi 
// 3 unidirectional data flow parentda childga malumot keladi lekin childddan parentga malumot bormedi 
// bi Directional data flow uni directional data flow farqi ?
// bi directional data flow har tarafga malumotm jonab ketovradi uni directionalda esa faqat parentdan childga


// 4 server Side Renderending bu beceknd tomondan manikulyatsiya qilib ekranga chiqarishga aytiladi buning afzalliklari data tez yuklanb becekndga borib kelib tez ekranga chiqadi biz bajarga amallarni sekin birinma ketn qilib utrmedi 

// babel react  bu yangi avlod yani brauzer eskitta bor  biz yozgan kodni javascript kodiga aylantrish yani javascriptga uzini tiliga otkazb buyruq beradi  



// Browser birinci bolib html file keladi kegn assets kegn css va js boladi eng katta dawnload qilish ucun js boladi

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


// super (props ) parametrni tutib olish 

// constructor bu doim yozgan paytmzda qayerda yozilishdan qattiy nazar birinchi yuradi 

// sinxron bitta amal barajrlganda kegn kegngisini kelishini kutib turadi 

// asinxron kutmedi shunde ishledi

// setState asinxron funksya emas callbackga oxshab kyuga otadi 


// CRUD


// classname jsx faqat js exda agar biuz css ishlatsak u bn calkashbb ketmasligi 

// Brouzer qande kodlarni birinci uqiydi - bririnci bolib brouzer html kodlarini kegn img kodlarin kegn kgn css kegn javascrpt

// state bn props   State da ham Props da ham malumot rerender boladi
//   farqi propsda huddi funcion dagi parametr ga oxhsab malumot componentga keladi
//   State da esa malumot shu component ni ichida boladi
//   Rerender uchunn State ishlatgan afzal


// Life sycle statega malumot kiritlldimi uni qaytattan render qiberish 


// Pure component nma ? 


// should component update true bolsa malumot update qiladi false bolsa update qimedi

// listlarda nmaga key ishlatiladi


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
// 2 UseEffectni biz tort hil caseda ishlataolamz
// 3 UseEffect doim callback funksya sifatida ishlatiladi
// 4 Case 1 biz stateni ozgartamzmi inputga malumot yozamzmi bizda case 1 ishledi
// 5 Case 2 biz beckenddan malumot keladi yani biz case ikkinchini ishlatshmz ucun
// ikkinchi paramater qoyishmz kerak shunda case ikki boladi
// yani birinchi paramater callback funksya ikkinchisi ess arrey arrey qoymasak
// yani ikkinchi paramter bolmasa bu birinchi casee bolib qoladi
// 6 case ikki component yurganda boshida bir marta yuradi boldi
// 7 case 3 bu dependensis yani bogliqlik yani biz arreyni iciga bir state 
// yoki ozgartradigan narsamzni yozamz va osha ozgarsa case 3 ishledi yana
// ham tushinarli aytadgan bolsa case uc qaysi qiymatni berb qoygan bolsa osha pzgarganda
// ishledi boshqa bir state yoki boshqa narsa ozgarganda ishleamde
// 8 casee 4  case 3ni multiple xolati yani arreyga bir 
// qanca stateni biriktrb qoyamz va yozgnlarmzda case 4 ishledi



 //////////                U  S  E      R  A  D  U  C  E  R            //////////
 //////////                U  S  E      R  A  D  U  C  E  R            //////////


// 1 state ochamz va statimzni ikki qiymatga ega birinchisi  oddiy nom ikkinchisida dispatch deymz va
// useReducer() deb tenglab qoyamz
// 2 useReducer ikkia qiymat oladi useRedducer(()=>{}, 0) calback funksiya hamda  initial qiymat
// 3 dispatchni qayerda funksiya ishlatmoqchiu bolsak osha yerga calback funksiya bn funksiya sifatida yozamz
// 3 yani dispatch use reducer deb yaratgan funskyamzga teng
// 4 tepadiga funksiyamz return qiymatiga qaytishi shart
//  tepadagii calback funksyamz oz iciga (state,action) oladi
// 5 pasda dispatchda biz {type: "plus"} yani prop sifatida type beramz obyektda
// 6 biz qaysi funksiyani ishlayotkann bilishmz  ucun switchcase  eng yaxshi vaeriant
// 7 switch caseda biz action.type yani actiondan kelyotkann typeni tekshramz
// 8 biz tepada emas nmaga ozgarishini pasda aytshmz ham mumkin
// 9 pasda biz yana qoshmca parametr beramz yani payload :5
// 10 va tepada action.payload deb qande amal bajarmoqci bolsak oshani yoniga yozamz


 //////////                U  S  E      C  O  N  T  E  X  T            //////////
 //////////                U  S  E      C  O  N  T  E  X  T            //////////



// 1 birinchi export nom berb createContext qilib contextni chaqirb olamz yani alohida context papkada
// 2 biita export qilamz va nom beramz va malumotamzni context papkamzda shyu nom bnn orab qoaymz
// 3 va shu bergan nomimznii rootda yani indexda borib orab qoyamz yani ekranda chiqayotkan barcha malumotlarni
// 4 children berib yuboramz yani props sifatida yani Provider bergamzga ham tepada parentcontextga ham
// 5  va mana shu yerda chikdrenni orab turganga qoshimcha .Provider berib qoyamz
// 6 va  biz mana shu yerda state yaratb olamz va bu state childerndan pasda bolish kerak
// 7 va yaratagan contextmizda icidan value sifatida stateni  berib yuboramz




// 8 birinchi Contextni import qivolamz yani u rootda tutvolganmzni emas Provider qilib yaratgan contextni tutvolamz

// 9 bu yerda contextda yaratga stateni yaratamz va useContext qilib  caqrgan contextmzni qiymat qilib use Contextda berib yuboramz



// 10 bu yerda ham provider berilgan contextni tutvolamz import qilib
// 11  bu yerda ham contextda yaratga stateni yaratamz va useContext qilib  caqrgan contextmzni qiymat qilib use Contextda berib yuboramz






 //////////                U  S  E      R  O  U  T  E  R --  D  O  M        //////////
 //////////                U  S  E      R  O  U  T  E  R --  D  O  M        //////////




// Router-dom reactni multiple page applicationga ozgartirib beradi

// 1 birinchi routerdomni beshinchisni ishlatsh uchun npm i react-router-dom@5

// 2 Eng kotta rootni BrowserRouterga orashmz kerak bu react-router-domdan keladi

// 3 Navlink da navbarda bosganmzda page ozgarishi kerak bolsa  homedega yozuvni orab qoyadi

// 4 to degan atrebut oladi va unga value desak ham boladi yani
//tepada localhost3000mingni yonida yonalsh beramz qaysi page otishni

// 5 Route ekranga component korsatish uchun

//.6 Routeni Rootda ishltamz indexda yani BrowserRouterni oragan joyda emas

// 7 Routeni ociluvchi va yopiluvchi teglarda yozsa boladi

// 8 Routeda ikki xil yonalishda ekranga chiqarsa boladi Routeni icidagi component atrebuti bn hamda
// 9 Routeni ociluvci va yopilvchi teg qilib ortasida oddiy component qilib berb yuborsek boladi

// 10 biz Routeni ichiga path degan atrebut beramz
// 11 pathda biz navbardan to qilib icida   jonatgan buyruqni yozamz example path={/home}
// 12 component atrebuti ichida  Hec qande belgilarsz icida component={home}
// 13 agar proplar ishlamoqci bolsak ->     <Route path={"/home"}>
//                                                <home />
//                                           </Route>

// 14 yonalish beryotkanda yoki yonalish qabul qilyotkanda stringni icida / belgisi bolishi shart

// 15 agar proektmz yurganda yani tepada urlga avtamat yonalish berish uchun Redirect berb qoyamz
// 16 Bitta eng pastida Route ochamz va pathga "/"  berb uni icida   <Redirect to={"/home"} /> tarzda yonaltrb yuboramz

// 17  Switch - biz yasab olgan Routelarmzni Switchga orab qoyamz yani refresh
//  bolgan biz qaysi pageda bolsak osha pageda qoladi

// 18 Link bn Navlink bir xil ishledi link tegi sifatida farqi active style Linkda yoq

// 19 Navlinkdagi active style biz active yani kirganmza
// styleni asosan rangini ozgarishi uchun beramz yani har bir Navlinkka bershmz kerak

// 20 tepada ozgaruvchi qilib bir marta style bervolb shu ozgaruvchini active stylega berb qoysak ham boladi

// 21 biz codemzni soddaroq qilishmz ham  mumkkin yani styleda
// bir ozgaruvchiga Navlinkni berb yuborb osha ozgarvchiga navbardagi
// malumotlarmzni yani home aboutla chiqishini Item deb orab
// shuni iciida active styleni berb qoyshmz mumkin

// 22 exact bu Routeni atrebuti aniq shunga turi kelsa kegn osha pageni korsat degani

// 23 biz yonalishlarmzni bitta button bn ozgartrshmz mumkin yani
// useHistoryni Pageda page otyotkan joyda bitta ozgaruvchiga tenglab olamz
//  osha ozgarvcini bitta buttongami bermz onclik bolganda callback bolishi shart osha ozgarvchi va .push bor bitta pageni biriktrsh uchun
// 24 goBack bu orqaga
// 25 goForward esa oldinga

// 25 useLocation bu usehistory bn bir xil shunga ishlatilmedi





//  J S X javascript . create elementni  sintaksis sugarsi
//



// valudation


 //////////                U  S  E      R  O  U  T  E  R --  D  O  M  6       //////////
 //////////                U  S  E      R  O  U  T  E  R --  D  O  M  6       //////////
