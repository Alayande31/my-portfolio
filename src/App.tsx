// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { allPages } from "./pages/allRoutes";
import { Layout } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {allPages.map((page) => {
          const Page = page.view;
          return (
            <Route
              key={page.path}
              path={page.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
