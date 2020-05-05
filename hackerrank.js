//Sock Merchant
function findPairs(ar, find, pairs) {
  if (ar.length > 0) {
    let newArr = ar;

    if (newArr.indexOf(find) > -1) {
      pairs++;
      newArr = [...newArr.slice(0, newArr.indexOf(find)),
      ...newArr.slice(newArr.indexOf(find) + 1)];
    }
    return findPairs(
      newArr.slice(1), 
      newArr[0],
      pairs
    );
  }

  return pairs;
}
function sockMerchant(n, ar) {
  const min = 1;
  const max = 100;

  ar = (typeof ar === "string") ? ar.split(' ') : ar;

  if (ar.length >= min
    && ar.length <= max
    && n === parseInt(n, 0)
    && n >= min
    && n <= max
    && n === ar.length) {
    return findPairs(ar.slice(1), ar[0], 0);
  }

  // if does not meet criteria return 0
  return 0;
}


function pageCount(n, p) {
  /*
   * Write your code here.
   */
  let begCount = 0, revCount = 0;
  if (n === p) {
    return 0
  }
  else if (p <= Math.floor(n / 2)) {
    // start from beginning
    for (let i = 1; i < n; i += 2) {
      if (p > i) {
        begCount += 1;
      }
    }
    return begCount

  } else if (p > Math.floor(n / 2)) {
    //start from end
    if (n % 2 != 0) {
      n -= 1;
    }
    for (let j = n; j >= 0; j -= 2) {
      if (p < j) {
        revCount += 1;
      }
    }
    return revCount;
  }

}



function countingValleys(n, s) {
  let earthLevel = 0, count = 0, lastCount = 0;
  for (let i = 0; i < s.length; i++) {

    if (s[i] === 'U') {
      earthLevel += 1;
    } else {

      earthLevel -= 1;
      lastCount = earthLevel;

    }
    if (lastCount < 0 && earthLevel === 0) {
      count += 1;
    }


  }
  return count;
}