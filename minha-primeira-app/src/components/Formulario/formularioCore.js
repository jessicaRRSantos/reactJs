import React from 'react';

const htmlFormularioCore = () => {
    return (
        <fieldset>
            <div className="HeaderhtmlForm">
                <div className="htmlFormTitle">CORE</div>
            </div>
            <br />
            <table>
            <tr>
                <td><label htmlFor="consciencia">Consciência (Biofeedback no Stabilizer):</label></td>
                <td><input id="consciencia" type="text" size="50" maxLength="50" name="consciencia" /></td>
                <td><label htmlFor="plank">Plank (3min):</label></td>
                <td><input id="plank" type="text" size="50" maxLength="50" name="plank" /></td>
            </tr>
            <tr>
                <td><label htmlFor="perdigueiro">Perdigueiro (Equilíbrio):</label></td>
                <td><input id="perdigueiro" type="text" size="50" maxLength="50" name="perdigueiro" /></td>
                <td><label htmlFor="extensaoLombar">Extensão Lombar (2min):</label></td>
                <td><input id="extensaoLombar" type="text" size="50" maxLength="50" name="extensaoLombar" /></td>                      
            </tr>
            <tr>
                <td><label htmlFor="sidePlankDireito">Side Plank (2min): Direito:</label></td>
                <td><input id="sidePlankDireito" type="text" name="sidePlankDireito" /></td>
                <td><label htmlFor="sidePlankEsquerdo">Esquerdo:</label></td>
                <td><input id="sidePlankEsquerdo" type="text" name="sidePlankEsquerdo" /></td>                      
            </tr>
            <tr>
                <td><label htmlFor="controleRotacionalSuperior">Controle Rotacional: Superior:</label></td>
                <td><input id="controleRotacionalSuperior" type="text" name="controleRotacionalSuperior" /></td>
                <td><label htmlFor="controleRotacionalInferior">Inferior:</label></td>
                <td><input id="controleRotacionalInferior" type="text" name="controleRotacionalInferior" /></td>                      
            </tr>
            </table>
        </fieldset>    );
}
export default htmlFormularioCore;