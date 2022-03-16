import { categoryDropBoxEvent, searchBarDropBoxEvent } from "./util.js";

function init() {
  searchBarDropBoxEvent();
  categoryDropBoxEvent();
}
window.addEventListener("DOMContentLoaded", init);
