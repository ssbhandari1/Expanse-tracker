// initialState

import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initialState={
    transaction:[]
}

// create context
export const GlobleContext=createContext(initialState)


// delete transactio0n



// create Globleprovider

export const GlobleProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

    const deletetransaction=(id)=>{
        return dispatch({
            type:'DELETE-TRASCTION',
            paylod:id
        })
    }

    const addtransaction=(transaction)=>{
        return dispatch({
            type:'ADD-TRASCTION',
            paylod:transaction
        })
    }
    return(
        <GlobleContext.Provider value={{
           ...state,deletetransaction,addtransaction
        }}>
            {children}
        </GlobleContext.Provider>
    )
}