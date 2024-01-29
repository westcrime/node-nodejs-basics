import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import path from 'path';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathFile = path.join(__dirname, "files", "fileToRead.txt");
    
    try {
        await fs.access(pathFile);
        fs.readFile(pathFile, 'utf8')
       .then(data => console.log(data))
       .catch(err => console.error(err.message));
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await read();