interface ExportadorRelatorio {
  exportar(conteudo: string): void;
}

class ExportarPDF implements ExportadorRelatorio {
  public exportar(dados: string) {
    console.log("Exportando relatorio em formato PDF");
  }
}

class ExportacaoRelatorioControladora {
  public exportarRelatorio(obj: ExportarPDF) {
    obj.exportar();
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
