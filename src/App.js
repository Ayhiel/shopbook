import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="dark:bg-gray-950">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
