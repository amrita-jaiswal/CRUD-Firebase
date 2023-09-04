import React from "react";
import { Outlet, Link, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./components/add-tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/tutorials" className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Typescript Firebase example</h2>
          <Outlet />
        </div>
      </div>
    </Router>
  );
};

export default App;

export const AppRoutes = () => {
  return (
    <>
      <Route path="/" element={<TutorialsList />} />
      <Route path="/tutorials" element={<TutorialsList />} />
      <Route path="/add" element={<AddTutorial />} />
    </>
  );
};
