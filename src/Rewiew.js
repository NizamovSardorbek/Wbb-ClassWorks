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




 //////////                L  O  C  A  L     S  T  O  R  A  G  E       //////////
 //////////                L  O  C  A  L     S  T  O  R  A  G  E       //////////


 // biz bir pagega kirganmzda oxirgi manzil qande bolsa shunde  qolishi ucun localstorage kerak boladi

// 1 malumotni set yani broweserga saqlash ucun localstorage.setItem('count' , count + 1) yani bitta ixtiyoriy nom beramz yani browserda saqlash ucun
// va qaysi malumotni qande xolatida saqlanishini beramiz

// 2 endi  bz broweserga saqlagan malumotimizni qayerda chiqarmoqci bolsak yani misol ucun pasda chiqarmoqcimz u yerda yozmemz
// yani ozgargan qiymat stateda boladi stateni initial xolatiga beramz  
// cont [count,setCount] = useState(0), edi buni , const [count, setCount] = useState(Number(localStorage.getItem("count"))); qilb ozgartramz

// 3 // endi biz xotiradagi malumotni ucrb tashlashmz ucun  bitta buttonga onclik funksiyasida   onClick={() => localStorage.removeItem("count")}
// beramz yani xotiradagi qaysi malumotni ucrmoqci ekanmzni beramz biz delete bosganmzda malumot xotirada ocadi lekn yana malumotni yangilasak 
// eski malumot keladi yani yangitta boshlamedi boshlashi ucun esa refreshni bosamz

// 4 endi bizda localstorega malumotlar kop bolsa buttonga onClick={() => localStorage.clear()} bersak har qande maalumot ocadi

// 5 Object hamda arreylarga malumotni biz huddi number stringlarda qayerda set qilgan bolsak osha yerda
// JSON.stringify({data: count + 1})  yani xotiraga saqlash

// 6 cJSON.parse(localStorage.getItem("count")); bu xotiradagi malumotni tutib olish ucun arrey objektlarga



 //////////                U  S  E      R   E    F      //////////
 //////////                U  S  E      R   E    F      //////////

// 1 controller hamda uncontrollerni rootga opkelamz biz solishtrishmz ucun
// 2 bizga ekranda malumot yangilanishi kerakmi useref ishlatamz  
// 3 biz bir ozgaruvci ocamz  va useRef("") deb belglab qoyamz   const title = useRef("");
// 4 inputga ref={title} yani ref deb malumotni ozgaruvciga yani userefga saqlab olamz
// 5 endi biz yozgan malumotimzni kormoqci bolsak 
// <button onClick={() => alert(title.current.value)}>Click</button>; yani title teng useRefga titleni icida current keladi currentni icida value


// buni biz shu ekranga malumotni chiqarshni hohlamasak va shunga oxshash xolatlarda ishlatamz



 //////////                U  S  E     M   E    M    O      //////////
 //////////                U  S  E     M   E    M    O      //////////

// biz parentni ozgartrsak child ham render boladi buni oldini olish uchun memo ishlatamz yani
// 1  childni export qilyotkan joyimzdan memo(MemoNavbar) qip oreymiz
// 2 hamma narsani memo yani xotiraga olishdan mano yoq yani faqat uzimzga kerakligini va childni olishimiz kerak
// shunda biz parentni ozgartirganmzda child render bolishini oldini olamz
// 3 ikkita qoidasi bolishi kerak memoni ishlatishimiz uchun birinchisi child bolishi kerak
// 4 va rerender boladigan bir malumot bolishi kerak parentda
// 5 useMemo parentda ishlatiladi yani parentda props sifatida bir malumotni
// childga yuborsak va biz parentda malumotni ozgartirsak child ham render boladi
// 6 buni oldini olish ucun  const data = useMemo(() => {
//   return { title: "Webbrain" };
// }, []); va props qilib yuboryotkan  joyimzda datani yuboramz
// 7 use memo doim valuega return qiladi yani obyektni malumotlariga
// 8 memo bn use memoni asosiy farqi memo childga beriladi usememo esa parentga
// 9 useCalback funksionga return qiladi use memo esa valuega
// 10 useCalback bn useMemoni yana asosiy farqi biz memoda tutib olganmzdan kegn uni ozgartirib bolmedi lekn useCalbackda esa
// biz qoshimca parametr qilib <h1>Navbar : {dataCall("About").title} </h1> yani yerda parentga malumot yuborishmz va parentda
// const dataCall = useCallback((param) => {
//   return { title: param };
// }, []); bundey tarzda tutib  olishimz mumkin






 //////////                U  S  E      R  O  U  T  E  R --  D  O  M  6       //////////
 //////////                U  S  E      R  O  U  T  E  R --  D  O  M  6       //////////






























