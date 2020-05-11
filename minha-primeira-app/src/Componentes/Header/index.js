import React from 'react';
// import './styles.css';

import LogoBar from '../LogoBar';

const Header = (props) =>{
    return (
        <div className="headerArea">
            
            <div className="HeaderBar">
                <ul className="UserInfo">
                    <li className="Label">Usuário: </li>
                    <li className="Data">{props.usuario}</li>
                    <li className="Label"> Perfil: </li>
                    <li className="Data">{props.perfil}</li>
                </ul>

                <ul className="ShortcutLinks">
                    <li className="Label" ><a href="/home">Home</a></li>
                    <li className="Label"><a href="/historico">Histórico</a></li>
                    <li className="Label"><a href="/sobre">Sobre</a></li>
                    <li className="Label"><a href="/logout">Logout</a></li>
                </ul>
            </div>
            <LogoBar/>
        </div>    
    );
}

export default Header;