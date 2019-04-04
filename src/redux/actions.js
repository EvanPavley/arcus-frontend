import { CHANGE_HUE, CHANGE_SATURATION, CHANGE_LIGHT, SELECT_PALLET, INPUT_CHANGE, SET_USERS, SET_CURRENT_USER, ADD_PALLET, ADD_JOIN, DELETE_PALLET, SET_EDITABLE_PALLET, SELECT_COLOR_NUM, EDIT_COLOR, SELECT_HEX_PALLET, SET_SWATCH_TEXT, SELECT_MOCKUP_SHOW, SELECT_NAV_MENU } from './types';

export function changeHue({hue, hex}){
  return {type: CHANGE_HUE, payload: {hue, hex}}
}
export function changeLight(light){
  return {type: CHANGE_LIGHT, payload: light}
}

export function changeSaturation(sat){
  return {type: CHANGE_SATURATION, payload: sat}
}

export function selectPallet(pallet){
  return {type: SELECT_PALLET, payload: pallet}
}

export function selectHexPallet(pallet){
  return {type: SELECT_HEX_PALLET, payload: pallet}
}

export function handleInputChange({name, value}){
  return {type: INPUT_CHANGE, payload: {name, value}}
}

export function setUsers(users){
  return {type: SET_USERS, payload: users}
}

export function setCurrentUser(user){
  return {type: SET_CURRENT_USER, payload: user}
}

export function addPallet(pallet){
  return{type: ADD_PALLET, payload: pallet}
}

export function addJoin(join){
  return{type: ADD_JOIN, payload: join}
}

export function deletePallet(pallets){
  return{type: DELETE_PALLET, payload: pallets}
}

export function setEditablePallet(pallet){
  return{type: SET_EDITABLE_PALLET, payload: pallet}
}

export function setSwatchText(type){
  return{type: SET_SWATCH_TEXT, payload: type}
}

export function selectMockupShow(mockup){
  return{type: SELECT_MOCKUP_SHOW, payload: mockup}
}

export function selectNavMenu(item){
  return{type: SELECT_NAV_MENU, payload: item}
}

export function selectColorNum(colorNum){
  return{type: SELECT_COLOR_NUM, payload: colorNum}
}

export function editColor({name, value}){
  return{type: EDIT_COLOR, payload: {name, value}}
}
