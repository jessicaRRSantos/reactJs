import React from 'react';

const FormularioHistorico = () => {
    return (
        <fieldset>
        <div className="HeaderForm">
            <div className="FormTitle">HIST&Oacute;RICO</div>
        </div>
        <br />
        <table>
            <tr>
            <td><label htmlFor="praticaAtividade">Pratica atividade f&iacute;sica?</label></td>
                <td><select name="selectAtividade">
                    <option value="">Selecione...</option>
                    <option value="S">SIM</option>
                    <option value="N">N&Atilde;O</option>            
            </select></td>
            <td><label htmlFor="qualAitivade">Qual?</label></td>
            <td><input id="qualAitivade" type="text" size="70" name="qualAitivade" /></td> 
            </tr>
            <tr>
            <td><label htmlFor="frequenciaSemanal">Frequencia Semanal</label></td>
                <td><select name="selectFrequenciaSemanal">
                    <option value="">Selecione...</option>
                    <option value="1">1 VEZ NA SEMANA</option>
                    <option value="2">2 VEZES NA SEMANA</option>            
                    <option value="3">3 VEZES NA SEMANA</option>  
                    <option value="4">4 VEZES NA SEMANA</option>  
                    <option value="5">5 VEZES NA SEMANA</option>  
                    <option value="6">6 VEZES NA SEMANA</option>  
                    <option value="7">7 VEZES NA SEMANA</option>  
            </select></td>
                <td><label htmlFor="quantoTempo">H&aacute; quanto tempo?</label></td>
                <td><input id="quantoTempo" type="text" size="10" name="quantoTempo"/></td>
            </tr>
            <tr>
                <td><label htmlFor="horarioPreferencial">Hor&aacute;rio Preferencial</label></td>
                <td><select name="selectHorarioPreferencial">
                    <option value="">Selecione...</option>
                    <option value="M">MANH&Atilde;</option>
                    <option value="T">TARDE</option>            
                    <option value="N">NOITE</option>   
            </select></td>                   
            </tr>
            <tr>
                <td><label htmlFor="atividadesNaoGosta">Atividades que N&Atilde;O gosta</label></td>
                <td><textarea id="atividadesNaoGosta" name="atividadesNaoGosta" rows="5" cols="62"/></td>
                <td><label htmlFor="atividadesQueGosta">que gosta</label></td>
                <td><textarea id="atividadesQueGosta" name="atividadesQueGosta" rows="5" cols="62"/></td>
            </tr>
            <tr>
            <td><label htmlFor="fumante">Fumante?</label></td>
                <td><select name="selectFumante">
                    <option value="">Selecione...</option>
                    <option value="S">SIM</option>
                    <option value="N">N&Atilde;O</option>             
            </select></td>     
                <td><label htmlFor="parouA">Parou a </label></td>
                <td><input id="parouA" type="text" size="10" name="parouA"/></td>
            </tr>
            <tr>
                <td><label htmlFor="numeroCigarros">N&uacute;mero de Cigarros:</label></td>
                <td><input id="numeroCigarros" type="text" size="70" name="numeroCigarros"/></td>
            </tr>
            <tr>
                <td><label htmlFor="etilismo">Etilismo?</label></td>
                <td><select name="selectEtilismo">
                        <option value="">Selecione...</option>
                        <option value="S">SIM</option>
                        <option value="N">N&Atilde;O</option>             
                </select></td> 
                <td><label htmlFor="alergia">Alergia:</label></td>
                <td><input id="alergia" type="text" size="70" name="alergia"/></td>    
            </tr>
            <tr>
                <td><label htmlFor="examesClinicos">Exames Cl&iacute;nicos:</label></td>
                <td><input id="examesClinicos" type="text" size="70" maxLength="100" name="examesClinicos" /></td>
            </tr>
            <tr>
                <td><label htmlFor="doencasAnteriores">Doen&ccedil;as Anteriores:</label></td>
                <td><input id="doencasAnteriores" type="text" size="70" maxLength="100" name="doencasAnteriores" /></td>
            </tr>
            <tr>
                <td><label htmlFor="doencasAnteriores">Hist&oacute;rico Familiar:</label></td>
                <td><input id="doencasAnteriores" type="text" size="70" maxLength="100" name="doencasAnteriores" /></td>
            </tr>
            <tr>
                <td><label htmlFor="cirurgiasInternacoes">Cirurgias e Interna&ccedil;&otilde;es:</label></td>
                <td><input id="cirurgiasInternacoes" type="text" size="70" maxLength="100" name="cirurgiasInternacoes" /></td>
            </tr>
            <tr>
                <td><label htmlFor="dorOuLesao">Dor ou Les&atilde;o:</label></td>
                <td><input id="dorOuLesao" type="text" size="70" maxLength="100" name="dorOuLesao" /></td>
            </tr>
            <tr>
                <td><label htmlFor="medicacaoEmUso">Medica&ccedil;&atilde;o em Uso:</label></td>
                <td><input id="medicacaoEmUso" type="text" size="70" maxLength="100" name="medicacaoEmUso" /></td>
            </tr>
            <tr>
                <td><label htmlFor="acompanhamentoNutricional">Acompanhamento Nutricional:</label></td>
                <td><input id="acompanhamentoNutricional" type="text" size="70" maxLength="100" name="acompanhamentoNutricional" /></td>
            </tr>
            <tr>
                <td><label htmlFor="objetivos">Hist&oacute;rico detalhado e Observa&ccedil;&otilde;es</label></td>
                <td><textarea id="objetivos" name="objetivos" rows="10" cols="62"/></td>
            </tr>
        </table>
    </fieldset>
    );
}

export default FormularioHistorico;