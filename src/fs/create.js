import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathFile = path.join(__dirname, "files", "fresh.txt");

    try {
        await fsPromises.access(pathFile);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fsPromises.writeFile(pathFile, 'I am fresh and young');
        } else {
            throw err;
        }
    }
};

await create();