import React from 'react';

import LogoBar from '../LogoBar';
import { Link } from 'react-router-dom';

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
                    <li className="Label" ><Link to="/">Home</Link></li>
                    <li className="Label"><Link to="/historico">Histórico</Link></li>
                    <li className="Label"><Link to="/sobre">Sobre</Link></li>
                    <li className="Label"><Link to="/sair">Sair</Link></li>
                </ul>
            </div>
            <LogoBar/>
        </div>    
    );
}

export default Header;