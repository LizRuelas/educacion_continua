function isPrime(num) {
  var primo = true;
  for(var j = 2 ; j <= num/2 ; j++){
    if(num % j  == 0){
      primo = false;
    }
  }
  return primo;
}

function getPrimes(start, end) {
  var primer_array = [];
  for (var i = start ; i < end ; i++) {
    if(isPrime(i)){
      primer_array.push(i);
    }
  }
  return primer_array;
}

module.exports = {
  isPrime : isPrime,
  getPrimes : getPrimes
}
