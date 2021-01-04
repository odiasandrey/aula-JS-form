var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
    

var pacientes = document.querySelectorAll(".paciente"); //atribuiu a variável "paciente" e utilizou querySelector para acessar um elemento de dentro do documento (identificado pela id #primeiro-paciente)


for (i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso"); // já com o documento selecionado e a varia´vel paciente definida, pode-se buscar dentro da mesma
    var peso = tdPeso.textContent; // mostrou o conteudo de texto da tdPeso associada à variável peso
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if(peso <= 0 || peso >= 1000) {
        tdPeso.textContent = "Peso Inválido!";
        pesoEhValido = false;

        paciente.classList.add("paciente-invalido");
    }
    
    if(altura <= 0 || altura >= 3.00){
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;

        paciente.classList.add("paciente-invalido");
    }
    
    if(pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!";
    }

}


function calculaImc(peso,altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

}
