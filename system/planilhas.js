function planilha9()
{
    let pickles = {pt1: 'FUR', pt2: 'RED', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'1 ponto'};
    let ruanh = {pt1: 'FUR', pt2: 'PNG', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'0 pontos'};
    let relampago = {pt1: 'FUR', pt2: 'RED', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'1 ponto'};
    let victor = {pt1: 'FUR', pt2: 'RED', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'1 ponto'};
    let jean = {pt1: 'FUR', pt2: 'RED', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'1 ponto'};
    let brener = {pt1: 'NET', pt2: 'RED', pt3: 'FLA', pt4: 'LLL', pt5: 'ITZ', pontos:'2 pontos'};
    let tony = {pt1: 'FUR', pt2: 'PNG', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'0 pontos'};
    let kennyd = {pt1: 'FUR', pt2: 'PNG', pt3: 'KBM', pt4: 'LLL', pt5: 'LIB', pontos:'0 pontos'};


    let a = window.document.getElementById("res")
    a.innerHTML = `
    <br>
    <p><strong>RODADA 9</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td class="nomes"> <strong> Pickles </strong> <td id="loss">${pickles.pt1}</td> <td id="win">${pickles.pt2}</td> <td>${pickles.pt3}</td> <td>${pickles.pt4}</td> <td>${pickles.pt5}</td> <td class="nomes"> <strong> ${pickles.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Ruanh </strong> <td id="loss">${ruanh.pt1}</td> <td id="loss">${ruanh.pt2}</td> <td>${ruanh.pt3}</td> <td>${ruanh.pt4}</td> <td>${ruanh.pt5}</td> <td class="nomes"> <strong> ${ruanh.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Relâmpago </strong> <td id="loss">${relampago.pt1}</td> <td id="win">${relampago.pt2}</td> <td>${relampago.pt3}</td> <td>${relampago.pt4}</td> <td>${relampago.pt5}</td> <td class="nomes"> <strong> ${relampago.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Victor </strong> <td id="loss">${victor.pt1}</td> <td id="win">${victor.pt2}</td> <td>${victor.pt3}</td> <td>${victor.pt4}</td> <td>${victor.pt5}</td> <td class="nomes"> <strong> ${victor.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Jean </strong> <td id="loss">${jean.pt1}</td> <td id="win">${jean.pt2}</td> <td>${jean.pt3}</td> <td>${jean.pt4}</td> <td>${jean.pt5}</td> <td class="nomes"> <strong> ${jean.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Brener </strong> <td id="win">${brener.pt1}</td> <td id="win">${brener.pt2}</td> <td>${brener.pt3}</td> <td>${brener.pt4}</td> <td>${brener.pt5}</td> <td class="nomes"> <strong> ${brener.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Tony </strong> <td id="loss">${tony.pt1}</td> <td id="loss">${tony.pt2}</td> <td>${tony.pt3}</td> <td>${tony.pt4}</td> <td>${tony.pt5}</td> <td class="nomes"> <strong> ${tony.pontos} </strong> </td>
            </tr>

            <tr>
                <td class="nomes"> <strong> Kennyd </strong> <td id="loss">${kennyd.pt1}</td> <td id="loss">${kennyd.pt2}</td> <td>${kennyd.pt3}</td> <td>${kennyd.pt4}</td> <td>${kennyd.pt5}</td> <td class="nomes"> <strong> ${kennyd.pontos} </strong> </td>
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

