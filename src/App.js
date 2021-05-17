import React from "react";
import "./App.css";
import { BudgetProvider } from "./providers/BudgetProvider";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import ExpenseInput from "./components/ExpenseInput";

const App = () => {
   return (
      <BudgetProvider>
         <header
            style={{
               display: "flex",
               justifyContent: "center",
               width: "100%",
               height: "5rem",
               backgroundColor: "skyblue"
            }}
         >
            <h1 style={{ color: "white" }}>Time to budget</h1>
         </header>
         <main style={{ display: "flex"}}></main>
         <Income />
         <ExpenseInput />
         <Expenses />
      </BudgetProvider>
   );
};

export default App;
