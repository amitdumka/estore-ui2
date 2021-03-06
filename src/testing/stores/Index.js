import React from "react";
import { Route, Switch } from "react-router-dom";

import { List } from "./List";
import { AddEdit } from "./AddEdit";
import '../styles.less';

const  Stores = ({ match }) => {
  const { path } = match;

  return (
    <div>
      
      <Switch>
        <Route exact path={path} component={List} />
        <Route path={`${path}/add`} component={AddEdit} />
        <Route path={`${path}/edit/:id`} component={AddEdit} />
      </Switch>
    </div>
  );
};

 export default Stores 
