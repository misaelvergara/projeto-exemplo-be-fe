// tamanho do salgadinho 
//  recheio do salgadinho
// tipo do salgadinho (frito ou assado)



// pode ser tipo frito ou assado
// recheio pode ser frango, queijo, presunto e queijo, calabresa
// tamanho pode ser pequeno ou médio

type tipoDoSalgadinho = 'frito' | 'assado'
type recheioDoSalgadinho = 'frango' | 'queijo' | 'presunto e queijo' | 'calabresa' | 'tomate e queijo'
type tamanhoDoSalgadinho = 'pequeno' | 'médio'


interface ReceitaDeSalgadinho {
    tamanho: tamanhoDoSalgadinho;
    recheio: recheioDoSalgadinho;
    tipo: tipoDoSalgadinho;
}

const salgadinho: ReceitaDeSalgadinho = {
    tamanho: 'médio',
    recheio: 'tomate e queijo',
    tipo: 'frito'
}

console.log(salgadinho)