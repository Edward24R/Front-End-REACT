


function replaceNumbersAtPositions(numbers, positions, value) {
    for (let pos of positions) {
      if (pos >= 0 && pos < numbers.length) {
        numbers[pos] = value;
      }
    }
    return numbers;
  }


  function getValueAtPosition(array, position) {
    if (position >= 0 && position < array.length) {
      return array[position];
    } else {
      return null; // or any other value you want to return for an invalid position
    }
  }