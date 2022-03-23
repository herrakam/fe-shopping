import {
  categoryDropBoxEvent,
  getData,
  searchBarDropBoxEvent,
  searchEngineEvent,
} from "./util.js";

function init() {
  searchBarDropBoxEvent();
  categoryDropBoxEvent();
  searchEngineEvent();
  getData("/data").then((data) => {
    console.log(data);
  });
}
window.addEventListener("DOMContentLoaded", init);
