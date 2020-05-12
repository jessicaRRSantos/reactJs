import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => (
    <div className="MenuArea">
            <ul className="MainMenu">
                <li><Link to="/cadastro">Cadastro</Link></li>
                <li><Link to="/consulta">Consulta e Grid</Link></li>
                <li><Link to="grid_sem_pesquisa.html">Grid simples</Link></li>
                <li><Link to="erro.html">Tela de Erro</Link></li>
            </ul> 
    </div>
    )
export default Menu;

