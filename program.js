// Add new functions, variables here
function Tach(x) {
  let kq = "";

  let temp = [];

  for (let i = 2; i < x - 1; i++) {
    if (x % i == 0) {
      temp.push(i);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    if (i==0) {
      kq = temp[i];
    } else {
      kq = kq + " " + temp[i];
    }
  }
  return kq;

  // for (let i = 0; i < temp.length; i++) {
  //   if (temp[i] * temp[i + 1] != x) {
  //     for (let i = 2; i < x - 1; i++) {
  //       if (x % i == 0) {
  //         x = x / i;
  //         temp.push(i);
  //       }
  //     }
  //   }
  // }
  // for(let i = 0 ; temp.length;i++){
  //   kq += " " + temp[i];
  // }
  // return kq;
}

function convert(x) {
  temp = Array;
  x = temp;
  let kq;
  for (let i = 0; i < temp.length; i++) {
    kq = kq + " " + temp[i];
  }
  return kq;
}

function main(input) {
  // Your code goes here
  // Using console.log to answer the question
  let x = parseInt(input);
  if (x <= 1) {
    console.log(0);
  } else {
    console.log(Tach(x));
  }
}

module.exports = main;
