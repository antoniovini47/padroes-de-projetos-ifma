import ImpostoStrategy from "../classes/ImpostoStrategy";

class ImpostoBrasil extends ImpostoStrategy {
  public calcularImposto(valor: number): number {
    return valor * 0.5;
  }
}

export default ImpostoBrasil;
