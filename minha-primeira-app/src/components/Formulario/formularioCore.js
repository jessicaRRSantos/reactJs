import React from 'react';

const FormularioCore = () => {
    return (
        <fieldset>
            <div className="HeaderForm">
                <div className="FormTitle">CORE</div>
            </div>
            <br />
            <table>
            <tr>
                <td><label for="consciencia">Consciência (Biofeedback no Stabilizer):</label></td>
                <td><input id="consciencia" type="text" size="50" maxlength="50" name="consciencia" /></td>
                <td><label for="plank">Plank (3min):</label></td>
                <td><input id="plank" type="text" size="50" maxlength="50" name="plank" /></td>
            </tr>
            <tr>
                <td><label for="perdigueiro">Perdigueiro (Equilíbrio):</label></td>
                <td><input id="perdigueiro" type="text" size="50" maxlength="50" name="perdigueiro" /></td>
                <td><label for="extensaoLombar">Extensão Lombar (2min):</label></td>
                <td><input id="extensaoLombar" type="text" size="50" maxlength="50" name="extensaoLombar" /></td>                      
            </tr>
            <tr>
                <td><label for="sidePlankDireito">Side Plank (2min): Direito:</label></td>
                <td><input id="sidePlankDireito" type="text" name="sidePlankDireito" /></td>
                <td><label for="sidePlankEsquerdo">Esquerdo:</label></td>
                <td><input id="sidePlankEsquerdo" type="text" name="sidePlankEsquerdo" /></td>                      
            </tr>
            <tr>
                <td><label for="controleRotacionalSuperior">Controle Rotacional: Superior:</label></td>
                <td><input id="controleRotacionalSuperior" type="text" name="controleRotacionalSuperior" /></td>
                <td><label for="controleRotacionalInferior">Inferior:</label></td>
                <td><input id="controleRotacionalInferior" type="text" name="controleRotacionalInferior" /></td>                      
            </tr>
            </table>
        </fieldset>    );
}
export default FormularioCore;