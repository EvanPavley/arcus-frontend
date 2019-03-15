import ColorAdapter from '../ColorAdapter'
import { CHANGE_HUE, CHANGE_LIGHT, CHANGE_SATURATION } from '../types';

const colorPalletState = {
  selectedColor: '#00bcff',
  h: 196,
  s: 100,
  l: 50,
  complementaryH: ColorAdapter.getComplement(196),
  analogusRightH: ColorAdapter.getAnalogusRight(196),
  analogusLeftH: ColorAdapter.getAnalogusLeft(196),
  splitComplementaryLeftH: ColorAdapter.getSplitComplementaryLeft(196),
  splitComplementaryRightH: ColorAdapter.getSplitComplementaryRight(196),
  triadicLeft: ColorAdapter.getTriadicLeft(196),
  triadicRight: ColorAdapter.getTriadicRight(196),
  lightenOne: ColorAdapter.getLightenOne(50),
  darkenOne: ColorAdapter.getDarkenOne(50),
  desaturateOne: ColorAdapter.getDesaturateOne(100),
  desaturateTwo: ColorAdapter.getDesaturateTwo(100),
};

export default function colorPalletReducer (state = colorPalletState, action){
  switch(action.type) {
    case CHANGE_HUE:
      return { ...state,
        selectedColor: action.payload.hex,
        h: action.payload.hue,
        complementaryH: ColorAdapter.getComplement(action.payload.hue),
        analogusRightH: ColorAdapter.getAnalogusRight(action.payload.hue),
        analogusLeftH: ColorAdapter.getAnalogusLeft(action.payload.hue),
        splitComplementaryLeftH: ColorAdapter.getSplitComplementaryLeft(action.payload.hue),
        splitComplementaryRightH: ColorAdapter.getSplitComplementaryRight(action.payload.hue),
        triadicLeft: ColorAdapter.getTriadicLeft(action.payload.hue),
        triadicRight: ColorAdapter.getTriadicRight(action.payload.hue),
      };
    case CHANGE_LIGHT:
      return state;
    case CHANGE_SATURATION:
      return state;
    default:
      return state;
  }
}
