import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Super from './Super';
import './App.css';
// import './css/main.css';
import configs from './helpers/configs';

const {home, homeB, homeC, webadmin, student, error} = configs.links;

function App() {
  return (
    // <section className="app super_container">
      <Router>
        <Routes>
          <Route path={home} element={<Super entity="home"/>} />
          <Route path={homeB} element={<Super entity="home"/>} />
          <Route path={homeC} element={<Super entity="home"/>} />
          <Route path={webadmin} element={<Super entity="webadmin"/>} />
          <Route path={student} element={<Super entity="student"/>} />
          <Route path={error} element={<Super entity="error"/>} />
        </Routes>
      </Router>
    // </section>
  );
}

export default App;
