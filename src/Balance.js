import React, { useContext } from 'react'
import { GlobleContext } from './GlobleContext'

function Balance() {
  const {transaction}=useContext(GlobleContext);
  const amounts=transaction.map(currnt=>currnt.amount)
  const total=amounts.reduce((accum, currntElm)=>accum+=currntElm,0).toFixed(2)
  


  return (
    <div className='balance'> 
        <h4>your Balance</h4>
        <h1>${total}</h1>
    </div>
  )
}

export default Balance