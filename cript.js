let valorContador= 0;

function incrementar(){
    valorContador++;
    Document.getElementByld('contador').innerText = valorContador;
}

function diminuir(){
    valorContador--;
    document.getElementById('contador').innerText = valorContador;
}