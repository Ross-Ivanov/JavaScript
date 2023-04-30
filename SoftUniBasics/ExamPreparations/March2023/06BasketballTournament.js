function basketballTournament (input) {
    let index = 0;
    let command = input[index];

    let wins = 0;
    let loss = 0;
    let totalGamesPlayed = 0;

    while (command !=="End of tournaments") {
        let tournamentName = command;
        index++
        let totalGames = input[index]
        index++

        for (let start = 0; start < totalGames; start++){
            totalGamesPlayed +=1
            let homeTeamPoints = input[index];
            index++
            let awayTeamPoints = input[index];
            index ++

            if (homeTeamPoints > awayTeamPoints){
                wins += 1;
                console.log(`Game ${start + 1} of tournament ${tournamentName}: win with ${homeTeamPoints - awayTeamPoints} points.`
                );
            } else {
                loss += 1;
                console.log(`Game ${start +1} of tournament ${tournamentName}: lost with ${awayTeamPoints - homeTeamPoints} points.`
                );
            }
        }

        command = input[index]
    }
    let percentageGamesWon = wins / totalGamesPlayed * 100;
    let percentageGamesLost = loss / totalGamesPlayed * 100; ;

    console.log(`${percentageGamesWon.toFixed(2)}% matches win`);
    console.log(`${percentageGamesLost.toFixed(2)}% matches lost`);
}

basketballTournament([
  "Dunkers",
  "2",
  "75",
  "65",
  "56",
  "73",
  "Fire Girls",
  "3",
  "67",
  "34",
  "83",
  "98",
  "66",
  "45",
  "End of tournaments",
]);

basketballTournament([
  "Ballers",
  "3",
  "87",
  "63",
  "56",
  "65",
  "75",
  "64",
  "Sharks",
  "4",
  "64",
  "76",
  "65",
  "86",
  "68",
  "99",
  "45",
  "78",
  "End of tournaments",
]);