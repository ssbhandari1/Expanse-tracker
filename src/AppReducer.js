export default (state,action)=>{
    switch(action.type){
        case 'DELETE-TRASCTION':
        return{
...state,
transaction:state.transaction.filter(item=>item.id!==action.paylod)
        }
        case 'ADD-TRASCTION':
        return{
            ...state,
            transaction:[action.paylod,...state.transaction]
        }
        default:
    }
    return state
}