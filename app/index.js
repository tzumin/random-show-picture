"use strict";
class RandomImgComponent {
  constructor() {
    this.imgElement = document.createElement('img');
    this.viewWidth = window.innerWidth;
    this.viewHeight = window.innerHeight;
    this.baseSize = this.viewWidth * 0.75 > this.viewHeight ? Math.floor(this.viewHeight / 3) : Math.floor(this.viewWidth / 4);
    this.imgSum = 12;
    this.init();
  }
  init() {
    const boxElement = document.createElement('div');
    boxElement.id = 'content';
    boxElement.style.width = this.baseSize * 4;
    boxElement.style.height = this.baseSize * 3;
    boxElement.style.backgroundColor = "#eee";
    boxElement.style.margin = "auto";
    this.boxElement = boxElement;
    document.body.appendChild(boxElement);
  }
}

var showPicture = new RandomImgComponent();
