import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Profile.css'

import Pallet from './Pallet/Pallet'
import HueSlider from './PalletFilters/HueSlider'
import LightSlider from './PalletFilters/LightSlider'
import SaturationSlider from './PalletFilters/SaturationSlider'
import WebsiteMockup from './Mockups/WebsiteMockup'
import TextMockup from './Mockups/TextMockup'
import LogoMockup from './Mockups/LogoMockup'

import hexToHsl from 'hex-to-hsl'
import hsl from 'hsl-to-hex'
import { selectPallet, setEditablePallet, addPallet, addJoin } from '../../redux/actions';

class Profile extends Component {
  state = {
    toggleView: true
  }
  const hexOne = hsl(this.props.editablePallet.OneHue, this.props.editablePallet.OneSat, this.props.editablePallet.OneLight).toUpperCase()
  const hexTwo = hsl(this.props.editablePallet.TwoHue, this.props.editablePallet.TwoSat, this.props.editablePallet.TwoLight).toUpperCase()
  const hexThree = hsl(this.props.editablePallet.ThreeHue, this.props.editablePallet.ThreeSat, this.props.editablePallet.ThreeLight).toUpperCase()
  const hexFour = hsl(this.props.editablePallet.FourHue, this.props.editablePallet.FourSat, this.props.editablePallet.FourLight).toUpperCase()
  const hexFive = hsl(this.props.editablePallet.FiveHue, this.props.editablePallet.FiveSat, this.props.editablePallet.FiveLight).toUpperCase()

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
    if (e.target.innerHTML === "View Mockups") {
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
          height={'4.2rem'}
          width={'4.2rem'}
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
      ThreeLight={ this.props.editablePallet.ThreeLight }

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
      height={'5rem'}
      width={'5rem'}
    />
  }



  postPallet = () => {
    return fetch('http://localhost:3000/api/v1/pallets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        one: hexOne,
        two: hexTwo,
        three: hexThree,
        four: hexFour,
        five: hexFive,
      })
    })
  }

  postJoin = (pallet_id) => {
    return fetch('http://localhost:3000/api/v1/user_pallets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.current_user.id,
        pallet_id: pallet_id,
      })
    })
  }

  handleSave = (e) => {
      this.postPallet()
      .then(r => r.json())
      .then(pallet => {
        this.postJoin(pallet.id)
        .then(r => r.json())
        .then(join => this.props.addJoin(join))
        this.props.addPallet({
          id: pallet.id,
          one: pallet.one,
          two: pallet.two,
          three: pallet.three,
          four: pallet.four,
          five: pallet.five,
        })
      })
  }

  render(){
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
              <p id="name" >{this.props.current_user.username}s Palettes:</p>
              {this.renderPallets()}
            </div>
            <div className='mockup-container-profile'>
              <div className="profile-nav">
                <div
                className="profile-nav-item"
                onClick= {this.handelViewClick}
                >
                  View Mockups
                </div>
                <div
                className="profile-nav-item"
                onClick= {this.handelViewClick}
                >
                  Customize Palette
                </div>
              </div>
              {this.state.toggleView === true ? (
                <div>
                  <p id="name" >Mockups:</p>
                  <div className='star-one-container-profile'>
                    <TextMockup
                      hexOne = {hexOne}
                      hexTwo = {hexTwo}
                      hexThree = {hexThree}
                      hexFour = {hexFour}
                      hexFive = {hexFive}
                    />
                  </div>
                  <div className='star-one-container-profile'>
                    <WebsiteMockup
                      hexOne = {hexOne}
                      hexTwo = {hexTwo}
                      hexThree = {hexThree}
                      hexFour = {hexFour}
                      hexFive = {hexFive}
                    />
                  </div>
                  <div className='star-one-container-profile'>
                    <LogoMockup
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
                  </div>
                  <div className="editable-pallet-filter-container">
                    <HueSlider onEdit={true} size={175} />
                    <div className="light-sat">
                      <LightSlider onEdit={true} min={25} max={80}/>
                      <SaturationSlider onEdit={true} min={40} max={100}/>
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
    addPallet: (pallet) => dispatch(addPallet(pallet)),
    addJoin: (join) => dispatch(addJoin(join)),
  }
}

export default connect(msp, mdp)(Profile)
