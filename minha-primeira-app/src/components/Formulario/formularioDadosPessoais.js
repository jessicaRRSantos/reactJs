import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';

const FormularioDadosPessoais = () => {
    return (
        <Collapse accordion={true}>
            <Panel header="DADOS PESSOAIS" headerClassName="FormTitle">
                <fieldset>
                    <br />
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input id="nome" type="text" size="70" maxLength="100" name="nome" />
                    </div>
                    <div>
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <input name="dataNascimento" type="text" id="dataNascimento" placeholder="dd/mm/aaaa" />
                    </div>
                    <div>
                        <label htmlFor="idade">Idade</label>
                        <input id="idade" type="text" size="10" name="idade" /> anos
                </div>
                    <div>
                        <label htmlFor="dataAvaliacao">Data da Avalia&ccedil;&atilde;o</label>
                        <input name="dataAvaliacao" type="text" id="dataAvaliacao" placeholder="dd/mm/aaaa" />
                    </div>
                    <div>
                        <label htmlFor="estatura">Estatura</label>
                        <input id="estatura" type="text" size="10" name="estatura" /> cm
                </div>
                    <div>
                        <label htmlFor="objetivos">Objetivos</label>
                        <textarea id="objetivos" name="objetivos" rows="5" cols="62" />
                    </div>
                    <div>
                        <label htmlFor="professor">Professor</label>
                        <input id="estatura" type="text" size="70" name="estatura" />
                    </div>
                </fieldset>
            </Panel>
        </Collapse>
    );
}

export default FormularioDadosPessoais;