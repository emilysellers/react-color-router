import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';

function App() {
  return (
    <main className="App">
      <Header />
      <Switch>
        <Route exact path="/rgb/:red/:green/:blue" component={Main}></Route>
      </Switch>
    </main>
  );
}

export default App;
