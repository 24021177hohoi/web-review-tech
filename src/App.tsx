import { ReviewPage } from "@/components/review-page"
import { Toaster } from "@/components/ui/sonner"

export function App() {
  return (
    <>
      <ReviewPage />
      <Toaster position="bottom-center" richColors />
    </>
  )
}

export default App
