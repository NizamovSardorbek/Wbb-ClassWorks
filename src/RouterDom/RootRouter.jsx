import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Info from "./Info";
import RouterNavbar from "./RouterNavbar";

const RootRouter = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.goBack()}>Students</button>
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
