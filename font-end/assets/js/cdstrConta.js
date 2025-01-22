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

let nomeInput = document.getElementById("name");
let nomeLabel = document.querySelector("label[for='name']");
let nomeAviso = document.getElementById("name-aviso");

nomeInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(nomeInput, nomeAviso);
        inputsCorretos.name = false
        nomeAviso.innerText = "O campo não pode ficar vazio";
    }else if(valor.length >= 15){
        inputValido(nomeInput, nomeAviso);
        inputsCorretos.name = true
    }else{
        inputInvalido(nomeInput, nomeAviso);
        nomeAviso.innerText = "Coloque seu nome completo";
        inputsCorretos.name = false
    }
})

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector("label[for='email']");
let emailAviso = document.getElementById("email-aviso");

emailInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(emailInput, emailAviso);
        inputsCorretos.email = false
        emailAviso.innerText = "O campo não pode ficar vazio";
    }else if(valor.includes("@") && valor.includes(".com")){
        inputValido(emailInput, emailAviso);
        inputsCorretos.email = true
    }else{
        inputInvalido(emailInput, emailAviso);
        emailAviso.innerText = "É preciso de um e-mail válido";
        inputsCorretos.email = false
    }
})

let foneInput = document.getElementById("phone");
let foneLabel = document.querySelector("label[for='phone']");
let foneAviso = document.getElementById("phone-aviso");

foneInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(foneInput, foneAviso);
        inputsCorretos.phone = false
        foneAviso.innerText = "O campo não pode ficar vazio";
    }else{
        inputValido(foneInput, foneAviso);
        inputsCorretos.phone = true
    }
})

let senhaInput = document.getElementById("password");
let senhaLabel = document.querySelector("label[for='password']");
let senhaAviso = document.getElementById("senha-aviso");

senhaInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(senhaInput, senhaAviso);
        inputsCorretos.password = false
        senhaAviso.innerText = "O campo não pode ficar vazio";
    }else if(valor.length >= 8){
        inputValido(senhaInput, senhaAviso);
        inputsCorretos.password = true
    }else{
        inputInvalido(senhaInput, senhaAviso);
        senhaAviso.innerText = "É preciso pelo menos 8 caracteres";
        inputsCorretos.password = false
    }
})

let confirmarSenhaInput = document.getElementById("confirm-password");
let confirmarSenhaLabel = document.querySelector("label[for='confirm-password']");
let confirmarSenhaAviso = document.getElementById("confirmar-senha-aviso");

confirmarSenhaInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputInvalido(confirmarSenhaInput, confirmarSenhaAviso);
        inputsCorretos.confirmPassword = false;
        confirmarSenhaAviso.innerText = "O campo não pode ficar vazio";
    }else if(valor == senhaInput.value){
        inputValido(confirmarSenhaInput, confirmarSenhaAviso);
        inputsCorretos.confirmPassword = true;
    }else{
        inputInvalido(confirmarSenhaInput, confirmarSenhaAviso);
        inputsCorretos.confirmPassword = false;
        confirmarSenhaAviso.innerText = "A senha precisa ser a mesma";
    }
})

let btnCadastro = document.querySelector("button[type='submit']")
let inputsCorretos = {
    name: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false
}

btnCadastro.addEventListener("click", (e)=>{
    if(inputsCorretos.name == false ||
        inputsCorretos.email == false ||
        inputsCorretos.phone == false ||
        inputsCorretos.password == false ||
        inputsCorretos.confirmPassword == false){
        e.preventDefault()
    }else{
        alert("Cadastro feito com sucesso!")
    }
})