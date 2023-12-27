import { createRoot } from "react-dom/client";
import { useState } from "react";
import { Button } from "./components/ui/button";

const App = () => {
  const [csvData, setCsvData] = useState<string | null>(null);

  const handleReadFile = async () => {
    try {
      const data: string = await window.electronAPI.readFile("read-csv-file");
      setCsvData(data);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };
  console.log("CSV Data to render:", csvData);
  return (
    <div className="flex flex-col justify-center items-center h-[100svh] bg-background">
      <h2 className="pb-16 text-3xl text-primary">
        Let's generate some progress reports.
      </h2>
      <Button onClick={handleReadFile}>Open CSV File</Button>
      {Array.isArray(csvData) &&
        csvData.map((record, index) => (
          <div key={index}>
            {Object.entries(record).map(([key, value]) => (
              <p key={key}>
                {key}:{" "}
                {typeof value === "string" || typeof value === "number"
                  ? value
                  : "Unsupported type"}
              </p>
            ))}
          </div>
        ))}
    </div>
  );
};

// Mount the React App
const root = createRoot(document.getElementById("root"));
root.render(<App />);
