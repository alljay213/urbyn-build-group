import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment, set base to your repo name:
  // base: '/urbyn-build-group/',
});
