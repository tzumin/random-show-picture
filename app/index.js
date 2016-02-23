"use strict";
class RandomImgComponent {
  constructor() {
    this.imgElement = document.createElement('img');
    this.viewWidth = window.innerWidth;
    this.viewHeight = window.innerHeight;
    this.baseSize = this.viewWidth * 0.75 > this.viewHeight ? Math.floor(this.viewHeight / 3) : Math.floor(this.viewWidth / 4);
    this.imgSum = 12;
    this.imgAssignList = this.setImgOrder();
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
  setImgOrder() {
    const imageList = {};
    const imgAssignFlagObj = {};
    for(let i = this.imgSum - 1; i >= 0 ; i--) {
      const index = this.randomNumber(imgAssignFlagObj);
      const newImg = this.imgElement.cloneNode();
      newImg.src = 'images/' + i + '.png';
      imageList[i] = {
        element: newImg,
        positionIndex: index
      };
    }
    return imageList;
  }
  randomNumber(imgAssignFlagObj) {
    let randomNum = Math.floor(Math.random() * 12);
    while(imgAssignFlagObj.hasOwnProperty(randomNum)) {
      randomNum = Math.floor(Math.random() * 12);
    }
    imgAssignFlagObj[randomNum] = true;
    return randomNum;
  }
}

var showPicture = new RandomImgComponent();
