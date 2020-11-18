import './App.css';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import Home from './Components/Home'
import Signup from './Components/Signup';
import Login from './Components/Login';


function App() {
  return (
      
        
             
             <Switch> 
                    <Route path='/'  component={Home} exact />
                    <Route path='/signup'  component={Signup} />
                    <Route path='/login'  component={Login} />
                    
              </Switch>
       
  );
}

export default App;
