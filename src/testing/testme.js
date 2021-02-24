import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { Nav } from "./_components";
import Alert  from "./_components/Alert";
import  Home  from "./home";
import Users  from "./users/Index";
import Stores  from "./stores/Index";
import Employees  from "./employees/Index";
import { NavLink } from 'react-router-dom';


import './styles.less';

const Testme = () => {

  const { pathname } = useLocation();
  return (
    <div className="container app-container container-fluid bg-light">
            <Nav />
            <Alert />
            <div> Create DB File <NavLink to="/addDataBase" >Create</NavLink></div>               
            <div className="container main pt-4 pb-4">
                 <Switch>
                    <Route exact path={pathname}  component={Home}/>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path="/home2" component={Home} />
                    <Route excat  path="/users" component={Users} />
                    <Route excat  path="/stores" component={Stores} />
                    <Route excat  path="/employees" component={Employees} />
                    <Redirect from="*" to="/testme" />
                </Switch>
            </div>
        </div>
  );
};

export default Testme;

