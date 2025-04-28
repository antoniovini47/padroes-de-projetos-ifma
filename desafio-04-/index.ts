function isCloned(numeroCartao: string) {
  return numeroCartao === numeroCartao.split("").reverse().join("");
}

function verificaDigito(numeroCartao: string): string {
  return "Digito Válido";
}

function orderedVerifications(numeroCartao: string): string {
  if (isCloned(numeroCartao)) {
    return "Cartão Clonado";
  }

  if (verificaDigito(numeroCartao)) {
    return "Digito Inválido";
  }

  return "Cartão Válido";
}

function verificaCartao(numeroCartao: string): string {
  return orderedVerifications(numeroCartao);
}

console.log(verificaCartao("1234567890123456"));
