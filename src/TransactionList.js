import React, { useContext } from 'react'
import { GlobleContext } from './GlobleContext'
import Transaction from './Transaction'

function TransactionList() {
  const {transaction}=useContext(GlobleContext)
  
  return (
    <div className='transitionList'>
        <h3>History</h3>
        <hr/>

        <ul>
          {
            transaction.map((currunt)=>{
return(
 <Transaction key={currunt.id} transactions={currunt}/>
)
            })
          }
         
            
        </ul>
    </div>
  )
}

export default TransactionList