const config = require("./getConfig");

console.log(`Log do index: ${config.getConfig("DB")}`);
console.log(`Log do index: ${config.getConfig("USER")}`);
console.log(`Log do index: ${config.getConfig("PASSWORD")}`);

const configDoArquivoTeste = require("./testandoOutraInstanciada");
