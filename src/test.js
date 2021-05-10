import path from 'path';
const __dirname = path.resolve();

const outputPath = path.resolve(__dirname, "dist");
console.log(`Output path is "${outputPath}".`)
export { outputPath }