export const getProducts = () => {
  return fetch("/product").then((data) => data.json());
};
