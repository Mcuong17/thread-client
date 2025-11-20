import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ROUTES } from '@/utils/constants'

function PublicRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth)
  
  // Nếu đã login, không cho vào login/register page
  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />
  }
  
  return children
}

export default PublicRoute