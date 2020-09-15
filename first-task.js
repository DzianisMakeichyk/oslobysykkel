const numbers = [1, 2, 3, 4, 5];
const multiplyTheGreatest = 3;

function calculation (numb, mtg) {
  const sortedList = numb.sort((a,b) => b-a);

  let product = 1;

    for(let i = 0; i<mtg; i++) {
      product = product * sortedList[i];
    }
  
    console.log(product)
}

calculation(numbers, multiplyTheGreatest)

