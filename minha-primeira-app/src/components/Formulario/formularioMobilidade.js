import React from 'react';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';

const htmlFormularioMobilidade = () => {
    return (
        <Collapse accordion={true}>
            <Panel header="MOBILIDADE" headerClassName="FormTitle">
                <fieldset>
                    <div>
                        <label htmlFor="posteriorCoxa">Posterior de Coxa:</label>
                        <input id="posteriorCoxa" type="text" size="70" maxLength="100" name="posteriorCoxa" />
                    </div>
                    <div>
                        <label htmlFor="anteriorQuadril">Anterior de Quadril:</label>
                        <input id="anteriorQuadril" type="text" size="70" maxLength="100" name="anteriorQuadril" />
                    </div>
                    <div>
                        <label htmlFor="tornozelo">Tornozelo (cm):</label>
                        <input id="tornozelo" type="text" size="70" maxLength="100" name="tornozelo" />
                    </div>
                    <div>
                        <label htmlFor="ombros">Ombros:</label>
                        <input id="ombros" type="text" size="70" maxLength="100" name="ombros" />
                    </div>
                </fieldset>
            </Panel>
        </Collapse>
    );
}
export default htmlFormularioMobilidade;