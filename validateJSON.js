const fs = require('fs');
const path = require('path')

// Replace 'your-json-file.json' with the path to your JSON file
const jsonFilePath = path.join(__dirname, 'LMS-Test-Questions', 'cbse-6-12', 'questions.json');

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  try {
    // Attempt to parse the JSON data
    JSON.parse(data);
    console.log('JSON is valid.');
  } catch (error) {
    console.error(`Invalid JSON: ${error}`);
  }
});
