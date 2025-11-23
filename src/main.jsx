import { render } from "./mrdiy.jsx";
import { Router } from "./mrdiy.router";
import Home from "./pages/Home.jsx";
import EditorPage from "./pages/EditorPage.jsx";

Router.register("/", Home);
Router.register("/editor", EditorPage);

Router.start();
