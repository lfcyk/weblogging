import { configureStore } from "@reduxjs/toolkit"

// import all reducer from slices
import authReducer from "./slices/auth"

const store = configureStore({
    reducer : {
        auth : authReducer
    }
})