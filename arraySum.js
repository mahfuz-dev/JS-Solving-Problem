//1.Sum of all numbers in an array
var marks = [45, 81, 61, 55, 98, 33, 42];
var sum = 0;
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    sum = sum + element;
    
}
console.log("The total marks is: ",sum);

//2.Sum of all numbers of any array in a resuseable function

function getArraySum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
    var element = marks[i];
    sum = sum + element;
    }
    return sum;
}

var num = [45, 81, 61, 55];
var result = getArraySum(num);
console.log("The total number: ",result);

var money =[45, 81, 61, 55, 98]
var total = getArraySum(money);
console.log("The total TK: ",total);
