import logo from './logo.svg';
import './App.css';
import Login from './components/loginpage/login.js';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateAccount from './components/loginpage/CreateAccount/createAccount.js';
import OwnerHomePage from './components/ownerhomepage/home.js';
import AddHosteller from './components/ownerfeatures/addHosteller/addhosteller.js';
import PendingDues from './components/ownerfeatures/pendingdues/pendingdues.js';
import GetHosteller from './components/ownerfeatures/hostellersInfo/gethostlers.js';
import { OwnerProvider } from './context/ownerContext.js';
function App() {
  return (
    <>
    <OwnerProvider>
    <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/create' element={<CreateAccount />} />
    <Route path='/hostelmatehome' element={<OwnerHomePage/>}></Route>
    <Route path='/add' element={<AddHosteller/>} />
    <Route path='/pendingdues' element={< PendingDues/>} />
     <Route path='/gethostller' element={<GetHosteller/>} />
   
   </Routes>
   </BrowserRouter>
    </OwnerProvider>
   
   
  
    </>
   
  )
}

export default App;
