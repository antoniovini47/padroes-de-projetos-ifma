import ImpostoBrasil from "./services/impostoBrasil";
import ImpostoEUA from "./services/impostoEUA";
import ImpostoCanada from "./services/impostoCanada";
import PedidoVenda from "./controllers/pedidoVenda";

class Main extends PedidoVenda {
  static main(): void {
    console.log("########################");
    console.log("Venda nos EUA");
    const vendaEUA = new PedidoVenda(new ImpostoEUA());
    vendaEUA.efetuarVenda(1000);
    console.log("########################");
    console.log("Venda no Brasil");
    const vendaBrasil = new PedidoVenda(new ImpostoBrasil());
    vendaBrasil.efetuarVenda(1000);
    console.log("########################");
    console.log("Venda no Canadá");
    const vendaCanada = new PedidoVenda(new ImpostoCanada());
    vendaCanada.efetuarVenda(1000);
    console.log("########################");
  }
}

Main.main();
