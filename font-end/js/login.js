let emailInput = document.getElementById("email");
let emailLabel = document.querySelector("label[for='email']");
let emailAviso = document.getElementById("email-aviso");

emailInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputsCorretos.email = false
    }else if(valor.includes("@") && valor.includes(".com")){
        inputsCorretos.email = true
    }else{
        inputsCorretos.email = false
    }
})

let senhaInput = document.getElementById("password");
let senhaLabel = document.querySelector("label[for='password']");
let senhaAviso = document.getElementById("senha-aviso");

senhaInput.addEventListener("blur", function(e){
    let valor = e.target.value
    if(valor == ""){
        inputsCorretos.password = false
    }else{
        inputsCorretos.password = true
    }
})

let btnCadastro = document.querySelector("button[type='submit']")
let inputsCorretos = {
    email: false,
    password: false
}

btnCadastro.addEventListener("click", (e)=>{
    if(inputsCorretos.email == false ||
        inputsCorretos.password == false){
        e.preventDefault()
    }else{
        alert("Cadastro feito com sucesso!")
    }
})