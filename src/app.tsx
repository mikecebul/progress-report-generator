import { createRoot } from "react-dom/client";
import { Button } from "./components/ui/button";

const root = createRoot(document.body);
root.render(
  <main className="flex flex-col justify-center items-center h-[100svh]">
    <h2 className="text-primary text-3xl pb-16">
      Let's generate some progress reports.
    </h2>
    <Button>Generate Reports</Button>
  </main>
);
