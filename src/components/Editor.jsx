import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function Editor() {
  const div = document.createElement("div");

  new EditorView({
    parent: div,
    doc: "// Write code here...",
    extensions: [basicSetup, javascript()]
  });

  return div;
}
