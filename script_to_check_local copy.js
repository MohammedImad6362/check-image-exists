const fs = require('fs');
const path = require('path');

const txtFilePath = path.join(__dirname, 'txt files', 'neet-jee', 'images_not_exist.txt');
const imageFolderPath = 'C:\\Imad\\Test Question\\Image-assets\\neet-jee-assets\\1'; // Replace with your image folder path

function readImageFiles(folderPath) {
  return fs.readdirSync(folderPath)
    .filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif')) 
    .map(file => path.basename(file));
}

function getMissingImages(txtFilePath, imageFolderPath) {
  const imageFiles = readImageFiles(imageFolderPath);
  
  const txtFileContent = fs.readFileSync(txtFilePath, 'utf-8');
  const imageNames = txtFileContent.split('\n').map(line => line.trim());
  
  const missingImages = imageNames.filter(imageName => !imageFiles.includes(imageName));
  return missingImages;
}

const missingImages = getMissingImages(txtFilePath, imageFolderPath);

console.log(`Images missing in ${path.basename(txtFilePath)}:`);
if (missingImages.length === 0) {
  console.log(`All images mentioned in ${path.basename(txtFilePath)} are present.`);
} else {
  missingImages.forEach(missingImage => {
    console.log(missingImage);
  });
}
