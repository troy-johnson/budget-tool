import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpenseItem } from "../utils/budgetSlice";

const ExpenseInput = () => {
   const [expenseName, setExpenseName] = useState("");
   const [expenseValue, setExpenseValue] = useState("");

   const { monthlyIncome, expenseList, totalExpenses } = useSelector(
      (state) => state.budget
   );

   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      setExpenseName('');
      setExpenseValue(0);
      dispatch(
         addExpenseItem({
            name: e.target.name.value,
            amount: e.target.amount.value
         })
      );
   };

   return (
      <div style={{ width: "100%" }}>
         <p>Monthly Income: ${monthlyIncome}</p>
         <p>Total Expenses: ${totalExpenses}</p>
         <p>Expense List: ${JSON.stringify(expenseList)}</p>
         <p>Add Expense Item</p>
         <section id="monthly-income">
            <form onSubmit={handleSubmit}>
               <input name="name" type="text" placeholder="Expense Name" value={expenseName} onChange={e => setExpenseName(e.target.value)} />
               <input name="amount" type="number" placeholder="Expense Amount" value={expenseValue} onChange={e => setExpenseValue(e.target.value)} />
               <button type="submit">Add</button>
            </form>
         </section>
      </div>
   );
};

export default ExpenseInput;
