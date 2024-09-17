import { categoriesTypesArray } from "../constants/Constants.js";

export const categories = () => {
  return `
    <select name="categories" id="categories">
    
    ${categoriesTypesArray.map(
      (item) => `<option value="${item}">${item}</option>`
    )}
    
    </select>
    `;
};
