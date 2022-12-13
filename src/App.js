import logo from './logo.svg';
import './App.css';

//components imports
import Header from './components/Header'

function App() {
  const name = 'Brad';

  return (
    <div className="container">
      <Header title={2}/>
    </div>
  );
}

export default App;
