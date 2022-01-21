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
    
    <table id="tbRodada1">
			<tr>
				<td> <img class="imgLogo" src="../logos/lll.png"> </td><td>x</td><td> <img class="imgLogo" src="../logos/fur.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="../logos/net.png"> </td><td>x</td><td> <img class="imgLogo" src="../logos/fla.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="../logos/kbm.png"> </td><td>x</td><td> <img class="imgLogo" src="../logos/itz.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="../logos/png.png"> </td><td>x</td><td> <img class="imgLogo" src="../logos/lib.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="../logos/rng.png"> </td><td>x</td><td> <img class="imgLogo" src="../logos/red.png"> </td>
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
            <p>Testando Pontos</p>
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