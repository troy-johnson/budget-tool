import React from "react";
import { BudgetContext } from "../providers/BudgetProvider";

const Income = () => {
   const { budgetActions, budgetState } = React.useContext(BudgetContext);

   const updateMonthlyIncome = (e) => {
      budgetActions.updateMonthlyIncome(e.target.value);
   };

   return (
      <main>
         <section id="monthly-income">
            <p>Monthly Income</p>$
            <input
               type="number"
               placeholder={budgetState.monthlyIncome}
               onChange={(e) => updateMonthlyIncome(e)}
            />
         </section>
         <section id="unbudgeted">
            <p>Unbudgeted</p>
            <p>${budgetState.monthlyIncome - budgetState.totalExpenses}</p>
         </section>
      </main>
   );
};

export default Income;
