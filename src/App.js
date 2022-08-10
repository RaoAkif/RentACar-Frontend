import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header';
import './App.css';
import CakeView from './pages/CakeView';
import IcecreamView from './pages/IcecreamView';
import UserView from './pages/UserView';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CakeView />} />
        <Route path="/icecream" element={<IcecreamView />} />
        <Route path="/users" element={<UserView />} />
      </Routes>
    </Router>
  );
}

export default App;
