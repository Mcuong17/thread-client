import { Search } from 'lucide-react'

/**
 * RightSidebar - Sidebar phải (suggestions, search)
 * Mobile First: Ẩn hoàn toàn, chỉ hiện trên xl (1280px+)
 */
function RightSidebar() {
  const suggestedUsers = [
    { id: 1, name: 'Nguyễn Văn A', username: 'nguyenvana' },
    { id: 2, name: 'Trần Thị B', username: 'tranthib' },
    { id: 3, name: 'Lê Văn C', username: 'levanc' },
  ]
  
  return (
    <aside className="
      hidden xl:block
      w-80
      p-4
      sticky top-0
      h-screen
      overflow-y-auto
    ">
      {/* Search Box */}
      <div className="relative mb-6">
        <Search className="
          absolute left-3 top-1/2 -translate-y-1/2
          w-5 h-5
          text-muted-foreground
        " />
        <input
          type="text"
          placeholder="Search"
          className="
            w-full
            pl-10 pr-4 py-2.5
            bg-muted
            border border-transparent
            rounded-xl
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-ring
            transition-all
          "
        />
      </div>
      
      {/* Suggested Users Card */}
      <div className="bg-muted/50 rounded-2xl p-4">
        <h3 className="font-bold mb-4">Suggested for you</h3>
        
        <div className="space-y-3">
          {suggestedUsers.map((user, index) => (
            <div key={user.id} className="flex items-center gap-3 py-2">
              {/* Avatar */}
              <div className={`
                w-10 h-10
                rounded-full
                bg-gradient-to-br
                ${index === 0 ? 'from-purple-500 to-pink-500' : ''}
                ${index === 1 ? 'from-blue-500 to-cyan-500' : ''}
                ${index === 2 ? 'from-orange-500 to-red-500' : ''}
                flex items-center justify-center
                text-white font-semibold
                flex-shrink-0
              `}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              
              {/* User Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">
                  {user.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  @{user.username}
                </p>
              </div>
              
              {/* Follow Button */}
              <button className="
                px-4 py-1.5
                bg-foreground text-background
                text-sm font-semibold
                rounded-lg
                hover:opacity-90
                transition-opacity
                flex-shrink-0
              ">
                Follow
              </button>
            </div>
          ))}
        </div>
        
        <button className="
          text-primary text-sm font-medium
          mt-3
          hover:underline
        ">
          Show more
        </button>
      </div>
      
      {/* Footer Links */}
      <div className="mt-6 text-xs text-muted-foreground flex flex-wrap gap-x-3 gap-y-1">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <span>© 2024 Thread Clone</span>
      </div>
    </aside>
  )
}

export default RightSidebar