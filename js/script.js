function criptografar() {
    let texto = document.getElementById('texto').value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let menina = document.getElementById("menina");

    let texto_cifrado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
  
    if (texto.length != 0) {
        document.getElementById("texto").value = texto_cifrado;
        tituloMensagem.textContent = "Criptografado com sucesso!";
        paragrafo.textContent = texto_cifrado;
        menina.src = "./images/cadeadofechado.svg";
    } else {
        menina.src = "./images/menina.svg";
        tituloMensagem.textContent = "Informação não encontrada!";
        paragrafo.textContent = "Escreva a informação que deseja criptografar ou descriptografar:";
        swal("Pare!", "Deve escrever a informação!", "warning");
    }
}

function descriptografar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let menina = document.getElementById("menina");

    let texto_decifrado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
  
    if (texto.length != 0) {
        document.getElementById("texto").value = texto_decifrado;
        tituloMensagem.textContent = "Descriptografado com sucesso!";
        paragrafo.textContent = texto_decifrado;
        menina.src = "./images/cadeadoaberto.svg";
    } else {
        menina.src = "./images/menina.svg";
        tituloMensagem.textContent = "Informação não encontrada!";
        paragrafo.textContent = "Escreva a informação que deseja criptografar ou descriptografar:";
        swal("Pare!", "Deve escrever a informação!", "warning");
    }
}

