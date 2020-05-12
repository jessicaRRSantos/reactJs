import React from 'react';
import logoImg from '../../imgs/logoImg.png';


const LogoBar = () => (
    	<div className="LogoBar">
			<div className="ApplicationLogo">
				<img src={logoImg} alt="Lund Trainers" width="350" height="80"/>
			</div>
			<div className="ApplicationVesion">Vers&atilde;o: 10.10.10</div>
		</div>
    )
export default LogoBar;

