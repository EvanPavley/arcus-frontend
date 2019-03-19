import React from 'react'
import { connect } from 'react-redux';
import './Profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      {props.current_user === null ? (
        <div>
          <p> please login to view your profile</p>
        </div>
      )
      : (
        <div>
          <p>{props.current_user.username}</p>
        </div>
      )}
    </div>
  )
}

function msp(state) {
  return {
    current_user: state.current_user,
  }
}

export default connect(msp)(Profile)
