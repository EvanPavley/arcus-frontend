import React from 'react'
import { connect } from 'react-redux';
import Pallet from './Pallet'
import './PalletContainer.css'

const PalletContainer = (props) => {
  // console.log(props)
  return (
    <div className='pallet-container'>
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.splitComplementaryRightH}
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.splitComplementaryLeftH }
          ThreeSat={ props.s }
          ThreeLight={ props.lightenOne }

          FourHue={ props.analogusLeftH }
          FourSat={ props.s }
          FourLight={ props.lightenOne }

          FiveHue={ props.h }
          FiveSat={ props.s }
          FiveLight={ props.lightenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.analogusRightH }
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.analogusRightH }
          ThreeSat={ props.desaturateOne }
          ThreeLight={ props.lightenOne }

          FourHue={ props.h }
          FourSat={ props.s }
          FourLight={ props.darkenOne }

          FiveHue={ props.h }
          FiveSat={ props.desaturateOne }
          FiveLight={ props.darkenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.complementaryH }
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.analogusRightH}
          ThreeSat={ props.s }
          ThreeLight={ props.lightenOne }

          FourHue={ props.analogusRightH }
          FourSat={ props.s }
          FourLight={ props.l }

          FiveHue={ props.h }
          FiveSat={ props.s }
          FiveLight={ props.darkenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.analogusLeftH }
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.analogusLeftH }
          ThreeSat={ props.desaturateOne }
          ThreeLight={ props.lightenOne }

          FourHue={ props.h }
          FourSat={ props.s }
          FourLight={ props.darkenOne }

          FiveHue={ props.h }
          FiveSat={ props.desaturateOne }
          FiveLight={ props.darkenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.analogusRightH }
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.analogusLeftH }
          ThreeSat={ props.s }
          ThreeLight={ props.l }

          FourHue={ props.analogusLeftH }
          FourSat={ props.s }
          FourLight={ props.darkenOne }

          FiveHue={ props.h }
          FiveSat={ props.s }
          FiveLight={ props.darkenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.splitComplementaryLeftH }
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.splitComplementaryLeftH }
          ThreeSat={ props.desaturateOne }
          ThreeLight={ props.lightenOne }

          FourHue={ props.h }
          FourSat={ props.s }
          FourLight={ props.darkenOne }

          FiveHue={ props.h }
          FiveSat={ props.desaturateOne }
          FiveLight={ props.darkenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.splitComplementaryRightH }
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.splitComplementaryRightH }
          ThreeSat={ props.desaturateOne }
          ThreeLight={ props.lightenOne }

          FourHue={ props.h }
          FourSat={ props.s }
          FourLight={ props.darkenOne }

          FiveHue={ props.h }
          FiveSat={ props.desaturateOne }
          FiveLight={ props.darkenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.splitComplementaryRightH}
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.splitComplementaryLeftH }
          ThreeSat={ props.s }
          ThreeLight={ props.l }

          FourHue={ props.splitComplementaryLeftH }
          FourSat={ props.desaturateOne }
          FourLight={ props.l }

          FiveHue={ props.h }
          FiveSat={ props.s }
          FiveLight={ props.darkenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.complementaryH }
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.complementaryH }
          ThreeSat={ props.desaturateOne }
          ThreeLight={ props.lightenOne }

          FourHue={ props.h }
          FourSat={ props.s }
          FourLight={ props.darkenOne }

          FiveHue={ props.h }
          FiveSat={ props.desaturateOne }
          FiveLight={ props.darkenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.complementaryH}
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.complementaryH }
          ThreeSat={ props.s }
          ThreeLight={ props.l }

          FourHue={ props.splitComplementaryLeftH }
          FourSat={ props.s }
          FourLight={ props.lightenOne }

          FiveHue={ props.h }
          FiveSat={ props.s }
          FiveLight={ props.darkenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
      <Pallet
          OneHue={ props.h }
          OneSat={ props.s }
          OneLight={ props.l }

          TwoHue={ props.analogusLeftH}
          TwoSat={ props.s }
          TwoLight={ props.lightenOne }

          ThreeHue={ props.analogusLeftH }
          ThreeSat={ props.s }
          ThreeLight={ props.l }

          FourHue={ props.complementaryH }
          FourSat={ props.s }
          FourLight={ props.lightenOne }

          FiveHue={ props.h }
          FiveSat={ props.s }
          FiveLight={ props.darkenOne }

          visibility={'hidden'}
          height={'4.5rem'}
          width={'4.5rem'}
      />
  </div>
  )
}

function msp(state) {
  return {
    h: state.h,
    complementaryH: state.complementaryH,
    analogusRightH: state.analogusRightH,
    analogusLeftH: state.analogusLeftH,
    splitComplementaryLeftH: state.splitComplementaryLeftH,
    splitComplementaryRightH: state.splitComplementaryRightH,
    triadicLeft: state.triadicLeft,
    triadicRight: state.triadicRight,

    l: state.l,
    lightenOne: state.lightenOne,
    darkenOne: state.darkenOne,

    s: state.s,
    desaturateOne: state.desaturateOne,
    desaturateTwo: state.desaturateTwo,
  }
}

export default connect(msp)(PalletContainer)
