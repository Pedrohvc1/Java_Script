//usar esse comando no index para relaciornar essa class com o index
//<script type="text/javascript" src="js/main.js"></script>
//var nome = "Pedro Cavalcanti";
//var idade = 26;
//var idade2 = 10;
//var frase = "Japão é o melhor time de futebol do mundo"
//alert("Bem vindo "+ nome + " tem " + idade +" anos");
//alert(idade + idade2);

//console.log(nome); console.log - imprime no navegador
//console.log(idade);
//console.log(frase.replace("Japão", "Brasil")); - substitui o que informar
// deixa tudo minúsculo - console.log(frase.toLowerCase());
// deixa tudo maiúsculo - console.log(frase.toUpperCase());


//-----------------------assunto LISTAS-------------------------------------

//var lista = ["maça","pêra", "laranja"];
//se quiser imprimir um item especifico da lista - console.log(lista[0]);
//lista.push("uva"); - add um item na lista
//lista.pop(); - remove o ultimo item da lista
//console.log(lista.length); - imprime o tamanho da lista
//console.log(lista.reverse()); - imprime a lista com ordem inversa

//console.log(lista); //imprime a lista acima
//console.log(lista.toString()); //imprime a lista em string
//console.log(lista.join(" - ")); //imprime a lista e add oq vc colocar



//---------------------assunto Dicionários----------------------------------

/*var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

/*var fruta = [{nome: "maça", cor:"vermelha"},{nome: "uva", cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);*/

//----------------assunto condicionais, laços de repeticao e date-----------

/*var idade = prompt("Qual sua idade?"); //exibi uma pergunta no provedor
if (idade >= 18) {
    alert("maior de idade");
}
else {
    alert("menor de idade");
}
*/

/*var cont = 0;
while (cont <= 5) {
    console.log(cont);
    alert(cont);
    cont++;
}
*/

/*var i=0;
for (i=0; i<=5; i++) {
    alert(i);
}
*/

// trazer a data no provedor
/*var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

//=====================================FUNÇÕES=======================================================================================
/*
var validar = 0; variavel global

function validaIdade (idade) {
    if (idade >= 18) {
        validar = true;        
    }
    else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual é sua idade?")
validaIdade(idade);
console.log(validar);
*/

function clicou() {                        //innerHTML- serve para inserir na funcao elementos alguma coisa em HTML ex <b> - negrito
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>" 
    //document.getElementById - ele busca no index o nome expecificado " "
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar() {
    window.open("https://github.com/Pedrohvc1/Java_Script") // abre o link em uma nova aba
 // window.location.href = "https://github.com/Pedrohvc1/Java_Script" //abre o link na mesma página
}


/* Dessa primeira forma apenas uma frase poderá ser utilizada para aplicar o onmausemove e onmouseout
function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!" //após criado um id onmousemove e um id onmouseout a funcao esta chamando e aplicando um innerHTML com um texto
}
function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui" // quando retira o mouse volta para o antigo texto
}
*/

/*Já dessa outra forma com o uso do this no HTML, será possível a utilização em várias frases, vale salientar que pode remover 
o id="mousemove" nesse contexto */
function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse!"
}
function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui" 
}

//é atribuída diretamento no body, e é aplicada assim que abrirmos a página.
function load() {
    alert("Página carregada!!!!")
}

//quando vc tem um combo de opções com o SELECT, a funcaoChange vai guardar as informações contidas, nesse caso o value(valores)
function funcaoChange(elemento) {
    console.log(elemento.value)
}

onmouseover