
import { QueryClient, QueryClientProvider } from "react-query";
import Perritos from "./Paginas/Componentes/Perritos";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Perritos/>
    </QueryClientProvider>
    </>
  )
}

export default App
