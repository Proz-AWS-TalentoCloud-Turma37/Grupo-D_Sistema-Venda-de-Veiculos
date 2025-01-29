function inputValido(input, aviso){
    input.classList.remove("error");
    input.classList.add("correct");
    aviso.classList.remove("visible");
}

function inputInvalido(input, aviso){
    input.classList.remove("correct");
    input.classList.add("error");
    aviso.classList.add("visible");
}

let marcaInput = document.getElementById("marca");
let marcaLabel = document.querySelector("label[for='marca']");
let marcaAviso = document.getElementById("marca-aviso");

marcaInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(marcaInput, marcaAviso);
        marcaAviso.innerText = "O campo não pode ficar vazio";
        inputsCorretos.marca = false
    }else{
        inputValido(marcaInput, marcaAviso);
        inputsCorretos.marca = true
    }
})

let modeloInput = document.getElementById("modelo");
let modeloLabel = document.querySelector("label[for='modelo']");
let modeloAviso = document.getElementById("modelo-aviso");

modeloInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(modeloInput, modeloAviso);
        modeloAviso.innerText = "O campo não pode ficar vazio";
        inputsCorretos.modelo = false
    }else{
        inputValido(modeloInput, modeloAviso);
        inputsCorretos.modelo = true
    }
})

let anoInput = document.getElementById("ano");
let anoLabel = document.querySelector("label[for='ano']");
let anoAviso = document.getElementById("ano-aviso");

anoInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(anoInput, anoAviso);
        anoAviso.innerText = "O campo não pode ficar vazio";
        inputsCorretos.ano = false
    }else{
        inputValido(anoInput, anoAviso);
        inputsCorretos.ano = true
    }
})

let placaInput = document.getElementById("placa");
let placaLabel = document.querySelector("label[for='placa']");
let placaAviso = document.getElementById("placa-aviso");

placaInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(placaInput, placaAviso);
        placaAviso.innerText = "O campo não pode ficar vazio";
        inputsCorretos.placa = false
    }else{
        inputValido(placaInput, placaAviso);
        inputsCorretos.placa = true
    }
})

let corInput = document.getElementById("cor");
let corLabel = document.querySelector("label[for='cor']");
let corAviso = document.getElementById("cor-aviso");

corInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(corInput, corAviso);
        corAviso.innerText = "O campo não pode ficar vazio";
        inputsCorretos.cor = false
    }else{
        inputValido(corInput, corAviso);
        inputsCorretos.cor = true
    }
})

let precoInput = document.getElementById("preco");
let precoLabel = document.querySelector("label[for='preco']");
let precoAviso = document.getElementById("preco-aviso");

precoInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(precoInput, precoAviso);
        precoAviso.innerText = "O campo não pode ficar vazio";
        inputsCorretos.preco = false
    }else{
        inputValido(precoInput, precoAviso);
        inputsCorretos.preco = true
    }
})

let manutencaoInput = document.getElementById("manutencao");
let manutencaoLabel = document.querySelector("label[for='manutencao']");
let manutencaoAviso = document.getElementById("manutencao-aviso");

manutencaoInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(manutencaoInput, manutencaoAviso);
        manutencaoAviso.innerText = "O campo não pode ficar vazio";
        inputsCorretos.manutencao = false
    }else{
        inputValido(manutencaoInput, manutencaoAviso);
        inputsCorretos.manutencao = true
    }
})

let multaInput = document.getElementById("multa");
let multaLabel = document.querySelector("label[for='multa']");
let multaAviso = document.getElementById("multa-aviso");

multaInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(multaInput, multaAviso);
        multaAviso.innerText = "O campo não pode ficar vazio";
        inputsCorretos.multa = false
    }else{
        inputValido(multaInput, multaAviso);
        inputsCorretos.multa = true
    }
})

let btnCadastro = document.querySelector("button[type='submit']")
let inputsCorretos = {
    marca: false,
    modelo: false,
    ano: false,
    placa: false,
    cor: false,
    preco: false,
    manutencao: false,
    multa: false
}

btnCadastro.addEventListener("click", (e)=>{
    if(inputsCorretos.marca == false ||
        inputsCorretos.modelo == false ||
        inputsCorretos.ano == false ||
        inputsCorretos.placa == false ||
        inputsCorretos.cor == false ||
        inputsCorretos.preco == false ||
        inputsCorretos.manutencao == false ||
        inputsCorretos.multa == false){
        e.preventDefault()
    }else{
        alert("Cadastro feito com sucesso!")
    }
})