// Not the best way to do this but it works.

export default function FindWinner (playerOneData, playerTwoData) {
    let winner;
    if(playerOneData === playerTwoData) winner = "It is a tie"
    if (playerOneData === "rock" && playerTwoData === "scissors") winner = "Player 1";
    if (playerTwoData === "rock" && playerOneData === "scissors") winner = "Player 2";
    if (playerOneData === "paper" && playerTwoData === "scissors") winner = "Player 2";
    if (playerTwoData === "paper" && playerOneData === "scissors") winner = "Player 1";
    if (playerOneData === "scissors" && playerTwoData === "rock") winner = "Player 2";
    if (playerTwoData === "scissors" && playerOneData === "rock") winner = "Player 1";
    if (playerOneData === "rock" && playerTwoData === "paper") winner = "Player 2";
    if (playerTwoData === "rock" && playerOneData === "paper") winner = "Player 1";
    return winner;
}