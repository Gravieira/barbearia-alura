
var pratoDoDia = document.querySelector("#sexta");
var salada = pratoDoDia.querySelector(".salada").textContent;
var principal = pratoDoDia.querySelector(".principal").textContent;
var acompanhamento = pratoDoDia.querySelector(".acompanhamento").textContent;

console.log("Prato do dia!");
console.log(salada);
console.log(principal);
console.log(acompanhamento);

//// **imprimir no console
//console.log(document.querySelector("h1"));
//**mostra conteudo  da tag
//console.log(titulo.textContent);
//var titulo = document.querySelector(".titulo");
//titulo.textContent = "Aparecida Nutricionista"*/

//var titulo = document.querySelector(".titulo");
//titulo.textContent = "Aparecida Nutricionista"
//console.log("olha eu ai")
//var paciente = document.querySelector("#primeiro-paciente");
//var tdPeso = paciente.querySelector(".info-peso");

//var peso = tdPeso.textContent;
//var tdAltura = paciente.querySelector(".info-altura");
//var altura = tdAltura.textContent;
//var imc = peso / (altura * altura);

//console.log(paciente); //tr
//console.log(tdPeso); //td que tem o peso
//console.log(peso); //
//console.log(tdAltura); //td que tem o peso
//console.log(altura); 
//console.log(imc)

var peso = 78;
var altura = 1.71;
var imc = peso / (altura * altura);
alert(imc);


var vendas = 10;
var clientesAbordados = 25;
var mediaTentativasPorCliente = 4;

var taxa = 0;

taxa = vendas / (clientesAbordados *  mediaTentativasPorCliente);
console.log(taxa);


