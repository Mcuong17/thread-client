import { Outlet } from 'react-router-dom'
import Navigation from '@/components/common/Navigation'
import MobileHeader from '@/components/common/Navigation/MobileHeader.jsx'
import MobileBottomNav from '@/components/common/Navigation/MobileBottomNav.jsx'
import AddPostButton from '@/components/common/AddPostButton'
import RightSidebar from '@/components/common/Navigation/RightSidebar.jsx'

/**
 * DefaultLayout - Layout chính cho app
 * Mobile First: 
 * - Mobile: Header top + Content + Bottom nav
 * - Desktop: Sidebar left + Content + Sidebar right
 */
function DefaultLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header - Chỉ hiện trên mobile */}
      <MobileHeader />
      
      {/* Main Container */}
      <div className="flex">
        {/* Desktop Sidebar Navigation - Ẩn trên mobile */}
        <Navigation />
        
        {/* Main Content Area */}
        <main className="flex-1 min-h-screen lg:border-x border-border">
          {/* 
            Max width 600px - giống Thread/Twitter 
            mx-auto: center content
          */}
          <div className="w-full max-w-[600px] mx-auto">
            {/* 
              pb-20: padding bottom để tránh bottom nav che content trên mobile
              lg:pb-4: desktop không cần padding nhiều
            */}
            <div className="pb-20 lg:pb-4">
              {children || <Outlet />}
            </div>
          </div>
        </main>
        
        {/* Right Sidebar - Chỉ hiện trên desktop lớn (xl) */}
        <RightSidebar />
      </div>
      
      {/* Mobile Bottom Navigation - Chỉ hiện trên mobile */}
      <MobileBottomNav />
      
      {/* Floating Add Post Button */}
      <AddPostButton />
    </div>
  )
}

export default DefaultLayout