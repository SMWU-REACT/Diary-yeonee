import "./App.css";
import MainView from "./components/MainView";
// eslint-disable-next-line no-unused-vars
import HistoryView from "./components/HistoryView";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
            <Route path={'/'} element={<MainView />} />
            <Route path={'/history'} element={<HistoryView />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
