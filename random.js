//converting float number into integer by some functions

    var num=2.123567;
//1.'Math.floor()',round a number downward to its nearest integer
    // var result = Math.floor(num);
    // console.log(result);

//2.'Math.ceil()',round a number upward to its nearest integer:
    // var result2 = Math.ceil(num);
    // console.log(result2);

//3.'Math.round()',round a number to the nearest integer

    // var result3=Math.round(num);
    // console.log(result3);

    // var num1=2.5
    // var result4=Math.round(num1);
    // console.log(result4);

//4.'Math.random()',this method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
    // var random = Math.random();
    // console.log(random); //on each print it shows random values
    
    //'Math.random()', to return a random number between 1 and 10:
    // var random1 = Math.random()*10;
    // var output1 = Math.round(random1); //rounding to integar
    // console.log(output1);
    //for exclusive '1' it doesn't take full '10',to also get '10':
    // var random2 = (Math.random()*10)+1;
    // var output2 = Math.round(random2);
    // console.log(output2);

//5.'Math.random()',make a Dice:
    // var dice = Math.random() * 6;
    // var diceOutput = Math.round(dice);
    
    // console.log(diceOutput);

//6.Taking a for-loop with a condition-we can play 10 times:
    for(var i=0;i<10;i++){
        var dice = Math.random() * 6;
        var diceOutput = Math.round(dice);
        
        console.log(diceOutput);
    }

