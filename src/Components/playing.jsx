import "../Assets/Playing.css";
import FindWinner from "./FindWinner";
function Playing() {
  const playerOneData = localStorage.getItem("player1");
  const playerTwoData = localStorage.getItem("player2");
  const hostname = window.location.protocol + "//" + window.location.host;
  if (!playerOneData || !playerTwoData)
    window.location.replace(`${hostname}/player`);

    let winner = FindWinner(playerOneData, playerTwoData);
    
    function WipeData() {
        localStorage.removeItem("player1"); localStorage.removeItem("player2");
    }
      return (
        <>
          <div className="container">
            <h1 className="header">Final Results are in!</h1>
            <div className="choices">
              <h3 className="player1">Player 1 Chose: {playerOneData}</h3>
              <h3 className="player2">Player 2 Chose: {playerTwoData}</h3>
            </div>
              {winner === "It is a tie" ? (
                <h1>
                  <span>Its is a tie</span>
                </h1>
              ) : (
                <h1>
                  <span className="winner">{winner}</span> is the winner
                </h1>
              )}
            <a
              href={`${hostname}`}
              onClick={() => {
                WipeData();
              }}
              className="startButton"
            >
              Restart Game
            </a>
          </div>
        </>
      );
}

export default Playing;
