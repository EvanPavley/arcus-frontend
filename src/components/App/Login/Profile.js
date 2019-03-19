import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css'

import Pallet from '../ColorPalletGenerator/PalletContainer/Pallet'
import Stars from '../PalletShow/Stars'

import hexToHsl from 'hex-to-hsl'
import hsl from 'hsl-to-hex'
import { selectPallet } from '../../../actions/actions';

class Profile extends Component {
  componentDidMount() {
    this.props.selectPallet({
      OneHue: '0',
      OneSat: '0',
      OneLight: '73',

      TwoHue: '0',
      TwoSat: '0',
      TwoLight: '73',

      ThreeHue: '0',
      ThreeSat: '0',
      ThreeLight: '73',

      FourHue: '0',
      FourSat: '0',
      FourLight: '73',

      FiveHue: '0',
      FiveSat: '0',
      FiveLight: '73',
    })
  }

  renderPallets = () => {
    return this.props.current_user.pallets.map(p => {
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
          visibility={'visible'}
        />
      )
    })
  }

  render(){
    let hexOne = hsl(this.props.selectedPallet.OneHue, this.props.selectedPallet.OneSat, this.props.selectedPallet.OneLight)
    let hexTwo = hsl(this.props.selectedPallet.TwoHue, this.props.selectedPallet.TwoSat, this.props.selectedPallet.TwoLight)
    let hexThree = hsl(this.props.selectedPallet.ThreeHue, this.props.selectedPallet.ThreeSat, this.props.selectedPallet.ThreeLight)
    let hexFour = hsl(this.props.selectedPallet.FourHue, this.props.selectedPallet.FourSat, this.props.selectedPallet.FourLight)
    let hexFive = hsl(this.props.selectedPallet.FiveHue, this.props.selectedPallet.FiveSat, this.props.selectedPallet.FiveLight)
    return (
      <div className="profile">
        {this.props.current_user === null ? (
          <div>
            <p> please login to view your profile</p>
          </div>
        )
        : (
          <div className="profile-container">
            <div className="profilePallets">
              <p id="name" >{this.props.current_user.username}'s pallets</p>
              {this.renderPallets()}
            </div>
            <div className='mockup-container-profile'>
              Mockups:
              <div className='star-one-container-profile'>
                <Stars
                  hexOne = {hexOne}
                  hexTwo = {hexTwo}
                  hexThree = {hexThree}
                  hexFour = {hexFour}
                  hexFive = {hexFive}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

function msp(state) {
  return {
    current_user: state.current_user,
    selectedPallet: state.selectedPallet,
  }
}

function mdp(dispatch){
  return {
    selectPallet: (pallet) => dispatch(selectPallet(pallet)),
  }
}

export default connect(msp, mdp)(Profile)
