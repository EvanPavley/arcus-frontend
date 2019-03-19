import ColorAdapter from '../ColorAdapter'
import { CHANGE_HUE, CHANGE_SATURATION, CHANGE_LIGHT, SELECT_PALLET, INPUT_CHANGE, SET_USERS, SET_CURRENT_USER, ADD_PALLET } from '../types';

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
  current_user: {
    "id": 4,
    "username": "Evan",
    "email": "e@p.com",
    "password": "123",
    "pallets": [
      {
      "id": 6,
      "one": "#00BBFF",
      "two": "#FF668A",
      "three": "#FFDB66",
      "four": "#66FFDB",
      "five": "#66D6FF",
      "created_at": "2019-03-19T14:29:02.005Z",
      "updated_at": "2019-03-19T14:29:02.005Z"
      },
      {
      "id": 7,
      "one": "#AF2708",
      "two": "#E00B4E",
      "three": "#D91251",
      "four": "#7F1C06",
      "five": "#7B1F0A",
      "created_at": "2019-03-19T14:29:02.007Z",
      "updated_at": "2019-03-19T14:29:02.007Z"
      },
      {
      "id": 8,
      "one": "#F41AC9",
      "two": "#A1F97B",
      "three": "#1AF4B3",
      "four": "#21EDB0",
      "five": "#D10AAA",
      "created_at": "2019-03-19T14:29:02.009Z",
      "updated_at": "2019-03-19T14:29:02.009Z"
      }
    ]
  },
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
    default:
      return state;
  }
}
