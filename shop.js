var Shop = function() {
	this.height = 128;
	this.items = [];
	this.cur_count = 0;
	var _this = this;

	this.loadItems = function() {
		addItem([25,26,27,28,29,30,31,32], [64, 64], [100, 100], 20);
		addButtons();
	}

	this.animateItem = function(id) {
		var _id = parseInt(id.charAt(1));
		var info = _this.items[_id];
		var char = new Sprite(spriteImage, info.frameset, info.size, info.pos);
		char.getChar();

	}

	function addItem(frameset, size, pos, price) {
		var info = {
			"frameset": frameset,
			"size": size,
			"pos":pos,
			"id": _this.cur_count,
			"price": price,
			"button_top": 0, //top margin of button
			"button_left": 0 //left margin of button
		}
		info.button_top = Math.floor(info.id / 3) * (128 + 30) + 128; 
		info.button_left = Math.floor(info.id % 3) * (128);
		_this.cur_count++;
		_this.items.push(info);
	}


	function addButtons() {
		for (var i = 0; i < _this.cur_count; i++) {
			var curr = _this.items[i];
			var button = document.createElement("button");
			button.style.marginTop = "" + curr.button_top + "px";
			button.style.marginLeft = "" + curr.button_left + "px";
			button.id = "s" + curr.id;
			button.className = "itemButtons";
			button.innerHTML = curr.price;
			button_contain.appendChild(button);
		}

	}

}