// Remove duplicate item from an array
var name = [3, 6, 2, 7, 2, 3, 6, 9, 11, 56, 7];
var uniqueName = [];

for (var i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
    
}
console.log(uniqueName);