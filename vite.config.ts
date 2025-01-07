import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "lib") {
    return {
      plugins: [react(), dts({ include: ["src"] })],
      build: {
        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: "EmailBuilderW",
          fileName: (format) => `email-builder-w.${format}.js`,
        },
        rollupOptions: {
          external: ["react", "react/jsx-runtime"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
              "react/jsx-runtime": "jsxRuntime",
            },
          },
        },
        outDir: "dist",
        sourcemap: true,
        emptyOutDir: true,
      },
    };
  } else {
    return {
      plugins: [react()],
      root: "sample", // Set sample as the root for dev mode
      server: {
        port: 3000,
      },
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
      },
    };
  }
});
