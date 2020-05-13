import React from 'react';

const FormularioPadroesMovimento = () => {
    return (
        <fieldset>
            <div className="HeaderForm">
                <div className="FormTitle">PADR&Otilde;ES DE MOVIMENTO</div>
            </div>
            <br />
            <table>
            <tr>
                <td><label>Squat</label></td>
                <td><label htmlFor="blackSquat">10RM Black Squat</label></td>
                <td><input id="blackSquat" type="text" size="30" maxLength="30" name="blackSquat"/></td>
            </tr>
            <tr>
                <td className="FormOneColumnLabel"><label htmlFor="mobilidadeTornozeloQuadril">Mobilidade (Tornozelo e Quadril):</label></td>
                <td className="FormOneColumnField"><input id="mobilidadeTornozeloQuadril" type="text" size="70" maxLength="100" name="mobilidadeTornozeloQuadril"/></td>                      
            </tr>
            <tr>
                <td className="FormOneColumnLabel"><label htmlFor="projecaoEscapulasColunaSquat">Proje&ccedil;&atilde;o (Escapulas e Coluna):</label></td>
                <td className="FormOneColumnField"><input id="projecaoEscapulasColunaSquat" type="text" size="70" maxLength="100" name="projecaoEscapulasColunaSquat"/></td>                      
            </tr>
            <tr>
                <td><label>Deadlift</label></td>
                <td><label htmlFor="deadlift">10RM Deadlift</label></td>
                <td><input id="deadlift" type="text" size="30" maxLength="30" name="deadlift"/></td>
            </tr>
            <tr>
                <td><label htmlFor="mobilidadeCadeiaPosterior">Mobilidade (Cadeia Posterior):</label></td>
                <td><input id="mobilidadeCadeiaPosterior" type="text" name="mobilidadeCadeiaPosterior" size="70" maxLength="100"/></td>                 
            </tr>
            <tr>
                <td><label htmlFor="projecaoEscapulasColunaDeadlift">Proje&ccedil;&atilde;o (Escapulas e Coluna):</label></td>
                <td><input id="projecaoEscapulasColunaDeadlift" type="text" name="projecaoEscapulasColunaDeadlift" size="70" maxLength="100"/></td>                 
            </tr>
            <tr>
                <td><label>Push Up</label></td>
                <td><label htmlFor="chestPress">10RM Chest Press</label></td>
                <td><input id="chestPress" type="text" size="30" maxLength="30" name="chestPress"/></td>
            </tr>
            <tr>
                <td><label htmlFor="projecaoQuadrilOmbroCervical">Proje&ccedil;&atilde;o (Quadril, Ombro e Cervical):</label></td>
                <td><input id="projecaoQuadrilOmbroCervical" type="text" name="projecaoQuadrilOmbroCervical" size="70" maxLength="100"/></td>                 
            </tr>
            <tr>
                <td><label htmlFor="mobilidadeOmbro">Mobilidade (Ombro):</label></td>
                <td><input id="mobilidadeOmbro" type="text" name="mobilidadeOmbro" size="70" maxLength="100"/></td>                 
            </tr>
            <tr>
                <td><label>Row</label></td>
                <td><label htmlFor="latPullDown">10RM Lat Pull Down</label></td>
                <td><input id="latPullDown" type="text" size="30" maxLength="30" name="latPullDown"/></td>
            </tr>
            <tr>
                <td><label htmlFor="projecaoQuadrilOmbroCervicalRow">Proje&ccedil;&atilde;o (Quadril, Ombro e Cervical):</label></td>
                <td><input id="projecaoRowQuadrilOmbroCervical" type="text" name="projecaoRowQuadrilOmbroCervical" size="70" maxLength="100"/></td>                 
            </tr>
            </table>
        </fieldset>
    );
}

export default FormularioPadroesMovimento;