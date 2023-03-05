import React, { useContext } from 'react'
import { GlobleContext } from './GlobleContext';

function IncomeExpense() {
  const {transaction}=useContext(GlobleContext);
  const amounts=transaction.map((currnt)=>currnt.amount);
  const income=amounts.filter((item)=>{
    return item>0
  }).reduce((acumm,curnt)=> (acumm+=curnt),0).toFixed(2);

  const expense=(amounts.filter(item=>item<0).reduce((accum,curnt)=>(accum+=curnt),0)*-1).toFixed(2)
  return (
    <div className='IncExpns'>
        <div className="income"><h4>Income</h4><p>+${income}</p></div><hr/>
        <div className="expense"><h4>Expense</h4><p>-${expense}</p></div>
    </div>
  )
}

export default IncomeExpense