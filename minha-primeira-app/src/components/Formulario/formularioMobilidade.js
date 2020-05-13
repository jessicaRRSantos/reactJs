import React from 'react';

const FormularioMobilidade = () => {
    return (
        <fieldset>
        <div className="HeaderForm">
            <div className="FormTitle">MOBILIDADE</div>
        </div>
        <br />
        <table>
            <tr>
                <td><label for="posteriorCoxa">Posterior de Coxa:</label></td>
                <td><input id="posteriorCoxa" type="text" size="70" maxlength="100" name="posteriorCoxa" /></td>
            </tr>
            <tr>
                <td><label for="anteriorQuadril">Anterior de Quadril:</label></td>
                <td><input id="anteriorQuadril" type="text" size="70" maxlength="100" name="anteriorQuadril" /></td>
            </tr>
            <tr>
                <td><label for="tornozelo">Tornozelo (cm):</label></td>
                <td><input id="tornozelo" type="text" size="70" maxlength="100" name="tornozelo" /></td>                      
            </tr>
            <tr>
                <td><label for="ombros">Ombros:</label></td>
                <td><input id="ombros" type="text" size="70" maxlength="100" name="ombros" /></td>    
            </tr>
        </table>
    </fieldset>
    );
}
export default FormularioMobilidade;