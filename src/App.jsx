import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

function App() {


  return (
    <>
      <h1 className='text-3xl font-bold underline text-red-500'>Thread Client</h1>
      
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button variant="link" >Hello</Button>
      <Button variant="secondary" size="lg">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
    </>
  )
}

export default App
