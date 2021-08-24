import { getCategories } from "./utils/getCategories";

export const displayCategories = () => {
  const categoriesContainer = document.querySelector("#categories-container");
  let categories = [];

  getCategories()
    .then((data) => {
      categories = data;
      console.log("Getting the categories-----------", categories);
      displayCategoriesUtil(categoriesContainer, categories);
    })
    .catch((err) => {
      console.log(err);
    });
};

const displayCategoriesUtil = (categoriesContainer, categories) => {
  let categoryArray = categories
    .filter((val) => val.enabled)
    .forEach((val, index) => {
      let cardDiv = document.createElement("div");
      let rowDiv = document.createElement("div");
      let colDivFirst = document.createElement("div");
      let colDivSecond = document.createElement("div");
      let cardBodyDiv = document.createElement("div");
      let image = document.createElement("img");
      let h5 = document.createElement("h5");
      let para = document.createElement("p");

      cardDiv.classList.add("card", "category-card", "mb-5");
      cardDiv.style = "max-width: 100%";
      cardDiv.id = val.order;

      rowDiv.classList.add("row", "g-0");

      colDivFirst.classList.add("col-md-4");

      image.src = val.imageUrl;
      image.alt = val.name;
      image.classList.add("img-fluid", "rounded-start", "p-2");

      colDivSecond.classList.add("col-md-8");

      cardBodyDiv.classList.add("card-body", "center-items");

      h5.classList.add("card-title");
      h5.innerText = val.name;

      para.classList.add("card-text");
      para.innerText = val.description;

      colDivFirst.appendChild(image);
      cardBodyDiv.appendChild(h5);
      cardBodyDiv.appendChild(para);
      colDivSecond.appendChild(cardBodyDiv);

      if (index % 2 == 0) {
        rowDiv.appendChild(colDivFirst);
        rowDiv.appendChild(colDivSecond);
      } else {
        rowDiv.appendChild(colDivSecond);
        rowDiv.appendChild(colDivFirst);
      }

      cardDiv.appendChild(rowDiv);

      categoriesContainer.appendChild(cardDiv);
    });
};
