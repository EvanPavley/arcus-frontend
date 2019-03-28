import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LogoMockup from './LogoMockup';
import WebsiteMockup from './WebsiteMockup';
import TextMockup from './TextMockup';
import hsl from 'hsl-to-hex'

import './PalletShow.css'
import Swatch from '../ColorPalletGenerator/PalletContainer/Swatch'
import { addPallet, addJoin } from '../../../actions/actions';

const PalletShow = (props) => {

  const hexOne = hsl(props.selectedPallet.OneHue, props.selectedPallet.OneSat, props.selectedPallet.OneLight).toUpperCase()
  const hexTwo = hsl(props.selectedPallet.TwoHue, props.selectedPallet.TwoSat, props.selectedPallet.TwoLight).toUpperCase()
  const hexThree = hsl(props.selectedPallet.ThreeHue, props.selectedPallet.ThreeSat, props.selectedPallet.ThreeLight).toUpperCase()
  const hexFour = hsl(props.selectedPallet.FourHue, props.selectedPallet.FourSat, props.selectedPallet.FourLight).toUpperCase()
  const hexFive = hsl(props.selectedPallet.FiveHue, props.selectedPallet.FiveSat, props.selectedPallet.FiveLight).toUpperCase()

  let postPallet = () => {
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
        hex_id: `${hexOne}-${hexTwo}-${hexThree}-${hexFour}-${hexFive}`,
      })
    })
  }

  let postJoin = (pallet_id) => {
    return fetch('http://localhost:3000/api/v1/user_pallets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: props.current_user.id,
        pallet_id: pallet_id,
      })
    })
  }

  let handleSave = (e) => {
    if (props.current_user === null) {
      alert("Please login to save a pallet.")
    }else {

      postPallet()
      .then(r => r.json())
      .then(pallet => {
        postJoin(pallet.id)
        .then(r => r.json())
        .then(join => props.addJoin(join))
        props.addPallet({
          id: pallet.id,
          one: pallet.one,
          two: pallet.two,
          three: pallet.three,
          four: pallet.four,
          five: pallet.five,
        })
      })
      props.history.goBack()
    }
  }

  return (
    <div className='pallet-show-container'>
      <div>
        <div className='pallet-show'>
          <Swatch
            h={ props.selectedPallet.OneHue }
            s={ props.selectedPallet.OneSat }
            l={ props.selectedPallet.OneLight }
            height={'5.5rem'}
            width={'5.5rem'}
            fontSize={'1em'}
            visibility={'visible'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.TwoHue }
            s={ props.selectedPallet.TwoSat }
            l={ props.selectedPallet.TwoLight }
            height={'5.5rem'}
            width={'5.5rem'}
            fontSize={'1em'}
            visibility={'visible'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.ThreeHue }
            s={ props.selectedPallet.ThreeSat }
            l={ props.selectedPallet.ThreeLight }
            height={'5.5rem'}
            width={'5.5rem'}
            fontSize={'1em'}
            visibility={'visible'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.FourHue }
            s={ props.selectedPallet.FourSat }
            l={ props.selectedPallet.FourLight }
            height={'5.5rem'}
            width={'5.5rem'}
            fontSize={'1em'}
            visibility={'visible'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.FiveHue }
            s={ props.selectedPallet.FiveSat }
            l={ props.selectedPallet.FiveLight }
            height={'5.5rem'}
            width={'5.5rem'}
            fontSize={'1em'}
            visibility={'visible'}
          ></Swatch>
          <div className='button-container'>
            <div className='btn' onClick={handleSave}>
              <p>S A V E</p>
            </div>
            <div id='backbtn' className='btn' onClick={() => props.history.goBack()}>
              <p>B A C K</p>
            </div>
          </div>
        </div>
        <div className='mockup-container'>
          <p>Mockups:</p>
          <div className='star-one-container'>
            <TextMockup
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
            />
          </div>
          <div className='star-one-container'>
            <WebsiteMockup
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
            />
          </div>
          <div className='star-one-container'>
            <LogoMockup
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function msp(state) {
  return {
    selectedPallet: state.selectedPallet,
    current_user: state.current_user
  }
}

function mdp(dispatch){
  return {
    addPallet: (pallet) => dispatch(addPallet(pallet)),
    addJoin: (join) => dispatch(addJoin(join)),
  }
}

export default connect(msp, mdp)(withRouter(PalletShow))
