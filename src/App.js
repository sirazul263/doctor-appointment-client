import "./App.css";
import "./styles/style.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AppointmentPage from "./components/AppointmentPage/AppointmentPage";
import Login from "./components/Forms/Login";
import Registration from "./components/Forms/Registration";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import AddDoctor from "./components/Dashboard/AddDoctor";
import AllAppointments from "./components/Dashboard/AllAppointments";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/appointment">
              <AppointmentPage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/add-doctor">
              <AddDoctor></AddDoctor>
            </PrivateRoute>
            <PrivateRoute exact path="/all-appointments">
              <AllAppointments></AllAppointments>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
