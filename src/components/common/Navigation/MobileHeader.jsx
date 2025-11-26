import { Link } from 'react-router-dom'
import { ROUTES } from '@/utils/constants'
import logo from '@/assets/logo.svg'
import UserMenu from './UserMenu'

function MobileHeader() {
  return (
    <header className="
      lg:hidden
      sticky top-0
      z-40
      bg-background/80
      backdrop-blur-lg
      border-b border-border
    ">
      <div className="flex items-center justify-between h-14 px-4">
        {/* User Menu - Left (hamburger) */}
        <div className="flex-shrink-0">
          <UserMenu variant="header" />
        </div>
        
        {/* Brand Name - Center */}
        <Link to={ROUTES.HOME} className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl font-bold">Thread</h1>
        </Link>
        
        {/* Logo hoặc action buttons - Right */}
        <div className="flex-shrink-0">
          <Link to={ROUTES.HOME}>
            <img 
              src={logo} 
              alt="Thread Logo" 
              className="w-8 h-8" 
            />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader
