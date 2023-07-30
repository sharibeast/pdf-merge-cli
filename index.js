#!/usr/bin/env node
// import path from 'path';
import fs from 'fs';
// import { fileURLToPath } from 'url';

// const __dirname = fileURLToPath(import.meta.url);
// console.log(__dirname)
// const dirPath = path.join(__dirname, '.');

fs.readdir("./", (err, files) => {
  if (err) {
    console.log('unable to scan directory');
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});

