// Count the number of words in a string

//1.we can find the length of a string like array.Here,it counts each space and letter.
    //var speech = "I am a good boy. I pray salah regularly.";
    // console.log(speech.length);

//2.Find the letter with the position.
    //var speech = "I am a good boy. I pray salah regularly.";
    // console.log(speech[2]);

//3.We can't change any position of a string with the index like array.We can't set value in a string
    //var speech = "I am a good boy. I pray salah regularly.";
    // speech[2] = q;
    // console.log(speech[2]);

/**4.i)From this string we want to find the total number of words.We see after any word there is a whitespace, this whitespace also count as a character.If we just count the total whitespace,then we have counted the total words in a string.
 * ii)This for-loop goes on after each character/letter
 * ii)It skips the last word beacuse after the last word(i.e regularly) there is no whitespace we can addition the counts before console it.Now it shows the total count of words by the whitespace. 
*/
    //var speech = "I am a good boy. I pray salah regularly.";

    // var count = 0;
    // for (var i = 0; i < speech.length; i++) {
    //     var char = speech[i];
    //     if (char == " ") {
    //         count++;
    //     }
    // }

    // count++;//for step(iii)
    // console.log(count);

//5.If there are multiple whitespace after any charater then it also count those as words.To solve it we put a condition that there won't be another whitespace before the current whitespace which we count as a character.

    var speech = "I am a   good boy.  I   pray salah regularly.";

    var count = 0;
    for (var i = 0; i < speech.length; i++) {
        var char = speech[i];
        if (char == " " && speech[i-1] != " ") { //both condition should be true
            count++;
        }
    }

    count++;//for step(iii)
    console.log(count);
