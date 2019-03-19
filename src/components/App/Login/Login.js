import React from 'react'
import './Login.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInputChange, setCurrentUser } from '../../../actions/actions';

const Login = (props) => {
  let handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    props.handleInputChange({name, value})
  }

  let checkExistingUser = (username) => {
    return props.users.find(u => u.username === username) ? true : false;
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    if (checkExistingUser(props.username)) {
      props.history.push('/Profile');
      props.setCurrentUser(props.users.find(u => u.username === props.username));
    }else{
      alert("wrong username or password");
    }
    props.handleInputChange({name:'username', value:''})
    props.handleInputChange({name:'email', value:''})
    props.handleInputChange({name:'password', value:''})
  }

  return (
    <div className="login-container">
      {props.current_user === null ? (
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Username:</label>
          <br/>
          <input
            name='username'
            onChange={handleChange}
            value={props.username}
          />
          <br/>
          <label>Email:</label>
          <br/>
          <input
            name='email'
            onChange={handleChange}
            value={props.email}
          />
          <br/>
          <label>Password:</label>
          <br/>
          <input
            name='password'
            type='password'
            onChange={handleChange}
            value={props.password}
          />
          <div className='button-holder'>
            <input type='submit' value='L O G I N' id='login-submit' />
          </div>
        </form>
      </div>
      )
      :
      (
        <p>logout btn here</p>
      )}
    </div>
  )
}

function msp(state) {
  return {
    username: state.username,
    email: state.email,
    password: state.password,

    users: state.users,

    current_user: state.current_user,
  }
}

function mdp(dispatch){
  return {
    handleInputChange: ({name, value}) => dispatch(handleInputChange({name, value})),
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  }
}

export default connect(msp, mdp)(withRouter(Login))
