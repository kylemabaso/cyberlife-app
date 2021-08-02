import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute'
import SignUp from '../pages/auth/SignUp';
import LogIn from '../pages/auth/LogIn';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
// import { Steptwo } from './cbuilder/Steptwo';
// import { Stepone } from './cbuilder/Stepone';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signup" component={ SignUp } />
          <Route path="/login" component={ LogIn } />
          <Route path="/forgot-password" component={ ForgotPassword } />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;