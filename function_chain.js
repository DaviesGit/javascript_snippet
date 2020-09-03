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



// let chain = [
// 	function(param, callback) {
// 		callback(param);
// 	},
// 	function(param, callback) {
// 		callback(param);
// 	},
// 	function(param, callback) {
// 		callback(param);
// 	},
// 	function(param, callback) {
// 		callback(param);
// 	},
// ];

function run_chain(chain, param, callback, delay) {
	!delay && (delay = 0);
	!callback && (callback = function() {});
	async_loop(chain, function(i, finish) {
		fun = chain[i];
		setTimeout(funtion() {
			fun(param, function(result) {
				param = result;
				finish();
			});
		}, delay);
	}, function() {
		callback(param);
	});
}