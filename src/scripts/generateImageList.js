const fs = require('fs');
const path = require('path');

const imageDirectory = path.join(process.cwd(), 'public/images');
const outputFile = path.join(process.cwd(), 'src/imageList.json');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

const getImageFiles = (dir) => {
    const files = fs.readdirSync(dir);
    return files.filter(file =>
        imageExtensions.includes(path.extname(file).toLowerCase())
    );
};

const imageList = getImageFiles(imageDirectory);

fs.writeFileSync(outputFile, JSON.stringify(imageList, null, 2));

console.log(`Image list generated at ${outputFile}`);
