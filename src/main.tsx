import { RouteRecord, ViteReactSSG } from "vite-react-ssg";
import App from "./App.tsx";
import { ExternalRedirect } from "./components/ExternalRedirect";
import "./i18n";
import "./index.css";

const routes: RouteRecord[] = [
  {
    path: "meet",
    element: <ExternalRedirect to="https://tidycal.com/filipemiranda" />,
  },
  {
    index: true,
    element: <App />,
  },
  {
    path: "*",
    element: <ExternalRedirect to="/" />,
  },
];

export const createRoot = ViteReactSSG({ routes });
