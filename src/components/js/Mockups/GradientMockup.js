import React from 'react'
import PropTypes from 'prop-types'
import '../../css/Mockups/GradientMockup.css'

const GradientMockup = (props) => {
  return (
    <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 1366 768">
      <defs>
        <linearGradient id="White_Black" y1="120" x2="1366" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color={props.hexOne} />
          <stop offset="100%" stop-color={props.hexTwo} />
        </linearGradient>
        <linearGradient id="White_Black-2" y1="384" y2="384" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color={props.hexThree} />
          <stop offset="100%" stop-color={props.hexOne} />
        </linearGradient>
        <linearGradient id="White_Black-3" y1="648" y2="648" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color={props.hexOne} />
          <stop offset="100%" stop-color={props.hexFour} />
        </linearGradient>
      </defs>
      <title>GradiantMockup
      </title>
      <rect class="ls-1" width="1366" height="240"/>
      <rect class="ls-2" y="264" width="1366" height="240"/>
      <rect class="ls-3" y="528" width="1366" height="240"/>
    </svg>
  )
}

export default GradientMockup
