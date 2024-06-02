import { useState } from "react";

import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Result from "./components/Result";

function App() {
  const [formValues, setFormValues] = useState({
    "initial-investment": 10000,
    "annual-investment": 300,
    "expected-return": 5.5,
    duration: 12
  });
  function handleInputChange(name, value) {
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }
  return (
    <>
      <Header />
      <Inputs formValues={formValues} handleInputChange={handleInputChange} />
      <Result
        initialInvestment={formValues["initial-investment"]}
        annualInvestment={formValues["annual-investment"]}
        expectedReturn={formValues["expected-return"]}
        duration={formValues["duration"]}
      />
    </>
  );
}

export default App;
