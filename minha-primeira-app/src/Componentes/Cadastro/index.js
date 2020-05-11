import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import Formulario from '../Formulario';

const Cadastro = () => {
    return (
        <div className="Wrap">
            <div className="conteudo">
                <Header usuario="Ricardo" perfil="Administrador" />
                <Menu />
                {/* <Home /> */}
                <div className="ContentArea">
                <div class="MainContent">

                    <div class="BreadCrumb"><a href="/home">Home</a> &raquo; Lund Trainers</div>
                    <div class="TitleBar">
                        <div class="Title">Lund Trainers</div>
                    </div>
                    <Formulario/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Cadastro;