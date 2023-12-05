import { QueryClient, QueryClientProvider } from "react-query";
import Perritos from "./Paginas/Componentes/Perritos";
import RegistrarPerro from "./Paginas/RegistrarPerro";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      {/*<Perritos/>*/}
      <RegistrarPerro/>
    </QueryClientProvider>
    </>
  )
}

export default App
