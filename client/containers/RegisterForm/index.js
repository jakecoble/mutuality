import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { create } from '../../actions';

import styles from './styles.scss';

class RegisterForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
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
    this.props.create(this.state);
  }

  render () {
    var {
      firstName,
      lastName,
      email,
      password
    } = this.state;

    var {
      authenticated
    } = this.props;

    return authenticated ? <Redirect to="/" /> : (
      <form className={styles.loginForm}>
        <h2>Register</h2>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">first name</label>
          <input name="firstName" type="text" value={firstName} onChange={(e) => this.onChange('firstName', e)}/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">last name</label>
          <input name="lastName" type="text" value={lastName} onChange={(e) => this.onChange('lastName', e)}/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">email</label>
          <input name="email" type="text" value={email} onChange={(e) => this.onChange('email', e)}/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">password</label>
          <input name="password" type="password" value={password} onChange={(e) => this.onChange('password', e)}/>
        </div>

        <button className={styles.loginBtn} onClick={(e) => this.onSubmit(e)}>register</button>
        <Link to="/login" className={styles.registerLink}>Already have an account?</Link>
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
    create: (formData) => {
      dispatch(create(formData.firstName, formData.lastName, formData.email, formData.password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
