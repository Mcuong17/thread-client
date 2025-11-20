import { Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Login from "@/pages/Login"

const AppRouter = () => {
    return <div className="min-h-screen bg-background">
        <Routes>
            <Route path="/" Component={<Home/>}></Route>
            <Route path="/login" Component={<Login/>}></Route>
        </Routes>
    </div>
}

export default AppRouter