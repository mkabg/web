import { Link } from "react-router";

export default function Home() {
    
  return (
    <div>
        <h1>Welcome to the riddle game</h1>
        {/* <button onClick={goToPlay}>Play</button>
        <button onClick={<Link to="/login-register"></Link>}>Login/Register</button>
        <button onClick={<Link to="/leaderboard"></Link>}>Leaderboard</button> */}
        <Link to="/play">Play</Link>
        <Link to="/login-register">Login/Register</Link>
        <Link to="/leaderboard">LeaderBoard</Link>
        
    </div>
  )
}


