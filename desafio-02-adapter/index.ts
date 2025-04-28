interface ExportadorRelatorio {
  exportar(conteudo: string): void;
}

class ExportarPDF implements ExportadorRelatorio {
  public exportar(dados?: string) {
    console.log("Exportando relatorio em formato PDF");
  }
}

class ExportacaoRelatorioControladora {
  public exportarRelatorio(obj: ExportarPDF) {
    obj.exportar();
  }
}

// Solução com adapter

class ExportarWordAdapter implements ExportadorRelatorio {
  word: ExportarWord;

  exportar(conteudo: string): void {
    this.word.criarDoc(conteudo);
  }
}

// Bibliotecas de terceiros

class ExportarWord {
  public criarDoc(texto: string) {
    console.log("Criando documento em formato Word");
  }
}

class ExportarExcel {
  public criarExcel(planilha: string) {
    console.log("Criando documento em formato Excel");
  }
}

//testando

const objTeste = new ExportarWordAdapter();

objTeste.exportar("conteudo");
