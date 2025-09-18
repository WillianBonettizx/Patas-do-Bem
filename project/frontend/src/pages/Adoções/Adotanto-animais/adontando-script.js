document.getElementById("button").addEventListener("click", function () {
    const inputs = document.querySelectorAll(".Dados-Adoção input");
    let preenchido = true;

    // Verifica se todos os campos estão preenchidos
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            preenchido = false;
        }
    });

    if (!preenchido) {
        alert("⚠️ Preencha todos os campos antes de enviar!");
        return; // não continua
    }

    // Mostra o overlay
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";

    // Depois de 5 segundos fecha e volta para a página inicial
    setTimeout(() => {
        overlay.style.display = "none";
        window.location.href = "/project/frontend/public/index.html"; // troque pelo nome da sua página inicial
    }, 5000);
});
