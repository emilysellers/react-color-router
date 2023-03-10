import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import NotFound from './components/NotFound/NotFound.js';

function App() {
  return (
    <main className="App">
      <Header />
      <Switch>
        <Route exact path="/rgb/:red/:green/:blue" component={Main}></Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
