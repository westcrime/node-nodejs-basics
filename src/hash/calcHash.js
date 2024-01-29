import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import * as crypto from 'crypto';
import * as path from 'path';

const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
    const hash = crypto.createHash('sha256');

    try {
        const fileContents = await fs.readFile(filePath);
        hash.update(fileContents);
        const fileHash = hash.digest('hex');
        console.log(`Hash of the file: ${fileHash}`);
    } catch (err) {
        console.error(`Error reading the file: ${err.message}`);
    }
};

await calculateHash();
