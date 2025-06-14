import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins:[react(),tailwindcss()],
    server: {
        port: 3000, // Set the development server port
        open: true, // Automatically open the browser when the server starts
    },
});
// This configuration file sets up Vite to use the React plugin, enabling support for React applications.