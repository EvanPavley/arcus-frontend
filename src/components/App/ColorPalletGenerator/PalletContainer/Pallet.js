import React from 'react'
import Swatch from './Swatch'
import './Pallet.css'

const Pallet = (props) => {
  return (
    <div className='pallet'>
      <Swatch
        h={ props.OneHue }
        s={ props.OneSat }
        l={ props.OneLight }
      ></Swatch>
      <Swatch
        h={ props.TwoHue }
        s={ props.TwoSat }
        l={ props.TwoLight }
      ></Swatch>
      <Swatch
        h={ props.ThreeHue }
        s={ props.ThreeSat }
        l={ props.ThreeLight }
      ></Swatch>
      <Swatch
        h={ props.FourHue }
        s={ props.FourSat }
        l={ props.FourLight }
      ></Swatch>
      <Swatch
        h={ props.FiveHue }
        s={ props.FiveSat }
        l={ props.FiveLight }
      ></Swatch>
    </div>
  )
}

export default Pallet
