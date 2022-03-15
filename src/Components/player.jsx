import { parse } from "query-string";
import { useLocation } from "react-router-dom";
import "../Assets/Player.css";

function PlayerBase() {
  const { search } = useLocation();
  const { id } = parse(search);
  const playerOneData = localStorage.getItem("player1");
  const playerTwoData = localStorage.getItem("player2");
  const hostname = window.location.protocol + "//" + window.location.host;
  if (![1, 2].includes(parseInt(id))) {
    if (!playerOneData) {
      window.location.replace(`${hostname}/player?id=1`);
    }
    window.location.replace(`${hostname}/player?id=2`);
  }
  if (!playerOneData && id !== "1") {
    window.location.replace(`${hostname}/player?id=1`);
  }
  if (playerOneData && playerTwoData) {
    window.location.replace(`${hostname}/playing`);
  }
  return <Player />;
}

function setItem(value, player) {
    const hostname = window.location.protocol + "//" + window.location.host;
    localStorage.setItem(`player${player}`, `${value}`);
    if (parseInt(player) === 1) { 
        window.location.replace(`${hostname}/player?id=2`);
    } else {
        window.location.replace(`${hostname}/player?id=1`);
    }
}

function Player() {
  let player;
  if (localStorage.getItem("player1") === null) {
    player = "1";
  } else {
    player = "2";
  }

  return (
    <>
      <div className="main">
        <h1>
          Player <span className="playernumber">{player}</span> turn.
        </h1>
        <div className="buttons">
          <a
            className="btn rock"
            onClick={() => {
              setItem("rock", player);
            }}
          >
            Rock
          </a>
          <a
            className="btn paper"
            onClick={() => {
              setItem("paper", player);
            }}
          >
            Paper
          </a>
          <a
            className="btn scissors"
            onClick={() => {
              setItem("scissors", player);
            }}
          >
            Scissors
          </a>
        </div>
      </div>
    </>
  );
}

export default PlayerBase;
