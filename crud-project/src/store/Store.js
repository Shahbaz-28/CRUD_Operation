import { configureStore } from "@reduxjs/toolkit";
import getSlice from "../store/get_user_slice";
import createUserSlice from '../store/create_user_slice'

const store = configureStore({
    reducer:{
        getReadApi : getSlice,
        create: createUserSlice,
    }
});

export default store;