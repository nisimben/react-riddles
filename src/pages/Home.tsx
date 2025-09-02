import { Link, Route, Routes } from "react-router";
import Game from "./game";
import Register from "./signup";
import Login from "./login";
import './home.css';
export default function Home() {
  return (
    <>
    <div>RiddleQuest</div>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
    <Link to="/game">Game</Link>
    <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
    </Routes>
    </>
  ) 
}
