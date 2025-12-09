import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

/**
 * Modal - Universal modal component
 * 
 * @param {Object} props
 * @param {boolean} props.open - Trạng thái mở/đóng
 * @param {function} props.onOpenChange - Callback khi thay đổi trạng thái
 * @param {string} props.variant - Loại modal: 'dialog' | 'sheet' | 'bottom-sheet'
 * @param {string} props.side - Hướng hiện của sheet: 'top' | 'right' | 'bottom' | 'left'
 * @param {string} props.title - Tiêu đề modal
 * @param {string} props.description - Mô tả modal
 * @param {React.Node} props.children - Nội dung modal
 * @param {string} props.className - Custom className
 * @param {boolean} props.showHeader - Hiện/ẩn header
 * @param {boolean} props.showClose - Hiện/ẩn nút close
 */
function Modal({
  open = false,
  onOpenChange,
  variant = 'dialog',
  side = 'bottom',
  title,
  description,
  children,
  className,
  showHeader = true,
  showClose = true,
  ...props
}) {
  
  // Dialog variant - Center modal
  if (variant === 'dialog') {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent 
          className={cn(
            "sm:max-w-[425px]",
            className
          )}
          showClose={showClose}
          {...props}
        >
          {showHeader && (title || description) && (
            <DialogHeader>
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && <DialogDescription>{description}</DialogDescription>}
            </DialogHeader>
          )}
          {children}
        </DialogContent>
      </Dialog>
    )
  }
  
  // Sheet variant - Side modal (including bottom sheet)
  if (variant === 'sheet' || variant === 'bottom-sheet') {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent 
          side={variant === 'bottom-sheet' ? 'bottom' : side}
          className={cn(
            variant === 'bottom-sheet' && [
              "h-auto max-h-[85vh]",
              "rounded-t-3xl",
              "pb-safe-area-inset-bottom"
            ],
            className
          )}
          showClose={showClose}
          {...props}
        >
          {showHeader && (title || description) && (
            <SheetHeader>
              {title && <SheetTitle>{title}</SheetTitle>}
              {description && <SheetDescription>{description}</SheetDescription>}
            </SheetHeader>
          )}
          {children}
        </SheetContent>
      </Sheet>
    )
  }
  
  return null
}

export default Modal