//Reverse a string
    var reverse = "";
    function reverseString(str){
        var reverse = "";
        for (var i = 0; i < str.length; i++) {
            var char = str[i];
            reverse = char + reverse; //newchar+firstchar
            
        }
        return reverse
    }

    var statement = "What is the purpose of Life?";
    var askQuestion = reverseString(statement);
    console.log(askQuestion);

    var answer = "Worship your Lord";
    var answerQuestion = reverseString(answer);
    console.log(answerQuestion);

//2.Another way to reverse a string
    var sentence = "I am hardworking. I am serious. I am sure I will do it";
    var reverse = sentence.split('').reverse().join();
    console.log(reverse)