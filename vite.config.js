import { defineConfig } from "vite";

export default defineConfig({
  base: "/Portafolio/", // https://ultisaer.github.io/Portafolio/ 👈
  root: "./src", // Carpeta origen de los archivos
  build: {
    outDir: "../docs", // Carpeta de salida luego de build
    emptyOutDir: false, // No eliminar carpeta de salida
  },
});
