////Task 1
const num = [1, 2, 3, 4, 5]
const double = []
for (let i = 0; i < num.length; i = i + 1) {
    double[i] = num[i] * 2
}
console.log('doubled numbers', double)

////Task 2
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i = i + 1) {
    sum = sum + numbers[i]
}
console.log('summary', sum)


////Task 3
const number = [1, 2, 3, 4, 5]
function findAverage(number) {
    let sum = 0
    for (let i = 0; i < number.length; i = i + 1) {
        sum = sum + numbers[i]
    }
    return sum / number.length
}
console.log('average number', findAverage(number))

////Task 4
const numberr = [5, 2, 44, 33, 9]
function foundSmallest(numberr) {
    let smallest = numberr[0]
    for (let i = 0; i < numberr.length; i = i + 1)
        if (numberr[i] < smallest) {
            smallest = numberr[i]
        }
    return smallest;
}
console.log('smallest number', foundSmallest(numberr))

////Task 5
const amount = [5, 2, 44, 33, 9]
function foundBiggest(amount) {
    let biggest = amount[0]
    for (let i = 0; i < amount.length; i = i + 1)
        if (amount[i] > biggest) {
            biggest = amount[i]
        }
    return biggest;
}
console.log('biggest number', foundBiggest(amount))

///Task 6
const x = [2, 5, 23, 42, 67, 102, 34]
for (let i = 0; i < x.length; i = i + 1) {
    if (x[i] % 2 === 0) {
        console.log('even numbers', x[i])
    }
}

///Task 8
const y = [4, 6, 8, 10, 25, 44]
let sumSquare = 0
for (let i = 0; i < y.length; i = i + 1) {
    sumSquare = sumSquare + (y[i] * y[i])
}
console.log('sum of squares', sumSquare)

///Task 9 
function findIndex(array, target) {
    for (let i = 0; i < array.length; i = i + 1) {
      if (array[i] === target) {
        return i;
      }
    }
  }
  let array = [1, 6, 23, 71, 9, 5];
  let target = 5;
  console.log(findIndex('find index',array, target));  
  

////Task 10

function reversArray(arr) {
    return arr.reverse()
}
let arr = [4, 2, 5, 6, 3, 1, 7]
let reversed = reversArray(arr)

console.log('reversed',reversed)




