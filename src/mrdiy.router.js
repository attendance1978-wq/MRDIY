import { render } from "./mrdiy.jsx";

export const Router = {
  routes: {},

  register(path, component) {
    this.routes[path] = component;
  },

  start() {
    window.addEventListener("hashchange", () => this.load());
    this.load();
  },

  load() {
    const hash = location.hash.replace("#", "") || "/";
    const component = this.routes[hash];
    render(component(), "#app");
  }
};
