import {createSlice} from '@reduxjs/toolkit'
const initialState = localStorage.getItem("wishItems")
  ? JSON.parse(localStorage.getItem("wishItems"))
  : { wishItems: [] };

  const wishSlice = createSlice({
    name : "wishList",
    initialState,
    reducers: {
      addToList:(state, action) => {
        const item = action.payload
        const itemExistente = state.wishItems.find((c) => c._id === item._id)
        if(itemExistente){
            state.wishItems = state.wishItems.map((c) =>
            c._id === existsItem._id ? item : c
        );
        } else {
            state.wishItems = [...state.wishItems, item];
        }
        localStorage.setItem("wishItems", JSON.stringify(state))
        return state
      }  
    }
  })