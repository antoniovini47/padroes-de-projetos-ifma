class ChaveSingleton {
  private static instance: ChaveSingleton;

  private constructor() {
    console.log("Chave criada");
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new ChaveSingleton();
    }
    return this.instance;
  }
}

class Porta {
  abrir(chave: ChaveSingleton) {
    console.log("Porta aberta com a chave.");
  }
}

const porta1 = new Porta();
const porta2 = new Porta();
const porta3 = new Porta();

const chaveUnica = ChaveSingleton.getInstance();

porta1.abrir(chaveUnica);
porta2.abrir(chaveUnica);
porta3.abrir(chaveUnica);
