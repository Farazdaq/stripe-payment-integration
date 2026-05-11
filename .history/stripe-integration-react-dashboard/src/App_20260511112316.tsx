import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./i18n/i18n";
import ContainerComp from "./components/ContainerComp";

function App() {
  return (
    <ThemeProvider>
      <ContainerComp componentDisplay={Hello} />
    </ThemeProvider>
  );
}

export default App;
