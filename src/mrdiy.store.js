export const Store = {
  data: {},
  listeners: [],

  set(key, value) {
    this.data[key] = value;
    this.listeners.forEach(fn => fn());
  },

  get(key) {
    return this.data[key];
  },

  subscribe(fn) {
    this.listeners.push(fn);
  }
};
