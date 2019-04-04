import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LogoMockup from './Mockups/LogoMockup';
import WebsiteMockup from './Mockups/WebsiteMockup';
import TextMockup from './Mockups/TextMockup';
import GradientMockup from './Mockups/GradientMockup';
import BuisnessCardMockup from './Mockups/BuisnessCardMockup';
import hsl from 'hsl-to-hex'

import '../css/PalletShow.css'
import Swatch from './Pallet/Swatch'
import { addPallet, addJoin, setSwatchText, selectMockupShow } from '../../redux/actions';

const PalletShow = (props) => {
  const hexOne = hsl(props.selectedPallet.OneHue, props.selectedPallet.OneSat, props.selectedPallet.OneLight).toUpperCase()
  const hexTwo = hsl(props.selectedPallet.TwoHue, props.selectedPallet.TwoSat, props.selectedPallet.TwoLight).toUpperCase()
  const hexThree = hsl(props.selectedPallet.ThreeHue, props.selectedPallet.ThreeSat, props.selectedPallet.ThreeLight).toUpperCase()
  const hexFour = hsl(props.selectedPallet.FourHue, props.selectedPallet.FourSat, props.selectedPallet.FourLight).toUpperCase()
  const hexFive = hsl(props.selectedPallet.FiveHue, props.selectedPallet.FiveSat, props.selectedPallet.FiveLight).toUpperCase()
  const the_hex_id = `${props.selectedPallet.OneHue}${props.selectedPallet.OneSat}${props.selectedPallet.OneLight}-${props.selectedPallet.TwoHue}${props.selectedPallet.TwoSat}${props.selectedPallet.TwoLight}-${props.selectedPallet.ThreeHue}${props.selectedPallet.ThreeSat}${props.selectedPallet.ThreeLight}-${props.selectedPallet.FourHue}${props.selectedPallet.FourSat}${props.selectedPallet.FourLight}-${props.selectedPallet.FiveHue}${props.selectedPallet.FiveSat}${props.selectedPallet.FiveLight}`

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
        hex_id: the_hex_id,
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
      if (props.current_user.pallets.find(p => p.hex_id === the_hex_id)) {
        alert("You have already saved that palette")
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
            hex_id: pallet.hex_id,
          })
        })
        props.history.goBack()
      }
    }
  }

  let handelUnitChange = (e) => {
    props.setSwatchText(e.target.dataset.id)
  }

  let handleMockUpMenu = (e) => {
    props.selectMockupShow(e.target.value)
  }

  let renderMockup = () => {
    if (props.mockupShow === 'All Mockups') {
      return (
        <div>
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
          <div className='star-one-container'>
            <GradientMockup
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
              />
          </div>
          <div className='star-one-container'>
            <BuisnessCardMockup
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
              />
          </div>
        </div>
      )
    }
    if (props.mockupShow === 'Text Mockup') {
      return (
          <div className='star-one-container'>
            <TextMockup
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
            />
          </div>
      )
    }
    if (props.mockupShow === 'Website Mockup') {
      return (
          <div className='star-one-container'>
            <WebsiteMockup
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
            />
          </div>
      )
    }
    if (props.mockupShow === 'Logo Mockup') {
      return (
          <div className='star-one-container'>
            <LogoMockup
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
            />
          </div>
      )
    }
    if (props.mockupShow === 'Gradient Mockup') {
      return (
          <div className='star-one-container'>
            <GradientMockup
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
            />
          </div>
      )
    }
    if (props.mockupShow === 'Buisness Card Mockup') {
      return (
          <div className='star-one-container'>
            <BuisnessCardMockup
              hexOne = {hexOne}
              hexTwo = {hexTwo}
              hexThree = {hexThree}
              hexFour = {hexFour}
              hexFive = {hexFive}
            />
          </div>
      )
    }
  }

  return (
    <div className='pallet-show-container'>
      <div>
        <div className='pallet-show'>
          <div className='pallet-show-pallet'>
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

          <div className='unit-container'>
            <div className='unit-btn' id='hex' data-id='hex' onClick={handelUnitChange}>
              <p data-id='hex' >H E X</p>
            </div>
            <div className='unit-btn' id='rgb' data-id='rgb' onClick={handelUnitChange}>
              <p data-id='rgb' >R G B</p>
            </div>
            <div className='unit-btn' id='hsl' data-id='hsl' onClick={handelUnitChange}>
              <p data-id='hsl' >H S L</p>
            </div>
          </div>
          {props.selectedPallet.colorRelationships === undefined? (
            null
          ):(
            <div className='info-container'>
              <span className='info-header' >Color Relationships: </span>
              <span> {props.selectedPallet.colorRelationships} </span>
            </div>
          )}
        </div>
        <div className='mockup-container'>
            <div class="styled-select blue semi-square">
              <select
                onChange={handleMockUpMenu}
                value={props.mockupShow}
                >
                <option>All Mockups</option>
                <option>Text Mockup</option>
                <option>Website Mockup</option>
                <option>Logo Mockup</option>
                <option>Gradient Mockup</option>
                <option>Buisness Card Mockup</option>
              </select>
            </div>
          {renderMockup()}
        </div>
      </div>
    </div>
  )
}

function msp(state) {
  return {
    selectedPallet: state.selectedPallet,
    current_user: state.current_user,
    swatchText: state.swatchText,
    mockupShow: state.mockupShow,
  }
}

function mdp(dispatch){
  return {
    addPallet: (pallet) => dispatch(addPallet(pallet)),
    addJoin: (join) => dispatch(addJoin(join)),
    setSwatchText: (type) => dispatch(setSwatchText(type)),
    selectMockupShow: (mockup) => dispatch(selectMockupShow(mockup)),
  }
}

export default withRouter(connect(msp, mdp)(PalletShow));
