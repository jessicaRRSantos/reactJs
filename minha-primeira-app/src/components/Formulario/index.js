import React from 'react';

import FormularioHistorico from './formularioHistorico';
import FormularioDadosPessoais from './formularioDadosPessoais';
import FormularioMobilidade from './formularioMobilidade';
import FormularioCore from './formularioCore';


const Formulario = () =>{

    return (
        <form action="#">
            <FormularioDadosPessoais/>
            <FormularioHistorico/>
            <FormularioMobilidade/>    
            <FormularioCore/>  
         </form>    
    );
}

export default Formulario;