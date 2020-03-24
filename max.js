    var azimTk = 500;
    var naimTk = 600;
    var rahimTk = 700;

//1.Finding maximum value with if-else
    // if (azimTk>naimTk) {
    //     if (azimTk>rahimTk) {
    //         console.log("Azim is the richest man")
    //     } else {
    //         console.log("Rahim is the richest man")
    //     }
    // } else {
    //     if (naimTk>rahimTk) {
    //         console.log("Naim is the richest man")
    //     } else {
    //         console.log("Rahim is the richest man")    
    //     }
    // }
    
//2.Finding maximum value with 'Math.max()' method
    var max = Math.max(azimTk, naimTk, rahimTk);
    console.log(max);