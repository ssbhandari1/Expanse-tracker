import React, { useContext } from 'react'
import { GlobleContext } from './GlobleContext';

function Transaction({transactions}) {
  const{deletetransaction}=useContext(GlobleContext)
    let sign=transactions.amount<0? "-":"+";
  return (
    <div className='transiction'> <li className={transactions.amount<0? 'minus':'plus'}>
    <button onClick={()=>deletetransaction(transactions.id)}>*</button><label className='cash'>{transactions.text}</label><span>{sign}${Math.abs(transactions.amount)}</span>
    </li></div>
  )
}

export default Transaction