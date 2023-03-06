function projectsCreation(input) {

    let architectName = input[0];
    let projectsToDo = Number(input[1]);
    let timePerProject = 3;
    let hoursNeededForAllProjects = projectsToDo * timePerProject;

    console.log(`The architect ${architectName} will need ${hoursNeededForAllProjects} hours to complete ${projectsToDo} project/s.`);
}

projectsCreation(["George ", "4 "]);
projectsCreation(["Sanya ", "9 "]);