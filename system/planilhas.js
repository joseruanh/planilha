function planilha17()
{
    let pickles = {pt1: 'PNG', pt2: 'FUR', pt3: 'LIB', pt4: 'RED', pt5: 'NET', pontos:'3 pontos'};
    let ruanh = {pt1: 'PNG', pt2: 'FUR', pt3: 'LIB', pt4: 'RED', pt5: 'LLL', pontos:'3 pontos'};
    let relampago = {pt1: 'PNG', pt2: 'FUR', pt3: 'LIB', pt4: 'RED', pt5: 'LLL', pontos:'3 pontos'};
    let victor = {pt1: 'RNG', pt2: 'KBM', pt3: 'LIB', pt4: 'RED', pt5: 'NET', pontos:'3 pontos'};
    let jean = {pt1: 'PNG', pt2: 'KBM', pt3: 'LIB', pt4: 'RED', pt5: 'LLL', pontos:'4 pontos'};
    let brener = {pt1: 'RNG', pt2: 'KBM', pt3: 'LIB', pt4: 'RED', pt5: 'LLL', pontos:'3 pontos'};
    let kennyd = {pt1: 'PNG', pt2: 'FUR', pt3: 'LIB', pt4: 'RED', pt5: 'LLL', pontos:'3 pontos'};
    let vitor = {pt1: 'PNG', pt2: 'FUR', pt3: 'LIB', pt4: 'RED', pt5: 'LLL', pontos:'3 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 17</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">${pickles.pt1}</td> <td id="loss">${pickles.pt2}</td> <td id="win">${pickles.pt3}</td> <td id="win">${pickles.pt4}</td> <td>${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="win">${ruanh.pt1}</td> <td id="loss">${ruanh.pt2}</td> <td id="win">${ruanh.pt3}</td> <td id="win">${ruanh.pt4}</td> <td>${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="win">${relampago.pt1}</td> <td id="loss">${relampago.pt2}</td> <td id="win">${relampago.pt3}</td> <td id="win">${relampago.pt4}</td> <td>${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ademiro </strong> <td id="loss">${victor.pt1}</td> <td id="win">${victor.pt2}</td> <td id="win">${victor.pt3}</td> <td id="win">${victor.pt4}</td> <td>${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="win">${jean.pt1}</td> <td id="win">${jean.pt2}</td> <td id="win">${jean.pt3}</td> <td id="win">${jean.pt4}</td> <td>${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="loss">${brener.pt1}</td> <td id="win">${brener.pt2}</td> <td id="win">${brener.pt3}</td> <td id="win">${brener.pt4}</td> <td>${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="win">${kennyd.pt1}</td> <td id="loss">${kennyd.pt2}</td> <td id="win">${kennyd.pt3}</td> <td id="win">${kennyd.pt4}</td> <td>${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Vitor </strong> <td id="win">${vitor.pt1}</td> <td id="loss">${vitor.pt2}</td> <td id="win">${vitor.pt3}</td> <td id="win">${vitor.pt4}</td> <td>${vitor.pt5}</td> <td class="nomes"> <strong> ${vitor.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha16()
{
    let pickles = {pt1: 'KBM', pt2: 'RNG', pt3: 'RED', pt4: 'PNG', pt5: 'FUR', pontos:'2 pontos'};
    let ruanh = {pt1: 'NET', pt2: 'RNG', pt3: 'RED', pt4: 'LLL', pt5: 'FUR', pontos:'2 pontos'};
    let relampago = {pt1: 'KBM', pt2: 'RNG', pt3: 'RED', pt4: 'LLL', pt5: 'FUR', pontos:'1 ponto'};
    let victor = {pt1: 'NA', pt2: 'NA', pt3: 'NA', pt4: 'NA', pt5: 'NA', pontos:'0 pontos'};
    let jean = {pt1: 'KBM', pt2: 'RNG', pt3: 'RED', pt4: 'PNG', pt5: 'FUR', pontos:'2 pontos'};
    let brener = {pt1: 'NET', pt2: 'RNG', pt3: 'RED', pt4: 'LLL', pt5: 'FUR', pontos:'2 pontos'};
    let kennyd = {pt1: 'NA', pt2: 'NA', pt3: 'NA', pt4: 'NA', pt5: 'NA', pontos:'0 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 16</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="loss">${pickles.pt1}</td> <td id="win">${pickles.pt2}</td> <td id="loss">${pickles.pt3}</td> <td id="win">${pickles.pt4}</td> <td id="loss">${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="win">${ruanh.pt1}</td> <td id="win">${ruanh.pt2}</td> <td id="loss">${ruanh.pt3}</td> <td id="loss">${ruanh.pt4}</td> <td id="loss">${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="loss">${relampago.pt1}</td> <td id="win">${relampago.pt2}</td> <td id="loss">${relampago.pt3}</td> <td id="loss">${relampago.pt4}</td> <td id="loss">${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="loss">${victor.pt1}</td> <td id="loss">${victor.pt2}</td> <td id="loss">${victor.pt3}</td> <td id="loss">${victor.pt4}</td> <td id="loss">${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="loss">${jean.pt1}</td> <td id="win">${jean.pt2}</td> <td id="loss">${jean.pt3}</td> <td id="win">${jean.pt4}</td> <td id="loss">${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="win">${brener.pt1}</td> <td id="win">${brener.pt2}</td> <td id="loss">${brener.pt3}</td> <td id="loss">${brener.pt4}</td> <td id="loss">${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="loss">${kennyd.pt1}</td> <td id="loss">${kennyd.pt2}</td> <td id="loss">${kennyd.pt3}</td> <td id="loss">${kennyd.pt4}</td> <td id="loss">${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha15()
{
    let pickles = {pt1: 'NET', pt2: 'RNG', pt3: 'LLL', pt4: 'FUR', pt5: 'PNG', pontos:'4 pontos'};
    let ruanh = {pt1: 'NET', pt2: 'RNG', pt3: 'LLL', pt4: 'RED', pt5: 'PNG', pontos:'3 pontos'};
    let relampago = {pt1: 'LIB', pt2: 'RNG', pt3: 'LLL', pt4: 'FUR', pt5: 'PNG', pontos:'3 pontos'};
    let victor = {pt1: 'NA', pt2: 'NA', pt3: 'NA', pt4: 'NA', pt5: 'NA', pontos:'0 pontos'};
    let jean = {pt1: 'NET', pt2: 'RNG', pt3: 'KBM', pt4: 'FUR', pt5: 'PNG', pontos:'5 pontos'};
    let brener = {pt1: 'NET', pt2: 'RNG', pt3: 'KBM', pt4: 'FUR', pt5: 'PNG', pontos:'5 pontos'};
    let kennyd = {pt1: 'NET', pt2: 'RNG', pt3: 'LLL', pt4: 'RED', pt5: 'PNG', pontos:'3 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 15</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">${pickles.pt1}</td> <td id="win">${pickles.pt2}</td> <td id="loss">${pickles.pt3}</td> <td id="win">${pickles.pt4}</td> <td id="win">${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="win">${ruanh.pt1}</td> <td id="win">${ruanh.pt2}</td> <td id="loss">${ruanh.pt3}</td> <td id="loss">${ruanh.pt4}</td> <td id="win">${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="loss">${relampago.pt1}</td> <td id="win">${relampago.pt2}</td> <td id="loss">${relampago.pt3}</td> <td id="win">${relampago.pt4}</td> <td id="win">${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="loss">${victor.pt1}</td> <td id="loss">${victor.pt2}</td> <td id="loss">${victor.pt3}</td> <td id="loss">${victor.pt4}</td> <td id="loss">${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="win">${jean.pt1}</td> <td id="win">${jean.pt2}</td> <td id="win">${jean.pt3}</td> <td id="win">${jean.pt4}</td> <td id="win">${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="win">${brener.pt1}</td> <td id="win">${brener.pt2}</td> <td id="win">${brener.pt3}</td> <td id="win">${brener.pt4}</td> <td id="win">${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="win">${kennyd.pt1}</td> <td id="win">${kennyd.pt2}</td> <td id="loss">${kennyd.pt3}</td> <td id="loss">${kennyd.pt4}</td> <td id="win">${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha14()
{
    let pickles = {pt1: 'LLL', pt2: 'PNG', pt3: 'RED', pt4: 'KBM', pt5: 'FUR', pontos:'4 pontos'};
    let ruanh = {pt1: 'LLL', pt2: 'PNG', pt3: 'RED', pt4: 'KBM', pt5: 'FUR', pontos:'4 pontos'};
    let relampago = {pt1: 'LLL', pt2: 'PNG', pt3: 'RED', pt4: 'KBM', pt5: 'FUR', pontos:'4 pontos'};
    let victor = {pt1: 'LLL', pt2: 'PNG', pt3: 'RED', pt4: 'KBM', pt5: 'FUR', pontos:'4 pontos'};
    let jean = {pt1: 'LLL', pt2: 'PNG', pt3: 'RED', pt4: 'KBM', pt5: 'FUR', pontos:'4 pontos'};
    let brener = {pt1: 'LLL', pt2: 'PNG', pt3: 'NET', pt4: 'KBM', pt5: 'FUR', pontos:'3 pontos'};
    let tony = {pt1: 'NA', pt2: 'NA', pt3: 'NA', pt4: 'NA', pt5: 'NA', pontos:'0 pontos'};
    let kennyd = {pt1: 'NA', pt2: 'NA', pt3: 'NA', pt4: 'NA', pt5: 'NA', pontos:'0 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 14</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">${pickles.pt1}</td> <td id="win">${pickles.pt2}</td> <td id="win">${pickles.pt3}</td> <td id="win">${pickles.pt4}</td> <td id="loss">${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="win">${ruanh.pt1}</td> <td id="win">${ruanh.pt2}</td> <td id="win">${ruanh.pt3}</td> <td id="win">${ruanh.pt4}</td> <td id="loss">${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="win">${relampago.pt1}</td> <td id="win">${relampago.pt2}</td> <td id="win">${relampago.pt3}</td> <td id="win">${relampago.pt4}</td> <td id="loss">${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="win">${victor.pt1}</td> <td id="win">${victor.pt2}</td> <td id="win">${victor.pt3}</td> <td id="win">${victor.pt4}</td> <td id="loss">${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="win">${jean.pt1}</td> <td id="win">${jean.pt2}</td> <td id="win">${jean.pt3}</td> <td id="win">${jean.pt4}</td> <td id="loss">${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="win">${brener.pt1}</td> <td id="win">${brener.pt2}</td> <td id="loss">${brener.pt3}</td> <td id="win">${brener.pt4}</td> <td id="loss">${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="loss">${tony.pt1}</td> <td id="loss">${tony.pt2}</td> <td id="loss">${tony.pt3}</td> <td id="loss">${tony.pt4}</td> <td id="loss">${tony.pt5}</td> <td class="nomes"> <strong> ${tony.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="loss">${kennyd.pt1}</td> <td id="loss">${kennyd.pt2}</td> <td id="loss">${kennyd.pt3}</td> <td id="loss">${kennyd.pt4}</td> <td id="loss">${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha13()
{
    let pickles = {pt1: 'FUR', pt2: 'LLL', pt3: 'FLA', pt4: 'NET', pt5: 'RED', pontos:'4 pontos'};
    let ruanh = {pt1: 'FUR', pt2: 'LLL', pt3: 'FLA', pt4: 'NET', pt5: 'RED', pontos:'4 pontos'};
    let relampago = {pt1: 'FUR', pt2: 'LLL', pt3: 'ITZ', pt4: 'NET', pt5: 'RED', pontos:'3 pontos'};
    let victor = {pt1: 'FUR', pt2: 'LIB', pt3: 'ITZ', pt4: 'NET', pt5: 'KBM', pontos:'3 pontos'};
    let jean = {pt1: 'FUR', pt2: 'LLL', pt3: 'ITZ', pt4: 'NET', pt5: 'KBM', pontos:'4 pontos'};
    let brener = {pt1: 'FUR', pt2: 'LLL', pt3: 'FLA', pt4: 'NET', pt5: 'KBM', pontos:'5 pontos'};
    let tony = {pt1: 'NA', pt2: 'NA', pt3: 'NA', pt4: 'NA', pt5: 'NA', pontos:'0 pontos'};
    let kennyd = {pt1: 'FUR', pt2: 'LLL', pt3: 'FLA', pt4: 'NET', pt5: 'RED', pontos:'4 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 13</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">${pickles.pt1}</td> <td id="win">${pickles.pt2}</td> <td id="win">${pickles.pt3}</td> <td id="win">${pickles.pt4}</td> <td id="loss">${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="win">${ruanh.pt1}</td> <td id="win">${ruanh.pt2}</td> <td id="win">${ruanh.pt3}</td> <td id="win">${ruanh.pt4}</td> <td id="loss">${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="win">${relampago.pt1}</td> <td id="win">${relampago.pt2}</td> <td id="loss">${relampago.pt3}</td> <td id="win">${relampago.pt4}</td> <td id="loss">${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="win">${victor.pt1}</td> <td id="loss">${victor.pt2}</td> <td id="loss">${victor.pt3}</td> <td id="win">${victor.pt4}</td> <td id="win">${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="win">${jean.pt1}</td> <td id="win">${jean.pt2}</td> <td id="loss">${jean.pt3}</td> <td id="win">${jean.pt4}</td> <td id="win">${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="win">${brener.pt1}</td> <td id="win">${brener.pt2}</td> <td id="win">${brener.pt3}</td> <td id="win">${brener.pt4}</td> <td id="win">${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="loss">${tony.pt1}</td> <td id="loss">${tony.pt2}</td> <td id="loss">${tony.pt3}</td> <td id="loss">${tony.pt4}</td> <td id="loss">${tony.pt5}</td> <td class="nomes"> <strong> ${tony.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="win">${kennyd.pt1}</td> <td id="win">${kennyd.pt2}</td> <td id="win">${kennyd.pt3}</td> <td id="win">${kennyd.pt4}</td> <td id="loss">${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha12()
{
    let pickles = {pt1: 'FLA', pt2: 'FUR', pt3: 'NET', pt4: 'RED', pt5: 'KBM', pontos:'4 pontos'};
    let ruanh = {pt1: 'LLL', pt2: 'FUR', pt3: 'PNG', pt4: 'RED', pt5: 'KBM', pontos:'4 pontos'};
    let relampago = {pt1: 'LLL', pt2: 'FUR', pt3: 'PNG', pt4: 'RED', pt5: 'KBM', pontos:'4 pontos'};
    let victor = {pt1: 'NA', pt2: 'NA', pt3: 'NA', pt4: 'NA', pt5: 'NA', pontos:'0 pontos'};
    let jean = {pt1: 'LLL', pt2: 'FUR', pt3: 'PNG', pt4: 'RED', pt5: 'KBM', pontos:'4 pontos'};
    let brener = {pt1: 'LLL', pt2: 'FUR', pt3: 'PNG', pt4: 'LIB', pt5: 'KBM', pontos:'3 pontos'};
    let tony = {pt1: 'NA', pt2: 'FUR', pt3: 'PNG', pt4: 'RED', pt5: 'KBM', pontos:'4 pontos'};
    let kennyd = {pt1: 'LLL', pt2: 'FUR', pt3: 'PNG', pt4: 'RED', pt5: 'KBM', pontos:'4 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 12</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">${pickles.pt1}</td> <td id="win">${pickles.pt2}</td> <td id="loss">${pickles.pt3}</td> <td id="win">${pickles.pt4}</td> <td id="win">${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="loss">${ruanh.pt1}</td> <td id="win">${ruanh.pt2}</td> <td id="win">${ruanh.pt3}</td> <td id="win">${ruanh.pt4}</td> <td id="win">${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="loss">${relampago.pt1}</td> <td id="win">${relampago.pt2}</td> <td id="win">${relampago.pt3}</td> <td id="win">${relampago.pt4}</td> <td id="win">${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="loss">${victor.pt1}</td> <td id="loss">${victor.pt2}</td> <td id="loss">${victor.pt3}</td> <td id="loss">${victor.pt4}</td> <td id="loss">${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="loss">${jean.pt1}</td> <td id="win">${jean.pt2}</td> <td id="win">${jean.pt3}</td> <td id="win">${jean.pt4}</td> <td id="win">${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="loss">${brener.pt1}</td> <td id="win">${brener.pt2}</td> <td id="win">${brener.pt3}</td> <td id="loss">${brener.pt4}</td> <td id="win">${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="loss">${tony.pt1}</td> <td id="win">${tony.pt2}</td> <td id="win">${tony.pt3}</td> <td id="win">${tony.pt4}</td> <td id="win">${tony.pt5}</td> <td class="nomes"> <strong> ${tony.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="loss">${kennyd.pt1}</td> <td id="win">${kennyd.pt2}</td> <td id="win">${kennyd.pt3}</td> <td id="win">${kennyd.pt4}</td> <td id="win">${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha11()
{
    let pickles = {pt1: 'FUR', pt2: 'LLL', pt3: 'LIB', pt4: 'KBM', pt5: 'NET', pontos:'1 ponto'};
    let ruanh = {pt1: 'FUR', pt2: 'LLL', pt3: 'LIB', pt4: 'KBM', pt5: 'NET', pontos:'2 pontos'};
    let relampago = {pt1: 'FUR', pt2: 'LLL', pt3: 'LIB', pt4: 'KBM', pt5: 'NET', pontos:'2 pontos'};
    let victor = {pt1: 'FUR', pt2: 'LLL', pt3: 'LIB', pt4: 'KBM', pt5: 'NET', pontos:'2 pontos'};
    let jean = {pt1: 'FUR', pt2: 'LLL', pt3: 'LIB', pt4: 'KBM', pt5: 'NET', pontos:'2 pontos'};
    let brener = {pt1: 'FUR', pt2: 'RED', pt3: 'RNG', pt4: 'PNG', pt5: 'NET', pontos:'5 pontos'};
    let tony = {pt1: 'FUR', pt2: 'LLL', pt3: 'RNG', pt4: 'PNG', pt5: 'NET', pontos:'4 pontos'};
    let kennyd = {pt1: 'NA', pt2: 'LLL', pt3: 'LIB', pt4: 'KBM', pt5: 'NET', pontos:'1 ponto'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 11</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">${pickles.pt1}</td> <td id="loss">${pickles.pt2}</td> <td id="loss">${pickles.pt3}</td> <td id="loss">${pickles.pt4}</td> <td id="win">${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="win">${ruanh.pt1}</td> <td id="loss">${ruanh.pt2}</td> <td id="loss">${ruanh.pt3}</td> <td id="loss">${ruanh.pt4}</td> <td id="win">${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="win">${relampago.pt1}</td> <td id="loss">${relampago.pt2}</td> <td id="loss">${relampago.pt3}</td> <td id="loss">${relampago.pt4}</td> <td id="win">${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="win">${victor.pt1}</td> <td id="loss">${victor.pt2}</td> <td id="loss">${victor.pt3}</td> <td id="loss">${victor.pt4}</td> <td id="win">${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="win">${jean.pt1}</td> <td id="loss">${jean.pt2}</td> <td id="loss">${jean.pt3}</td> <td id="loss">${jean.pt4}</td> <td id="win">${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="win">${brener.pt1}</td> <td id="win">${brener.pt2}</td> <td id="win">${brener.pt3}</td> <td id="win">${brener.pt4}</td> <td id="win">${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="win">${tony.pt1}</td> <td id="loss">${tony.pt2}</td> <td id="win">${tony.pt3}</td> <td id="win">${tony.pt4}</td> <td id="win">${tony.pt5}</td> <td class="nomes"> <strong> ${tony.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="loss">${kennyd.pt1}</td> <td id="loss">${kennyd.pt2}</td> <td id="loss">${kennyd.pt3}</td> <td id="loss">${kennyd.pt4}</td> <td id="win">${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha10()
{
    let pickles = {pt1: 'RED', pt2: 'KBM', pt3: 'LIB', pt4: 'NET', pt5: 'FUR', pontos:'3 pontos'};
    let ruanh = {pt1: 'RED', pt2: 'KBM', pt3: 'LIB', pt4: 'NET', pt5: 'FUR', pontos:'3 pontos'};
    let relampago = {pt1: 'RED', pt2: 'KBM', pt3: 'LIB', pt4: 'NET', pt5: 'LLL', pontos:'4 pontos'};
    let victor = {pt1: 'RED', pt2: 'KBM', pt3: 'LIB', pt4: 'NET', pt5: 'FUR', pontos:'3 pontos'};
    let jean = {pt1: 'RED', pt2: 'KBM', pt3: 'LIB', pt4: 'NET', pt5: 'FUR', pontos:'3 pontos'};
    let brener = {pt1: 'RNG', pt2: 'KBM', pt3: 'PNG', pt4: 'FLA', pt5: 'LLL', pontos:'1 ponto'};
    let tony = {pt1: 'RED', pt2: 'KBM', pt3: 'PNG', pt4: 'NET', pt5: 'FUR', pontos:'2 ponto'};
    let kennyd = {pt1: 'RED', pt2: 'KBM', pt3: 'LIB', pt4: 'NET', pt5: 'FUR', pontos:'3 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 10</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">${pickles.pt1}</td> <td id="loss">${pickles.pt2}</td> <td id="win">${pickles.pt3}</td> <td id="win">${pickles.pt4}</td> <td id="loss">${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="win">${ruanh.pt1}</td> <td id="loss">${ruanh.pt2}</td> <td id="win">${ruanh.pt3}</td> <td id="win">${ruanh.pt4}</td> <td id="loss">${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="win">${relampago.pt1}</td> <td id="loss">${relampago.pt2}</td> <td id="win">${relampago.pt3}</td> <td id="win">${relampago.pt4}</td> <td id="win">${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="win">${victor.pt1}</td> <td id="loss">${victor.pt2}</td> <td id="win">${victor.pt3}</td> <td id="win">${victor.pt4}</td> <td id="loss">${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="win">${jean.pt1}</td> <td id="loss">${jean.pt2}</td> <td id="win">${jean.pt3}</td> <td id="win">${jean.pt4}</td> <td id="loss">${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="loss">${brener.pt1}</td> <td id="loss">${brener.pt2}</td> <td id="loss">${brener.pt3}</td> <td id="loss">${brener.pt4}</td> <td id="win">${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="win">${tony.pt1}</td> <td id="loss">${tony.pt2}</td> <td id="loss">${tony.pt3}</td> <td id="win">${tony.pt4}</td> <td id="loss">${tony.pt5}</td> <td class="nomes"> <strong> ${tony.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="win">${kennyd.pt1}</td> <td id="loss">${kennyd.pt2}</td> <td id="win">${kennyd.pt3}</td> <td id="win">${kennyd.pt4}</td> <td id="loss">${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha9()
{
    let pickles = {pt1: 'FUR', pt2: 'RED', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'4 pontos'};
    let ruanh = {pt1: 'FUR', pt2: 'PNG', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'3 pontos'};
    let relampago = {pt1: 'FUR', pt2: 'RED', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'4 pontos'};
    let victor = {pt1: 'FUR', pt2: 'RED', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'4 pontos'};
    let jean = {pt1: 'FUR', pt2: 'RED', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'4 pontos'};
    let brener = {pt1: 'NET', pt2: 'RED', pt3: 'FLA', pt4: 'LLL', pt5: 'ITZ', pontos:'3 pontos'};
    let tony = {pt1: 'FUR', pt2: 'PNG', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'3 pontos'};
    let kennyd = {pt1: 'FUR', pt2: 'PNG', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'3 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 9</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="loss">${pickles.pt1}</td> <td id="win">${pickles.pt2}</td> <td id="win">${pickles.pt3}</td> <td id="win">${pickles.pt4}</td> <td id="win">${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="loss">${ruanh.pt1}</td> <td id="loss">${ruanh.pt2}</td> <td id="win">${ruanh.pt3}</td> <td id="win">${ruanh.pt4}</td> <td id="win">${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="loss">${relampago.pt1}</td> <td id="win">${relampago.pt2}</td> <td id="win">${relampago.pt3}</td> <td id="win">${relampago.pt4}</td> <td id="win">${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="loss">${victor.pt1}</td> <td id="win">${victor.pt2}</td> <td id="win">${victor.pt3}</td> <td id="win">${victor.pt4}</td> <td id="win">${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="loss">${jean.pt1}</td> <td id="win">${jean.pt2}</td> <td id="win">${jean.pt3}</td> <td id="win">${jean.pt4}</td> <td id="win">${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="win">${brener.pt1}</td> <td id="win">${brener.pt2}</td> <td id="loss">${brener.pt3}</td> <td id="win">${brener.pt4}</td> <td id="loss">${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="loss">${tony.pt1}</td> <td id="loss">${tony.pt2}</td> <td id="win">${tony.pt3}</td> <td id="win">${tony.pt4}</td> <td id="win">${tony.pt5}</td> <td class="nomes"> <strong> ${tony.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="loss">${kennyd.pt1}</td> <td id="loss">${kennyd.pt2}</td> <td id="win">${kennyd.pt3}</td> <td id="win">${kennyd.pt4}</td> <td id="win">${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha8()
{
    let pickles = {pt1: 'LIB', pt2: 'KBM', pt3: 'LLL', pt4: 'RED', pt5: 'PNG', pontos:'4 pontos'};
    let ruanh = {pt1: 'LIB', pt2: 'FUR', pt3: 'LLL', pt4: 'RED', pt5: 'PNG', pontos:'5 pontos'};
    let relampago = {pt1: 'LIB', pt2: 'FUR', pt3: 'LLL', pt4: 'RED', pt5: 'PNG', pontos:'5 pontos'};
    let victor = {pt1: 'NA', pt2: 'KBM', pt3: 'LLL', pt4: 'RED', pt5: 'RNG', pontos:'2 pontos'};
    let jean = {pt1: 'LIB', pt2: 'KBM', pt3: 'LLL', pt4: 'RED', pt5: 'PNG', pontos:'4 pontos'};
    let brener = {pt1: 'FLA', pt2: 'FUR', pt3: 'LLL', pt4: 'RED', pt5: 'RNG', pontos:'3 pontos'};
    let tony = {pt1: 'NA', pt2: 'NA', pt3: 'NA', pt4: 'NA', pt5: 'NA', pontos:'0 pontos'};
    let kennyd = {pt1: 'FLA', pt2: 'FUR', pt3: 'LLL', pt4: 'RED', pt5: 'PNG', pontos:'4 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 8</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">${pickles.pt1}</td> <td id="loss">${pickles.pt2}</td> <td id="win">${pickles.pt3}</td> <td id="win">${pickles.pt4}</td> <td id="win">${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="win">${ruanh.pt1}</td> <td id="win">${ruanh.pt2}</td> <td id="win">${ruanh.pt3}</td> <td id="win">${ruanh.pt4}</td> <td id="win">${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="win">${relampago.pt1}</td> <td id="win">${relampago.pt2}</td> <td id="win">${relampago.pt3}</td> <td id="win">${relampago.pt4}</td> <td id="win">${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="loss">${victor.pt1}</td> <td id="loss">${victor.pt2}</td> <td id="win">${victor.pt3}</td> <td id="win">${victor.pt4}</td> <td id="loss">${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="win">${jean.pt1}</td> <td id="loss">${jean.pt2}</td> <td id="win">${jean.pt3}</td> <td id="win">${jean.pt4}</td> <td id="win">${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="loss">${brener.pt1}</td> <td id="win">${brener.pt2}</td> <td id="win">${brener.pt3}</td> <td id="win">${brener.pt4}</td> <td id="loss">${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="loss">${tony.pt1}</td> <td id="loss">${tony.pt2}</td> <td id="loss">${tony.pt3}</td> <td id="loss">${tony.pt4}</td> <td id="loss">${tony.pt5}</td> <td class="nomes"> <strong> ${tony.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="loss">${kennyd.pt1}</td> <td id="win">${kennyd.pt2}</td> <td id="win">${kennyd.pt3}</td> <td id="win">${kennyd.pt4}</td> <td id="win">${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha7()
{
    let pickles = {pt1: 'RNG', pt2: 'RED', pt3: 'FUR', pt4: 'LLL', pt5: 'KBM', pontos:'4 pontos'};
    let ruanh = {pt1: 'ITZ', pt2: 'RED', pt3: 'FUR', pt4: 'PNG', pt5: 'KBM', pontos:'2 pontos'};
    let relampago = {pt1: 'RNG', pt2: 'RED', pt3: 'FUR', pt4: 'LLL', pt5: 'KBM', pontos:'4 pontos'};
    let victor = {pt1: 'RNG', pt2: 'RED', pt3: 'FUR', pt4: 'LLL', pt5: 'KBM', pontos:'4 pontos'};
    let jean = {pt1: 'RNG', pt2: 'RED', pt3: 'FUR', pt4: 'LLL', pt5: 'KBM', pontos:'4 pontos'};
    let brener = {pt1: 'RNG', pt2: 'RED', pt3: 'FUR', pt4: 'PNG', pt5: 'KBM', pontos:'3 pontos'};
    let tony = {pt1: 'RNG', pt2: 'RED', pt3: 'FUR', pt4: 'PNG', pt5: 'KBM', pontos:'3 pontos'};
    let kennyd = {pt1: 'ITZ', pt2: 'RED', pt3: 'FUR', pt4: 'PNG', pt5: 'KBM', pontos:'2 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 7</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">${pickles.pt1}</td> <td id="loss">${pickles.pt2}</td> <td id="win">${pickles.pt3}</td> <td id="win">${pickles.pt4}</td> <td id="win">${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td  id="loss">${ruanh.pt1}</td> <td id="loss">${ruanh.pt2}</td> <td id="win">${ruanh.pt3}</td> <td id="loss">${ruanh.pt4}</td> <td id="win">${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="win">${relampago.pt1}</td> <td id="loss">${relampago.pt2}</td> <td id="win">${relampago.pt3}</td> <td id="win">${relampago.pt4}</td> <td id="win">${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="win">${victor.pt1}</td> <td id="loss">${victor.pt2}</td> <td id="win">${victor.pt3}</td> <td id="win">${victor.pt4}</td> <td id="win">${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="win">${jean.pt1}</td> <td id="loss">${jean.pt2}</td> <td id="win">${jean.pt3}</td> <td id="win">${jean.pt4}</td> <td id="win">${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="win">${brener.pt1}</td> <td id="loss">${brener.pt2}</td> <td id="win">${brener.pt3}</td> <td id="loss">${brener.pt4}</td> <td id="win">${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="win">${tony.pt1}</td> <td id="loss">${tony.pt2}</td> <td id="win">${tony.pt3}</td> <td id="loss">${tony.pt4}</td> <td id="win">${tony.pt5}</td> <td class="nomes"> <strong> ${tony.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="loss">${kennyd.pt1}</td> <td id="loss">${kennyd.pt2}</td> <td id="win">${kennyd.pt3}</td> <td id="loss">${kennyd.pt4}</td> <td id="win">${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}



function planilha1()
{
    let a = window.document.getElementById("res");

    a.innerHTML = `
    <br>
    <p><strong>RODADA 1</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td id="win">PNG</td><td id="win">RED</td><td class="nomes"> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td id="win">PNG</td><td id="win">RED</td><td class="nomes"> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td id="win">PNG</td><td id="win">RED</td><td class="nomes"> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> </td><td id="loss">FUR</td><td id="loss">FLA</td><td id="win">KBM</td><td id="win">PNG</td><td id="loss">RNG</td><td class="nomes"> <strong> 2 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="loss">ITZ</td><td id="win">PNG</td><td id="win">RED</td><td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td id="win">PNG</td><td id="win">RED</td><td class="nomes"> <strong> 4 pontos </strong> </td>
            </tr>
            <tr>
                <td class="nomes"> <strong> Tony </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="loss">ITZ</td><td id="win">PNG</td><td id="win">RED</td><td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>
            <tr>
                <td class="nomes"> <strong> Kennyd </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="loss">ITZ</td><td id="win">PNG</td><td id="win">RED</td><td class="nomes"> <strong> 3 pontos</strong> </td>
            </tr>
        </table>
        
        <br><br><br>
    `
}

function planilha2()
{
    let a = window.document.getElementById("res");

    a.innerHTML = `
    <br>
    <p><strong>RODADA 2</strong></p>
                <br>

                <table id="planilha">
                <tr>
                    <td class="nomes"> <strong> Pickles </strong> </td><td id="win">KBM</td><td id="loss">RNG</td><td id="win">RED</td><td id="win">NET</td><td id="win">FUR</td><td class="nomes"> <strong> 4 pontos </strong> </td>
                </tr>

                <tr>
                    <td class="nomes"> <strong> Ruanh </strong> </td><td id="loss">PNG</td><td id="win">LIB</td><td id="win">RED</td><td id="win">NET</td><td id="win">FUR</td><td class="nomes"> <strong> 4 pontos </strong> </td>
                </tr>

                <tr>
                    <td class="nomes"> <strong> Relâmpago </strong> </td><td id="win">KBM</td><td id="loss">RNG</td><td id="loss">LLL</td><td id="win">NET</td><td id="win">FUR</td><td class="nomes"> <strong> 3 pontos </strong> </td>
                </tr>

                <tr>
                    <td class="nomes"> <strong> Victor </strong> </td><td id="win">KBM</td><td id="loss">RNG</td><td id="loss">LLL</td><td id="win">NET</td><td id="win">FUR</td><td class="nomes"> <strong> 3 pontos </strong> </td>
                </tr>

                <tr>
                    <td class="nomes"> <strong> Jean </strong> </td><td id="win">KBM</td><td id="loss">RNG</td><td id="win">RED</td><td id="win">NET</td><td id="win">FUR</td><td class="nomes"> <strong> 4 pontos </strong> </td>
                </tr>

                <tr>
                    <td class="nomes"> <strong> Brener </strong> </td><td id="loss">PNG</td><td id="loss">RNG</td><td id="win">RED</td><td id="win">NET</td><td id="win">FUR</td><td class="nomes"> <strong> 3 pontos </strong> </td>
                </tr>
                <tr>
                    <td class="nomes"> <strong> Tony </strong> </td><td id="loss">PNG</td><td id="loss">NA</td><td id="loss">NA</td><td id="win">NET</td><td id="win">FUR</td><td class="nomes"> <strong> 2 pontos </strong> </td>
                </tr>
                <tr>
                    <td class="nomes"> <strong> Kennyd </strong> </td><td id="loss">PNG</td><td id="win">LIB</td><td id="loss">LLL</td><td id="win">NET</td><td id="win">FUR</td><td class="nomes"> <strong> 3 pontos </strong> </td>
                </tr>
            </table>

            <br><br><br>
    `
}

function planilha3()
{
    let a = window.document.getElementById("res");

    a.innerHTML = `
    <br>
    <p><strong>RODADA 3</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">KBM</td> <td id="win">FUR</td> <td id="win">LLL</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">KBM</td> <td id="win">FUR</td> <td id="win">LLL</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">KBM</td> <td id="win">FUR</td> <td id="win">LLL</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="loss">RED</td> <td id="win">NET</td> <td id="win">KBM</td> <td id="loss">ITZ</td> <td id="win">LLL</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">KBM</td> <td id="win">FUR</td> <td id="win">LLL</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">KBM</td> <td id="win">FUR</td> <td id="win">LLL</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">KBM</td> <td id="win">FUR</td> <td id="win">LLL</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">KBM</td> <td id="win">FUR</td> <td id="win">LLL</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha4()
{
    let a = window.document.getElementById("res");

    a.innerHTML = `
    <br>
    <p><strong>RODADA 4</strong></p>
            <br>

            <table id="planilha">

            <tr>
                <td class="nomes"> <strong> Pickles </strong> </td> <td id="loss">KBM</td> <td id="win">LIB</td> <td id="loss">NET</td> <td id="win">FUR</td> <td id="loss">FLA</td> <td class="nomes"> <strong> 2 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> </td> <td id="win">RED</td> <td id="loss">LLL</td> <td id="loss">NET</td> <td id="loss">PNG</td> <td id="loss">FLA</td> <td class="nomes"> <strong> 1 ponto </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> </td> <td id="loss">KBM</td> <td id="loss">LLL</td> <td id="loss">NET</td> <td id="win">FUR</td> <td id="win">ITZ</td> <td class="nomes"> <strong> 2 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> </td> <td id="loss">KBM</td> <td id="win">LIB</td> <td id="loss">NET</td> <td id="win">FUR</td> <td id="win">ITZ</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> </td> <td id="loss">KBM</td> <td id="loss">LLL</td> <td id="loss">NET</td> <td id="win">FUR</td> <td id="win">ITZ</td> <td class="nomes"> <strong> 2 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> </td> <td id="loss">KBM</td> <td id="loss">LLL</td> <td id="win">RNG</td> <td id="win">FUR</td> <td id="win">ITZ</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> </td> <td id="loss">NA</td> <td id="loss">NA</td> <td id="win">RNG</td> <td id="loss">PNG</td> <td id="win">ITZ</td> <td class="nomes"> <strong> 2 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> </td> <td id="win">RED</td> <td id="loss">LLL</td> <td id="loss">NET</td> <td id="loss">PNG</td> <td id="loss">FLA</td> <td class="nomes"> <strong> 1 ponto </strong> </td>
            </tr>
            
        </table>

        <br><br><br>
    `
}

function planilha5()
{
    let a = window.document.getElementById("res");

    a.innerHTML = `
    <br>
    <p><strong>RODADA 5</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">RED</td> <td id="win">LLL</td> <td id="loss">LIB</td> <td id="win">PNG</td> <td id="win">FUR</td> <td class="nomes"> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="win">RED</td> <td id="win">LLL</td> <td id="win">KBM</td> <td id="win">PNG</td> <td id="win">FUR</td> <td class="nomes"> <strong> 5 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="win">RED</td> <td id="win">LLL</td> <td id="win">KBM</td> <td id="win">PNG</td> <td id="win">FUR</td> <td class="nomes"> <strong> 5 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="win">RED</td> <td id="win">LLL</td> <td id="win">KBM</td> <td id="win">PNG</td> <td id="win">FUR</td> <td class="nomes"> <strong> 5 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="win">RED</td> <td id="win">LLL</td> <td id="win">KBM</td> <td id="win">PNG</td> <td id="win">FUR</td> <td class="nomes"> <strong> 5 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="win">RED</td> <td id="win">LLL</td> <td id="loss">LIB</td> <td id="win">PNG</td> <td id="win">FUR</td> <td class="nomes"> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="win">RED</td> <td id="win">LLL</td> <td id="win">KBM</td> <td id="win">PNG</td> <td id="win">FUR</td> <td class="nomes"> <strong> 5 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="win">RED</td> <td id="win">LLL</td> <td id="win">KBM</td> <td id="win">PNG</td> <td id="win">FUR</td> <td class="nomes"> <strong> 5 pontos </strong> </td>
            </tr>

            
        </table>

        <br><br><br>
    `
}

function planilha6()
{
    let a = window.document.getElementById("res");
    a.innerHTML = `
    <br>
    <p><strong>RODADA 6</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="win">KBM</td> <td id="win">FUR</td> <td id="loss">PNG</td> <td id="win">LIB</td> <td id="loss">RNG</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="win">KBM</td> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">LIB</td> <td id="loss">RNG</td> <td class="nomes"> <strong> 2 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="loss">LLL</td> <td id="win">FUR</td> <td id="loss">PNG</td> <td id="win">LIB</td> <td id="loss">RNG</td> <td class="nomes"> <strong> 2 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="loss">NA</td> <td id="loss">NA</td> <td id="loss">PNG</td> <td id="win">LIB</td> <td id="loss">RNG</td> <td class="nomes"> <strong> 1 ponto </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="win">KBM</td> <td id="win">FUR</td> <td id="loss">PNG</td> <td id="win">LIB</td> <td id="loss">RNG</td> <td class="nomes"> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="loss">NA</td> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">LIB</td> <td id="loss">RNG</td> <td class="nomes"> <strong> 1 ponto </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="loss">NA</td> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">LIB</td> <td id="loss">RNG</td> <td class="nomes"> <strong> 1 ponto </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="win">KBM</td> <td id="loss">RED</td> <td id="loss">PNG</td> <td id="win">LIB</td> <td id="loss">NA</td> <td class="nomes"> <strong> 2 pontos </strong> </td>
            </tr>            
        </table>

        <br><br><br>
    `
}

