// pages/api/images.js
import fs from 'fs';
import path from 'path';

export default function getImages() {
    const shuffle = (array) => {
        let tempArr = array.sort(() => Math.random() - 0.5); 
        return [...tempArr];
      };

  const fakeFolderPath = path.join(process.cwd(), 'public/assets/f'); 
  const realFolderPath = path.join(process.cwd(), 'public/assets/r'); 
  
  const fakeFiles = fs.readdirSync(fakeFolderPath);
  const realFiles = fs.readdirSync(realFolderPath);

  // Filtrer les fichiers pour ne récupérer que les images
  const fakeImageFiles = fakeFiles.filter((file) => file.match(/\.(jpeg|jpg|png|webp)$/));
  const realImageFiles = realFiles.filter((file) => file.match(/\.(jpeg|jpg|png|webp)$/));

  // Construire les chemins complets des images
  const fakeImagePaths = fakeImageFiles.map((file) => `/assets/f/${file}`);
  const realImagePaths = realImageFiles.map((file) => `/assets/r/${file}`);

  const shuffled = shuffle([...realImagePaths, ...fakeImagePaths]).slice(0, 10);
  return shuffled;



}