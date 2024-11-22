import './App.css';
import Header from'./component/Header.js'
import DatingCards from './component/DatingCards.js';
import SwipeButtons from './component/SwipeButtons.js';


function App() {
  return (
    <div className="App">
      <Header />
      < DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
