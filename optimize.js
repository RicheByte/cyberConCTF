import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('src/assets');

const files = fs.readdirSync(assetsDir);

async function optimize() {
  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(assetsDir, file);
      const outputName = file.replace('.png', '.webp');
      const outputPath = path.join(assetsDir, outputName);

      try {
        console.log(`Optimizing ${file}...`);
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        
        console.log(`Created ${outputName}`);
        
        // Delete original PNG
        fs.unlinkSync(inputPath);
        console.log(`Deleted original ${file}`);
      } catch (err) {
        console.error(`Error optimizing ${file}:`, err);
      }
    }
  }
}

optimize();
