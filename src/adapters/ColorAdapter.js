
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
      newLight = light + 20
    }else if (light > 65) {
      newLight = 85
    }else{
      newLight = light + 10
    }
    return newLight
  }
  static getDarkenOne (light) { return light - 10 }

  static getDesaturateOne (sat) {
    let newSat = 0
    if (sat > 60) {
      newSat = sat - 40
    }else {
      newSat = 20
    }
    return newSat
  }
  static getDesaturateTwo (sat) {
    let newSat = 0
    if (sat > 60) {
      newSat = sat - 70
    }else {
      newSat = 10
    }
    return newSat
  }
}
