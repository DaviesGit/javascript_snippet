function async_loop(array, proccess, callback) {
	let len = array.length;
	let index = 0;
	!callback && (callback = function() {});

	function _loop() {
		if (index >= len)
			return callback();
		proccess(index, function() {
			++index;
			_loop();
		});
	}
	_loop();
}

