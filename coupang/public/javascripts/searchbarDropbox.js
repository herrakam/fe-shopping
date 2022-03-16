import dropBox from "./dropbox.js";

class SearchBarDropBox extends dropBox {
  constructor($element) {
    super($element);
  }
  showDropbox() {
    const $tag = document.querySelector(`#${this.element}`);
    if ($tag.style.display === "none") {
      Object.assign($tag.style, {
        display: "block",
        height: "508px",
      });
    } else {
      Object.assign($tag.style, {
        display: "none",
        height: "0px",
      });
    }
  }
}
export default SearchBarDropBox;
