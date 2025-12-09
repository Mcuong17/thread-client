import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Settings, 
  LogOut, 
  User,
  Bookmark,
  Heart,
  BarChart3,
  Moon,
  Sun,
  ChevronRight,
  Menu
} from 'lucide-react'
import Modal from '@/components/common/Modal'
import { ROUTES } from '@/utils/constants'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

/**
 * UserMenu - User profile menu với modal
 * @param {string} variant - 'sidebar' | 'header' 
 */
function UserMenu({ variant = 'sidebar' }) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  
  const handleLogout = () => {
    // TODO: Implement logout
    console.log('Logout')
    setIsOpen(false)
  }
  
  const menuItems = [
    {
      icon: User,
      label: 'Profile',
      href: ROUTES.PROFILE.replace(':username', 'me'),
    },
    {
      icon: Bookmark,
      label: 'Saved',
      href: ROUTES.SAVED,
    },
    {
      icon: Heart,
      label: 'Liked posts',
      href: '/liked',
    },
    {
      icon: BarChart3,
      label: 'Insights',
      href: ROUTES.INSIGHT,
    },
  ]
  
  return (
    <>
      {/* Trigger Button - 2 variants */}
      {variant === 'sidebar' ? (
        // Sidebar variant - Avatar lớn + info
        <button 
          onClick={() => setIsOpen(true)}
          className="
            w-full
            flex items-center
            gap-3
            p-2
            rounded-xl
            hover:bg-muted
            transition-colors
            group
          "
        >
          {/* Avatar */}
          <div className="
            w-10 h-10
            rounded-full
            bg-gradient-to-br from-purple-500 to-pink-500
            flex items-center justify-center
            text-white font-semibold
            flex-shrink-0
          ">
            J
          </div>
          
          {/* User Info - Desktop only */}
          <div className="hidden xl:flex text-left flex-1 min-w-0 items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">@johndoe</p>
            </div>
            
            {/* Dots indicator */}
            <div className="flex gap-0.5 ml-2">
              <div className="w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="w-1 h-1 rounded-full bg-muted-foreground" />
            </div>
          </div>
        </button>
      ) : (
        // Header variant - Chỉ avatar nhỏ hoặc hamburger
        <button 
          onClick={() => setIsOpen(true)}
          className="
            p-2
            rounded-full
            hover:bg-muted
            transition-colors
          "
        >
          {/* Option 1: Hamburger menu icon */}
          <Menu className="w-6 h-6" />
          
          {/* Option 2: Avatar nhỏ - Uncomment để dùng */}
          {/* <div className="
            w-8 h-8
            rounded-full
            bg-gradient-to-br from-purple-500 to-pink-500
            flex items-center justify-center
            text-white text-sm font-semibold
          ">
            J
          </div> */}
        </button>
      )}
      
      {/* Modal - Giống nhau cho cả 2 variants */}
      <Modal
        open={isOpen}
        onOpenChange={setIsOpen}
        variant="bottom-sheet"
        showHeader={false}
        showClose={false}
      >
        <div className="py-2">
          {/* User Info Header */}
          <div className="px-4 py-3 mb-2">
            <div className="flex items-center gap-3">
              <div className="
                w-12 h-12
                rounded-full
                bg-gradient-to-br from-purple-500 to-pink-500
                flex items-center justify-center
                text-white font-semibold
              ">
                J
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-muted-foreground">@johndoe</p>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-border my-2" />
          
          {/* Menu Items */}
          <div className="space-y-1 px-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    flex items-center gap-3
                    px-3 py-3
                    rounded-lg
                    hover:bg-muted
                    transition-colors
                  "
                >
                  <Icon className="w-5 h-5 text-muted-foreground" />
                  <span className="flex-1">{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              )
            })}
          </div>
          
          {/* Divider */}
          <div className="h-px bg-border my-2" />
          
          {/* Appearance Section */}
          <div className="px-2">
            <div className="px-3 py-2 mb-1">
              <p className="text-sm font-medium">Appearance</p>
            </div>
            
            <div className="flex gap-2 px-3 py-2">
              <button
                onClick={() => setTheme('light')}
                className={cn(
                  "flex-1 flex flex-col items-center gap-2",
                  "p-3 rounded-lg border-2 transition-all",
                  theme === 'light' 
                    ? "border-primary bg-primary/5" 
                    : "border-border hover:bg-muted"
                )}
              >
                <Sun className="w-5 h-5" />
                <span className="text-xs font-medium">Light</span>
              </button>
              
              <button
                onClick={() => setTheme('dark')}
                className={cn(
                  "flex-1 flex flex-col items-center gap-2",
                  "p-3 rounded-lg border-2 transition-all",
                  theme === 'dark' 
                    ? "border-primary bg-primary/5" 
                    : "border-border hover:bg-muted"
                )}
              >
                <Moon className="w-5 h-5" />
                <span className="text-xs font-medium">Dark</span>
              </button>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-border my-2" />
          
          {/* Settings & Logout */}
          <div className="space-y-1 px-2">
            <Link
              to={ROUTES.SETTINGS}
              onClick={() => setIsOpen(false)}
              className="
                flex items-center gap-3
                px-3 py-3
                rounded-lg
                hover:bg-muted
                transition-colors
              "
            >
              <Settings className="w-5 h-5 text-muted-foreground" />
              <span className="flex-1">Settings</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </Link>
            
            <button
              onClick={handleLogout}
              className="
                w-full
                flex items-center gap-3
                px-3 py-3
                rounded-lg
                hover:bg-destructive/10
                text-destructive
                transition-colors
              "
            >
              <LogOut className="w-5 h-5" />
              <span className="flex-1 text-left">Log out</span>
            </button>
          </div>
          
          {/* Bottom spacing for safe area */}
          <div className="h-4" />
        </div>
      </Modal>
    </>
  )
}

export default UserMenu