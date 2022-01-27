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
				<td> <img class="imgLogo" src="logos/png.png"> </td><td>0 - 1</td><td> <img class="imgLogo" src="logos/kbm.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/lib.png"> </td><td>1 - 0</td><td> <img class="imgLogo" src="logos/rng.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/red.png"> </td><td>1 - 0</td><td> <img class="imgLogo" src="logos/lll.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/itz.png"> </td><td>0 - 1</td><td> <img class="imgLogo" src="logos/net.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/fla.png"> </td><td>0 - 1</td><td> <img class="imgLogo" src="logos/fur.png"> </td>
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
                <td> <img class="imgLogo" src="logos/png.png"> </td><td>1 - 0</td><td> <img class="imgLogo" src="logos/lib.png"> </td>
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
                <td> <strong> Pickles </strong> </td><td id="win">KBM</td><td id="loss">RNG</td><td id="win">RED</td><td id="win">NET</td><td id="win">FUR</td><td> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Ruanh </strong> </td><td id="loss">PNG</td><td id="win">LIB</td><td id="win">RED</td><td id="win">NET</td><td id="win">FUR</td><td> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Relâmpago </strong> </td><td id="win">KBM</td><td id="loss">RNG</td><td id="loss">LLL</td><td id="win">NET</td><td id="win">FUR</td><td> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Victor </strong> </td><td id="win">KBM</td><td id="loss">RNG</td><td id="loss">LLL</td><td id="win">NET</td><td id="win">FUR</td><td> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Jean </strong> </td><td id="win">KBM</td><td id="loss">RNG</td><td id="win">RED</td><td id="win">NET</td><td id="win">FUR</td><td> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Brener </strong> </td><td id="loss">PNG</td><td id="loss">RNG</td><td id="win">RED</td><td id="win">NET</td><td id="win">FUR</td><td> <strong> 3 pontos </strong> </td>
            </tr>
            <tr>
                <td> <strong> Tony </strong> </td><td id="loss">PNG</td><td id="loss">NA</td><td id="loss">NA</td><td id="win">NET</td><td id="win">FUR</td><td> <strong> 2 pontos </strong> </td>
            </tr>
            <tr>
                <td> <strong> Kennyd </strong> </td><td id="loss">PNG</td><td id="win">LIB</td><td id="loss">LLL</td><td id="win">NET</td><td id="win">FUR</td><td> <strong> 3 pontos </strong> </td>
            </tr>
        </table>

        <br><br><br>

        <p><strong>RODADA 1</strong></p>
            <br>

            <table id="planilha">
            <tr>
                <td> <strong> Pickles </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td id="win">PNG</td><td id="win">RED</td><td> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Ruanh </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td id="win">PNG</td><td id="win">RED</td><td> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Relâmpago </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td id="win">PNG</td><td id="win">RED</td><td> <strong> 4 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Victor </strong> </td><td id="loss">FUR</td><td id="loss">FLA</td><td id="win">KBM</td><td id="win">PNG</td><td id="loss">RNG</td><td> <strong> 2 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Jean </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="loss">ITZ</td><td id="win">PNG</td><td id="win">RED</td><td> <strong> 3 pontos </strong> </td>
            </tr>

            <tr>
                <td> <strong> Brener </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="win">KBM</td><td id="win">PNG</td><td id="win">RED</td><td> <strong> 4 pontos </strong> </td>
            </tr>
            <tr>
                <td> <strong> Tony </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="loss">ITZ</td><td id="win">PNG</td><td id="win">RED</td><td> <strong> 3 pontos </strong> </td>
            </tr>
            <tr>
                <td> <strong> Kennyd </strong> </td><td id="win">LLL</td><td id="loss">FLA</td><td id="loss">ITZ</td><td id="win">PNG</td><td id="win">RED</td><td> <strong> 3 pontos</strong> </td>
            </tr>
        </table>







    `
}


function bolao(){
    window.scroll(0, 0);
    let content = window.document.getElementById("res");

    let primeiro = {nome:'Ruanh', pontos: 8};
    let segundo = {nome: 'Pickles', pontos: 8};
    let terceiro = {nome: 'Brener', pontos: 7};
    let quarto = {nome: 'Relâmpago', pontos: 7};
    let quinto = {nome: 'Jean', pontos: 7};
    let sexto = {nome: 'Kennyd', pontos: 6};
    let setimo = {nome: 'Tony', pontos: 5};
    let oitavo = {nome: 'Victor', pontos: 5};

    content.innerHTML = `
    
    <img id="cblogo" src="images/img01.png" alt="CBLOL">
            <br>
            <p>Classificação</p>
            <br>
            <button class="butTabelas" onclick="classificacao()">CBLOL</button> <button class="butTabelas" onclick="bolao()">BOLÃO</button>

            <br>
			<table class="tabelaBOLAO">
			<tr>
				<td><h1>1</h1></td> <td>${primeiro.nome}</td> <td>${primeiro.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>2</h1></td> <td>${segundo.nome}</td> <td>${segundo.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>2</h1></td> <td>${terceiro.nome}</td> <td>${terceiro.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>3</h1></td> <td>${quarto.nome}</td> <td>${quarto.pontos} pontos</td>
			</tr>

            <tr>
				<td><h1>3</h1></td> <td>${quinto.nome}</td> <td>${quinto.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>3</h1></td> <td>${sexto.nome}</td> <td>${sexto.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>4</h1></td> <td>${setimo.nome}</td> <td>${setimo.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>5</h1></td> <td>${oitavo.nome}</td> <td>${oitavo.pontos} pontos</td>
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
            		<td> <h1>1</h1> </td> <td> <img class="imgLogo1" src="logos/kbm.png"> </td> <td>2v - 0d</td>
            	</tr>

                <tr>
            		<td> <h1>1</h1> </td> <td> <img class="imgLogo1" src="logos/red.png"> </td> <td>2v - 0d</td>
            	</tr>

                <tr>
            		<td> <h1>1</h1> </td> <td> <img class="imgLogo1" src="logos/net.png"> </td> <td>2v - 0d</td>
            	</tr>

                <tr>
            		<td> <h1>4</h1> </td> <td> <img class="imgLogo1" src="logos/png.png"> </td> <td>1v - 1d</td>
            	</tr>

            	<tr>
            		<td> <h1>4</h1> </td> <td> <img class="imgLogo1" src="logos/lib.png"> </td> <td>1v - 1d</td>
            	</tr>

                <tr>
            		<td> <h1>4</h1> </td> <td> <img class="imgLogo1" src="logos/fur.png"> </td> <td>1v - 1d</td>
            	</tr>

                <tr>
            		<td> <h1>4</h1> </td> <td> <img class="imgLogo1" src="logos/lll.png"> </td> <td>1v - 1d</td>
            	</tr>

                <tr>
            		<td> <h1>8</h1> </td> <td> <img class="imgLogo1" src="logos/fla.png"> </td> <td>0v - 2d</td>
            	</tr>

            	<tr>
            		<td> <h1>8</h1> </td> <td> <img class="imgLogo1" src="logos/itz.png"> </td> <td>0v - 2d</td>
            	</tr>

                <tr>
            		<td> <h1>8</h1> </td> <td> <img class="imgLogo1" src="logos/rng.png"> </td> <td>0v - 2d</td>
            	</tr>

            	</table>

		</div>
    `
}