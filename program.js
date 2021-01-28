// Add new functions, variables here

function KtSNT(x) {
  let flag = true;
  if (x < 2) {
    flag = false;
  } else {
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        flag = false;
        break;
      }
    }
  }

  return flag;
}
function hoanDoi(x) {
  let kq = "";
  temp = x;
  for (let j = 0; j < temp.length; j++) {
    if (j == 0) {
      kq += temp[j];
    } else {
      kq += " " + temp[j];
    }
  }
  return kq;
}

function Tach(x) {
  let n = x;
  let temp = [];
  if (x <= 2) {
    return x;
  } else {
    while (!KtSNT(n)) {
      for (let i = 0; i < n; i++) {
        if (KtSNT(i) && n % i == 0) {
          temp.push(i);
          n = n / i;
          break;
        }
      }
    }
    temp.push(n);
    return hoanDoi(temp);
  }
}
function main(input) {
  // Your code goes here
  // Using console.log to answer the question
  let x = parseInt(input);
  console.log(Tach(x));
}

module.exports = main;
