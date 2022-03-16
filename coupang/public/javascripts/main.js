import DropBox from "./dropbox.js";
import SearchBarDropBox from "./searchbarDropbox.js";
function init() {
  const searchBarDropbox = new SearchBarDropBox("search-bar-dropbox-id");
  const $searchBarDropbox = document.querySelector(".search-bar-content");
  const $dropboxBtn = document.querySelector(`#down-btn`);
  $dropboxBtn.addEventListener("click", function () {
    searchBarDropbox.showDropbox();
  });
  $searchBarDropbox.addEventListener("click", function () {
    searchBarDropbox.showDropbox();
  });
}
window.addEventListener("DOMContentLoaded", init);