// React nima
// Uni xususiyatlari
// Qanaqa qilib brawserda chiqishi jsx da yozilgan codeni
// Jsx nima ekanligi
// UseState
// UseReducer
// UseEffect caselari va asosan 3 tasi nima vazifani bajarishi
// Class component bn functional component farqi
// Prop bn state farqi
// Setstate dagi callbeck
// Koproq parent child mi child parent ishlatiladimi
// Children Parent nima
// Router dom nimaga kere
// Router domda outlet nima
// Use Params nima
// Router domni codeni tasavvur qilib hayolan ishlatib berish
// Context Api nima qanaqa ishlidi
// Nega react single page
// Router domda Switch nima
// Conditional Rendering 
// Cotroller -uncontroller nima

//  1. React js nima
//   User Interfeysni yasash uchun ishlatiladigan JS kutubxonasi
// 2. JSX nima
//   Javascript exemel
//   Html ichida JS
//   Js ichida Html ishlatish uchun
//   qisqasi sintaksis sugra
// 3. React  JS ni asosiy xususiyatlari niam?
//   1. VIrtual dom
//   2. Components
//   3. Server SIte rendering
//   4. UniDirectioonal DataFlow...

// 4. Virtual dom nima
//   Vitual dom real domni ichida joylashgan
//   Eski UI componentdan bn yani UI component ni taqqoslaydi
//   ozgargan qismni update qiladi.

// 5. UniDirectional DataFlow nima?
//   Bir tomonlama ma`lumot oqimi
//     Directional DataFlow da malumot hohlagan joyiga qarab ketadi(Parent-Child, Child-Parent)
//     UniDirectional Data Flow da faqat yuqoridan pastga harakat qiladi (Parent-Child, Child-Child, Child-grandChild)
// 6. Tarnery yoki OR (qaysi biini ishlatgan yaxshi)
//   OR ishlatadigan bolsak bizga ekranda 0 qaytishi mumkin, 
//   Tarnery da biz shart togri va natogri bolfan xolatlarini kuzata olamiz
//   Tarnery foydalangan afzal

// 7. Nimaga class ClassName ga ozgargan
//   style dagi class va reactdagi Class chalkashmasligi uchun

// 8. Server site rendering nma?
//   Browser web sahifani quyidagi daqa yukledi:
//     1. HTML
//     2. Assets
//     3. CSS
//     4. JS
//   JS yuklanganda qoshimcha ravishda ReactJS ha yuklanadi, eng uzoq yuklash JS da boladi
//   Server site rendering da esa  malumotni backend ga yuboradi , backendda tayyor UI keladi

// 9.  State bn Props ni qabnday farqi bor, qaysi biri afzal

//   State da ham Props da ham malumot rerender boladi
//   farqi propsda huddi funcion dagi parametr ga oxhsab malumot componentga keladi
//   State da esa malumot shu component ni ichida boladi
//   Rerender uchunn State ishlatgan afzal

// 10. Prop Driling nima
//   Qiymatni Parent-Child, CHild-CHild, CHilde- Grand CHild ga otishi,
//   buni  orniga Context API ishlatgan afzal,  chuni bizda 5-6 ta component boladigan bolsa, kodi  juda noqulay bolib ketadi

// 11. Use State nima?
//   UseState functional componentdagi State, ishlashi bir xil faqatgina bu qulayroq versiyasi
//   ichidan 2 ta qiymatni distrakcha qib olamiz birinchisi State  boladi, ikinchisi SetState bolad
// 12. UseEffect nima?
//   Class componentsdagi lifycyclani qisqa  versiyasi
//   agarda 2-qiymatga hech nima berilmasa -   har bir ozgarishda ishlaydi
//   agar 2-qiymat sifatida bosh massiv berlsa - proect ishga tushganda 1marta ishlaydi
//   agar 2-qoymat sifatida massiv ihcida biror ozfaruvchi yoki function berilsa, ayan ushbu function ustida amal bajarilganda ishlid
//   2-qiymatda massiv ichida bir nechta ozgaruvchilar beriish mumkin

