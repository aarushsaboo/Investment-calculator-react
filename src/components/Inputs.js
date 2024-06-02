import { useState } from "react";

import ListItems from "./ListItems";

export default function Inputs({ formValues, handleInputChange }) {
  return (
    <div className="input-group">
      <ol id="user-input">
        <ListItems
          name="initial-investment"
          value={formValues["initial-investment"]}
          handleInputChange={handleInputChange}
        >
          Initial Investment
        </ListItems>
        <ListItems
          name="annual-investment"
          value={formValues["annual-investment"]}
          handleInputChange={handleInputChange}
        >
          Annual Investment
        </ListItems>
        <ListItems
          name="expected-return"
          value={formValues["expected-return"]}
          handleInputChange={handleInputChange}
        >
          Expected Return
        </ListItems>
        <ListItems
          name="duration"
          value={formValues["duration"]}
          handleInputChange={handleInputChange}
        >
          Duration
        </ListItems>
      </ol>
    </div>
  );
}
