import ColorAdapter from '../adapters/ColorAdapter'
import { CHANGE_HUE, CHANGE_SATURATION, CHANGE_LIGHT, SELECT_PALLET, INPUT_CHANGE, SET_USERS, SET_CURRENT_USER, ADD_PALLET, ADD_JOIN, DELETE_PALLET, SET_EDITABLE_PALLET, SELECT_COLOR_NUM, EDIT_COLOR, SELECT_HEX_PALLET, SET_SWATCH_TEXT, SELECT_MOCKUP_SHOW, SELECT_NAV_MENU } from './types';

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

  editablePallet: {
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

  selectedHexPallet: {
    hexOne: '',
    hexTwo: '',
    hexThree: '',
    hexFour: '',
    hexFive: '',
  },

  username: '',
  email: '',
  password: '',

  users: [],
  current_user: null,

  selectedColorNum: null,
  swatchText: 'hex',

  mockupShow: 'All Mockups',
  navMenu: 'Select a Page',
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
        desaturateOne: ColorAdapter.getDesaturateOne(action.payload),
        desaturateTwo: ColorAdapter.getDesaturateTwo(action.payload),
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
    case SET_SWATCH_TEXT:
      return{ ...state,
        swatchText: action.payload,
      }
    case SELECT_HEX_PALLET:
      return{ ...state,
        selectedHexPallet: action.payload,
      }
    case SET_EDITABLE_PALLET:
      return{ ...state,
        editablePallet: action.payload,
      }
    case SELECT_MOCKUP_SHOW:
      return{ ...state,
        mockupShow: action.payload,
      }
    case SELECT_NAV_MENU:
      return{ ...state,
        navMenu: action.payload,
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
    case ADD_PALLET:
      return{...state,
        current_user: {
          ...state.current_user,
          pallets:[
            ...state.current_user.pallets,
            action.payload
          ],
        }
      }
    case ADD_JOIN:
    return{...state,
      current_user: {
        ...state.current_user,
        user_pallets:[
          ...state.current_user.user_pallets,
          action.payload
        ],
      }
    }
    case DELETE_PALLET:
      return{...state,
        current_user: {
          ...state.current_user,
          pallets: action.payload
        }
      }
    case SELECT_COLOR_NUM:{
      return{ ...state,
        selectedColorNum: action.payload,
      }
    }
    case EDIT_COLOR:{
      return{...state,
        editablePallet: {
          ...state.editablePallet,
          [action.payload.name]: action.payload.value,
        }
      }
    }
    default:
      return state;
  }
}
