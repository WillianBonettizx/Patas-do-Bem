document.getElementById("botao-login").addEventListener("click", function () {
    const usuario = document.getElementById("usuario-login").value;
    const senha = document.getElementById("senha-login").value;
    const mensagemErro = document.getElementById("mensagem-erro");

    if ((usuario === "willian bonetti" && senha === "willian1234") || 
        (usuario === "arthur pasquali" && senha === "arthur1234") ||
        (usuario === "miguel withoeft" && senha === "miguel1234")) {
        
        mensagemErro.style.color = "green";
        mensagemErro.textContent = "Login realizado com sucesso!";
        window.location.href = "/project/frontend/public/index.html"; 
    } else {
        mensagemErro.style.color = "red";
        mensagemErro.textContent = "Usuário ou senha incorretos!";
    }
});

document.getElementById("botao-cadastro").addEventListener("click", function () {
    alert("Página de cadastro em construção!");
});