import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const sourceFolder = path.join(__dirname, "files");

    try {
        await fs.access(sourceFolder);
        const files = await fs.readdir(sourceFolder);
        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await list();