import { Link, useLocation } from 'react-router-dom'
import { Home, Search, PenSquare, Heart, User, Plus } from 'lucide-react'
import { ROUTES } from '@/utils/constants'
import { cn } from '@/lib/utils'

/**
 * MobileBottomNav - Bottom navigation cho mobile
 * Mobile First: Hiện mặc định, ẩn trên desktop
 */
function MobileBottomNav() {
  const location = useLocation()
  
  const navItems = [
    { path: ROUTES.HOME, icon: Home, label: 'Home', end: true },
    { path: ROUTES.SEARCH, icon: Search, label: 'Search' },
    { path: '/create', icon: Plus, label: 'Create', isButton: true },
    { path: ROUTES.ACTIVITY, icon: Heart, label: 'Activity' },
    { path: ROUTES.PROFILE.replace(':username', 'me'), icon: User, label: 'Profile' },
  ]
  
  const isActive = (path, end = false) => {
    if (end) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }
  
  return (
    <nav className="
      lg:hidden
      fixed bottom-0 left-0 right-0
      z-50
      bg-background
      border-t border-border
    ">
      {/* Nav Items */}
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.path, item.end)
          
          // Create button có style khác
          if (item.isButton) {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="
                  flex items-center justify-center
                  w-22 h-12
                  bg-foreground text-background
                  rounded-xl
                  hover:opacity-90
                  transition-opacity
                "
              >
                <Icon className="w-6 h-6" strokeWidth={2} />
              </Link>
            )
          }
          
          // Nav items thường
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center",
                "gap-1 px-3 py-2",
                "rounded-lg",
                "transition-colors",
                active 
                  ? "text-foreground" 
                  : "text-muted-foreground"
              )}
            >
              <Icon 
                className="w-6 h-6" 
                strokeWidth={active ? 2.5 : 2}
              />
              
              {/* Label - Optional, có thể ẩn để gọn hơn */}
              {/* <span className="text-xs font-medium">
                {item.label}
              </span> */}
            </Link>
          )
        })}
      </div>
      
      {/* Safe area for iOS - Khoảng trống cho notch iPhone */}
      <div className="h-safe-area-inset-bottom bg-background" />
    </nav>
  )
}

export default MobileBottomNav