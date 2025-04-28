import type { ExportarRelatorio } from "";
import { ExportadorRelatorio } from "../Interface/ExportadorRelatorio";

class ExportacaoRelatorioControladora implements ExportadorRelatorio {
  public exportarRelatorio(obj: ExportarRelatorio) {
    obj.exportar();
  }
}
