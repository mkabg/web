import { Route, Routes } from "react-router";
import Home from "./pages/public/Home";
import Play from "./pages/player/Play";
import LoginRegister from "./pages/public/Login-Register";
import CRUD from "./pages/admin/CRUD";

export default function Router() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/play" element={<Play/>}/>
            <Route path="/login-register" element={<LoginRegister/>}/>
            <Route path="/admin" element={<CRUD/>}/>
        </Routes>
    </div>
  )
}
