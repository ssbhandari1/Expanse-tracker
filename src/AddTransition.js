import React, { useContext, useState } from 'react'
import { GlobleContext } from './GlobleContext'

function AddTransition() {
    const[text,setText]=useState('')
    const[amount,setAmount]=useState()
    const { addtransaction}=useContext(GlobleContext)
    const formSubmit=(e)=>{
e.preventDefault()
const newTransition={
  id:Math.floor(Math.random()*100000000),
  text,
  amount:+amount
}
addtransaction(newTransition)
setText('')
setAmount('')
    }
  return (
    <div className='Addtransition'>
        <h3>Add New Transition</h3>
        <hr/>
        <form onSubmit={formSubmit}>
            <div className="text">
                <label htmlFor="">Text</label><br/>
                <input type="text" placeholder='Enter text..' value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="Amount">
                <label htmlFor="">Amount <br />
                (negative-expense,positive-income)</label><br/>
                <input type="number" placeholder='Enter Amount...'  value={amount} onChange={(e)=>setAmount(e.target.value)} />
               <br/> <button>Add Transition</button>
            </div>
        </form>
    </div>
  )
}

export default AddTransition