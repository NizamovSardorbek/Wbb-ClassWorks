import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarSix from "./NavbarSix";
import RouterHome from "./RouteHome";
import RouterAbout from "./RouterAbout";
import RouterContact from "./RouterContact";
const RouterDomSix = () => {
  return (
    <div>
      <NavbarSix/>
      <Routes>
        <Route path="/home" element={<RouterHome />} />
        <Route path="/about" element={<RouterAbout />} />
        <Route path="/contact" element={<RouterContact />} />
      </Routes>
    </div>
  );
};

export default RouterDomSix;

// 1 npm i react-router-dom bu routerni oltinchi versiyasini ornatadi
// 2 bunda ham birinchi BrowserRouterda orab olishimz kerak eng katta orab turuvchisini
// 3 Routesda biz main routerni orab qoyamz switchni vazifasini bajaradi
// 4 Route beramz yani ekranga maulomot component  chiqarsh va yonalish berbb yuborish ucun
// 5 path beramz routni tegini iciga yani buyruq home bolsa deymz
// 6 element yani home bolsa shu pageni chiqar degani
// 7 navbarga otamz va navbarda bitta ozgaruvchi ocib router domdan useNavigate olib kelb  tenglab qoyamz
// 8 endi biz qaysini ustiga bossak otishi ucuin onlick bolganda deymz pathlarga Example :  <h1 onClick={() => navigate("/home")}>Home</h1>
// 9 Link yani pageda pagega utish ucun navbarda har birini Linkga orab qoyamz
// 10 va linkni icida to="/home" yonalishini berb yuboramz