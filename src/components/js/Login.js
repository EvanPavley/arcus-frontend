import React from 'react'
import '../css/Login.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInputChange, setCurrentUser } from '../../redux/actions';
import API_URL from '../../configURL'

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
      fetch(`${API_URL}/api/v1/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json",
        },
        body: JSON.stringify({
          username: props.username,
          password: props.password,
        })
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
        } else {
          localStorage.setItem("token", response.jwt)
          props.setCurrentUser(response.user)
          props.history.push('/Profile');
        }
      })
    }else{
      alert("wrong username or password");
    }
    props.handleInputChange({name:'username', value:''})
    props.handleInputChange({name:'email', value:''})
    props.handleInputChange({name:'password', value:''})
  }

  let handleLogout = () => {
    props.setCurrentUser(null);
  }

  return (
    <div className="login-container">
      {props.current_user === null ? (
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className='button-holder'>
            <p className='title'>Login</p>
          </div>
          <label>Username</label>
          <br/>
          <input
            name='username'
            onChange={handleChange}
            value={props.username}
          />
          <br/>
          <label>Password</label>
          <br/>
          <input
            name='password'
            type='password'
            onChange={handleChange}
            value={props.password}
          />
          <div className='button-holder'>
            <input type='submit' value='S U B M I T' id='login-submit' />
          </div>
        </form>
      </div>
      )
      :
      (
        <div className='logout-btn' onClick={handleLogout}>
          <p>L O G O U T</p>
        </div>
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
