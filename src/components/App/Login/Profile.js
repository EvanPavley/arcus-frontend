import React from 'react'
import { connect } from 'react-redux';
import './Profile.css'
import Pallet from '../ColorPalletGenerator/PalletContainer/Pallet'
import hexToHsl from 'hex-to-hsl'

const Profile = (props) => {
  let renderPallets = () => {
    return props.current_user.pallets.map(p => {
      let hslOne = hexToHsl(p.one)
      let hslTwo = hexToHsl(p.two)
      let hslThree = hexToHsl(p.three)
      let hslFour = hexToHsl(p.four)
      let hslFive = hexToHsl(p.five)
      return(
        <Pallet
          OneHue={ hslOne[0] }
          OneSat={ hslOne[1] }
          OneLight={ hslOne[2] }

          TwoHue={ hslTwo[0]}
          TwoSat={ hslTwo[1] }
          TwoLight={ hslTwo[2] }

          ThreeHue={ hslThree[0] }
          ThreeSat={ hslThree[1] }
          ThreeLight={ hslThree[2] }

          FourHue={ hslFour[0] }
          FourSat={ hslFour[1] }
          FourLight={ hslFour[2] }

          FiveHue={ hslFive[0] }
          FiveSat={ hslFive[1] }
          FiveLight={ hslFive[2] }

          onProfile={ true }
        />
      )
    })
  }

  return (
    <div>
      {props.current_user === null ? (
        <div>
          <p> please login to view your profile</p>
        </div>
      )
      : (
        <div className="profile-container">
          <div className="profilePallets">
            {renderPallets()}
          </div>
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
