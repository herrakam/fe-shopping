import { CategoryDropBox, SearchBarDropBox } from "./dropbox.js";

export function searchBarDropBoxEvent() {
  const searchBarDropbox = new SearchBarDropBox("search-bar-dropbox-id");
  const $searchBarDropbox = document.querySelector(".search-bar-content");
  const $dropboxContents = document.querySelectorAll(
    ".search-bar-dropbox-content"
  );
  const $dropboxBtn = document.querySelector(`#down-btn`);
  $dropboxBtn.addEventListener("click", function () {
    searchBarDropbox.showDropbox();
  });
  $searchBarDropbox.addEventListener("click", function () {
    searchBarDropbox.showDropbox();
  });
  $dropboxContents.forEach((content) => {
    content.addEventListener("click", function (e) {
      searchBarDropbox.changeContentText(e.target);
    });
  });
}

export function categoryDropBoxEvent() {
  const categoryDropbox = new CategoryDropBox("category-dropbox-id");
  const $category = document.querySelector("#category");
  const $categoryDropbox = document.querySelector("#category-dropbox-id");
  $category.addEventListener("mouseover", function () {
    categoryDropbox.showDropbox();
  });
  $category.addEventListener("mouseout", function () {
    categoryDropbox.hideDropbox();
  });
  //   $categoryDropbox.addEventListener("mouseover", function () {
  //     categoryDropbox.showDropbox();
  //   });
}
