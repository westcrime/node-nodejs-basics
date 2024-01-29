import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathFile = path.join(__dirname, "files", "fileToRemove.txt");

    try {
        await fs.access(pathFile);
        await fs.unlink(pathFile);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await remove();