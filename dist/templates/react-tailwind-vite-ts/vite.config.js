/**
 * @file Vite configuration file
 */
import { defineConfig } from "vite";
// import typescript from "@rollup/plugin-typescript";
// import swc from "rollup-plugin-swc";
// import react from "@vitejs/plugin-react-swc";
// import htmlTemplate from "vite-plugin-html-template";
import react from "@vitejs/plugin-react";
// import tailwindcss from "tailwindcss";

export default defineConfig({
    publicDir: "public",
    root: "src",
    server: {
        port: 8080,
    },
    // outDir: "../dist",
    build: {
        outDir: "../dist",
    },
    // Github Pages
    base: "/game-accessibility/",
    plugins: [
        react(),
        // tailwindcss(),
        // htmlTemplate({
        //     template: "public/index.html",
        //     inject: {
        //         injectTo: "head",
        //         data: {
        //             title: "Quantum Assembler",
        //         },
        //     },
        // }),
    ],
    // css: {
    //     postcss: {
    //         plugins: [tailwindcss()],
    //     },
    // }
    // esbuild: false,
});
