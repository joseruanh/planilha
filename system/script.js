function carregar() {
    location.reload()
}

function jogos () {

    let content = window.document.getElementById("res");

    content.innerHTML = `
    
    <img id="cblogo" src="images/img01.png" alt="CBLOL">
            <br>
            <br>
    <p><strong>Rodada 1</strong></p>
    <br>
    
    <table id="tbRodada1">
			<tr>
				<td> <img class="imgLogo" src="../images/logos/lll.png"> </td><td>x</td><td> <img class="imgLogo" src="../images/logos/fur.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="../images/logos/net.png"> </td><td>x</td><td> <img class="imgLogo" src="../images/logos/fla.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="../images/logos/kbm.png"> </td><td>x</td><td> <img class="imgLogo" src="../images/logos/itz.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="../images/logos/png.png"> </td><td>x</td><td> <img class="imgLogo" src="../images/logos/lib.png"> </td>
			</tr>

			<tr>
				<td> <img class="imgLogo" src="../images/logos/rng.png"> </td><td>x</td><td> <img class="imgLogo" src="../images/logos/red.png"> </td>
			</tr>			
		</table>
    
    `
}

function pontos () {
    let content = window.document.getElementById("res");

    content.innerHTML = `
    
    <img id="cblogo" src="images/img01.png" alt="CBLOL">
            <br>
            <p>Testando Pontos</p>
    `
}

function classificacao () {
    let content = window.document.getElementById("res");

    content.innerHTML = `
    
    <img id="cblogo" src="images/img01.png" alt="CBLOL">
            <br>
            <p>Testando Classificação</p>
    `
}