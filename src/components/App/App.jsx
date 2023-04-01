import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainScreen from '../Test';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path='/'
            element={<MainScreen />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
