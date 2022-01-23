function carregar() {
    window.scroll(0, 0);
    location.reload()
}

function jogos () {
    window.scroll(0, 0);

    let content = window.document.getElementById("res");

    content.innerHTML = `
    
    <img id="cblogo" src="images/img01.png" alt="CBLOL">
            <br>
            <br>
			<p><strong>Rodada 2</strong></p>
            <p class="pData">23/01</p>
    <br>
    
    <table id="tbRodada1" class="resultados">
			<tr>
				<td> <img class="imgLogo" src="logos/png.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/kbm.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/lib.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/rng.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/red.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/lll.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/itz.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/net.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/fla.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/fur.png"> </td>
			</tr>			
		</table>

        <br><br><br>

        <p><strong>Rodada 1</strong></p>
    <p class="pData">22/01</p>
    <br>
    
    <table id="tbRodada1" class="resultados">
            <tr>
                <td> <img class="imgLogo" src="logos/lll.png"> </td><td>1 - 0</td><td> <img class="imgLogo" src="logos/fur.png"> </td>
            </tr>

            <tr>
                <td> <img class="imgLogo" src="logos/net.png"> </td><td>1 - 0</td><td> <img class="imgLogo" src="logos/fla.png"> </td>
            </tr>

            <tr>
                <td> <img class="imgLogo" src="logos/kbm.png"> </td><td>1 - 0</td><td> <img class="imgLogo" src="logos/itz.png"> </td>
            </tr>

            <tr>
                <td> <img class="imgLogo" src="logos/png.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/lib.png"> </td>
            </tr>

            <tr>
                <td> <img class="imgLogo" src="logos/rng.png"> </td><td>0 - 1</td><td> <img class="imgLogo" src="logos/red.png"> </td>
            </tr>           
        </table>
        
    
    `
}

function pontos () {
    window.scroll(0, 0);
    let content = window.document.getElementById("res");

    content.innerHTML = `
    
    <img id="cblogo" src="images/img01.png" alt="CBLOL">
            <br>
            <p><strong>Votos e Pontos por rodada</strong></p>
            <br>
            <br>
        <p><strong>RODADA 2</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td> <strong> Pickles </strong> </td><td>jogo1</td><td>jogo2</td><td>jogo3</td><td>jogo4</td><td>jogo5</td><td> <strong> 0 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Ruanh </strong> </td><td>PNG</td><td>LIB</td><td>RED</td><td>NET</td><td>FUR</td><td> <strong> 0 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Relâmpago </strong> </td><td>jogo1</td><td>jogo2</td><td>jogo3</td><td>jogo4</td><td>jogo5</td><td> <strong> 0 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Victor </strong> </td><td>jogo1</td><td>RNG</td><td>LLL</td><td>NET</td><td>FUR</td><td> <strong> 0 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Jean </strong> </td><td>KBM</td><td>RNG</td><td>RED</td><td>NET</td><td>FUR</td><td> <strong> 0 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Brener </strong> </td><td>PNG</td><td>RNG</td><td>RED</td><td>NET</td><td>FUR</td><td> <strong> 0 pontos </strong> </td>
            </tr>
            <tr>
                <td> <strong> Tony </strong> </td><td>jogo1</td><td>jogo2</td><td>jogo3</td><td>jogo4</td><td>jogo5</td><td> <strong> 0 pontos </strong> </td>
            </tr>
            <tr>
                <td> <strong> Kennyd </strong> </td><td>jogo1</td><td>jogo2</td><td>jogo3</td><td>jogo4</td><td>jogo5</td><td> <strong> 0 pontos </strong> </td>
            </tr>
        </table>

        <br><br><br>

        <p><strong>RODADA 1</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td> <strong> Pickles </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td>PNG</td><td id="win">RED</td><td> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Ruanh </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td>PNG</td><td id="win">RED</td><td> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Relâmpago </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td>PNG</td><td id="win">RED</td><td> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Victor </strong> </td><td id="loss">FUR</td><td id="loss">FLA</td><td id="win">KBM</td><td>PNG</td><td id="loss">RNG</td><td> <strong> 1 ponto </strong> </td>
            </tr>

            <tr>
                <td> <strong> Jean </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="loss">ITZ</td><td>PNG</td><td id="win">RED</td><td> <strong> 2 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Brener </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td>PNG</td><td id="win">RED</td><td> <strong> 3 pontos </strong> </td>
            </tr>
            <tr>
                <td> <strong> Tony </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="loss">ITZ</td><td>PNG</td><td id="win">RED</td><td> <strong> 2 pontos </strong> </td>
            </tr>
            <tr>
                <td> <strong> Kennyd </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="loss">ITZ</td><td>PNG</td><td id="win">RED</td><td> <strong> 2 pontos</strong> </td>
            </tr>
        </table>







    `
}


