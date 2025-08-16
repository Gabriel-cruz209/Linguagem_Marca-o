function matriculas(){
    window.location.href = "PagMatriculas.html"
}

function inicio(){
    window.location.href = "PagInicial.html"
}

function sec(secao){
    document.getElementById('comunicados').classList.add('hidden');
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('eventos').classList.add('hidden');
    document.getElementById('cronograma').classList.add('hidden');

    document.getElementById(secao).classList.remove('hidden');
}

function seca(secaoo){
    document.getElementById('perse').classList.add('hidden');
    document.getElementById('acolito').classList.add('hidden');
    document.getElementById('crisma').classList.add('hidden');
    document.getElementById('jc').classList.add('hidden');
    document.getElementById('casais').classList.add('hidden');
    document.getElementById('ministro').classList.add('hidden');
    document.getElementById('pastorais').classList.add('hidden');

    document.getElementById(secaoo).classList.remove('hidden');
}