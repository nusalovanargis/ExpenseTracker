import './App.css'
import Balance from './components/Balance/Balance'
import Header from "./components/Header/Header"
import InComeExenses from './components/InComeExenses/InComeExenses'
import TransactionList from './components/TransactionList/TransactionList'
import AddTransaction from './components/AddTransaction/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <InComeExenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  )
}

export default App