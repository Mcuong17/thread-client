import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import AppRouter from "./routers"
import { Toaster } from "@/components/ui/sonner";

function App() {


  return (
    <>
     <AppRouter/>
     <Toaster position="top-right" richColors />
    </>
  )
}

export default App
