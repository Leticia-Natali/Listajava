function picoleteria() {
    let picoles = [['Brownie',4.00],['Céu Azul',3.60],['Creme',2.50]];
    let i = 0;
    let opcao = "";

    for(i=0; i < picoles.length; i++){
        console.log(picoles [i][0]);
    }

    opcao = prompt("Informe o sabor de sua escolha:")

    for(i=0; i < picoles.length; i++){
        if(opcao === picoles [i][0]){
            console.log('O picolé de sabor ' + picoles [i][0] + 'custa R$: ' + picoles[i][1]);
        }
    }
}