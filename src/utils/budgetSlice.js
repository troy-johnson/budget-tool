import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
   name: "budget",
   initialState: {
      monthlyIncome: 0,
      totalExpenses: 0,
      expenseList: []
   },
   reducers: {
      addExpenseItem: (state, action) => {
         state.expenseList.push(action.payload);
      },
      removeExpenseItem: (state, action) => {
         return state.expenseList.filter(
            (item) => item.name !== action.payload.name
         );
      },
      updateMonthlyIncome: (state, action) => {
         state.monthlyIncome = action.payload;
      }
   }
});

export const { addExpenseItem, removeExpenseItem, updateMonthlyIncome } =
   budgetSlice.actions;

export default budgetSlice.reducer;
