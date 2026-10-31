import { cp, mkdir, rm, copyFile } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('Proyecto Asincronismo/src/Async Landing', 'dist', { recursive: true });
// Mantiene también el enlace histórico de GitHub Pages.
await cp('Proyecto Asincronismo/src/Async Landing', 'dist/Proyecto Asincronismo/src/Async Landing', { recursive: true });
console.log('Sitio estático generado en dist/.');
