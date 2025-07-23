import Dashboard from "./features/dashboard/dashboard";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Dashboard />

      <Toaster richColors position="bottom-right" />
    </>
  );
};

export default App;
