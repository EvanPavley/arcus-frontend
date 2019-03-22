import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Swatch from './Swatch'
import { selectPallet, deletePallet, setEditablePallet } from '../../../../actions/actions';
import './Pallet.css'

const Pallet = (props) => {
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
    <div
      className='pallet'
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
    {props.onProfile === true && props.editable === false? (
      <div className="delete-btn" onClick={handelDelete}>
        <p>X</p>
      </div>
    ):(null)}
    </div>
  )
}

function msp(state) {
  return {
    selectedPallet: state.selectedPallet,
    users: state.users,
    current_user: state.current_user,
    editablePallet: state.editablePallet,
  }
}

function mdp(dispatch){
  return {
    selectPallet: (pallet) => dispatch(selectPallet(pallet)),
    setEditablePallet: (pallet) => dispatch(setEditablePallet(pallet)),
    deletePallet: (pallets) => dispatch(deletePallet(pallets)),
  }
}

export default connect(msp, mdp)(withRouter(Pallet))
