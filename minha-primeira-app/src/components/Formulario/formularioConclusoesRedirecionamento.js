import React from 'react';

const FormularioConclusoesRedirecionamento = () => {
    return (
        <fieldset>
            <div className="HeaderForm">
                <div className="FormTitle">CONCLUS&Otilde;ES E DIRECIONAMENTO</div>
            </div>
            <br />
            <table>
            <tr>
                <td><label htmlFor="conslusoesDirecionamentoPrograma">Conclus&otilde;es e Direcionamento do Programa</label></td>
            </tr>
            <tr>
                <td><textarea id="conslusoesDirecionamentoPrograma" name="objetivos" rows="10" cols="80"/></td>
            </tr>
        </table>
    </fieldset>   
    );
}
export default FormularioConclusoesRedirecionamento;