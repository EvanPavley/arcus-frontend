import React from 'react'
import '../css/Login.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInputChange, setCurrentUser, setUsers } from '../../redux/actions';

const Signup = (props) => {
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
      alert("You've already signed up, Please login.")
    }else if (props.password === "" || props.username === "") {
      alert("Please enter a username or password")
    }else{
      fetch('http://localhost:3000/api/v1/users/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          username: props.username,
          email: props.email,
          password: props.password,
        })
      })
      .then(r => r.json())
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.jwt)
        props.setCurrentUser(response.user)
        props.history.push('/Profile');
      })
    }
    props.handleInputChange({name:'username', value:''})
    props.handleInputChange({name:'email', value:''})
    props.handleInputChange({name:'password', value:''})
  }

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className='button-holder'>
          <p className='title'>Sign Up</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Username</label>
          <br/>
          <input
            name='username'
            onChange={handleChange}
            value={props.username}
          />
          <br/>
          <label>Email (optional)</label>
          <br/>
          <input
            name='email'
            onChange={handleChange}
            value={props.email}
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
    setUsers: (users) => dispatch(setUsers(users)),
  }
}

export default connect(msp, mdp)(withRouter(Signup))
