import { lerPlanilha } from '../../lib/excel';

export default function handler(req, res) {
  const nome = req.query.nome;
  const dados = lerPlanilha(nome);
  res.status(200).json(dados);
}
