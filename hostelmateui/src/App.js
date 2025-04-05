import logo from './logo.svg';
import './App.css';
import Login from './components/loginpage/login.js';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateAccount from './components/loginpage/CreateAccount/createAccount.js';
import OwnerHomePage from './components/ownerhomepage/home.js';
function App() {
  return (
    <>
   
   <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/create' element={<CreateAccount />} />
    <Route path='/hostelmatehome' element={<OwnerHomePage/>}/>
   </Routes>
   </BrowserRouter>
  
    </>
   
  )
}

export default App;
