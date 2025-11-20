import { Routes, Route } from "react-router-dom"
import { routesConfig } from "./routers.config"
import DefaultLayout from "@/components/layout/DefaultLayout"
import AuthLayout from "@/components/layout/AuthLayout"
import NoLayout from "@/components/layout/NoLayout"


const layouts = {
    default: DefaultLayout,
    auth: AuthLayout,
    none: NoLayout
}

const AppRouter = () => {
    return <div className="min-h-screen bg-background">
        <Routes>
            
            {routesConfig.map((route) => {

                const Layouts = layouts[route.layout] || NoLayout

                return(
                    <Route 
                    key={route.path} 
                    path={route.path} 
                    element={layouts[route.layout] || NoLayout}></Route>
                )
            })}

        </Routes>
    </div>
}

export default AppRouter