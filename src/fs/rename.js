import fs from 'fs/promises';

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const originFile = path.join(__dirname, "files", "wrongFilename.txt");
    const destinationFile = path.join(__dirname, "files", "properFilename.md");

    try {
        await fs.access(originFile);
        try {
            await fs.access(destinationFile);
            throw new Error('FS operation failed');
        } catch (err2) {
            if (err2.code === 'ENOENT') {
                await fs.rename(originFile, destinationFile);
            } else {
                throw err2;
            }
        }
    } catch (err1) {
        if (err1.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err1;
        }
    }
};

await rename();