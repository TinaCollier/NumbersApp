import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/footer';
import WelcomePage from './pages/welcome/WelcomePage';
import TriviaPage from './pages/trivia/TriviaPage';
import FactsPage from './pages/facts/FactsPage';
import PracticePage from "./pages/practice/PracticePage.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Navigation />
        <Routes>
          <Route path="/" element={ <WelcomePage /> } />

          <Route path="/trivia" element={ <TriviaPage /> }/>
          <Route path="/facts" element={ <FactsPage /> }/>
          <Route path="/practice" element={ <PracticePage /> }/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
