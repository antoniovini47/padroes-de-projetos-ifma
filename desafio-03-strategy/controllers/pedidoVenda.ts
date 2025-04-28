import ImpostoStrategy from "../classes/ImpostoStrategy";

class PedidoVenda {
  private impostoStrategy: ImpostoStrategy;

  constructor(estrategia: ImpostoStrategy) {
    this.impostoStrategy = estrategia;
  }

  public efetuarVenda(valor: number): void {
    const imposto = this.impostoStrategy.calcularImposto(valor);
    console.log(`Valor da venda: ${valor}`);
    console.log(`Imposto calculado: ${imposto}`);
    console.log(`Valor total: ${valor + imposto}`);
  }
}

export default PedidoVenda;
