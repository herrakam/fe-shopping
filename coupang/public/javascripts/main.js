import {
  categoryDropBoxEvent,
  searchBarDropBoxEvent,
  searchEngineEvent,
} from "./util.js";

function init() {
  searchBarDropBoxEvent();
  categoryDropBoxEvent();
  searchEngineEvent();
}
window.addEventListener("DOMContentLoaded", init);
