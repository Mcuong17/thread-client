import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * AddPostButton - Nút tạo post nổi
 * Desktop: Ẩn (vì đã có trong sidebar)
 * Mobile: Có thể thêm nếu muốn (tùy thiết kế)
 */
function AddPostButton() {
  const handleClick = () => {
    // TODO: Mở modal tạo post
    console.log('Open create post modal')
  }
  
  return (
    <>
      {/* 
        Note: Với thiết kế có Create button ở bottom nav,
        có thể không cần floating button nữa
        
        Nếu muốn giữ floating button, uncomment phần dưới:
      */}
      
      {/* <Button
        onClick={handleClick}
        size="icon"
        className="
          lg:hidden
          fixed bottom-20 right-6
          w-14 h-14
          rounded-full
          shadow-lg
          z-40
        "
      >
        <Plus className="w-6 h-6" />
      </Button> */}
    </>
  )
}

export default AddPostButton