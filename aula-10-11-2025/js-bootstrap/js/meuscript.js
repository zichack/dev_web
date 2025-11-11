/*function getDados(){
    let dados = document.querySelector('#email');
    document.getElementById('mail').innerHTML = dados.value;
}*/
function getDados2(){
    let dados = document.querySelectorAll('input'); // busca todas as inputs
    let divDados = document.getElementById('dados');
    for(let i=0; i< dados.lenth; i++){
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = dados[i].value;
        divDados.appendChild(paragrafo);
        }
}