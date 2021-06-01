import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeExpenseItem } from "../utils/budgetSlice";

const Expenses = () => {
   const [bgColour, setBgColour] = useState("#fafafa");
   const expenses = useSelector((state) => state.budget.expenseList);
   const dispatch = useDispatch();

   const removeExpense = (item) => dispatch(removeExpenseItem(item));

   return (
      <main style={{ backgroundColor: "lightgrey" }}>
         <p>Expense List</p>
         <section id="expense-items">
            {expenses?.map((el) => {
               return (
                  <div
                     key={el.name}
                     style={{
                        backgroundColor: "#fafafa",
                        border: "1px solid darkblue",
                        height: "5rem",
                        minWidth: "5rem",
                        maxWidth: "10rem"
                     }}
                  >
                     <div
                        style={{
                           cursor: "pointer",
                           backgroundColor: bgColour,
                           maxHeight: "3rem",
                           width: "100%"
                        }}
                        onMouseEnter={() => setBgColour("#c83f49")}
                        onMouseLeave={() => setBgColour("#fafafa")}
                        onClick={() => removeExpense(el)}
                     >
                        Remove
                     </div>
                     {el.name} ${el.amount}
                  </div>
               );
            })}
         </section>
      </main>
   );
};

export default Expenses;
