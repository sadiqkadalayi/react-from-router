import { createSlice } from "@reduxjs/toolkit";


const dataSlice = createSlice({
    name : 'dataSlice',
    initialState : {
        Head : 'blank',
        count : 'Hello',
        cred : 'blank'
    },
    reducers: {
        setHead : (state,action)=> {
            state.Head=action.payload;
        },
        setCount : (state,action)=> {
            state.count=action.payload;
        },
        setCred : (state,action)=>{
            state.cred=action.payload;
        }
        
    }
})

export default dataSlice.reducer
export const {setHead,setCount,setCred}=dataSlice.actions