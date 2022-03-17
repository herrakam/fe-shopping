class DropBox {
  constructor($element) {
    this.element = $element;
    this.$tag = document.querySelector(`#${this.element}`);
  }
  showDropbox() {
    this.$tag.style.display = "block";
    // if (this.$tag.style.display === "none") {
    //   Object.assign(this.$tag.style, {
    //     display: "block",
    //   });
    // } else {
    //   Object.assign(this.$tag.style, {
    //     display: "none",
    //   });
    // }
  }
  hideDropbox() {
    this.$tag.style.display = "none";
  }
}
export class SearchBarDropBox extends DropBox {
  constructor($element) {
    super($element);
    this.$tag = document.querySelector(`#${this.element}`);
  }

  changeContentText(target) {
    const $searchBarContent = document.querySelector("#search-bar-content-id");
    $searchBarContent.innerHTML = target.innerHTML;
  }
}

export class CategoryDropBox extends DropBox {
  constructor($element) {
    super($element);
  }
}
