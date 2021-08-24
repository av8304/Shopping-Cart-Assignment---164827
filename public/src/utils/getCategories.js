export const getCategories = () => {
  return fetch("http://localhost:3001/category").then((data) => data.json());
};
