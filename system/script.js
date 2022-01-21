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
    <p><strong>Rodada 1</strong></p>
    <br>
    
    <table id="tbRodada1" class="resultados">
			<tr>
				<td> <img class="imgLogo" src="logos/lll.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/fur.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/net.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/fla.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/kbm.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/itz.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/png.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/lib.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="logos/rng.png"> </td><td>x</td><td> <img class="imgLogo" src="logos/red.png"> </td>
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
            <p><strong>RODADA 1</strong></p>
            <br>

            <table id="planilha">
			<tr>
				<td> <strong> Pickles </strong> </td><td>jogo1</td><td>jogo2</td><td>jogo3</td><td>jogo4</td><td>jogo5</td><td> <strong> 0 pontos </strong> </td>
			</tr>

			<tr>
				<td> <strong> Ruanh </strong> </td><td>jogo1</td><td>jogo2</td><td>jogo3</td><td>jogo4</td><td>jogo5</td><td> <strong> 0 pontos </strong> </td>
			</tr>

			<tr>
				<td> <strong> Relâmpago </strong> </td><td>jogo1</td><td>jogo2</td><td>jogo3</td><td>jogo4</td><td>jogo5</td><td> <strong> 0 pontos </strong> </td>
			</tr>

			<tr>
				<td> <strong> Victor </strong> </td><td>jogo1</td><td>jogo2</td><td>jogo3</td><td>jogo4</td><td>jogo5</td><td> <strong> 0 pontos </strong> </td>
			</tr>

			<tr>
				<td> <strong> Jean </strong> </td><td>jogo1</td><td>jogo2</td><td>jogo3</td><td>jogo4</td><td>jogo5</td><td> <strong> 0 pontos </strong> </td>
			</tr>

			<tr>
				<td> <strong> Brener </strong> </td><td>jogo1</td><td>jogo2</td><td>jogo3</td><td>jogo4</td><td>jogo5</td><td> <strong> 0 pontos </strong> </td>
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
            <p>Testando Classificação</p>
    `
}