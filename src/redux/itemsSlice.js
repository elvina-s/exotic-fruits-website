import { createSlice } from "@reduxjs/toolkit";
import fruitsData from "../data/fruitsData";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        searchedItem: "",
        itemsCatalogue: fruitsData,
    },
    reducers: {
        setSearchedItem: (state, action) => {
            state.searchedItem = action.payload;
        },
    }
})

export const getSearchItem = state => state.items.searchedItem;

export const { setSearchedItem } = itemsSlice.actions;
export default itemsSlice.reducer;
