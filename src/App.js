import './App.css';
import ChangeColor from './components/ChangeColor/ChangeColor';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Login/>
      <ChangeColor/>
    </div>
  );
}

export default App;
