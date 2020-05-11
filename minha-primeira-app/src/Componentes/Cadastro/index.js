import React from 'react';

const Cadastro = () => {
    return (
        <form action="#">
            <fieldset>

                <div class="HeaderForm">
                    <div class="FormTitle">DADOS PESSOAIS</div>
                    {/*<div class="FormLegend">(*) Campos obrigatórios</div>*/}
                </div>
                <br />
                <table>
                    <tr>
                        <td class="FormOneColumnLabel"><label for="nome">Nome</label></td>
                        <td class="FormOneColumnField"><input id="nome" type="text" size="70" maxlength="100" name="nome" /></td>
                    </tr>
                    <tr>
                        <td><label for="dataNascimento">Data de Nascimento</label></td>
                        <td><input name="dataNascimento" type="text" id="dataNascimento" value="dd/mm/aaaa" /></td>
                    </tr>
                    <tr>
                        <td><label for="idade">Idade</label></td>
                        <td><input id="idade" type="text" size="10" name="idade" /> anos</td>                        
                    </tr>
                    <tr>
                        <td><label for="dataAvaliacao">Data da Avalia&ccedil;&atilde;o</label></td>
                        <td><input name="dataAvaliacao" type="text" id="dataAvaliacao" value="dd/mm/aaaa" /></td>
                    </tr>
                    <tr>
                        <td><label for="estatura">Estatura</label></td>
                        <td><input id="estatura" type="text" size="10" name="estatura" /> cm</td> 
                    </tr>
                    <tr>
                        <td><label for="objetivos">Objetivos</label></td>
                        <td><textarea id="objetivos" name="objetivos" rows="5" cols="62"/></td>
                    </tr>
                    <tr>
                        <td><label for="professor">Professor</label></td>
                        <td><input id="estatura" type="text" size="70" name="estatura" /></td> 
                    </tr>
                </table>
            </fieldset>
            <fieldset>
                <div class="HeaderForm">
                    <div class="FormTitle">HIST&Oacute;RICO</div>
                </div>
                <br />
                <table>
                    <tr>
                    <td><label for="praticaAtividade">Pratica atividade f&iacute;sica?</label></td>
                        <td><select name="selectAtividade">
                            <option value="">Selecione...</option>
                            <option value="S">SIM</option>
                            <option value="N">N&Atilde;O</option>            
                    </select></td>
                    <td><label for="qualAitivade">Qual?</label></td>
                    <td><input id="qualAitivade" type="text" size="70" name="qualAitivade" /></td> 
                    </tr>
                    <tr>
                    <td><label for="frequenciaSemanal">Frequencia Semanal</label></td>
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
                        <td><label for="quantoTempo">H&aacute; quanto tempo?</label></td>
                        <td><input id="quantoTempo" type="text" size="10" name="quantoTempo"/></td>
                    </tr>
                    <tr>
                        <td><label for="horarioPreferencial">Hor&aacute;rio Preferencial</label></td>
                        <td><select name="selectHorarioPreferencial">
                            <option value="">Selecione...</option>
                            <option value="M">MANH&Atilde;</option>
                            <option value="T">TARDE</option>            
                            <option value="N">NOITE</option>   
                    </select></td>                   
                    </tr>
                    <tr>
                        <td><label for="atividadesNaoGosta">Atividades que N&Atilde;O gosta</label></td>
                        <td><textarea id="atividadesNaoGosta" name="atividadesNaoGosta" rows="5" cols="62"/></td>
                        <td><label for="atividadesQueGosta">que gosta</label></td>
                        <td><textarea id="atividadesQueGosta" name="atividadesQueGosta" rows="5" cols="62"/></td>
                    </tr>
                    <tr>
                    <td><label for="fumante">Fumante?</label></td>
                        <td><select name="selectFumante">
                            <option value="">Selecione...</option>
                            <option value="S">SIM</option>
                            <option value="N">N&Atilde;O</option>             
                    </select></td>     
                        <td><label for="parouA">Parou a </label></td>
                        <td><input id="parouA" type="text" size="10" name="parouA"/></td>
                    </tr>
                    <tr>
                        <td><label for="numeroCigarros">N&uacute;mero de Cigarros:</label></td>
                        <td><input id="numeroCigarros" type="text" size="70" name="numeroCigarros"/></td>
                    </tr>
                    <tr>
                        <td><label for="etilismo">Etilismo?</label></td>
                        <td><select name="selectEtilismo">
                                <option value="">Selecione...</option>
                                <option value="S">SIM</option>
                                <option value="N">N&Atilde;O</option>             
                        </select></td> 
                        <td><label for="alergia">Alergia:</label></td>
                        <td><input id="alergia" type="text" size="70" name="alergia"/></td>    
                    </tr>
                    <tr>
                        <td><label for="examesClinicos">Exames Cl&iacute;nicos:</label></td>
                        <td><input id="examesClinicos" type="text" size="70" maxlength="100" name="examesClinicos" /></td>
                    </tr>
                    <tr>
                        <td><label for="doencasAnteriores">Doen&ccedil;as Anteriores:</label></td>
                        <td><input id="doencasAnteriores" type="text" size="70" maxlength="100" name="doencasAnteriores" /></td>
                    </tr>
                    <tr>
                        <td><label for="doencasAnteriores">Hist&oacute;rico Familiar:</label></td>
                        <td><input id="doencasAnteriores" type="text" size="70" maxlength="100" name="doencasAnteriores" /></td>
                    </tr>
                    <tr>
                        <td><label for="cirurgiasInternacoes">Cirurgias e Interna&ccedil;&otilde;es:</label></td>
                        <td><input id="cirurgiasInternacoes" type="text" size="70" maxlength="100" name="cirurgiasInternacoes" /></td>
                    </tr>
                    <tr>
                        <td><label for="dorOuLesao">Dor ou Les&atilde;o:</label></td>
                        <td><input id="dorOuLesao" type="text" size="70" maxlength="100" name="dorOuLesao" /></td>
                    </tr>
                    <tr>
                        <td><label for="medicacaoEmUso">Medica&ccedil;&atilde;o em Uso:</label></td>
                        <td><input id="medicacaoEmUso" type="text" size="70" maxlength="100" name="medicacaoEmUso" /></td>
                    </tr>
                    <tr>
                        <td><label for="acompanhamentoNutricional">Acompanhamento Nutricional:</label></td>
                        <td><input id="acompanhamentoNutricional" type="text" size="70" maxlength="100" name="acompanhamentoNutricional" /></td>
                    </tr>
                    <tr>
                        <td><label for="objetivos">Hist&oacute;rico detalhado e Observa&ccedil;&otilde;es</label></td>
                        <td><textarea id="objetivos" name="objetivos" rows="10" cols="62"/></td>
                    </tr>
                </table>
            </fieldset>
            <fieldset>
                <div class="HeaderForm">
                    <div class="FormTitle">MOBILIDADE</div>
                </div>
                <br />
                <table>
                    <tr>
                        <td><label for="posteriorCoxa">Posterior de Coxa:</label></td>
                        <td><input id="posteriorCoxa" type="text" size="70" maxlength="100" name="posteriorCoxa" /></td>
                    </tr>
                    <tr>
                        <td><label for="anteriorQuadril">Anterior de Quadril:</label></td>
                        <td><input id="anteriorQuadril" type="text" size="70" maxlength="100" name="anteriorQuadril" /></td>
                    </tr>
                    <tr>
                        <td><label for="tornozelo">Tornozelo (cm):</label></td>
                        <td><input id="tornozelo" type="text" size="70" maxlength="100" name="tornozelo" /></td>                      
                    </tr>
                    <tr>
                        <td><label for="ombros">Ombros:</label></td>
                        <td><input id="ombros" type="text" size="70" maxlength="100" name="ombros" /></td>    
                    </tr>
                </table>
            </fieldset>
        </form>
    );

}

export default Cadastro;