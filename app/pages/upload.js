import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    const file = files.file[0];
    fs.renameSync(file.filepath, './public/planilha.xlsx');
    res.status(200).json({ ok: true });
  });
}
