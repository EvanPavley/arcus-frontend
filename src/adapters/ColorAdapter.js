
export default class ColorAdapter {
  static getComplement (hue) { return hue + 180 }
  static getAnalogusRight (hue) { return hue + 30 }
  static getAnalogusLeft (hue) { return hue - 30 }
  static getSplitComplementaryLeft (hue) { return hue + 210 }
  static getSplitComplementaryRight (hue) { return hue + 150 }
  static getTriadicLeft (hue) { return hue + 240 }
  static getTriadicRight (hue) { return hue + 120 }

  static getLightenOne (light){
    let newLight = 0
    if (light <= 65 && light > 40) {
      newLight = light + 3
    }else if (light > 65) {
      newLight = 70
    }else{
      newLight = light + 10
    }
    return newLight
  }
  static getDarkenOne (light) {
    let newLight = 0
    if (light > 50) {
      newLight = light - 15
    }else{
      newLight = light - 10
    }
    return newLight
  }

  static getDesaturateOne (sat) {
    let newSat = 0
    if (sat > 70) {
      newSat = sat - 35
    }
    else {
      newSat = sat + 35
    }
    return newSat
  }
  static getDesaturateTwo (sat) {
    let newSat = 0
    if (sat > 60) {
      newSat = sat - 70
    }else {
      newSat = sat + 10
    }
    return newSat
  }
}
