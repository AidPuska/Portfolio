import './App.css';
import Home from './pages/Home/Home'

function App({ visitCount }) {
  return (
    <div className="App">
      <Home visitCount={visitCount} />
    </div>
  );
}

export default App;
