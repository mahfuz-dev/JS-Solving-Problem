//1.For swapping values of the variables-Take a temporary variable
    var a = 5;
    var b = 7;
    console.log("Before swap: a =",a,"b =",b);
    var temp = a; //now,'temp' has the value of 'a'.so we can use the 'a' freely

    a = b; //the variable 'a' is updated with value of 'b'.So we can use 'b' freely
    
    b = temp;//set the value of 'b' with the 'temp' value.which ultimately the initial value of 'a' we've set before

    console.log("After swap: a =",a,"b =",b);

//2.For swapping values of the variables-without temporary variable
    var x = 5;
    var y = 7;

    console.log("Before swap: x =",x,"y =",y);
    
    x = x + y; //the sum of 'x' & 'y' is the updated value of the variable 'x'
    
    y = x - y; //removing the value of 'y' from x(which is the sum of 'x' & 'y').Then 'y' is equals the real value of 'x'

    x = x - y; //removing the y from total 'x'(x+y).So the value of 'y' the value of 'x'

    console.log("After swap: x =",x,"y =",y);

//3.JS has special way to swap variable's value
    var p = 5;
    var q = 7;

    console.log("Before swap: p =",p,"q =",q);

    [p,q] = [q,p];//the value of 'p' will be 'q' & 'q' will be 'p'.The values swapped

    console.log("After swap: p =",p,"q =",q);