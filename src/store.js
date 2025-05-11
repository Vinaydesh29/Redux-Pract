import { configureStore } from "@reduxjs/toolkit";
import countSlice from './slice.js'
const store = configureStore({
    reducer:{
         count:countSlice
    }
})
export default store