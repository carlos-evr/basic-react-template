import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterComponent } from './RouterComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header></header>
        <RouterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
