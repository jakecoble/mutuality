import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { login } from '../../actions';

import styles from './styles.scss';

class LoginForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onChange (key, e) {
    this.setState({
      [key]: e.currentTarget.value
    });
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render () {
    var {
      email,
      password
    } = this.state;

    var {
      authenticated
    } = this.props;

    return authenticated ? <Redirect to="/" /> : (
      <form className={styles.loginForm}>
        <h2>Login</h2>
        <div className={styles.formGroup}>
          <label htmlFor="email">email</label>
          <input name="email" type="text" value={email} onChange={(e) => this.onChange('email', e)}/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">password</label>
          <input name="password" type="password" value={password} onChange={(e) => this.onChange('password', e)}/>
        </div>

        <button className={styles.loginBtn} onClick={(e) => this.onSubmit(e)}>login</button>
        <Link to="/register" className={styles.registerLink}>Register account</Link>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (formData) => {
      dispatch(login(formData.email, formData.password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
