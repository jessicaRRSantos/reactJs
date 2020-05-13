import React from 'react';

const FormularioHistorico = () => {
    return (
        <fieldset>
            <div className="HeaderForm">
                <div className="FormTitle">HIST&Oacute;RICO</div>
            </div>
            <br />
            <div className="col-2">
                <div>
                    <label htmlFor="praticaAtividade">Pratica atividade f&iacute;sica?</label>
                    <select name="selectAtividade">
                        <option value="">Selecione...</option>
                        <option value="S">SIM</option>
                        <option value="N">N&Atilde;O</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="qualAitivade">Qual?</label>
                    <input id="qualAitivade" type="text" size="40" name="qualAitivade" />
                </div>                
            </div>
            <div className="col-3">   
            <div>
                <label htmlFor="frequenciaSemanal">Frequencia Semanal</label>
                <select name="selectFrequenciaSemanal">
                    <option value="">Selecione...</option>
                    <option value="1">1 VEZ NA SEMANA</option>
                    <option value="2">2 VEZES NA SEMANA</option>
                    <option value="3">3 VEZES NA SEMANA</option>
                    <option value="4">4 VEZES NA SEMANA</option>
                    <option value="5">5 VEZES NA SEMANA</option>
                    <option value="6">6 VEZES NA SEMANA</option>
                    <option value="7">7 VEZES NA SEMANA</option>
                </select>
                </div>             
                <div>
                <label htmlFor="quantoTempo">H&aacute; quanto tempo?</label>
                <input id="quantoTempo" type="text" size="10" name="quantoTempo" />
                </div>
                <div>
                <label htmlFor="horarioPreferencial">Hor&aacute;rio Preferencial</label>
                <select name="selectHorarioPreferencial">
                    <option value="">Selecione...</option>
                    <option value="M">MANH&Atilde;</option>
                    <option value="T">TARDE</option>
                    <option value="N">NOITE</option>
                </select>
                </div>
            </div>
            <div>
                <label htmlFor="atividadesNaoGosta">Atividades que N&Atilde;O gosta</label>
                <textarea id="atividadesNaoGosta" name="atividadesNaoGosta" rows="5" cols="62" />
            </div>
            <div>
                <label htmlFor="atividadesQueGosta">que gosta</label>
                <textarea id="atividadesQueGosta" name="atividadesQueGosta" rows="5" cols="62" />
            </div>
            <div className="col-3">
                <div>
                <label htmlFor="fumante">Fumante?</label>
                <select name="selectFumante">
                    <option value="">Selecione...</option>
                    <option value="S">SIM</option>
                    <option value="N">N&Atilde;O</option>
                </select>
                </div>
                <div>
                <label htmlFor="parouA">Parou a </label>
                <input id="parouA" type="text" size="30" name="parouA" />
                </div>
                <div>
                <label htmlFor="numeroCigarros">N&uacute;mero de Cigarros:</label>
                <input id="numeroCigarros" type="text" size="30" name="numeroCigarros" />
                </div>
            </div>
            <div className="col-2">
                <div>
                <label htmlFor="etilismo">Etilismo?</label>
                <select name="selectEtilismo">
                    <option value="">Selecione...</option>
                    <option value="S">SIM</option>
                    <option value="N">N&Atilde;O</option>
                </select>
                </div>
                <div>
                <label htmlFor="alergia">Alergia:</label>
                <input id="alergia" type="text" size="50" name="alergia" />
                </div>
            </div>
            <div>
                <label htmlFor="examesClinicos">Exames Cl&iacute;nicos:</label>
                <input id="examesClinicos" type="text" size="70" maxLength="100" name="examesClinicos" />
            </div>
            <div>
                <label htmlFor="doencasAnteriores">Doen&ccedil;as Anteriores:</label>
                <input id="doencasAnteriores" type="text" size="70" maxLength="100" name="doencasAnteriores" />
            </div>
            <div>
                <label htmlFor="doencasAnteriores">Hist&oacute;rico Familiar:</label>
                <input id="doencasAnteriores" type="text" size="70" maxLength="100" name="doencasAnteriores" />
            </div>
            <div>
                <label htmlFor="cirurgiasInternacoes">Cirurgias e Interna&ccedil;&otilde;es:</label>
                <input id="cirurgiasInternacoes" type="text" size="70" maxLength="100" name="cirurgiasInternacoes" />
            </div>
            <div>
                <label htmlFor="dorOuLesao">Dor ou Les&atilde;o:</label>
                <input id="dorOuLesao" type="text" size="70" maxLength="100" name="dorOuLesao" />
            </div>
            <div>
                <label htmlFor="medicacaoEmUso">Medica&ccedil;&atilde;o em Uso:</label>
                <input id="medicacaoEmUso" type="text" size="70" maxLength="100" name="medicacaoEmUso" />
            </div>
            <div>
                <label htmlFor="acompanhamentoNutricional">Acompanhamento Nutricional:</label>
                <input id="acompanhamentoNutricional" type="text" size="70" maxLength="100" name="acompanhamentoNutricional" />
            </div>
            <div>
                <label htmlFor="objetivos">Hist&oacute;rico detalhado e Observa&ccedil;&otilde;es</label>
                <textarea id="objetivos" name="objetivos" rows="10" cols="62" />
            </div>
        </fieldset>
    );
}

export default FormularioHistorico;