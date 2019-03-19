import { CHANGE_HUE, CHANGE_SATURATION, CHANGE_LIGHT, SELECT_PALLET, INPUT_CHANGE, SET_USERS, SET_CURRENT_USER } from '../types';

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

export function handleInputChange({name, value}){
  return {type: INPUT_CHANGE, payload: {name, value}}
}

export function setUsers(users){
  return {type: SET_USERS, payload: users}
}

export function setCurrentUser(user){
  return {type: SET_CURRENT_USER, payload: user}
}
