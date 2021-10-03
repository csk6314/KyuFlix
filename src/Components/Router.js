import React from "react";
import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Header from "Components/Header";
import Detail from "Routes/Detail";
export default() => (
    <Router basename={process.env.PUBLIC_URL}>
      
        <Header/>
        <Switch>
            <Route path="/" exact component={Home} / >
            <Route path="/tv" exact component={TV} / >
            <Route path="/search" exact component={Search} / >
            <Route path="/movie/:id" component={Detail} / >
            <Route path="/tv/:id" component={Detail} / >    
            <Redirect from="*" to="/" />
        </Switch>
        
    </Router>
);