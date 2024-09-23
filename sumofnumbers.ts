function forSum(numbers: number[]): number {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function whileSum(numbers: number[]): number {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

function recursionSum(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + recursionSum(numbers.slice(1));
}

function functionSum(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log('sumFor: ', forSum([1, 2, 3, 4]));
console.log('sumWhile: ', whileSum([1, 2, 3, 4]));
console.log('sumRecursion: ', recursionSum([1, 2, 3, 4]));
console.log('sumTheFunctionalWay: ', functionSum([1, 2, 3, 4]));
