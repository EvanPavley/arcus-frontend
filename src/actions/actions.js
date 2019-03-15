import { CHANGE_HUE, CHANGE_LIGHT, CHANGE_SATURATION } from '../types';

export function changeHue({hue, hex}){
  return {type: CHANGE_HUE, payload: {hue, hex}}
}
