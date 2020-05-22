import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import {Link} from 'react-router-dom';


import Formulario from '../Formulario';

const Cadastro = () => {
    return (
        <div className="Wrap">
            <div className="conteudo">
                <Header usuario="Ricardo" perfil="Administrador" />
                <Menu />
                {/* <Home /> */}
                <div className="ContentArea">
                    <div className="MainContent">

                        <div className="BreadCrumb"><Link to="/cadastro">Cadastro</Link> &raquo; Lund Trainers</div>
                        <div className="TitleBar">
                            <div className="Title">Lund Trainers</div>
                        </div>
                        {/* ajuste */}
                        <div className="FormVertical">
                            <Formulario />
                        </div>                      
                        <div className="FormLineButtons">
                            <input name="button" type="button" value="Gravar" className="FormButton"/>
                            <input name="BtCancelar" type="reset" className="FormButton" id="BtCancelar" value="Limpar" />
                            <Link to="/"><input name="BtCancelar2" type="button" className="FormButton" id="BtCancelar2" value="Voltar"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;