import fs from 'fs';
import path from 'path';

const accessCountFilePath = path.resolve('./pages/api/acessos.txt');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const accessCount = incrementAccessCount();
    res.status(200).json({ accessCount });
  } else if (req.method === 'POST') {
    const accessCount = incrementAccessCount();
    res.status(200).json({ accessCount });
  } else {
    res.status(405).end();
  }
}

function getAccessCount() {
  try {
    const accessCount = fs.readFileSync(accessCountFilePath, 'utf8');
    return parseInt(accessCount);
  } catch (error) {
    console.error('Erro ao ler o número de acessos:', error);
    return 0;
  }
}

function incrementAccessCount() {
  let accessCount = getAccessCount();
  accessCount++;
  saveAccessCount(accessCount);
  return accessCount;
}

function saveAccessCount(accessCount) {
  fs.writeFileSync(accessCountFilePath, accessCount.toString());
}
