const config = require("./getConfig");

console.log(`Log de dentro do arquivo de teste: ${config.getConfig("DB")}`);
console.log(`Log de dentro do arquivo de teste: ${config.getConfig("USER")}`);
console.log(`Log de dentro do arquivo de teste: ${config.getConfig("PASSWORD")}`);

module.exports = config;
