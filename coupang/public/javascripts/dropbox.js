class DropBox {
  constructor($element) {
    this.element = $element;
    this.$tag = document.querySelector(`#${this.element}`);
  }
  showDropbox() {
    this.$tag.style.display = "block";
    // this.$tqg.style.maxheight = "100%";
  }
  hideDropbox() {
    this.$tag.style.display = "none";
    // this.$tqg.style.maxheight = "0";
  }
}
export class SearchBarDropBox extends DropBox {
  constructor($element) {
    super($element);
    this.$tag = document.querySelector(`#${this.element}`);
  }
  toggleDropbox() {
    this.$tag.style.display === "none"
      ? this.showDropbox()
      : this.hideDropbox();
  }
  changeContentText(target) {
    const $searchBarContent = document.querySelector(".search-bar-content");
    $searchBarContent.innerHTML = target.innerHTML;
  }
}

export class CategoryDropBox extends DropBox {
  constructor($element) {
    super($element);
  }
}
