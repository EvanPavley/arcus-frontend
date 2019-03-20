import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Stars from './Stars';
import Test from './Test';
import hsl from 'hsl-to-hex'

import './PalletShow.css'
import Swatch from '../ColorPalletGenerator/PalletContainer/Swatch'
import { addPallet } from '../../../actions/actions';

const PalletShow = (props) => {
  const hexOne = hsl(props.selectedPallet.OneHue, props.selectedPallet.OneSat, props.selectedPallet.OneLight)
  const hexTwo = hsl(props.selectedPallet.TwoHue, props.selectedPallet.TwoSat, props.selectedPallet.TwoLight)
  const hexThree = hsl(props.selectedPallet.ThreeHue, props.selectedPallet.ThreeSat, props.selectedPallet.ThreeLight)
  const hexFour = hsl(props.selectedPallet.FourHue, props.selectedPallet.FourSat, props.selectedPallet.FourLight)
  const hexFive = hsl(props.selectedPallet.FiveHue, props.selectedPallet.FiveSat, props.selectedPallet.FiveLight)

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
      props.addPallet({
        "one": hexOne,
        "two": hexTwo,
        "three": hexThree,
        "four": hexFour,
        "five": hexFive,
      })

      postPallet()
      .then(r => r.json())
      .then(pallet => postJoin(pallet.id))

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
            height={'10rem'}
            width={'10rem'}
            fontSize={'1.7em'}
            visibility={'visible'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.TwoHue }
            s={ props.selectedPallet.TwoSat }
            l={ props.selectedPallet.TwoLight }
            height={'10rem'}
            width={'10rem'}
            fontSize={'1.7em'}
            visibility={'visible'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.ThreeHue }
            s={ props.selectedPallet.ThreeSat }
            l={ props.selectedPallet.ThreeLight }
            height={'5rem'}
            width={'5rem'}
            fontSize={'.8em'}
            visibility={'visible'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.FourHue }
            s={ props.selectedPallet.FourSat }
            l={ props.selectedPallet.FourLight }
            height={'5rem'}
            width={'5rem'}
            fontSize={'.8em'}
            visibility={'visible'}
          ></Swatch>
          <Swatch
            h={ props.selectedPallet.FiveHue }
            s={ props.selectedPallet.FiveSat }
            l={ props.selectedPallet.FiveLight }
            height={'5rem'}
            width={'5rem'}
            fontSize={'.8em'}
            visibility={'visible'}
          ></Swatch>
          <div className='button-container'>
            <div className='btn' onClick={handleSave}>
              S A V E
            </div>
            <div className='btn' onClick={() => props.history.goBack()}>
              B A C K
            </div>
          </div>
        </div>
        <div className='mockup-container'>
          Mockups:
          <div className='star-one-container'>
            <Stars
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
            />
          </div>
          <div className='star-one-container'>
            <Test
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
  }
}

export default connect(msp, mdp)(withRouter(PalletShow))
