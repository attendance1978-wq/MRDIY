export function h(tag, props, ...children) {
  if (typeof tag === "function") {
    return tag({ ...props, children });
  }

  const el = document.createElement(tag);
  if (props) {
    for (const key in props) {
      el[key] = props[key];
    }
  }

  children.flat().forEach(c => {
    el.append(c instanceof Node ? c : document.createTextNode(c));
  });

  return el;
}

export function render(component, root) {
  document.querySelector(root).innerHTML = "";
  document.querySelector(root).append(component);
}
