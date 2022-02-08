// problem - 01
function anaToVori(ana) {
  // simple Erorr Handle
  if (typeof ana != "number" || ana <= 0) {
    return "please only valid number";
  }
  const vori = ana / 16;
  return vori;
}
const totalVori = anaToVori(48);
console.log(totalVori);
// provlem - 02
function pandaCost(singaraQuantity, samusaQuantity, jilapiQuantity) {
  // simple Erorr Handle
  if (typeof singaraQuantity != "number" || typeof samusaQuantity != "number" || typeof jilapiQuantity != "number") {
    return "please only number";
  }
  const singaraPrice = singaraQuantity * 7;
  const samusaPrice = samusaQuantity * 10;
  const jilapiPrice = jilapiQuantity * 15;
  // all item price
  const totalPrice = singaraPrice + samusaPrice + jilapiPrice;
  return totalPrice;
}
const allPrice = pandaCost(2, 0, 0);
console.log(allPrice);
// Problem - 03
function picnicBudget(pepole) {
  const pepole100 = 5000;
  const pepole200 = 4000;
  const pepole200Up = 3000;
  //simple Erorr Handle
  if (typeof pepole != "number" || pepole <= 0) {
    return "please only valid number";
  }
  // 100 friend for condition
  else if (pepole <= 100) {
    const fisrstCondition = pepole * pepole100;
    return fisrstCondition;
  }
  // 200 friend for condition
  else if (pepole <= 200) {
    const firstConditon = 100 * pepole100;
    const restPepole = pepole - 100;
    const secondCondition = restPepole * pepole200;
    const totalPepole = firstConditon + secondCondition;
    return totalPepole;
  }
  // 200 over friend for condition
  else {
    const firstConditon = 100 * pepole100;
    const secondCondition = 100 * pepole200;
    const thardPepole = pepole - 200;
    const thardCondition = thardPepole * pepole200Up;
    const totalPepole = firstConditon + secondCondition + thardCondition;
    return totalPepole;
  }
}
const picnicPepole = picnicBudget(300);
console.log(picnicPepole);
//problem - 04;
const friend = ["arif", "alif", "halim", "omi"];
function addFriend(friendNameCollection) {
  // simple Erorr Handle
  if (typeof friendNameCollection != "object") {
    return "please Input Firend Name like arry";
  }
  let oddName = friend[0];
  for (i = 0; i < friendNameCollection.length; i++) {
    const friendName = friendNameCollection[i].length;
    //odd friend name check
    if (friendName % 2 == 1) {
      oddName = friendNameCollection[i];
      break;
    }
  }
  return oddName;
}
const FrndName = addFriend(friend);
console.log(FrndName);
