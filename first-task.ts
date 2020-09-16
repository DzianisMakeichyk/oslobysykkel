const numbers = [1, 2, 3, 4, 5];
const multiplyTheGreatest = 3;

function calculation (numb: number[], mtg: number) {
  return numb
    .sort((a,b) => b-a)
    .slice(0, mtg)
    .reduce((a, b) => a * b);
}

calculation(numbers, multiplyTheGreatest)

