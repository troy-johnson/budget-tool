import { createContext, useReducer } from "react";
const BudgetContext = createContext();

const initialState = {
   monthlyIncome: 0,
   totalExpenses: 0,
   expenseList: []
};

const reducer = (state, action) => {
   console.log('action', state, action)
   switch (action.type) {
      case "UPDATE_MONTHLY_INCOME":
         return {
            ...state,
            monthlyIncome: action.payload
         };
      case "ADD_EXPENSE_ITEM":
         let newExpenseList = state.expenseList;

         newExpenseList.push(action.payload)

         return {
            ...state,
            expenseList: newExpenseList,
            totalExpenses: state.totalExpenses + action.payload.amount
         };
      case "REMOVE_EXPENSE_ITEM":
         let filteredExpenseList = state.expenseList.filter(el => el.name !== action.payload.name);

         return {
            ...state,
            expenseList: filteredExpenseList,
            totalExpenses: state.totalExpenses - action.payload.amount
         };
      default:
         return state;
   }
};

const BudgetProvider = ({ children }) => {
   const [budgetState, dispatch] = useReducer(reducer, initialState);
   const budgetActions = {
      updateMonthlyIncome: (status) => {
         dispatch({
            type: "UPDATE_MONTHLY_INCOME",
            payload: status
         });
      },
      addExpenseItem: (status) => {
         dispatch({
            type: "ADD_EXPENSE_ITEM",
            payload: status
         });
      },
      removeExpenseItem: (status) => {
         dispatch({
            type: "REMOVE_EXPENSE_ITEM",
            payload: status
         });
      }
   };

   return (
      <BudgetContext.Provider value={{ budgetState, budgetActions }}>
         {children}
      </BudgetContext.Provider>
   );
};

export { BudgetProvider, BudgetContext };
