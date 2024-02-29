import './App.css';
import NavBar from './components/NavBar.js';
import News from './components/News.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const pageElementCount = 30;
  const countryName = "in";

  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/general" key="general" element={<News pageSize={pageElementCount} country={countryName} category={"general"} />} />
        </Routes>
        <Routes>
          <Route exact path="/science" key="science" element={<News pageSize={pageElementCount} country={countryName} category={"science"} />} />
        </Routes>
        <Routes>
          <Route exact path="/business" key="business" element={<News pageSize={pageElementCount} country={countryName} category={"business"} />} />
        </Routes>
        <Routes>
          <Route exact path="/technology" key="technology" element={<News pageSize={pageElementCount} country={countryName} category={"technology"} />} />
        </Routes>
        <Routes>
          <Route exact path="/entertainment" key="entertainment" element={<News pageSize={pageElementCount} country={countryName} category={"entertainment"} />} />
        </Routes>
        <Routes>
          <Route exact path="/sports" key="sports" element={<News pageSize={pageElementCount} country={countryName} category={"sports"} />} />
        </Routes>
        <Routes>
          <Route exact path="/health" key="health" element={<News pageSize={pageElementCount} country={countryName} category={"health"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


