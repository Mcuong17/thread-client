import LoginPage from "@/features/auth/pages/LoginPage"
import { Outlet } from "react-router-dom"


import { useTheme } from "@/hooks/useTheme";
import Logo  from "@/assets/logo.svg";



const AuthLayout = ({ children }) => {
    const {theme} = useTheme();
    console.log('theme', theme)
    return <div className="min-h-screen bg-background flex items-center flex-col bg-contain bg-top bg-no-repeat bg-[url('@/assets/backgroundLogin.jpg')] py-9">
            <div className="w-[420px] py-11 mt-[20vh] flex flex-col">
                <img
                    src={Logo}
                    className={`h-14 ${theme === "dark" ? "invert" : ""} lg:hidden`}
                />

                
                {children || <Outlet />}

            </div>
        


    </div>
}

export default AuthLayout