import { Outlet } from "react-router-dom"
import Navigation from "../common/Navigation"
import AddPostButton from "../common/AddPostButton"



const DefaultLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background">
            <div className="flex">
               <Navigation/>
                <main className="flex-1 min-h-screen border-x border-border">
                    {/* content max 600 */}
                    <div className="max-w-[600px] mx-auto">
                        {children || <Outlet/>}
                    </div>
                </main>

                 <aside className="hidden xl:block w-[350px] p-4">
                    {/* Có thể thêm: Suggested users, trending topics */}
                </aside>
            </div>
            <AddPostButton/>
        </div>
    )
}

export default DefaultLayout