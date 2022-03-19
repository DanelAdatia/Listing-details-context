import { Suspense, lazy } from "react";
import "./App.css";

import { ArticleProvider } from "./components/ContextData";
const Listing = lazy(() => {
  return import("./components/Listing");
});

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <div className="App">
          <ArticleProvider>
            <Listing />
          </ArticleProvider>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
