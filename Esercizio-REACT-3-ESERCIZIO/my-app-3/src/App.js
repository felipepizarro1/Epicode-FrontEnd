
import './App.css';
import MyNavComponent from './components/MyNavComponent';
import MyFooterComponent from './components/MyFooterComponent';
import WelcomeComponent from './components/WelcomeComponent';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <div className="App">
    <MyNavComponent/>
    <WelcomeComponent/>
    <AllTheBooks/>
    <MyFooterComponent/>
    </div>
  );
}

export default App;
