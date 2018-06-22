import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import ProtectedRoutes from './ProtectedRoutes';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>

          <ProtectedRoutes redirect="/login">
            <Route path="/" render={() => <div>logged in</div>}/>
          </ProtectedRoutes>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const connectedApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default hot(module)(connectedApp);
