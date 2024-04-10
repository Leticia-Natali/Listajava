function lancamento() {
    var contagem = 10;
    let sequencia = setInterval(
        function contagemLancamento(){
            console.log(contagem);
            contagem--;

            if(contagem == 6){
                console.log('Ignição...');
            }
            if(contagem < 1){
                clearInterval(sequencia);
                console.log('Fogo!');
            }
        }
        ,1000);
}