import React, {Fragment} from 'react';

import FormularioHistorico from './formularioHistorico';
import FormularioDadosPessoais from './formularioDadosPessoais';
import FormularioMobilidade from './formularioMobilidade';
import FormularioCore from './formularioCore';
import FormularioPadroesMovimento from './formularioPadroesMovimento';
import FormularioConclusoesRedirecionamento from './formularioConclusoesRedirecionamento';


const Formulario = () =>{
    return (
        <Fragment>
            <FormularioDadosPessoais/>
            <FormularioHistorico/>
            <FormularioMobilidade/>  
            <FormularioCore/>  
            <FormularioPadroesMovimento/>
            <FormularioConclusoesRedirecionamento/>
        </Fragment> 
    );
}

export default Formulario;