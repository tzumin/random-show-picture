"use strict";
class RandomImgComponent {
  constructor() {
    this.imgElement = document.createElement('img');
    this.viewWidth = window.innerWidth;
    this.viewHeight = window.innerHeight;
    this.baseSize = this.viewWidth * 0.75 > this.viewHeight ? Math.floor(this.viewHeight / 3) : Math.floor(this.viewWidth / 4);
    this.imgSum = 12;
    this.imgAssignList = this.setImgOrder();
    this.showImgIndex = 0;
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
  setImgStyle(imgIndex) {
    var newImg = this.imgAssignList[imgIndex]['element'];
    var imgPositionIndex = this.imgAssignList[imgIndex]['positionIndex'];
    newImg.width = this.baseSize;
    newImg.height = this.baseSize;
    newImg.style.position = "absolute";
    newImg.style.marginLeft = this.baseSize * (imgPositionIndex % 4);
    newImg.style.marginTop = this.baseSize * Math.floor(imgPositionIndex / 4);
  }
  addImg() {
    this.setImgStyle(this.showImgIndex);
    var img = this.imgAssignList[this.showImgIndex]['element'];
    this.boxElement.appendChild(img);
    this.showImgIndex = this.showImgIndex + 1;
    if (this.showImgIndex < this.imgSum) {
      this.startRenderPhoto();
    }
  }
  startRenderPhoto() {
    setTimeout(()=>{
      this.addImg();
    }, 1000);
  }
}

var showPicture = new RandomImgComponent();
showPicture.startRenderPhoto();
