import { QueryClient, QueryClientProvider } from "react-query";
import Perritos from "./Paginas/Componentes/Perritos";
import RouterApp from "../Router";
import { BrowserRouter } from "react-router-dom";
import { Navegacion } from "./Paginas/Componentes/Navegacion";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <RouterApp />
      </BrowserRouter>
    </QueryClientProvider>
    </>
  )
}

export default App
