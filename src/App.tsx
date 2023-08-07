import React from "react";
import CardPage from "./components/CardPage";
import HomePage from "./pages/HomePage";
import CompanyHighlights from "./pages/CompanyHighlights";

function App() {
  return (
    <div className="h-screen">
      <CardPage theme="dark">
        {/* <HomePage /> */}
        <CompanyHighlights />
      </CardPage>
    </div>
  );
}

export default App;
