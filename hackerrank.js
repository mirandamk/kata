//Sock Merchant

function sockMerchant(n, ar) {
  // setting the constraints
  const min = 1;
  const max = 100;

  // if it's a string convert it to an array
  // ex "10 31 11" = ["10", "31", "11"]
  ar = typeof ar === 'string' ? ar.split(' ') : ar;
  // check if ar meets the requirements
  if (ar.length >= min && ar.length <= max) {
    // continue
  }
}
