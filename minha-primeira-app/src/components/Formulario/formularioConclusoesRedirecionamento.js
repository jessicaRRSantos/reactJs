import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';

const FormularioConclusoesRedirecionamento = () => {
    return (
        <Collapse accordion={true}>
            <Panel header="CONCLUS&Otilde;ES E DIRECIONAMENTO" headerClassName="FormTitle">
                <fieldset>
                    <br />
                    <div>
                        <label htmlFor="conslusoesDirecionamentoPrograma">Conclus&otilde;es e Direcionamento do Programa</label>
                    </div>
                    <div>
                        <textarea id="conslusoesDirecionamentoPrograma" name="objetivos" rows="10" cols="80" />
                    </div>
                </fieldset>
            </Panel>
        </Collapse>
    );
}
export default FormularioConclusoesRedirecionamento;