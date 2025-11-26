import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        "flex items-center justify-center xl:justify-start",
        "gap-4 px-3 py-3 w-full",
        "rounded-xl transition-all duration-200",
        "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
        "group relative"
      )}
    >
      {/* Icons */}
      <div className="w-6 h-6 flex-shrink-0 relative">
        <Sun className="absolute inset-0 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
      
      {/* Label - Chỉ hiện trên xl */}
      <span className="hidden xl:block">
        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
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
        Toggle theme
      </div>
    </button>
  )
}

export default ThemeToggle