function bolao(){
    window.scroll(0, 0);
    let content = window.document.getElementById("res");

    content.innerHTML = `
    
    <img id="cblogo" src="images/img01.png" alt="CBLOL">
            <br>
            <p>Classificação</p>
            <br>
            <button class="butTabelas" onclick="classificacao()">CBLOL</button> <button class="butTabelas" onclick="bolao()">BOLÃO</button>

            <br>
			<table class="tabelaBOLAO">
			<tr>
				<td><h1>1</h1></td> <td>Pickles</td> <td>3 pontos</td>
			</tr>

			<tr>
				<td><h1>1</h1></td> <td>Ruanh</td> <td>3 pontos</td>
			</tr>

			<tr>
				<td><h1>1</h1></td> <td>Relâmpago</td> <td>3 pontos</td>
			</tr>

			<tr>
				<td><h1>1</h1></td> <td>Brener</td> <td>3 pontos</td>
			</tr>

			<tr>
				<td><h1>2</h1></td> <td>Jean</td> <td>2 pontos</td>
			</tr>

			<tr>
				<td><h1>2</h1></td> <td>Kennyd</td> <td>2 pontos</td>
			</tr>

			<tr>
				<td><h1>2</h1></td> <td>Tony</td> <td>2 pontos</td>
			</tr>

			<tr>
				<td><h1>3</h1></td> <td>Victor</td> <td>1 ponto</td>
			</tr>

		</table>

            `


}

function classificacao () {
    window.scroll(0, 0);
    let content = window.document.getElementById("res");

    content.innerHTML = `
    
    <img id="cblogo" src="images/img01.png" alt="CBLOL">
            <br>
            <p>Classificação</p>
            <br>
            <button class="butTabelas" onclick="classificacao()">CBLOL</button> <button class="butTabelas" onclick="bolao()">BOLÃO</button>

            	<table class="classificacao">

            	<tr>
            		<td> <h1>1</h1> </td> <td> <img class="imgLogo1" src="logos/net.png"> </td> <td>1v - 0d</td>
            	</tr>

            	<tr>
            		<td> <h1>1</h1> </td> <td> <img class="imgLogo1" src="logos/lll.png"> </td> <td>1v - 0d</td>
            	</tr>

            	<tr>
            		<td> <h1>1</h1> </td> <td> <img class="imgLogo1" src="logos/kbm.png"> </td> <td>1v - 0d</td>
            	</tr>

            	<tr>
            		<td> <h1>1</h1> </td> <td> <img class="imgLogo1" src="logos/red.png"> </td> <td>1v - 0d</td>
            	</tr>

            	<tr>
            		<td> <h1>2</h1> </td> <td> <img class="imgLogo1" src="logos/png.png"> </td> <td>0v - 0d</td>
            	</tr>

            	<tr>
            		<td> <h1>2</h1> </td> <td> <img class="imgLogo1" src="logos/lib.png"> </td> <td>0v - 0d</td>
            	</tr>

            	<tr>
            		<td> <h1>3</h1> </td> <td> <img class="imgLogo1" src="logos/rng.png"> </td> <td>0v - 1d</td>
            	</tr>

            	<tr>
            		<td> <h1>3</h1> </td> <td> <img class="imgLogo1" src="logos/itz.png"> </td> <td>0v - 1d</td>
            	</tr>

            	<tr>
            		<td> <h1>3</h1> </td> <td> <img class="imgLogo1" src="logos/fur.png"> </td> <td>0v - 1d</td>
            	</tr>

            	<tr>
            		<td> <h1>3</h1> </td> <td> <img class="imgLogo1" src="logos/fla.png"> </td> <td>0v - 1d</td>
            	</tr>

            	</table>

		</div>
    `
}