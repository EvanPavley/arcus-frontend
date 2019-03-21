import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.css'

import Pallet from '../ColorPalletGenerator/PalletContainer/Pallet'
import HueSlider from '../ColorPalletGenerator/PalletFilter/HueSlider'
import LightSlider from '../ColorPalletGenerator/PalletFilter/LightSlider'
import SaturationSlider from '../ColorPalletGenerator/PalletFilter/SaturationSlider'
import Stars from '../PalletShow/Stars'
import Test from '../PalletShow/Test'

import hexToHsl from 'hex-to-hsl'
import hsl from 'hsl-to-hex'
import { selectPallet, setEditablePallet } from '../../../actions/actions';

class Profile extends Component {
  state = {
    toggleView: true
  }

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
    this.props.setEditablePallet({
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

  handelViewClick = (e) => {
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
    this.props.setEditablePallet({
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
    if (e.target.innerHTML === "Mockup View") {
      this.setState({toggleView: true})
    }else {
      this.setState({toggleView: false})
    }
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
          id= {p.id}
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

          editable={ false }
          onProfile={ true }
          visibility={'visible'}
        />
      )
    })
  }

  renderEditablePallet = () => {
    return <Pallet
      OneHue={ this.props.editablePallet.OneHue }
      OneSat={ this.props.editablePallet.OneSat }
      OneLight={ this.props.editablePallet.OneLight }

      TwoHue={ this.props.editablePallet.TwoHue }
      TwoSat={ this.props.editablePallet.TwoSat }
      TwoLight={ this.props.editablePallet.TwoLight }

      ThreeHue={ this.props.editablePallet.ThreeHue }
      ThreeSat={ this.props.editablePallet.ThreeSat }
      ThreeLight={ this.props.editablePallet.TwoLight }

      FourHue={ this.props.editablePallet.FourHue }
      FourSat={ this.props.editablePallet.FourSat }
      FourLight={ this.props.editablePallet.FourLight }

      FiveHue={ this.props.editablePallet.FiveHue }
      FiveSat={ this.props.editablePallet.FiveSat }
      FiveLight={ this.props.editablePallet.FiveLight }

      onProfile={ true }
      editable={ true }
      visibility={'hidden'}
      border={'3px solid white'}
      borderHover={'3px solid #00BBFF'}
    />
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
              <p id="name" >{this.props.current_user.username}'s pallets:</p>
              {this.renderPallets()}
            </div>
            <div className='mockup-container-profile'>
              <div className="profile-nav">
                <div
                className="profile-nav-item"
                onClick= {this.handelViewClick}
                >
                  Mockup View
                </div>
                <div
                className="profile-nav-item"
                onClick= {this.handelViewClick}
                >
                  Create Pallet View
                </div>
              </div>
              {this.state.toggleView === true ? (
                <div>
                  <p id="name" >Mockups:</p>
                  <div className='star-one-container-profile'>
                    <Stars
                      hexOne = {hexOne}
                      hexTwo = {hexTwo}
                      hexThree = {hexThree}
                      hexFour = {hexFour}
                      hexFive = {hexFive}
                    />
                  </div>
                  <div className='star-one-container-profile'>
                    <Test
                      hexOne = {hexOne}
                      hexTwo = {hexTwo}
                      hexThree = {hexThree}
                      hexFour = {hexFour}
                      hexFive = {hexFive}
                    />
                  </div>
                </div>
              )
              : (
                <div className="editable-pallet-container">
                  <div className="editable-pallet">
                    {this.renderEditablePallet()}
                    <div className="profile-save-btn">
                    S A V E
                    </div>
                  </div>
                  <div className="editable-pallet-filter-container">
                    <HueSlider />
                    <div className="light-sat">
                      <LightSlider />
                      <SaturationSlider />
                    </div>
                  </div>
                </div>
              )}
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
    editablePallet: state.editablePallet,
  }
}

function mdp(dispatch){
  return {
    selectPallet: (pallet) => dispatch(selectPallet(pallet)),
    setEditablePallet: (pallet) => dispatch(setEditablePallet(pallet)),
  }
}

export default connect(msp, mdp)(Profile)
