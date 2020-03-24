//Find the largest element of an array

var marks = [45, 81, 61, 55, 98, 33, 42];
var max = marks[0];

for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    
    if (element>max) {
        max = element;
    }
}

console.log("The highest mark is: ",max);