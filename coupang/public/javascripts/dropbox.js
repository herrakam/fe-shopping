class DropBox {
  constructor($element) {
    this.element = $element;
  }
  showDropbox() {
    const $tag = document.querySelector(`#${this.element}`);
    if ($tag.style.display === "none") {
      Object.assign($tag.style, {
        display: "block",
      });
    } else {
      Object.assign($tag.style, {
        display: "none",
      });
    }
    // const $content = document.createElement("div");
    // $content.className += `${this.element}-content`;
    // console.log($content);
    // for (let i = 0; i < length; i++) {
    //   $tag.appendChild($content);
    //   console.log(`콘텐츠 추가됨`);
    // }
  }
}
export default DropBox;
