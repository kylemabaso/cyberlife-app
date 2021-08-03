import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import SignUp from "../pages/auth/SignUp";
import LogIn from "../pages/auth/LogIn";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
