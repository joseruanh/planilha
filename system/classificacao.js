var primeiro = {nome: 'Pickles', pontos: 25, posicao: 1};
var segundo = {nome: 'Jean', pontos: 25, posicao: 1};
var terceiro = {nome: 'Relâmpago', pontos: 25, posicao: 2};
var quarto = {nome:'Ruanh', pontos: 23, posicao: 3};
var quinto = {nome: 'Brener', pontos: 22, posicao: 4};
var sexto = {nome: 'Victor', pontos: 21, posicao: 4};
var setimo = {nome: 'Kennyd', pontos: 20, posicao: 5};
var oitavo = {nome: 'Tony', pontos: 19, posicao: 5};


function cblol()
{
    let a = window.document.getElementById("res");
    a.innerHTML = `
    <br>
	<p><strong>Classificação CBLOL</strong></p>
	<br>
    <table class="classificacao">


            	<tr>
                    <td> <h1>1</h1> </td> <td> <img class="imgLogo1" src="../logos/fur.png"> </td> <td>7v - 1d</td>
                </tr>

                <tr>
                    <td> <h1>2</h1> </td> <td> <img class="imgLogo1" src="../logos/kbm.png"> </td> <td>6v - 2d</td>
                </tr>

                <tr>
                    <td> <h1>3</h1> </td> <td> <img class="imgLogo1" src="../logos/lib.png"> </td> <td>5v - 3d</td>
                </tr>

                <tr>
                    <td> <h1>4</h1> </td> <td> <img class="imgLogo1" src="../logos/red.png"> </td> <td>4v - 3d</td>
                </tr>

                <tr>
                    <td> <h1>4</h1> </td> <td> <img class="imgLogo1" src="../logos/lll.png"> </td> <td>4v - 3d</td>
                </tr>

            	<tr>
            		<td> <h1>6</h1> </td> <td> <img class="imgLogo1" src="../logos/net.png"> </td> <td>3v - 4d</td>
            	</tr>

                <tr>
            		<td> <h1>7</h1> </td> <td> <img class="imgLogo1" src="../logos/png.png"> </td> <td>2v - 5d</td>
            	</tr>

                <tr>
                    <td> <h1>7</h1> </td> <td> <img class="imgLogo1" src="../logos/itz.png"> </td> <td>2v - 5d</td>
                </tr>

                <tr>
                    <td> <h1>7</h1> </td> <td> <img class="imgLogo1" src="../logos/rng.png"> </td> <td>2v - 5d</td>
                </tr>

            	<tr>
            		<td> <h1>10</h1> </td> <td> <img class="imgLogo1" src="../logos/fla.png"> </td> <td>2v - 6d</td>
            	</tr>


            	</table>

                <br><br><br><br><br>
    `
}

function bolao()
{
    let a = window.document.getElementById("res");
    a.innerHTML = `
    <br>
	<p><strong>Classificação do Bolão</strong></p>
	<br>
    <table class="tabelaBOLAO">
			<tr>
				<td><h1>${primeiro.posicao}</h1></td> <td>${primeiro.nome}</td> <td>${primeiro.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>${segundo.posicao}</h1></td> <td>${segundo.nome}</td> <td>${segundo.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>${terceiro.posicao}</h1></td> <td>${terceiro.nome}</td> <td>${terceiro.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>${quarto.posicao}</h1></td> <td>${quarto.nome}</td> <td>${quarto.pontos} pontos</td>
			</tr>

            <tr>
				<td><h1>${quinto.posicao}</h1></td> <td>${quinto.nome}</td> <td>${quinto.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>${sexto.posicao}</h1></td> <td>${sexto.nome}</td> <td>${sexto.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>${setimo.posicao}</h1></td> <td>${setimo.nome}</td> <td>${setimo.pontos} pontos</td>
			</tr>

			<tr>
				<td><h1>${oitavo.posicao}</h1></td> <td>${oitavo.nome}</td> <td>${oitavo.pontos} pontos</td>
			</tr>

		</table>

		<br><br><br>
    `
}