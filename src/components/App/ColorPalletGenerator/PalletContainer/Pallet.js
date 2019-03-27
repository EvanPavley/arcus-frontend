import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import hsl from 'hsl-to-hex'

import Swatch from './Swatch'
import { selectPallet, deletePallet, setEditablePallet, addPallet, addJoin, selectHexPallet } from '../../../../actions/actions';
import './Pallet.css'

const Pallet = (props) => {

  let postPallet = (palletObj) => {
    return fetch('http://localhost:3000/api/v1/pallets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        one: palletObj.hexOne,
        two: palletObj.hexTwo,
        three: palletObj.hexThree,
        four: palletObj.hexFour,
        five: palletObj.hexFive,
        hex_id: `${palletObj.hexOne}-${palletObj.hexTwo}-${palletObj.hexThree}-${palletObj.hexFour}-${palletObj.hexFive}`,
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
    } else {
      const hexPalletObj = {
        hexOne: hsl(props.OneHue, props.OneSat, props.OneLight).toUpperCase(),
        hexTwo: hsl(props.TwoHue, props.TwoSat, props.TwoLight).toUpperCase(),
        hexThree: hsl(props.ThreeHue, props.ThreeSat, props.ThreeLight).toUpperCase(),
        hexFour: hsl(props.FourHue, props.FourSat, props.FourLight).toUpperCase(),
        hexFive: hsl(props.FiveHue, props.FiveSat, props.FiveLight).toUpperCase(),
      }
      postPallet(hexPalletObj)
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
    }
  }

  let handleClick = () => {
    props.selectPallet({
      OneHue: props.OneHue,
      OneSat: props.OneSat,
      OneLight: props.OneLight,

      TwoHue: props.TwoHue,
      TwoSat: props.TwoSat,
      TwoLight: props.TwoLight,

      ThreeHue: props.ThreeHue,
      ThreeSat: props.ThreeSat,
      ThreeLight: props.ThreeLight,

      FourHue: props.FourHue,
      FourSat: props.FourSat,
      FourLight: props.FourLight,

      FiveHue: props.FiveHue,
      FiveSat: props.FiveSat,
      FiveLight: props.FiveLight,
    })
    props.setEditablePallet({
      OneHue: props.OneHue,
      OneSat: props.OneSat,
      OneLight: props.OneLight,

      TwoHue: props.TwoHue,
      TwoSat: props.TwoSat,
      TwoLight: props.TwoLight,

      ThreeHue: props.ThreeHue,
      ThreeSat: props.ThreeSat,
      ThreeLight: props.ThreeLight,

      FourHue: props.FourHue,
      FourSat: props.FourSat,
      FourLight: props.FourLight,

      FiveHue: props.FiveHue,
      FiveSat: props.FiveSat,
      FiveLight: props.FiveLight,
    })
    if (props.onProfile === true) {

    }else {
      props.history.push(`/PalletShow`)
    }
  }

  let handelDelete = (e) => {
    props.selectPallet({
      OneHue: props.OneHue,
      OneSat: props.OneSat,
      OneLight: props.OneLight,

      TwoHue: props.TwoHue,
      TwoSat: props.TwoSat,
      TwoLight: props.TwoLight,

      ThreeHue: props.ThreeHue,
      ThreeSat: props.ThreeSat,
      ThreeLight: props.ThreeLight,

      FourHue: props.FourHue,
      FourSat: props.FourSat,
      FourLight: props.FourLight,

      FiveHue: props.FiveHue,
      FiveSat: props.FiveSat,
      FiveLight: props.FiveLight,
    })

    let targetPallet = props.current_user.pallets.find(p => p.id === props.id)
    let filteredPallets = props.current_user.pallets.filter(p => p !== targetPallet)
    props.deletePallet(filteredPallets)

    let targetJoin = props.current_user.user_pallets.find(j => j.pallet_id === targetPallet.id)
    fetch(`http://localhost:3000/api/v1/user_pallets/${targetJoin.id}`, {
      method: "DELETE"
    })
  }

  return (
    <div className='pallet'>
      <div
        className='swatchHolder'
        onClick= {handleClick}
        >
        <Swatch
          h={ props.OneHue }
          s={ props.OneSat }
          l={ props.OneLight }
          height={props.height}
          width={props.width}
          fontSize={'.8em'}
          visibility={props.visibility}
          editable={props.editable}
          border={props.border}
          borderHover={props.borderHover}
          number={"one"}
        ></Swatch>
        <Swatch
          h={ props.TwoHue }
          s={ props.TwoSat }
          l={ props.TwoLight }
          height={props.height}
          width={props.width}
          fontSize={'.8em'}
          visibility={props.visibility}
          editable={props.editable}
          border={props.border}
          borderHover={props.borderHover}
          number={"two"}
        ></Swatch>
        <Swatch
          h={ props.ThreeHue }
          s={ props.ThreeSat }
          l={ props.ThreeLight }
          height={props.height}
          width={props.width}
          fontSize={'.8em'}
          visibility={props.visibility}
          editable={props.editable}
          border={props.border}
          borderHover={props.borderHover}
          number={"three"}
        ></Swatch>
        <Swatch
          h={ props.FourHue }
          s={ props.FourSat }
          l={ props.FourLight }
          height={props.height}
          width={props.width}
          fontSize={'.8em'}
          visibility={props.visibility}
          editable={props.editable}
          border={props.border}
          borderHover={props.borderHover}
          number={"four"}
        ></Swatch>
        <Swatch
          h={ props.FiveHue }
          s={ props.FiveSat }
          l={ props.FiveLight }
          height={props.height}
          width={props.width}
          fontSize={'.8em'}
          visibility={props.visibility}
          editable={props.editable}
          border={props.border}
          borderHover={props.borderHover}
          number={"five"}
        ></Swatch>
      </div>
        {props.onProfile === true && props.editable === false? (
          <div className="toolItems">
            <div>
              0 saves
            </div>
            <div className="pallet-btn" id="deletee" onClick={handelDelete}>
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.17 87.17">
                <path
                  fill="#a5a5a5"
                  d="M253.54,843a9.89,9.89,0,0,1-1.31-.93q-9.48-9.45-18.95-18.94c-1.32-1.32-2-1.32-3.35,0L211.1,842c-1.13,1.13-1.79,1.14-2.92,0q-4.06-4-8.12-8.12c-1-1-.95-1.71,0-2.68l19.13-19.13c1.08-1.08,1.09-1.9,0-3l-19.07-19.07c-1.09-1.09-1.1-1.76,0-2.87q4-4,8.06-8.06c1.05-1,1.79-1,2.83,0l19.13,19.13c1,1,1.83,1,2.89,0l19-19c1.17-1.17,1.84-1.17,3,0l7.94,7.94c1.12,1.13,1.13,1.82,0,2.93l-19,19c-1.14,1.14-1.13,1.89,0,3l19,18.94c1.21,1.21,1.2,1.84,0,3.06-2.71,2.71-5.41,5.42-8.14,8.11A7.68,7.68,0,0,1,253.54,843Z"
                  transform="translate(-188.09 -767.11)"/>
              </svg>
            </div>
          </div>
        ):(
          <div className="toolItems">
            <div>
              0 saves
            </div>
            <div className="tool-btns">
              {/*
              <div className="pallet-btn">
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.7 53.7">
                	<g id="_5" data-name=" 5">
                		<path
                      fill="#a5a5a5"
                      d="M26.9,0C12,0,0,10.3,0,23,0,33.5,8.2,42.3,19.4,45.1l7.5,8.6,7.5-8.6C45.5,42.3,53.7,33.6,53.7,23,53.7,10.3,41.7,0,26.9,0Zm2.3,38.7-2.4,3.8L24,38.8C13.9,36.7,8.3,27.3,8.3,22.8s4.5-14,18.3-14,18.2,9.2,18.2,14S39.4,36.5,29.2,38.7Z"/>
                	</g>
                </svg>
              </div>
              */}
              <div className="pallet-btn" onClick={handleSave}>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.65 34.65">
                  <path
                  fill="#a5a5a5"
                  d="M342.69,633.6v-1.44c0-3.45,0-6.9,0-10.35a2,2,0,0,1,2.12-2.27,17.87,17.87,0,0,1,2.07,0,2,2,0,0,1,2.12,2.27v11.76c.31-.28.49-.42.66-.58l4.22-4.23a2.23,2.23,0,0,1,3.32-.06c.32.29.63.6.92.92a2.16,2.16,0,0,1,0,3.41c-2,2-4,4-6,6-1.48,1.48-3,3-4.44,4.45-1.27,1.26-2.34,1.26-3.61,0L333.55,633a2.06,2.06,0,0,1-.07-3.22c.32-.36.66-.7,1-1a2.21,2.21,0,0,1,3.26,0l4.23,4.22C342.15,633.11,342.34,633.27,342.69,633.6Z"
                  transform="translate(-328.59 -615.02)"/>
                </svg>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

function msp(state) {
  return {
    selectedPallet: state.selectedPallet,
    selectedHexPallet: state.selectedHexPallet,
    users: state.users,
    current_user: state.current_user,
    editablePallet: state.editablePallet,
  }
}

function mdp(dispatch){
  return {
    selectPallet: (pallet) => dispatch(selectPallet(pallet)),
    selectHexPallet: (pallet) => dispatch(selectHexPallet(pallet)),
    setEditablePallet: (pallet) => dispatch(setEditablePallet(pallet)),
    deletePallet: (pallets) => dispatch(deletePallet(pallets)),
    addPallet: (pallet) => dispatch(addPallet(pallet)),
    addJoin: (join) => dispatch(addJoin(join)),
  }
}

export default connect(msp, mdp)(withRouter(Pallet))
