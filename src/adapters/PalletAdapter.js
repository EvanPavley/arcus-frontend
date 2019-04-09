export default class PalletAdapter {
  static postPallet(palletObj){
    return fetch('http://localhost:3000/api/v1/pallets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        one: palletObj.hexOne,
        two: palletObj.hexTwo,
        three: palletObj.hexThree,
        four: palletObj.hexFour,
        five: palletObj.hexFive,
        hex_id: palletObj.hex_id,
      })
    })
  }

  static postJoin(pallet_id, user_id){
    return fetch('http://localhost:3000/api/v1/user_pallets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user_id: user_id,
        pallet_id: pallet_id,
      })
    })
  }
}
