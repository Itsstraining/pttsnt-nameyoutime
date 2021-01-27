// Add new functions, variables here
function Tach(x) {
  let kq = [];

  let temp = [];
  
  for (let i = 2; i < x - 1; i++) {
    if (x % i == 0) {
      temp.push(i);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] * temp[i + 1] == x) {
      return (kq = kq + temp[i] + " " + temp[i + 1]);
    }
    return kq;
  }

}

function main(input) {
  // Your code goes here
  // Using console.log to answer the question
  let x = parseInt(input);
  if(x<=1){
    console.log(0)
  }else{
    console.log(Tach(x));
  }
  
  
}

module.exports = main;
