(function() {

	"use strict";
	var album = $('.js-album-list-ul>li');
	var albumList = [];


	var saveFile = function(data, fileName) {
		var blob = new Blob([data], {
			type: 'text/plain'
		});
		var elem = window.document.createElement('a');
		elem.href = window.URL.createObjectURL(blob);
		elem.download = fileName;
		elem.click();
	};
	var saveUrl = function(url, fileName) {
		if(!fileName){
			fileName=url.substring(url.lastIndexOf('/')+1,url.length)
		}
		var elem = window.document.createElement('a');
		elem.href = url;
		elem.download = fileName;
		elem.click();
	};




})();