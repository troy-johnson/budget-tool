import React from "react";
import { BudgetContext } from "../providers/BudgetProvider";

const Expenses = () => {
   const { budgetActions, budgetState } = React.useContext(BudgetContext);

   const removeExpenseItem = (item) => {
       console.log(item)
      budgetActions.removeExpenseItem(item);
   };

   return (
      <main style={{ backgroundColor: "lightgrey" }}>
         <p>Expense List</p>
         <section id="expense-items">
            {budgetState?.expenseList?.map((el) => {
               return (
                  <div key={el.name}>
                     {el.name} ${el.amount}
                     <div onClick={() => removeExpenseItem(el)}>Remove</div>
                  </div>
               );
            })}
         </section>
      </main>
   );
};

export default Expenses;
