import React from "react";
import { BudgetContext } from "../providers/BudgetProvider";

const ExpenseInput = () => {
   const { budgetState, budgetActions } = React.useContext(BudgetContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      budgetActions.addExpenseItem({
         name: e.target.name.value,
         amount: e.target.amount.value
      });
   };

   return (
      <div style={{ width: "100%" }}>
         {JSON.stringify(budgetState)}
         <p>Add Expense Item</p>
         <section id="monthly-income">
            <form onSubmit={handleSubmit}>
               <input name="name" type="text" placeholder="Name" />
               <input name="amount" type="number" placeholder="Amount" />
               <button type="submit">Add</button>
            </form>
         </section>
      </div>
   );
};

export default ExpenseInput;