// 13. Context API nima?
//   Prop diriling ni osonroq versiyasi
//   bita ombor yasaladi va ushbu omborga murojat qilish orqali hohlagan compoenent da ombor ichidagi malumotni ishlata olamiz


// 1.React nima ?
// UI ni qurish uchun ishlatiladigan js libruarysi. Asosan single page aplication.
// 2.Xususiyatlari?
// Virtual Dom Components Server Side Rendering Unidirectional data flow har birini izohlab berish
// 3. Babel yordamida js ga ogiradi va u brawserga korsatadi. Birinchi bolib html assets css js fayllani
// 4.JSX nima?
// JSX – Javascript Syntax XML.Jsx bu reactni asosi desak boladi.Yana biz Jsx orqali Js fileda javascript va html codelarini yoza olamiz.Bu saytni juda tez ishlashiga xizmat qiladi va logikani osonlashtiradi.
// 5. UseState?
// React hooksda statelarni ishlatish uchun useState kerak boladi. 
// 6. UseReducer?
// Stateni alternativ shakli.
// 7. UseEffect caselari? 
//  case1 -> har doim render bolishi uchun
//   useEffect(() => {})
//  case2 -> bir marta sayt refresh bolganda yurishlik uchun
//   useEffect(() => {}, [])
// case3 -> state render bolmaguncha kutish
//   useEffect(() => {}, [count])
//  case4 -> multipul , argumentdagi statelarini bir ozgarsa keyin render boladi 
//   useEffect(() => {}, [count, data, nimadur])
// 8. UseEffect asosiy 3 tasi?
// ComponentDidmount, ComponentDidUpdate, shouldComponentUpdate

// 9. Class comp functional comp?
// Reactni oldingi versiyalarida faqatgina class componentlar ishlatilingan lekin classdagi muammolar functional component yaratilishiga sabab bolgan.
// Class componentda this, this.props, this.state, this.setState, constructor, super, render husisiyatlari ortiqcha hisoblanadi va hozirda functionality. componentda bunday atamalar olib tashlangan.
// 10.prop vs state?
// State da ham props da ham malumot rerender boladi. Farqi props huddi functional dagi parametrga oxshab componentga malumot jonaadi.
// State da bolsa malumot ozini ichida boladi
// 11. Setstate dagi callback
// Buni aniq javob bilmadim ozimni javobim tori notoriligini bilmiman.
// 12.koproq parent child sababi parent dan turib child ga malumot uzatamiz.
// 13. Children Parent da ham Children ochib Unga nom berib parentga ushbu nomni chaqirib olish
// 14. React single page bolgani uchun uni multiple page qilishga kere
// 15. Outlet bu huddi contexdagi childrenga oxshaydi.Yani Parent childrenlar , Outletga kelib tushadi va Parent ozining childrenlari qayerda korishini belgilab beradi 
// 16. useParams bu urldagi paramsda malumot olish.Tasavur qiling sizda 10card bor va Ularning ustiga bosilsa yanada toliq malumot korsatish kerak (‘olx.uz kabi’).Bir cardni ustiga bosak yangi page ochilishi kerak.Hosh endi 10ta card uchun 10ta page ochiladimi 🤔🤔.1000ta cardingiz bolsachi 1000da component va page 😨😨.
// Yoq also bunday holatda siz useParamsda cardlarni idlarini tutib olib.1000ta card bolsa ham 1 page va 1 component ochasiz va Params id orqali filter qilib qoyasiz!!!
// 17. Bunda Usha navbar Yana olamiz va path to ni ishlatib location beramiz
// 18. Contaxt api bilasiz
// 19. Chunki u bitta html dan tashkil topgan
// 20. Buniyam aylantirdim aniq javob yo
// 21. Bu mangamas Shoazizgatushgan
// 22. Controller doimiy render qb turadi uncontroller Esa unaqamas











