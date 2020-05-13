import React from 'react';

const FormularioConclusoesRedirecionamento = () => {
    return (
        <fieldset>
            <div className="HeaderForm">
                <div className="FormTitle">CONCLUS&Otilde;ES E DIRECIONAMENTO</div>
            </div>
            <br />
            <div>
                <label htmlFor="conslusoesDirecionamentoPrograma">Conclus&otilde;es e Direcionamento do Programa</label>
            </div>
            <div>
                <textarea id="conslusoesDirecionamentoPrograma" name="objetivos" rows="10" cols="80"/>
            </div>
    </fieldset>   
    );
}
export default FormularioConclusoesRedirecionamento;