import React from 'react';
import './styles.css';

const Header = () =>{
    return (
        <div className="headerArea">
            <div className="header">
                <ul className="infoUsuario">
                    <li className="label">Usuário: </li>
                    <li className="dados">Teste da Silva </li>
                    <li className="label"> Perfil: </li>
                    <li className="dados">Administrador</li>
                </ul>

                <ul className="links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/historica">Histórico</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </div>    
    );
}

export default Header;