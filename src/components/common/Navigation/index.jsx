import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  Search, 
  Heart, 
  User, 
  Settings, 
  BookmarkIcon,
  PenSquare
} from 'lucide-react'
import { ROUTES } from '@/utils/constants'
import { cn } from '@/lib/utils'
import logo from '@/assets/logo.svg'
import UserMenu from './UserMenu.jsx'

/**
 * Navigation - Desktop Sidebar
 * Mobile First: Ẩn hoàn toàn trên mobile, chỉ hiện từ lg trở lên
 */
function Navigation() {
  const location = useLocation()
  
  // Navigation items
  const navItems = [
    { 
      path: ROUTES.HOME, 
      icon: Home, 
      label: 'Home',
      end: true 
    },
    { 
      path: ROUTES.SEARCH, 
      icon: Search, 
      label: 'Search' 
    },
    { 
      path: ROUTES.ACTIVITY, 
      icon: Heart, 
      label: 'Activity' 
    },
    { 
      path: ROUTES.SAVED, 
      icon: BookmarkIcon, 
      label: 'Saved' 
    },
    { 
      path: ROUTES.PROFILE.replace(':username', 'me'), 
      icon: User, 
      label: 'Profile' 
    },
    { 
      path: ROUTES.SETTINGS, 
      icon: Settings, 
      label: 'Settings' 
    },
  ]
  
  // Check if path is active
  const isActive = (path, end = false) => {
    if (end) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }
  
  return (
    <nav className="
      hidden lg:flex
      flex-col
      h-screen
      w-20 xl:w-64
      border-r border-border
      p-3 xl:p-4
      sticky top-0
      bg-background
    ">
      {/* Logo */}
      <div className="mb-6 xl:mb-8 px-3">
        <Link 
          to={ROUTES.HOME}
          className="block hover:opacity-80 transition-opacity"
        >
          {/* Logo cho tất cả sizes */}
          <img 
            src={logo} 
            alt="Thread Logo" 
            className="w-10 h-10 mx-auto xl:mx-0" 
          />
        </Link>
      </div>
      
      {/* Nav Items */}
      <ul className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.path, item.end)
          
          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  // Base styles - Mobile First
                  "flex items-center justify-center xl:justify-start",
                  "gap-4 px-3 py-3",
                  "rounded-xl transition-all duration-200",
                  "group relative",
                  
                  // Active state
                  active 
                    ? "bg-muted text-foreground" 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}
              >
                {/* Icon */}
                <Icon 
                  className="w-6 h-6 flex-shrink-0" 
                  strokeWidth={active ? 2.5 : 2}
                />
                
                {/* Label - Chỉ hiện trên xl */}
                <span className={cn(
                  "hidden xl:block",
                  active && "font-semibold"
                )}>
                  {item.label}
                </span>
                
                {/* Tooltip cho desktop nhỏ */}
                <div className="
                  xl:hidden
                  absolute left-full ml-2
                  px-2 py-1
                  bg-gray-900 text-white text-sm
                  rounded
                  opacity-0 group-hover:opacity-100
                  pointer-events-none
                  whitespace-nowrap
                  transition-opacity
                  z-50
                ">
                  {item.label}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      
      {/* Create Thread Button */}
      <div className="mb-4">
        <button className="
          w-full
          flex items-center justify-center xl:justify-start
          gap-2
          px-4 py-3
          bg-primary text-primary-foreground
          rounded-xl
          font-semibold
          hover:opacity-90
          transition-opacity
        ">
          <PenSquare className="w-5 h-5 flex-shrink-0" />
          <span className="hidden xl:block">New Thread</span>
        </button>
      </div>
      
      {/* User Profile Section - Chỉ có UserMenu */}
      <div className="pt-4 border-t border-border">
        <UserMenu />
      </div>
    </nav>
  )
}

export default Navigation
