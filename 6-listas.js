console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `Säo Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `Säo Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`); //Adicionando um item na lista
console.log("Destinos possiveis:");
//console.log(salvador,saoPaulo,rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1)
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);