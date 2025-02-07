import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import ListExpenseComponent from './components/ListExpenseComponent'
import ExpenseComponent from './components/ExpenseComponent'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {


  return (




    <>

    <BrowserRouter>
    
      <HeaderComponent/>

      <Routes>

        <Route  path='/' element= {<ListExpenseComponent/>}>   </Route>

        <Route  path='/expenses' element ={ <ListExpenseComponent/> }></Route>
       
        <Route  path='/add-expense' element ={ <ExpenseComponent/> }></Route>
       
        <Route  path='/edit-expense/:id' element ={ <ExpenseComponent/> }></Route>

        
  


      </Routes>
      <FooterComponent/>
      <Toaster/>
    </BrowserRouter>
    </>







  )
}

export default App
