import * as XLSX from 'xlsx';
import fs from 'fs';

export function lerPlanilha(transportadora) {
  const file = XLSX.readFile('./public/planilha.xlsx');
  const sheet = file.Sheets[file.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  const headers = data[0];
  const linhas = data.slice(1);

  const indices = {
    nome: 8, // coluna I
    visualizar: [0, 2, 3, 5, 6, 7, 9, 10, 11, 12, 13],
    editar: [21, 22, 23, 24, 25, 26, 27, 29],
  };

  const filtradas = linhas.filter((linha) => linha[indices.nome]?.toUpperCase() === transportadora.toUpperCase());

  return filtradas.map((linha, idx) => ({
    id: idx,
    visualizar: indices.visualizar.map(i => linha[i] || ""),
    editar: indices.editar.map(i => linha[i] || "")
  }));
}
