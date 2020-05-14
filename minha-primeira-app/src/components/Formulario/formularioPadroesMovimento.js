import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';

const FormularioPadroesMovimento = () => {
    return (
        <Collapse accordion={true}>
            <Panel header="PADR&Otilde;ES DE MOVIMENTO" headerClassName="FormTitle">
                <fieldset>
                    <div>
                        <label>Squat</label>
                    </div>
                    <div>
                        <label htmlFor="blackSquat">10RM Black Squat</label>
                        <input id="blackSquat" type="text" size="30" maxLength="30" name="blackSquat" />
                    </div>
                    <div>
                        <label htmlFor="mobilidadeTornozeloQuadril">Mobilidade (Tornozelo e Quadril):</label>
                        <input id="mobilidadeTornozeloQuadril" type="text" size="30" maxLength="100" name="mobilidadeTornozeloQuadril" />
                    </div>
                    <div>
                        <label htmlFor="projecaoEscapulasColunaSquat">Proje&ccedil;&atilde;o (Escapulas e Coluna):</label>
                        <input id="projecaoEscapulasColunaSquat" type="text" size="30" maxLength="100" name="projecaoEscapulasColunaSquat" />
                    </div>
                    <div>
                        <label>Deadlift</label>
                    </div>
                    <div>
                        <label htmlFor="deadlift">10RM Deadlift</label>
                        <input id="deadlift" type="text" size="30" maxLength="30" name="deadlift" />
                    </div>
                    <div>
                        <label htmlFor="mobilidadeCadeiaPosterior">Mobilidade (Cadeia Posterior):</label>
                        <input id="mobilidadeCadeiaPosterior" type="text" name="mobilidadeCadeiaPosterior" size="70" maxLength="100" />
                    </div>
                    <div>
                        <label htmlFor="projecaoEscapulasColunaDeadlift">Proje&ccedil;&atilde;o (Escapulas e Coluna):</label>
                        <input id="projecaoEscapulasColunaDeadlift" type="text" name="projecaoEscapulasColunaDeadlift" size="70" maxLength="100" />
                    </div>
                    <div>
                        <label>Push Up</label>
                        <label htmlFor="chestPress">10RM Chest Press</label>
                        <input id="chestPress" type="text" size="30" maxLength="30" name="chestPress" />
                    </div>
                    <div>
                        <label htmlFor="projecaoQuadrilOmbroCervical">Proje&ccedil;&atilde;o (Quadril, Ombro e Cervical):</label>
                        <input id="projecaoQuadrilOmbroCervical" type="text" name="projecaoQuadrilOmbroCervical" size="70" maxLength="100" />
                    </div>
                    <div>
                        <label htmlFor="mobilidadeOmbro">Mobilidade (Ombro):</label>
                        <input id="mobilidadeOmbro" type="text" name="mobilidadeOmbro" size="70" maxLength="100" />
                    </div>
                    <div>
                        <label>Row</label>
                        <label htmlFor="latPullDown">10RM Lat Pull Down</label>
                        <input id="latPullDown" type="text" size="30" maxLength="30" name="latPullDown" />
                    </div>
                    <div>
                        <label htmlFor="projecaoQuadrilOmbroCervicalRow">Proje&ccedil;&atilde;o (Quadril, Ombro e Cervical):</label>
                        <input id="projecaoRowQuadrilOmbroCervical" type="text" name="projecaoRowQuadrilOmbroCervical" size="70" maxLength="100" />
                    </div>
                </fieldset>
            </Panel>
        </Collapse>
    );
}

export default FormularioPadroesMovimento;