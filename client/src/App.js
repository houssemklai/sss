
import './App.css';
import AddEddit from './components/AddEddit';
import ContactCard from './components/contactCard';
import Homee from './components/homee';
import Navee from './components/Navee';
import { Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
       
<Navee></Navee>
<Routes>
<Route path ='/' element= {<Homee/>} />
<Route path ='/ContactCard' element= {<ContactCard/>} /> 
<Route path ='/AddEddit' element= {<AddEddit/>} />
</Routes>
    </div>
  );
}

export default App;
