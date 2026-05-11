import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./i18n/i18n";
import ContainerComp from "./components/ContainerComp";

function App() {
  const MockComponent = () => <div data-testid="mock">Test</div>;
  return (
    <ThemeProvider>
      <ContainerComp componentDisplay={MockComponent} />
    </ThemeProvider>
  );
}

export default App;
