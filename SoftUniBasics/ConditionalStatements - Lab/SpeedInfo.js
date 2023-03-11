function speedInfo(input) {

    let speed = Number (input[0]);

    if (speed <= 10) {
      console.log("slow");
    } else if (speed <= 50) {
      console.log("average");
    } else if (speed <= 150) {
      console.log("fast");
    } else if (speed <= 1000) {
      console.log("ultra fast");
    } else {
      console.log("extremely fast");
    }

}

speedInfo(["8"]);
speedInfo(["49.5"]);
speedInfo(["126"]);
speedInfo(["160"]);
speedInfo(["3500"]);


// При скорост до 10 (включително) отпечатайте 
// При скорост над 10 и до 50 (включително) отпечатайте  
// При скорост над 50 и до 150 (включително) отпечатайте 
// При скорост над 150 и до 1000 (включително) отпечатайте 
// При по-висока скорост отпечатайте 
