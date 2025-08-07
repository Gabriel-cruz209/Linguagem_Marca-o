function sec(Secao){
    document.getElementById('Tabela').classList.add('hidden');
    document.getElementById('Links').classList.add('hidden');
    document.getElementById('Contato').classList.add('hidden');

    document.getElementById(Secao).classList.remove('hidden');
}

function ProxPaginaZ(){
    setTimeout(() => {
        window.location.href = "Gabriel.html"
    }, 1000);
}

 document.getElementById("data").textContent = new Date().toLocaleDateString("pt-BR");