//kata exercises

function getSum(a, b) {
  if (a === b) {
    return a
  } else {
    var totalNumber = 0

    var x = a;
    var y = b;

    if a > b {
      x = b;
      y = a;
    }

    for(var i = x; i<=y; i++)
     result += i;
  }
  return totalNumber;
}

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) {
    return []
  }
  var positiveNum = 0
  var negativeNum = 0

  for (i = 0; i < input.length; i++) {
    var number = input[i]

    if (number > 0) {
      positiveNum++
    } else {
      negativeNum += number
    }
  }
  return [positiveNum, negativeNum]
}

function makeNegative(num) {
  if (num <= 0) {
    return num
  } else {
    return (-num)
  }
}

function binaryArrayToNumber($arr) {
  $num = 0;
  $pow = 0;

  for ($i = count($arr) - 1; $i >= 0; $i--) {
    $num += pow(2, ($pow++)) * $arr[$i];
  }

  return $num;
}
