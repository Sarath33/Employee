import logo from './logo.svg';
import './App.css';
import Home from './admin/home';
import Edit from './admin/edit';
import Employee from './admin/employee';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
    
    
      <Route exact path='/' render={() => <Home/>} />
      <Route exact path='/display' render={() => <Employee />} />
      <Route path='/edit/:id' render={() => <Edit />} />
   
  </div>
  );
}

export default App;
