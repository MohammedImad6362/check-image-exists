const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, 'S3-existence', 'cbse', 'images_not_exist.json'); // Replace with your JSON file path
const imageFolderPath = 'C:\\Imad\\Test Question\\Image-assets\\assets-except-neet-jee\\ibps'; // Replace with your image folder path

function readImageFiles(folderPath) {
  return fs.readdirSync(folderPath)
    .filter(file => file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.gif'))
    .map(file => path.basename(file));
}

function getMissingImages(jsonFilePath, imageFolderPath) {
  const imageFiles = readImageFiles(imageFolderPath);

  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
  const imageNames = jsonData.images; // Extract image filenames from the JSON data

  const missingImages = imageNames.filter(imageName => !imageFiles.includes(imageName));
  const existingImages = imageNames.filter(imageName => imageFiles.includes(imageName));

  return { missingImages, existingImages };
}

const { missingImages, existingImages } = getMissingImages(jsonFilePath, imageFolderPath);

// Create separate JSON files for missing and existing images
fs.writeFileSync('missing_images.json', JSON.stringify({ images: missingImages }, null, 2));
fs.writeFileSync('existing_images.json', JSON.stringify({ images: existingImages }, null, 2));

console.log('Missing Images:');
if (missingImages.length === 0) {
  console.log('All images are missing.');
=======
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
>>>>>>> e60972ce40b4afea6ca784c2d7c00a112f9e7a99
} else {
  missingImages.forEach(missingImage => {
    console.log(missingImage);
  });
}
<<<<<<< HEAD

console.log('Existing Images:');
if (existingImages.length === 0) {
  console.log('All images exist.');
} else {
  existingImages.forEach(existingImage => {
    console.log(existingImage);
  });
}

console.log('Results saved in missing_images.json and existing_images.json.');
 
