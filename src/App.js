import React from "react";
import "./App.css";
import { Provider } from 'react-redux'
import store from "./utils/store";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import ExpenseInput from "./components/ExpenseInput";

const App = () => {
   return (
      <Provider store={store}>
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
      </Provider>
   );
};

export default App;
