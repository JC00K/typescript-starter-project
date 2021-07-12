function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  // Void Return Type
  console.log('Result: ' + num);
}

printResult(add(5, 12));
