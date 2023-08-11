function comparar() {
    const n1 = Number(document.getElementById('txt-n1').value);
    const n2 = Number(document.getElementById('txt-n2').value);
    const comparacao = document.getElementById('comparacao').value;
    const txtResultado = document.getElementById('resultado')
    let resultado;

    if (comparacao == '>') {
        if (n1 > n2) {
            txtResultado.innerText = 'verdadeiro';
        } else {
            txtResultado.innerText = 'falso';
        }
    } else if (comparacao == '<') {
        if (n1 < n2) {
            txtResultado.innerText = 'verdadeiro';
        } else {
            txtResultado.innerText = 'falso';
        }
    } else if (comparacao == '>=') {
        if (n1 >= n2) {
            txtResultado.innerText = 'verdadeiro';
        } else {
            txtResultado.innerText = 'falso';
        }
    } else if (comparacao == '<=') {
        if (n1 <= n2) {
            txtResultado.innerText = 'verdadeiro';
        } else {
            txtResultado.innerText = 'falso';
        }
    } else if (comparacao == '!=') {
        if (n1 != n2) {
            txtResultado.innerText = 'verdadeiro';
        } else {
            txtResultado.innerText = 'falso';
        }
    } else if (comparacao == '==') {
        if (n1 == n2) {
            txtResultado.innerText = 'verdadeiro';
        } else {
            txtResultado.innerText = 'falso';
        }
    }

}