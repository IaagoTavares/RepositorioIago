this.id = 1;
this.arrayAlunos = [];

function inserir() {
    let aluno = this.lerDados();

    if(this.validaCampo(aluno) == true) {
        this.adicionar(aluno)
    }
    
    console.log(this.arrayAlunos);
    this.listaTabela()
}   

function adicionar (aluno) {
    this.arrayAlunos.push(aluno);
    this.id++;
}

function lerDados() {
    let aluno =[];

    let nome_aluno = document.getElementById("n1").value;
    let nota_prova = document.getElementById("n2").value;
    let nota_trabalho = document.getElementById("n3").value;
    let media_aluno = ((nota_prova*2+nota_trabalho*3)/5);

    aluno.id = this.id;
    aluno.nomeAluno = nome_aluno;
    aluno.notaProva = nota_prova;
    aluno.notaTrabalho = nota_trabalho;
    aluno.mediaAluno = media_aluno;
    
    return aluno 
}

function validaCampo(aluno) {
    let msg = '';

    if (aluno.nomeAluno == '') {
        msg += 'Informe o nome do aluno'
    }
    if (aluno.notaProva == '') {
        msg += 'Informe a nota da prova do aluno'
    }
    if (aluno.notaTrabalho == '') {
        msg += 'Informe a nota do teste do aluno'
    }
    if(msg != '') {
        alert(msg)
        return false
    }
    return true; 

}

function listaTabela() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = '';

    for(let i = 0; i < this.arrayAlunos.length; i++){
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_aluno = tr.insertCell();
        let td_prova = tr.insertCell();
        let td_trabalho = tr.insertCell();
        let td_media = tr.insertCell();
    
        td_id.innerText = this.arrayAlunos[i].id;
        td_aluno.innerText = this.arrayAlunos[i].nomeAluno;
        td_prova.innerText = this.arrayAlunos[i].notaProva;
        td_trabalho.innerText = this.arrayAlunos[i].notaTrabalho;
        td_media.innerText = this.arrayAlunos[i].mediaAluno;
        
    }
}

function media(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
        summ = summ + myArray[i++];
}
    return summ / ArrayLen;
}



function calculo() {    
    let medias_aluno = arrayAlunos.map(media => media.mediaAluno); //metodo que cria uma array da chave selecionada
    let media_total = media(medias_aluno.map(Number)) // transformando uma array de strings em numeros
    document.getElementById('media_geral').innerHTML = "Média total: " + media_total;

    let notas_prova = arrayAlunos.map(prova => prova.notaProva); //metodo que cria uma array da chave selecionada
    let media_prova = media(notas_prova.map(Number)) // transformando uma array de strings em numeros
    let max_prova = Math.max(...notas_prova.map(Number));
    let min_prova = Math.min(...notas_prova.map(Number));
    document.getElementById('media_prova').innerHTML = "Média Provas: " + media_prova
    document.getElementById('maior_prova').innerHTML = "Maior nota prova: " + max_prova
    document.getElementById('menor_prova').innerHTML = "Menor nota prova: " + min_prova

    let notas_trabalho = arrayAlunos.map(trabalho => trabalho.notaTrabalho);
    let media_trabalho = media(notas_trabalho.map(Number));
    let max_trabalho = Math.max(...notas_trabalho.map(Number));
    let min_trabalho = Math.min(...notas_trabalho.map(Number));
    document.getElementById('media_trabalho').innerHTML = "Média Trabalhos: " + media_trabalho
    document.getElementById('maior_trabalho').innerHTML = "Maior nota trabalho: " + max_trabalho
    document.getElementById('menor_trabalho').innerHTML = "Menor nota trabalho: " + min_trabalho

}


