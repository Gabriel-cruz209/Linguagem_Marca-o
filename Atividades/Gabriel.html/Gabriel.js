function sec(Secao){
    document.getElementById('SobreMim').classList.add('hidden');
    document.getElementById('Hobbies').classList.add('hidden');

    document.getElementById(Secao).classList.remove('hidden');
}

function ProxPagina(){
    setTimeout(() => window.location.href = "Gabriel2.html", 1000);
}

 document.getElementById("data").textContent = new Date().toLocaleDateString("pt-BR");