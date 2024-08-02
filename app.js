function criptografar() {
    const texto = document.getElementById('texto').value.toLowerCase();
    const resultado = texto.replaceAll('e', 'enter')
                          .replaceAll('i', 'imes')
                          .replaceAll('a', 'ai')
                          .replaceAll('o', 'ober')
                          .replaceAll('u', 'ufat');
    document.getElementById('resultado').value 
 = resultado;
}

function descriptografar() {
    const texto = document.getElementById('texto').value.toLowerCase(); 

    const resultado = texto.replaceAll('enter', 'e')
                          .replaceAll('imes', 'i')
                          .replaceAll('ai', 'a')
                          .replaceAll('ober', 'o')
                          .replaceAll('ufat', 'u');
    document.getElementById('resultado').value 
 = resultado;
}

function copiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.select(); 

    resultado.setSelectionRange(0, 99999); /*Para dispositivos móveis*/ 

    navigator.clipboard.writeText(resultado.value);
}