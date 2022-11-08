import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Info from "./Info";
import Navlinks from "./Navlinks";
import RouterNavbar from "./RouterNavbar";

const RootRouter = () => {
  // const history = useHistory();

  const Location = useHistory();
  return (
    <div>
      {/* <button onClick={() => history.goBack()}>Students</button> */}
      <button onClick={() => Location.goBack()}>go back</button>
      <button onClick={() => Location.goForward()}>go on</button>
      <button onClick={() => Location.push("/home")}>push</button>

      <RouterNavbar />

      <Switch>
        <Route exact path={"/home"}>
          <Home />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
        <Route path={"/contact"}>
          <Contact />
        </Route>
        <Route path={"/navlinks"}>
          <Navlinks />
        </Route>
        <Route path={"/info"}>
          <Info />
        </Route>

        <Route path={"/"}>
          <Redirect to={"/info"} />
        </Route>
      </Switch>
    </div>
  );
};

export default RootRouter;

// Router-dom reactni multiple page applicationga ozgartirib beradi

// 1 birinchi routerdomni beshinchisni ishlatsh uchun npm i react-router-

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
// 13 agar proplar ishlamoqci bolsak =>     <Route path={"/home"}>
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
