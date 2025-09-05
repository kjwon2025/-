// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import catalog from "./productsSlice";

const store = configureStore({
    reducer: { catalog },
});

export default store;
