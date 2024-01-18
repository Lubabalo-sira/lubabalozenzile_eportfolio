import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Footer from "./components/pages/Footer";

import Home from './components/pages/Home';
import ProfessionalDevelopment from "./components/pages/ProfessionalDevelopment";
import Skills from "./components/pages/Skills";
import Menu from './components/pages/Menu';
import LeadershipManagement from "./components/pages/leadership-management/LeadershipManagement";
import MyProjects from "./components/pages/MyProjects";
import CapstoneProject from "./components/pages/CapstoneProject";
import {Theme} from "./theme";
import AboutMe from "./components/pages/AboutMe";

const App = () => {
  return (
      <BrowserRouter basename={"/"}>
        <div id="App" className={`relative w-full min-h-screen pb-20 ${Theme.bgColor}`}>

            <Menu/>
            <div className={"hidden md:block pt-[104px]"}></div>
            <Switch>
                <Route exact path={"/lubabalozenzile_eportfolio"} component={() => <Home/>}/>
                <Route path={"/lubabalozenzile_eportfolio/leadership"} component={() => <LeadershipManagement/>} />
                <Route path={"/lubabalozenzile_eportfolio/ProfessionalDevelopment"} component={() => <ProfessionalDevelopment/>} />
                <Route path={"/lubabalozenzile_eportfolio/Skills"} component={() => <Skills/>} />
                <Route path={"/lubabalozenzile_eportfolio/civicengagement"} component={() => <CivicEngagement/>} />
                <Route path={"/lubabalozenzile_eportfolio/personalprojects"} component={() => <MyProjects/>} />
                <Route path={"/lubabalozenzile_eportfolio/CapstoneProject"} component={() => <CapstoneProject/>} />
                <Route path={"/lubabalozenzile_eportfolio/aboutme"} component={() => <AboutMe/>} />
                <Route path={"/"} component={() => <div>The page doesn't exist</div>}/>
            </Switch>

            <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
