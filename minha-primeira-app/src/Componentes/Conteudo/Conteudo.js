import React from 'react';
import Header from '../Header/Header';
import logoImg from '../../imgs/logoImg.png';

import './styles.css';

const Conteudo = () =>{
    return (

        <div className="conteudo">
            <Header/>
            <div className="lundLogo">
                <div className="aplicacaoLogo">
                    <img src={logoImg} alt="Lund Trainers" width="400" height="80"/>
                </div>
            </div>              
            {/*<div className="menu">
                <ul className="listaMenu">
                    <li><a href="/">Cadastro</a></li>
                    <li><a href="/">Consulta: </a></li>
                </ul>
    </div>*/} 
        </div>       
    );
}

export default Conteudo;