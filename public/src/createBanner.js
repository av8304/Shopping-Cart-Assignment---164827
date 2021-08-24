import { getBanners } from "./utils/getBanners";

export const createBanner = () => {
  const carouselContainer = document.querySelector("#carousel-container");
  const bannerList = [];

  getBanners()
    .then((data) => {
      bannerList = data;
      createBannerUtil(carouselContainer, bannerList);
    })
    .catch((err) => {
      console.log(err);
    });
};

createBannerUtil = (carouselContainer, bannerList) => {
  bannerList.forEach((data) => {
    let div = document.createElement("div");
    let img = document.createElement("img");

    div.classList.add("carousel-item");
    if (data.order == 1) div.classList.add("active");

    img.src = data.bannerImageUrl;
    img.alt = data.bannerImageAlt;
    img.classList.add("d-block", "w-100");

    div.appendChild(img);
    carouselContainer.appendChild(img);
  });
};
