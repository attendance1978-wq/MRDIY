import { defineConfig } from "vite";
import babel from "@babel/plugin-transform-react-jsx";

export default defineConfig({
  esbuild: false,
  plugins: [
    {
      name: "babel-jsx",
      transform(code, id) {
        if (id.endsWith(".jsx")) {
          return require("@babel/core").transform(code, {
            plugins: [
              [babel, { runtime: "classic", pragma: "h", pragmaFrag: "Fragment" }]
            ]
          });
        }
      }
    }
  ]
});
          
