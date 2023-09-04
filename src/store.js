import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


const initialState = {
    repositories: [],
    loading: false,
    error: null
};

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_REPOS_START":
            return{
                ...state,
                loading:true,
                error:null
            };
        case "FETCH_REPOS_SUCCESS":
            return{
                ...state,
                loading:false,
                repositories:action.payload
            };
        case "FETCH_REPOS_ERROR":
            return{
                ...state,
                loading:false,
                error:action.error
            };
        default:
            return state;
    }
}

const store = configureStore({
    reducer:{data:reducer},
    middleware:getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
});

export default store;