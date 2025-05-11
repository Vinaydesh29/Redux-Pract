import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:0
}
const countSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        inceBy1 :(state)=>{
           state.value +=1
        },
        inceBy5 :(state)=>{
            state.value+=5
        },
        deceBy1 :(state)=>{
            state.value -=1
        },
        reset :(state)=>{
            state.value = initialState.value
        },
        userCount :(state,action)=>{
            state.value += action.payload
        },
        userCount2 :(state,action)=>{
            state.value  -=action.payload
        }

    }
})

export const {inceBy1,inceBy5,deceBy1,reset,userCount,userCount2} = countSlice.actions
export default countSlice.reducer