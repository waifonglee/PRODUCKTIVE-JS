var Sprite = function(img, frameset, size, pos) {
	this.frameset = frameset;
	this._size = size; //size of character
	this.pos = pos; //position of character
	this.num_row = frameset.length; 
	this.img = img; //spritesheet
	this._index = 0; //index of frame at frameset
	this._frame = this.frameset[this._index];
	this.count = 0; 
	var _this = this;

	this.getChar = function() {
		window.requestAnimationFrame(move);
		
	};

	function drawFrame() {
		var crop_x = Math.floor(_this._frame % _this.num_row ) * _this._size[0];
		var crop_y = Math.floor(_this._frame / _this.num_row ) * _this._size[1];
		cxt_fg.drawImage(_this.img, crop_x, crop_y, _this._size[0], _this._size[1], _this.pos[0], _this.pos[1], _this._size[0], _this._size[1]);

	}

	function move() {
		_this.count++;
		if (_this.count < 10) {
			window.requestAnimationFrame(move);
			return;
		}

		_this.count = 0;
		cxt_fg.clearRect(_this.pos[0], _this.pos[1], _this._size[0], _this._size[1]);
		drawFrame();
		_this._index ++;

		if (_this._index == _this.num_row - 1) {
			_this._index = 0;
		}

		_this._frame = _this.frameset[_this._index];
		window.requestAnimationFrame(move); 
	}
	

};