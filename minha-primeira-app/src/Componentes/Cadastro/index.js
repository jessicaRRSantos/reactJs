import React from 'react';

const Cadastro = () => {
    return (
        <form action="#">
            <fieldset>

                <div class="HeaderForm">
                    <div class="FormTitle">Dados Pessoais</div>
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
        </form>
    );

}

export default Cadastro;