import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import HomePage from "./pages/HomePage/HomePage.tsx";

const queryClient = new QueryClient()

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <HomePage></HomePage>
      </QueryClientProvider>
  )
}

export default App
