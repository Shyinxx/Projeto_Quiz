function calcularResultado() {
    const perguntas = document.querySelectorAll(".questao");

    let violet = 0;
    let jinx = 0;
    let caitlyn = 0;
    let vander = 0;

    for (let i = 0; i < perguntas.length; i++) {
        const perguntaAtual = perguntas[i];
        const ValorDaPgt = perguntaAtual.querySelector('input[type="radio"]:checked');

        if (!ValorDaPgt) {
            alert(`Você precisa responder todas as perguntas! Pergunta ${i + 1} não foi respondida.`);
            return;
        }

        if (ValorDaPgt.value === "violet") {
            violet++;
        }
        if (ValorDaPgt.value === "jinx") {
            jinx++;
        }
        if (ValorDaPgt.value === "caitlyn") {
            caitlyn++;
        }
        if (ValorDaPgt.value === "vander") {
            vander++;
        }
    }

    let pagina = "";
    let maior = 0;
    if (violet > maior) {
        maior = violet;
        pagina = "violet.html";
    }
    if (jinx > maior) {
        maior = jinx;
        pagina = "jinx.html";
    }
    if (caitlyn > maior) {
        maior = caitlyn;
        pagina = "caitlyn.html";
    }
    if (vander > maior) {
        maior = vander;
        pagina = "vander.html";
    }

    localStorage.setItem("violet", violet);
    localStorage.setItem("jinx", jinx);
    localStorage.setItem("caitlyn", caitlyn);
    localStorage.setItem("vander", vander);

    setTimeout(() => {
        window.location.href = pagina;
    }, 5000);
}