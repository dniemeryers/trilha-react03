import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import { Home } from './pages/home'
import { Login } from './pages/login'
import {Teste1} from './components/hooks/useState'
import {Teste2} from './components/hooks/useEffect'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />,
        <Route path="/teste1" element={<Teste1 />} />,
        <Route path="/teste2" element={<Teste2 />} />,

      </Routes>
    </Router>
    
  );
}

export default App;
