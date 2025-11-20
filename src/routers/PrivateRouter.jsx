import { ROUTES } from "@/utils/constants"
import { useSelector } from "react-redux"
import { useLocation, Naviagte } from "react-router-dom"


const PrivateRouter = ({ children }) => {
    const location = useLocation()
    const { isAuthenticated } = useSelector((state) => state.auth)

    if(!isAuthenticated) {
        return <Naviagte to={ROUTES.LOGIN} state={{ from: location }} replace/>
    }

    return children
}

export default PrivateRouter