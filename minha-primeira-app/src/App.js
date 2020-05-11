import React from 'react';

import './css/layout/layout.css';
import './css/fontes/verdana.css';
import './css/controles/basico.css';
import './css/cores/cores.css';
import Conteudo from './Componentes/Conteudo/Conteudo';

function App() {
  return (
      <body>
        <div class="Wrap">
          <Conteudo/>
        </div>
    </body>
  );
}

export default App;
