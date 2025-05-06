import formidable from 'formidable';
import { readFile } from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm({ multiples: false });

  // Usa uma Promise para tratar o form de forma assíncrona
  const data = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

  const file = data.files.file[0];

  // Lê o arquivo em memória (sem salvar em disco)
  const fileBuffer = await readFile(file.filepath);

  // Aqui você pode:
  // - Enviar esse buffer para um storage externo (S3, Cloudinary, etc.)
  // - Parsear direto com uma lib como xlsx se for uma planilha
