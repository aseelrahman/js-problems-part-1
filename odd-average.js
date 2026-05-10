/*
    function takes an array as parameter
    give me the average of the odd numbers in the array
*/

function oddAverage(numbers){
    console.log(numbers);
    const odds = [];
    let sum = 0;
    for(const num of numbers){
        if(num % 2 !== 0){
            odds.push(num)
        }

    }
    for(const num of odds){
        sum = sum + num;
    }

    const avg = sum/odds.length;
    return avg;
}

const numbers = [42, 13, 58, 65, 81];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is: ', avg);
