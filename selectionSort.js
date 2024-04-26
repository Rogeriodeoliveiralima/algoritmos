const livros = require('./listaLivros');
const menorValor = require('./menorValor');
const maiorValor = require('./maiorValor');

// for (let atual = 0; atual < livros.length; atual++){
//     let menor = menorValor(livros, atual)

//     let livroAtual = livros[atual];
//     let livrosMenorPreco = livros[menor];

//     livros[atual] = livrosMenorPreco;
//     console.log ('posiçao atual', atual);
//     console.log('livro atual', livros[atual]);
//     livros[menor] = livroAtual;
//     console.log('livro menor preço', livros[menor]);

// }
//  console.log(livros);


for(let atual = 0; atual < livros.length; atual ++){
    let maior = maiorValor (livros, atual)


    let livroAtual = livros[atual];
    console.log ('posiçao atual', atual);
    console.log('livro atual', livros[atual]);
    livrosMaiorPreco = livros[maior];
    console.log('livro maior preço', livros[maior]);

    livros[atual] = livrosMaiorPreco;
    livros[maior] = livroAtual;
}
console.log(livros);


//deletar
 for (let atual = 0; atual < livros.length; atual++){
     let menor = menorValor(livros, atual)

    let livroAtual = livros[atual];    let livrosMenorPreco = livros[menor];

     livros[atual] = livrosMenorPreco;
     console.log ('posiçao atual', atual);
     console.log('livro atual', livros[atual]);
     livros[menor] = livroAtual;
     console.log('livro menor preço', livros[menor]);

 }
 console.log(livros);