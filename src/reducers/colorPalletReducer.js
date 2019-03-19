import ColorAdapter from '../ColorAdapter'
import { CHANGE_HUE, CHANGE_SATURATION, CHANGE_LIGHT, SELECT_PALLET, INPUT_CHANGE, SET_USERS, SET_CURRENT_USER } from '../types';

const colorPalletState = {
  selectedColor: '#00bcff',

  h: 196,
  complementaryH: ColorAdapter.getComplement(196),
  analogusRightH: ColorAdapter.getAnalogusRight(196),
  analogusLeftH: ColorAdapter.getAnalogusLeft(196),
  splitComplementaryLeftH: ColorAdapter.getSplitComplementaryLeft(196),
  splitComplementaryRightH: ColorAdapter.getSplitComplementaryRight(196),
  triadicLeft: ColorAdapter.getTriadicLeft(196),
  triadicRight: ColorAdapter.getTriadicRight(196),

  s: 100,
  desaturateOne: ColorAdapter.getDesaturateOne(100),
  desaturateTwo: ColorAdapter.getDesaturateTwo(100),

  l: 50,
  lightenOne: ColorAdapter.getLightenOne(50),
  darkenOne: ColorAdapter.getDarkenOne(50),

  selectedPallet: {
    OneHue: 196,
    OneSat: 100,
    OneLight: 50,

    TwoHue: 346,
    TwoSat: 100,
    TwoLight: 70,

    ThreeHue: 46,
    ThreeSat: 100,
    ThreeLight: 70,

    FourHue: 166,
    FourSat: 100,
    FourLight: 70,

    FiveHue: 196,
    FiveSat: 100,
    FiveLight: 70,
  },

  username: '',
  email: '',
  password: '',

  users: [],
  current_user: {},
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
    case CHANGE_SATURATION:
      return  { ...state,
        s: action.payload,
        desaturateOne: ColorAdapter.getLightenOne(action.payload),
        desaturateTwo: ColorAdapter.getDarkenOne(action.payload),
      };
    case CHANGE_LIGHT:
      return { ...state,
        l: action.payload,
        lightenOne: ColorAdapter.getLightenOne(action.payload),
        darkenOne: ColorAdapter.getDarkenOne(action.payload),
      };
    case SELECT_PALLET:
      return{ ...state,
        selectedPallet: action.payload,
      }
    case INPUT_CHANGE:
      return{ ...state,
        [action.payload.name]: action.payload.value,
      }
    case SET_USERS:
      return{...state,
        users: action.payload,
      }
    case SET_CURRENT_USER:
      return{...state,
        current_user: action.payload
      }
    default:
      return state;
  }
}
