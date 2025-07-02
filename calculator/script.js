const fs = require('fs');
const path = require('path');

const folderPath = './calculator'; // replace with your folder path
const headerFile = path.join(folderPath, 'heada.html');
const footerFile = path.join(folderPath, 'foota.html');

const headerContent = fs.readFileSync(headerFile, 'utf-8');
const footerContent = fs.readFileSync(footerFile, 'utf-8');

fs.readdirSync(folderPath).forEach(file => {
  if (file.endsWith('.html') && file !== 'heada.html' && file !== 'foota.html') {
    const filePath = path.join(folderPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    const newContent = headerContent + '\n' + content + '\n' + footerContent;
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Processed ${file}`);
  }
});
