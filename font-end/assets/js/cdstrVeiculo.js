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
        inputsCorretos.marca = false
        marcaAviso.innerText = "O campo não pode ficar vazio";
    }else{
        inputValido(marcaInput, marcaAviso);
        inputsCorretos.marca = true
    }
})

let modeloInput = document.getElementById("modelo");
let modeloLabel = document.querySelector("label[for='modelo']");
let modeloAviso = document.getElementById("modelo-aviso");

baleleaInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(modeloInput, modeloAviso);
        inputsCorretos.modelo = false
        modeloAviso.innerText = "O campo não pode ficar vazio";
    }else{
        inputValido(modeloInput, modeloAviso);
        inputsCorretos.modelo = true
    }
})

let anoInput = document.getElementById("ano");
let anoLabel = document.querySelector("label[for='ano']");
let anoAviso = document.getElementById("ano-aviso");

baleleaInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(anoInput, anoAviso);
        inputsCorretos.ano = false
        anoAviso.innerText = "O campo não pode ficar vazio";
    }else{
        inputValido(anoInput, anoAviso);
        inputsCorretos.ano = true
    }
})

let placaInput = document.getElementById("placa");
let placaLabel = document.querySelector("label[for='placa']");
let placaAviso = document.getElementById("placa-aviso");

baleleaInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(placaInput, placaAviso);
        inputsCorretos.placa = false
        placaAviso.innerText = "O campo não pode ficar vazio";
    }else{
        inputValido(placaInput, placaAviso);
        inputsCorretos.placa = true
    }
})

let corInput = document.getElementById("cor");
let corLabel = document.querySelector("label[for='cor']");
let corAviso = document.getElementById("cor-aviso");

baleleaInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(corInput, corAviso);
        inputsCorretos.cor = false
        corAviso.innerText = "O campo não pode ficar vazio";
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
        inputsCorretos.preco = false
        precoAviso.innerText = "O campo não pode ficar vazio";
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
        inputsCorretos.manutencao = false
        manutencaoAviso.innerText = "O campo não pode ficar vazio";
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
        inputsCorretos.multa = false
        multaAviso.innerText = "O campo não pode ficar vazio";
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