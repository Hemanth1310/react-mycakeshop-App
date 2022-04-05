import logo from './logo.svg';
import './App.css';
// import {Routes,Route, Switch} from 'react-router-dom';

// import Head from './Pages/Transactions'
// import Holdings from './Pages/Holdings';
import Main from './pages/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Routes>
    <Route path="/" element={<Main />} />
    {/* <Route path="users/*" element={<Users />} /> */}
    </Routes>
    </Router>
     
  );
}

export default App;
