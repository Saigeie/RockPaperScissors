import "../Assets/Home.css"

function Home() {
  return (
    <>
      <div className="main">
        <h1>
          <span className="rock">Rock</span>
          <span className="paper">Paper</span>
          <span className="scissors">Scissors</span>
        </h1>
        <a href="/player?id=1" className="startButton">Begin Playing</a>
      </div>
    </>
  );
}

export default Home