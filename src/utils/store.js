import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./budgetSlice";

export default configureStore({
   reducer: { budget: budgetReducer }
});
