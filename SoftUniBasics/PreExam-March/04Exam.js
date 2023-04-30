function exam(input) {
    index = 0;
    let studentsCount = Number(input[index]);
    index++

    let topStudents = 0;
    let fourToFivesStudents = 0;
    let threeToFourStudents = 0;
    let failedStudents = 0;
    let averageScore = 0;
    let totalScore = 0;

    for (index; index <= studentsCount; index++){
        let currentScore = Number(input[index]);
        totalScore += currentScore;
        if (currentScore < 3){
            failedStudents +=1;
        }else if (currentScore <4){
            threeToFourStudents +=1;
        } else if (currentScore < 5){
            fourToFivesStudents += 1;
        } else {
            topStudents +=1
        }

    }
    averageScore = totalScore/ studentsCount
    console.log(`Top students: ${((topStudents/studentsCount)*100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((fourToFivesStudents / studentsCount)*100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((threeToFourStudents/studentsCount)*100).toFixed(2)}%`);
    console.log(`Fail: ${((failedStudents/studentsCount)*100).toFixed(2)}%`);
    console.log(`Average: ${averageScore.toFixed(2)}`);
}

exam(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
exam(["6", "2", "3", "4", "5", "6", "2.2"])