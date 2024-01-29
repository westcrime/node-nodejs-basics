import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const source = path.join(__dirname, "files.txt");
    const destination = path.join(__dirname, "files_copy.txt");

    try {
        await fs.access(destination);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            const files = await fs.readdir(source);
            await fs.mkdir(destination);
            for (const file of files) {
                const currentSource = path.join(source, file);
                const currentDestination = path.join(destination, file);
                await fs.copyFile(currentSource, currentDestination);
            }
        } else {
            throw err;
        }
    }
};

await copy();
