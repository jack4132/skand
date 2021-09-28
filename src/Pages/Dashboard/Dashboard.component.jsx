import React from "react";
import {Switch, Route} from "react-router-dom";
import SideBar from "../SideBar/SideBar.component";
import Country from "../Country/Country.component";
import Weather from "../Weather/Weather.component";

import "./style/Dashboard.component.css";
// import Header from '../Header/Header.component'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* <Header/> */}
      <div className="dashboard-content">
        <SideBar />
        <div className="dashboard-main">
          <Switch>
            <Route exact path="/weather">
              <Weather />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/country">
              <Country />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
