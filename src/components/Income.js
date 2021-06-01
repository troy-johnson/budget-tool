import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMonthlyIncome } from "../utils/budgetSlice";

const Income = () => {
   const income = useSelector((state) => state.budget.monthlyIncome);
   const expenses = useSelector((state) => state.budget.totalExpenses)
   const dispatch = useDispatch();

   const updateIncome = (e) => {
      dispatch(updateMonthlyIncome(e.target.value));
   };

   return (
      <main>
         <section id="monthly-income">
            <p>Monthly Income</p>$
            <input
               type="number"
               placeholder={income}
               onChange={(e) => updateIncome(e)}
            />
         </section>
         <section id="unbudgeted">
            <p>Unbudgeted</p>
            <p>${income - expenses}</p>
         </section>
      </main>
   );
};

export default Income;
