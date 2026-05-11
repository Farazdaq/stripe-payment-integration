import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./i18n/i18n";

function App() {
  return (
    <ThemeProvider>
      <LineChartCom
        title="Sales Overview"
        xTitle="Months"
        yTitle="Revenue"
        width={500}
        height={300}
        data={dummyData}
      />
    </ThemeProvider>
  );
}

export default App;
