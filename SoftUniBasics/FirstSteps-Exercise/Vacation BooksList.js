function vacationBooksList(input) {

    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);

    let hoursNeededPerBook = bookPages / pagesPerHour
    let neededDays = hoursNeededPerBook/daysPerBook

    console.log(neededDays);
}

vacationBooksList(["212 ", "20 ", "2 "]);
vacationBooksList(["432 ", "15 ", "4 "]);