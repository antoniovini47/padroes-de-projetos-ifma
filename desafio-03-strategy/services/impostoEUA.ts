import ImpostoStrategy from "../classes/ImpostoStrategy";

class ImpostoEUA extends ImpostoStrategy {
  public calcularImposto(valor: number): number {
    return valor * 0.05;
  }
}

export default ImpostoEUA;
