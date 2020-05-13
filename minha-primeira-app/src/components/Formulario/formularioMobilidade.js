import React from 'react';

const htmlFormularioMobilidade = () => {
    return (
        <fieldset>
        <div className="HeaderhtmlForm">
            <div className="htmlFormTitle">MOBILIDADE</div>
        </div>
        <br />
        <table>
            <tr>
                <td><label htmlFor="posteriorCoxa">Posterior de Coxa:</label></td>
                <td><input id="posteriorCoxa" type="text" size="70" maxLength="100" name="posteriorCoxa" /></td>
            </tr>
            <tr>
                <td><label htmlFor="anteriorQuadril">Anterior de Quadril:</label></td>
                <td><input id="anteriorQuadril" type="text" size="70" maxLength="100" name="anteriorQuadril" /></td>
            </tr>
            <tr>
                <td><label htmlFor="tornozelo">Tornozelo (cm):</label></td>
                <td><input id="tornozelo" type="text" size="70" maxLength="100" name="tornozelo" /></td>                      
            </tr>
            <tr>
                <td><label htmlFor="ombros">Ombros:</label></td>
                <td><input id="ombros" type="text" size="70" maxLength="100" name="ombros" /></td>    
            </tr>
        </table>
    </fieldset>
    );
}
export default htmlFormularioMobilidade;