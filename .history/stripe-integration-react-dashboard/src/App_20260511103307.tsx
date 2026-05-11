import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./theme/ThemeProvider";
import "./i18n/i18n";
import LineChartCom from "./components/LineChartCom";

function App() {
  const dummyData = [
    { xValue: "Jan", yValue: 120 },
    { xValue: "Feb", yValue: 200 },
    { xValue: "Mar", yValue: 150 },
    { xValue: "Apr", yValue: 300 },
  ];
  return (
    <ThemeProvider>
      <LineChartCom
        title="Sales Overview"
        xTitle="Months"
        yTitle="Revenue"
        width={500}
        height={500}
        data={dummyData}
      />
    </ThemeProvider>
  );
}

export default App;
