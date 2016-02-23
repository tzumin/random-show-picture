/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	class RandomImgComponent {
	  constructor() {
	    // http://www.html5rocks.com/en/tutorials/service-worker/introduction/
	    // better offline handle services
	    this.imgElement = document.createElement('img');
	    this.viewWidth = window.innerWidth;
	    this.viewHeight = window.innerHeight;
	    this.baseSize = this.viewWidth * 0.75 > this.viewHeight ? Math.floor(this.viewHeight / 3) : Math.floor(this.viewWidth / 4);
	    this.imgSum = 12;
	    this.imgAssignList = this.setImgOrder();
	    this.showImgIndex = 0;
	    this.init();
	    this.mobileHandle();
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
	    for (let i = this.imgSum - 1; i >= 0; i--) {
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
	    while (imgAssignFlagObj.hasOwnProperty(randomNum)) {
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
	  mobileHandle() {
	    window.addEventListener("orientationchange", function () {
	      var scaleRatio = window.innerWidth / this.viewWidth;
	      document.getElementById('content').style.transform = 'scale(' + scaleRatio + ')';
	    });
	  }
	  startRenderPhoto() {
	    setTimeout(() => {
	      this.addImg();
	    }, 1000);
	  }
	}

	var showPicture = new RandomImgComponent();
	showPicture.startRenderPhoto();

/***/ }
/******/ ]);