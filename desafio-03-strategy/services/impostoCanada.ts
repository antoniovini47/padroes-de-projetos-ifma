import ImpostoStrategy from "../classes/ImpostoStrategy";

class ImpostoCanada extends ImpostoStrategy {
  public calcularImposto(valor: number): number {
    return valor * 0.05;
  }
}

export default ImpostoCanada;
