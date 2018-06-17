import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ProtectedRoutes extends React.Component {
  render () {
    var {
      redirect
    } = this.props;

    return this.props.authenticated ? <div>{this.props.children}</div> : <Redirect to={redirect}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated
  };
};

const mapStateToDispatch = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapStateToDispatch)(ProtectedRoutes);
