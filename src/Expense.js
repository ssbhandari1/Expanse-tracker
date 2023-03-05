import React from 'react'
import AddTransition from './AddTransition'
import Balance from './Balance'
import Header from './Header'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'
import './Expense.css'
import { GlobleProvider } from './GlobleContext'

function Expense() {
  return (
    <GlobleProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransition/>
    </div>
    </GlobleProvider>
  )
}

export default Expense