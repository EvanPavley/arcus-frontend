import { CHANGE_HUE, CHANGE_SATURATION, CHANGE_LIGHT, SELECT_PALLET } from '../types';

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
