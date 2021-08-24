export const getBanners = () => {
  return fetch("http://localhost:3001/banner").then((data) => data.json());
};
