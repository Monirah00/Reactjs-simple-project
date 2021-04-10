
import './App.css';
import Menu from './Components/Menu';
import Home from './Pages/Home';
import About from './Pages/About';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Contact from './Pages/Contact';
import Servics from './Pages/Servics';

function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>

        <Route exact path='/' component={Home}/>
        <Route exact path='/About' component={About} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Servics' component={Servics}/>


      </Switch>
      
      </BrowserRouter>
   
    </>
  );
}

export default App;
