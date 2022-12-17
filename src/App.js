import Entrar from "./componentes/Entrar";
import Cadastro from "./componentes/Cadastro";
import Cabecario from "./componentes/Cabecario";
import Habitos from "./componentes/Habitos";
import Rodape from "./componentes/Rodape";
import Hoje from "./componentes/Hoje";
import Historico from "./componentes/Historico";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entrar />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<> <Cabecario /> <Habitos /> <Rodape /> </>} />
          <Route path="/hoje" element={<> <Cabecario /> <Hoje /> <Rodape /> </>} />
          <Route path="/historico" element={<> <Cabecario /> <Historico/> <Rodape /> </>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
