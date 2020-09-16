const numbers = [1, 2, 3, 4, 5];
const multiplyTheGreatest = 3;

function calculation (numb: number[], mtg: number) {
  return numb
    .sort((a,b) => b-a)
    .slice(0, mtg)
    .reduce((a, b) => a * b);
}

calculation(numbers, multiplyTheGreatest)

function calculationAl (numb: number[], mtg: number) {
  const numbs = numb.sort((a,b) => b-a);

  const factorial = (number, mt) => {
    return mt <= 0 ? 1 : number[mt - 1] *= factorial(number, mt - 1);
  };

  return factorial(numbs, mtg);
}

calculationAl(numbers, multiplyTheGreatest);
