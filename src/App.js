import React  from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import ListaRecetas from './Componentes/ListaRecetas';

import CategoriasProvider from './Context/CategoriasContext';
import RecetasProvider from './Context/RecetasContext';
import ModallProvider from './Context/ModalContext';

function App() {
  return (
    <CategoriasProvider>

      <RecetasProvider>

        <ModallProvider>

          <Header />

          <div className="container mt-5">
            <div className="row">
                <Formulario />
            </div>
            <ListaRecetas />
          </div>

        </ModallProvider>

      </RecetasProvider>

    </CategoriasProvider>
  );
}

export default App;
