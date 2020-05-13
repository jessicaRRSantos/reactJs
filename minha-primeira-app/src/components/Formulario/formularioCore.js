import React from 'react';

const htmlFormularioCore = () => {
    return (
        <fieldset>
            <div className="HeaderForm">
                <div className="FormTitle">CORE</div>
            </div>
            <br />
            <div className="col-2">
                <div>
                <label htmlFor="consciencia">Consci&ecirc;ncia (Biofeedback no Stabilizer):</label>
                <input id="consciencia" type="text" size="50" maxLength="50" name="consciencia" />
                </div>
                <div>
                <label htmlFor="plank">Plank (3min):</label>
                <input id="plank" type="text" size="50" maxLength="50" name="plank" />
                </div>
            </div>
            <div className="col-2">
                <div>
                <label htmlFor="perdigueiro">Perdigueiro (Equil&iacute;brio):</label>
                <input id="perdigueiro" type="text" size="50" maxLength="50" name="perdigueiro" />
                </div>
                <div>
                <label htmlFor="extensaoLombar">Extensão Lombar (2min):</label>
                <input id="extensaoLombar" type="text" size="50" maxLength="50" name="extensaoLombar" />                      
                </div>
            </div>
            <div className="col-2">
                <div>
                <label htmlFor="sidePlankDireito">Side Plank (2min): Direito:</label>
                <input id="sidePlankDireito" type="text" name="sidePlankDireito" />
                </div>
                <div>
                <label htmlFor="sidePlankEsquerdo">Esquerdo:</label>
                <input id="sidePlankEsquerdo" type="text" name="sidePlankEsquerdo" />    
                </div>                  
            </div>
            <div className="col-2">
                <div>
                <label htmlFor="controleRotacionalSuperior">Controle Rotacional: Superior:</label>
                <input id="controleRotacionalSuperior" type="text" name="controleRotacionalSuperior" />
                </div>
                <div>
                <label htmlFor="controleRotacionalInferior">Inferior:</label>
                <input id="controleRotacionalInferior" type="text" name="controleRotacionalInferior" />                      
                </div>
            </div>

        </fieldset>    
        );
}
export default htmlFormularioCore;